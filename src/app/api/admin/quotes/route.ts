import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const quotes = await prisma.quote.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        user: {
          select: { id: true, nom: true, prenom: true, raisonSociale: true, email: true, type: true },
        },
        items: {
          include: {
            product: { select: { nom: true } },
          },
        },
      },
    });

    const formatted = quotes.map((q) => ({
      id: q.id,
      numero: q.numero,
      user: {
        nom: q.user.nom,
        prenom: q.user.prenom,
        raisonSociale: q.user.raisonSociale,
        email: q.user.email,
        type: q.user.type,
      },
      dateDemande: q.dateDemande,
      dateExpiration: q.dateExpiration,
      status: q.status,
      totalHT: q.totalHT,
      tva: q.tva,
      totalTTC: q.totalTTC,
      commentaireClient: q.commentaireClient,
      itemsCount: q.items.length,
    }));

    return NextResponse.json({ success: true, quotes: formatted });
  } catch (error) {
    console.error("Error fetching quotes:", error);
    return NextResponse.json({ success: true, quotes: [] });
  }
}
