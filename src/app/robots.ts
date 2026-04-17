import { MetadataRoute } from 'next'
import { headers } from 'next/headers'

// Canonical with www — apex (azconstruction.fr) 307-redirects here on Vercel.
const CANONICAL_BASE = 'https://www.azconstruction.fr'

export default async function robots(): Promise<MetadataRoute.Robots> {
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
    sitemap: `${CANONICAL_BASE}/sitemap-index.xml`,
  }
}
