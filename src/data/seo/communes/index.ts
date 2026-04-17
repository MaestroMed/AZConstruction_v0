import type { Commune } from '../types'
import { communes75 } from './communes-75'
import { communes77 } from './communes-77'
import { communes78 } from './communes-78'
import { communes91 } from './communes-91'
import { communes92 } from './communes-92'
import { communes93 } from './communes-93'
import { communes94 } from './communes-94'
import { communes95 } from './communes-95'
import { communes60 } from './communes-60'
import { communes02 } from './communes-02'
import { communes80 } from './communes-80'
import { communes27 } from './communes-27'
import { communes28 } from './communes-28'

// Map department code → communes array
const communesByDept: Record<string, Commune[]> = {
  '75': communes75,
  '77': communes77,
  '78': communes78,
  '91': communes91,
  '92': communes92,
  '93': communes93,
  '94': communes94,
  '95': communes95,
  '60': communes60,
  '02': communes02,
  '80': communes80,
  '27': communes27,
  '28': communes28,
}

// All communes concatenated
let _allCommunes: Commune[] | null = null
export function getAllCommunes(): Commune[] {
  if (!_allCommunes) {
    _allCommunes = Object.values(communesByDept).flat()
  }
  return _allCommunes
}

export function getCommunesByDepartment(code: string): Commune[] {
  return communesByDept[code] ?? []
}

export function getCommuneBySlug(
  deptCode: string,
  slug: string,
): Commune | undefined {
  return getCommunesByDepartment(deptCode).find(c => c.slug === slug)
}

export function communeSlugsForDepartment(deptCode: string): string[] {
  return getCommunesByDepartment(deptCode).map(c => c.slug)
}

// Re-export individual department arrays
export {
  communes75,
  communes77,
  communes78,
  communes91,
  communes92,
  communes93,
  communes94,
  communes95,
  communes60,
  communes02,
  communes80,
  communes27,
  communes28,
}
