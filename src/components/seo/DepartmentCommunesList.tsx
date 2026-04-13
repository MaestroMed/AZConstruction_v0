import Link from 'next/link'
import { MapPin } from 'lucide-react'
import type { Commune, Department, SEOProduct } from '@/data/seo/types'
import { getCommunesByDepartment } from '@/data/seo/communes'

interface DeptCommunesProps {
  product: SEOProduct
  dept: Department
}

export function DepartmentCommunesList({ product, dept }: DeptCommunesProps) {
  const communes = getCommunesByDepartment(dept.code)

  if (communes.length === 0) return null

  const basePath = product.slug === 'thermolaquage'
    ? `/services/thermolaquage/${dept.slug}`
    : `/${product.slug}/${dept.slug}`

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-navy-dark mb-6 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-cyan-glow" />
          {product.name} — villes desservies en {dept.fullName}
        </h2>
        <div className="flex flex-wrap gap-2">
          {communes.map(c => (
            <Link
              key={c.slug}
              href={`${basePath}/${c.slug}`}
              className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-blue-300 hover:text-blue-corporate transition-colors"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
