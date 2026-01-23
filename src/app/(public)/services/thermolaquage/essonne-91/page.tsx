import { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Shield,
  Palette,
  Zap,
  BadgeCheck,
  Building2,
  Star,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Thermolaquage Essonne (91) | Evry, Corbeil, Massy - AZ Construction",
  description:
    "Thermolaquage professionnel dans l'Essonne (91). Intervention Evry, Corbeil-Essonnes, Massy, Savigny. Devis gratuit ☎️ 09 71 35 74 96",
  keywords: [
    "thermolaquage essonne",
    "thermolaquage 91",
    "thermolaquage evry",
    "thermolaquage corbeil essonnes",
    "thermolaquage massy",
    "thermolaquage savigny sur orge",
    "peinture poudre 91",
  ],
  alternates: {
    canonical: "https://azconstruction.fr/services/thermolaquage/essonne-91",
  },
  openGraph: {
    title: "Thermolaquage Essonne (91) | AZ Construction",
    description: "Thermolaquage professionnel dans l'Essonne.",
    url: "https://azconstruction.fr/services/thermolaquage/essonne-91",
    siteName: "AZ Construction",
    locale: "fr_FR",
    type: "website",
  },
};

const cities = [
  { name: "Evry-Courcouronnes", distance: "50 km" },
  { name: "Corbeil-Essonnes", distance: "52 km" },
  { name: "Massy", distance: "45 km" },
  { name: "Savigny-sur-Orge", distance: "42 km" },
  { name: "Sainte-Genevieve-des-Bois", distance: "45 km" },
  { name: "Athis-Mons", distance: "40 km" },
  { name: "Viry-Chatillon", distance: "42 km" },
  { name: "Draveil", distance: "48 km" },
  { name: "Yerres", distance: "45 km" },
  { name: "Palaiseau", distance: "48 km" },
  { name: "Les Ulis", distance: "50 km" },
  { name: "Brunoy", distance: "46 km" },
];

const advantages = [
  {
    icon: Truck,
    title: "Enlevement Gratuit",
    description: "Service d'enlevement dans tout le 91.",
  },
  {
    icon: Zap,
    title: "Delais Rapides",
    description: "Traitement express sous 5-7 jours.",
  },
  {
    icon: Palette,
    title: "200+ Teintes",
    description: "Large gamme de couleurs RAL.",
  },
  {
    icon: Shield,
    title: "Garantie 10 Ans",
    description: "Qualite certifiee et durable.",
  },
];

const testimonials = [
  {
    name: "Pascal M.",
    city: "Evry",
    text: "Service impeccable, resultat au-dela de mes attentes.",
    rating: 5,
  },
  {
    name: "Christine L.",
    city: "Massy",
    text: "Tres bon rapport qualite-prix, je recommande.",
    rating: 5,
  },
  {
    name: "David P.",
    city: "Corbeil",
    text: "Professionnels et reactifs. Excellent travail.",
    rating: 5,
  },
];

export default function ThermolaquageEssonnePage() {
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
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <Link href="/services/thermolaquage" className="hover:text-white transition-colors">Thermolaquage</Link>
              <span>/</span>
              <span className="text-cyan-glow">Essonne (91)</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-cyan-glow/20 border border-cyan-glow/30 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-cyan-glow" />
              <span className="text-cyan-glow text-sm font-medium">
                Intervention dans l'Essonne
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Thermolaquage{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow to-blue-400">
                Essonne (91)
              </span>
            </h1>

            <p className="text-xl text-white/80 mb-8 max-w-2xl">
              Specialiste du thermolaquage dans l'Essonne. Service complet avec
              enlevement et livraison sur Evry, Corbeil, Massy et tout le 91.
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
              <a href="tel:0971357496">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
                  icon={<Phone className="w-5 h-5" />}
                  iconPosition="left"
                >
                  09 71 35 74 96
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap gap-8 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-glow" />
                <span>Devis sous 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-cyan-glow" />
                <span>Atelier 1800m2</span>
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
              Nos Services pour l'Essonne
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} variant="elevated" className="h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-glow/20 to-blue-corporate/20 flex items-center justify-center mb-4">
                    <advantage.icon className="w-6 h-6 text-blue-corporate" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-dark mb-2">{advantage.title}</h3>
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
              Communes Desservies dans le 91
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {cities.map((city) => (
              <div
                key={city.name}
                className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-cyan-glow/10 transition-colors"
              >
                <MapPin className="w-5 h-5 text-blue-corporate flex-shrink-0" />
                <div>
                  <span className="font-medium text-navy-dark block">{city.name}</span>
                  <span className="text-sm text-gray-500">a {city.distance}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section className="py-20 bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Avis Clients de l'Essonne
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-glow to-blue-corporate flex items-center justify-center text-white font-bold">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <span className="text-white font-medium block">{testimonial.name}</span>
                      <span className="text-white/50 text-sm">{testimonial.city}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-glow to-blue-corporate">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            Devis Gratuit pour l'Essonne
          </h2>
          <p className="text-navy-dark/80 text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous pour votre projet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-navy-dark text-white hover:bg-navy-medium">
                Demander un devis
              </Button>
            </Link>
            <a href="tel:0971357496">
              <Button
                variant="outline"
                size="lg"
                className="border-navy-dark text-navy-dark hover:bg-navy-dark/10"
                icon={<Phone className="w-5 h-5" />}
                iconPosition="left"
              >
                09 71 35 74 96
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
