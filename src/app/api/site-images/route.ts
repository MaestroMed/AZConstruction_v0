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
];

// GET: Récupérer toutes les images du site
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const key = searchParams.get("key");

    // Si on demande une image spécifique par clé
    if (key) {
      const image = await prisma.siteImage.findUnique({
        where: { key },
      });

      // Si pas trouvée, chercher dans les defaults
      const defaultImage = DEFAULT_IMAGES.find((img) => img.key === key);
      
      if (image) {
        return NextResponse.json({
          success: true,
          image: {
            ...image,
            url: image.imageUrl || image.fallbackUrl,
          },
        });
      } else if (defaultImage) {
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
    const dbImages = await prisma.siteImage.findMany({
      where: category ? { category } : undefined,
      orderBy: { key: "asc" },
    });

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
    console.error("Error fetching site images:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des images" },
      { status: 500 }
    );
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

