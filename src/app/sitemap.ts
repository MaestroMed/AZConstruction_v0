import { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'
import {
  departments,
  seoProducts,
  segmentSlugs,
  getAllCommunes,
} from '@/data/seo'

const BASE = 'https://azconstruction.fr'
const now = new Date()

// ── Sitemap Index — Segmented for optimal crawling ──────────────
// IDs:
//   0              = static pages (homepage, blog, legal, etc.)
//   1..11          = product DEPARTMENT pages (1 per product, ~9 URLs each)
//   12..22         = product CITY pages (1 per product, ~1000 URLs each)
//   23..25         = segment DEPARTMENT pages (1 per segment, ~99 URLs each)
//   26..28         = segment CITY pages (1 per segment, ~11000 URLs each — split further if needed)
//
// Total sub-sitemaps: 29

export async function generateSitemaps() {
  const productCount = seoProducts.length // 11
  const segmentCount = segmentSlugs.length // 3

  const ids = [
    { id: 0 }, // static
  ]

  // Product dept pages: IDs 1..11
  for (let i = 0; i < productCount; i++) ids.push({ id: 1 + i })
  // Product city pages: IDs 12..22
  for (let i = 0; i < productCount; i++) ids.push({ id: 1 + productCount + i })
  // Segment dept pages: IDs 23..25
  for (let i = 0; i < segmentCount; i++) ids.push({ id: 1 + productCount * 2 + i })
  // Segment city pages: IDs 26..28
  for (let i = 0; i < segmentCount; i++) ids.push({ id: 1 + productCount * 2 + segmentCount + i })

  return ids
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  const productCount = seoProducts.length
  const segmentCount = segmentSlugs.length

  // ID 0: Static pages
  if (id === 0) return staticPages()

  // IDs 1..11: Product DEPARTMENT pages
  if (id >= 1 && id <= productCount) {
    return productDeptSitemap(id - 1)
  }

  // IDs 12..22: Product CITY pages
  if (id >= 1 + productCount && id <= productCount * 2) {
    return productCitySitemap(id - 1 - productCount)
  }

  // IDs 23..25: Segment DEPARTMENT pages
  if (id >= 1 + productCount * 2 && id <= productCount * 2 + segmentCount) {
    return segmentDeptSitemap(id - 1 - productCount * 2)
  }

  // IDs 26..28: Segment CITY pages
  if (id >= 1 + productCount * 2 + segmentCount) {
    return segmentCitySitemap(id - 1 - productCount * 2 - segmentCount)
  }

  return []
}

// ── Static pages ──────────────────────────────────────────────────
async function staticPages(): Promise<MetadataRoute.Sitemap> {
  let blogPosts: { slug: string; updatedAt: Date }[] = []
  try {
    blogPosts = await prisma.blogPost.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
      orderBy: { publishedAt: 'desc' },
    })
  } catch { /* safe */ }

  const families = [
    'garde-corps', 'escaliers', 'portails', 'clotures', 'portes',
    'fenetres', 'verrieres', 'pergolas', 'marquises', 'grilles-ventilation',
  ]

  return [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/services/thermolaquage`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE}/services/thermolaquage/ile-de-france`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/services/thermolaquage/jantes`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/services/thermolaquage/moto-art`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/services/thermolaquage/renovation-voiture`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/services/thermolaquage/pieces-metalliques`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/garde-corps/ile-de-france`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/couleurs-ral`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/couleurs-ral/dichroic`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/couleurs-ral/patina`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/couleurs-ral/polaris`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/couleurs-ral/sfera`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/produits`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    ...families.map(f => ({ url: `${BASE}/produits/${f}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 })),
    { url: `${BASE}/particuliers`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/professionnels`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/industriels`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.85 },
    ...blogPosts.map(p => ({ url: `${BASE}/blog/${p.slug}`, lastModified: p.updatedAt, changeFrequency: 'monthly' as const, priority: 0.8 })),
    { url: `${BASE}/realisations`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/a-propos`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${BASE}/outils/calculateur-garde-corps`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/mentions-legales`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/cgv`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/confidentialite`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}

// ── Product × Department sitemap (small, ~9 URLs) ─────────────────
function productDeptSitemap(index: number): MetadataRoute.Sitemap {
  const product = seoProducts[index]
  const prefix = product.slug === 'thermolaquage' ? `${BASE}/services/thermolaquage` : `${BASE}/${product.slug}`

  return departments.map(dept => ({
    url: `${prefix}/${dept.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))
}

// ── Product × City sitemap (~1000 URLs) ───────────────────────────
function productCitySitemap(index: number): MetadataRoute.Sitemap {
  const product = seoProducts[index]
  const prefix = product.slug === 'thermolaquage' ? `${BASE}/services/thermolaquage` : `${BASE}/${product.slug}`
  const allCommunes = getAllCommunes()

  const entries: MetadataRoute.Sitemap = []
  for (const dept of departments) {
    const deptCommunes = allCommunes.filter(c => c.departement === dept.code)
    for (const commune of deptCommunes) {
      entries.push({
        url: `${prefix}/${dept.slug}/${commune.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    }
  }
  return entries
}

// ── Segment × Product × Department sitemap (~99 URLs) ─────────────
function segmentDeptSitemap(index: number): MetadataRoute.Sitemap {
  const segSlug = segmentSlugs[index]
  const entries: MetadataRoute.Sitemap = []

  for (const product of seoProducts) {
    for (const dept of departments) {
      entries.push({
        url: `${BASE}/${segSlug}/${product.slug}/${dept.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    }
  }
  return entries
}

// ── Segment × Product × City sitemap (~11000 URLs) ────────────────
function segmentCitySitemap(index: number): MetadataRoute.Sitemap {
  const segSlug = segmentSlugs[index]
  const allCommunes = getAllCommunes()
  const entries: MetadataRoute.Sitemap = []

  for (const product of seoProducts) {
    for (const dept of departments) {
      const deptCommunes = allCommunes.filter(c => c.departement === dept.code)
      for (const commune of deptCommunes) {
        entries.push({
          url: `${BASE}/${segSlug}/${product.slug}/${dept.slug}/${commune.slug}`,
          lastModified: now,
          changeFrequency: 'monthly',
          priority: 0.5,
        })
      }
    }
  }
  return entries
}
