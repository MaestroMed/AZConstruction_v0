import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, CheckCircle2, ArrowRight, Phone, Star } from "lucide-react";

interface GardeCorpsLocalPageProps {
  dept: {
    code: string;           // "75"
    name: string;           // "Paris"
    slug: string;           // "paris-75"
    fullName: string;       // "Paris (75)"
    region: string;         // "Île-de-France"
    description: string;    // phrase sur le secteur
    cities: string[];       // communes principales
  };
}

const AVANTAGES = [
  "Fabrication dans nos ateliers de Bruyères-sur-Oise (95)",
  "Déplacement et pose en Île-de-France",
  "Norme NF P01-012 garantie",
  "Devis gratuit sous 48h",
  "Garantie décennale",
  "200+ couleurs RAL thermolaquées",
];

const TYPES = [
  { name: "Garde-corps verre feuilleté", href: "/produits/garde-corps", desc: "Transparence et élégance pour balcons et terrasses" },
  { name: "Garde-corps câbles", href: "/produits/garde-corps", desc: "Design aérien, idéal pour les espaces contemporains" },
  { name: "Garde-corps barreaudé", href: "/produits/garde-corps", desc: "Classique et robuste, barreaux verticaux acier" },
  { name: "Main courante", href: "/produits/garde-corps", desc: "Rampe sur mesure pour escaliers et couloirs" },
];

export function GardeCorpsLocalPage({ dept }: GardeCorpsLocalPageProps) {
  const canonicalUrl = `https://azconstruction.fr/garde-corps/${dept.slug}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AZ Construction",
    "description": `Fabricant de garde-corps sur mesure en ${dept.fullName}`,
    "url": canonicalUrl,
    "telephone": "09 71 35 74 96",
    "email": "contact@azconstruction.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "23 Chemin du Bac des Aubins",
      "addressLocality": "Bruyères-sur-Oise",
      "postalCode": "95820",
      "addressCountry": "FR"
    },
    "areaServed": dept.cities.map((city) => ({
      "@type": "City",
      "name": city,
    })),
    "priceRange": "€€",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "47",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://azconstruction.fr" },
      { "@type": "ListItem", "position": 2, "name": "Garde-corps", "item": "https://azconstruction.fr/produits/garde-corps" },
      { "@type": "ListItem", "position": 3, "name": dept.fullName, "item": canonicalUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate pt-32 pb-16">
          <div className="container mx-auto px-6">
            <nav className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link href="/" className="hover:text-white">Accueil</Link>
              <span>›</span>
              <Link href="/produits/garde-corps" className="hover:text-white">Garde-corps</Link>
              <span>›</span>
              <span className="text-white">{dept.fullName}</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-glow/20 text-cyan-glow rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                {dept.fullName} — {dept.region}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Garde-corps sur mesure à{" "}
                <span className="text-cyan-glow">{dept.name}</span>
              </h1>
              <p className="text-xl text-white/70 mb-8">
                Fabricant spécialisé en garde-corps acier, verre et câbles sur mesure.
                Intervention dans tout le département {dept.fullName} depuis notre atelier
                de Bruyères-sur-Oise.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/devis/formulaire"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-glow text-navy-dark font-bold rounded-xl hover:bg-cyan-pale transition-colors">
                  Devis gratuit <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:0971357496"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors">
                  <Phone className="w-4 h-4" />
                  09 71 35 74 96
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-navy-dark mb-6">
                Votre fabricant de garde-corps en {dept.fullName}
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  AZ Construction est un fabricant artisanal spécialisé dans la réalisation de
                  <strong> garde-corps sur mesure</strong> pour particuliers et professionnels en{" "}
                  {dept.fullName}. {dept.description}
                </p>
                <p>
                  Chaque garde-corps est conçu et fabriqué sur mesure dans nos ateliers de
                  Bruyères-sur-Oise (95), à proximité de {dept.name}. Nous assurons la livraison
                  et la pose dans l'ensemble du département {dept.fullName}.
                </p>
                <p>
                  Nos garde-corps sont conformes à la norme <strong>NF P01-012</strong> et bénéficient
                  d'une garantie décennale. Disponibles en acier thermolaqué, verre feuilleté ou
                  câbles tendus, ils s'adaptent à tous les styles architecturaux.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy-dark mb-10 text-center">
              Nos garde-corps disponibles en {dept.fullName}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TYPES.map((type) => (
                <Link key={type.name} href={type.href}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-blue-200 transition-all group">
                  <h3 className="font-bold text-navy-dark mb-2 group-hover:text-blue-corporate transition-colors">
                    {type.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{type.desc}</p>
                  <span className="inline-flex items-center gap-1 text-blue-corporate text-sm mt-4 font-medium">
                    Voir les modèles <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-navy-dark mb-6">
                  Pourquoi choisir AZ Construction pour vos garde-corps en {dept.fullName} ?
                </h2>
                <ul className="space-y-3">
                  {AVANTAGES.map((av) => (
                    <li key={av} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-glow flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{av}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-navy-dark rounded-3xl p-8 text-center">
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-3xl font-bold text-white mb-1">4.9 / 5</p>
                <p className="text-white/60 text-sm mb-6">Basé sur 47 avis clients</p>
                <p className="text-white/80 italic text-sm">
                  "Fabrication impeccable, pose soignée. Le garde-corps correspond exactement
                  à nos attentes. Je recommande AZ Construction sans hésitation."
                </p>
                <p className="text-cyan-glow text-sm mt-3 font-medium">— Client en {dept.fullName}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Villes desservies */}
        {dept.cities.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-bold text-navy-dark mb-6">
                Villes desservies en {dept.fullName}
              </h2>
              <div className="flex flex-wrap gap-2">
                {dept.cities.map((city) => (
                  <span key={city}
                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 bg-navy-dark">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Votre projet de garde-corps en {dept.fullName}
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Devis gratuit sous 48h. Fabrication sur mesure, pose professionnelle, garantie décennale.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/devis/formulaire"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-glow text-navy-dark font-bold rounded-2xl hover:bg-cyan-pale transition-colors text-lg">
                Demander un devis gratuit <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:0971357496"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-2xl hover:bg-white/20 transition-colors text-lg">
                <Phone className="w-5 h-5" />
                09 71 35 74 96
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
