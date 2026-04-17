import { seoProducts as part1 } from './products-part1'
import { seoProductsPart2 as part2 } from './products-part2'
import { seoSubProducts } from './products-subproducts'
import type { SEOProduct } from './types'

// 11 "core" SEO products (10 product families + thermolaquage service).
// Routes : /<slug>/[dept]/[ville] + segments /particuliers|professionnels|industriels/[product]/[dept]/[ville]
export const seoProducts: SEOProduct[] = [...part1, ...part2]

// Long-tail sub-products (e.g. garde-corps-verre, escalier-helicoidal). Routes : /<slug>/[dept]/[ville].
// NOT exposed to segment routes — they target specific product searches.
export { seoSubProducts }

// Combined lookup (core + sub-products)
const allProducts = [...seoProducts, ...seoSubProducts]
const bySlug = new Map(allProducts.map((p) => [p.slug, p]))

export function getSeoProductBySlug(slug: string): SEOProduct | undefined {
  return bySlug.get(slug)
}

// Slug lists — exported separately so callers can opt in/out of sub-products.
export const seoProductSlugs = seoProducts.map((p) => p.slug)
export const seoSubProductSlugs = seoSubProducts.map((p) => p.slug)
export const allSeoProductSlugs = allProducts.map((p) => p.slug)
