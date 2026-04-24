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

async function resolveVariant(familySlug: string, variantSlug: string) {
  const family = await prisma.productFamily.findUnique({
    where: { slug: familySlug },
    select: { id: true },
  });
  if (!family) return null;

  const variant = await prisma.productVariant.findUnique({
    where: {
      familyId_slug: {
        familyId: family.id,
        slug: variantSlug,
      },
    },
    select: { id: true },
  });
  return variant;
}

/**
 * GET /api/families/[slug]/variants/[variantSlug]/assets
 *
 * Query params (optionnels) :
 *   - role=HERO|GALLERY|CARD
 *   - type=IMAGE|VIDEO
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string; variantSlug: string }> }
) {
  try {
    const { slug, variantSlug } = await params;
    const { searchParams } = new URL(request.url);
    const roleParam = searchParams.get("role");
    const typeParam = searchParams.get("type");

    const variant = await resolveVariant(slug, variantSlug);
    if (!variant) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const where: Prisma.ProductVariantAssetWhereInput = { variantId: variant.id };
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

    const assets = await prisma.productVariantAsset.findMany({
      where,
      orderBy: [{ role: "asc" }, { ordre: "asc" }],
    });

    return NextResponse.json({ success: true, assets }, { status: 200 });
  } catch (err) {
    console.error("[families/[slug]/variants/[variantSlug]/assets] GET", err);
    return NextResponse.json(
      { error: "Failed to fetch assets" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/families/[slug]/variants/[variantSlug]/assets
 *
 * Body : { type, role, url, alt?, posterUrl?, ordre? }
 * Si `ordre` absent, utilise max(ordre)+1 dans la meme role.
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string; variantSlug: string }> }
) {
  try {
    const { slug, variantSlug } = await params;
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

    const variant = await resolveVariant(slug, variantSlug);
    if (!variant) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    let finalOrdre: number;
    if (typeof ordre === "number") {
      finalOrdre = ordre;
    } else {
      const max = await prisma.productVariantAsset.aggregate({
        where: { variantId: variant.id, role },
        _max: { ordre: true },
      });
      finalOrdre = (max._max.ordre ?? -1) + 1;
    }

    const asset = await prisma.productVariantAsset.create({
      data: {
        variantId: variant.id,
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
    console.error("[families/[slug]/variants/[variantSlug]/assets] POST", err);
    return NextResponse.json(
      { error: "Failed to create asset" },
      { status: 500 }
    );
  }
}
