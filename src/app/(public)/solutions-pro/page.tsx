"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  Percent,
  Clock,
  FileText,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
  Shield,
  Truck,
  Award,
  Calculator,
  Handshake,
  HeadphonesIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

const advantages = [
  {
    icon: Percent,
    title: "Remises jusqu'à -25%",
    description:
      "Bénéficiez de tarifs préférentiels selon votre volume d'achat annuel.",
  },
  {
    icon: Clock,
    title: "Délais prioritaires",
    description:
      "Vos commandes sont traitées en priorité avec des délais de fabrication optimisés.",
  },
  {
    icon: FileText,
    title: "Devis sous 24h",
    description:
      "Obtenez des devis détaillés adaptés à vos projets en un jour ouvré.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support dédié",
    description:
      "Un chargé de compte vous accompagne dans tous vos projets de A à Z.",
  },
  {
    icon: Calculator,
    title: "Paiement différé",
    description:
      "Payez vos commandes à 30 jours fin de mois après validation de votre compte.",
  },
  {
    icon: Truck,
    title: "Livraison gratuite*",
    description:
      "Livraison offerte en Île-de-France pour toute commande supérieure à 5 000€ HT.",
  },
];

const sectors = [
  {
    name: "Constructeurs de maisons",
    description: "Équipez vos constructions neuves avec des ouvrages de qualité.",
    count: "150+ partenaires",
  },
  {
    name: "Architectes & Bureaux d'études",
    description: "Collaborons sur vos projets les plus ambitieux.",
    count: "80+ collaborations",
  },
  {
    name: "Promoteurs immobiliers",
    description: "Solutions clés en main pour vos programmes neufs.",
    count: "25+ programmes",
  },
  {
    name: "Artisans du bâtiment",
    description: "Sous-traitance métallerie pour vos chantiers.",
    count: "200+ artisans",
  },
  {
    name: "Collectivités",
    description: "Équipements pour espaces publics et bâtiments municipaux.",
    count: "50+ collectivités",
  },
  {
    name: "Industriels",
    description: "Structures, passerelles et équipements sur mesure.",
    count: "50+ industriels",
  },
];

const testimonials = [
  {
    name: "Laurent M.",
    company: "Maisons Lumière",
    role: "Directeur Commercial",
    text: "Un partenariat de confiance depuis 8 ans. La qualité est au rendez-vous, les délais sont respectés et l'équipe commerciale est très réactive.",
    rating: 5,
  },
  {
    name: "Claire D.",
    company: "Atelier D Architectes",
    role: "Architecte DPLG",
    text: "AZ Construction a su réaliser notre vision pour le hall d'entrée. L'escalier hélicoïdal est une vraie pièce maîtresse du projet.",
    rating: 5,
  },
  {
    name: "Thomas B.",
    company: "Bâti Pro Services",
    role: "Gérant",
    text: "Je recommande AZ Construction à tous mes clients. Les tarifs professionnels sont compétitifs et la qualité est irréprochable.",
    rating: 5,
  },
];

const pricingTiers = [
  {
    name: "Starter",
    minVolume: "< 10 000€/an",
    discount: "5%",
    features: [
      "Tarifs professionnels de base",
      "Délais standards",
      "Devis sous 48h",
      "Support email",
    ],
  },
  {
    name: "Business",
    minVolume: "10 000€ - 50 000€/an",
    discount: "15%",
    popular: true,
    features: [
      "Tarifs préférentiels -15%",
      "Délais prioritaires",
      "Devis sous 24h",
      "Chargé de compte dédié",
      "Paiement à 30 jours",
    ],
  },
  {
    name: "Enterprise",
    minVolume: "> 50 000€/an",
    discount: "25%",
    features: [
      "Tarifs négociés -25%",
      "Délais express",
      "Devis immédiat",
      "Chargé de compte VIP",
      "Paiement à 45 jours",
      "Livraison gratuite IDF",
    ],
  },
];

export default function SolutionsProPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full">
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-cyan-glow"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-glow/20 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-cyan-glow" />
                </div>
                <span className="text-cyan-glow font-medium">Espace Professionnel</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Solutions Pro{" "}
                <span className="font-serif italic text-cyan-pale">
                  sur mesure
                </span>
              </h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Partenaire privilégié des professionnels du bâtiment depuis 10 ans.
                Bénéficiez de conditions exclusives et d'un accompagnement personnalisé.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register?type=pro">
                  <Button
                    size="lg"
                    className="bg-cyan-glow text-navy-dark hover:bg-cyan-light"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Créer mon compte Pro
                  </Button>
                </Link>
                <a href="tel:+33123456789">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/50 text-white hover:bg-white/10"
                    icon={<Phone className="w-5 h-5" />}
                  >
                    01 23 45 67 89
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {[
                { number: "500+", label: "Partenaires actifs" },
                { number: "-25%", label: "Remise max" },
                { number: "24h", label: "Réponse devis" },
                { number: "30j", label: "Paiement différé" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
                >
                  <div className="text-3xl font-bold text-cyan-glow mb-1">
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Les avantages du compte Pro
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Rejoignez notre réseau de partenaires professionnels et bénéficiez
              de nombreux avantages exclusifs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="elevated" className="h-full text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-corporate/10 to-cyan-glow/10 flex items-center justify-center mx-auto mb-6">
                      <advantage.icon className="w-8 h-8 text-blue-corporate" />
                    </div>
                    <h3 className="text-lg font-semibold text-navy-dark mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Nos formules partenaires
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des conditions adaptées à votre volume d'achat annuel.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={tier.popular ? "md:-mt-4 md:mb-4" : ""}
              >
                <Card
                  variant="elevated"
                  className={`h-full relative ${
                    tier.popular ? "border-2 border-cyan-glow shadow-xl" : ""
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyan-glow text-navy-dark text-sm font-semibold rounded-full">
                      Le plus populaire
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-navy-dark mb-2">
                        {tier.name}
                      </h3>
                      <p className="text-sm text-gray-500">{tier.minVolume}</p>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-blue-corporate">
                          {tier.discount}
                        </span>
                        <span className="text-gray-500 ml-1">de remise</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                          <CheckCircle className="w-5 h-5 text-cyan-glow flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/register?type=pro">
                      <Button
                        className={`w-full ${
                          tier.popular
                            ? "bg-cyan-glow text-navy-dark hover:bg-cyan-pale"
                            : ""
                        }`}
                        variant={tier.popular ? "default" : "outline"}
                      >
                        S'inscrire
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Nous travaillons avec tous les acteurs du bâtiment
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Que vous soyez constructeur, architecte ou artisan, nous adaptons
              nos services à votre métier et à vos contraintes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="elevated" hover className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-navy-dark">
                        {sector.name}
                      </h3>
                      <span className="text-xs text-cyan-glow bg-cyan-glow/10 px-2 py-1 rounded-full font-medium">
                        {sector.count}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{sector.description}</p>
                  </CardContent>
                </Card>
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
              Des partenaires satisfaits qui recommandent nos services.
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
                    <div className="border-t border-gray-100 pt-4">
                      <p className="font-semibold text-navy-dark">{testimonial.name}</p>
                      <p className="text-sm text-cyan-glow">{testimonial.company}</p>
                      <p className="text-xs text-gray-400">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Pro */}
      <section className="py-20 bg-gradient-to-r from-navy-dark to-blue-corporate">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/10">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Besoin d'un conseil personnalisé ?
                  </h2>
                  <p className="text-white/70 mb-6">
                    Notre équipe commerciale est à votre disposition pour étudier
                    vos besoins et vous proposer les meilleures conditions.
                  </p>
                  <div className="space-y-4">
                    <a
                      href="tel:+33123456789"
                      className="flex items-center gap-4 text-white hover:text-cyan-glow transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60">Commercial</p>
                        <p className="font-semibold">01 23 45 67 89</p>
                      </div>
                    </a>
                    <a
                      href="mailto:pro@azconstruction.fr"
                      className="flex items-center gap-4 text-white hover:text-cyan-glow transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60">Email</p>
                        <p className="font-semibold">pro@azconstruction.fr</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link href="/register?type=pro">
                    <Button
                      size="lg"
                      className="w-full bg-cyan-glow text-navy-dark hover:bg-cyan-pale"
                      icon={<ArrowRight className="w-5 h-5" />}
                    >
                      Créer mon compte Pro
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full border-white/30 text-white hover:bg-white/10"
                    >
                      Demander un rendez-vous
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
