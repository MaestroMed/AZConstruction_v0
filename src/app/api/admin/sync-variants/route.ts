import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { productFamilies } from "@/lib/data/product-families";

// POST /api/admin/sync-variants
// Synchronise les variants statiques (product-families.ts) vers la DB
export async function POST() {
  try {
    let synced = 0;
    let skipped = 0;
    const results: { slug: string; status: string; variantsCount: number }[] = [];

    for (const staticFamily of productFamilies) {
      // Find the DB family
      const dbFamily = await prisma.productFamily.findUnique({
        where: { slug: staticFamily.slug },
      });

      if (!dbFamily) {
        skipped++;
        results.push({ slug: staticFamily.slug, status: "not_found", variantsCount: 0 });
        continue;
      }

      // Only sync variants if DB has no variants yet (preserve manually added ones)
      const existingVariants = dbFamily.variants as { id: string }[] | null;
      if (existingVariants && existingVariants.length > 0) {
        // Merge: add any static variant that doesn't exist in DB
        const dbVariantIds = existingVariants.map((v) => v.id);
        const newVariants = staticFamily.variants.filter((sv) => !dbVariantIds.includes(sv.id));
        
        if (newVariants.length > 0) {
          const merged = [...existingVariants, ...newVariants];
          await prisma.productFamily.update({
            where: { id: dbFamily.id },
            data: { variants: merged },
          });
          synced++;
          results.push({ slug: staticFamily.slug, status: "merged", variantsCount: merged.length });
        } else {
          results.push({ slug: staticFamily.slug, status: "already_synced", variantsCount: existingVariants.length });
        }
        continue;
      }

      // DB has no variants — seed from static data
      await prisma.productFamily.update({
        where: { id: dbFamily.id },
        data: {
          variants: staticFamily.variants.map((v) => ({
            id: v.id,
            name: v.name,
            description: v.description,
            features: v.features,
            imageUrl: v.imageUrl ?? null,
            startingPrice: v.startingPrice ?? "",
          })),
          // Also sync other static fields if not set
          tagline: dbFamily.tagline ?? staticFamily.tagline,
          longDescription: dbFamily.longDescription ?? staticFamily.longDescription,
          features: dbFamily.features.length > 0 ? dbFamily.features : staticFamily.features,
          benefits: (dbFamily.benefits as unknown[] | null)?.length ? dbFamily.benefits : staticFamily.benefits,
          specifications: (dbFamily.specifications as unknown[] | null)?.length ? dbFamily.specifications : staticFamily.specifications,
          unit: dbFamily.unit ?? staticFamily.unit,
        },
      });

      synced++;
      results.push({ slug: staticFamily.slug, status: "synced", variantsCount: staticFamily.variants.length });
    }

    return NextResponse.json({
      success: true,
      message: `${synced} familles synchronisées, ${skipped} non trouvées en DB.`,
      results,
    });
  } catch (error) {
    console.error("Sync variants error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la synchronisation" },
      { status: 500 }
    );
  }
}
