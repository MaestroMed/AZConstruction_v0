"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Wrench,
  ArrowRight,
  Phone,
  CheckCircle2,
  Factory,
  Shield,
  Users,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

const benefits = [
  {
    icon: Factory,
    title: "Capacité industrielle",
    description: "Cabine de 7m, traitement de petites et grandes séries.",
  },
  {
    icon: Shield,
    title: "Protection maximale",
    description: "Résistance à la corrosion, aux UV et aux intempéries.",
  },
  {
    icon: Users,
    title: "Pro & Particuliers",
    description: "Service adapté aux artisans, industriels et bricoleurs.",
  },
];

const applications = [
  "Portails et clôtures",
  "Garde-corps et rampes",
  "Mobilier métallique",
  "Grilles et caillebotis",
  "Structures métalliques",
  "Équipements agricoles",
  "Pièces industrielles",
  "Charpentes métalliques",
  "Escaliers",
  "Portes et fenêtres acier",
  "Supports et fixations",
  "Tubes et profilés",
];

const sectors = [
  { name: "Particuliers", desc: "Portails, garde-corps, mobilier de jardin..." },
  { name: "Artisans", desc: "Sous-traitance thermolaquage pour vos clients." },
  { name: "Industriels", desc: "Grandes séries, équipements, structures." },
  { name: "Collectivités", desc: "Mobilier urbain, équipements publics." },
];

export default function PiecesMetalliquesPage() {
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
                <Wrench className="w-4 h-4 text-cyan-glow" />
                <span className="text-cyan-glow text-sm font-medium">
                  Thermolaquage Général
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Pièces{" "}
                <span className="text-cyan-pale">Métalliques</span>
              </h1>

              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Service de thermolaquage pour tous types de pièces métalliques. 
                Particuliers, artisans, industriels : nous traitons tous vos projets 
                avec la même exigence de qualité.
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
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="Pièces métalliques thermolaquées"
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
              Notre service
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

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-navy-dark mb-4">
              Types de pièces
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre cabine de 7m accueille une grande variété de pièces.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {applications.map((app, index) => (
              <motion.div
                key={app}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="flex items-center gap-2 bg-gray-50 rounded-lg p-3"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-glow flex-shrink-0" />
                <span className="text-gray-700 text-sm">{app}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-navy-dark mb-4">
              Pour tous les secteurs
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <h3 className="font-semibold text-navy-dark mb-2">{sector.name}</h3>
                <p className="text-gray-600 text-sm">{sector.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-navy-dark mb-4">
                Tarification
              </h2>
              <p className="text-gray-600">
                Le prix varie selon la taille, la complexité et la quantité des pièces.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-2xl font-bold text-cyan-700">15-40€</p>
                  <p className="text-gray-600 text-sm">/ m² (pièces simples)</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-cyan-700">48-72h</p>
                  <p className="text-gray-600 text-sm">Délai express possible</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-cyan-700">Gratuit</p>
                  <p className="text-gray-600 text-sm">Devis sous 24h</p>
                </div>
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
              Prêt à protéger vos pièces ?
            </h2>
            <p className="text-white/70 mb-8">
              Envoyez-nous des photos pour un devis gratuit et personnalisé.
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
              <Link href="/solutions-pro">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Espace Professionnel
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

