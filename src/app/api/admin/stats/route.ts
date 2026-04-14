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

    // Weekly message counts (last 4 weeks) for chart
    const fourWeeksAgo = new Date();
    fourWeeksAgo.setDate(fourWeeksAgo.getDate() - 28);
    let weeklyMessages: { week: string; count: number }[] = [];
    try {
      const recent = await prisma.contactMessage.findMany({
        where: { createdAt: { gte: fourWeeksAgo } },
        select: { createdAt: true },
      });
      const weeks: Record<string, number> = {};
      recent.forEach(m => {
        const d = new Date(m.createdAt);
        const weekNum = `S${Math.ceil((d.getDate()) / 7)}`;
        const key = `${d.toLocaleString('fr-FR', { month: 'short' })} ${weekNum}`;
        weeks[key] = (weeks[key] || 0) + 1;
      });
      weeklyMessages = Object.entries(weeks).map(([week, count]) => ({ week, count }));
    } catch { /* ignore */ }

    // Blog stats
    let blogTotal = 0;
    let blogPublished = 0;
    try {
      blogTotal = await prisma.blogPost.count();
      blogPublished = await prisma.blogPost.count({ where: { published: true } });
    } catch { /* BlogPost may not exist */ }

    return NextResponse.json({
      success: true,
      data: {
        kpis: {
          contactNew,
          contactTotal,
          quotesTotal,
          realizationsCount,
          thermolaquageDemands,
          blogTotal,
          blogPublished,
        },
        recentContacts,
        recentQuotes,
        weeklyMessages,
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
