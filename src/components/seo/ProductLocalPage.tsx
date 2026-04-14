import Link from 'next/link'
import { MapPin, CheckCircle2, ArrowRight, Phone, Star } from 'lucide-react'
import type { Department, Commune, SEOProduct, SEOSegment } from '@/data/seo/types'
import { DepartmentCommunesList } from './DepartmentCommunesList'
import { NearbyCommunes } from './NearbyCommunes'
import { ProductDeptFooter } from './ProductDeptFooter'

interface ProductLocalPageProps {
  product: SEOProduct
  dept: Department
  commune?: Commune
  segment?: SEOSegment
}

export function ProductLocalPage({ product, dept, commune, segment }: ProductLocalPageProps) {
  const locationName = commune ? commune.name : dept.fullName
  const isCity = !!commune

  // URL building
  const productPath = product.slug === 'thermolaquage'
    ? '/services/thermolaquage'
    : `/${product.slug}`
  const canonicalUrl = isCity
    ? `https://azconstruction.fr${productPath}/${dept.slug}/${commune.slug}`
    : `https://azconstruction.fr${productPath}/${dept.slug}`

  // Segment prefix for breadcrumb
  const segmentPrefix = segment ? `/${segment.slug}` : ''
  const productCatalogUrl = product.slug === 'thermolaquage'
    ? '/services/thermolaquage'
    : `/produits/${product.slug}`

  // Schema.org
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AZ Construction',
    description: `Fabricant ${product.nameWithArticle} sur mesure ${isCity ? 'à' : 'en'} ${locationName}`,
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
    areaServed: {
      '@type': isCity ? 'City' : 'AdministrativeArea',
      name: locationName,
    },
    priceRange: '€€',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
    },
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
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <div className="min-h-screen bg-white">
        {/* ── Hero ─────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate pt-32 pb-16">
          <div className="container mx-auto px-6">
            <nav className="flex items-center gap-2 text-white/50 text-sm mb-8 flex-wrap">
              <Link href="/" className="hover:text-white">Accueil</Link>
              <span>›</span>
              <Link href={productCatalogUrl} className="hover:text-white">{product.name}</Link>
              <span>›</span>
              {isCity ? (
                <>
                  <Link href={`${segmentPrefix}${productPath}/${dept.slug}`} className="hover:text-white">
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
                <MapPin className="w-4 h-4" />
                {locationName} — {dept.region}
                {segment && <span className="ml-1">• {segment.name}</span>}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {product.heroTitle(dept, commune)}{' '}
                {segment && (
                  <span className="text-cyan-glow">{segment.nameWithPrep}</span>
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
                  {product.ctaLabel} <ArrowRight className="w-4 h-4" />
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

        {/* ── Intro ────────────────────────────────────── */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-navy-dark mb-6">
                {segment
                  ? `${product.name} ${segment.nameWithPrep} ${isCity ? 'à' : 'en'} ${locationName}`
                  : `Votre fabricant ${product.nameWithArticle} ${isCity ? 'à' : 'en'} ${locationName}`}
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  {segment
                    ? segment.introParagraph(product, dept, commune)
                    : product.introParagraph(dept, commune)}
                </p>
                <p>
                  Chaque réalisation est conçue et fabriquée sur mesure dans nos ateliers de
                  Bruyères-sur-Oise (95), à proximité de {locationName}. Nous assurons la livraison
                  et la pose dans l&apos;ensemble du département {dept.fullName}.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Variants ─────────────────────────────────── */}
        {product.variants.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-navy-dark mb-10 text-center">
                Nos {product.namePlural} disponibles {isCity ? 'à' : 'en'} {locationName}
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
                      Voir les modèles <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Avantages ────────────────────────────────── */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-navy-dark mb-6">
                  Pourquoi choisir AZ Construction {isCity ? 'à' : 'en'} {locationName} ?
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
                    <span key={f} className="px-3 py-1 bg-blue-50 text-blue-corporate text-sm rounded-full font-medium">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-navy-dark rounded-3xl p-8 text-center">
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-3xl font-bold text-white mb-1">4.9 / 5</p>
                <p className="text-white/60 text-sm mb-6">Basé sur 47 avis clients</p>
                <p className="text-white/80 italic text-sm">
                  &quot;Fabrication impeccable, pose soignée. Le résultat correspond exactement
                  à nos attentes. Je recommande AZ Construction sans hésitation.&quot;
                </p>
                <p className="text-cyan-glow text-sm mt-3 font-medium">— Client {isCity ? 'à' : 'en'} {locationName}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────── */}
        {product.faq.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 max-w-3xl">
              <h2 className="text-3xl font-bold text-navy-dark mb-8 text-center">
                Questions fréquentes — {product.name} {isCity ? 'à' : 'en'} {locationName}
              </h2>
              <div className="space-y-4">
                {product.faq.map(f => (
                  <details key={f.question} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                    <summary className="px-6 py-4 cursor-pointer font-semibold text-navy-dark hover:text-blue-corporate transition-colors">
                      {f.question}
                    </summary>
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
              Votre projet {product.nameWithArticle} {isCity ? 'à' : 'en'} {locationName}
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Devis gratuit sous 48h. Fabrication sur mesure, pose professionnelle, garantie décennale.
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

        {/* ── Cross-links footer ──────────────────────── */}
        <ProductDeptFooter currentProduct={product} currentDept={dept} />
      </div>
    </>
  )
}
