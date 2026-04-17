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
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "hero-thermolaquage",
    category: "hero",
    label: "Hero Thermolaquage",
    description: "Image de fond de la page Thermolaquage",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "hero-particuliers",
    category: "hero",
    label: "Hero Particuliers",
    description: "Image de fond de la page Particuliers",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "hero-professionnels",
    category: "hero",
    label: "Hero Professionnels",
    description: "Image de fond de la page Professionnels",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "hero-a-propos",
    category: "hero",
    label: "Hero À propos",
    description: "Image de fond de la page À propos",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "hero-contact",
    category: "hero",
    label: "Hero Contact",
    description: "Image de fond de la page Contact",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "hero-carousel-1",
    category: "hero",
    label: "Carousel Hero 1",
    description: "1ère image du carousel",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "hero-carousel-2",
    category: "hero",
    label: "Carousel Hero 2",
    description: "2ème image du carousel",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "hero-carousel-3",
    category: "hero",
    label: "Carousel Hero 3",
    description: "3ème image du carousel",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "hero-carousel-4",
    category: "hero",
    label: "Carousel Hero 4",
    description: "4ème image du carousel",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "hero-carousel-5",
    category: "hero",
    label: "Carousel Hero 5",
    description: "5ème image du carousel",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "hero-carousel-6",
    category: "hero",
    label: "Carousel Hero 6",
    description: "6ème image du carousel",
    fallbackUrl: "/placeholder.svg",
  },

  // === PRODUITS / FAMILLES ===
  {
    key: "product-garde-corps",
    category: "products",
    label: "Garde-corps",
    description: "Image représentative des garde-corps",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "product-escaliers",
    category: "products",
    label: "Escaliers",
    description: "Image représentative des escaliers",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "product-portails",
    category: "products",
    label: "Portails",
    description: "Image représentative des portails",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "product-clotures",
    category: "products",
    label: "Clôtures",
    description: "Image représentative des clôtures",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "product-pergolas",
    category: "products",
    label: "Pergolas",
    description: "Image représentative des pergolas",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "product-marquises",
    category: "products",
    label: "Marquises & Auvents",
    description: "Image représentative des marquises",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "product-portes",
    category: "products",
    label: "Portes",
    description: "Image représentative des portes",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "product-fenetres",
    category: "products",
    label: "Fenêtres & Châssis",
    description: "Image représentative des fenêtres",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "product-verrieres",
    category: "products",
    label: "Verrières",
    description: "Image représentative des verrières",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "product-grilles",
    category: "products",
    label: "Grilles de ventilation",
    description: "Image représentative des grilles",
    fallbackUrl: "/placeholder.svg",
  },

  // === SEO PRODUITS — pages dept/ville (utilisé par les ~280k pages SEO) ===
  // Clés alignées sur les slugs de routes. Une photo par produit suffit :
  // les sous-produits + segments × ville en héritent automatiquement.
  {
    key: "product-thermolaquage",
    category: "seo-products",
    label: "Hero SEO — Thermolaquage",
    description: "Photo principale pour les pages /services/thermolaquage/[dept]/[ville]",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "product-grilles-ventilation",
    category: "seo-products",
    label: "Hero SEO — Grilles de ventilation (alias)",
    description: "Alias slug-aligné de product-grilles. Utilisée si product-grilles est vide.",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "product-garde-corps-verre",
    category: "seo-products",
    label: "Hero SEO — Garde-corps verre",
    description: "Photo pour les pages /garde-corps-verre/[dept]/[ville]. Hérite de product-garde-corps si vide.",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "product-escalier-helicoidal",
    category: "seo-products",
    label: "Hero SEO — Escalier hélicoïdal",
    description: "Photo pour les pages /escalier-helicoidal/[dept]/[ville]. Hérite de product-escaliers si vide.",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "product-portail-coulissant",
    category: "seo-products",
    label: "Hero SEO — Portail coulissant",
    description: "Photo pour les pages /portail-coulissant/[dept]/[ville]. Hérite de product-portails si vide.",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "product-portail-autoportant",
    category: "seo-products",
    label: "Hero SEO — Portail autoportant",
    description: "Photo pour les pages /portail-autoportant/[dept]/[ville]. Hérite de product-portails si vide.",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "product-verriere-atelier",
    category: "seo-products",
    label: "Hero SEO — Verrière atelier",
    description: "Photo pour les pages /verriere-atelier/[dept]/[ville]. Hérite de product-verrieres si vide.",
    fallbackUrl: "/placeholder.svg",
  },

  // === PAGES ===
  {
    key: "page-atelier",
    category: "pages",
    label: "Photo Atelier / Pliage sur mesure",
    description: "Photo de l'atelier AZ Construction — utilisée dans la section 'Pliage sur mesure' de la page Particuliers",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "page-equipe",
    category: "pages",
    label: "Photo Équipe",
    description: "Photo de l'équipe (page À propos)",
    fallbackUrl: "/placeholder.svg",
  },

  // === PARCOURS CLIENT (Process Steps) ===
  {
    key: "process-consultation",
    category: "process",
    label: "Étape 1 - Consultation",
    description: "Image illustrant l'étape de consultation/découverte",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "process-devis",
    category: "process",
    label: "Étape 2 - Devis",
    description: "Image illustrant l'étape de devis gratuit",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "process-fabrication",
    category: "process",
    label: "Étape 3 - Fabrication",
    description: "Image illustrant l'étape de fabrication en atelier",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "process-installation",
    category: "process",
    label: "Étape 4 - Installation",
    description: "Image illustrant l'étape d'installation/pose",
    fallbackUrl: "/placeholder.svg",
  },

  // === ÉQUIPE (Team Members) ===
  {
    key: "team-member-1",
    category: "team",
    label: "Photo Équipe 1",
    description: "Photo du 1er membre de l'équipe (Fondateur/Directeur)",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "team-member-2",
    category: "team",
    label: "Photo Équipe 2",
    description: "Photo du 2ème membre de l'équipe",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "team-member-3",
    category: "team",
    label: "Photo Équipe 3",
    description: "Photo du 3ème membre de l'équipe",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "team-member-4",
    category: "team",
    label: "Photo Équipe 4",
    description: "Photo du 4ème membre de l'équipe",
    fallbackUrl: "/placeholder.svg",
  },

  // === RÉALISATIONS B2B ===
  {
    key: "realisation-b2b-1",
    category: "realisations",
    label: "Réalisation Pro 1",
    description: "1ère réalisation B2B mise en avant (page Professionnels)",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "realisation-b2b-2",
    category: "realisations",
    label: "Réalisation Pro 2",
    description: "2ème réalisation B2B mise en avant",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "realisation-b2b-3",
    category: "realisations",
    label: "Réalisation Pro 3",
    description: "3ème réalisation B2B mise en avant",
    fallbackUrl: "/placeholder.svg",
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

  // === SECTEURS PROFESSIONNELS ===
  {
    key: "sector-btp",
    category: "pages",
    label: "Secteur BTP / Entreprises générales",
    description: "Photo pour la card 'Entreprises générales' (page Professionnels)",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "sector-architecte",
    category: "pages",
    label: "Secteur Architectes & Bureaux d'études",
    description: "Photo pour la card 'Architectes' (page Professionnels)",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "sector-artisan",
    category: "pages",
    label: "Secteur Artisans du bâtiment",
    description: "Photo pour la card 'Artisans' (page Professionnels)",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "sector-industrie",
    category: "pages",
    label: "Secteur Industriels",
    description: "Photo pour la card 'Industriels' (page Professionnels)",
    fallbackUrl: "/placeholder.svg",
  },

  // === THERMOLAQUAGE ===
  {
    key: "thermolaquage-process",
    category: "pages",
    label: "Photo Process Thermolaquage",
    description: "Image illustrant le processus de thermolaquage (four, cabine de projection...)",
    fallbackUrl: "/placeholder.svg",
  },
  {
    key: "thermolaquage-applications",
    category: "pages",
    label: "Photo Domaines d'application",
    description: "Image de la section Métaux ferreux / Domaines d'application (page Thermolaquage)",
    fallbackUrl: "/placeholder.svg",
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
            videoUrl: null,
            fallbackUrl: defaultImage.fallbackUrl,
            url: defaultImage.fallbackUrl,
          },
        });
      }

      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    // Récupérer toutes les images de la DB
    let dbImages: { key: string; imageUrl: string | null; videoUrl: string | null; zoom: number; updatedAt: Date }[] = [];
    try {
      dbImages = await prisma.siteImage.findMany({
        where: category ? { category } : undefined,
        orderBy: { key: "asc" },
        select: { key: true, imageUrl: true, videoUrl: true, zoom: true, updatedAt: true },
      });
    } catch (dbError) {
      console.error("DB error fetching images, using defaults:", dbError);
      // Continue avec les defaults
    }

    // Merger defaults + DB pour avoir la liste complète
    const defaultKeys = new Set(DEFAULT_IMAGES.map(d => d.key));

    // 1) Images from defaults, enriched with DB data
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
        videoUrl: dbImage?.videoUrl || null,
        zoom: dbImage?.zoom ?? 1.0,
        updatedAt: dbImage?.updatedAt || null,
      };
    });

    // 2) Custom DB-only images (e.g. user-created partner logos)
    let customDbImages: { key: string; category: string; label: string; description: string | null; imageUrl: string | null; videoUrl: string | null; fallbackUrl: string; zoom: number; updatedAt: Date }[] = [];
    try {
      customDbImages = await prisma.siteImage.findMany({
        where: {
          key: { notIn: Array.from(defaultKeys) },
          ...(category ? { category } : {}),
        },
        orderBy: { key: "asc" },
      });
    } catch { /* ignore */ }

    for (const db of customDbImages) {
      allImages.push({
        key: db.key,
        category: db.category,
        label: db.label,
        description: db.description || "",
        imageUrl: db.imageUrl,
        fallbackUrl: db.fallbackUrl,
        url: db.imageUrl || db.fallbackUrl,
        videoUrl: db.videoUrl || null,
        zoom: db.zoom ?? 1.0,
        updatedAt: db.updatedAt,
      });
    }

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
    const { key, imageUrl, videoUrl, zoom } = body;

    if (!key) {
      return NextResponse.json({ error: "Key is required" }, { status: 400 });
    }

    // Trouver les infos par défaut ou existant en DB (pour les custom logos)
    const defaultImage = DEFAULT_IMAGES.find((img) => img.key === key);
    let existingImage: { key: string; category: string; label: string; description: string | null; fallbackUrl: string } | null = null;
    if (!defaultImage) {
      existingImage = await prisma.siteImage.findUnique({
        where: { key },
        select: { key: true, category: true, label: true, description: true, fallbackUrl: true },
      });
      if (!existingImage) {
        return NextResponse.json({ error: "Image non trouvée" }, { status: 400 });
      }
    }

    const ref = defaultImage || existingImage!;

    // Build update data
    const updateData: Record<string, unknown> = {
      updatedAt: new Date(),
    };
    if (imageUrl !== undefined) updateData.imageUrl = imageUrl || null;
    if (videoUrl !== undefined) updateData.videoUrl = videoUrl || null;
    if (zoom !== undefined) updateData.zoom = Math.max(0.5, Math.min(3.0, Number(zoom) || 1.0));

    // Upsert l'image
    const image = await prisma.siteImage.upsert({
      where: { key },
      update: updateData,
      create: {
        key,
        category: ref.category,
        label: ref.label,
        description: ref.description,
        fallbackUrl: ref.fallbackUrl,
        imageUrl: imageUrl || null,
        videoUrl: videoUrl || null,
        zoom: zoom !== undefined ? Math.max(0.5, Math.min(3.0, Number(zoom) || 1.0)) : 1.0,
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


