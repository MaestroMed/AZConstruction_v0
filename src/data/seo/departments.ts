import type { Department } from './types'

// ─── 9 départements IDF + Oise (60) ────────────────────────────────
export const departments: Department[] = [
  {
    code: '75',
    name: 'Paris',
    slug: 'paris-75',
    fullName: 'Paris (75)',
    region: 'Île-de-France',
    prefecture: 'Paris',
  },
  {
    code: '77',
    name: 'Seine-et-Marne',
    slug: 'seine-et-marne-77',
    fullName: 'Seine-et-Marne (77)',
    region: 'Île-de-France',
    prefecture: 'Melun',
  },
  {
    code: '78',
    name: 'Yvelines',
    slug: 'yvelines-78',
    fullName: 'Yvelines (78)',
    region: 'Île-de-France',
    prefecture: 'Versailles',
  },
  {
    code: '91',
    name: 'Essonne',
    slug: 'essonne-91',
    fullName: 'Essonne (91)',
    region: 'Île-de-France',
    prefecture: 'Évry-Courcouronnes',
  },
  {
    code: '92',
    name: 'Hauts-de-Seine',
    slug: 'hauts-de-seine-92',
    fullName: 'Hauts-de-Seine (92)',
    region: 'Île-de-France',
    prefecture: 'Nanterre',
  },
  {
    code: '93',
    name: 'Seine-Saint-Denis',
    slug: 'seine-saint-denis-93',
    fullName: 'Seine-Saint-Denis (93)',
    region: 'Île-de-France',
    prefecture: 'Bobigny',
  },
  {
    code: '94',
    name: 'Val-de-Marne',
    slug: 'val-de-marne-94',
    fullName: 'Val-de-Marne (94)',
    region: 'Île-de-France',
    prefecture: 'Créteil',
  },
  {
    code: '95',
    name: "Val-d'Oise",
    slug: 'val-doise-95',
    fullName: "Val-d'Oise (95)",
    region: 'Île-de-France',
    prefecture: 'Cergy',
  },
  {
    code: '60',
    name: 'Oise',
    slug: 'oise-60',
    fullName: 'Oise (60)',
    region: 'Hauts-de-France',
    prefecture: 'Beauvais',
  },
]

// ─── Lookup helpers ─────────────────────────────────────────────────
const bySlug = new Map(departments.map(d => [d.slug, d]))
const byCode = new Map(departments.map(d => [d.code, d]))

export function getDepartmentBySlug(slug: string): Department | undefined {
  return bySlug.get(slug)
}

export function getDepartmentByCode(code: string): Department | undefined {
  return byCode.get(code)
}

export const departmentSlugs = departments.map(d => d.slug)
export const departmentCodes = departments.map(d => d.code)
