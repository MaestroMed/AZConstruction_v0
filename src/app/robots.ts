import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://azconstruction.fr'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/compte/',
          '/login',
          '/register',
          '/configurateur/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
