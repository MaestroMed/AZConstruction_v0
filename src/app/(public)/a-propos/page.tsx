"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Award,
  Users,
  Target,
  Heart,
  Clock,
  Shield,
  Wrench,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const stats = [
  { number: "10", label: "Années d'expérience" },
  { number: "1 500+", label: "Projets réalisés" },
  { number: "1 800m²", label: "D'atelier" },
  { number: "98%", label: "Clients satisfaits" },
];

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "Chaque projet est réalisé avec la plus grande attention aux détails et un niveau d'exigence sans compromis.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Notre amour du métier se reflète dans chaque création. Le travail du métal est pour nous un art.",
  },
  {
    icon: Shield,
    title: "Fiabilité",
    description:
      "Nous respectons nos engagements en termes de délais, de qualité et de budget.",
  },
  {
    icon: Users,
    title: "Proximité",
    description:
      "Un interlocuteur unique vous accompagne de la conception à la pose pour une relation de confiance.",
  },
];

const timeline = [
  {
    year: "2015",
    title: "Les débuts",
    description:
      "Création d'AZ Construction à Bruyères-sur-Oise, spécialisé en métallerie sur mesure.",
  },
  {
    year: "2018",
    title: "Expansion",
    description:
      "Installation dans nos ateliers actuels de 1800m² à Bruyères-sur-Oise.",
  },
  {
    year: "2020",
    title: "Partenariat Jansen",
    description:
      "Devenu partenaire officiel Jansen pour les profilés acier haut de gamme.",
  },
  {
    year: "2022",
    title: "Modernisation",
    description:
      "Investissement dans des machines à commande numérique pour plus de précision.",
  },
  {
    year: "2024",
    title: "Innovation",
    description:
      "Lancement du configurateur en ligne et de notre service de visualisation 3D.",
  },
];

const team = [
  {
    name: "Jean-Pierre Azoulay",
    role: "Fondateur & Directeur",
    description: "35 ans d'expérience dans la métallerie",
  },
  {
    name: "Marie Dubois",
    role: "Responsable Bureau d'études",
    description: "Ingénieure spécialisée en structures métalliques",
  },
  {
    name: "Thomas Martin",
    role: "Chef d'atelier",
    description: "Maître ferronnier d'art",
  },
  {
    name: "Sophie Lambert",
    role: "Responsable Commerciale",
    description: "Experte en accompagnement client",
  },
];

const certifications = [
  "Qualibat",
  "RGE",
  "Artisan d'Art",
  "Made in France",
  "Garantie décennale",
];

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-cyan-glow/20 text-cyan-glow rounded-full text-sm font-medium mb-6">
              Notre histoire
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              L'excellence du métal depuis <span className="text-cyan-glow">1998</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              AZ Construction, c'est l'histoire d'une passion transmise de génération en génération.
              Nous créons des ouvrages métalliques sur mesure qui allient esthétique, durabilité et innovation.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
              >
                <div className="text-3xl md:text-4xl font-bold text-cyan-glow mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Nos valeurs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ces principes guident chacune de nos actions et font la différence dans nos réalisations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-glow to-blue-corporate flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Notre parcours
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Plus de 10 ans d&apos;évolution et d&apos;innovation au service de nos clients.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-glow via-blue-corporate to-navy-dark hidden md:block" />

            <div className="space-y-12">
              {timeline.map((event, index) => (
                <motion.div
                  key={event.year}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <span className="text-cyan-glow font-bold text-2xl">{event.year}</span>
                      <h3 className="text-xl font-semibold text-navy-dark mt-2 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-cyan-glow border-4 border-white shadow-lg hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Notre équipe
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des experts passionnés qui mettent leur savoir-faire à votre service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden shadow-lg group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-corporate to-navy-dark relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="w-20 h-20 text-white/20" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-navy-dark mb-1">
                    {member.name}
                  </h3>
                  <p className="text-cyan-glow text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-navy-dark">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-2">
              Nos certifications & labels
            </h2>
            <p className="text-white/60">
              Gages de qualité et de professionnalisme
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-glow" />
                <span className="text-white font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="bg-gradient-to-br from-blue-corporate to-navy-dark rounded-3xl p-12 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Prêt à concrétiser votre projet ?
              </h2>
              <p className="text-white/80 max-w-xl mx-auto mb-8">
                Contactez-nous pour discuter de vos besoins. Notre équipe est à votre écoute
                pour vous accompagner dans la réalisation de votre projet sur mesure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-cyan-glow text-navy-dark hover:bg-cyan-pale">
                    Demander un devis
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/realisations">
                  <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
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


