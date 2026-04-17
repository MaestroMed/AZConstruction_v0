import Link from 'next/link'
import { MapPin, Users, Briefcase, Factory } from 'lucide-react'
import { departments } from '@/data/seo/departments'
import { seoProducts } from '@/data/seo/products'
import type { Department, SEOProduct } from '@/data/seo/types'

interface ProductDeptFooterProps {
  currentProduct: SEOProduct
  currentDept: Department
}

function productPath(product: SEOProduct, dept: Department): string {
  return product.slug === 'thermolaquage'
    ? `/services/thermolaquage/${dept.slug}`
    : `/${product.slug}/${dept.slug}`
}

export function ProductDeptFooter({ currentProduct, currentDept }: ProductDeptFooterProps) {
  const otherProducts = seoProducts.filter((p) => p.slug !== currentProduct.slug)
  const otherDepts = departments.filter((d) => d.code !== currentDept.code)

  // Group dept links by region for clarity
  const deptsByRegion = otherDepts.reduce<Record<string, Department[]>>((acc, d) => {
    if (!acc[d.region]) acc[d.region] = []
    acc[d.region].push(d)
    return acc
  }, {})

  return (
    <section className="py-14 border-t border-gray-100 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Other products in same department */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-blue-corporate" />
              <h3 className="text-sm font-semibold text-navy-dark uppercase tracking-wider">
                Nos autres services en {currentDept.fullName}
              </h3>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              Le même atelier de Bruyères-sur-Oise (95) intervient sur tout le département.
            </p>
            <div className="flex flex-wrap gap-2">
              {otherProducts.map((p) => (
                <Link
                  key={p.slug}
                  href={productPath(p, currentDept)}
                  className="px-3 py-1.5 text-sm bg-white text-gray-700 rounded-full border border-gray-200 hover:border-blue-corporate hover:text-blue-corporate transition-colors"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Same product in other departments — grouped by region */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-blue-corporate" />
              <h3 className="text-sm font-semibold text-navy-dark uppercase tracking-wider">
                {currentProduct.name} dans les départements voisins
              </h3>
            </div>
            <div className="space-y-4">
              {Object.entries(deptsByRegion).map(([region, depts]) => (
                <div key={region}>
                  <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    {region}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {depts.map((d) => (
                      <Link
                        key={d.slug}
                        href={productPath(currentProduct, d)}
                        className="px-3 py-1.5 text-sm bg-white text-gray-700 rounded-full border border-gray-200 hover:border-blue-corporate hover:text-blue-corporate transition-colors"
                      >
                        {d.name}
                        <span className="text-gray-400 ml-1.5">({d.code})</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Segment links — bigger cards */}
        <div className="mt-10 pt-10 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-navy-dark uppercase tracking-wider mb-5 text-center">
            {currentProduct.name} en {currentDept.fullName} — selon votre profil
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { slug: 'particuliers', label: 'Particuliers', icon: Users, desc: 'Maison, copro, chantier privé' },
              { slug: 'professionnels', label: 'Professionnels', icon: Briefcase, desc: 'Architectes, MOA, maîtrise d\'œuvre' },
              { slug: 'industriels', label: 'Industriels', icon: Factory, desc: 'Sites de production, ERP, logistique' },
            ].map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}/${currentProduct.slug}/${currentDept.slug}`}
                className="group p-5 bg-white rounded-2xl border border-gray-200 hover:border-blue-corporate hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-corporate/10 to-cyan-glow/10 flex items-center justify-center">
                    <s.icon className="w-4 h-4 text-blue-corporate" />
                  </div>
                  <p className="font-bold text-navy-dark group-hover:text-blue-corporate transition-colors">
                    {s.label}
                  </p>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
