import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ProductLocalPage } from '@/components/seo/ProductLocalPage'
import { departments, getDepartmentBySlug, getSeoProductBySlug } from '@/data/seo'

const PRODUCT_SLUG = 'verrieres'

export const revalidate = 86400 // 24h ISR

export function generateStaticParams() {
  return departments.map(d => ({ dept: d.slug }))
}

interface Props { params: Promise<{ dept: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { dept: deptSlug } = await params
  const dept = getDepartmentBySlug(deptSlug)
  const product = getSeoProductBySlug(PRODUCT_SLUG)
  if (!dept || !product) return {}
  return {
    title: product.metaTitle(dept),
    description: product.metaDescription(dept),
    alternates: { canonical: `https://www.azconstruction.fr/${PRODUCT_SLUG}/${dept.slug}` },
  }
}

export default async function Page({ params }: Props) {
  const { dept: deptSlug } = await params
  const dept = getDepartmentBySlug(deptSlug)
  const product = getSeoProductBySlug(PRODUCT_SLUG)
  if (!dept || !product) notFound()
  return <ProductLocalPage product={product} dept={dept} />
}
