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
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Thermolaquage Île-de-France | Paris, 75, 77, 78, 91, 92, 93, 94, 95 - AZ Construction",
  description:
    "Service de thermolaquage professionnel en Île-de-France. Enlèvement et livraison Paris et tous départements (75, 77, 78, 91, 92, 93, 94, 95). Devis gratuit ☎️ 01 23 45 67 89",
  keywords: [
    "thermolaquage ile de france",
    "thermolaquage paris",
    "thermolaquage 75",
    "thermolaquage 77",
    "thermolaquage 78",
    "thermolaquage 91",
    "thermolaquage 92",
    "thermolaquage 93",
    "thermolaquage 94",
    "thermolaquage 95",
    "peinture poudre ile de france",
    "laquage poudre paris",
  ],
  alternates: {
    canonical: "https://zaconstruction.fr/services/thermolaquage/ile-de-france",
  },
  openGraph: {
    title: "Thermolaquage Île-de-France | AZ Construction",
    description:
      "Service de thermolaquage professionnel en Île-de-France. Enlèvement et livraison gratuits.",
    url: "https://zaconstruction.fr/services/thermolaquage/ile-de-france",
    siteName: "AZ Construction",
    locale: "fr_FR",
    type: "website",
  },
};

const departments = [
  { code: "75", name: "Paris", cities: ["Paris 1er", "Paris 11ème", "Paris 15ème", "Paris 16ème"] },
  { code: "77", name: "Seine-et-Marne", cities: ["Meaux", "Melun", "Chelles", "Pontault-Combault"] },
  { code: "78", name: "Yvelines", cities: ["Versailles", "Saint-Germain-en-Laye", "Poissy", "Mantes-la-Jolie"] },
  { code: "91", name: "Essonne", cities: ["Évry", "Corbeil-Essonnes", "Massy", "Savigny-sur-Orge"] },
  { code: "92", name: "Hauts-de-Seine", cities: ["Nanterre", "Boulogne-Billancourt", "Colombes", "Asnières"] },
  { code: "93", name: "Seine-Saint-Denis", cities: ["Saint-Denis", "Montreuil", "Aulnay-sous-Bois", "Bobigny"] },
  { code: "94", name: "Val-de-Marne", cities: ["Créteil", "Vitry-sur-Seine", "Champigny", "Saint-Maur"] },
  { code: "95", name: "Val-d'Oise", cities: ["Cergy", "Argenteuil", "Sarcelles", "Bruyères-sur-Oise"] },
];

const services = [
  {
    icon: Truck,
    title: "Enlèvement & Livraison",
    description: "Service de collecte et livraison gratuit sur toute l'Île-de-France pour les commandes importantes.",
  },
  {
    icon: Zap,
    title: "Traitement Express 48h",
    description: "Besoin urgent ? Notre service express garantit un traitement en 48-72h sur demande.",
  },
  {
    icon: Palette,
    title: "200+ Couleurs RAL",
    description: "Toutes les teintes RAL disponibles : mat, satiné, brillant, texturé ou métallisé.",
  },
  {
    icon: Shield,
    title: "Garantie 10 Ans",
    description: "Nos traitements sont garantis 10 ans contre l'écaillage et la décoloration.",
  },
];

export default function ThermolaquageIleDeFrancePage() {
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
              <span className="text-cyan-glow">Île-de-France</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-cyan-glow/20 border border-cyan-glow/30 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-cyan-glow" />
              <span className="text-cyan-glow text-sm font-medium">
                Intervention Île-de-France
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Thermolaquage en{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow to-blue-400">
                Île-de-France
              </span>
            </h1>

            <p className="text-xl text-white/80 mb-8 max-w-2xl">
              Service professionnel de thermolaquage poudre epoxy pour Paris et tous les départements
              franciliens. <strong className="text-cyan-glow">Enlèvement et livraison</strong> sur toute la région.
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
                <Truck className="w-4 h-4 text-cyan-glow" />
                <span>Enlèvement gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-cyan-glow" />
                <span>Garantie 10 ans</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Notre Service en Île-de-France
            </h2>
            <p className="text-gray-600 text-lg">
              Basés à Bruyères-sur-Oise (95), nous intervenons sur toute la région parisienne
              avec un service complet d'enlèvement et livraison.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} variant="elevated" className="h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-glow/20 to-blue-corporate/20 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-corporate" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-dark mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Zones d'intervention */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Zones d'Intervention
            </h2>
            <p className="text-gray-600 text-lg">
              Nous intervenons dans tous les départements d'Île-de-France.
              Enlèvement et livraison disponibles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept) => (
              <Card key={dept.code} variant="elevated" hover className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-corporate flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{dept.code}</span>
                    </div>
                    <h3 className="font-bold text-navy-dark">{dept.name}</h3>
                  </div>
                  <ul className="space-y-1">
                    {dept.cities.map((city) => (
                      <li key={city} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-3 h-3 text-cyan-glow flex-shrink-0" />
                        {city}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Besoin d'un Devis Thermolaquage en Île-de-France ?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Contactez-nous pour un devis gratuit sous 24h.
              Enlèvement gratuit sur toute la région.
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


