import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Factory, Phone } from 'lucide-react'
import { seoProducts, departments } from '@/data/seo'

export const metadata: Metadata = {
  title: 'Métallerie industrielle sur mesure | AZ Construction',
  description:
    'AZ Construction fabrique des ouvrages métalliques sur mesure pour les industriels : garde-corps, escaliers, portails, grilles de ventilation. Usines, entrepôts, ERP.',
  alternates: { canonical: 'https://azconstruction.fr/industriels' },
}

export default function IndustrielsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-glow/20 text-cyan-glow rounded-full text-sm font-medium mb-6">
              <Factory className="w-4 h-4" />
              Industriels & Collectivités
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Métallerie sur mesure <span className="text-cyan-glow">pour les industriels</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              AZ Construction accompagne les industriels, collectivités et gestionnaires de sites dans
              leurs projets de métallerie sur mesure en Île-de-France et dans l&apos;Oise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/devis/formulaire" className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-glow text-navy-dark font-bold rounded-xl hover:bg-cyan-pale transition-colors">
                Demander un devis <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:0971357496" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors">
                <Phone className="w-4 h-4" /> 09 71 35 74 96
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy-dark mb-10 text-center">
            Nos produits pour les industriels
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoProducts.filter(p => p.slug !== 'thermolaquage').map(p => (
              <Link
                key={p.slug}
                href={`/industriels/${p.slug}/${departments[0].slug}`}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-md hover:border-blue-200 border border-transparent transition-all group"
              >
                <h3 className="font-bold text-navy-dark mb-2 group-hover:text-blue-corporate transition-colors">
                  {p.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{p.features.join(' • ')}</p>
                <span className="inline-flex items-center gap-1 text-blue-corporate text-sm font-medium">
                  Voir par département <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
