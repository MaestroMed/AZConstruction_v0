import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const [
      contactTotal,
      contactNew,
      quotesTotal,
      realizationsCount,
      thermolaquageDemands,
      recentContacts,
      recentQuotes,
    ] = await Promise.all([
      prisma.contactMessage.count(),
      prisma.contactMessage.count({ where: { status: "nouveau" } }),
      prisma.quote.count().catch(() => 0),
      prisma.realization.count({ where: { published: true } }),
      prisma.thermolaquageDemand.count().catch(() => 0),
      prisma.contactMessage.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
        select: { id: true, nom: true, email: true, sujet: true, type: true, status: true, createdAt: true },
      }),
      prisma.quote.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
        include: {
          user: {
            select: { nom: true, prenom: true, email: true },
          },
        },
      }).catch(() => []),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        kpis: {
          contactNew,
          contactTotal,
          quotesTotal,
          realizationsCount,
          thermolaquageDemands,
        },
        recentContacts,
        recentQuotes,
      },
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
