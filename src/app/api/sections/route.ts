import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

// Schema de validation pour une section
const sectionSchema = z.object({
  pageSlug: z.string().min(1),
  sectionKey: z.string().min(1),
  content: z.record(z.string(), z.any()),
  ordre: z.number().optional().default(0),
  active: z.boolean().optional().default(true),
});

// GET: Récupérer les sections d'une page
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const pageSlug = searchParams.get("page");
    const sectionKey = searchParams.get("section");

    // Si on demande une section spécifique
    if (pageSlug && sectionKey) {
      const section = await prisma.siteSection.findUnique({
        where: {
          pageSlug_sectionKey: {
            pageSlug,
            sectionKey,
          },
        },
      });

      if (!section) {
        return NextResponse.json({
          success: true,
          section: null,
          message: "Section non trouvée, utiliser les valeurs par défaut",
        });
      }

      return NextResponse.json({ success: true, section });
    }

    // Si on demande toutes les sections d'une page
    if (pageSlug) {
      const sections = await prisma.siteSection.findMany({
        where: { pageSlug },
        orderBy: { ordre: "asc" },
      });

      return NextResponse.json({ success: true, sections });
    }

    // Sinon, retourner toutes les sections (pour l'admin)
    const sections = await prisma.siteSection.findMany({
      orderBy: [{ pageSlug: "asc" }, { ordre: "asc" }],
    });

    return NextResponse.json({ success: true, sections });
  } catch (error) {
    console.error("Error fetching sections:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des sections" },
      { status: 500 }
    );
  }
}

// POST: Créer ou mettre à jour une section
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = sectionSchema.parse(body);

    const section = await prisma.siteSection.upsert({
      where: {
        pageSlug_sectionKey: {
          pageSlug: validatedData.pageSlug,
          sectionKey: validatedData.sectionKey,
        },
      },
      update: {
        content: validatedData.content,
        ordre: validatedData.ordre,
        active: validatedData.active,
        updatedAt: new Date(),
      },
      create: {
        pageSlug: validatedData.pageSlug,
        sectionKey: validatedData.sectionKey,
        content: validatedData.content,
        ordre: validatedData.ordre,
        active: validatedData.active,
      },
    });

    return NextResponse.json({ success: true, section });
  } catch (error) {
    console.error("Error saving section:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Données invalides", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Erreur lors de la sauvegarde de la section" },
      { status: 500 }
    );
  }
}

// DELETE: Supprimer une section
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "ID de section requis" },
        { status: 400 }
      );
    }

    await prisma.siteSection.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: "Section supprimée" });
  } catch (error) {
    console.error("Error deleting section:", error);
    return NextResponse.json(
      { error: "Erreur lors de la suppression de la section" },
      { status: 500 }
    );
  }
}


