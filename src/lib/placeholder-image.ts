/**
 * Generate a placeholder SVG data URI for use as fallback image.
 * Eliminates external Unsplash/placeholder.com requests.
 */
export function placeholderImage(label = "AZ", width = 800, height = 600): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#0a1628"/>
        <stop offset="100%" style="stop-color:#1a365d"/>
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#g)"/>
    <text x="50%" y="50%" fill="rgba(255,255,255,0.08)" font-family="sans-serif" font-size="${Math.min(width, height) * 0.3}" font-weight="bold" text-anchor="middle" dominant-baseline="central">${label}</text>
  </svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

// Pre-generated placeholders for common use cases
export const PLACEHOLDER = {
  hero: placeholderImage("AZ", 1920, 1080),
  product: placeholderImage("AZ", 800, 600),
  team: placeholderImage("AZ", 400, 400),
  partner: placeholderImage("AZ", 200, 80),
  thumbnail: placeholderImage("AZ", 400, 300),
} as const
