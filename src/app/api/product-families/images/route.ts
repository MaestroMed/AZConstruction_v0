import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET - Fetch hero images for a product family
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const familyId = searchParams.get("familyId");

  if (!familyId) {
    return NextResponse.json(
      { error: "familyId is required" },
      { status: 400 }
    );
  }

  try {
    const images = await prisma.productFamilyImage.findMany({
      where: { familyId },
      orderBy: { ordre: "asc" },
    });

    return NextResponse.json({ success: true, images });
  } catch (error) {
    console.error("Error fetching product family images:", error);
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}

// POST - Add or update a hero image
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, familyId, imageUrl, alt, ordre } = body;

    if (!familyId || !imageUrl) {
      return NextResponse.json(
        { error: "familyId and imageUrl are required" },
        { status: 400 }
      );
    }

    let image;

    if (id) {
      // Update existing
      image = await prisma.productFamilyImage.update({
        where: { id },
        data: { imageUrl, alt, ordre: ordre ?? 0 },
      });
    } else {
      // Create new
      image = await prisma.productFamilyImage.create({
        data: {
          familyId,
          imageUrl,
          alt,
          ordre: ordre ?? 0,
        },
      });
    }

    return NextResponse.json({ success: true, image });
  } catch (error) {
    console.error("Error saving product family image:", error);
    return NextResponse.json(
      { error: "Failed to save image" },
      { status: 500 }
    );
  }
}

// DELETE - Delete a hero image
export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Image ID is required" },
      { status: 400 }
    );
  }

  try {
    await prisma.productFamilyImage.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: "Image deleted" });
  } catch (error) {
    console.error("Error deleting product family image:", error);
    return NextResponse.json(
      { error: "Failed to delete image" },
      { status: 500 }
    );
  }
}

