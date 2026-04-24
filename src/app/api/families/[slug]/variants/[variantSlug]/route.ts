import { NextRequest, NextResponse } from "next/server";
import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/families/[slug]/variants/[variantSlug]
 *
 * Detail du variant + ses assets.
 */
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string; variantSlug: string }> }
) {
  try {
    const { slug: familySlug, variantSlug } = await params;

    const family = await prisma.productFamily.findUnique({
      where: { slug: familySlug },
      select: { id: true },
    });
    if (!family) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const variant = await prisma.productVariant.findUnique({
      where: {
        familyId_slug: {
          familyId: family.id,
          slug: variantSlug,
        },
      },
      include: {
        assets: {
          orderBy: [{ role: "asc" }, { ordre: "asc" }],
        },
      },
    });

    if (!variant) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, variant }, { status: 200 });
  } catch (err) {
    console.error("[families/[slug]/variants/[variantSlug]] GET", err);
    return NextResponse.json(
      { error: "Failed to fetch variant" },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/families/[slug]/variants/[variantSlug]
 *
 * Update du variant. Accepte slug, name, description, features, startingPrice, ordre, active.
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string; variantSlug: string }> }
) {
  try {
    const { slug: familySlug, variantSlug } = await params;
    const body = await request.json();

    const family = await prisma.productFamily.findUnique({
      where: { slug: familySlug },
      select: { id: true },
    });
    if (!family) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const existing = await prisma.productVariant.findUnique({
      where: {
        familyId_slug: {
          familyId: family.id,
          slug: variantSlug,
        },
      },
    });
    if (!existing) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const data: Prisma.ProductVariantUpdateInput = {};
    const allowed: (keyof Prisma.ProductVariantUpdateInput)[] = [
      "slug",
      "name",
      "description",
      "features",
      "startingPrice",
      "ordre",
      "active",
    ];
    for (const key of allowed) {
      if (key in body) {
        (data as Record<string, unknown>)[key] = body[key];
      }
    }

    // Si on change le slug, verifier unicite dans la famille
    if (typeof body.slug === "string" && body.slug !== variantSlug) {
      const collision = await prisma.productVariant.findUnique({
        where: {
          familyId_slug: {
            familyId: family.id,
            slug: body.slug,
          },
        },
      });
      if (collision) {
        return NextResponse.json(
          { error: "A variant with this slug already exists in this family" },
          { status: 409 }
        );
      }
    }

    const variant = await prisma.productVariant.update({
      where: { id: existing.id },
      data,
    });

    return NextResponse.json({ success: true, variant }, { status: 200 });
  } catch (err) {
    console.error("[families/[slug]/variants/[variantSlug]] PATCH", err);
    return NextResponse.json(
      { error: "Failed to update variant" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/families/[slug]/variants/[variantSlug]
 *
 * Supprime le variant. Les assets sont supprimes en cascade.
 */
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string; variantSlug: string }> }
) {
  try {
    const { slug: familySlug, variantSlug } = await params;

    const family = await prisma.productFamily.findUnique({
      where: { slug: familySlug },
      select: { id: true },
    });
    if (!family) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const existing = await prisma.productVariant.findUnique({
      where: {
        familyId_slug: {
          familyId: family.id,
          slug: variantSlug,
        },
      },
    });
    if (!existing) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    await prisma.productVariant.delete({ where: { id: existing.id } });

    return NextResponse.json(
      { success: true, message: "Variant deleted" },
      { status: 200 }
    );
  } catch (err) {
    console.error("[families/[slug]/variants/[variantSlug]] DELETE", err);
    return NextResponse.json(
      { error: "Failed to delete variant" },
      { status: 500 }
    );
  }
}
