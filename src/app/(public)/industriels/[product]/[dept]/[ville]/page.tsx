import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ProductLocalPage } from '@/components/seo/ProductLocalPage'
import { ThermolaquageLocalPage } from '@/components/seo/ThermolaquageLocalPage'
import {
  getDepartmentBySlug,
  getSeoProductBySlug,
  getSegmentBySlug,
  getCommuneBySlug,
  getPriorityProductDeptVilleParams,
  seoProductSlugs,
} from '@/data/seo'

const SEGMENT_SLUG = 'industriels'

export const revalidate = 604800
export const dynamicParams = true

export function generateStaticParams() {
  // Pre-render priority cities × all products. Other cities served via ISR.
  return getPriorityProductDeptVilleParams(seoProductSlugs)
}

interface Props { params: Promise<{ product: string; dept: string; ville: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product: pSlug, dept: dSlug, ville: vSlug } = await params
  const dept = getDepartmentBySlug(dSlug)
  const product = getSeoProductBySlug(pSlug)
  const segment = getSegmentBySlug(SEGMENT_SLUG)
  if (!dept || !product || !segment) return {}
  const commune = getCommuneBySlug(dept.code, vSlug)
  if (!commune) return {}
  return {
    title: `${product.metaTitle(dept, commune)}${segment.metaTitleSuffix}`,
    description: product.metaDescription(dept, commune),
    alternates: { canonical: `https://azconstruction.fr/${product.slug}/${dept.slug}/${commune.slug}` },
  }
}

export default async function Page({ params }: Props) {
  const { product: pSlug, dept: dSlug, ville: vSlug } = await params
  const dept = getDepartmentBySlug(dSlug)
  const product = getSeoProductBySlug(pSlug)
  const segment = getSegmentBySlug(SEGMENT_SLUG)
  if (!dept || !product || !segment) notFound()
  const commune = getCommuneBySlug(dept.code, vSlug)
  if (!commune) notFound()
  if (product.slug === 'thermolaquage') {
    return <ThermolaquageLocalPage dept={dept} commune={commune} segment={segment} />
  }
  return <ProductLocalPage product={product} dept={dept} commune={commune} segment={segment} />
}
