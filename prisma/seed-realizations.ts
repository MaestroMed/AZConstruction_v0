import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Les 17 chantiers clients fournis
const chantiersClients = [
  {
    maitreOuvrage: "Outarex",
    projet: "Groupe scolaire Panorama",
    adresse: "Avenue du Général de Gaulle",
    ville: "Clamart (92)",
    categorie: "Bâtiment",
  },
  {
    maitreOuvrage: "Demathieu Bard",
    projet: "PNEI",
    adresse: "2 Rue Pasteur",
    ville: "St Germain en Laye (78)",
    categorie: "Bâtiment",
  },
  {
    maitreOuvrage: "Demathieu Bard",
    projet: "Complexe sportif Jean Jaurès",
    adresse: "31 avenue du Révérend Père Corentin Cloarec",
    ville: "Bois Colombes (92)",
    categorie: "Bâtiment",
  },
  {
    maitreOuvrage: "Balas",
    projet: "27 CANAL",
    adresse: "28 avenue de Flandre",
    ville: "Paris (75)",
    categorie: "Bâtiment",
  },
  {
    maitreOuvrage: "Spie Batignolles",
    projet: "AMUNDI - LES COURS LAFAYETTE",
    adresse: "59-61 Rue Lafayette",
    ville: "Paris (75)",
    categorie: "Bâtiment",
  },
  {
    maitreOuvrage: "Spie Batignolles",
    projet: "Village Des Athlètes",
    adresse: "",
    ville: "Saint Denis (93)",
    categorie: "Bâtiment",
  },
  {
    maitreOuvrage: "Rabot Dutilleul",
    projet: "Villogia",
    adresse: "201 avenue Pierre Brossolette",
    ville: "Montrouge (92)",
    categorie: "Bâtiment",
  },
  {
    maitreOuvrage: "Rabot Dutilleul",
    projet: "Stade Bauer",
    adresse: "",
    ville: "St Ouen (93)",
    categorie: "Bâtiment",
  },
  {
    maitreOuvrage: "Rabot Dutilleul",
    projet: "24 Rue Gambetta",
    adresse: "24 Rue Gambetta",
    ville: "Suresnes (92)",
    categorie: "Bâtiment",
  },
  {
    maitreOuvrage: "Rabot Dutilleul",
    projet: "École Provisoire",
    adresse: "Rue de Moscou",
    ville: "Bobigny (93)",
    categorie: "Bâtiment",
  },
  {
    maitreOuvrage: "AEGE",
    projet: "MGP Charleville",
    adresse: "20 Rue François Mitterrand",
    ville: "Charleville-Mézières (08)",
    categorie: "Bâtiment",
  },
  {
    maitreOuvrage: "Urbaine de Travaux",
    projet: "Gymnase Pierre de Coubertin",
    adresse: "57-59 Rue Parmentier",
    ville: "Bezons (95)",
    categorie: "Bâtiment",
  },
  {
    maitreOuvrage: "Urbaine de Travaux",
    projet: "Groupe Scolaire Jean Jacques Rousseau",
    adresse: "52 Rue Jean Jacques Rousseau",
    ville: "Colombes (92)",
    categorie: "Bâtiment",
  },
  {
    maitreOuvrage: "SCCV GAGNY GENERAL LECLERC",
    projet: "50 Logements",
    adresse: "Rue du Général Leclerc",
    ville: "Gagny (93)",
    categorie: "Bâtiment",
  },
  {
    maitreOuvrage: "SCCV MESNIL DEVAUX",
    projet: "22 Logements",
    adresse: "3/5 Avenue Adolphe Devaux",
    ville: "Le Blanc Mesnil (93)",
    categorie: "Bâtiment",
  },
  {
    maitreOuvrage: "SCCV MONTROUGE - CAMAR FINANCE",
    projet: "Résidence Montrouge",
    adresse: "12 Rue des Frères Henry",
    ville: "Montrouge (92)",
    categorie: "Bâtiment",
  },
  {
    maitreOuvrage: "SCCV ILOT AB - CONSTRUCTA PROMOTION",
    projet: "Programme Huningue",
    adresse: "Allée des Marroniers",
    ville: "Huningue (68)",
    categorie: "Bâtiment",
  },
];

async function main() {
  console.log("🏗️ Seeding des réalisations clients...\n");

  // Vérifier si des réalisations existent déjà
  const existingCount = await prisma.realization.count();
  console.log(`📊 ${existingCount} réalisation(s) existante(s) en base\n`);

  for (let i = 0; i < chantiersClients.length; i++) {
    const chantier = chantiersClients[i];
    
    // Vérifier si le projet existe déjà (par titre)
    const existing = await prisma.realization.findFirst({
      where: { titre: chantier.projet },
    });

    if (existing) {
      console.log(`⏭️ Projet "${chantier.projet}" existe déjà, ignoré.`);
      continue;
    }

    const description = chantier.adresse
      ? `Maître d'ouvrage : ${chantier.maitreOuvrage}\n${chantier.adresse}`
      : `Maître d'ouvrage : ${chantier.maitreOuvrage}`;

    await prisma.realization.create({
      data: {
        titre: chantier.projet,
        description,
        categorie: chantier.categorie,
        ville: chantier.ville,
        published: true,
        ordre: existingCount + i + 1,
      },
    });

    console.log(`✅ Ajouté: ${chantier.projet} - ${chantier.ville}`);
  }

  const finalCount = await prisma.realization.count();
  console.log(`\n🎉 Terminé ! ${finalCount} réalisation(s) en base.`);
}

main()
  .catch((e) => {
    console.error("❌ Erreur lors du seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
