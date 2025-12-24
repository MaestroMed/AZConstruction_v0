import { PrismaClient } from "@prisma/client";

// Produits par famille avec leurs configurations
export const productsByFamily = {
  "garde-corps": [
    {
      slug: "garde-corps-verre-inox",
      nom: "Garde-corps Verre & Inox",
      description: "Garde-corps contemporain en verre feuilleté et poteaux inox 316. Design épuré pour terrasses et balcons.",
      prixBaseHT: 290,
      poidsBase: 25,
      delaiFabrication: 21,
      imageUrl: "/images/products/garde-corps-verre.jpg",
    },
    {
      slug: "garde-corps-cables",
      nom: "Garde-corps Câbles",
      description: "Garde-corps design avec câbles inox tendus horizontaux. Idéal pour les vues dégagées.",
      prixBaseHT: 220,
      poidsBase: 18,
      delaiFabrication: 14,
      imageUrl: "/images/products/garde-corps-cables.jpg",
    },
    {
      slug: "garde-corps-barreaux",
      nom: "Garde-corps Barreaux",
      description: "Garde-corps classique avec barreaux verticaux en acier ou aluminium. Robuste et intemporel.",
      prixBaseHT: 180,
      poidsBase: 22,
      delaiFabrication: 14,
      imageUrl: "/images/products/garde-corps-barreaux.jpg",
    },
    {
      slug: "garde-corps-tole-perforee",
      nom: "Garde-corps Tôle Perforée",
      description: "Garde-corps moderne avec panneaux en tôle perforée design. Motifs personnalisables.",
      prixBaseHT: 260,
      poidsBase: 28,
      delaiFabrication: 21,
      imageUrl: "/images/products/garde-corps-tole.jpg",
    },
  ],
  escaliers: [
    {
      slug: "escalier-helicoidal",
      nom: "Escalier Hélicoïdal",
      description: "Escalier hélicoïdal en acier avec marches bois ou métal. Gain de place et esthétique unique.",
      prixBaseHT: 8500,
      poidsBase: 350,
      delaiFabrication: 42,
      imageUrl: "/images/products/escalier-helicoidal.jpg",
    },
    {
      slug: "escalier-droit",
      nom: "Escalier Droit",
      description: "Escalier droit limon central ou double limons. Marches bois, verre ou métal.",
      prixBaseHT: 4500,
      poidsBase: 280,
      delaiFabrication: 28,
      imageUrl: "/images/products/escalier-droit.jpg",
    },
    {
      slug: "escalier-quart-tournant",
      nom: "Escalier Quart Tournant",
      description: "Escalier avec un angle à 90°. Structure acier avec marches personnalisables.",
      prixBaseHT: 5800,
      poidsBase: 320,
      delaiFabrication: 35,
      imageUrl: "/images/products/escalier-quart-tournant.jpg",
    },
    {
      slug: "escalier-deux-quarts-tournants",
      nom: "Escalier Deux Quarts Tournants",
      description: "Escalier avec deux paliers intermédiaires. Idéal pour les grandes hauteurs.",
      prixBaseHT: 7200,
      poidsBase: 380,
      delaiFabrication: 42,
      imageUrl: "/images/products/escalier-2qt.jpg",
    },
    {
      slug: "escalier-industriel",
      nom: "Escalier Industriel",
      description: "Escalier technique avec marches caillebotis ou tôle larmée. Usage intensif.",
      prixBaseHT: 3200,
      poidsBase: 400,
      delaiFabrication: 21,
      imageUrl: "/images/products/escalier-industriel.jpg",
    },
  ],
  portes: [
    {
      slug: "porte-acier-vitree",
      nom: "Porte Acier Vitrée",
      description: "Porte d'entrée en acier avec vitrage. Style atelier ou contemporain.",
      prixBaseHT: 2400,
      poidsBase: 85,
      delaiFabrication: 21,
      imageUrl: "/images/products/porte-vitree.jpg",
    },
    {
      slug: "porte-blindee",
      nom: "Porte Blindée",
      description: "Porte blindée haute sécurité avec certification A2P. Finition personnalisable.",
      prixBaseHT: 3800,
      poidsBase: 120,
      delaiFabrication: 28,
      imageUrl: "/images/products/porte-blindee.jpg",
    },
    {
      slug: "porte-coupe-feu",
      nom: "Porte Coupe-feu",
      description: "Porte coupe-feu EI30 à EI120. Conformité normes incendie.",
      prixBaseHT: 1800,
      poidsBase: 95,
      delaiFabrication: 21,
      imageUrl: "/images/products/porte-coupe-feu.jpg",
    },
    {
      slug: "porte-jansen",
      nom: "Porte Profilés Jansen",
      description: "Porte en profilés acier Jansen®. Finesse et élégance des lignes.",
      prixBaseHT: 4200,
      poidsBase: 75,
      delaiFabrication: 35,
      imageUrl: "/images/products/porte-jansen.jpg",
    },
  ],
  fenetres: [
    {
      slug: "verriere-atelier",
      nom: "Verrière Atelier",
      description: "Verrière style atelier avec profilés acier fins. Apport de lumière optimal.",
      prixBaseHT: 1200,
      poidsBase: 45,
      delaiFabrication: 21,
      imageUrl: "/images/products/verriere-atelier.jpg",
    },
    {
      slug: "chassis-fixe",
      nom: "Châssis Fixe",
      description: "Châssis fixe en acier ou aluminium. Sur mesure pour toutes dimensions.",
      prixBaseHT: 650,
      poidsBase: 30,
      delaiFabrication: 14,
      imageUrl: "/images/products/chassis-fixe.jpg",
    },
    {
      slug: "fenetre-jansen",
      nom: "Fenêtre Profilés Jansen",
      description: "Fenêtre ouvrant en profilés Jansen®. Performance thermique et esthétique.",
      prixBaseHT: 1800,
      poidsBase: 55,
      delaiFabrication: 28,
      imageUrl: "/images/products/fenetre-jansen.jpg",
    },
    {
      slug: "mur-rideau",
      nom: "Mur Rideau",
      description: "Façade vitrée en mur-rideau. Grands volumes et architecture contemporaine.",
      prixBaseHT: 850,
      poidsBase: 35,
      delaiFabrication: 35,
      imageUrl: "/images/products/mur-rideau.jpg",
    },
  ],
  "grilles-ventilation": [
    {
      slug: "grille-ventilation-lineaire",
      nom: "Grille Ventilation Linéaire",
      description: "Grille de ventilation à lames horizontales. Finition aluminium ou acier laqué.",
      prixBaseHT: 180,
      poidsBase: 8,
      delaiFabrication: 10,
      imageUrl: "/images/products/grille-lineaire.jpg",
    },
    {
      slug: "grille-ventilation-decorative",
      nom: "Grille Ventilation Décorative",
      description: "Grille avec motifs décoratifs personnalisables. Design et fonctionnalité.",
      prixBaseHT: 320,
      poidsBase: 12,
      delaiFabrication: 14,
      imageUrl: "/images/products/grille-decorative.jpg",
    },
    {
      slug: "grille-anti-effraction",
      nom: "Grille Anti-effraction",
      description: "Grille de sécurité renforcée pour soupiraux et ouvertures basses.",
      prixBaseHT: 280,
      poidsBase: 18,
      delaiFabrication: 14,
      imageUrl: "/images/products/grille-anti-effraction.jpg",
    },
  ],
  portails: [
    {
      slug: "portail-battant-contemporain",
      nom: "Portail Battant Contemporain",
      description: "Portail battant 2 vantaux design moderne. Aluminium ou acier thermolaqué.",
      prixBaseHT: 2890,
      poidsBase: 120,
      delaiFabrication: 28,
      imageUrl: "/images/products/portail-battant.jpg",
    },
    {
      slug: "portail-coulissant",
      nom: "Portail Coulissant",
      description: "Portail coulissant motorisable. Gain de place et praticité.",
      prixBaseHT: 3200,
      poidsBase: 150,
      delaiFabrication: 28,
      imageUrl: "/images/products/portail-coulissant.jpg",
    },
    {
      slug: "portail-autoportant",
      nom: "Portail Coulissant Autoportant",
      description: "Portail coulissant sans rail au sol. Installation simplifiée.",
      prixBaseHT: 4500,
      poidsBase: 180,
      delaiFabrication: 35,
      imageUrl: "/images/products/portail-autoportant.jpg",
    },
    {
      slug: "portail-forge",
      nom: "Portail Fer Forgé",
      description: "Portail traditionnel en fer forgé. Motifs artisanaux uniques.",
      prixBaseHT: 4800,
      poidsBase: 200,
      delaiFabrication: 42,
      imageUrl: "/images/products/portail-forge.jpg",
    },
    {
      slug: "portillon-assorti",
      nom: "Portillon Assorti",
      description: "Portillon piéton coordonné au portail. Même design et finition.",
      prixBaseHT: 890,
      poidsBase: 45,
      delaiFabrication: 21,
      imageUrl: "/images/products/portillon.jpg",
    },
  ],
  clotures: [
    {
      slug: "cloture-lames-aluminium",
      nom: "Clôture Lames Aluminium",
      description: "Clôture contemporaine à lames horizontales aluminium. Occultante et design.",
      prixBaseHT: 180,
      poidsBase: 15,
      delaiFabrication: 14,
      imageUrl: "/images/products/cloture-lames.jpg",
    },
    {
      slug: "cloture-barreaudage",
      nom: "Clôture Barreaudage",
      description: "Clôture classique à barreaux verticaux. Robuste et sécurisante.",
      prixBaseHT: 120,
      poidsBase: 18,
      delaiFabrication: 14,
      imageUrl: "/images/products/cloture-barreaux.jpg",
    },
    {
      slug: "cloture-panneaux-rigides",
      nom: "Clôture Panneaux Rigides",
      description: "Clôture en panneaux soudés galvanisés. Rapport qualité/prix optimal.",
      prixBaseHT: 65,
      poidsBase: 12,
      delaiFabrication: 7,
      imageUrl: "/images/products/cloture-panneaux.jpg",
    },
    {
      slug: "cloture-gabion",
      nom: "Clôture Gabion",
      description: "Clôture en cages gabion remplies de pierres. Esthétique naturelle.",
      prixBaseHT: 250,
      poidsBase: 80,
      delaiFabrication: 14,
      imageUrl: "/images/products/cloture-gabion.jpg",
    },
    {
      slug: "brise-vue-decoratif",
      nom: "Brise-vue Décoratif",
      description: "Panneaux décoratifs découpés laser. Motifs sur mesure.",
      prixBaseHT: 380,
      poidsBase: 25,
      delaiFabrication: 21,
      imageUrl: "/images/products/brise-vue.jpg",
    },
  ],
};

// Configurations d'options par type de produit
export const optionConfigs = {
  "garde-corps": ["largeur", "hauteur", "couleur-ral", "finition", "remplissage", "main-courante"],
  escaliers: ["largeur", "hauteur", "couleur-ral", "finition", "type-marches", "nombre-marches", "sens-montee", "main-courante"],
  portes: ["largeur", "hauteur", "couleur-ral", "finition", "serrure", "poignee", "type-verre"],
  fenetres: ["largeur", "hauteur", "couleur-ral", "finition", "type-verre"],
  "grilles-ventilation": ["largeur", "hauteur", "couleur-ral", "finition"],
  portails: ["largeur", "hauteur", "couleur-ral", "finition", "type-ouverture", "motorisation", "type-motorisation", "telecommande", "portillon-integre"],
  clotures: ["longueur", "hauteur", "couleur-ral", "finition"],
};

export async function seedProducts(prisma: PrismaClient) {
  console.log("📦 Seeding products...");

  let totalProducts = 0;

  for (const [familySlug, products] of Object.entries(productsByFamily)) {
    const family = await prisma.productFamily.findUnique({
      where: { slug: familySlug },
    });

    if (!family) {
      console.log(`  ⚠️ Family not found: ${familySlug}`);
      continue;
    }

    for (const product of products) {
      await prisma.product.upsert({
        where: { slug: product.slug },
        update: {
          ...product,
          familleId: family.id,
        },
        create: {
          ...product,
          familleId: family.id,
        },
      });
      totalProducts++;
    }
  }

  console.log(`  ✅ ${totalProducts} products created`);

  // Créer les configurations d'options pour chaque produit
  console.log("🔧 Configuring product options...");

  let totalConfigs = 0;

  for (const [familySlug, optionSlugs] of Object.entries(optionConfigs)) {
    const products = await prisma.product.findMany({
      where: {
        famille: { slug: familySlug },
      },
    });

    for (const product of products) {
      for (const optionSlug of optionSlugs) {
        const option = await prisma.productOption.findUnique({
          where: { slug: optionSlug },
        });

        if (!option) continue;

        // Configurer les valeurs par défaut selon le type d'option
        const config: {
          productId: string;
          optionId: string;
          obligatoire: boolean;
          valeurMin?: number;
          valeurMax?: number;
          valeurDefaut?: string;
          supplementHT?: number;
          multiplicateurPrix?: number;
        } = {
          productId: product.id,
          optionId: option.id,
          obligatoire: ["largeur", "hauteur", "couleur-ral"].includes(optionSlug),
        };

        // Valeurs spécifiques selon l'option
        if (optionSlug === "largeur") {
          config.valeurMin = 500;
          config.valeurMax = 6000;
          config.valeurDefaut = "1000";
        } else if (optionSlug === "hauteur") {
          config.valeurMin = 500;
          config.valeurMax = 3000;
          config.valeurDefaut = "1000";
        } else if (optionSlug === "longueur") {
          config.valeurMin = 1000;
          config.valeurMax = 50000;
          config.valeurDefaut = "2000";
        } else if (optionSlug === "couleur-ral") {
          config.valeurDefaut = "RAL 7016";
        } else if (optionSlug === "finition") {
          config.valeurDefaut = "Thermolaquage mat";
        } else if (optionSlug === "motorisation") {
          config.supplementHT = 850;
        } else if (optionSlug === "type-motorisation") {
          config.supplementHT = 0; // Inclus dans motorisation
        } else if (optionSlug === "serrure" && optionSlug.includes("multipoints")) {
          config.supplementHT = 180;
        }

        try {
          await prisma.productOptionConfig.upsert({
            where: {
              productId_optionId: {
                productId: product.id,
                optionId: option.id,
              },
            },
            update: config,
            create: config,
          });
          totalConfigs++;
        } catch {
          // Ignore duplicate errors
        }
      }
    }
  }

  console.log(`  ✅ ${totalConfigs} product option configs created`);
}






