import Link from "next/link";
import type { Metadata } from "next";
import { Home, Package, BookOpen, Phone, ArrowRight, Search } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Page introuvable",
  description:
    "La page que vous cherchez n'existe pas ou a été déplacée. Retrouvez nos produits métallerie, articles blog ou contactez-nous.",
  robots: { index: false, follow: true },
};

const suggestions = [
  {
    label: "Accueil",
    href: "/",
    description: "Retour à la page d'accueil",
    icon: Home,
  },
  {
    label: "Nos produits",
    href: "/produits",
    description: "Garde-corps, escaliers, portails, verrières…",
    icon: Package,
  },
  {
    label: "Blog & guides",
    href: "/blog",
    description: "Conseils, normes, inspirations",
    icon: BookOpen,
  },
  {
    label: "Nous contacter",
    href: "/contact",
    description: "Demande de devis gratuit sous 24h",
    icon: Phone,
  },
];

const popularLinks = [
  { label: "Garde-corps", href: "/garde-corps" },
  { label: "Escaliers", href: "/escaliers" },
  { label: "Portails", href: "/portails" },
  { label: "Verrières", href: "/verrieres" },
  { label: "Thermolaquage", href: "/services/thermolaquage" },
  { label: "Couleurs RAL", href: "/couleurs-ral" },
  { label: "Calculateur prix", href: "/outils/calculateur-garde-corps" },
  { label: "Réalisations", href: "/realisations" },
];

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy-dark to-blue-corporate text-white py-24 md:py-32">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-glow blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-corporate blur-3xl" />
          </div>

          <div className="container relative mx-auto px-6 text-center">
            <p className="text-cyan-glow text-sm font-semibold tracking-widest uppercase mb-4">
              Erreur 404
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-glow bg-clip-text text-transparent">
              Page introuvable
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">
              La page que vous cherchez n'existe pas ou a été déplacée.
              Pas de panique, voici quelques pistes pour retrouver votre chemin.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/">
                <Button variant="cta" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                  Retour à l'accueil
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
                Vous cherchiez peut-être&nbsp;?
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Explorez nos principales sections pour trouver ce qui vous intéresse.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {suggestions.map((s) => (
                <Link key={s.href} href={s.href} className="group">
                  <Card variant="elevated" hover className="h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-corporate/10 to-cyan-glow/10 flex items-center justify-center mb-4 group-hover:from-blue-corporate/20 group-hover:to-cyan-glow/20 transition-colors">
                      <s.icon className="w-5 h-5 text-blue-corporate" />
                    </div>
                    <h3 className="font-semibold text-navy-dark mb-2">{s.label}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {s.description}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Search className="w-5 h-5 text-cyan-glow" />
              <h3 className="text-xl font-semibold text-navy-dark">
                Liens populaires
              </h3>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {popularLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-cyan-glow hover:text-blue-corporate hover:shadow-md transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
