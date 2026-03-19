import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const DEFAULT_SLIDES = [
  { id: "default-1", ordre: 0, active: true, imageKey: "hero-carousel-1", headline: "Garde-corps", headlineAccent: "sur mesure.", subheadline: "Verre feuilleté, câbles acier, barreaux design — fabriqués dans notre atelier de 1 800m² à Bruyères-sur-Oise.", ctaText: "Découvrir les garde-corps", ctaLink: "/produits/garde-corps" },
  { id: "default-2", ordre: 1, active: true, imageKey: "hero-carousel-2", headline: "Escaliers", headlineAccent: "d'exception.", subheadline: "Droits, hélicoïdaux, quart-tournant — chaque escalier est une pièce unique conçue sur mesure.", ctaText: "Voir nos escaliers", ctaLink: "/produits/escaliers" },
  { id: "default-3", ordre: 2, active: true, imageKey: "hero-carousel-3", headline: "L'acier", headlineAccent: "à votre image.", subheadline: "Portails, clôtures, portes Jansen, verrières — tout fabriqué sur mesure depuis 2018.", ctaText: "Explorer nos produits", ctaLink: "/produits" },
];

export async function GET() {
  try {
    const slides = await prisma.heroSlide.findMany({
      where: { active: true },
      orderBy: { ordre: "asc" },
    });
    if (slides.length === 0) return NextResponse.json({ success: true, slides: DEFAULT_SLIDES, isDefault: true });
    return NextResponse.json({ success: true, slides });
  } catch {
    return NextResponse.json({ success: true, slides: DEFAULT_SLIDES, isDefault: true });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { ordre = 0, active = true, imageKey, headline, headlineAccent, subheadline, ctaText, ctaLink } = body;
    if (!imageKey || !headline || !headlineAccent || !subheadline || !ctaText || !ctaLink) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
    }
    const slide = await prisma.heroSlide.create({ data: { ordre, active, imageKey, headline, headlineAccent, subheadline, ctaText, ctaLink } });
    return NextResponse.json({ success: true, slide });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Erreur création slide" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...data } = body;
    if (!id) return NextResponse.json({ error: "ID requis" }, { status: 400 });
    const slide = await prisma.heroSlide.update({ where: { id }, data });
    return NextResponse.json({ success: true, slide });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Erreur mise à jour" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "ID requis" }, { status: 400 });
  try {
    await prisma.heroSlide.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Erreur suppression" }, { status: 500 });
  }
}
