import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const PAGE_SLUG = "produits";
const SECTION_KEY = "vedettes";

export interface VedettesItem {
  id: string;
  titre: string;
  description: string;
  imageUrl?: string;
  href: string;
  badge?: string;
}

// GET — récupère les produits vedettes
export async function GET() {
  try {
    const section = await prisma.siteSection.findUnique({
      where: { pageSlug_sectionKey: { pageSlug: PAGE_SLUG, sectionKey: SECTION_KEY } },
    });

    const items: VedettesItem[] = (section?.content as { items?: VedettesItem[] })?.items ?? [];
    return NextResponse.json({ success: true, items, active: section?.active ?? true });
  } catch (error) {
    console.error("Error fetching vedettes:", error);
    return NextResponse.json({ success: true, items: [] });
  }
}

// POST — met à jour les produits vedettes
export async function POST(request: NextRequest) {
  try {
    const { items, active = true } = await request.json();

    const section = await prisma.siteSection.upsert({
      where: { pageSlug_sectionKey: { pageSlug: PAGE_SLUG, sectionKey: SECTION_KEY } },
      update: { content: { items }, active },
      create: { pageSlug: PAGE_SLUG, sectionKey: SECTION_KEY, content: { items }, active, ordre: 10 },
    });

    return NextResponse.json({ success: true, section });
  } catch (error) {
    console.error("Error saving vedettes:", error);
    return NextResponse.json({ error: "Erreur lors de la sauvegarde" }, { status: 500 });
  }
}
