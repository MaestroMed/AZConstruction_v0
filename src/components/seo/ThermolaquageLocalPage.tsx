import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, Star, Truck, Clock, Palette, ShieldCheck, Flame, CheckCircle2 } from 'lucide-react'
import type { Department, Commune, SEOSegment } from '@/data/seo/types'
import { getSeoProductBySlug } from '@/data/seo/products'
import { DepartmentCommunesList } from './DepartmentCommunesList'
import { NearbyCommunes } from './NearbyCommunes'
import { ProductDeptFooter } from './ProductDeptFooter'

interface ThermolaquageLocalPageProps {
  dept: Department
  commune?: Commune
  segment?: SEOSegment
}

const AVANTAGES = [
  { icon: Truck, title: 'Enlèvement gratuit', desc: 'Nous récupérons vos pièces directement chez vous ou sur votre chantier.' },
  { icon: Clock, title: 'Délai 5-7 jours', desc: 'Traitement rapide dans notre four professionnel. Retour dans la semaine.' },
  { icon: Palette, title: '200+ couleurs RAL', desc: 'Toutes les teintes RAL classiques, satinées, mates et métallisées.' },
  { icon: ShieldCheck, title: 'Garantie 10 ans', desc: 'Résistance anti-corrosion, UV et chocs. Finition durable garantie.' },
]

const THERMO_HERO_IMAGE = 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=80'

export function ThermolaquageLocalPage({ dept, commune, segment }: ThermolaquageLocalPageProps) {
  const product = getSeoProductBySlug('thermolaquage')!
  const locationName = commune ? commune.name : dept.fullName
  const isCity = !!commune
  const prepLoc = isCity ? 'à' : 'en'

  const canonicalUrl = isCity
    ? `https://azconstruction.fr/services/thermolaquage/${dept.slug}/${commune.slug}`
    : `https://azconstruction.fr/services/thermolaquage/${dept.slug}`

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AZ Construction — Thermolaquage',
    description: `Service de thermolaquage professionnel ${prepLoc} ${locationName}`,
    url: canonicalUrl,
    telephone: '09 71 35 74 96',
    email: 'contact@azconstruction.fr',
    address: { '@type': 'PostalAddress', streetAddress: '23 Chemin du Bac des Aubins', addressLocality: 'Bruyères-sur-Oise', postalCode: '95820', addressCountry: 'FR' },
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
        <section className="relative bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate pt-32 pb-16 overflow-hidden">
          <Image
            src={THERMO_HERO_IMAGE}
            alt={`Thermolaquage professionnel ${prepLoc} ${locationName} — cabine de peinture poudre AZ Construction`}
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="container mx-auto px-6 relative z-10">
            <nav className="flex items-center gap-2 text-white/50 text-sm mb-8 flex-wrap" aria-label="Fil d'Ariane">
              <Link href="/" className="hover:text-white">Accueil</Link>
              <span aria-hidden="true">›</span>
              <Link href="/services/thermolaquage" className="hover:text-white">Thermolaquage</Link>
              <span aria-hidden="true">›</span>
              {isCity ? (
                <>
                  <Link href={`/services/thermolaquage/${dept.slug}`} className="hover:text-white">{dept.fullName}</Link>
                  <span aria-hidden="true">›</span>
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
                {segment && <span className="text-cyan-glow"> {segment.nameWithPrep}</span>}
              </h1>
              <p className="text-xl text-white/70 mb-8">{product.heroSubtitle(dept, commune)}</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-glow text-navy-dark font-bold rounded-xl hover:bg-cyan-pale transition-colors">
                  Devis gratuit thermolaquage <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:0971357496" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors">
                  <Phone className="w-4 h-4" /> 09 71 35 74 96
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Avantages ────────────────────────────────── */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy-dark mb-3 text-center">
              Thermolaquage professionnel {prepLoc} {locationName}
            </h2>
            <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
              Peinture poudre époxy cuite au four à 200°C. Une finition industrielle durable pour toutes vos pièces métalliques.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {AVANTAGES.map(a => (
                <div key={a.title} className="bg-gray-50 rounded-2xl p-6 text-center">
                  <a.icon className="w-10 h-10 text-cyan-glow mx-auto mb-4" aria-hidden="true" />
                  <h3 className="font-bold text-navy-dark mb-2">{a.title}</h3>
                  <p className="text-gray-500 text-sm">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Intro + Image ────────────────────────────── */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <div className="prose prose-lg text-gray-600">
                  <p>{segment ? segment.introParagraph(product, dept, commune) : product.introParagraph(dept, commune)}</p>
                  <p>
                    Notre atelier de Bruyères-sur-Oise (95) dispose d&apos;un four de polymérisation professionnel
                    pouvant accueillir des pièces jusqu&apos;à 6 mètres de long. Nous assurons l&apos;enlèvement et la
                    livraison de vos pièces dans tout le département {dept.fullName}.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {product.features.map(f => (
                    <span key={f} className="px-3 py-1 bg-blue-50 text-blue-corporate text-sm rounded-full font-medium">{f}</span>
                  ))}
                </div>
                <Link href="/services/thermolaquage"
                  className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-blue-50 text-blue-corporate font-semibold rounded-xl hover:bg-blue-100 transition-colors group">
                  Découvrir notre service thermolaquage
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={THERMO_HERO_IMAGE}
                  alt={`Four de thermolaquage AZ Construction — service de peinture poudre ${prepLoc} ${locationName}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium drop-shadow-lg">
                    Atelier de thermolaquage — AZ Construction, Bruyères-sur-Oise (95)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Spécialités ──────────────────────────────── */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy-dark mb-3 text-center">Nos spécialités thermolaquage</h2>
            <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
              Du particulier à l&apos;industriel, nous thermolaquons toutes vos pièces métalliques.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.variants.map(v => (
                <Link key={v.name} href={v.href}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-blue-200 transition-all group">
                  <Flame className="w-8 h-8 text-orange-500 mb-3" aria-hidden="true" />
                  <h3 className="font-bold text-navy-dark mb-2 group-hover:text-blue-corporate transition-colors">{v.name}</h3>
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
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              ))}
            </div>
            <p className="text-3xl font-bold text-navy-dark mb-1">4.9 / 5</p>
            <p className="text-gray-500 text-sm mb-6">Basé sur 47 avis clients</p>
            <p className="text-gray-600 italic">
              &quot;Service rapide et résultat parfait. Mes jantes sont comme neuves.
              Enlèvement et livraison très pratiques. Je recommande !&quot;
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
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-navy-dark hover:text-blue-corporate transition-colors">{f.question}</summary>
                  <p className="px-6 pb-4 text-gray-600">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Communes ─────────────────────────────────── */}
        {isCity ? (
          <NearbyCommunes product={product} dept={dept} currentCommune={commune} />
        ) : (
          <DepartmentCommunesList product={product} dept={dept} />
        )}

        {/* ── CTA ─────────────────────────────────────── */}
        <section className="py-16 bg-navy-dark">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Thermolaquage {prepLoc} {locationName}</h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Devis gratuit. Enlèvement et livraison. 200+ couleurs RAL. Délai 5-7 jours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-glow text-navy-dark font-bold rounded-2xl hover:bg-cyan-pale transition-colors text-lg">
                Demander un devis gratuit <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:0971357496" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-2xl hover:bg-white/20 transition-colors text-lg">
                <Phone className="w-5 h-5" /> 09 71 35 74 96
              </a>
            </div>
          </div>
        </section>

        {/* ── Cross-links ─────────────────────────────── */}
        <ProductDeptFooter currentProduct={product} currentDept={dept} />
      </div>
    </>
  )
}
