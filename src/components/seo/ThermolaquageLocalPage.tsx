import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, Star, Truck, Clock, Palette, ShieldCheck, Flame, CheckCircle2 } from 'lucide-react'
import type { Department, Commune, SEOSegment } from '@/data/seo/types'
import { getSeoProductBySlug } from '@/data/seo/products'
import { prisma } from '@/lib/prisma'
import { DepartmentCommunesList } from './DepartmentCommunesList'
import { NearbyCommunes } from './NearbyCommunes'
import { ProductDeptFooter } from './ProductDeptFooter'
import { AdaptaCollectionsBlock } from './AdaptaCollectionsBlock'
import { RealizationsForLocation } from './RealizationsForLocation'
import { CommuneContextBlock } from './CommuneContextBlock'
import { DepartmentContextBlock } from './DepartmentContextBlock'
import { TestimonialsBlock } from './TestimonialsBlock'
import { TrustStrip } from './TrustStrip'
import { WhyCustomBlock } from './WhyCustomBlock'
import { RelatedProductsBlock } from './RelatedProductsBlock'
import { StickyCTABar } from './StickyCTABar'
import { AzepoxyCalloutCompact, AzepoxyCalloutBlock } from './AzepoxyCallout'
import dynamic from 'next/dynamic'

const PartnersCarousel = dynamic(() => import('@/components/homepage/PartnersCarousel'))

interface ThermolaquageLocalPageProps {
  dept: Department
  commune?: Commune
  segment?: SEOSegment
}

const AVANTAGES = [
  { icon: Truck, title: 'On vient chercher vos pièces', desc: "Notre camion passe partout en Île-de-France. Vos pièces voyagent calées, jamais en vrac." },
  { icon: Clock, title: 'Sortie de four en 5 à 7 jours', desc: "Sablage, accrochage, cuisson 200°C. Quand on dit jeudi, c'est jeudi." },
  { icon: Palette, title: 'Tout le RAL, et au-delà', desc: '200+ teintes en stock + collections premium Adapta. Une couleur exotique ? On la commande.' },
  { icon: ShieldCheck, title: 'Tenue 10 ans garantie', desc: 'Poudre époxy cuite, pas peinte. Anti-UV, anti-corrosion, anti-griffes du quotidien.' },
]

const THERMO_HERO_FALLBACK = '/images/hero/atelier-facade.jpg'
const THERMO_ATELIER_FALLBACK = '/images/hero/atelier-facade.jpg'

async function resolveSiteImage(key: string, fallback: string): Promise<string> {
  try {
    const row = await prisma.siteImage.findUnique({ where: { key } })
    return row?.imageUrl || row?.fallbackUrl || fallback
  } catch {
    return fallback
  }
}

export async function ThermolaquageLocalPage({ dept, commune, segment }: ThermolaquageLocalPageProps) {
  const product = getSeoProductBySlug('thermolaquage')!
  const locationName = commune ? commune.name : dept.fullName
  const isCity = !!commune
  const prepLoc = isCity ? 'à' : 'en'

  const [heroImageUrl, atelierImageUrl] = await Promise.all([
    resolveSiteImage('hero-thermolaquage', THERMO_HERO_FALLBACK),
    resolveSiteImage('atelier-thermolaquage', THERMO_ATELIER_FALLBACK),
  ])

  const canonicalUrl = isCity
    ? `https://www.azconstruction.fr/services/thermolaquage/${dept.slug}/${commune.slug}`
    : `https://www.azconstruction.fr/services/thermolaquage/${dept.slug}`

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
    sameAs: ['https://azepoxy.fr'],
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
        {/* ── Hero — Premium ─────────────────────────── */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden">
          <Image
            src={heroImageUrl}
            alt={`Thermolaquage professionnel ${prepLoc} ${locationName} — AZ Construction`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/80 to-navy-dark/30" />
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.2) 0%, transparent 70%)' }} />

          <div className="container mx-auto px-6 pb-16 pt-32 relative z-10">
            <nav className="flex items-center gap-2 text-white/40 text-sm mb-8 flex-wrap" aria-label="Fil d'Ariane">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span aria-hidden="true">›</span>
              <Link href="/services/thermolaquage" className="hover:text-white transition-colors">Thermolaquage</Link>
              <span aria-hidden="true">›</span>
              {isCity ? (
                <>
                  <Link href={`/services/thermolaquage/${dept.slug}`} className="hover:text-white transition-colors">{dept.fullName}</Link>
                  <span aria-hidden="true">›</span>
                  <span className="text-white">{commune.name}</span>
                </>
              ) : (
                <span className="text-white">{dept.fullName}</span>
              )}
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-card-glow mb-6">
                <Truck className="w-4 h-4 text-cyan-glow" />
                <span className="text-cyan-glow text-sm font-medium">Enlèvement & livraison gratuits</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {product.heroTitle(dept, commune)}
                {segment && <span className="text-gradient-premium"> {segment.nameWithPrep}</span>}
              </h1>
              <p className="text-xl text-white/60 mb-8 max-w-2xl">{product.heroSubtitle(dept, commune)}</p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Link href="/contact" className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-cyan-glow to-cyan-400 text-navy-dark font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-glow/25 transition-all">
                  Devis gratuit thermolaquage <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:0971357496" className="inline-flex items-center gap-2 px-6 py-3.5 glass-card text-white rounded-xl hover:bg-white/10 transition-all">
                  <Phone className="w-4 h-4" /> 09 71 35 74 96
                </a>
                <AzepoxyCalloutCompact label="Site dédié azepoxy.fr" className="px-5 py-3.5" />
              </div>

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
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* ── Trust strip ──────────────────────────────── */}
        <TrustStrip />

        {/* ── Avantages — Glass cards dark ────────────── */}
        <section className="relative py-20 bg-navy-dark overflow-hidden">
          <div className="absolute inset-0 mesh-gradient opacity-20" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <span className="text-cyan-glow text-sm font-semibold uppercase tracking-wider">Nos avantages</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-3">
                Thermolaquage professionnel {prepLoc} {locationName}
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Peinture poudre époxy cuite au four à 200°C. Une finition industrielle durable.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {AVANTAGES.map(a => (
                <div key={a.title} className="glass-card rounded-2xl p-6 text-center hover:bg-white/[0.06] transition-colors">
                  <div className="w-12 h-12 rounded-2xl glass-card-glow flex items-center justify-center mx-auto mb-4">
                    <a.icon className="w-6 h-6 text-cyan-glow" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{a.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Intro + Image ────────────────────────────── */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-xl">
                <div className="prose prose-lg text-gray-600">
                  <p>{segment ? segment.introParagraph(product, dept, commune) : product.introParagraph(dept, commune)}</p>
                  {isCity ? (
                    <CommuneContextBlock product={product} dept={dept} commune={commune} />
                  ) : (
                    <DepartmentContextBlock product={product} dept={dept} />
                  )}
                  <p>
                    Notre atelier de Bruyères-sur-Oise (95) dispose d&apos;un four de polymérisation professionnel
                    pouvant accueillir des pièces jusqu&apos;à 6 mètres de long. Nous assurons l&apos;enlèvement et la
                    livraison de vos pièces dans tout le département {dept.fullName}
                    {dept.region !== 'Île-de-France' ? ` (${dept.region})` : ''}.
                  </p>
                </div>
                <Link href="/services/thermolaquage"
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-navy-dark/5 text-navy-dark font-semibold rounded-xl hover:bg-navy-dark/10 transition-colors group">
                  Découvrir notre service thermolaquage
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-navy-dark/10">
                <Image src={atelierImageUrl} alt={`Four de thermolaquage AZ Construction ${prepLoc} ${locationName}`} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium drop-shadow-lg">Atelier de thermolaquage — AZ Construction, Bruyères-sur-Oise (95)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Spécialités ──────────────────────────────── */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-3">Nos spécialités thermolaquage</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Du particulier à l&apos;industriel, nous thermolaquons toutes vos pièces métalliques.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.variants.map(v => (
                <Link key={v.name} href={v.href}
                  className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:shadow-blue-corporate/5 hover:-translate-y-1 transition-all duration-300 group">
                  <Flame className="w-8 h-8 text-orange-500 mb-3" aria-hidden="true" />
                  <h3 className="font-bold text-navy-dark mb-2 group-hover:text-blue-corporate transition-colors">{v.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
                  <span className="inline-flex items-center gap-1 text-blue-corporate text-sm mt-4 font-medium">
                    En savoir plus <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Réalisations près de chez vous ─────────────── */}
        <RealizationsForLocation dept={dept} commune={commune} />

        {/* ── Collections premium Adapta ────────────────── */}
        <AdaptaCollectionsBlock />

        {/* ── Témoignages ──────────────────────────────── */}
        <TestimonialsBlock productSlug="thermolaquage" dept={dept} commune={commune} />

        {/* ── Pourquoi sur mesure ──────────────────────── */}
        <WhyCustomBlock product={product} dept={dept} commune={commune} />

        {/* ── Services associés ────────────────────────── */}
        <RelatedProductsBlock currentProductSlug="thermolaquage" dept={dept} commune={commune} />

        {/* ── Partners carousel ────────────────────────── */}
        <PartnersCarousel />

        {/* ── Site spécialisé azepoxy.fr ──────────────── */}
        <AzepoxyCalloutBlock context="thermolaquage" />

        {/* ── Avis ─────────────────────────────────────── */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="bg-navy-dark rounded-3xl p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 mesh-gradient opacity-20" />
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map(i => (<Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />))}
                </div>
                <p className="text-4xl font-bold text-white mb-1">4.9<span className="text-lg text-white/40"> / 5</span></p>
                <p className="text-white/40 text-sm mb-6">47 avis clients vérifiés</p>
                <div className="glass-card rounded-xl p-5 max-w-lg mx-auto">
                  <p className="text-white/70 italic text-sm leading-relaxed">
                    &quot;Service rapide et résultat parfait. Mes jantes sont comme neuves.
                    Enlèvement et livraison très pratiques. Je recommande !&quot;
                  </p>
                  <p className="text-cyan-glow text-xs mt-3 font-medium">— Client {prepLoc} {locationName}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────── */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-3">Questions fréquentes</h2>
              <p className="text-gray-500">Thermolaquage {prepLoc} {locationName}</p>
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

        {/* ── Communes ─────────────────────────────────── */}
        {isCity ? (
          <NearbyCommunes product={product} dept={dept} currentCommune={commune} />
        ) : (
          <DepartmentCommunesList product={product} dept={dept} />
        )}

        {/* ── CTA Premium ─────────────────────────────── */}
        <section className="relative py-20 bg-navy-dark overflow-hidden">
          <div className="absolute inset-0 mesh-gradient opacity-20" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 glass-card-glow px-4 py-2 mb-6">
              <span className="text-cyan-glow text-sm font-medium">Démarrez votre projet</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Thermolaquage {prepLoc} {locationName}</h2>
            <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">Devis gratuit. Enlèvement et livraison. 200+ couleurs RAL. Délai 5-7 jours.</p>
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

        <ProductDeptFooter currentProduct={product} currentDept={dept} />
      </div>

      <StickyCTABar ctaLabel="Devis thermolaquage" />
    </>
  )
}
