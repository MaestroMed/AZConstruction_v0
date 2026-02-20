"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Award,
  Heart,
  Shield,
  Users,
  CheckCircle2,
  MapPin,
  Quote,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { MeshGradient, ParticleBackground, GradientOrb } from "@/components/ui/MeshGradient";
import { useSiteImages } from "@/lib/hooks/useSiteImages";

/* ─── Données ─── */

const stats = [
  { number: "1 500+", label: "Projets réalisés" },
  { number: "1 800m²", label: "D'atelier" },
  { number: "98%", label: "Clients satisfaits" },
  { number: "IDF", label: "& France entière" },
];

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Chaque projet est réalisé avec la plus grande attention aux détails et un niveau d'exigence sans compromis.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Le travail du métal est pour nous un art. Notre amour du métier se reflète dans chaque création.",
  },
  {
    icon: Shield,
    title: "Fiabilité",
    description: "Nous respectons nos engagements en termes de délais, de qualité et de budget, toujours.",
  },
  {
    icon: Users,
    title: "Proximité",
    description: "Un interlocuteur unique vous accompagne de la conception à la pose pour une relation de confiance durable.",
  },
];

const timeline = [
  {
    year: "2018",
    title: "Création",
    description: "Fondation d'AZ Construction à Bruyères-sur-Oise, spécialisée en métallerie sur mesure pour particuliers et professionnels.",
  },
  {
    year: "2020",
    title: "Partenariat Jansen",
    description: "AZ Construction devient partenaire officiel Jansen Steel Systems, permettant d'accéder aux profilés acier haut de gamme.",
  },
  {
    year: "2022",
    title: "Atelier 1 800m²",
    description: "Installation dans l'atelier actuel de 1 800m² à Bruyères-sur-Oise, avec machines à commande numérique.",
  },
  {
    year: "Aujourd'hui",
    title: "AZ Construction",
    description: "Plus de 1 500 projets réalisés. Métallerie acier, verre et bois, pour particuliers comme pour les plus grands groupes de construction.",
  },
];

const certifications = [
  "Made in France",
  "Garantie décennale",
  "Partenaire Jansen",
  "Artisan du bâtiment",
];

export default function AProposPage() {
  const { getImage } = useSiteImages();

  return (
    <div className="min-h-screen bg-navy-dark">

      {/* ═══════════════════════════════════════════════════════
          HERO — Dark, minimaliste, honnête
      ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        {/* Background image avec overlay fort */}
        <div className="absolute inset-0">
          <Image
            src={getImage("hero-a-propos")}
            alt="AZ Construction — atelier"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/80 via-navy-dark/60 to-navy-medium/35" />
        </div>

        <GradientOrb color="cyan" size="lg" position={{ top: "10%", right: "5%" }} opacity={0.08} animate />
        <ParticleBackground count={10} />

        <div className="container mx-auto px-6 relative z-10 pt-32 pb-16">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-glow/10 border border-cyan-glow/20 text-cyan-glow rounded-full text-sm font-medium mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <MapPin className="w-4 h-4" />
              Bruyères-sur-Oise, Île-de-France
            </motion.span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
              L&apos;art du métal,{" "}
              <span className="font-serif italic text-gradient-cyan">sur mesure</span>
            </h1>

            <p className="text-xl text-white/55 mb-12 leading-relaxed max-w-2xl">
              Depuis <span className="text-white font-semibold">2018</span>, AZ Construction fabrique des ouvrages métalliques qui allient esthétique, durabilité et précision artisanale — pour les particuliers comme pour les professionnels du bâtiment.
            </p>
          </motion.div>

          {/* Stats glassmorphism */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass-card rounded-2xl p-5 text-center border border-white/10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-cyan-glow mb-1">{stat.number}</div>
                <div className="text-white/40 text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FONDATEUR — Focus 50/50
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-navy-dark py-0">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Photo fondateur — pleine hauteur */}
          <div className="relative min-h-[400px] lg:min-h-[600px] overflow-hidden">
            <Image
              src={getImage("team-member-1")}
              alt="Le fondateur d'AZ Construction"
              fill
              className="object-cover object-top"
            />
            {/* Overlay gradient vers la droite pour transition */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-navy-dark/50 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-navy-dark/10 to-transparent lg:hidden" />

            {/* Badge "Fondateur" */}
            <div className="absolute bottom-8 left-8 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-cyan-glow" />
              <span className="text-white/70 text-sm font-medium tracking-wide uppercase">Fondateur</span>
            </div>
          </div>

          {/* Texte fondateur */}
          <motion.div
            className="flex flex-col justify-center px-10 py-16 md:px-16 bg-navy-dark"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1 bg-cyan-glow/10 border border-cyan-glow/20 text-cyan-glow text-xs font-bold tracking-widest uppercase rounded-full mb-8">
              Le mot du fondateur
            </span>

            <div className="relative mb-8">
              <Quote className="absolute -top-3 -left-2 w-10 h-10 text-cyan-glow/20" />
              <blockquote className="text-xl md:text-2xl text-white/80 leading-relaxed font-light pl-6 italic">
                "Chaque ouvrage que l'on fabrique, on le signe. Ce n'est pas juste du métal — c'est notre réputation, notre passion, notre engagement envers chaque client."
              </blockquote>
            </div>

            <div className="mb-8">
              <div className="text-lg font-bold text-white mb-1">
                Le Fondateur {/* Remplacer par le vrai prénom/nom */}
              </div>
              <div className="text-cyan-glow text-sm font-medium">Fondateur & Directeur — AZ Construction</div>
            </div>

            <div className="space-y-3">
              {[
                "Artisan métallier de formation",
                "Spécialiste acier, verre et profilés Jansen",
                "Basé à Bruyères-sur-Oise depuis 2018",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/50 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-glow flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          VALEURS — Aurora + GlassCard
      ═══════════════════════════════════════════════════════ */}
      <MeshGradient variant="aurora" className="py-24">
        <GradientOrb color="cyan" size="xl" position={{ top: "-10%", right: "-5%" }} opacity={0.07} />
        <GradientOrb color="blue" size="lg" position={{ bottom: "-10%", left: "-5%" }} opacity={0.09} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 text-white/50 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Ce qui nous anime
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Nos valeurs
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard variant="dark" padding="lg" className="h-full text-center hover:border-cyan-glow/20 border border-white/10">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-glow/20 to-blue-corporate/20 flex items-center justify-center mx-auto mb-5 ring-1 ring-cyan-glow/20">
                    <value.icon className="w-6 h-6 text-cyan-glow" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{value.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </MeshGradient>

      {/* ═══════════════════════════════════════════════════════
          PARCOURS — Timeline verticale dark
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-navy-medium relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(0,212,255,1) 60px, rgba(0,212,255,1) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(0,212,255,1) 60px, rgba(0,212,255,1) 61px)`,
        }} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 text-white/50 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Notre histoire
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Le parcours <span className="text-gradient-cyan font-serif italic">AZ Construction</span>
            </h2>
          </motion.div>

          {/* Timeline verticale centrée */}
          <div className="relative max-w-3xl mx-auto">
            {/* Ligne centrale */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-glow/40 via-cyan-glow/20 to-transparent" />

            <div className="space-y-16">
              {timeline.map((event, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={event.year}
                    className={`flex items-center gap-6 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Contenu */}
                    <div className={`flex-1 ${isLeft ? "text-right" : "text-left"}`}>
                      <div className="inline-block glass-card border border-white/10 rounded-2xl p-6 hover:border-cyan-glow/20 transition-colors">
                        <div className="text-2xl font-bold text-cyan-glow mb-2">{event.year}</div>
                        <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                        <p className="text-white/40 text-sm leading-relaxed">{event.description}</p>
                      </div>
                    </div>

                    {/* Dot central */}
                    <div className="w-4 h-4 rounded-full bg-cyan-glow border-2 border-navy-medium flex-shrink-0 relative z-10 shadow-[0_0_12px_rgba(0,212,255,0.5)]" />

                    {/* Côté vide */}
                    <div className="flex-1" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ATELIER — Photo + certifications intégrées
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-navy-dark">
        <div className="grid lg:grid-cols-2 min-h-[420px]">
          {/* Photo atelier */}
          <div className="relative min-h-[300px] lg:min-h-[420px] overflow-hidden">
            <Image
              src={getImage("page-atelier")}
              alt="Atelier AZ Construction — Bruyères-sur-Oise"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy-dark/40" />
            <div className="absolute bottom-6 left-6">
              <span className="px-4 py-2 bg-navy-dark/80 backdrop-blur-sm text-white/70 text-sm rounded-full border border-white/10">
                Atelier 1 800m² — Bruyères-sur-Oise
              </span>
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-col justify-center px-10 py-14 md:px-14 bg-navy-dark">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-3 py-1 bg-cyan-glow/10 border border-cyan-glow/20 text-cyan-glow text-xs font-bold tracking-widest uppercase rounded-full mb-8">
                Nos engagements
              </span>
              <h2 className="text-3xl font-bold text-white mb-8">
                Certifications & labels
              </h2>

              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={cert}
                    className="flex items-center gap-4 glass-card rounded-xl p-4 border border-white/10 hover:border-cyan-glow/20 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-glow/15 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-cyan-glow" />
                    </div>
                    <span className="text-white font-medium">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
