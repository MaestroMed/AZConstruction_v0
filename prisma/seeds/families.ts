import { PrismaClient } from "@prisma/client";

export const productFamilies = [
  {
    nom: "Garde-corps",
    slug: "garde-corps",
    description: "Garde-corps en verre, câbles ou barreaux pour terrasses, balcons et escaliers",
    imageUrl: "/images/families/garde-corps.jpg",
    ordre: 1,
  },
  {
    nom: "Escaliers",
    slug: "escaliers",
    description: "Escaliers droits, quart-tournant, hélicoïdaux en acier et bois",
    imageUrl: "/images/families/escaliers.jpg",
    ordre: 2,
  },
  {
    nom: "Portes",
    slug: "portes",
    description: "Portes en acier et profilés Jansen, portes blindées, portes coupe-feu",
    imageUrl: "/images/families/portes.jpg",
    ordre: 3,
  },
  {
    nom: "Fenêtres",
    slug: "fenetres",
    description: "Fenêtres et châssis en profilés Jansen, verrières d'atelier",
    imageUrl: "/images/families/fenetres.jpg",
    ordre: 4,
  },
  {
    nom: "Grilles de ventilation",
    slug: "grilles-ventilation",
    description: "Grilles techniques et décoratives pour ventilation et aération",
    imageUrl: "/images/families/grilles.jpg",
    ordre: 5,
  },
  {
    nom: "Portails",
    slug: "portails",
    description: "Portails battants et coulissants en aluminium et acier",
    imageUrl: "/images/families/portails.jpg",
    ordre: 6,
  },
  {
    nom: "Clôtures",
    slug: "clotures",
    description: "Clôtures résidentielles et industrielles en aluminium et acier",
    imageUrl: "/images/families/clotures.jpg",
    ordre: 7,
  },
];

export async function seedFamilies(prisma: PrismaClient) {
  console.log("📁 Seeding product families...");

  for (const family of productFamilies) {
    await prisma.productFamily.upsert({
      where: { slug: family.slug },
      update: family,
      create: family,
    });
  }

  console.log(`  ✅ ${productFamilies.length} product families created`);
}






