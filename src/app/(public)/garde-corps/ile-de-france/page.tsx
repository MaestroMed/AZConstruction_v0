import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, CheckCircle2, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Garde-corps sur mesure Île-de-France | Fabricant AZ Construction",
  description:
    "Fabricant de garde-corps sur mesure en Île-de-France. Acier thermolaqué, verre feuilleté, câbles. Norme NF P01-012. Devis gratuit sous 48h pour Paris et tous les départements IDF.",
  alternates: { canonical: "https://azconstruction.fr/garde-corps/ile-de-france" },
  openGraph: {
    title: "Garde-corps sur mesure Île-de-France | AZ Construction",
    description: "Fabricant artisanal de garde-corps en IDF depuis 2018. Acier, verre, câbles. Devis gratuit sous 48h.",
    url: "https://azconstruction.fr/garde-corps/ile-de-france",
    type: "website",
  },
};

const DEPARTMENTS = [
  { code: "75", name: "Paris", slug: "paris-75", desc: "Tous arrondissements" },
  { code: "92", name: "Hauts-de-Seine", slug: "hauts-de-seine-92", desc: "Neuilly, Boulogne, Courbevoie..." },
  { code: "93", name: "Seine-Saint-Denis", slug: "seine-saint-denis-93", desc: "Saint-Denis, Montreuil, Bobigny..." },
  { code: "94", name: "Val-de-Marne", slug: "val-de-marne-94", desc: "Créteil, Vincennes, Champigny..." },
  { code: "95", name: "Val-d'Oise", slug: "val-doise-95", desc: "Cergy, Pontoise, Bruyères-sur-Oise..." },
  { code: "78", name: "Yvelines", slug: "yvelines-78", desc: "Versailles, Saint-Germain, Poissy..." },
  { code: "91", name: "Essonne", slug: "essonne-91", desc: "Évry, Massy, Palaiseau..." },
  { code: "77", name: "Seine-et-Marne", slug: "seine-et-marne-77", desc: "Meaux, Melun, Marne-la-Vallée..." },
];

export default function GardeCorpsIleDeFrancePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://azconstruction.fr" },
      { "@type": "ListItem", "position": 2, "name": "Garde-corps", "item": "https://azconstruction.fr/produits/garde-corps" },
      { "@type": "ListItem", "position": 3, "name": "Île-de-France", "item": "https://azconstruction.fr/garde-corps/ile-de-france" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate pt-32 pb-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-glow/20 text-cyan-glow rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Île-de-France — 8 départements
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Garde-corps sur mesure{" "}
                <span className="text-cyan-glow">Île-de-France</span>
              </h1>
              <p className="text-xl text-white/70 mb-8">
                AZ Construction fabrique et pose vos garde-corps sur mesure dans les 8 départements
                d'Île-de-France. Acier thermolaqué, verre feuilleté, câbles tendus — conformes à la
                norme NF P01-012.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/devis/formulaire"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-glow text-navy-dark font-bold rounded-xl hover:bg-cyan-pale transition-colors">
                  Devis gratuit <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:0971357496"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors">
                  <Phone className="w-4 h-4" /> 09 71 35 74 96
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Departments grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy-dark mb-4 text-center">
              Interventions dans tout le Grand Paris
            </h2>
            <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
              Sélectionnez votre département pour découvrir nos références locales et obtenir un devis adapté à votre secteur.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {DEPARTMENTS.map((dept) => (
                <Link key={dept.code} href={`/garde-corps/${dept.slug}`}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-blue-200 transition-all">
                  <div className="text-4xl font-black text-gray-100 group-hover:text-blue-100 transition-colors mb-3">
                    {dept.code}
                  </div>
                  <h3 className="font-bold text-navy-dark mb-1 group-hover:text-blue-corporate transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{dept.desc}</p>
                  <span className="inline-flex items-center gap-1 text-blue-corporate text-sm font-medium">
                    Voir <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Intro text */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl font-bold text-navy-dark mb-6">
              Votre fabricant de garde-corps artisanal en Île-de-France
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                Depuis 2018, <strong>AZ Construction</strong> fabrique et pose des garde-corps
                sur mesure pour particuliers et professionnels dans toute l'Île-de-France.
                Installés à <strong>Bruyères-sur-Oise (Val-d'Oise)</strong>, nous intervenons
                dans les 8 départements franciliens avec des délais maîtrisés.
              </p>
              <p>
                Chaque garde-corps est entièrement <strong>conçu et fabriqué dans nos ateliers</strong>
                selon vos cotes exactes. Nos réalisations couvrent aussi bien les balcons parisiens
                haussmanniens que les terrasses contemporaines de la petite et grande couronne.
              </p>
              <p>
                Tous nos garde-corps sont conformes à la norme <strong>NF P01-012</strong> et
                couverts par notre garantie décennale. Plus de 200 couleurs RAL thermolaquées
                disponibles pour une personnalisation totale.
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {[
                "Fabrication 100% française, atelier Val-d'Oise",
                "Déplacement et pose dans tout l'IDF",
                "Devis gratuit sous 48h",
                "Norme NF P01-012 garantie",
                "200+ couleurs RAL thermolaquées",
                "Garantie décennale",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-glow flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-navy-dark">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Votre projet de garde-corps en Île-de-France
            </h2>
            <p className="text-white/60 mb-8">
              Devis gratuit sous 48h — Fabrication sur mesure — Pose professionnelle
            </p>
            <Link href="/devis/formulaire"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-glow text-navy-dark font-bold rounded-2xl hover:bg-cyan-pale transition-colors text-lg">
              Demander un devis gratuit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
