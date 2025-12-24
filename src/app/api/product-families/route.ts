import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET - Fetch all product families or a specific one by slug
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  try {
    if (slug) {
      const family = await prisma.productFamily.findUnique({
        where: { slug },
        include: {
          heroImages: {
            orderBy: { ordre: "asc" },
          },
        },
      });

      if (!family) {
        return NextResponse.json(
          { error: "Product family not found" },
          { status: 404 }
        );
      }

      return NextResponse.json({ success: true, family });
    }

    // Get all families
    const families = await prisma.productFamily.findMany({
      where: { active: true },
      orderBy: { ordre: "asc" },
      include: {
        heroImages: {
          orderBy: { ordre: "asc" },
        },
      },
    });

    return NextResponse.json({ success: true, families });
  } catch (error) {
    console.error("Error fetching product families:", error);
    return NextResponse.json(
      { error: "Failed to fetch product families" },
      { status: 500 }
    );
  }
}

// POST - Create or update a product family
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      id,
      slug,
      nom,
      description,
      imageUrl,
      ordre,
      active,
      tagline,
      longDescription,
      startingPrice,
      unit,
      features,
      benefits,
      variants,
      specifications,
      seoTitle,
      seoDescription,
    } = body;

    const data = {
      slug,
      nom,
      description,
      imageUrl,
      ordre: ordre ?? 0,
      active: active ?? true,
      tagline,
      longDescription,
      startingPrice,
      unit,
      features: features || [],
      benefits,
      variants,
      specifications,
      seoTitle,
      seoDescription,
    };

    let family;

    if (id) {
      // Update existing
      family = await prisma.productFamily.update({
        where: { id },
        data,
        include: {
          heroImages: {
            orderBy: { ordre: "asc" },
          },
        },
      });
    } else {
      // Create new
      family = await prisma.productFamily.create({
        data,
        include: {
          heroImages: {
            orderBy: { ordre: "asc" },
          },
        },
      });
    }

    return NextResponse.json({ success: true, family });
  } catch (error) {
    console.error("Error saving product family:", error);
    return NextResponse.json(
      { error: "Failed to save product family" },
      { status: 500 }
    );
  }
}

// DELETE - Delete a product family
export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Product family ID is required" },
      { status: 400 }
    );
  }

  try {
    await prisma.productFamily.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: "Product family deleted" });
  } catch (error) {
    console.error("Error deleting product family:", error);
    return NextResponse.json(
      { error: "Failed to delete product family" },
      { status: 500 }
    );
  }
}


