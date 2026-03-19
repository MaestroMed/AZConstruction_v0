import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Récupère ou crée une ProductFamily par slug (pour les familles mock du backoffice)
async function getOrCreateFamily(familySlug: string) {
  let family = await prisma.productFamily.findUnique({ where: { slug: familySlug } });
  if (!family) {
    family = await prisma.productFamily.create({
      data: {
        nom: familySlug,
        slug: familySlug,
        ordre: 0,
      },
    });
  }
  return family;
}

// GET /api/product-families/images?familySlug=garde-corps
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const familySlug = searchParams.get("familySlug");
  if (!familySlug) {
    return NextResponse.json({ error: "familySlug is required" }, { status: 400 });
  }
  try {
    const family = await prisma.productFamily.findUnique({ where: { slug: familySlug } });
    if (!family) return NextResponse.json({ success: true, images: [] });

    const images = await prisma.productFamilyImage.findMany({
      where: { familyId: family.id },
      orderBy: { ordre: "asc" },
    });
    return NextResponse.json({ success: true, images });
  } catch (error) {
    console.error("Error fetching family images:", error);
    return NextResponse.json({ success: true, images: [] });
  }
}

// POST /api/product-families/images — { familySlug, imageUrl, ordre? }
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { familySlug, imageUrl, ordre = 0 } = body;
    if (!familySlug || !imageUrl) {
      return NextResponse.json({ error: "familySlug and imageUrl are required" }, { status: 400 });
    }
    const family = await getOrCreateFamily(familySlug);
    const image = await prisma.productFamilyImage.create({
      data: { familyId: family.id, imageUrl, ordre },
    });
    return NextResponse.json({ success: true, image });
  } catch (error) {
    console.error("Error creating family image:", error);
    return NextResponse.json({ error: "Erreur lors de la création" }, { status: 500 });
  }
}

// DELETE /api/product-families/images?id=xxx
export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Image ID is required" }, { status: 400 });
  }
  try {
    await prisma.productFamilyImage.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting family image:", error);
    return NextResponse.json({ error: "Erreur lors de la suppression" }, { status: 500 });
  }
}

// PATCH /api/product-families/images — { id, ordre }
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ordre } = body;
    if (!id || ordre === undefined) {
      return NextResponse.json({ error: "id and ordre are required" }, { status: 400 });
    }
    const image = await prisma.productFamilyImage.update({
      where: { id },
      data: { ordre },
    });
    return NextResponse.json({ success: true, image });
  } catch (error) {
    console.error("Error updating family image order:", error);
    return NextResponse.json({ error: "Erreur lors de la mise à jour" }, { status: 500 });
  }
}
