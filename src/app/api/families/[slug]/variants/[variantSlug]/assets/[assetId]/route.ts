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

async function resolveVariantId(
  familySlug: string,
  variantSlug: string
): Promise<string | null> {
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
  return variant?.id ?? null;
}

/**
 * PATCH /api/families/[slug]/variants/[variantSlug]/assets/[assetId]
 */
export async function PATCH(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{ slug: string; variantSlug: string; assetId: string }>;
  }
) {
  try {
    const { slug, variantSlug, assetId } = await params;
    const body = await request.json();

    const variantId = await resolveVariantId(slug, variantSlug);
    if (!variantId) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const existing = await prisma.productVariantAsset.findUnique({
      where: { id: assetId },
    });
    if (!existing || existing.variantId !== variantId) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const data: Prisma.ProductVariantAssetUpdateInput = {};

    if ("type" in body) {
      if (!isAssetType(body.type)) {
        return NextResponse.json(
          { error: `Invalid 'type'. Expected one of: ${ASSET_TYPES.join(", ")}` },
          { status: 400 }
        );
      }
      data.type = body.type;
    }
    if ("role" in body) {
      if (!isAssetRole(body.role)) {
        return NextResponse.json(
          { error: `Invalid 'role'. Expected one of: ${ASSET_ROLES.join(", ")}` },
          { status: 400 }
        );
      }
      data.role = body.role;
    }
    if ("url" in body) {
      if (typeof body.url !== "string") {
        return NextResponse.json(
          { error: "Invalid 'url'" },
          { status: 400 }
        );
      }
      data.url = body.url;
    }
    if ("alt" in body) data.alt = body.alt ?? null;
    if ("posterUrl" in body) data.posterUrl = body.posterUrl ?? null;
    if ("ordre" in body) {
      if (typeof body.ordre !== "number") {
        return NextResponse.json(
          { error: "Invalid 'ordre'" },
          { status: 400 }
        );
      }
      data.ordre = body.ordre;
    }

    const asset = await prisma.productVariantAsset.update({
      where: { id: assetId },
      data,
    });

    return NextResponse.json({ success: true, asset }, { status: 200 });
  } catch (err) {
    console.error(
      "[families/[slug]/variants/[variantSlug]/assets/[assetId]] PATCH",
      err
    );
    return NextResponse.json(
      { error: "Failed to update asset" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/families/[slug]/variants/[variantSlug]/assets/[assetId]
 */
export async function DELETE(
  _request: NextRequest,
  {
    params,
  }: {
    params: Promise<{ slug: string; variantSlug: string; assetId: string }>;
  }
) {
  try {
    const { slug, variantSlug, assetId } = await params;

    const variantId = await resolveVariantId(slug, variantSlug);
    if (!variantId) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const existing = await prisma.productVariantAsset.findUnique({
      where: { id: assetId },
    });
    if (!existing || existing.variantId !== variantId) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    await prisma.productVariantAsset.delete({ where: { id: assetId } });

    return NextResponse.json(
      { success: true, message: "Asset deleted" },
      { status: 200 }
    );
  } catch (err) {
    console.error(
      "[families/[slug]/variants/[variantSlug]/assets/[assetId]] DELETE",
      err
    );
    return NextResponse.json(
      { error: "Failed to delete asset" },
      { status: 500 }
    );
  }
}
