/**
 * Registry central des PremiumCase. Pour ajouter une nouvelle URL Premium+ :
 *
 *   1. Créer `src/data/seo/premium/<product>-<dept>-<commune?>.ts`
 *      qui exporte un `PremiumCase` (cf. types.ts + _template.ts)
 *   2. L'importer ici et l'ajouter à `PREMIUM_REGISTRY`
 *
 * Le composant `<ProductLocalPage>` appelle `getPremiumCase()` au render et,
 * si une case existe et que `status === 'published'`, substitue/enrichit
 * les blocs standards avec les blocs Premium+.
 */

import type { PremiumCase } from './types'

// ── Registry — un import par URL Premium+ ─────────────────────────
// Format de clé : "<productSlug>|<deptSlug>|<communeSlug ?? '_dept'>"
// Le séparateur `|` est sûr (jamais dans un slug).

import { gardeCorpsVerreParis75Paris15e } from './garde-corps-verre-paris-75-paris-15e'

const PREMIUM_REGISTRY = new Map<string, PremiumCase>([
  [keyOf(gardeCorpsVerreParis75Paris15e), gardeCorpsVerreParis75Paris15e],
])

function keyOf(c: PremiumCase): string {
  return `${c.productSlug}|${c.deptSlug}|${c.communeSlug ?? '_dept'}`
}

/**
 * Récupère le PremiumCase pour une URL donnée. Retourne `null` si :
 * - aucun case n'est enregistré pour ce triplet
 * - le case existe mais son `status === 'draft'` (pas encore prêt pour la prod)
 *
 * Côté caller : appeler en début de template, brancher selon présence.
 */
export function getPremiumCase(
  productSlug: string,
  deptSlug: string,
  communeSlug?: string,
): PremiumCase | null {
  const key = `${productSlug}|${deptSlug}|${communeSlug ?? '_dept'}`
  const c = PREMIUM_REGISTRY.get(key)
  if (!c) return null
  if (c.status !== 'published') return null
  return c
}

/**
 * Liste tous les PremiumCases (publiés ET drafts) — utilisé par l'admin
 * `/admin/seo/premium` pour afficher la table des candidats.
 */
export function listAllPremiumCases(): PremiumCase[] {
  return Array.from(PREMIUM_REGISTRY.values())
}

export type { PremiumCase } from './types'
export type {
  PremiumPhoto,
  PremiumQuote,
  CaseStudy,
  LocalReview,
  CrossCityRow,
  CityGuideSection,
} from './types'
