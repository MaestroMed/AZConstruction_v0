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

// ── Sitemap Index ─────────────────────────────────────────────────
// IDs:
//   0           = static pages (homepage, blog, legal, etc.)
//   1..11       = product dept+city pages (1 per product)
//   12..14      = segment pages (1 per segment, all products combined)
//
// Total sub-sitemaps: 15

export async function generateSitemaps() {
  return [
    { id: 0 },
    // Products: 1 sitemap per product (11 products)
    ...seoProducts.map((_, i) => ({ id: i + 1 })),
    // Segments: 1 sitemap per segment (3 segments)
    ...segmentSlugs.map((_, i) => ({ id: seoProducts.length + 1 + i })),
  ]
}

export default async function sitemap({
  id,
}: {
  id: number
}): Promise<MetadataRoute.Sitemap> {
  // ── ID 0: Static pages ──────────────────────────────────────────
  if (id === 0) {
    return staticPages()
  }

  // ── IDs 1..11: Product × dept/city ──────────────────────────────
  const productIndex = id - 1
  if (productIndex < seoProducts.length) {
    return productSitemap(productIndex)
  }

  // ── IDs 12..14: Segment × product × dept/city ──────────────────
  const segmentIndex = id - seoProducts.length - 1
  if (segmentIndex < segmentSlugs.length) {
    return segmentSitemap(segmentIndex)
  }

  return []
}

// ─── Static pages (existing site) ─────────────────────────────────
async function staticPages(): Promise<MetadataRoute.Sitemap> {
  let blogPosts: { slug: string; updatedAt: Date }[] = []
  try {
    blogPosts = await prisma.blogPost.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
      orderBy: { publishedAt: 'desc' },
    })
  } catch {
    // safe to ignore
  }

  const productFamilies = [
    'garde-corps', 'escaliers', 'portails', 'clotures', 'portes',
    'fenetres', 'verrieres', 'pergolas', 'marquises', 'grilles-ventilation',
  ]

  return [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1 },

    // Thermolaquage hub + specialties
    { url: `${BASE}/services/thermolaquage`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE}/services/thermolaquage/ile-de-france`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/services/thermolaquage/jantes`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/services/thermolaquage/moto-art`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/services/thermolaquage/renovation-voiture`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/services/thermolaquage/pieces-metalliques`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },

    // Garde-corps hub
    { url: `${BASE}/garde-corps/ile-de-france`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },

    // Couleurs RAL
    { url: `${BASE}/couleurs-ral`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/couleurs-ral/dichroic`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/couleurs-ral/patina`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/couleurs-ral/polaris`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/couleurs-ral/sfera`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },

    // Product catalog
    { url: `${BASE}/produits`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    ...productFamilies.map(f => ({
      url: `${BASE}/produits/${f}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8,
    })),

    // Segment landing pages
    { url: `${BASE}/particuliers`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/professionnels`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/industriels`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Blog
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.85 },
    ...blogPosts.map(p => ({
      url: `${BASE}/blog/${p.slug}`, lastModified: p.updatedAt, changeFrequency: 'monthly' as const, priority: 0.8,
    })),

    // Secondary
    { url: `${BASE}/realisations`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/a-propos`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${BASE}/outils/calculateur-garde-corps`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },

    // Legal
    { url: `${BASE}/mentions-legales`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/cgv`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/confidentialite`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}

// ─── Product × dept + city sitemap ────────────────────────────────
function productSitemap(index: number): MetadataRoute.Sitemap {
  const product = seoProducts[index]
  const prefix = product.slug === 'thermolaquage'
    ? `${BASE}/services/thermolaquage`
    : `${BASE}/${product.slug}`

  const allCommunes = getAllCommunes()
  const entries: MetadataRoute.Sitemap = []

  // Department pages
  for (const dept of departments) {
    entries.push({
      url: `${prefix}/${dept.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    })

    // City pages for this department
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

// ─── Segment × product × dept + city sitemap ─────────────────────
function segmentSitemap(index: number): MetadataRoute.Sitemap {
  const segSlug = segmentSlugs[index]
  const allCommunes = getAllCommunes()
  const entries: MetadataRoute.Sitemap = []

  for (const product of seoProducts) {
    for (const dept of departments) {
      // Segment × product × dept
      entries.push({
        url: `${BASE}/${segSlug}/${product.slug}/${dept.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.65,
      })

      // Segment × product × city
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
