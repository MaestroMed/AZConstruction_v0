import { NextResponse } from "next/server";

// Mock stats data - will be replaced with real Prisma queries
const mockStats = {
  kpis: {
    revenue: {
      value: 72450,
      change: 12.5,
    },
    orders: {
      value: 98,
      change: 8.2,
    },
    pendingQuotes: {
      value: 12,
      change: -5,
    },
    newClients: {
      value: 24,
      change: 15.3,
    },
  },
  revenueByMonth: [
    { name: "Jan", ca: 32000, commandes: 45 },
    { name: "Fév", ca: 38000, commandes: 52 },
    { name: "Mar", ca: 45000, commandes: 61 },
    { name: "Avr", ca: 42000, commandes: 58 },
    { name: "Mai", ca: 51000, commandes: 72 },
    { name: "Jui", ca: 48000, commandes: 65 },
    { name: "Jul", ca: 55000, commandes: 78 },
    { name: "Aoû", ca: 43000, commandes: 55 },
    { name: "Sep", ca: 62000, commandes: 85 },
    { name: "Oct", ca: 58000, commandes: 79 },
    { name: "Nov", ca: 67000, commandes: 92 },
    { name: "Déc", ca: 72000, commandes: 98 },
  ],
  categoryDistribution: [
    { name: "Portes", value: 35 },
    { name: "Garde-corps", value: 25 },
    { name: "Escaliers", value: 18 },
    { name: "Fenêtres", value: 15 },
    { name: "Grilles", value: 12 },
    { name: "Portails", value: 18 },
    { name: "Clôtures", value: 10 },
  ],
  topProducts: [
    { name: "Porte Jansen Design", value: 156 },
    { name: "Garde-corps Verre", value: 124 },
    { name: "Escalier Hélicoïdal", value: 89 },
    { name: "Fenêtre Atelier", value: 76 },
    { name: "Grille Acoustique", value: 52 },
  ],
};

export async function GET() {
  try {
    // TODO: Replace with actual Prisma queries when DB is set up
    // const [orders, quotes, users] = await Promise.all([
    //   prisma.order.findMany({ ... }),
    //   prisma.quote.findMany({ ... }),
    //   prisma.user.findMany({ ... }),
    // ]);

    return NextResponse.json({
      success: true,
      data: mockStats,
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}


