import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { clientDemands } from "@/lib/data/thermolaquage-items";

// Fallback statique
const DEFAULT_ITEMS = clientDemands.map((d, i) => ({
  id: `static-${d.id}`,
  label: d.title,
  imageUrl: d.imageUrl,
  href: null,
  size: d.size,
  ordre: i,
  active: true,
}));

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const forceDefault = searchParams.get("forceDefault") === "true";

    if (forceDefault) {
      return NextResponse.json({ success: true, items: DEFAULT_ITEMS, isDefault: true });
    }

    const items = await prisma.thermolaquageDemand.findMany({
      where: { active: true },
      orderBy: { ordre: "asc" },
    });
    if (items.length === 0) return NextResponse.json({ success: true, items: DEFAULT_ITEMS, isDefault: true });
    return NextResponse.json({ success: true, items });
  } catch {
    return NextResponse.json({ success: true, items: DEFAULT_ITEMS, isDefault: true });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { label, imageUrl, href, size = "default", ordre = 0, active = true } = body;
    if (!label || !imageUrl) return NextResponse.json({ error: "label et imageUrl requis" }, { status: 400 });
    const item = await prisma.thermolaquageDemand.create({ data: { label, imageUrl, href, size, ordre, active } });
    return NextResponse.json({ success: true, item });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Erreur création" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...data } = body;
    if (!id) return NextResponse.json({ error: "ID requis" }, { status: 400 });
    const item = await prisma.thermolaquageDemand.update({ where: { id }, data });
    return NextResponse.json({ success: true, item });
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
    await prisma.thermolaquageDemand.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Erreur suppression" }, { status: 500 });
  }
}
