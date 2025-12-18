import { PrismaClient, OptionType } from "@prisma/client";

export const productOptions = [
  // Dimensions
  {
    nom: "Largeur",
    slug: "largeur",
    type: OptionType.number,
    global: true,
    ordre: 1,
  },
  {
    nom: "Hauteur",
    slug: "hauteur",
    type: OptionType.number,
    global: true,
    ordre: 2,
  },
  {
    nom: "Longueur",
    slug: "longueur",
    type: OptionType.number,
    global: true,
    ordre: 3,
  },
  {
    nom: "Profondeur",
    slug: "profondeur",
    type: OptionType.number,
    global: false,
    ordre: 4,
  },

  // Apparence
  {
    nom: "Couleur RAL",
    slug: "couleur-ral",
    type: OptionType.color,
    global: true,
    ordre: 10,
  },
  {
    nom: "Finition",
    slug: "finition",
    type: OptionType.choice,
    global: true,
    ordre: 11,
    valeursPossibles: [
      "Thermolaquage mat",
      "Thermolaquage satiné",
      "Thermolaquage brillant",
      "Galvanisation",
      "Acier brut",
      "Inox brossé",
      "Inox poli",
    ],
  },

  // Verre
  {
    nom: "Type de verre",
    slug: "type-verre",
    type: OptionType.choice,
    global: false,
    ordre: 20,
    valeursPossibles: [
      "Verre feuilleté 44.2",
      "Verre feuilleté 55.2",
      "Verre feuilleté 66.2",
      "Verre trempé 8mm",
      "Verre trempé 10mm",
      "Verre opaque",
      "Verre dépoli",
    ],
  },
  {
    nom: "Remplissage",
    slug: "remplissage",
    type: OptionType.choice,
    global: false,
    ordre: 21,
    valeursPossibles: [
      "Verre",
      "Barreaux verticaux",
      "Barreaux horizontaux",
      "Câbles inox",
      "Tôle perforée",
      "Tôle pleine",
      "Lames aluminium",
    ],
  },

  // Automatisation
  {
    nom: "Motorisation",
    slug: "motorisation",
    type: OptionType.boolean,
    global: false,
    ordre: 30,
  },
  {
    nom: "Type de motorisation",
    slug: "type-motorisation",
    type: OptionType.choice,
    global: false,
    ordre: 31,
    valeursPossibles: [
      "Motorisation enterrée",
      "Motorisation à bras",
      "Motorisation à vérin",
      "Motorisation coulissante",
    ],
  },
  {
    nom: "Télécommande",
    slug: "telecommande",
    type: OptionType.boolean,
    global: false,
    ordre: 32,
  },

  // Serrurerie
  {
    nom: "Serrure",
    slug: "serrure",
    type: OptionType.choice,
    global: false,
    ordre: 40,
    valeursPossibles: [
      "Standard",
      "Multipoints 3 points",
      "Multipoints 5 points",
      "Électrique",
      "Biométrique",
      "À code",
    ],
  },
  {
    nom: "Poignée",
    slug: "poignee",
    type: OptionType.choice,
    global: false,
    ordre: 41,
    valeursPossibles: [
      "Béquille standard",
      "Béquille design",
      "Poignée coquille",
      "Barre de tirage",
      "Bandeau anti-panique",
    ],
  },

  // Escaliers spécifiques
  {
    nom: "Type de marches",
    slug: "type-marches",
    type: OptionType.choice,
    global: false,
    ordre: 50,
    valeursPossibles: [
      "Tôle larmée",
      "Caillebotis",
      "Bois massif chêne",
      "Bois massif hêtre",
      "Verre",
      "Pierre naturelle",
    ],
  },
  {
    nom: "Nombre de marches",
    slug: "nombre-marches",
    type: OptionType.number,
    global: false,
    ordre: 51,
  },
  {
    nom: "Sens de montée",
    slug: "sens-montee",
    type: OptionType.choice,
    global: false,
    ordre: 52,
    valeursPossibles: ["Gauche", "Droite"],
  },

  // Portails spécifiques
  {
    nom: "Type d'ouverture",
    slug: "type-ouverture",
    type: OptionType.choice,
    global: false,
    ordre: 60,
    valeursPossibles: [
      "Battant 1 vantail",
      "Battant 2 vantaux",
      "Coulissant",
      "Coulissant autoportant",
    ],
  },
  {
    nom: "Portillon intégré",
    slug: "portillon-integre",
    type: OptionType.boolean,
    global: false,
    ordre: 61,
  },

  // Options diverses
  {
    nom: "Éclairage LED intégré",
    slug: "eclairage-led",
    type: OptionType.boolean,
    global: false,
    ordre: 70,
  },
  {
    nom: "Main courante",
    slug: "main-courante",
    type: OptionType.choice,
    global: false,
    ordre: 71,
    valeursPossibles: [
      "Acier plat",
      "Tube rond inox",
      "Tube carré",
      "Bois massif",
      "Sans main courante",
    ],
  },
];

export async function seedOptions(prisma: PrismaClient) {
  console.log("⚙️ Seeding product options...");

  for (const option of productOptions) {
    await prisma.productOption.upsert({
      where: { slug: option.slug },
      update: option,
      create: option,
    });
  }

  console.log(`  ✅ ${productOptions.length} product options created`);
}




