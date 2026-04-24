/**
 * Megaswarm products refactor — migration de données
 *
 * Lit les anciennes données (variants Json, heroVideoUrl, ProductFamilyImage)
 * et les écrit dans les nouvelles tables (ProductVariant, ProductFamilyAsset,
 * ProductVariantAsset).
 *
 * Idempotent : peut être relancé sans doublonner (upsert par slug).
 *
 * Usage : node scripts/migrate-products-megaswarm.mjs
 */
import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const log = (msg) => console.log(`[migrate] ${msg}`);
const warn = (msg) => console.warn(`[migrate][WARN] ${msg}`);

async function migrateFamily(fam) {
  log(`Family: ${fam.slug}`);

  // ── 1. Migrate variants (JSON → ProductVariant rows) ────────────
  const legacyVariants = Array.isArray(fam.variants) ? fam.variants : [];
  const variantSlugMap = new Map(); // legacy id → DB variant row

  for (const [index, lv] of legacyVariants.entries()) {
    if (!lv?.id || !lv?.name) {
      warn(`  skip variant sans id/name: ${JSON.stringify(lv)}`);
      continue;
    }
    const variantSlug = String(lv.id);

    const variant = await prisma.productVariant.upsert({
      where: { familyId_slug: { familyId: fam.id, slug: variantSlug } },
      update: {
        name: String(lv.name),
        description: lv.description ?? null,
        features: Array.isArray(lv.features) ? lv.features : [],
        startingPrice: lv.startingPrice ?? null,
        ordre: index,
        active: true,
      },
      create: {
        familyId: fam.id,
        slug: variantSlug,
        name: String(lv.name),
        description: lv.description ?? null,
        features: Array.isArray(lv.features) ? lv.features : [],
        startingPrice: lv.startingPrice ?? null,
        ordre: index,
        active: true,
      },
    });
    variantSlugMap.set(variantSlug, variant);
    log(`  ✓ variant: ${variant.slug}`);

    // ── 1b. Migrate variant assets (imageUrl + images + heroVideoUrl) ──
    const variantAssets = [];

    // heroVideoUrl → HERO video
    if (lv.heroVideoUrl) {
      variantAssets.push({
        type: "VIDEO",
        role: "HERO",
        url: String(lv.heroVideoUrl),
        alt: `${lv.name} — vidéo hero`,
        ordre: 0,
      });
    }

    // imageUrl (single) → CARD image
    if (lv.imageUrl) {
      variantAssets.push({
        type: "IMAGE",
        role: "CARD",
        url: String(lv.imageUrl),
        alt: lv.name,
        ordre: 0,
      });
    }

    // images[] → GALLERY
    if (Array.isArray(lv.images)) {
      lv.images.forEach((url, i) => {
        if (url && url !== lv.imageUrl) {
          variantAssets.push({
            type: "IMAGE",
            role: "GALLERY",
            url: String(url),
            alt: `${lv.name} ${i + 1}`,
            ordre: i,
          });
        }
      });
    }

    // Purge les assets existants du variant puis re-create (idempotent)
    await prisma.productVariantAsset.deleteMany({ where: { variantId: variant.id } });
    if (variantAssets.length > 0) {
      await prisma.productVariantAsset.createMany({
        data: variantAssets.map((a) => ({ ...a, variantId: variant.id })),
      });
      log(`    → ${variantAssets.length} asset(s) variant migrés`);
    }
  }

  // ── 2. Migrate family assets (heroImages + imageUrl + heroVideoUrl) ──
  const familyAssets = [];

  // heroVideoUrl → HERO video
  if (fam.heroVideoUrl) {
    familyAssets.push({
      type: "VIDEO",
      role: "HERO",
      url: String(fam.heroVideoUrl),
      alt: `${fam.nom} — vidéo hero`,
      ordre: 0,
    });
  }

  // imageUrl (thumbnail famille) → CARD
  if (fam.imageUrl) {
    familyAssets.push({
      type: "IMAGE",
      role: "CARD",
      url: String(fam.imageUrl),
      alt: fam.nom,
      ordre: 0,
    });
  }

  // heroImages (ProductFamilyImage table) → HERO carousel
  const legacyHeroImages = await prisma.productFamilyImage.findMany({
    where: { familyId: fam.id },
    orderBy: { ordre: "asc" },
  });
  legacyHeroImages.forEach((img, i) => {
    familyAssets.push({
      type: "IMAGE",
      role: "HERO",
      url: img.imageUrl,
      alt: img.alt || `${fam.nom} ${i + 1}`,
      ordre: img.ordre + 1, // +1 pour laisser la video en ordre 0
    });
  });

  // Purge existants puis re-create
  await prisma.productFamilyAsset.deleteMany({ where: { familyId: fam.id } });
  if (familyAssets.length > 0) {
    await prisma.productFamilyAsset.createMany({
      data: familyAssets.map((a) => ({ ...a, familyId: fam.id })),
    });
    log(`  → ${familyAssets.length} asset(s) famille migrés`);
  }
}

async function main() {
  log("Début migration Megaswarm produits");

  const families = await prisma.productFamily.findMany({
    orderBy: { ordre: "asc" },
  });
  log(`${families.length} familles à migrer`);

  for (const fam of families) {
    try {
      await migrateFamily(fam);
    } catch (err) {
      console.error(`[migrate][ERROR] Family ${fam.slug}:`, err);
    }
  }

  // Stats
  const variantCount = await prisma.productVariant.count();
  const familyAssetCount = await prisma.productFamilyAsset.count();
  const variantAssetCount = await prisma.productVariantAsset.count();

  log("");
  log("✓ Migration terminée");
  log(`  Variants: ${variantCount}`);
  log(`  Family assets: ${familyAssetCount}`);
  log(`  Variant assets: ${variantAssetCount}`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
