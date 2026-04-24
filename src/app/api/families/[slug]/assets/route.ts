import { NextRequest, NextResponse } from "next/server";
import { AssetType, AssetRole, type Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

const ASSET_TYPES = Object.values(AssetType) as AssetType[];
const ASSET_ROLES = Object.values(AssetRole) as AssetRole[];

function isAssetType(value: unknown): value is AssetType {
  return typeof value === "string" && (ASSET_TYPES as string[]).includes(value);
}

function isAssetRole(value: unknown): value is AssetRole {
  return typeof value === "string" && (ASSET_ROLES as string[]).includes(value);
}

/**
 * GET /api/families/[slug]/assets
 *
 * Query params (optionnels) :
 *   - role=HERO|GALLERY|CARD
 *   - type=IMAGE|VIDEO
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const { searchParams } = new URL(request.url);
    const roleParam = searchParams.get("role");
    const typeParam = searchParams.get("type");

    const family = await prisma.productFamily.findUnique({
      where: { slug },
      select: { id: true },
    });
    if (!family) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const where: Prisma.ProductFamilyAssetWhereInput = { familyId: family.id };
    if (roleParam) {
      if (!isAssetRole(roleParam)) {
        return NextResponse.json(
          { error: `Invalid role. Expected one of: ${ASSET_ROLES.join(", ")}` },
          { status: 400 }
        );
      }
      where.role = roleParam;
    }
    if (typeParam) {
      if (!isAssetType(typeParam)) {
        return NextResponse.json(
          { error: `Invalid type. Expected one of: ${ASSET_TYPES.join(", ")}` },
          { status: 400 }
        );
      }
      where.type = typeParam;
    }

    const assets = await prisma.productFamilyAsset.findMany({
      where,
      orderBy: [{ role: "asc" }, { ordre: "asc" }],
    });

    return NextResponse.json({ success: true, assets }, { status: 200 });
  } catch (err) {
    console.error("[families/[slug]/assets] GET", err);
    return NextResponse.json(
      { error: "Failed to fetch assets" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/families/[slug]/assets
 *
 * Body : { type, role, url, alt?, posterUrl?, ordre? }
 * Si `ordre` est absent, utilise max(ordre)+1 dans la meme role.
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const body = await request.json();
    const { type, role, url, alt, posterUrl, ordre } = body ?? {};

    if (!isAssetType(type)) {
      return NextResponse.json(
        { error: `Invalid 'type'. Expected one of: ${ASSET_TYPES.join(", ")}` },
        { status: 400 }
      );
    }
    if (!isAssetRole(role)) {
      return NextResponse.json(
        { error: `Invalid 'role'. Expected one of: ${ASSET_ROLES.join(", ")}` },
        { status: 400 }
      );
    }
    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid 'url'" },
        { status: 400 }
      );
    }

    const family = await prisma.productFamily.findUnique({
      where: { slug },
      select: { id: true },
    });
    if (!family) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    let finalOrdre: number;
    if (typeof ordre === "number") {
      finalOrdre = ordre;
    } else {
      const max = await prisma.productFamilyAsset.aggregate({
        where: { familyId: family.id, role },
        _max: { ordre: true },
      });
      finalOrdre = (max._max.ordre ?? -1) + 1;
    }

    const asset = await prisma.productFamilyAsset.create({
      data: {
        familyId: family.id,
        type,
        role,
        url,
        alt: alt ?? null,
        posterUrl: posterUrl ?? null,
        ordre: finalOrdre,
      },
    });

    return NextResponse.json({ success: true, asset }, { status: 201 });
  } catch (err) {
    console.error("[families/[slug]/assets] POST", err);
    return NextResponse.json(
      { error: "Failed to create asset" },
      { status: 500 }
    );
  }
}
