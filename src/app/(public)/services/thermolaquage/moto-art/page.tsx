"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Bike,
  ArrowRight,
  Phone,
  CheckCircle2,
  Palette,
  Sparkles,
  Award,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

const benefits = [
  {
    icon: Sparkles,
    title: "Pièces uniques",
    description: "Transformez une carcasse de moto en oeuvre d'art décorative.",
  },
  {
    icon: Palette,
    title: "Créativité sans limite",
    description: "Effets spéciaux, dégradés, finitions métallisées et nacrées.",
  },
  {
    icon: Award,
    title: "Durabilité artistique",
    description: "Une protection qui préserve votre création pour des décennies.",
  },
];

const applications = [
  "Cadres de moto",
  "Réservoirs (décoration)",
  "Fourches et bras oscillants",
  "Garde-boue",
  "Échappements (sans chaleur)",
  "Pièces de carrosserie",
  "Sculptures métal",
  "Art industriel",
];

export default function MotoArtPage() {
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
                <Bike className="w-4 h-4 text-cyan-glow" />
                <span className="text-cyan-glow text-sm font-medium">
                  Thermolaquage Art & Déco
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Moto Art &{" "}
                <span className="text-cyan-pale">Sculptures Métal</span>
              </h1>

              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Donnez une nouvelle vie à vos carcasses de moto et pièces métal. 
                Créez des oeuvres d'art uniques avec une finition professionnelle 
                qui dure dans le temps.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-cyan-glow text-navy-dark hover:bg-cyan-pale"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Discuter de mon projet
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
                  src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80"
                  alt="Sculpture moto art"
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
              L'art du thermolaquage
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Au-delà de la protection, une véritable expression artistique.
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
                Quelles pièces traiter ?
              </h2>
              <p className="text-gray-600 mb-8">
                Notre cabine de 7m accueille les projets les plus ambitieux. 
                Des petites pièces aux sculptures grandeur nature.
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
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 relative">
                <Image
                  src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80"
                  alt="Art moto sculpture"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-navy-dark mb-4">
              Pour qui ?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Artistes & Sculpteurs",
                desc: "Finition professionnelle pour vos créations métalliques.",
              },
              {
                title: "Décorateurs d'intérieur",
                desc: "Pièces uniques pour vos projets design.",
              },
              {
                title: "Passionnés moto",
                desc: "Transformez votre ancienne moto en objet déco.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <h3 className="font-semibold text-navy-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Vous avez un projet artistique ?
            </h2>
            <p className="text-white/70 mb-8">
              Parlez-nous de votre idée, nous vous accompagnons de A à Z.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-cyan-glow text-navy-dark hover:bg-cyan-pale"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Discuter de mon projet
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

