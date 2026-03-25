import { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://azconstruction.fr'
  const lastModified = new Date()

  // Product family slugs
  const productFamilies = [
    'garde-corps',
    'escaliers',
    'portails',
    'clotures',
    'portes',
    'fenetres',
    'verrieres',
    'pergolas',
    'marquises',
    'grilles-ventilation',
  ]

  // Garde-corps local SEO departments
  const gardecorpsDepts = [
    'ile-de-france',
    'paris-75',
    'hauts-de-seine-92',
    'seine-saint-denis-93',
    'val-de-marne-94',
    'val-doise-95',
    'yvelines-78',
    'essonne-91',
    'seine-et-marne-77',
  ]

  // Blog posts from DB (published only)
  let blogPosts: { slug: string; updatedAt: Date }[] = []
  try {
    blogPosts = await prisma.blogPost.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
      orderBy: { publishedAt: 'desc' },
    })
  } catch {
    // BlogPost model may not exist yet — safe to ignore
  }

  return [
    // ── Pages principales ──────────────────────────────
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },

    // ── Thermolaquage ──────────────────────────────────
    {
      url: `${baseUrl}/services/thermolaquage`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/thermolaquage/ile-de-france`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/thermolaquage/paris-75`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/thermolaquage/hauts-de-seine-92`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/thermolaquage/seine-saint-denis-93`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/thermolaquage/val-de-marne-94`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/thermolaquage/val-doise-95`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/thermolaquage/yvelines-78`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/thermolaquage/essonne-91`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/thermolaquage/seine-et-marne-77`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/thermolaquage/jantes`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/thermolaquage/moto-art`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/thermolaquage/renovation-voiture`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/thermolaquage/pieces-metalliques`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },

    // ── Garde-corps local SEO ──────────────────────────
    ...gardecorpsDepts.map((dept) => ({
      url: `${baseUrl}/garde-corps/${dept}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.88,
    })),

    // ── Nuancier RAL ───────────────────────────────────
    {
      url: `${baseUrl}/couleurs-ral`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/couleurs-ral/dichroic`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/couleurs-ral/patina`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/couleurs-ral/polaris`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/couleurs-ral/sfera`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },

    // ── Produits ───────────────────────────────────────
    {
      url: `${baseUrl}/produits`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...productFamilies.map((family) => ({
      url: `${baseUrl}/produits/${family}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // ── Pages cibles ───────────────────────────────────
    {
      url: `${baseUrl}/particuliers`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/professionnels`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // ── Blog ───────────────────────────────────────────
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.85,
    },
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // ── Pages secondaires ──────────────────────────────
    {
      url: `${baseUrl}/realisations`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.65,
    },

    // ── Outils ────────────────────────────────────────
    {
      url: `${baseUrl}/outils/calculateur-garde-corps`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },

    // ── Pages légales ─────────────────────────────────
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cgv`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/confidentialite`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
