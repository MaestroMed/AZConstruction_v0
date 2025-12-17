import "dotenv/config";
import { PrismaClient, UserType, OptionType } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { hash } from "bcryptjs";

// Prisma 7 avec adaptateur PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seeding database...");

  // ============================================
  // ADMIN USER
  // ============================================
  const adminPassword = await hash("Admin123!", 12);
  const admin = await prisma.user.upsert({
    where: { email: "admin@azconstruction.fr" },
    update: {},
    create: {
      email: "admin@azconstruction.fr",
      passwordHash: adminPassword,
      type: UserType.admin,
      nom: "Admin",
      prenom: "AZ",
      validated: true,
      active: true,
    },
  });
  console.log("✅ Admin user created:", admin.email);

  // ============================================
  // PRODUCT FAMILIES
  // ============================================
  const families = [
    { nom: "Garde-corps", slug: "garde-corps", description: "Garde-corps en verre, câbles ou barreaux", ordre: 1 },
    { nom: "Escaliers", slug: "escaliers", description: "Escaliers droits, quart-tournant, hélicoïdaux", ordre: 2 },
    { nom: "Portes", slug: "portes", description: "Portes en acier et profilés Jansen", ordre: 3 },
    { nom: "Fenêtres", slug: "fenetres", description: "Fenêtres et châssis en profilés Jansen", ordre: 4 },
    { nom: "Grilles de ventilation", slug: "grilles-ventilation", description: "Grilles techniques et décoratives", ordre: 5 },
    { nom: "Portails", slug: "portails", description: "Portails battants et coulissants", ordre: 6 },
    { nom: "Clôtures", slug: "clotures", description: "Clôtures en aluminium et acier", ordre: 7 },
  ];

  for (const family of families) {
    await prisma.productFamily.upsert({
      where: { slug: family.slug },
      update: family,
      create: family,
    });
  }
  console.log("✅ Product families created");

  // ============================================
  // GLOBAL OPTIONS
  // ============================================
  const options = [
    { nom: "Largeur", slug: "largeur", type: OptionType.number, global: true, ordre: 1 },
    { nom: "Hauteur", slug: "hauteur", type: OptionType.number, global: true, ordre: 2 },
    { nom: "Longueur", slug: "longueur", type: OptionType.number, global: true, ordre: 3 },
    { nom: "Couleur RAL", slug: "couleur-ral", type: OptionType.color, global: true, ordre: 4 },
    { nom: "Finition", slug: "finition", type: OptionType.choice, global: true, ordre: 5, valeursPossibles: ["Thermolaquage mat", "Thermolaquage satiné", "Thermolaquage brillant", "Galvanisation", "Acier brut"] },
    { nom: "Type de verre", slug: "type-verre", type: OptionType.choice, global: false, ordre: 6, valeursPossibles: ["Verre feuilleté 44.2", "Verre feuilleté 55.2", "Verre trempé", "Verre opaque"] },
    { nom: "Motorisation", slug: "motorisation", type: OptionType.boolean, global: false, ordre: 7 },
    { nom: "Serrure", slug: "serrure", type: OptionType.choice, global: false, ordre: 8, valeursPossibles: ["Standard", "Multipoints", "Électrique", "Biométrique"] },
  ];

  for (const option of options) {
    await prisma.productOption.upsert({
      where: { slug: option.slug },
      update: option,
      create: option,
    });
  }
  console.log("✅ Product options created");

  // ============================================
  // RAL COLORS (Sélection des plus populaires)
  // ============================================
  const ralColors = [
    { code: "RAL 9016", nom: "Blanc signalisation", hex: "#F7FBFF" },
    { code: "RAL 9010", nom: "Blanc pur", hex: "#F5F5F5" },
    { code: "RAL 9005", nom: "Noir foncé", hex: "#0E0E10" },
    { code: "RAL 7016", nom: "Gris anthracite", hex: "#383E42" },
    { code: "RAL 7035", nom: "Gris clair", hex: "#C5C7C4" },
    { code: "RAL 7040", nom: "Gris fenêtre", hex: "#989EA1" },
    { code: "RAL 3000", nom: "Rouge feu", hex: "#A72920" },
    { code: "RAL 3020", nom: "Rouge signalisation", hex: "#C1121C" },
    { code: "RAL 5015", nom: "Bleu ciel", hex: "#007CB0" },
    { code: "RAL 5010", nom: "Bleu gentiane", hex: "#004F7C" },
    { code: "RAL 6005", nom: "Vert mousse", hex: "#0F4336" },
    { code: "RAL 6009", nom: "Vert sapin", hex: "#1F3A28" },
    { code: "RAL 8017", nom: "Brun chocolat", hex: "#44322D" },
    { code: "RAL 8019", nom: "Brun gris", hex: "#3E3B32" },
    { code: "RAL 1021", nom: "Jaune colza", hex: "#EEC900" },
    { code: "RAL 2004", nom: "Orange pur", hex: "#E25303" },
  ];

  for (const color of ralColors) {
    await prisma.rALColor.upsert({
      where: { code: color.code },
      update: color,
      create: color,
    });
  }
  console.log("✅ RAL colors created");

  // ============================================
  // SAMPLE PRODUCTS
  // ============================================
  const gardeCorpsFamily = await prisma.productFamily.findUnique({ where: { slug: "garde-corps" } });
  const escaliersFamily = await prisma.productFamily.findUnique({ where: { slug: "escaliers" } });
  const portailsFamily = await prisma.productFamily.findUnique({ where: { slug: "portails" } });

  if (gardeCorpsFamily) {
    await prisma.product.upsert({
      where: { slug: "garde-corps-verre-inox" },
      update: {},
      create: {
        slug: "garde-corps-verre-inox",
        nom: "Garde-corps Verre & Inox",
        description: "Garde-corps contemporain en verre feuilleté et poteaux inox 316",
        familleId: gardeCorpsFamily.id,
        prixBaseHT: 290,
        delaiFabrication: 21,
      },
    });
    await prisma.product.upsert({
      where: { slug: "garde-corps-cables" },
      update: {},
      create: {
        slug: "garde-corps-cables",
        nom: "Garde-corps Câbles",
        description: "Garde-corps design avec câbles inox tendus horizontaux",
        familleId: gardeCorpsFamily.id,
        prixBaseHT: 220,
        delaiFabrication: 14,
      },
    });
  }

  if (escaliersFamily) {
    await prisma.product.upsert({
      where: { slug: "escalier-helicoidal" },
      update: {},
      create: {
        slug: "escalier-helicoidal",
        nom: "Escalier Hélicoïdal Design",
        description: "Escalier hélicoïdal en acier avec marches bois ou métal",
        familleId: escaliersFamily.id,
        prixBaseHT: 8500,
        delaiFabrication: 42,
      },
    });
  }

  if (portailsFamily) {
    await prisma.product.upsert({
      where: { slug: "portail-elegance" },
      update: {},
      create: {
        slug: "portail-elegance",
        nom: "Portail Élégance",
        description: "Portail battant 2 vantaux design contemporain",
        familleId: portailsFamily.id,
        prixBaseHT: 2890,
        delaiFabrication: 28,
      },
    });
  }

  console.log("✅ Sample products created");

  // ============================================
  // SAMPLE CMS PAGES
  // ============================================
  await prisma.page.upsert({
    where: { slug: "conditions-livraison" },
    update: {},
    create: {
      slug: "conditions-livraison",
      title: "Conditions de Livraison",
      content: "<h2>Livraison sur toute la France</h2><p>Nous livrons nos produits sur l'ensemble du territoire français...</p>",
      published: true,
      metaTitle: "Conditions de Livraison | AZ Construction",
      metaDescription: "Découvrez nos conditions de livraison pour vos ouvrages métalliques sur mesure.",
    },
  });

  console.log("✅ CMS pages created");
  console.log("🎉 Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
