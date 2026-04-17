import Link from 'next/link'
import Image from 'next/image'
import { MapPin, CheckCircle2, ArrowRight, Phone, Star, Wrench, Truck, FileText, Shield } from 'lucide-react'
import type { Department, Commune, SEOProduct, SEOSegment } from '@/data/seo/types'
import { getProductFamilyBySlug } from '@/lib/data/product-families'
import { prisma } from '@/lib/prisma'
import { DepartmentCommunesList } from './DepartmentCommunesList'
import { NearbyCommunes } from './NearbyCommunes'
import { ProductDeptFooter } from './ProductDeptFooter'
import { RealizationsForLocation } from './RealizationsForLocation'
import { TestimonialsBlock } from './TestimonialsBlock'
import { TrustStrip } from './TrustStrip'
import { WhyCustomBlock } from './WhyCustomBlock'
import { RelatedProductsBlock } from './RelatedProductsBlock'
import { StickyCTABar } from './StickyCTABar'
import { ProductHeroVisual } from './ProductHeroVisual'
import dynamic from 'next/dynamic'

const PartnersCarousel = dynamic(() => import('@/components/homepage/PartnersCarousel'))

interface ProductLocalPageProps {
  product: SEOProduct
  dept: Department
  commune?: Commune
  segment?: SEOSegment
}

const PROCESS_STEPS = [
  { icon: FileText, title: 'Devis chiffré sous 48 h', desc: 'Vos dimensions au téléphone, votre devis dans la boîte mail. Pas de relance commerciale.' },
  { icon: Wrench, title: 'Fabriqué par nos soudeurs', desc: 'Notre atelier de 1800 m² à Bruyères-sur-Oise (95). Pas de sous-traitance, on signe ce qu\'on fait.' },
  { icon: Truck, title: 'Livré et posé par nos équipes', desc: 'Notre camion sort tous les matins. Pose interne, pas d\'intérimaires sur vos chantiers.' },
  { icon: Shield, title: 'Décennale dans la poche', desc: 'Attestation fournie avant la pose. SAV joignable directement à l\'atelier.' },
]

// Sub-product → parent product mapping. When a sub-product has no specific
// hero image (DB or family), we fall back to the parent's hero so the page
// looks visually relevant (e.g. "garde-corps-verre" inherits "garde-corps").
const SUBPRODUCT_PARENT: Record<string, string> = {
  'garde-corps-verre': 'garde-corps',
  'escalier-helicoidal': 'escaliers',
  'portail-coulissant': 'portails',
  'portail-autoportant': 'portails',
  'verriere-atelier': 'verrieres',
}

// Some legacy SiteImage keys don't follow the slug convention (e.g. the
// homepage tile for grilles-ventilation is just `product-grilles`).
const LEGACY_SITE_IMAGE_KEY: Record<string, string> = {
  'grilles-ventilation': 'product-grilles',
}

function siteImageKey(slug: string): string {
  return LEGACY_SITE_IMAGE_KEY[slug] ?? `product-${slug}`
}

async function fetchSiteImage(key: string): Promise<string | null> {
  try {
    const row = await prisma.siteImage.findUnique({ where: { key } })
    // Only return imageUrl (a real upload), NOT fallbackUrl which is just
    // the placeholder. We want null when no real image exists so the caller
    // renders the generated visual instead.
    return row?.imageUrl ?? null
  } catch {
    return null
  }
}

/**
 * Resolves the product hero image URL. Returns `null` if no real photo
 * exists anywhere — the caller should then render `<ProductHeroVisual>`.
 */
async function resolveProductHero(slug: string, fromFamily: string | undefined): Promise<string | null> {
  // 1. Specific SiteImage for this product/sub-product
  const own = await fetchSiteImage(siteImageKey(slug))
  if (own) return own

  // 2. Family heroImages (if real, not placeholder)
  if (fromFamily && fromFamily !== '/placeholder.svg') return fromFamily

  // 3. Parent product fallback (for sub-products only)
  const parentSlug = SUBPRODUCT_PARENT[slug]
  if (parentSlug) {
    const parentImg = await fetchSiteImage(siteImageKey(parentSlug))
    if (parentImg) return parentImg
    const parentFamily = getProductFamilyBySlug(parentSlug)
    const parentHero = parentFamily?.heroImages?.[0]
    if (parentHero && parentHero !== '/placeholder.svg') return parentHero
  }

  // 4. No real photo — caller renders generated visual
  return null
}

export async function ProductLocalPage({ product, dept, commune, segment }: ProductLocalPageProps) {
  const locationName = commune ? commune.name : dept.fullName
  const isCity = !!commune
  const prepLoc = isCity ? 'à' : 'en'

  const productFamily = getProductFamilyBySlug(product.slug)
  const heroImage = await resolveProductHero(product.slug, productFamily?.heroImages?.[0])

  const productPath = `/${product.slug}`
  const canonicalUrl = isCity
    ? `https://www.azconstruction.fr${productPath}/${dept.slug}/${commune.slug}`
    : `https://www.azconstruction.fr${productPath}/${dept.slug}`
  const productCatalogUrl = `/produits/${product.slug}`

  // Schema.org
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Service'],
    name: 'AZ Construction',
    description: `Fabricant ${product.nameWithArticle} sur mesure ${prepLoc} ${locationName}`,
    url: canonicalUrl,
    telephone: '09 71 35 74 96',
    email: 'contact@azconstruction.fr',
    address: { '@type': 'PostalAddress', streetAddress: '23 Chemin du Bac des Aubins', addressLocality: 'Bruyères-sur-Oise', postalCode: '95820', addressCountry: 'FR' },
    areaServed: {
      '@type': isCity ? 'City' : 'AdministrativeArea',
      name: locationName,
      ...(isCity && { containedInPlace: { '@type': 'AdministrativeArea', name: dept.name } }),
    },
    serviceType: `Fabrication et pose ${product.nameWithArticle} sur mesure`,
    provider: { '@type': 'Organization', name: 'AZ Construction', telephone: '09 71 35 74 96' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: product.name,
      itemListElement: product.variants.map(v => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: v.name, description: v.description },
      })),
    },
    priceRange: '€€',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '47' },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.azconstruction.fr' },
      { '@type': 'ListItem', position: 2, name: product.name, item: `https://www.azconstruction.fr${productCatalogUrl}` },
      ...(isCity
        ? [
            { '@type': 'ListItem', position: 3, name: dept.fullName, item: `https://www.azconstruction.fr${productPath}/${dept.slug}` },
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
        {/* ── Hero — Premium style ────────────────────── */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden">
          {/* Background : real photo if uploaded, generated visual otherwise */}
          {heroImage ? (
            <Image
              src={heroImage}
              alt={`${product.name} sur mesure ${prepLoc} ${locationName} — AZ Construction`}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <ProductHeroVisual productSlug={product.slug} productName={product.name} />
          )}
          {/* Overlay gradient — only when there's a photo (the visual already has its own treatment) */}
          {heroImage && (
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/80 to-navy-dark/30" />
          )}
          {/* Radial glow */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)' }} />

          <div className="container mx-auto px-6 pb-16 pt-32 relative z-10">
            <nav className="flex items-center gap-2 text-white/40 text-sm mb-8 flex-wrap" aria-label="Fil d'Ariane">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span aria-hidden="true">›</span>
              <Link href={productCatalogUrl} className="hover:text-white transition-colors">{product.name}</Link>
              <span aria-hidden="true">›</span>
              {isCity ? (
                <>
                  <Link href={`${productPath}/${dept.slug}`} className="hover:text-white transition-colors">{dept.fullName}</Link>
                  <span aria-hidden="true">›</span>
                  <span className="text-white">{commune.name}</span>
                </>
              ) : (
                <span className="text-white">{dept.fullName}</span>
              )}
            </nav>

            <div className="max-w-3xl">
              {/* Glass badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-card-glow mb-6">
                <MapPin className="w-4 h-4 text-cyan-glow" />
                <span className="text-cyan-glow text-sm font-medium">{locationName} — {dept.region}</span>
                {segment && <span className="text-white/50 ml-1">• {segment.name}</span>}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {product.heroTitle(dept, commune)}{' '}
                {segment && <span className="text-gradient-premium">{segment.nameWithPrep}</span>}
              </h1>
              <p className="text-xl text-white/60 mb-8 max-w-2xl">
                {product.heroSubtitle(dept, commune)}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/contact" className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-cyan-glow to-cyan-400 text-navy-dark font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-glow/25 transition-all">
                  {product.ctaLabel} <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:0971357496" className="inline-flex items-center gap-2 px-6 py-3.5 glass-card text-white rounded-xl hover:bg-white/10 transition-all">
                  <Phone className="w-4 h-4" /> 09 71 35 74 96
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3">
                {product.features.map(f => (
                  <div key={f} className="flex items-center gap-2 px-3 py-1.5 glass-card rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-glow" />
                    <span className="text-white/70 text-xs font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* ── Trust strip ──────────────────────────────── */}
        <TrustStrip />

        {/* ── Intro + Product image ────────────────────── */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-6">
                  {segment
                    ? `${product.name} ${segment.nameWithPrep} ${prepLoc} ${locationName}`
                    : `Votre fabricant ${product.nameWithArticle} ${prepLoc} ${locationName}`}
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p>{segment ? segment.introParagraph(product, dept, commune) : product.introParagraph(dept, commune)}</p>
                  {isCity && commune.population && (
                    <p>
                      Avec ses {commune.population.toLocaleString('fr-FR')} habitants, {commune.name} ({commune.codePostal})
                      est une commune dynamique {dept.region === 'Île-de-France' ? 'd\'Île-de-France' : `de l'${dept.region}`} où
                      la demande {product.nameWithArticle} sur mesure est forte, tant en rénovation qu&apos;en construction neuve.
                    </p>
                  )}
                  <p>
                    Chaque réalisation est conçue et fabriquée sur mesure dans nos ateliers de
                    Bruyères-sur-Oise (95){isCity ? `, à proximité de ${commune.name}` : ''}. Nous assurons la livraison
                    et la pose dans l&apos;ensemble du département {dept.fullName}.
                  </p>
                </div>
                <Link
                  href={productCatalogUrl}
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-navy-dark/5 text-navy-dark font-semibold rounded-xl hover:bg-navy-dark/10 transition-colors group"
                >
                  Voir tous nos modèles de {product.namePlural}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-navy-dark/10">
                {heroImage ? (
                  <Image
                    src={heroImage}
                    alt={`${product.name} fabriqué par AZ Construction — installation ${prepLoc} ${locationName}`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <ProductHeroVisual productSlug={product.slug} productName={product.name} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium drop-shadow-lg">
                    {product.name} sur mesure — Atelier AZ Construction, Bruyères-sur-Oise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Variants — Glass cards ──────────────────── */}
        {product.variants.length > 0 && (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-3">
                  Nos {product.namePlural} disponibles {prepLoc} {locationName}
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  Chaque modèle est personnalisable : dimensions, couleur RAL, finitions. Fabrication artisanale française.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {product.variants.map(v => (
                  <Link key={v.name} href={v.href}
                    className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:shadow-blue-corporate/5 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-corporate/10 to-cyan-glow/10 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-5 h-5 text-blue-corporate" />
                    </div>
                    <h3 className="font-bold text-navy-dark mb-2 group-hover:text-blue-corporate transition-colors">{v.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
                    <span className="inline-flex items-center gap-1 text-blue-corporate text-sm mt-4 font-medium">
                      Découvrir <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Process — Dark section ──────────────────── */}
        <section className="relative py-20 bg-navy-dark overflow-hidden">
          <div className="absolute inset-0 mesh-gradient opacity-30" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.2) 0%, transparent 70%)' }} />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <span className="text-cyan-glow text-sm font-semibold uppercase tracking-wider">Notre processus</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-3">Comment ça marche ?</h2>
              <p className="text-white/50 max-w-2xl mx-auto">De votre idée à la réalisation, nous vous accompagnons à chaque étape.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROCESS_STEPS.map((step, i) => (
                <div key={step.title} className="glass-card rounded-2xl p-6 text-center hover:bg-white/[0.06] transition-colors">
                  <div className="w-12 h-12 rounded-2xl glass-card-glow flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-cyan-glow" />
                  </div>
                  <div className="text-xs font-bold text-cyan-glow/60 mb-2">Étape {i + 1}</div>
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Réalisations près de chez vous ─────────────── */}
        <RealizationsForLocation dept={dept} commune={commune} productSlug={product.slug} />

        {/* ── Témoignages ──────────────────────────────── */}
        <TestimonialsBlock productSlug={product.slug} dept={dept} commune={commune} />

        {/* ── Pourquoi sur mesure ──────────────────────── */}
        <WhyCustomBlock product={product} dept={dept} commune={commune} />

        {/* ── Services associés ────────────────────────── */}
        <RelatedProductsBlock currentProductSlug={product.slug} dept={dept} commune={commune} />

        {/* ── Partners carousel ────────────────────────── */}
        <PartnersCarousel />

        {/* ── Avantages + Avis ─────────────────────────── */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-3">
                <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-8">
                  Pourquoi choisir AZ Construction {prepLoc} {locationName} ?
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {product.benefits.map(b => (
                    <div key={b} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-glow/10 to-blue-corporate/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-cyan-glow" />
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-navy-dark rounded-3xl p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 mesh-gradient opacity-20" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-center gap-1 mb-3">
                      {[1, 2, 3, 4, 5].map(i => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                      ))}
                    </div>
                    <p className="text-4xl font-bold text-white mb-1">4.9<span className="text-lg text-white/40"> / 5</span></p>
                    <p className="text-white/40 text-sm mb-6">47 avis clients vérifiés</p>
                    <div className="glass-card rounded-xl p-4">
                      <p className="text-white/70 italic text-sm leading-relaxed">
                        &quot;Fabrication impeccable, pose soignée. Le résultat correspond exactement
                        à nos attentes. Je recommande sans hésitation.&quot;
                      </p>
                      <p className="text-cyan-glow text-xs mt-3 font-medium">— Client {prepLoc} {locationName}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ — Clean design ──────────────────────── */}
        {product.faq.length > 0 && (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 max-w-3xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-3">
                  Questions fréquentes
                </h2>
                <p className="text-gray-500">{product.name} {prepLoc} {locationName}</p>
              </div>
              <div className="space-y-3">
                {product.faq.map(f => (
                  <details key={f.question} className="bg-white rounded-2xl border border-gray-100 overflow-hidden group shadow-sm">
                    <summary className="px-6 py-5 cursor-pointer font-semibold text-navy-dark hover:text-blue-corporate transition-colors flex items-center justify-between">
                      {f.question}
                      <ArrowRight className="w-4 h-4 text-gray-300 group-open:rotate-90 transition-transform flex-shrink-0" />
                    </summary>
                    <p className="px-6 pb-5 text-gray-600 leading-relaxed">{f.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Communes ────────────────────────────────── */}
        {isCity ? (
          <NearbyCommunes product={product} dept={dept} currentCommune={commune} />
        ) : (
          <DepartmentCommunesList product={product} dept={dept} />
        )}

        {/* ── CTA final — Premium ─────────────────────── */}
        <section className="relative py-20 bg-navy-dark overflow-hidden">
          <div className="absolute inset-0 mesh-gradient opacity-20" />
          <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.2) 0%, transparent 70%)' }} />
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 glass-card-glow px-4 py-2 mb-6">
              <span className="text-cyan-glow text-sm font-medium">Démarrez votre projet</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Votre projet {product.nameWithArticle} {prepLoc} {locationName}
            </h2>
            <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
              Devis gratuit sous 48h. Fabrication sur mesure, pose professionnelle, garantie décennale.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-glow inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-glow to-cyan-400 text-navy-dark font-bold rounded-2xl hover:shadow-lg hover:shadow-cyan-glow/25 transition-all text-lg">
                Demander un devis gratuit <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:0971357496" className="inline-flex items-center gap-2 px-8 py-4 glass-card text-white rounded-2xl hover:bg-white/10 transition-all text-lg">
                <Phone className="w-5 h-5" /> 09 71 35 74 96
              </a>
            </div>
          </div>
        </section>

        {/* ── Cross-links ─────────────────────────────── */}
        <ProductDeptFooter currentProduct={product} currentDept={dept} />
      </div>

      <StickyCTABar ctaLabel={product.ctaLabel.replace('Demander un devis', 'Devis')} />
    </>
  )
}
