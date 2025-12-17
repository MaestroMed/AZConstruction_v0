import { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  Shield,
  Palette,
  Zap,
  BadgeCheck,
  Building2,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Thermolaquage Val-d'Oise (95) | Cergy, Argenteuil, Sarcelles - AZ Construction",
  description:
    "Thermolaquage professionnel dans le Val-d'Oise (95). Atelier à Bruyères-sur-Oise, intervention rapide Cergy, Argenteuil, Sarcelles, Pontoise. Devis gratuit ☎️ 01 23 45 67 89",
  keywords: [
    "thermolaquage val d'oise",
    "thermolaquage 95",
    "thermolaquage cergy",
    "thermolaquage argenteuil",
    "thermolaquage sarcelles",
    "thermolaquage pontoise",
    "thermolaquage bruyeres sur oise",
    "peinture poudre val d'oise",
    "laquage poudre 95",
  ],
  alternates: {
    canonical: "https://zaconstruction.fr/services/thermolaquage/val-doise-95",
  },
  openGraph: {
    title: "Thermolaquage Val-d'Oise (95) | AZ Construction",
    description:
      "Thermolaquage professionnel dans le Val-d'Oise. Atelier à Bruyères-sur-Oise.",
    url: "https://zaconstruction.fr/services/thermolaquage/val-doise-95",
    siteName: "AZ Construction",
    locale: "fr_FR",
    type: "website",
  },
};

const cities = [
  { name: "Bruyères-sur-Oise", distance: "0 km", highlight: true },
  { name: "Persan", distance: "3 km" },
  { name: "Beaumont-sur-Oise", distance: "5 km" },
  { name: "L'Isle-Adam", distance: "8 km" },
  { name: "Sarcelles", distance: "20 km" },
  { name: "Argenteuil", distance: "25 km" },
  { name: "Cergy-Pontoise", distance: "30 km" },
  { name: "Enghien-les-Bains", distance: "22 km" },
  { name: "Ermont", distance: "18 km" },
  { name: "Franconville", distance: "20 km" },
  { name: "Goussainville", distance: "15 km" },
  { name: "Montmorency", distance: "20 km" },
];

const advantages = [
  {
    icon: Building2,
    title: "Atelier Local",
    description: "Notre atelier de 1800m² est situé à Bruyères-sur-Oise, au cœur du Val-d'Oise.",
  },
  {
    icon: Zap,
    title: "Intervention Rapide",
    description: "Proximité = réactivité. Enlèvement et livraison sous 24-48h dans tout le département.",
  },
  {
    icon: Palette,
    title: "200+ Couleurs",
    description: "Toute la gamme RAL disponible : mat, satiné, brillant, texturé ou métallisé.",
  },
  {
    icon: Shield,
    title: "Garantie 10 Ans",
    description: "Nous garantissons nos traitements contre l'écaillage et la décoloration.",
  },
];

const testimonials = [
  {
    name: "Jean-Pierre M.",
    city: "Cergy",
    text: "Excellent travail sur mon portail. Couleur parfaite, délai respecté. Je recommande !",
    rating: 5,
  },
  {
    name: "Sophie L.",
    city: "Argenteuil",
    text: "Très satisfaite du thermolaquage de mes garde-corps. Service professionnel et réactif.",
    rating: 5,
  },
  {
    name: "Marc D.",
    city: "Sarcelles",
    text: "Rapport qualité-prix imbattable. L'enlèvement gratuit est un vrai plus.",
    rating: 5,
  },
];

export default function ThermolaquageValDOisePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Accueil
              </Link>
              <span>/</span>
              <Link href="/services/thermolaquage" className="hover:text-white transition-colors">
                Thermolaquage
              </Link>
              <span>/</span>
              <span className="text-cyan-glow">Val-d'Oise (95)</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-cyan-glow/20 border border-cyan-glow/30 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-cyan-glow" />
              <span className="text-cyan-glow text-sm font-medium">
                Atelier à Bruyères-sur-Oise
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Thermolaquage{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow to-blue-400">
                Val-d'Oise (95)
              </span>
            </h1>

            <p className="text-xl text-white/80 mb-8 max-w-2xl">
              Votre spécialiste du thermolaquage dans le Val-d'Oise. Atelier situé à{" "}
              <strong className="text-cyan-glow">Bruyères-sur-Oise</strong>, nous intervenons
              rapidement sur Cergy, Argenteuil, Sarcelles et toutes les communes du 95.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-cyan-glow text-navy-dark hover:bg-cyan-pale w-full sm:w-auto"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Demander un devis gratuit
                </Button>
              </Link>
              <a href="tel:+33123456789">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
                  icon={<Phone className="w-5 h-5" />}
                  iconPosition="left"
                >
                  01 23 45 67 89
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-glow" />
                <span>Devis sous 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-cyan-glow" />
                <span>Atelier 1800m²</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-cyan-glow" />
                <span>Garantie 10 ans</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Pourquoi Choisir Notre Atelier du Val-d'Oise ?
            </h2>
            <p className="text-gray-600 text-lg">
              La proximité fait la différence. Notre atelier à Bruyères-sur-Oise
              vous garantit réactivité et qualité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} variant="elevated" className="h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-glow/20 to-blue-corporate/20 flex items-center justify-center mb-4">
                    <advantage.icon className="w-6 h-6 text-blue-corporate" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-dark mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Villes desservies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Communes Desservies dans le 95
            </h2>
            <p className="text-gray-600 text-lg">
              Enlèvement et livraison disponibles dans toutes les communes du Val-d'Oise.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {cities.map((city) => (
              <div
                key={city.name}
                className={`flex items-center gap-3 p-4 rounded-xl transition-colors ${
                  city.highlight
                    ? "bg-gradient-to-r from-cyan-glow/20 to-blue-corporate/10 border border-cyan-glow/30"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <CheckCircle2
                  className={`w-4 h-4 flex-shrink-0 ${
                    city.highlight ? "text-cyan-glow" : "text-gray-400"
                  }`}
                />
                <div>
                  <p
                    className={`font-medium ${
                      city.highlight ? "text-blue-corporate" : "text-navy-dark"
                    }`}
                  >
                    {city.name}
                  </p>
                  <p className="text-xs text-gray-500">{city.distance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Ils Nous Font Confiance dans le 95
            </h2>
            <p className="text-gray-600 text-lg">
              Découvrez les avis de nos clients du Val-d'Oise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} variant="elevated">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-corporate flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-navy-dark text-sm">{testimonial.name}</p>
                      <p className="text-xs text-gray-500">{testimonial.city}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Adresse atelier */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card variant="elevated" className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-navy-dark mb-4">
                    Notre Atelier à Bruyères-sur-Oise
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-cyan-glow flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-navy-dark">Adresse</p>
                        <p>23 Chemin du Bac des Aubins</p>
                        <p>95820 Bruyères-sur-Oise</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-cyan-glow flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-navy-dark">Téléphone</p>
                        <a href="tel:+33123456789" className="hover:text-cyan-glow transition-colors">
                          01 23 45 67 89
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-cyan-glow flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-navy-dark">Horaires</p>
                        <p>Lun-Ven : 8h00 - 18h00</p>
                        <p>Sam : 9h00 - 12h00</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href="https://maps.google.com/?q=23+Chemin+du+Bac+des+Aubins+95820+Bruyères-sur-Oise"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="border-blue-corporate text-blue-corporate">
                        Voir sur Google Maps
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-navy-dark to-blue-corporate p-8 md:p-10 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-5xl font-bold mb-2">1800m²</div>
                    <p className="text-white/80">d'atelier équipé</p>
                    <div className="mt-6 text-3xl font-bold">10+</div>
                    <p className="text-white/80">années d'expérience</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Besoin d'un Devis Thermolaquage dans le 95 ?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Contactez votre spécialiste local pour un devis gratuit sous 24h.
              Enlèvement gratuit dans tout le Val-d'Oise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-cyan-glow text-navy-dark hover:bg-cyan-pale"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Demander un devis gratuit
                </Button>
              </Link>
              <a href="tel:+33123456789">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                  icon={<Phone className="w-5 h-5" />}
                  iconPosition="left"
                >
                  01 23 45 67 89
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
