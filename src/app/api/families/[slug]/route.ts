import { NextRequest, NextResponse } from "next/server";
import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/families/[slug]
 *
 * Retourne la famille, ses productVariants (avec leurs assets) et ses assets.
 * Assets tries par (role ASC, ordre ASC).
 */
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const family = await prisma.productFamily.findUnique({
      where: { slug },
      include: {
        productVariants: {
          orderBy: { ordre: "asc" },
          include: {
            assets: {
              orderBy: [{ role: "asc" }, { ordre: "asc" }],
            },
          },
        },
        assets: {
          orderBy: [{ role: "asc" }, { ordre: "asc" }],
        },
      },
    });

    if (!family) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, family }, { status: 200 });
  } catch (err) {
    console.error("[families/[slug]] GET", err);
    return NextResponse.json(
      { error: "Failed to fetch family" },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/families/[slug]
 *
 * Update la famille. Accepte tous les champs editables.
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const body = await request.json();

    const existing = await prisma.productFamily.findUnique({ where: { slug } });
    if (!existing) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const data: Prisma.ProductFamilyUpdateInput = {};
    const allowed: (keyof Prisma.ProductFamilyUpdateInput)[] = [
      "slug",
      "nom",
      "description",
      "imageUrl",
      "ordre",
      "active",
      "tagline",
      "longDescription",
      "heroVideoUrl",
      "startingPrice",
      "unit",
      "features",
      "benefits",
      "specifications",
      "seoTitle",
      "seoDescription",
    ];

    for (const key of allowed) {
      if (key in body) {
        // features doit etre un string[] ; Prisma s'en charge tant qu'on passe un tableau
        (data as Record<string, unknown>)[key] = body[key];
      }
    }

    const family = await prisma.productFamily.update({
      where: { slug },
      data,
    });

    return NextResponse.json({ success: true, family }, { status: 200 });
  } catch (err) {
    console.error("[families/[slug]] PATCH", err);
    return NextResponse.json(
      { error: "Failed to update family" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/families/[slug]
 *
 * Supprime la famille. Les variants et assets sont supprimes en cascade
 * via onDelete: Cascade dans le schema Prisma.
 */
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const existing = await prisma.productFamily.findUnique({ where: { slug } });
    if (!existing) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    await prisma.productFamily.delete({ where: { slug } });

    return NextResponse.json(
      { success: true, message: "Family deleted" },
      { status: 200 }
    );
  } catch (err) {
    console.error("[families/[slug]] DELETE", err);
    return NextResponse.json(
      { error: "Failed to delete family" },
      { status: 500 }
    );
  }
}
