export interface VariantWithImages {
  id: string;
  name: string;
  description: string;
  features?: string[];
  imageUrl?: string;
  images?: string[];
  startingPrice?: string;
}

export function getVariantImages(variant: VariantWithImages): string[] {
  if (variant.images?.length) return variant.images;
  if (variant.imageUrl) return [variant.imageUrl];
  return [];
}
