// ─── SEO Programmatic Data — Barrel Export ──────────────────────────
// Central import point for the 45,000+ page SEO engine

export type { Department, Commune, SEOProduct, SEOSegment } from './types'

export {
  departments,
  getDepartmentBySlug,
  getDepartmentByCode,
  departmentSlugs,
  departmentCodes,
} from './departments'

export {
  seoProducts,
  getSeoProductBySlug,
  seoProductSlugs,
} from './products'

export {
  segments,
  getSegmentBySlug,
  segmentSlugs,
} from './segments'

export {
  getAllCommunes,
  getCommunesByDepartment,
  getCommuneBySlug,
  communeSlugsForDepartment,
} from './communes'
