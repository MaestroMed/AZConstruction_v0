import { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'
import {
  departments,
  seoProducts,
  seoSubProducts,
  segmentSlugs,
  getAllCommunes,
} from '@/data/seo'

// Canonical with www — apex 307-redirects here on Vercel. Using www directly
// in sitemap URLs avoids 307 hops and saves Google crawl budget.
const BASE = 'https://www.azconstruction.fr'
const now = new Date()

// ── Sitemap Index — Segmented for optimal crawling ──────────────
// IDs:
//   0                          = static pages (homepage, blog, legal, etc.)
//   1..N                       = product DEPARTMENT pages       (N = product count)
//   N+1..2N                    = product CITY pages
//   2N+1..2N+S                 = segment DEPARTMENT pages       (S = segment count)
//   2N+S+1..2N+2S              = segment CITY pages
//   2N+2S+1..2N+2S+SP          = sub-product DEPARTMENT pages   (SP = sub-product count)
//   2N+2S+SP+1..2N+2S+2SP      = sub-product CITY pages

export async function generateSitemaps() {
  const productCount = seoProducts.length
  const segmentCount = segmentSlugs.length
  const subProductCount = seoSubProducts.length

  const ids: { id: number }[] = [{ id: 0 }] // static

  for (let i = 0; i < productCount; i++) ids.push({ id: 1 + i })
  for (let i = 0; i < productCount; i++) ids.push({ id: 1 + productCount + i })
  for (let i = 0; i < segmentCount; i++) ids.push({ id: 1 + productCount * 2 + i })
  for (let i = 0; i < segmentCount; i++) ids.push({ id: 1 + productCount * 2 + segmentCount + i })
  for (let i = 0; i < subProductCount; i++) ids.push({ id: 1 + productCount * 2 + segmentCount * 2 + i })
  for (let i = 0; i < subProductCount; i++) ids.push({ id: 1 + productCount * 2 + segmentCount * 2 + subProductCount + i })

  return ids
}

export default async function sitemap(
  { id: idInput }: { id: number | string | Promise<string | number> }
): Promise<MetadataRoute.Sitemap> {
  // Next.js 16 passes id as a Promise<string> (resolved from URL segment).
  // Earlier versions passed it as a number. Normalize to number.
  const rawId = typeof (idInput as { then?: unknown })?.then === 'function'
    ? await (idInput as Promise<string | number>)
    : (idInput as number | string)
  const id = typeof rawId === 'number' ? rawId : Number(rawId)

  const productCount = seoProducts.length
  const segmentCount = segmentSlugs.length
  const subProductCount = seoSubProducts.length

  if (id === 0) return staticPages()
  if (id >= 1 && id <= productCount) return productDeptSitemap(id - 1)
  if (id >= 1 + productCount && id <= productCount * 2) return productCitySitemap(id - 1 - productCount)
  if (id >= 1 + productCount * 2 && id <= productCount * 2 + segmentCount) return segmentDeptSitemap(id - 1 - productCount * 2)
  if (id >= 1 + productCount * 2 + segmentCount && id <= productCount * 2 + segmentCount * 2) return segmentCitySitemap(id - 1 - productCount * 2 - segmentCount)
  if (id >= 1 + productCount * 2 + segmentCount * 2 && id <= productCount * 2 + segmentCount * 2 + subProductCount) return subProductDeptSitemap(id - 1 - productCount * 2 - segmentCount * 2)
  if (id >= 1 + productCount * 2 + segmentCount * 2 + subProductCount) return subProductCitySitemap(id - 1 - productCount * 2 - segmentCount * 2 - subProductCount)

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

// ── Sub-product × Department sitemap (~13 URLs each) ──────────────
function subProductDeptSitemap(index: number): MetadataRoute.Sitemap {
  const sub = seoSubProducts[index]
  return departments.map((dept) => ({
    url: `${BASE}/${sub.slug}/${dept.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))
}

// ── Sub-product × City sitemap (~6500 URLs each) ──────────────────
function subProductCitySitemap(index: number): MetadataRoute.Sitemap {
  const sub = seoSubProducts[index]
  const allCommunes = getAllCommunes()
  const entries: MetadataRoute.Sitemap = []

  for (const dept of departments) {
    const deptCommunes = allCommunes.filter((c) => c.departement === dept.code)
    for (const commune of deptCommunes) {
      entries.push({
        url: `${BASE}/${sub.slug}/${dept.slug}/${commune.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.65,
      })
    }
  }
  return entries
}
