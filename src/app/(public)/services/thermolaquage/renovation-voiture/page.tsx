"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Car,
  ArrowRight,
  Phone,
  CheckCircle2,
  Palette,
  Shield,
  Clock,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

const benefits = [
  {
    icon: Shield,
    title: "Protection anti-corrosion",
    description: "Résistance maximale à la rouille, aux rayures et aux intempéries.",
  },
  {
    icon: Palette,
    title: "Toutes les couleurs",
    description: "200+ teintes RAL disponibles : mat, satiné, brillant, métallisé.",
  },
  {
    icon: Clock,
    title: "Délais rapides",
    description: "Traitement en 48-72h selon la taille et complexité des pièces.",
  },
];

const applications = [
  "Capots et ailes",
  "Pare-chocs",
  "Jantes et enjoliveurs",
  "Grilles de calandre",
  "Rétroviseurs",
  "Éléments de carrosserie",
  "Supports et fixations",
  "Pièces de restauration",
];

export default function RenovationVoiturePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/services/thermolaquage"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Retour au thermolaquage
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 bg-cyan-glow/20 border border-cyan-glow/30 rounded-full px-4 py-2 mb-6">
                <Car className="w-4 h-4 text-cyan-glow" />
                <span className="text-cyan-glow text-sm font-medium">
                  Thermolaquage Automobile
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Rénovation{" "}
                <span className="text-cyan-pale">Pièces Automobile</span>
              </h1>

              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Redonnez vie à vos pièces automobiles avec notre service de 
                thermolaquage professionnel. Finition durable et résistante 
                pour particuliers et garagistes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-cyan-glow text-navy-dark hover:bg-cyan-pale"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Demander un devis
                  </Button>
                </Link>
                <a href="tel:+33123456789">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10"
                    icon={<Phone className="w-5 h-5" />}
                  >
                    01 23 45 67 89
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80"
                  alt="Thermolaquage pièces automobile"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-navy-dark mb-4">
              Pourquoi thermol aquer vos pièces auto ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une finition professionnelle supérieure à la peinture classique.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="elevated" className="h-full text-center">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-cyan-glow/10 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-7 h-7 text-cyan-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-navy-dark mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-navy-dark mb-6">
                Pièces traitables
              </h2>
              <p className="text-gray-600 mb-8">
                Notre cabine de 7m permet de traiter la plupart des pièces 
                automobiles, des plus petites aux plus volumineuses.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {applications.map((app, index) => (
                  <motion.div
                    key={app}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5 text-cyan-glow flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{app}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                  alt="Pièces automobile thermolaquées"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Prêt à rénover vos pièces ?
            </h2>
            <p className="text-white/70 mb-8">
              Envoyez-nous des photos de vos pièces pour un devis gratuit sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-cyan-glow text-navy-dark hover:bg-cyan-pale"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Demander un devis
                </Button>
              </Link>
              <Link href="/services/thermolaquage">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  En savoir plus sur le thermolaquage
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

