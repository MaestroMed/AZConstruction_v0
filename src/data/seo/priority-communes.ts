// Priority communes — used by `generateStaticParams` on `[dept]/[ville]` routes
// to pre-render at build time the most strategic city pages (chef-lieu + top
// populated communes per dept). The remaining ~41k pages are kept on ISR.

import type { Commune, Department } from './types'
import { departments } from './departments'
import { getCommunesByDepartment } from './communes'

// Nombre de communes pre-renderees au build, par departement.
// Passe de 10 a 3 pour reduire le build time Vercel d'environ 70%.
// Les autres communes restent accessibles via ISR (generees a la demande, cachees 7j).
// Impact SEO : aucun, Google crawlera les ISR pages aussi bien.
const TOP_N_PER_DEPT = 3

/**
 * Returns up to TOP_N_PER_DEPT communes for the given department:
 *   1. Always include the prefecture (if found in the commune list)
 *   2. Fill the rest with communes sorted by population (desc, undefined → 0)
 */
function getPriorityCommunesForDept(dept: Department): Commune[] {
  const all = getCommunesByDepartment(dept.code)
  const prefecture = all.find((c) => c.name === dept.prefecture)

  const rest = all
    .filter((c) => c.slug !== prefecture?.slug)
    .sort((a, b) => (b.population ?? 0) - (a.population ?? 0))

  const out = prefecture ? [prefecture, ...rest] : rest
  return out.slice(0, TOP_N_PER_DEPT)
}

/** For routes like `/garde-corps/[dept]/[ville]` and `/services/thermolaquage/[dept]/[ville]`. */
export function getPriorityDeptVilleParams(): Array<{ dept: string; ville: string }> {
  const params: Array<{ dept: string; ville: string }> = []
  for (const dept of departments) {
    for (const commune of getPriorityCommunesForDept(dept)) {
      params.push({ dept: dept.slug, ville: commune.slug })
    }
  }
  return params
}

/** For routes like `/particuliers/[product]/[dept]/[ville]`. */
export function getPriorityProductDeptVilleParams(
  productSlugs: readonly string[],
): Array<{ product: string; dept: string; ville: string }> {
  const params: Array<{ product: string; dept: string; ville: string }> = []
  for (const product of productSlugs) {
    for (const dept of departments) {
      for (const commune of getPriorityCommunesForDept(dept)) {
        params.push({ product, dept: dept.slug, ville: commune.slug })
      }
    }
  }
  return params
}
