import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Images par défaut avec fallbacks Unsplash gratuits
const DEFAULT_IMAGES: {
  key: string;
  category: string;
  label: string;
  description: string;
  fallbackUrl: string;
}[] = [
  // === HERO SECTIONS ===
  {
    key: "hero-homepage",
    category: "hero",
    label: "Hero Page d'accueil",
    description: "Image principale de la page d'accueil (atelier, façade...)",
    fallbackUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
  },
  {
    key: "hero-thermolaquage",
    category: "hero",
    label: "Hero Thermolaquage",
    description: "Image de fond de la page Thermolaquage",
    fallbackUrl: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&q=80",
  },
  {
    key: "hero-particuliers",
    category: "hero",
    label: "Hero Particuliers",
    description: "Image de fond de la page Particuliers",
    fallbackUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
  },
  {
    key: "hero-professionnels",
    category: "hero",
    label: "Hero Professionnels",
    description: "Image de fond de la page Professionnels",
    fallbackUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
  },
  {
    key: "hero-a-propos",
    category: "hero",
    label: "Hero À propos",
    description: "Image de fond de la page À propos",
    fallbackUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80",
  },
  {
    key: "hero-contact",
    category: "hero",
    label: "Hero Contact",
    description: "Image de fond de la page Contact",
    fallbackUrl: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80",
  },
  {
    key: "hero-carousel-1",
    category: "hero",
    label: "Carousel Hero 1",
    description: "1ère image du carousel (si pas de réalisations)",
    fallbackUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    key: "hero-carousel-2",
    category: "hero",
    label: "Carousel Hero 2",
    description: "2ème image du carousel",
    fallbackUrl: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1920&q=80",
  },
  {
    key: "hero-carousel-3",
    category: "hero",
    label: "Carousel Hero 3",
    description: "3ème image du carousel",
    fallbackUrl: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=1920&q=80",
  },

  // === PRODUITS / FAMILLES ===
  {
    key: "product-garde-corps",
    category: "products",
    label: "Garde-corps",
    description: "Image représentative des garde-corps",
    fallbackUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    key: "product-escaliers",
    category: "products",
    label: "Escaliers",
    description: "Image représentative des escaliers",
    fallbackUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  },
  {
    key: "product-portails",
    category: "products",
    label: "Portails",
    description: "Image représentative des portails",
    fallbackUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    key: "product-clotures",
    category: "products",
    label: "Clôtures",
    description: "Image représentative des clôtures",
    fallbackUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
  },
  {
    key: "product-pergolas",
    category: "products",
    label: "Pergolas",
    description: "Image représentative des pergolas",
    fallbackUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    key: "product-marquises",
    category: "products",
    label: "Marquises & Auvents",
    description: "Image représentative des marquises",
    fallbackUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  },
  {
    key: "product-portes",
    category: "products",
    label: "Portes",
    description: "Image représentative des portes",
    fallbackUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    key: "product-fenetres",
    category: "products",
    label: "Fenêtres & Châssis",
    description: "Image représentative des fenêtres",
    fallbackUrl: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
  },
  {
    key: "product-verrieres",
    category: "products",
    label: "Verrières",
    description: "Image représentative des verrières",
    fallbackUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
  {
    key: "product-grilles",
    category: "products",
    label: "Grilles de ventilation",
    description: "Image représentative des grilles",
    fallbackUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },

  // === PAGES ===
  {
    key: "page-atelier",
    category: "pages",
    label: "Photo Atelier",
    description: "Photo de l'atelier AZ Construction",
    fallbackUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
  },
  {
    key: "page-equipe",
    category: "pages",
    label: "Photo Équipe",
    description: "Photo de l'équipe (page À propos)",
    fallbackUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
  },

  // === PARCOURS CLIENT (Process Steps) ===
  {
    key: "process-consultation",
    category: "process",
    label: "Étape 1 - Consultation",
    description: "Image illustrant l'étape de consultation/découverte",
    fallbackUrl: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80",
  },
  {
    key: "process-devis",
    category: "process",
    label: "Étape 2 - Devis",
    description: "Image illustrant l'étape de devis gratuit",
    fallbackUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  },
  {
    key: "process-fabrication",
    category: "process",
    label: "Étape 3 - Fabrication",
    description: "Image illustrant l'étape de fabrication en atelier",
    fallbackUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
  },
  {
    key: "process-installation",
    category: "process",
    label: "Étape 4 - Installation",
    description: "Image illustrant l'étape d'installation/pose",
    fallbackUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
  },

  // === ÉQUIPE (Team Members) ===
  {
    key: "team-member-1",
    category: "team",
    label: "Photo Équipe 1",
    description: "Photo du 1er membre de l'équipe (Fondateur/Directeur)",
    fallbackUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    key: "team-member-2",
    category: "team",
    label: "Photo Équipe 2",
    description: "Photo du 2ème membre de l'équipe",
    fallbackUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    key: "team-member-3",
    category: "team",
    label: "Photo Équipe 3",
    description: "Photo du 3ème membre de l'équipe",
    fallbackUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    key: "team-member-4",
    category: "team",
    label: "Photo Équipe 4",
    description: "Photo du 4ème membre de l'équipe",
    fallbackUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },

  // === RÉALISATIONS B2B ===
  {
    key: "realisation-b2b-1",
    category: "realisations",
    label: "Réalisation Pro 1",
    description: "1ère réalisation B2B mise en avant (page Professionnels)",
    fallbackUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    key: "realisation-b2b-2",
    category: "realisations",
    label: "Réalisation Pro 2",
    description: "2ème réalisation B2B mise en avant",
    fallbackUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  },
  {
    key: "realisation-b2b-3",
    category: "realisations",
    label: "Réalisation Pro 3",
    description: "3ème réalisation B2B mise en avant",
    fallbackUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
  },

  // === PARTENAIRES (Logos) ===
  {
    key: "partner-jansen",
    category: "partners",
    label: "Logo Jansen",
    description: "Logo du partenaire Jansen Steel Systems",
    fallbackUrl: "https://via.placeholder.com/200x80/C41E3A/FFFFFF?text=JANSEN",
  },
  {
    key: "partner-bouygues",
    category: "partners",
    label: "Logo Bouygues",
    description: "Logo du partenaire Bouygues Construction",
    fallbackUrl: "https://via.placeholder.com/200x80/00539C/FFFFFF?text=BOUYGUES",
  },
  {
    key: "partner-vinci",
    category: "partners",
    label: "Logo Vinci",
    description: "Logo du partenaire Vinci",
    fallbackUrl: "https://via.placeholder.com/200x80/003366/FFFFFF?text=VINCI",
  },
  {
    key: "partner-eiffage",
    category: "partners",
    label: "Logo Eiffage",
    description: "Logo du partenaire Eiffage",
    fallbackUrl: "https://via.placeholder.com/200x80/E30613/FFFFFF?text=EIFFAGE",
  },
  {
    key: "partner-saint-gobain",
    category: "partners",
    label: "Logo Saint-Gobain",
    description: "Logo du partenaire Saint-Gobain",
    fallbackUrl: "https://via.placeholder.com/200x80/004990/FFFFFF?text=SAINT-GOBAIN",
  },
  {
    key: "partner-demathieu-bard",
    category: "partners",
    label: "Logo Demathieu & Bard",
    description: "Logo du partenaire Demathieu & Bard",
    fallbackUrl: "https://via.placeholder.com/200x80/1E3A8A/FFFFFF?text=DEMATHIEU+BARD",
  },
  {
    key: "partner-spie-batignolles",
    category: "partners",
    label: "Logo Spie Batignolles",
    description: "Logo du partenaire Spie Batignolles",
    fallbackUrl: "https://via.placeholder.com/200x80/DC2626/FFFFFF?text=SPIE+BATIGNOLLES",
  },
  {
    key: "partner-rabot-dutilleul",
    category: "partners",
    label: "Logo Rabot Dutilleul",
    description: "Logo du partenaire Rabot Dutilleul",
    fallbackUrl: "https://via.placeholder.com/200x80/059669/FFFFFF?text=RABOT+DUTILLEUL",
  },
  {
    key: "partner-urbaine-travaux",
    category: "partners",
    label: "Logo Urbaine de Travaux",
    description: "Logo du partenaire Urbaine de Travaux",
    fallbackUrl: "https://via.placeholder.com/200x80/7C3AED/FFFFFF?text=URBAINE+TRAVAUX",
  },

  // === THERMOLAQUAGE ===
  {
    key: "thermolaquage-process",
    category: "pages",
    label: "Photo Process Thermolaquage",
    description: "Image illustrant le processus de thermolaquage (four, cabine de projection...)",
    fallbackUrl: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=80",
  },
];

// GET: Récupérer toutes les images du site
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const key = searchParams.get("key");

  // Fonction pour construire les images par défaut (fallback si DB échoue)
  function buildDefaultImages(filterCategory?: string | null) {
    const filtered = filterCategory
      ? DEFAULT_IMAGES.filter((def) => def.category === filterCategory)
      : DEFAULT_IMAGES;

    const images = filtered.map((def) => ({
      key: def.key,
      category: def.category,
      label: def.label,
      description: def.description,
      imageUrl: null,
      fallbackUrl: def.fallbackUrl,
      url: def.fallbackUrl,
      updatedAt: null,
    }));

    const grouped = images.reduce((acc, img) => {
      if (!acc[img.category]) {
        acc[img.category] = [];
      }
      acc[img.category].push(img);
      return acc;
    }, {} as Record<string, typeof images>);

    return { images, grouped };
  }

  try {
    // Si on demande une image spécifique par clé
    if (key) {
      const defaultImage = DEFAULT_IMAGES.find((img) => img.key === key);
      
      try {
        const image = await prisma.siteImage.findUnique({
          where: { key },
        });

        if (image) {
          return NextResponse.json({
            success: true,
            image: {
              ...image,
              url: image.imageUrl || image.fallbackUrl,
            },
          });
        }
      } catch (dbError) {
        console.error("DB error fetching single image:", dbError);
      }

      // Fallback vers l'image par défaut
      if (defaultImage) {
        return NextResponse.json({
          success: true,
          image: {
            key: defaultImage.key,
            category: defaultImage.category,
            label: defaultImage.label,
            description: defaultImage.description,
            imageUrl: null,
            fallbackUrl: defaultImage.fallbackUrl,
            url: defaultImage.fallbackUrl,
          },
        });
      }

      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    // Récupérer toutes les images de la DB
    let dbImages: { key: string; imageUrl: string | null; updatedAt: Date }[] = [];
    try {
      dbImages = await prisma.siteImage.findMany({
        where: category ? { category } : undefined,
        orderBy: { key: "asc" },
        select: { key: true, imageUrl: true, updatedAt: true },
      });
    } catch (dbError) {
      console.error("DB error fetching images, using defaults:", dbError);
      // Continue avec les defaults
    }

    // Merger avec les defaults pour avoir la liste complète
    const allImages = DEFAULT_IMAGES.filter(
      (def) => !category || def.category === category
    ).map((def) => {
      const dbImage = dbImages.find((img) => img.key === def.key);
      return {
        key: def.key,
        category: def.category,
        label: def.label,
        description: def.description,
        imageUrl: dbImage?.imageUrl || null,
        fallbackUrl: def.fallbackUrl,
        url: dbImage?.imageUrl || def.fallbackUrl,
        updatedAt: dbImage?.updatedAt || null,
      };
    });

    // Grouper par catégorie
    const grouped = allImages.reduce((acc, img) => {
      if (!acc[img.category]) {
        acc[img.category] = [];
      }
      acc[img.category].push(img);
      return acc;
    }, {} as Record<string, typeof allImages>);

    return NextResponse.json({
      success: true,
      images: allImages,
      grouped,
      categories: Object.keys(grouped),
    });
  } catch (error) {
    console.error("Error fetching site images, returning defaults:", error);
    
    // En cas d'erreur, retourner les images par défaut
    const { images, grouped } = buildDefaultImages(category);
    return NextResponse.json({
      success: true,
      images,
      grouped,
      categories: Object.keys(grouped),
      fallback: true,
    });
  }
}

// POST: Mettre à jour une image du site
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { key, imageUrl } = body;

    if (!key) {
      return NextResponse.json({ error: "Key is required" }, { status: 400 });
    }

    // Trouver les infos par défaut
    const defaultImage = DEFAULT_IMAGES.find((img) => img.key === key);
    if (!defaultImage) {
      return NextResponse.json({ error: "Invalid image key" }, { status: 400 });
    }

    // Upsert l'image
    const image = await prisma.siteImage.upsert({
      where: { key },
      update: {
        imageUrl: imageUrl || null,
        updatedAt: new Date(),
      },
      create: {
        key,
        category: defaultImage.category,
        label: defaultImage.label,
        description: defaultImage.description,
        fallbackUrl: defaultImage.fallbackUrl,
        imageUrl: imageUrl || null,
      },
    });

    return NextResponse.json({
      success: true,
      image: {
        ...image,
        url: image.imageUrl || image.fallbackUrl,
      },
    });
  } catch (error) {
    console.error("Error updating site image:", error);
    return NextResponse.json(
      { error: "Erreur lors de la mise à jour de l'image" },
      { status: 500 }
    );
  }
}

// DELETE: Supprimer une image uploadée (revenir au fallback)
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get("key");

    if (!key) {
      return NextResponse.json({ error: "Key is required" }, { status: 400 });
    }

    // Mettre imageUrl à null pour revenir au fallback
    await prisma.siteImage.update({
      where: { key },
      data: { imageUrl: null },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting site image:", error);
    return NextResponse.json(
      { error: "Erreur lors de la suppression" },
      { status: 500 }
    );
  }
}


