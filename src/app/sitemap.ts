import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zaconstruction.fr'
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

  return [
    // Pages principales
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Thermolaquage - priorité maximale
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
      url: `${baseUrl}/services/thermolaquage/val-doise-95`,
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
    // Nuancier RAL - fort potentiel SEO
    {
      url: `${baseUrl}/couleurs-ral`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // Produits - page catalogue
    {
      url: `${baseUrl}/produits`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Pages produits individuelles
    ...productFamilies.map((family) => ({
      url: `${baseUrl}/produits/${family}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Pages cibles
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
    // Pages secondaires
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
      priority: 0.6,
    },
    // Pages légales
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

