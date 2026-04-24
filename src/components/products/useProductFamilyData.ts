"use client";

import * as React from "react";
import type { ProductFamily } from "@/lib/data/product-families";
import type { VariantWithImages } from "./variant-utils";

interface ProductFamilyData {
  heroImages: string[];
  heroIndex: number;
  setHeroIndex: React.Dispatch<React.SetStateAction<number>>;
  heroVideoUrl: string | null;
  dbVariants: VariantWithImages[];
  dbSpecs: ProductFamily["specifications"];
  dbBenefits: ProductFamily["benefits"];
  otherFamilies: { id: string; nom: string; slug: string; imageUrl?: string }[];
  galleryVariant: VariantWithImages | null;
  setGalleryVariant: React.Dispatch<React.SetStateAction<VariantWithImages | null>>;
}

// ── DB shapes returned by /api/families/[slug] ───────────────────
interface DbAsset {
  id: string;
  type: "IMAGE" | "VIDEO";
  role: "HERO" | "GALLERY" | "CARD";
  url: string;
  alt?: string | null;
  posterUrl?: string | null;
  ordre: number;
}

interface DbProductVariant {
  id: string;
  slug: string;
  name: string;
  description?: string | null;
  features: string[];
  startingPrice?: string | null;
  ordre: number;
  active: boolean;
  assets: DbAsset[];
}

interface DbFamily {
  id: string;
  slug: string;
  nom: string;
  productVariants?: DbProductVariant[];
  assets?: DbAsset[];
  specifications?: unknown;
  benefits?: unknown;
}

function assetsByRole(
  assets: DbAsset[] | undefined,
  role: DbAsset["role"],
  type?: DbAsset["type"]
): DbAsset[] {
  if (!assets) return [];
  return assets
    .filter((a) => a.role === role && (type ? a.type === type : true))
    .sort((a, b) => a.ordre - b.ordre);
}

function mapDbVariant(v: DbProductVariant): VariantWithImages {
  const cardAssets = assetsByRole(v.assets, "CARD", "IMAGE");
  const galleryAssets = assetsByRole(v.assets, "GALLERY", "IMAGE");
  const heroVideoAsset = assetsByRole(v.assets, "HERO", "VIDEO")[0];

  const imageUrl = cardAssets[0]?.url;
  const images = galleryAssets.map((a) => a.url);
  const heroVideoUrl = heroVideoAsset?.url;

  return {
    id: v.slug,
    name: v.name,
    description: v.description ?? "",
    features: v.features ?? [],
    startingPrice: v.startingPrice ?? undefined,
    imageUrl,
    images: images.length > 0 ? images : undefined,
    ...(heroVideoUrl ? { heroVideoUrl } : {}),
  } as VariantWithImages;
}

export function useProductFamilyData(slug: string, product: ProductFamily): ProductFamilyData {
  const [heroImages, setHeroImages] = React.useState<string[]>(product.heroImages);
  const [heroIndex, setHeroIndex] = React.useState(0);
  const [heroVideoUrl, setHeroVideoUrl] = React.useState<string | null>(product.heroVideoUrl ?? null);
  const [dbVariants, setDbVariants] = React.useState<VariantWithImages[]>(product.variants);
  const [dbSpecs, setDbSpecs] = React.useState(product.specifications);
  const [dbBenefits, setDbBenefits] = React.useState(product.benefits);
  const [otherFamilies, setOtherFamilies] = React.useState<ProductFamilyData["otherFamilies"]>([]);
  const [galleryVariant, setGalleryVariant] = React.useState<VariantWithImages | null>(null);

  // Fetch all data
  React.useEffect(() => {
    // Nouvelle source de vérité : /api/families/[slug] (ProductVariant + Assets relations)
    fetch(`/api/families/${slug}`)
      .then((r) => r.json())
      .then((data: { success?: boolean; family?: DbFamily }) => {
        if (!data.success || !data.family) return;
        const fam = data.family;

        // Hero images viennent désormais de family.assets role=HERO type=IMAGE
        const heroImageAssets = assetsByRole(fam.assets, "HERO", "IMAGE");
        if (heroImageAssets.length > 0) {
          setHeroImages(heroImageAssets.map((a) => a.url));
        }

        // Hero video : family.assets role=HERO type=VIDEO
        const heroVideoAsset = assetsByRole(fam.assets, "HERO", "VIDEO")[0];
        if (heroVideoAsset) {
          setHeroVideoUrl(heroVideoAsset.url);
        }

        // Variants : mapper ProductVariant DB vers VariantWithImages
        if (Array.isArray(fam.productVariants) && fam.productVariants.length > 0) {
          const mapped = fam.productVariants.map((dbV) => {
            const base = mapDbVariant(dbV);
            // Merge avec static (pour conserver les éventuels champs non migrés)
            const staticV = product.variants.find((sv) => sv.id === base.id);
            return staticV ? { ...staticV, ...base } : base;
          });
          setDbVariants(mapped);
        }

        // Specs / benefits : format Json existant, on garde tel quel
        if (Array.isArray(fam.specifications) && fam.specifications.length > 0) {
          setDbSpecs(fam.specifications as typeof product.specifications);
        }
        if (Array.isArray(fam.benefits) && fam.benefits.length > 0) {
          setDbBenefits(fam.benefits as typeof product.benefits);
        }
      })
      .catch(() => {});

    // Liste des autres familles pour la nav secondaire — inchangé
    fetch("/api/product-families")
      .then((r) => r.json())
      .then((data) => {
        if (data.success && data.families) {
          setOtherFamilies(data.families.filter((f: { slug: string }) => f.slug !== slug));
        }
      })
      .catch(() => {});
  }, [slug, product.variants, product.specifications, product.benefits]);

  // Auto-advance hero (disabled when a video is active)
  React.useEffect(() => {
    if (heroVideoUrl) return;
    if (heroImages.length <= 1) return;
    const t = setInterval(() => setHeroIndex((i) => (i + 1) % heroImages.length), 5000);
    return () => clearInterval(t);
  }, [heroImages.length, heroVideoUrl]);

  return {
    heroImages,
    heroIndex,
    setHeroIndex,
    heroVideoUrl,
    dbVariants,
    dbSpecs,
    dbBenefits,
    otherFamilies,
    galleryVariant,
    setGalleryVariant,
  };
}
