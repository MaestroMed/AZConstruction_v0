import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { departments } from '@/data/seo/departments'
import type { SEOProduct } from '@/data/seo/types'

interface InternalLinkGridProps {
  product: SEOProduct
}

export function InternalLinkGrid({ product }: InternalLinkGridProps) {
  const basePath = product.slug === 'thermolaquage'
    ? '/services/thermolaquage'
    : `/${product.slug}`

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-navy-dark mb-2">
          {product.name} par département
        </h2>
        <p className="text-gray-500 mb-8">
          Retrouvez nos {product.namePlural} sur mesure dans votre département.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {departments.map(dept => (
            <Link
              key={dept.slug}
              href={`${basePath}/${dept.slug}`}
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all group"
            >
              <MapPin className="w-5 h-5 text-cyan-glow flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-navy-dark group-hover:text-blue-corporate transition-colors">
                  {dept.fullName}
                </p>
                <p className="text-xs text-gray-400">{dept.region}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-corporate transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
