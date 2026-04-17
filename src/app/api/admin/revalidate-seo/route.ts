import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

/**
 * POST /api/admin/revalidate-seo
 *
 * Purges the ISR cache for all pages so that the next visit regenerates them
 * with the latest content (templates, data, copy). Useful after deploying
 * changes to SEO templates that touch the ~45k programmatically generated
 * city/product pages, since their cache TTL is 7 days otherwise.
 *
 * Auth: header `x-revalidate-token` must match `REVALIDATE_TOKEN` env var.
 *
 * Usage from terminal after a deploy:
 *   curl -X POST https://azconstruction.fr/api/admin/revalidate-seo \
 *        -H "x-revalidate-token: $REVALIDATE_TOKEN"
 */
export async function POST(req: Request) {
  const expected = process.env.REVALIDATE_TOKEN
  if (!expected) {
    return NextResponse.json(
      { ok: false, error: 'REVALIDATE_TOKEN env var is not set on the server' },
      { status: 500 },
    )
  }

  const provided = req.headers.get('x-revalidate-token')
  if (provided !== expected) {
    return NextResponse.json({ ok: false, error: 'Forbidden' }, { status: 403 })
  }

  try {
    revalidatePath('/', 'layout')
    return NextResponse.json({
      ok: true,
      message: 'ISR cache purged for the entire site. Pages will regenerate on next visit.',
      timestamp: new Date().toISOString(),
    })
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 },
    )
  }
}
