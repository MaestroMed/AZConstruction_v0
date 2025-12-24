import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { ralModels, ralColors20 } from "@/lib/data/thermolaquage-items";

// GET: Récupérer tous les modèles avec leurs images
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const modelId = searchParams.get("model");

    // Si on demande un modèle spécifique
    if (modelId) {
      const model = await prisma.rALModel.findUnique({
        where: { id: modelId },
        include: { images: true },
      });

      if (!model) {
        // Retourner le modèle par défaut depuis les données statiques
        const staticModel = ralModels.find((m) => m.id === modelId);
        return NextResponse.json({
          success: true,
          model: staticModel
            ? {
                id: staticModel.id,
                name: staticModel.name,
                label: staticModel.label,
                images: [],
              }
            : null,
        });
      }

      return NextResponse.json({ success: true, model });
    }

    // Récupérer tous les modèles de la base de données
    let dbModels = await prisma.rALModel.findMany({
      include: { images: true },
      orderBy: { ordre: "asc" },
    });

    // Si aucun modèle en base, créer les modèles par défaut
    if (dbModels.length === 0) {
      // Créer les modèles par défaut
      for (const model of ralModels) {
        await prisma.rALModel.create({
          data: {
            id: model.id,
            name: model.name,
            label: model.label,
            ordre: ralModels.indexOf(model),
            active: true,
          },
        });
      }
      dbModels = await prisma.rALModel.findMany({
        include: { images: true },
        orderBy: { ordre: "asc" },
      });
    }

    // Fusionner avec les données statiques pour les images par défaut
    const modelsWithDefaults = dbModels.map((dbModel) => {
      const staticModel = ralModels.find((m) => m.id === dbModel.id);
      return {
        ...dbModel,
        defaultImage: staticModel?.defaultImage || "",
        description: staticModel?.description || "",
      };
    });

    // Retourner aussi la liste des couleurs disponibles
    return NextResponse.json({
      success: true,
      models: modelsWithDefaults,
      colors: ralColors20,
    });
  } catch (error) {
    console.error("Error fetching RAL models:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des modèles" },
      { status: 500 }
    );
  }
}

// POST: Ajouter/mettre à jour une image modèle+couleur
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { modelId, ralCode, imageUrl } = body;

    if (!modelId || !ralCode || !imageUrl) {
      return NextResponse.json(
        { error: "modelId, ralCode et imageUrl sont requis" },
        { status: 400 }
      );
    }

    // Vérifier que le modèle existe
    let model = await prisma.rALModel.findUnique({
      where: { id: modelId },
    });

    // Créer le modèle s'il n'existe pas
    if (!model) {
      const staticModel = ralModels.find((m) => m.id === modelId);
      if (!staticModel) {
        return NextResponse.json(
          { error: "Modèle non trouvé" },
          { status: 404 }
        );
      }

      model = await prisma.rALModel.create({
        data: {
          id: staticModel.id,
          name: staticModel.name,
          label: staticModel.label,
          ordre: ralModels.indexOf(staticModel),
          active: true,
        },
      });
    }

    // Upsert l'image
    const image = await prisma.rALModelImage.upsert({
      where: {
        modelId_ralCode: {
          modelId,
          ralCode,
        },
      },
      update: {
        imageUrl,
        updatedAt: new Date(),
      },
      create: {
        modelId,
        ralCode,
        imageUrl,
      },
    });

    return NextResponse.json({ success: true, image });
  } catch (error) {
    console.error("Error saving RAL model image:", error);
    return NextResponse.json(
      { error: "Erreur lors de la sauvegarde de l'image" },
      { status: 500 }
    );
  }
}

// DELETE: Supprimer une image modèle+couleur
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const modelId = searchParams.get("model");
    const ralCode = searchParams.get("ral");

    if (id) {
      // Supprimer par ID
      await prisma.rALModelImage.delete({
        where: { id },
      });
    } else if (modelId && ralCode) {
      // Supprimer par modèle + couleur
      await prisma.rALModelImage.delete({
        where: {
          modelId_ralCode: {
            modelId,
            ralCode,
          },
        },
      });
    } else {
      return NextResponse.json(
        { error: "id ou (model + ral) requis" },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, message: "Image supprimée" });
  } catch (error) {
    console.error("Error deleting RAL model image:", error);
    return NextResponse.json(
      { error: "Erreur lors de la suppression de l'image" },
      { status: 500 }
    );
  }
}


