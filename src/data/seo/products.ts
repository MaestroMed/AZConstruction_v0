import { seoProducts as part1 } from './products-part1'
import { seoProductsPart2 as part2 } from './products-part2'
import type { SEOProduct } from './types'

// All 11 SEO products (10 product families + thermolaquage service)
export const seoProducts: SEOProduct[] = [...part1, ...part2]

// Lookup helpers
const bySlug = new Map(seoProducts.map(p => [p.slug, p]))

export function getSeoProductBySlug(slug: string): SEOProduct | undefined {
  return bySlug.get(slug)
}

export const seoProductSlugs = seoProducts.map(p => p.slug)
