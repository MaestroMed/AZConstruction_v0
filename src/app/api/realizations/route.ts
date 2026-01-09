import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET: Récupérer toutes les réalisations publiées
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const limit = searchParams.get("limit");
    const includeUnpublished = searchParams.get("admin") === "true";

    const where = {
      ...(category && category !== "all" ? { categorie: category } : {}),
      ...(!includeUnpublished ? { published: true } : {}),
    };

    const realizations = await prisma.realization.findMany({
      where,
      include: {
        images: {
          orderBy: { ordre: "asc" },
        },
      },
      orderBy: { ordre: "asc" },
      ...(limit ? { take: parseInt(limit) } : {}),
    });

    // Transformer les données pour le frontend
    const formattedRealizations = realizations.map((r) => ({
      id: r.id,
      titre: r.titre,
      description: r.description,
      categorie: r.categorie,
      ville: r.ville,
      dateRealisation: r.dateRealisation,
      published: r.published,
      ordre: r.ordre,
      imageUrl: r.images.find((img) => img.isCover)?.url || r.images[0]?.url || null,
      images: r.images.map((img) => img.url),
      latitude: r.latitude,
      longitude: r.longitude,
    }));

    return NextResponse.json({
      success: true,
      realizations: formattedRealizations,
      count: formattedRealizations.length,
    });
  } catch (error) {
    console.error("Error fetching realizations:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des réalisations", success: false },
      { status: 500 }
    );
  }
}

// POST: Créer une nouvelle réalisation (admin only)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { titre, description, categorie, ville, dateRealisation, images, published, maitreOuvrage, adresse } = body;

    if (!titre || !categorie) {
      return NextResponse.json(
        { error: "Le titre et la catégorie sont requis" },
        { status: 400 }
      );
    }

    // Récupérer le plus grand ordre actuel
    const maxOrdre = await prisma.realization.findFirst({
      orderBy: { ordre: "desc" },
      select: { ordre: true },
    });

    const realization = await prisma.realization.create({
      data: {
        titre,
        description: description || (maitreOuvrage ? `Maître d'ouvrage : ${maitreOuvrage}${adresse ? ` - ${adresse}` : ""}` : null),
        categorie,
        ville,
        dateRealisation: dateRealisation ? new Date(dateRealisation) : null,
        published: published ?? false,
        ordre: (maxOrdre?.ordre ?? 0) + 1,
        images: {
          create: (images || []).map((url: string, index: number) => ({
            url,
            ordre: index,
            isCover: index === 0,
          })),
        },
      },
      include: {
        images: true,
      },
    });

    return NextResponse.json({ success: true, realization });
  } catch (error) {
    console.error("Error creating realization:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création de la réalisation" },
      { status: 500 }
    );
  }
}

// PUT: Mettre à jour une réalisation
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, titre, description, categorie, ville, dateRealisation, images, published, ordre } = body;

    if (!id) {
      return NextResponse.json({ error: "ID requis" }, { status: 400 });
    }

    // Supprimer les anciennes images si de nouvelles sont fournies
    if (images) {
      await prisma.realizationImage.deleteMany({
        where: { realizationId: id },
      });
    }

    const realization = await prisma.realization.update({
      where: { id },
      data: {
        ...(titre && { titre }),
        ...(description !== undefined && { description }),
        ...(categorie && { categorie }),
        ...(ville !== undefined && { ville }),
        ...(dateRealisation !== undefined && {
          dateRealisation: dateRealisation ? new Date(dateRealisation) : null,
        }),
        ...(published !== undefined && { published }),
        ...(ordre !== undefined && { ordre }),
        ...(images && {
          images: {
            create: images.map((url: string, index: number) => ({
              url,
              ordre: index,
              isCover: index === 0,
            })),
          },
        }),
      },
      include: {
        images: true,
      },
    });

    return NextResponse.json({ success: true, realization });
  } catch (error) {
    console.error("Error updating realization:", error);
    return NextResponse.json(
      { error: "Erreur lors de la mise à jour" },
      { status: 500 }
    );
  }
}

// DELETE: Supprimer une réalisation
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID requis" }, { status: 400 });
    }

    await prisma.realization.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting realization:", error);
    return NextResponse.json(
      { error: "Erreur lors de la suppression" },
      { status: 500 }
    );
  }
}
