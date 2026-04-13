import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ThermolaquageLocalPage } from '@/components/seo/ThermolaquageLocalPage'
import { getDepartmentBySlug, getSeoProductBySlug, getCommuneBySlug } from '@/data/seo'

export const revalidate = 604800
export const dynamicParams = true

export function generateStaticParams() {
  return []
}

interface Props { params: Promise<{ dept: string; ville: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { dept: deptSlug, ville: villeSlug } = await params
  const dept = getDepartmentBySlug(deptSlug)
  const product = getSeoProductBySlug('thermolaquage')
  if (!dept || !product) return {}
  const commune = getCommuneBySlug(dept.code, villeSlug)
  if (!commune) return {}
  return {
    title: product.metaTitle(dept, commune),
    description: product.metaDescription(dept, commune),
    alternates: { canonical: `https://azconstruction.fr/services/thermolaquage/${dept.slug}/${commune.slug}` },
  }
}

export default async function Page({ params }: Props) {
  const { dept: deptSlug, ville: villeSlug } = await params
  const dept = getDepartmentBySlug(deptSlug)
  if (!dept) notFound()
  const commune = getCommuneBySlug(dept.code, villeSlug)
  if (!commune) notFound()
  return <ThermolaquageLocalPage dept={dept} commune={commune} />
}
