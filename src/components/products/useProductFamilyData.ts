"use client";

import * as React from "react";
import type { ProductFamily } from "@/lib/data/product-families";
import type { VariantWithImages } from "./variant-utils";

interface ProductFamilyData {
  heroImages: string[];
  heroIndex: number;
  setHeroIndex: React.Dispatch<React.SetStateAction<number>>;
  dbVariants: VariantWithImages[];
  dbSpecs: ProductFamily["specifications"];
  dbBenefits: ProductFamily["benefits"];
  otherFamilies: { id: string; nom: string; slug: string; imageUrl?: string }[];
  galleryVariant: VariantWithImages | null;
  setGalleryVariant: React.Dispatch<React.SetStateAction<VariantWithImages | null>>;
}

export function useProductFamilyData(slug: string, product: ProductFamily): ProductFamilyData {
  const [heroImages, setHeroImages] = React.useState<string[]>(product.heroImages);
  const [heroIndex, setHeroIndex] = React.useState(0);
  const [dbVariants, setDbVariants] = React.useState<VariantWithImages[]>(product.variants);
  const [dbSpecs, setDbSpecs] = React.useState(product.specifications);
  const [dbBenefits, setDbBenefits] = React.useState(product.benefits);
  const [otherFamilies, setOtherFamilies] = React.useState<ProductFamilyData["otherFamilies"]>([]);
  const [galleryVariant, setGalleryVariant] = React.useState<VariantWithImages | null>(null);

  // Fetch all data
  React.useEffect(() => {
    fetch(`/api/product-families/images?familySlug=${slug}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.success && data.images?.length) {
          setHeroImages(data.images.map((img: { imageUrl: string }) => img.imageUrl));
        }
      })
      .catch(() => {});

    fetch(`/api/product-families?slug=${slug}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.success && data.family) {
          const fam = data.family;
          if (fam.variants !== null && fam.variants !== undefined) {
            const dbVars = fam.variants as VariantWithImages[];
            setDbVariants(
              dbVars.map((dbV) => {
                const staticV = product.variants.find((sv) => sv.id === dbV.id);
                return staticV ? { ...staticV, ...dbV } : dbV;
              })
            );
          }
          if (fam.specifications?.length) {
            setDbSpecs(fam.specifications as typeof product.specifications);
          }
          if (fam.benefits?.length) {
            setDbBenefits(fam.benefits as typeof product.benefits);
          }
        }
      })
      .catch(() => {});

    fetch("/api/product-families")
      .then((r) => r.json())
      .then((data) => {
        if (data.success && data.families) {
          setOtherFamilies(data.families.filter((f: { slug: string }) => f.slug !== slug));
        }
      })
      .catch(() => {});
  }, [slug, product.variants, product.specifications, product.benefits]);

  // Auto-advance hero
  React.useEffect(() => {
    if (heroImages.length <= 1) return;
    const t = setInterval(() => setHeroIndex((i) => (i + 1) % heroImages.length), 5000);
    return () => clearInterval(t);
  }, [heroImages.length]);

  return {
    heroImages,
    heroIndex,
    setHeroIndex,
    dbVariants,
    dbSpecs,
    dbBenefits,
    otherFamilies,
    galleryVariant,
    setGalleryVariant,
  };
}
