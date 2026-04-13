import Link from 'next/link'
import { MapPin, CheckCircle2, ArrowRight, Phone, Star, Truck, Clock, Palette, ShieldCheck } from 'lucide-react'
import type { Department, Commune, SEOSegment } from '@/data/seo/types'
import { getSeoProductBySlug } from '@/data/seo/products'
import { DepartmentCommunesList } from './DepartmentCommunesList'
import { NearbyCommunes } from './NearbyCommunes'

interface ThermolaquageLocalPageProps {
  dept: Department
  commune?: Commune
  segment?: SEOSegment
}

const AVANTAGES = [
  { icon: Truck, title: 'Enlèvement gratuit', desc: 'Nous récupérons vos pièces directement chez vous.' },
  { icon: Clock, title: 'Délai 5-7 jours', desc: 'Traitement rapide, retour dans la semaine.' },
  { icon: Palette, title: '200+ couleurs RAL', desc: 'Toutes les teintes RAL classiques et métallisées.' },
  { icon: ShieldCheck, title: 'Garantie 10 ans', desc: 'Résistance anti-corrosion et UV garantie.' },
]

export function ThermolaquageLocalPage({ dept, commune, segment }: ThermolaquageLocalPageProps) {
  const product = getSeoProductBySlug('thermolaquage')!
  const locationName = commune ? commune.name : dept.fullName
  const isCity = !!commune
  const prepLoc = isCity ? 'à' : 'en'

  const canonicalUrl = isCity
    ? `https://azconstruction.fr/services/thermolaquage/${dept.slug}/${commune.slug}`
    : `https://azconstruction.fr/services/thermolaquage/${dept.slug}`

  // Schema.org
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AZ Construction — Thermolaquage',
    description: `Service de thermolaquage professionnel ${prepLoc} ${locationName}`,
    url: canonicalUrl,
    telephone: '09 71 35 74 96',
    email: 'contact@azconstruction.fr',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '23 Chemin du Bac des Aubins',
      addressLocality: 'Bruyères-sur-Oise',
      postalCode: '95820',
      addressCountry: 'FR',
    },
    areaServed: { '@type': isCity ? 'City' : 'AdministrativeArea', name: locationName },
    priceRange: '€€',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: product.faq.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-white">
        {/* ── Hero ─────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate pt-32 pb-16">
          <div className="container mx-auto px-6">
            <nav className="flex items-center gap-2 text-white/50 text-sm mb-8 flex-wrap">
              <Link href="/" className="hover:text-white">Accueil</Link>
              <span>›</span>
              <Link href="/services/thermolaquage" className="hover:text-white">Thermolaquage</Link>
              <span>›</span>
              {isCity ? (
                <>
                  <Link href={`/services/thermolaquage/${dept.slug}`} className="hover:text-white">
                    {dept.fullName}
                  </Link>
                  <span>›</span>
                  <span className="text-white">{commune.name}</span>
                </>
              ) : (
                <span className="text-white">{dept.fullName}</span>
              )}
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-glow/20 text-cyan-glow rounded-full text-sm font-medium mb-6">
                <Truck className="w-4 h-4" />
                Enlèvement & livraison gratuits
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {product.heroTitle(dept, commune)}
                {segment && (
                  <span className="text-cyan-glow"> {segment.nameWithPrep}</span>
                )}
              </h1>
              <p className="text-xl text-white/70 mb-8">
                {product.heroSubtitle(dept, commune)}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/devis/formulaire"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-glow text-navy-dark font-bold rounded-xl hover:bg-cyan-pale transition-colors"
                >
                  Devis gratuit thermolaquage <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:0971357496"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  09 71 35 74 96
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Avantages ────────────────────────────────── */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy-dark mb-10 text-center">
              Thermolaquage professionnel {prepLoc} {locationName}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {AVANTAGES.map(a => (
                <div key={a.title} className="bg-gray-50 rounded-2xl p-6 text-center">
                  <a.icon className="w-10 h-10 text-cyan-glow mx-auto mb-4" />
                  <h3 className="font-bold text-navy-dark mb-2">{a.title}</h3>
                  <p className="text-gray-500 text-sm">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Intro ────────────────────────────────────── */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="prose prose-lg text-gray-600">
              <p>
                {segment
                  ? segment.introParagraph(product, dept, commune)
                  : product.introParagraph(dept, commune)}
              </p>
              <p>
                Notre atelier de thermolaquage à Bruyères-sur-Oise (95) dispose d&apos;un four de
                polymérisation professionnel pouvant accueillir des pièces jusqu&apos;à 6 mètres de long.
                Nous assurons l&apos;enlèvement et la livraison de vos pièces dans tout le département {dept.fullName}.
              </p>
            </div>
          </div>
        </section>

        {/* ── Spécialités ──────────────────────────────── */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy-dark mb-10 text-center">
              Nos spécialités thermolaquage
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.variants.map(v => (
                <Link
                  key={v.name}
                  href={v.href}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-blue-200 transition-all group"
                >
                  <h3 className="font-bold text-navy-dark mb-2 group-hover:text-blue-corporate transition-colors">
                    {v.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{v.description}</p>
                  <span className="inline-flex items-center gap-1 text-blue-corporate text-sm mt-4 font-medium">
                    En savoir plus <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Avis ─────────────────────────────────────── */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 max-w-2xl text-center">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-3xl font-bold text-navy-dark mb-1">4.9 / 5</p>
            <p className="text-gray-500 text-sm mb-6">Basé sur 47 avis clients</p>
            <p className="text-gray-600 italic">
              &quot;Service rapide et résultat parfait. Mes jantes sont comme neuves.
              Enlèvement et livraison très pratiques.&quot;
            </p>
            <p className="text-blue-corporate text-sm mt-3 font-medium">— Client {prepLoc} {locationName}</p>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────── */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl font-bold text-navy-dark mb-8 text-center">
              Questions fréquentes — Thermolaquage {prepLoc} {locationName}
            </h2>
            <div className="space-y-4">
              {product.faq.map(f => (
                <details key={f.question} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-navy-dark hover:text-blue-corporate transition-colors">
                    {f.question}
                  </summary>
                  <p className="px-6 pb-4 text-gray-600">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Communes list / nearby ──────────────────── */}
        {isCity ? (
          <NearbyCommunes product={product} dept={dept} currentCommune={commune} />
        ) : (
          <DepartmentCommunesList product={product} dept={dept} />
        )}

        {/* ── CTA ─────────────────────────────────────── */}
        <section className="py-16 bg-navy-dark">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Thermolaquage {prepLoc} {locationName}
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Devis gratuit. Enlèvement et livraison. 200+ couleurs RAL. Délai 5-7 jours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/devis/formulaire"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-glow text-navy-dark font-bold rounded-2xl hover:bg-cyan-pale transition-colors text-lg"
              >
                Demander un devis gratuit <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:0971357496"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-2xl hover:bg-white/20 transition-colors text-lg"
              >
                <Phone className="w-5 h-5" />
                09 71 35 74 96
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
