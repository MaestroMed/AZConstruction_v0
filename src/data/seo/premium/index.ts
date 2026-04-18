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
import { verriereAtelierParis75Paris7e } from './verriere-atelier-paris-75-paris-7e'
import { portailCoulissantParis75Paris16e } from './portail-coulissant-paris-75-paris-16e'
import { gardeCorpsParis75Paris11e } from './garde-corps-paris-75-paris-11e'
import { verriereAtelierHautsDeSeine92BoulogneBillancourt } from './verriere-atelier-hauts-de-seine-92-boulogne-billancourt'
import { gardeCorpsValDoise95Cergy } from './garde-corps-val-doise-95-cergy'
import { escalierHelicoidalParis75Paris7e } from './escalier-helicoidal-paris-75-paris-7e'
import { gardeCorpsYvelines78Versailles } from './garde-corps-yvelines-78-versailles'
import { portailAutoportantHautsDeSeine92Nanterre } from './portail-autoportant-hauts-de-seine-92-nanterre'
import { verrieresHautsDeSeine92NeuillySurSeine } from './verrieres-hauts-de-seine-92-neuilly-sur-seine'
import { escaliersParis75Paris15e } from './escaliers-paris-75-paris-15e'
import { thermolaquageValDoise95Cergy } from './thermolaquage-val-doise-95-cergy'
import { thermolaquageHautsDeSeine92BoulogneBillancourt } from './thermolaquage-hauts-de-seine-92-boulogne-billancourt'
import { gardeCorpsVerreHautsDeSeine92NeuillySurSeine } from './garde-corps-verre-hauts-de-seine-92-neuilly-sur-seine'

const PREMIUM_REGISTRY = new Map<string, PremiumCase>([
  [keyOf(gardeCorpsVerreParis75Paris15e), gardeCorpsVerreParis75Paris15e],
  [keyOf(verriereAtelierParis75Paris7e), verriereAtelierParis75Paris7e],
  [keyOf(portailCoulissantParis75Paris16e), portailCoulissantParis75Paris16e],
  [keyOf(gardeCorpsParis75Paris11e), gardeCorpsParis75Paris11e],
  [keyOf(verriereAtelierHautsDeSeine92BoulogneBillancourt), verriereAtelierHautsDeSeine92BoulogneBillancourt],
  [keyOf(gardeCorpsValDoise95Cergy), gardeCorpsValDoise95Cergy],
  [keyOf(escalierHelicoidalParis75Paris7e), escalierHelicoidalParis75Paris7e],
  [keyOf(gardeCorpsYvelines78Versailles), gardeCorpsYvelines78Versailles],
  [keyOf(portailAutoportantHautsDeSeine92Nanterre), portailAutoportantHautsDeSeine92Nanterre],
  [keyOf(verrieresHautsDeSeine92NeuillySurSeine), verrieresHautsDeSeine92NeuillySurSeine],
  [keyOf(escaliersParis75Paris15e), escaliersParis75Paris15e],
  [keyOf(thermolaquageValDoise95Cergy), thermolaquageValDoise95Cergy],
  [keyOf(thermolaquageHautsDeSeine92BoulogneBillancourt), thermolaquageHautsDeSeine92BoulogneBillancourt],
  [keyOf(gardeCorpsVerreHautsDeSeine92NeuillySurSeine), gardeCorpsVerreHautsDeSeine92NeuillySurSeine],
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
