import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ProductLocalPage } from '@/components/seo/ProductLocalPage'
import { ThermolaquageLocalPage } from '@/components/seo/ThermolaquageLocalPage'
import {
  departments,
  getDepartmentBySlug,
  getSeoProductBySlug,
  getSegmentBySlug,
  seoProductSlugs,
} from '@/data/seo'

const SEGMENT_SLUG = 'professionnels'

export const revalidate = 86400

export function generateStaticParams() {
  return seoProductSlugs.flatMap(p =>
    departments.map(d => ({ product: p, dept: d.slug })),
  )
}

interface Props { params: Promise<{ product: string; dept: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product: pSlug, dept: dSlug } = await params
  const dept = getDepartmentBySlug(dSlug)
  const product = getSeoProductBySlug(pSlug)
  const segment = getSegmentBySlug(SEGMENT_SLUG)
  if (!dept || !product || !segment) return {}
  return {
    title: `${product.metaTitle(dept)}${segment.metaTitleSuffix}`,
    description: product.metaDescription(dept),
    alternates: { canonical: `https://azconstruction.fr/${SEGMENT_SLUG}/${product.slug}/${dept.slug}` },
  }
}

export default async function Page({ params }: Props) {
  const { product: pSlug, dept: dSlug } = await params
  const dept = getDepartmentBySlug(dSlug)
  const product = getSeoProductBySlug(pSlug)
  const segment = getSegmentBySlug(SEGMENT_SLUG)
  if (!dept || !product || !segment) notFound()
  if (product.slug === 'thermolaquage') {
    return <ThermolaquageLocalPage dept={dept} segment={segment} />
  }
  return <ProductLocalPage product={product} dept={dept} segment={segment} />
}
