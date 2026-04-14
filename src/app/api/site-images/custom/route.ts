import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// POST: Create a new custom site image entry (for partner logos, etc.)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { key, category, label, description, fallbackUrl } = body;

    if (!key || !category || !label || !fallbackUrl) {
      return NextResponse.json(
        { error: "key, category, label et fallbackUrl sont requis" },
        { status: 400 }
      );
    }

    // Check if key already exists
    const existing = await prisma.siteImage.findUnique({ where: { key } });
    if (existing) {
      return NextResponse.json(
        { error: "Cette clé existe déjà" },
        { status: 409 }
      );
    }

    const image = await prisma.siteImage.create({
      data: {
        key,
        category,
        label,
        description: description || null,
        fallbackUrl,
        imageUrl: null,
        zoom: 1.0,
      },
    });

    return NextResponse.json({ success: true, image });
  } catch (error) {
    console.error("Error creating custom site image:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création" },
      { status: 500 }
    );
  }
}

// DELETE: Remove a custom site image entry
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get("key");

    if (!key) {
      return NextResponse.json({ error: "key requis" }, { status: 400 });
    }

    await prisma.siteImage.delete({ where: { key } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting custom site image:", error);
    return NextResponse.json(
      { error: "Erreur lors de la suppression" },
      { status: 500 }
    );
  }
}
