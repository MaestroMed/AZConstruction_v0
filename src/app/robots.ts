import { MetadataRoute } from 'next'
import { headers } from 'next/headers'

export default async function robots(): Promise<MetadataRoute.Robots> {
  const baseUrl = 'https://azconstruction.fr'
  const headersList = await headers()
  const host = headersList.get('host') || ''

  // Block indexation on Vercel staging/preview domains
  if (host.includes('vercel.app') || host.includes('vercel.sh')) {
    return {
      rules: [{ userAgent: '*', disallow: '/' }],
    }
  }

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
