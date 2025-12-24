"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Shield,
  Palette,
  Wrench,
  ArrowRight,
  Star,
  CheckCircle2,
  Award,
  Clock,
  Truck,
  Heart,
  Sparkles,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { useSiteImages } from "@/lib/hooks/useSiteImages";
import { PhoneLink } from "@/components/ui/PhoneLink";

const services = [
  {
    icon: Shield,
    title: "Garde-corps & Balustrades",
    description:
      "Protégez vos terrasses, balcons et escaliers avec des garde-corps alliant sécurité maximale et design contemporain. Profilés Jansen.",
    features: ["Verre feuilleté", "Câbles inox", "Barreaux design", "Inox 316"],
    price: "À partir de 290€/ml",
    imageKey: "product-garde-corps",
    configLink: "garde-corps",
  },
  {
    icon: Wrench,
    title: "Escaliers",
    description:
      "Des escaliers droits aux hélicoïdaux, nous réalisons l'escalier de vos rêves. Acier, inox ou mixte bois-métal.",
    features: ["Droits", "Quart-tournant", "Hélicoïdaux", "Extérieurs"],
    price: "À partir de 4 500€",
    imageKey: "product-escaliers",
    configLink: "escaliers",
  },
  {
    icon: Home,
    title: "Portes & Fenêtres Jansen",
    description:
      "Portes d'entrée et fenêtres en profilés acier Jansen. Design élégant, performances thermiques, durabilité exceptionnelle.",
    features: ["Portes design", "Fenêtres atelier", "Oscillo-battantes", "Coupe-feu"],
    price: "À partir de 890€",
    imageKey: "product-portes",
    configLink: "portes",
  },
  {
    icon: Palette,
    title: "Grilles de ventilation",
    description:
      "Grilles de ventilation techniques et décoratives pour bâtiments résidentiels. Solutions sur mesure esthétiques.",
    features: ["Décoratives", "Techniques", "Acoustiques", "Sur mesure"],
    price: "À partir de 180€",
    imageKey: "product-grilles",
    configLink: "grilles-ventilation",
  },
];

const guarantees = [
  {
    icon: Award,
    title: "Qualité garantie",
    description: "Tous nos ouvrages sont fabriqués avec des matériaux premium.",
  },
  {
    icon: Shield,
    title: "Assurance décennale",
    description: "Travaux couverts par notre assurance décennale professionnelle.",
  },
  {
    icon: Clock,
    title: "Délais respectés",
    description: "Engagement contractuel sur les délais de fabrication et pose.",
  },
  {
    icon: Truck,
    title: "Pose incluse*",
    description: "Installation par nos équipes qualifiées en Île-de-France.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Configurez",
    description: "Personnalisez votre projet en ligne avec notre configurateur 3D interactif.",
    icon: Sparkles,
  },
  {
    step: "02",
    title: "Devis gratuit",
    description: "Recevez votre devis détaillé sous 48h avec plan technique.",
    icon: Clock,
  },
  {
    step: "03",
    title: "Fabrication",
    description: "Votre ouvrage est fabriqué dans notre atelier de Bruyères-sur-Oise.",
    icon: Wrench,
  },
  {
    step: "04",
    title: "Installation",
    description: "Nos équipes installent votre réalisation avec le plus grand soin.",
    icon: Truck,
  },
];

const faqs = [
  {
    question: "Intervenez-vous en dehors de l'Île-de-France ?",
    answer:
      "Oui, nous livrons dans toute la France. Pour la pose, nous intervenons principalement en Île-de-France et départements limitrophes. Contactez-nous pour connaître nos conditions.",
  },
  {
    question: "Combien de temps dure une installation ?",
    answer:
      "La durée varie selon le projet : 1-2 jours pour une porte, 2-3 jours pour des fenêtres, jusqu'à 1 semaine pour un escalier complexe.",
  },
  {
    question: "Proposez-vous des facilités de paiement ?",
    answer:
      "Oui, nous proposons un paiement en 3 fois sans frais pour les commandes supérieures à 1 500€. D'autres solutions sont disponibles sur demande.",
  },
];

export default function ParticuliersPage() {
  const { getImage } = useSiteImages();
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%231e3a5f' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-corporate/10 flex items-center justify-center">
                <Home className="w-6 h-6 text-blue-corporate" />
              </div>
              <span className="text-blue-corporate font-medium">
                Particuliers
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-dark mb-6">
              Métallerie pour{" "}
              <span className="font-serif italic text-blue-corporate">
                votre habitat
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Donnez du caractère à votre maison avec des ouvrages métalliques
              sur mesure. Qualité artisanale française, design personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/produits">
                <Button
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Configurer mon projet
                </Button>
              </Link>
              <Link href="/realisations">
                <Button variant="outlineDark" size="lg" icon={<Eye className="w-5 h-5" />}>
                  Voir nos réalisations
                </Button>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              {[
                "Fabrication française",
                "Depuis 2018",
                "Devis gratuit",
                "200+ couleurs RAL",
              ].map((badge, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 text-gray-600 text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-glow" />
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Nos solutions pour votre maison
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des garde-corps aux fenêtres Jansen, nous créons des ouvrages qui
              s&apos;intègrent parfaitement à votre habitat et reflètent votre style.
            </p>
          </motion.div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="elevated" hover className="overflow-hidden">
                  <div className={`grid md:grid-cols-2 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                    {/* Image dynamique */}
                    <div className={`relative h-64 md:h-auto min-h-[280px] ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                      <Image
                        src={getImage(service.imageKey)}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent" />
                      {/* Price badge */}
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                        <span className="px-4 py-2 bg-cyan-glow text-navy-dark text-sm font-bold rounded-full shadow-lg">
                          {service.price}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="p-8 md:p-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-corporate/10 to-cyan-glow/10 flex items-center justify-center">
                          <service.icon className="w-7 h-7 text-blue-corporate" />
                        </div>
                        <h3 className="text-2xl font-bold text-navy-dark">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {service.features.map((feature, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-glow" />
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Link href={`/configurateur/${service.configLink}`}>
                        <Button icon={<ArrowRight className="w-4 h-4" />}>
                          Configurer
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un processus simple et transparent, de la conception à l&apos;installation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-cyan-glow/50 to-transparent" />
                )}
                <div className="text-center relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-corporate to-navy-dark flex items-center justify-center mx-auto mb-4 relative z-10">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="absolute -top-2 left-1/2 ml-6 text-5xl font-bold text-gray-100">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-semibold text-navy-dark mb-2 relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-cyan-glow/20 flex items-center justify-center mx-auto mb-4">
                  <guarantee.icon className="w-7 h-7 text-cyan-glow" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {guarantee.title}
                </h3>
                <p className="text-sm text-white/60">{guarantee.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Questions fréquentes
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-navy-dark mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            <div className="text-center pt-4">
              <Link href="/faq">
                <Button variant="outline" icon={<ArrowRight className="w-4 h-4" />}>
                  Voir toutes les FAQ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-navy-dark to-blue-corporate">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heart className="w-12 h-12 text-cyan-glow mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à transformer votre habitat ?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Configurez votre projet en quelques clics et recevez un devis
              gratuit sous 48h. Notre équipe est à votre écoute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/produits">
                <Button
                  size="lg"
                  className="bg-cyan-glow text-navy-dark hover:bg-cyan-pale"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Démarrer mon projet
                </Button>
              </Link>
              <PhoneLink variant="button" className="justify-center" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

