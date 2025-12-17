"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Settings,
  Shield,
  Award,
  Truck,
  Palette,
  Ruler,
  Clock,
  CheckCircle2,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

const productFamilies = [
  {
    id: "garde-corps",
    name: "Garde-corps",
    description:
      "Garde-corps et balustrades pour terrasses, balcons et escaliers. Verre feuilleté, câbles tendus ou barreaux design. Inox 316L.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="4" y1="16" x2="44" y2="16" />
        <line x1="8" y1="16" x2="8" y2="40" />
        <line x1="20" y1="16" x2="20" y2="40" />
        <line x1="32" y1="16" x2="32" y2="40" />
        <line x1="44" y1="16" x2="44" y2="40" />
        <circle cx="8" cy="12" r="3" />
        <circle cx="20" cy="12" r="3" />
        <circle cx="32" cy="12" r="3" />
        <circle cx="44" cy="12" r="3" />
      </svg>
    ),
    products: ["Garde-corps Verre & Inox", "Garde-corps Câbles", "Garde-corps Barreaudé", "Garde-corps Tôles Perforées"],
    startingPrice: "290",
    features: ["Norme NF P01-012", "Inox 316L", "8 modèles"],
  },
  {
    id: "escaliers",
    name: "Escaliers",
    description:
      "Escaliers droits, quart-tournant, double quart-tournant et hélicoïdaux. Structures acier, inox ou mixte bois-métal.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 44 L4 36 L12 36 L12 28 L20 28 L20 20 L28 20 L28 12 L36 12 L36 4 L44 4" />
      </svg>
    ),
    products: ["Escalier Hélicoïdal", "Escalier Droit", "Escalier Quart-tournant", "Escalier Suspendu"],
    startingPrice: "4 500",
    features: ["Étude 3D gratuite", "8 modèles", "Marches bois/métal"],
  },
  {
    id: "portails",
    name: "Portails",
    description:
      "Portails battants et coulissants en acier, aluminium ou inox. Design moderne ou classique, motorisation disponible.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="8" width="18" height="32" rx="2" />
        <rect x="26" y="8" width="18" height="32" rx="2" />
        <circle cx="13" cy="24" r="2" fill="currentColor" />
        <circle cx="35" cy="24" r="2" fill="currentColor" />
      </svg>
    ),
    products: ["Portail Battant 2 Vantaux", "Portail Coulissant", "Portail Autoportant", "Portillon Piéton"],
    startingPrice: "1 890",
    features: ["Motorisable", "7 modèles", "200+ couleurs RAL"],
  },
  {
    id: "clotures",
    name: "Clôtures",
    description:
      "Clôtures barreaudées, à lames, panneaux rigides et décoratives. Solutions esthétiques et sécuritaires pour votre propriété.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="4" y1="12" x2="44" y2="12" />
        <line x1="4" y1="24" x2="44" y2="24" />
        <line x1="4" y1="36" x2="44" y2="36" />
        <line x1="8" y1="8" x2="8" y2="40" />
        <line x1="24" y1="8" x2="24" y2="40" />
        <line x1="40" y1="8" x2="40" y2="40" />
      </svg>
    ),
    products: ["Clôture Barreaudée", "Clôture à Lames", "Clôture Décorative", "Clôture Piscine"],
    startingPrice: "85",
    features: ["Prix au mètre", "8 modèles", "Anti-corrosion"],
  },
  {
    id: "pergolas",
    name: "Pergolas",
    description:
      "Pergolas bioclimatiques à lames orientables, classiques, adossées ou autoportées. Carports inclus. Options stores, LED, chauffage.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="6" y="32" width="36" height="12" rx="1" />
        <line x1="10" y1="32" x2="10" y2="44" />
        <line x1="38" y1="32" x2="38" y2="44" />
        <line x1="6" y1="36" x2="42" y2="36" />
        <line x1="6" y1="28" x2="42" y2="28" />
        <line x1="12" y1="28" x2="12" y2="32" />
        <line x1="24" y1="28" x2="24" y2="32" />
        <line x1="36" y1="28" x2="36" y2="32" />
      </svg>
    ),
    products: ["Pergola Bioclimatique", "Pergola Adossée", "Pergola Autoportée", "Carport"],
    startingPrice: "4 500",
    features: ["Lames orientables", "7 modèles", "Options LED/chauffage"],
  },
  {
    id: "marquises",
    name: "Marquises & Auvents",
    description:
      "Marquises pour portes d'entrée, auvents terrasse et casquettes architecturales. Protection pluie et soleil design.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 20 L24 8 L42 20" />
        <line x1="6" y1="20" x2="6" y2="24" />
        <line x1="42" y1="20" x2="42" y2="24" />
        <rect x="6" y="24" width="36" height="4" rx="1" />
        <rect x="16" y="28" width="16" height="16" rx="1" />
        <line x1="24" y1="28" x2="24" y2="44" />
      </svg>
    ),
    products: ["Marquise Porte d'Entrée", "Auvent Terrasse", "Marquise Verre", "Auvent Casquette"],
    startingPrice: "890",
    features: ["6 modèles", "Verre ou polycarb.", "Gouttière incluse"],
  },
  {
    id: "portes",
    name: "Portes",
    description:
      "Portes en acier et profilés Jansen : portes d'entrée design, techniques, coupe-feu EI30 à EI120, acoustiques et blindées.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="8" y="4" width="32" height="40" rx="2" />
        <line x1="8" y1="4" x2="8" y2="44" strokeWidth="3" />
        <circle cx="34" cy="24" r="2" fill="currentColor" />
        <line x1="32" y1="24" x2="28" y2="24" />
      </svg>
    ),
    products: ["Porte d'Entrée Acier", "Porte Atelier", "Porte Coupe-feu", "Porte Blindée A2P"],
    startingPrice: "1 200",
    features: ["Profilés Jansen", "8 modèles", "Coupe-feu EI120"],
  },
  {
    id: "fenetres",
    name: "Fenêtres & Châssis",
    description:
      "Fenêtres et châssis en profilés acier Jansen. Fixes, oscillo-battantes, coulissantes. Style atelier ou contemporain.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="6" y="6" width="36" height="36" rx="2" />
        <line x1="24" y1="6" x2="24" y2="42" />
        <line x1="6" y1="24" x2="42" y2="24" />
        <rect x="10" y="10" width="10" height="10" fill="none" strokeWidth="1" />
        <rect x="28" y="10" width="10" height="10" fill="none" strokeWidth="1" />
      </svg>
    ),
    products: ["Fenêtre Fixe Acier", "Fenêtre Oscillo-battante", "Châssis Atelier", "Baie Panoramique"],
    startingPrice: "750",
    features: ["Profilés Jansen", "8 modèles", "Double/Triple vitrage"],
  },
  {
    id: "verrieres",
    name: "Verrières",
    description:
      "Verrières intérieures style atelier. Cloisons vitrées avec ou sans porte. Du sol au plafond ou en imposte. Sur mesure.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="40" height="40" rx="2" />
        <line x1="4" y1="24" x2="44" y2="24" />
        <line x1="16" y1="4" x2="16" y2="44" />
        <line x1="28" y1="4" x2="28" y2="44" />
        <line x1="40" y1="4" x2="40" y2="44" />
      </svg>
    ),
    products: ["Verrière Atelier Fixe", "Verrière avec Porte", "Verrière Toute Hauteur", "Verrière Cuisine"],
    startingPrice: "480",
    features: ["Style industriel", "7 modèles", "Porte intégrée"],
  },
  {
    id: "grilles-ventilation",
    name: "Grilles de ventilation",
    description:
      "Grilles de ventilation techniques et décoratives. Fixes, orientables, acoustiques ou coupe-feu. Sur mesure pour tous bâtiments.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="6" y="6" width="36" height="36" rx="2" />
        <line x1="10" y1="14" x2="38" y2="14" />
        <line x1="10" y1="22" x2="38" y2="22" />
        <line x1="10" y1="30" x2="38" y2="30" />
        <line x1="10" y1="38" x2="38" y2="38" />
      </svg>
    ),
    products: ["Grille Décorative", "Grille Technique", "Grille Acoustique", "Grille Coupe-feu"],
    startingPrice: "180",
    features: ["7 modèles", "Anti-corrosion", "Sur mesure"],
  },
];

const guarantees = [
  {
    icon: Shield,
    title: "Garantie 10 ans",
    description: "Tous nos produits sont garantis 10 ans contre les défauts de fabrication.",
  },
  {
    icon: Award,
    title: "Fabrication française",
    description: "100% de nos ouvrages sont fabriqués dans nos ateliers en Île-de-France.",
  },
  {
    icon: Truck,
    title: "Livraison incluse",
    description: "Livraison gratuite en Île-de-France, tarifs préférentiels sur le reste de la France.",
  },
  {
    icon: Palette,
    title: "200+ couleurs RAL",
    description: "Personnalisez votre ouvrage parmi plus de 200 teintes RAL thermolaquées.",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Configurez en ligne",
    description: "Utilisez notre configurateur 3D pour personnaliser dimensions, couleurs et options.",
    icon: Settings,
  },
  {
    step: 2,
    title: "Recevez votre devis",
    description: "Obtenez une estimation précise et un devis détaillé sous 48h ouvrées.",
    icon: Clock,
  },
  {
    step: 3,
    title: "Fabrication sur mesure",
    description: "Votre ouvrage est fabriqué dans nos ateliers selon vos spécifications exactes.",
    icon: Ruler,
  },
  {
    step: 4,
    title: "Livraison & Pose",
    description: "Livraison soignée et pose professionnelle par notre équipe qualifiée.",
    icon: Truck,
  },
];

const testimonials = [
  {
    name: "Marie L.",
    location: "Pontoise (95)",
    text: "Un garde-corps magnifique, exactement comme je l'avais imaginé. L'équipe a été à l'écoute du début à la fin.",
    rating: 5,
    product: "Garde-corps verre",
  },
  {
    name: "Philippe D.",
    location: "Paris (75)",
    text: "La qualité de l'escalier hélicoïdal est exceptionnelle. Un vrai travail d'artisan !",
    rating: 5,
    product: "Escalier hélicoïdal",
  },
  {
    name: "Architecte SCI Rénovation",
    location: "Lyon (69)",
    text: "Excellente collaboration pour nos fenêtres en profilés Jansen. Finition irréprochable.",
    rating: 5,
    product: "Fenêtres Jansen",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ProduitsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20h40M20 0v40' fill='none' stroke='%2300d4ff' stroke-width='0.5'/%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-cyan-glow/20 text-cyan-glow rounded-full text-sm font-medium mb-6">
              10 familles de produits • 66 produits • 1800m² d&apos;atelier
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nos Produits{" "}
              <span className="font-serif italic text-cyan-pale">sur mesure</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Découvrez notre gamme complète d'ouvrages métalliques. Configurez votre projet
              en quelques clics et obtenez un devis instantané.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {productFamilies.map((family) => (
                <a
                  key={family.id}
                  href={`#${family.id}`}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 hover:bg-white/20 hover:text-white transition-all text-sm"
                >
                  {family.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guarantees Bar */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <guarantee.icon className="w-6 h-6 text-cyan-glow flex-shrink-0" />
                <span className="text-sm text-gray-700 font-medium">{guarantee.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Families */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {productFamilies.map((family) => (
              <motion.div key={family.id} id={family.id} variants={cardVariants}>
                <Card variant="elevated" hover className="h-full group">
                  <CardContent className="p-8">
                    {/* Icon & Price */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-corporate/10 to-cyan-glow/10 flex items-center justify-center text-blue-corporate group-hover:scale-110 transition-transform">
                        {family.icon}
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-gray-400">À partir de</span>
                        <div className="text-2xl font-bold text-navy-dark">
                          {family.startingPrice}€
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <h2 className="text-2xl font-bold text-navy-dark mb-3">
                      {family.name}
                    </h2>
                    <p className="text-gray-500 mb-6 leading-relaxed">
                      {family.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {family.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-glow/10 text-cyan-600 rounded-full text-xs font-medium"
                        >
                          <CheckCircle2 className="w-3 h-3" />
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Products list */}
                    <div className="mb-6 pb-6 border-b border-gray-100">
                      <p className="text-sm text-gray-400 mb-2">Modèles populaires :</p>
                      <ul className="space-y-1">
                        {family.products.map((product, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow" />
                            {product}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Link href={`/configurateur/${family.id}`}>
                      <Button
                        className="w-full group-hover:bg-cyan-glow group-hover:text-navy-dark transition-colors"
                        icon={<Settings className="w-4 h-4" />}
                      >
                        Configurer mon {family.name.toLowerCase().slice(0, -1)}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              De la configuration à l'installation, nous vous accompagnons à chaque étape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-cyan-glow to-transparent" />
                )}
                <div className="relative text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-corporate to-navy-dark text-white flex items-center justify-center mx-auto mb-4 relative z-10">
                    <step.icon className="w-7 h-7" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-glow text-navy-dark text-sm font-bold rounded-full flex items-center justify-center">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-semibold text-navy-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Plus de 1 500 projets réalisés en 10 ans d&apos;activité.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="elevated" className="h-full">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-navy-dark">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">{testimonial.location}</p>
                      </div>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                        {testimonial.product}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Detail */}
      <section className="py-20 bg-navy-dark">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nos engagements qualité
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Des garanties concrètes pour votre tranquillité d'esprit.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
                initial={{ opacity: 0, y: 30 }}
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

      {/* Bottom CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="bg-gradient-to-r from-blue-corporate to-navy-dark rounded-3xl p-12 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Un projet spécifique ?
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Notre équipe est à votre disposition pour étudier vos projets sur mesure
                et vous proposer une solution adaptée à vos besoins.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-cyan-glow text-navy-dark hover:bg-cyan-pale"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Demander un devis personnalisé
                  </Button>
                </Link>
                <Link href="/realisations">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/50 text-white hover:bg-white/10"
                  >
                    Voir nos réalisations
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
