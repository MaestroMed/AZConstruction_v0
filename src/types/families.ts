import type { Prisma, AssetType, AssetRole } from "@prisma/client";

/**
 * Type d'une ProductFamily incluant ses variants (avec leurs assets)
 * et ses assets directs, tel que renvoye par GET /api/families/[slug].
 */
export type FamilyWithRelations = Prisma.ProductFamilyGetPayload<{
  include: {
    productVariants: {
      include: {
        assets: true;
      };
    };
    assets: true;
  };
}>;

/**
 * Type d'un ProductVariant incluant ses assets,
 * tel que renvoye par GET /api/families/[slug]/variants/[variantSlug].
 */
export type VariantWithAssets = Prisma.ProductVariantGetPayload<{
  include: {
    assets: true;
  };
}>;

/**
 * Payload pour POST d'un asset (famille ou variant).
 */
export type AssetPayload = {
  type: AssetType;
  role: AssetRole;
  url: string;
  alt?: string | null;
  posterUrl?: string | null;
  ordre?: number;
};

export type { AssetType, AssetRole };
