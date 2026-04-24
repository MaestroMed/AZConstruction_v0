import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * POST /api/families/[slug]/variants
 *
 * Body : { slug, name, description?, features?, startingPrice?, ordre? }
 * Cree un variant dans la famille. Valide que le slug est unique dans la famille.
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug: familySlug } = await params;
    const body = await request.json();
    const {
      slug: variantSlug,
      name,
      description,
      features,
      startingPrice,
      ordre,
      active,
    } = body ?? {};

    if (!variantSlug || typeof variantSlug !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid 'slug'" },
        { status: 400 }
      );
    }
    if (!name || typeof name !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid 'name'" },
        { status: 400 }
      );
    }

    // Trouve la famille
    const family = await prisma.productFamily.findUnique({
      where: { slug: familySlug },
      select: { id: true },
    });
    if (!family) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    // Verifie unicite du slug dans la famille
    const existing = await prisma.productVariant.findUnique({
      where: {
        familyId_slug: {
          familyId: family.id,
          slug: variantSlug,
        },
      },
    });
    if (existing) {
      return NextResponse.json(
        { error: "A variant with this slug already exists in this family" },
        { status: 409 }
      );
    }

    const variant = await prisma.productVariant.create({
      data: {
        familyId: family.id,
        slug: variantSlug,
        name,
        description: description ?? null,
        features: Array.isArray(features) ? features : [],
        startingPrice: startingPrice ?? null,
        ordre: typeof ordre === "number" ? ordre : 0,
        active: typeof active === "boolean" ? active : true,
      },
    });

    return NextResponse.json({ success: true, variant }, { status: 201 });
  } catch (err) {
    console.error("[families/[slug]/variants] POST", err);
    return NextResponse.json(
      { error: "Failed to create variant" },
      { status: 500 }
    );
  }
}
