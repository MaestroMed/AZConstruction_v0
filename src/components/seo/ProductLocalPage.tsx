import Link from 'next/link'
import Image from 'next/image'
import { MapPin, CheckCircle2, ArrowRight, Phone, Star, Wrench, Truck, FileText, Shield } from 'lucide-react'
import type { Department, Commune, SEOProduct, SEOSegment } from '@/data/seo/types'
import { getProductFamilyBySlug } from '@/lib/data/product-families'
import { DepartmentCommunesList } from './DepartmentCommunesList'
import { NearbyCommunes } from './NearbyCommunes'
import { ProductDeptFooter } from './ProductDeptFooter'

interface ProductLocalPageProps {
  product: SEOProduct
  dept: Department
  commune?: Commune
  segment?: SEOSegment
}

const PROCESS_STEPS = [
  { icon: FileText, title: 'Devis gratuit', desc: 'Contactez-nous avec vos dimensions et envies. Réponse sous 48h.' },
  { icon: Wrench, title: 'Fabrication atelier', desc: 'Réalisation sur mesure dans notre atelier de 1800m² à Bruyères-sur-Oise.' },
  { icon: Truck, title: 'Livraison & pose', desc: 'Nos équipes livrent et posent dans tout votre département.' },
  { icon: Shield, title: 'Garantie décennale', desc: 'Tous nos ouvrages sont couverts par la garantie décennale.' },
]

export function ProductLocalPage({ product, dept, commune, segment }: ProductLocalPageProps) {
  const locationName = commune ? commune.name : dept.fullName
  const isCity = !!commune
  const prepLoc = isCity ? 'à' : 'en'

  // Product catalog data for images
  const productFamily = getProductFamilyBySlug(product.slug)
  const heroImage = productFamily?.heroImages?.[0]

  // URL building
  const productPath = `/${product.slug}`
  const canonicalUrl = isCity
    ? `https://azconstruction.fr${productPath}/${dept.slug}/${commune.slug}`
    : `https://azconstruction.fr${productPath}/${dept.slug}`
  const productCatalogUrl = `/produits/${product.slug}`

  // Schema.org
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AZ Construction',
    description: `Fabricant ${product.nameWithArticle} sur mesure ${prepLoc} ${locationName}`,
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
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '47' },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://azconstruction.fr' },
      { '@type': 'ListItem', position: 2, name: product.name, item: `https://azconstruction.fr${productCatalogUrl}` },
      ...(isCity
        ? [
            { '@type': 'ListItem', position: 3, name: dept.fullName, item: `https://azconstruction.fr${productPath}/${dept.slug}` },
            { '@type': 'ListItem', position: 4, name: commune.name, item: canonicalUrl },
          ]
        : [{ '@type': 'ListItem', position: 3, name: dept.fullName, item: canonicalUrl }]),
    ],
  }

  const faqSchema = product.faq.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: product.faq.map(f => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }
    : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <div className="min-h-screen bg-white">
        {/* ── Hero ─────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate pt-32 pb-16 overflow-hidden">
          {heroImage && (
            <Image
              src={heroImage}
              alt={`${product.name} sur mesure ${prepLoc} ${locationName} — AZ Construction`}
              fill
              className="object-cover opacity-15"
              priority
            />
          )}
          <div className="container mx-auto px-6 relative z-10">
            <nav className="flex items-center gap-2 text-white/50 text-sm mb-8 flex-wrap" aria-label="Fil d'Ariane">
              <Link href="/" className="hover:text-white">Accueil</Link>
              <span aria-hidden="true">›</span>
              <Link href={productCatalogUrl} className="hover:text-white">{product.name}</Link>
              <span aria-hidden="true">›</span>
              {isCity ? (
                <>
                  <Link href={`${productPath}/${dept.slug}`} className="hover:text-white">{dept.fullName}</Link>
                  <span aria-hidden="true">›</span>
                  <span className="text-white">{commune.name}</span>
                </>
              ) : (
                <span className="text-white">{dept.fullName}</span>
              )}
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-glow/20 text-cyan-glow rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                {locationName} — {dept.region}
                {segment && <span className="ml-1">• {segment.name}</span>}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {product.heroTitle(dept, commune)}{' '}
                {segment && <span className="text-cyan-glow">{segment.nameWithPrep}</span>}
              </h1>
              <p className="text-xl text-white/70 mb-8">
                {product.heroSubtitle(dept, commune)}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-glow text-navy-dark font-bold rounded-xl hover:bg-cyan-pale transition-colors">
                  {product.ctaLabel} <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:0971357496" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors">
                  <Phone className="w-4 h-4" /> 09 71 35 74 96
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Intro + Product image ────────────────────── */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-navy-dark mb-6">
                  {segment
                    ? `${product.name} ${segment.nameWithPrep} ${prepLoc} ${locationName}`
                    : `Votre fabricant ${product.nameWithArticle} ${prepLoc} ${locationName}`}
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p>{segment ? segment.introParagraph(product, dept, commune) : product.introParagraph(dept, commune)}</p>
                  <p>
                    Chaque réalisation est conçue et fabriquée sur mesure dans nos ateliers de
                    Bruyères-sur-Oise (95), à proximité de {locationName}. Nous assurons la livraison
                    et la pose dans l&apos;ensemble du département {dept.fullName}.
                  </p>
                </div>
                {/* Prominent link to product catalog */}
                <Link
                  href={productCatalogUrl}
                  className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-blue-50 text-blue-corporate font-semibold rounded-xl hover:bg-blue-100 transition-colors group"
                >
                  Voir tous nos modèles de {product.namePlural}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              {heroImage && (
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={heroImage}
                    alt={`${product.name} fabriqué par AZ Construction — installation ${prepLoc} ${locationName}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium drop-shadow-lg">
                      {product.name} sur mesure — Atelier AZ Construction, Bruyères-sur-Oise
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── Variants ─────────────────────────────────── */}
        {product.variants.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-navy-dark mb-3 text-center">
                Nos {product.namePlural} disponibles {prepLoc} {locationName}
              </h2>
              <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
                Chaque modèle est personnalisable : dimensions, couleur RAL, finitions. Fabrication artisanale française.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {product.variants.map(v => (
                  <Link key={v.name} href={v.href}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-blue-200 transition-all group">
                    <h3 className="font-bold text-navy-dark mb-2 group-hover:text-blue-corporate transition-colors">{v.name}</h3>
                    <p className="text-gray-500 text-sm">{v.description}</p>
                    <span className="inline-flex items-center gap-1 text-blue-corporate text-sm mt-4 font-medium">
                      Voir les modèles <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Process ──────────────────────────────────── */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy-dark mb-3 text-center">
              Comment ça marche ?
            </h2>
            <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
              De votre idée à la réalisation, nous vous accompagnons à chaque étape.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROCESS_STEPS.map((step, i) => (
                <div key={step.title} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-corporate/10 to-cyan-glow/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-7 h-7 text-blue-corporate" />
                  </div>
                  <div className="text-xs font-bold text-cyan-glow mb-1">Étape {i + 1}</div>
                  <h3 className="font-bold text-navy-dark mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Avantages + Avis ─────────────────────────── */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-navy-dark mb-6">
                  Pourquoi choisir AZ Construction {prepLoc} {locationName} ?
                </h2>
                <ul className="space-y-3">
                  {product.benefits.map(b => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-glow flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {product.features.map(f => (
                    <span key={f} className="px-3 py-1 bg-blue-50 text-blue-corporate text-sm rounded-full font-medium">{f}</span>
                  ))}
                </div>
              </div>
              <div className="bg-navy-dark rounded-3xl p-8 text-center">
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-3xl font-bold text-white mb-1">4.9 / 5</p>
                <p className="text-white/60 text-sm mb-6">Basé sur 47 avis clients</p>
                <p className="text-white/80 italic text-sm">
                  &quot;Fabrication impeccable, pose soignée. Le résultat correspond exactement
                  à nos attentes. Je recommande AZ Construction sans hésitation.&quot;
                </p>
                <p className="text-cyan-glow text-sm mt-3 font-medium">— Client {prepLoc} {locationName}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────── */}
        {product.faq.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-6 max-w-3xl">
              <h2 className="text-3xl font-bold text-navy-dark mb-8 text-center">
                Questions fréquentes — {product.name} {prepLoc} {locationName}
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
        )}

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
              Votre projet {product.nameWithArticle} {prepLoc} {locationName}
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Devis gratuit sous 48h. Fabrication sur mesure, pose professionnelle, garantie décennale.
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

        {/* ── Cross-links footer ──────────────────────── */}
        <ProductDeptFooter currentProduct={product} currentDept={dept} />
      </div>
    </>
  )
}
