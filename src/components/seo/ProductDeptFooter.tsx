import Link from 'next/link'
import { departments } from '@/data/seo/departments'
import { seoProducts } from '@/data/seo/products'
import type { Department, SEOProduct } from '@/data/seo/types'

interface ProductDeptFooterProps {
  currentProduct: SEOProduct
  currentDept: Department
}

export function ProductDeptFooter({ currentProduct, currentDept }: ProductDeptFooterProps) {
  const otherProducts = seoProducts.filter(p => p.slug !== currentProduct.slug)
  const otherDepts = departments.filter(d => d.code !== currentDept.code)

  function productPath(product: SEOProduct, dept: Department): string {
    return product.slug === 'thermolaquage'
      ? `/services/thermolaquage/${dept.slug}`
      : `/${product.slug}/${dept.slug}`
  }

  return (
    <section className="py-12 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Other products in same department */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Autres produits en {currentDept.fullName}
            </h3>
            <div className="flex flex-wrap gap-2">
              {otherProducts.map(p => (
                <Link
                  key={p.slug}
                  href={productPath(p, currentDept)}
                  className="px-3 py-1.5 text-sm bg-gray-50 text-gray-600 rounded-full hover:bg-blue-50 hover:text-blue-corporate transition-colors"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Same product in other departments */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              {currentProduct.name} — autres départements
            </h3>
            <div className="flex flex-wrap gap-2">
              {otherDepts.map(d => (
                <Link
                  key={d.slug}
                  href={productPath(currentProduct, d)}
                  className="px-3 py-1.5 text-sm bg-gray-50 text-gray-600 rounded-full hover:bg-blue-50 hover:text-blue-corporate transition-colors"
                >
                  {d.name} ({d.code})
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Segment links */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            {currentProduct.name} en {currentDept.fullName} par clientèle
          </h3>
          <div className="flex flex-wrap gap-2">
            <Link
              href={`/particuliers/${currentProduct.slug}/${currentDept.slug}`}
              className="px-3 py-1.5 text-sm bg-gray-50 text-gray-600 rounded-full hover:bg-blue-50 hover:text-blue-corporate transition-colors"
            >
              Particuliers
            </Link>
            <Link
              href={`/professionnels/${currentProduct.slug}/${currentDept.slug}`}
              className="px-3 py-1.5 text-sm bg-gray-50 text-gray-600 rounded-full hover:bg-blue-50 hover:text-blue-corporate transition-colors"
            >
              Professionnels
            </Link>
            <Link
              href={`/industriels/${currentProduct.slug}/${currentDept.slug}`}
              className="px-3 py-1.5 text-sm bg-gray-50 text-gray-600 rounded-full hover:bg-blue-50 hover:text-blue-corporate transition-colors"
            >
              Industriels
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
