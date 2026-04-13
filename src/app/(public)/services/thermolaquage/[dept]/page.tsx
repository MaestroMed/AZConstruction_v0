import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ThermolaquageLocalPage } from '@/components/seo/ThermolaquageLocalPage'
import { departments, getDepartmentBySlug, getSeoProductBySlug } from '@/data/seo'

export const revalidate = 86400

export function generateStaticParams() {
  return departments.map(d => ({ dept: d.slug }))
}

interface Props { params: Promise<{ dept: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { dept: deptSlug } = await params
  const dept = getDepartmentBySlug(deptSlug)
  const product = getSeoProductBySlug('thermolaquage')
  if (!dept || !product) return {}
  return {
    title: product.metaTitle(dept),
    description: product.metaDescription(dept),
    alternates: { canonical: `https://azconstruction.fr/services/thermolaquage/${dept.slug}` },
  }
}

export default async function Page({ params }: Props) {
  const { dept: deptSlug } = await params
  const dept = getDepartmentBySlug(deptSlug)
  if (!dept) notFound()
  return <ThermolaquageLocalPage dept={dept} />
}
