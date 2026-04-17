import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ProductLocalPage } from '@/components/seo/ProductLocalPage'
import { getDepartmentBySlug, getSeoProductBySlug, getCommuneBySlug, getPriorityDeptVilleParams } from '@/data/seo'

const PRODUCT_SLUG = 'escaliers'

export const revalidate = 604800 // 7 days ISR
export const dynamicParams = true

export function generateStaticParams() {
  // Pre-render priority cities (chef-lieu + top-populated). Other cities served via ISR.
  return getPriorityDeptVilleParams()
}

interface Props { params: Promise<{ dept: string; ville: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { dept: deptSlug, ville: villeSlug } = await params
  const dept = getDepartmentBySlug(deptSlug)
  const product = getSeoProductBySlug(PRODUCT_SLUG)
  if (!dept || !product) return {}
  const commune = getCommuneBySlug(dept.code, villeSlug)
  if (!commune) return {}
  return {
    title: product.metaTitle(dept, commune),
    description: product.metaDescription(dept, commune),
    alternates: { canonical: `https://azconstruction.fr/${PRODUCT_SLUG}/${dept.slug}/${commune.slug}` },
  }
}

export default async function Page({ params }: Props) {
  const { dept: deptSlug, ville: villeSlug } = await params
  const dept = getDepartmentBySlug(deptSlug)
  const product = getSeoProductBySlug(PRODUCT_SLUG)
  if (!dept || !product) notFound()
  const commune = getCommuneBySlug(dept.code, villeSlug)
  if (!commune) notFound()
  return <ProductLocalPage product={product} dept={dept} commune={commune} />
}
