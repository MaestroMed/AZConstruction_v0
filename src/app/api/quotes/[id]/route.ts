import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/quotes/[id] - Récupérer le détail d'un devis
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const quote = await prisma.quote.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            nom: true,
            prenom: true,
            telephone: true,
            raisonSociale: true,
            siret: true,
            type: true,
          },
        },
        items: {
          include: {
            product: {
              include: {
                famille: true,
              },
            },
          },
        },
        messages: {
          orderBy: {
            dateEnvoi: "asc",
          },
        },
      },
    });

    if (!quote) {
      return NextResponse.json(
        { success: false, error: "Devis non trouvé" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      quote: {
        id: quote.id,
        numero: quote.numero,
        dateDemande: quote.dateDemande,
        dateExpiration: quote.dateExpiration,
        status: quote.status,
        totalHT: quote.totalHT,
        tva: quote.tva,
        totalTTC: quote.totalTTC,
        remiseSpeciale: quote.remiseSpeciale,
        commentaireClient: quote.commentaireClient,
        commentaireAdmin: quote.commentaireAdmin,
        pdfPath: quote.pdfPath,
        user: quote.user,
        items: quote.items.map((item) => ({
          id: item.id,
          productName: item.product.nom,
          productFamily: item.product.famille?.nom,
          quantity: item.quantity,
          configSnapshot: item.configSnapshot,
          prixUnitaireHT: item.prixUnitaireHT,
          prixTotalHT: item.prixTotalHT,
        })),
        messages: quote.messages,
      },
    });
  } catch (error) {
    console.error("Erreur lors de la récupération du devis:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Une erreur est survenue lors de la récupération du devis.",
      },
      { status: 500 }
    );
  }
}

// PATCH /api/quotes/[id] - Mettre à jour le statut d'un devis
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status, commentaireClient } = body;

    // Vérifier que le devis existe
    const existingQuote = await prisma.quote.findUnique({
      where: { id },
    });

    if (!existingQuote) {
      return NextResponse.json(
        { success: false, error: "Devis non trouvé" },
        { status: 404 }
      );
    }

    // Valider le statut
    const validStatuses = [
      "en_attente",
      "envoye",
      "accepte",
      "refuse",
      "expire",
    ];
    if (status && !validStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, error: "Statut invalide" },
        { status: 400 }
      );
    }

    // Mettre à jour le devis
    const updatedQuote = await prisma.quote.update({
      where: { id },
      data: {
        ...(status && { status }),
        ...(commentaireClient !== undefined && { commentaireClient }),
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      quote: {
        id: updatedQuote.id,
        numero: updatedQuote.numero,
        status: updatedQuote.status,
      },
      message: "Devis mis à jour avec succès.",
    });
  } catch (error) {
    console.error("Erreur lors de la mise à jour du devis:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Une erreur est survenue lors de la mise à jour du devis.",
      },
      { status: 500 }
    );
  }
}


