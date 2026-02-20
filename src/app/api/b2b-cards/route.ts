import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const SLUG = "b2b-cards-data";

const DEFAULT_CARDS = [
  {
    title: "Garde-corps collectif",
    client: "Promoteur IDF",
    location: "Île-de-France",
    imageKey: "realisation-b2b-1",
  },
  {
    title: "Escalier industriel",
    client: "Usine automobile",
    location: "Seine-et-Marne (77)",
    imageKey: "realisation-b2b-2",
  },
  {
    title: "Portails résidence",
    client: "Collectivité locale",
    location: "Val-d'Oise (95)",
    imageKey: "realisation-b2b-3",
  },
];

export async function GET() {
  try {
    const record = await prisma.page.findUnique({
      where: { slug: SLUG },
    });

    if (record) {
      try {
        const cards = JSON.parse(record.content);
        return NextResponse.json({ success: true, cards });
      } catch {
        return NextResponse.json({ success: true, cards: DEFAULT_CARDS });
      }
    }

    return NextResponse.json({ success: true, cards: DEFAULT_CARDS });
  } catch (error) {
    console.error("Error fetching B2B cards:", error);
    return NextResponse.json({ success: true, cards: DEFAULT_CARDS, fallback: true });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { cards } = body;

    if (!cards || !Array.isArray(cards)) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    await prisma.page.upsert({
      where: { slug: SLUG },
      update: {
        content: JSON.stringify(cards),
        updatedAt: new Date(),
      },
      create: {
        slug: SLUG,
        title: "B2B Cards Data",
        content: JSON.stringify(cards),
        published: false,
      },
    });

    return NextResponse.json({ success: true, cards });
  } catch (error) {
    console.error("Error saving B2B cards:", error);
    return NextResponse.json(
      { error: "Erreur lors de la sauvegarde" },
      { status: 500 }
    );
  }
}
