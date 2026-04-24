import { NextRequest, NextResponse } from "next/server";
import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/families
 *
 * Query params (tous optionnels) :
 *   - active=true|false          : filtre par active (defaut : toutes)
 *   - withVariants=true|false    : inclut productVariants (defaut : false)
 *   - withAssets=true|false      : inclut assets de la famille (defaut : false)
 *
 * Par defaut renvoie uniquement la liste des familles, sans relations.
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const activeParam = searchParams.get("active");
    const withVariants = searchParams.get("withVariants") === "true";
    const withAssets = searchParams.get("withAssets") === "true";

    const where: Prisma.ProductFamilyWhereInput = {};
    if (activeParam === "true") where.active = true;
    else if (activeParam === "false") where.active = false;

    const include: Prisma.ProductFamilyInclude = {};
    if (withVariants) {
      include.productVariants = {
        include: { assets: true },
        orderBy: { ordre: "asc" },
      };
    }
    if (withAssets) {
      include.assets = {
        orderBy: [{ role: "asc" }, { ordre: "asc" }],
      };
    }

    const families = await prisma.productFamily.findMany({
      where,
      orderBy: { ordre: "asc" },
      ...(withVariants || withAssets ? { include } : {}),
    });

    return NextResponse.json({ success: true, families }, { status: 200 });
  } catch (err) {
    console.error("[families/route] GET", err);
    return NextResponse.json(
      { error: "Failed to fetch families" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/families
 *
 * Body : { slug, nom, description?, tagline?, longDescription?, features?, ... }
 * Cree une nouvelle famille.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      slug,
      nom,
      description,
      imageUrl,
      ordre,
      active,
      tagline,
      longDescription,
      heroVideoUrl,
      startingPrice,
      unit,
      features,
      benefits,
      specifications,
      seoTitle,
      seoDescription,
    } = body ?? {};

    if (!slug || typeof slug !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid 'slug'" },
        { status: 400 }
      );
    }
    if (!nom || typeof nom !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid 'nom'" },
        { status: 400 }
      );
    }

    // Verifie unicite
    const existing = await prisma.productFamily.findUnique({ where: { slug } });
    if (existing) {
      return NextResponse.json(
        { error: "A family with this slug already exists" },
        { status: 409 }
      );
    }

    const family = await prisma.productFamily.create({
      data: {
        slug,
        nom,
        description: description ?? null,
        imageUrl: imageUrl ?? null,
        ordre: typeof ordre === "number" ? ordre : 0,
        active: typeof active === "boolean" ? active : true,
        tagline: tagline ?? null,
        longDescription: longDescription ?? null,
        heroVideoUrl: heroVideoUrl ?? null,
        startingPrice: startingPrice ?? null,
        unit: unit ?? null,
        features: Array.isArray(features) ? features : [],
        benefits: benefits ?? undefined,
        specifications: specifications ?? undefined,
        seoTitle: seoTitle ?? null,
        seoDescription: seoDescription ?? null,
      },
    });

    return NextResponse.json({ success: true, family }, { status: 201 });
  } catch (err) {
    console.error("[families/route] POST", err);
    return NextResponse.json(
      { error: "Failed to create family" },
      { status: 500 }
    );
  }
}
