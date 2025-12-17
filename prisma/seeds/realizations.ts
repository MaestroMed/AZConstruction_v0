import { PrismaClient } from "@prisma/client";

// Portfolio de réalisations
export const realizations = [
  {
    titre: "Villa Contemporaine Saint-Cloud",
    description: "Réalisation complète de la métallerie pour cette villa d'architecte : garde-corps en verre et inox, escalier hélicoïdal design, verrière atelier.",
    categorie: "Résidentiel",
    ville: "Saint-Cloud (92)",
    latitude: 48.8456,
    longitude: 2.2186,
    dateRealisation: new Date("2024-11-15"),
    images: [
      { url: "/images/realizations/villa-saint-cloud-1.jpg", legend: "Escalier hélicoïdal", isCover: true },
      { url: "/images/realizations/villa-saint-cloud-2.jpg", legend: "Garde-corps terrasse" },
      { url: "/images/realizations/villa-saint-cloud-3.jpg", legend: "Verrière cuisine" },
    ],
  },
  {
    titre: "Loft Industriel Paris 11ème",
    description: "Aménagement d'un ancien atelier en loft : mezzanine métallique, escalier industriel, garde-corps câbles, cloisons vitrées.",
    categorie: "Résidentiel",
    ville: "Paris 11ème",
    latitude: 48.8566,
    longitude: 2.3809,
    dateRealisation: new Date("2024-09-20"),
    images: [
      { url: "/images/realizations/loft-paris11-1.jpg", legend: "Vue d'ensemble mezzanine", isCover: true },
      { url: "/images/realizations/loft-paris11-2.jpg", legend: "Escalier industriel" },
      { url: "/images/realizations/loft-paris11-3.jpg", legend: "Détail garde-corps" },
    ],
  },
  {
    titre: "Portail et Clôtures Neuilly",
    description: "Création d'un portail coulissant motorisé et clôtures assorties pour cette propriété de standing.",
    categorie: "Portails & Clôtures",
    ville: "Neuilly-sur-Seine (92)",
    latitude: 48.8846,
    longitude: 2.2686,
    dateRealisation: new Date("2024-08-05"),
    images: [
      { url: "/images/realizations/portail-neuilly-1.jpg", legend: "Portail coulissant", isCover: true },
      { url: "/images/realizations/portail-neuilly-2.jpg", legend: "Clôture et portillon" },
    ],
  },
  {
    titre: "Bureaux Start-up Boulogne",
    description: "Aménagement des locaux d'une start-up tech : cloisons vitrées, escalier design, garde-corps mezzanine.",
    categorie: "Tertiaire",
    ville: "Boulogne-Billancourt (92)",
    latitude: 48.8396,
    longitude: 2.2399,
    dateRealisation: new Date("2024-07-12"),
    images: [
      { url: "/images/realizations/bureaux-boulogne-1.jpg", legend: "Espace de travail", isCover: true },
      { url: "/images/realizations/bureaux-boulogne-2.jpg", legend: "Escalier central" },
      { url: "/images/realizations/bureaux-boulogne-3.jpg", legend: "Salle de réunion vitrée" },
    ],
  },
  {
    titre: "Restaurant Le Comptoir - Paris 8ème",
    description: "Création de la façade vitrée style atelier et du mobilier métallique sur mesure pour ce restaurant gastronomique.",
    categorie: "Commerce",
    ville: "Paris 8ème",
    latitude: 48.8744,
    longitude: 2.3106,
    dateRealisation: new Date("2024-06-25"),
    images: [
      { url: "/images/realizations/restaurant-paris8-1.jpg", legend: "Façade atelier", isCover: true },
      { url: "/images/realizations/restaurant-paris8-2.jpg", legend: "Intérieur" },
    ],
  },
  {
    titre: "Maison de Ville Versailles",
    description: "Rénovation complète de la ferronnerie : escalier quart-tournant, garde-corps balcon, grilles de fenêtres.",
    categorie: "Résidentiel",
    ville: "Versailles (78)",
    latitude: 48.8014,
    longitude: 2.1301,
    dateRealisation: new Date("2024-05-18"),
    images: [
      { url: "/images/realizations/maison-versailles-1.jpg", legend: "Escalier quart-tournant", isCover: true },
      { url: "/images/realizations/maison-versailles-2.jpg", legend: "Garde-corps balcon" },
      { url: "/images/realizations/maison-versailles-3.jpg", legend: "Grilles de fenêtres" },
    ],
  },
  {
    titre: "Hôtel Particulier Paris 16ème",
    description: "Restauration et création d'ouvrages en fer forgé traditionnel pour cet hôtel particulier classé.",
    categorie: "Patrimoine",
    ville: "Paris 16ème",
    latitude: 48.8637,
    longitude: 2.2769,
    dateRealisation: new Date("2024-04-10"),
    images: [
      { url: "/images/realizations/hotel-paris16-1.jpg", legend: "Portail d'entrée restauré", isCover: true },
      { url: "/images/realizations/hotel-paris16-2.jpg", legend: "Rampe d'escalier" },
      { url: "/images/realizations/hotel-paris16-3.jpg", legend: "Balcon ouvragé" },
    ],
  },
  {
    titre: "Showroom Automobile Levallois",
    description: "Aménagement d'un showroom automobile : grande verrière, escalier monumental, garde-corps design.",
    categorie: "Commerce",
    ville: "Levallois-Perret (92)",
    latitude: 48.8933,
    longitude: 2.2882,
    dateRealisation: new Date("2024-03-22"),
    images: [
      { url: "/images/realizations/showroom-levallois-1.jpg", legend: "Vue d'ensemble", isCover: true },
      { url: "/images/realizations/showroom-levallois-2.jpg", legend: "Escalier monumental" },
    ],
  },
  {
    titre: "Immeuble Haussmannien Paris 9ème",
    description: "Rénovation des garde-corps de balcons filants et de la rampe d'escalier pour cet immeuble haussmannien.",
    categorie: "Copropriété",
    ville: "Paris 9ème",
    latitude: 48.8769,
    longitude: 2.3375,
    dateRealisation: new Date("2024-02-15"),
    images: [
      { url: "/images/realizations/haussmann-paris9-1.jpg", legend: "Balcon restauré", isCover: true },
      { url: "/images/realizations/haussmann-paris9-2.jpg", legend: "Rampe d'escalier" },
    ],
  },
  {
    titre: "Piscine Privée Enghien",
    description: "Création de garde-corps en verre et inox pour le pourtour de piscine et la terrasse attenante.",
    categorie: "Résidentiel",
    ville: "Enghien-les-Bains (95)",
    latitude: 48.9692,
    longitude: 2.3075,
    dateRealisation: new Date("2024-01-08"),
    images: [
      { url: "/images/realizations/piscine-enghien-1.jpg", legend: "Garde-corps piscine", isCover: true },
      { url: "/images/realizations/piscine-enghien-2.jpg", legend: "Vue de nuit" },
    ],
  },
  {
    titre: "Escalier Colimaçon Vincennes",
    description: "Création d'un escalier hélicoïdal sur mesure avec marches en chêne massif et garde-corps verre.",
    categorie: "Résidentiel",
    ville: "Vincennes (94)",
    latitude: 48.8474,
    longitude: 2.4392,
    dateRealisation: new Date("2023-12-05"),
    images: [
      { url: "/images/realizations/escalier-vincennes-1.jpg", legend: "Vue plongeante", isCover: true },
      { url: "/images/realizations/escalier-vincennes-2.jpg", legend: "Détail marches" },
      { url: "/images/realizations/escalier-vincennes-3.jpg", legend: "Arrivée étage" },
    ],
  },
  {
    titre: "Clinique Vétérinaire Nanterre",
    description: "Aménagement des espaces d'accueil avec cloisons vitrées et comptoir métallique sur mesure.",
    categorie: "Médical",
    ville: "Nanterre (92)",
    latitude: 48.8924,
    longitude: 2.2071,
    dateRealisation: new Date("2023-11-20"),
    images: [
      { url: "/images/realizations/clinique-nanterre-1.jpg", legend: "Accueil", isCover: true },
      { url: "/images/realizations/clinique-nanterre-2.jpg", legend: "Cloisons vitrées" },
    ],
  },
];

export async function seedRealizations(prisma: PrismaClient) {
  console.log("🖼️ Seeding realizations...");

  for (let i = 0; i < realizations.length; i++) {
    const { images, ...realizationData } = realizations[i];
    
    const realization = await prisma.realization.upsert({
      where: { 
        id: `seed-realization-${i + 1}` 
      },
      update: {
        ...realizationData,
        ordre: i + 1,
        published: true,
      },
      create: {
        id: `seed-realization-${i + 1}`,
        ...realizationData,
        ordre: i + 1,
        published: true,
      },
    });

    // Supprimer les anciennes images
    await prisma.realizationImage.deleteMany({
      where: { realizationId: realization.id },
    });

    // Créer les nouvelles images
    for (let j = 0; j < images.length; j++) {
      await prisma.realizationImage.create({
        data: {
          realizationId: realization.id,
          url: images[j].url,
          legend: images[j].legend,
          isCover: images[j].isCover || false,
          ordre: j + 1,
        },
      });
    }
  }

  console.log(`  ✅ ${realizations.length} realizations created with images`);
}


