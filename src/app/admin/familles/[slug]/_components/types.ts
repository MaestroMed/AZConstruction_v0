import type { Asset } from "@/components/admin/products/AssetUploader";

export interface Benefit {
  icon?: string;
  title?: string;
  description?: string;
}

export interface Specification {
  label?: string;
  value?: string;
}

export interface VariantData {
  id: string;
  slug: string;
  name: string;
  description?: string | null;
  features: string[];
  startingPrice?: string | null;
  ordre: number;
  active: boolean;
  assets: Asset[];
}

export type Variant = VariantData;

export interface FamilyData {
  id: string;
  slug: string;
  nom: string;
  description: string | null;
  imageUrl: string | null;
  ordre: number;
  active: boolean;

  tagline: string | null;
  longDescription: string | null;
  heroVideoUrl: string | null;
  startingPrice: string | null;
  unit: string | null;
  features: string[];
  benefits: Benefit[] | null;
  specifications: Specification[] | null;

  seoTitle: string | null;
  seoDescription: string | null;

  productVariants: VariantData[];
  assets: Asset[];
}
