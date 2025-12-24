"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  CircleDot,
  ArrowRight,
  Phone,
  CheckCircle2,
  Palette,
  Shield,
  Sparkles,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

const benefits = [
  {
    icon: Shield,
    title: "Résistance extrême",
    description: "Protection contre les gravillons, le sel, les produits chimiques.",
  },
  {
    icon: Palette,
    title: "Personnalisation totale",
    description: "Mat, satiné, brillant, métallisé. Toutes les teintes RAL.",
  },
  {
    icon: Sparkles,
    title: "Finition parfaite",
    description: "Aspect uniforme sans coulures ni traces de pinceau.",
  },
];

const finishes = [
  { name: "Noir Mat", hex: "#1a1a1a" },
  { name: "Anthracite", hex: "#383E42" },
  { name: "Bronze", hex: "#8B7355" },
  { name: "Or Champagne", hex: "#C9A959" },
  { name: "Blanc Nacré", hex: "#F5F5F5" },
  { name: "Rouge Racing", hex: "#CC0000" },
  { name: "Bleu Nuit", hex: "#1E3A5F" },
  { name: "Vert British", hex: "#004225" },
];

export default function JantesPage() {
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
                <CircleDot className="w-4 h-4 text-cyan-glow" />
                <span className="text-cyan-glow text-sm font-medium">
                  Thermolaquage Jantes
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Rénovation{" "}
                <span className="text-cyan-pale">Jantes</span>
              </h1>

              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Transformez l'apparence de votre véhicule avec des jantes 
                thermolaquées. Finition professionnelle, durabilité exceptionnelle.
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
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                  alt="Jantes thermolaquées"
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
              Le thermolaquage jantes, c'est...
            </h2>
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

      {/* Couleurs */}
      <section className="py-20 bg-navy-dark">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Finitions populaires
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Quelques exemples parmi les 200+ teintes disponibles.
            </p>
          </motion.div>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {finishes.map((finish, index) => (
              <motion.div
                key={finish.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center"
              >
                <div
                  className="aspect-square rounded-full mb-2 shadow-lg mx-auto w-16 md:w-20"
                  style={{ backgroundColor: finish.hex }}
                />
                <p className="text-white/80 text-xs">{finish.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-navy-dark mb-4">
              Comment ça marche ?
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                { step: "1", title: "Démontage & nettoyage", desc: "Retrait des pneus, dégraissage complet" },
                { step: "2", title: "Sablage", desc: "Décapage de l'ancienne peinture, préparation surface" },
                { step: "3", title: "Application poudre", desc: "Projection électrostatique, épaisseur contrôlée" },
                { step: "4", title: "Cuisson", desc: "Polymérisation au four à 180-200°C" },
                { step: "5", title: "Remontage", desc: "Remontage des pneus, équilibrage" },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-cyan-glow flex items-center justify-center text-navy-dark font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-dark">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-dark mb-4">
              Envie de nouvelles jantes ?
            </h2>
            <p className="text-gray-600 mb-8">
              Envoyez-nous des photos pour un devis gratuit sous 24h.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-cyan-glow text-navy-dark hover:bg-cyan-pale"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Demander un devis
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

