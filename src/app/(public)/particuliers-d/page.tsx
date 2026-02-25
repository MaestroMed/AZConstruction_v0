"use client";

/**
 * /particuliers-d — PREVISUALISATION Version D "Lumiere"
 *
 * Page variante avec LumiereScene (garde-corps verre + acier, lumiere residentielle).
 * Ne pas merger en production sans validation client.
 */

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Home,
  Eye,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { PhoneLink } from "@/components/ui/PhoneLink";
import LumiereSceneClient from "@/app/(public)/particuliers/LumiereSceneClient";

const heroStats = [
  { number: "1 500+", label: "Projets réalisés" },
  { number: "10", label: "Années d'\u0065xpérience" },
  { number: "98%", label: "Clients satisfaits" },
  { number: "1 800m\u00b2", label: "D'\u0061telier" },
];

export default function ParticuliersDPage() {
  return (
    <div className="min-h-screen bg-navy-dark">

      {/* ── BANNIERE PREVISUALISATION ── */}
      <div className="bg-purple-600 text-white text-center py-2 text-sm font-semibold sticky top-0 z-[60]">
        PRÉVISUALISATION — Version D &quot;Lumière&quot; &nbsp;|&nbsp;
        <Link href="/particuliers" className="underline">
          Version actuelle
        </Link>
      </div>

      {/* ══════════════════════════════════════════════════════
          HERO — LumiereScene (garde-corps verre + acier)
      ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* LumiereScene en fond */}
        <LumiereSceneClient className="absolute inset-0 z-0" />

        {/* Overlay gradient pour lisibilite du texte */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/45 via-transparent to-black/65" />

        <div className="container mx-auto px-6 relative z-20 pt-32 pb-20">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-glow/15 border border-cyan-glow/30 text-cyan-glow rounded-full text-sm font-medium mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Home className="w-4 h-4" />
              Solutions pour particuliers
            </motion.div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
              Donnez du{" "}
              <span className="font-serif italic text-gradient-cyan">caractère</span>
              <br />à votre maison
            </h1>

            <p className="text-xl md:text-2xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              Ouvrages métalliques sur mesure. Qualité artisanale française,
              design contemporain, finitions irréprochables.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/produits">
                <GlowButton size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Découvrir nos produits
                </GlowButton>
              </Link>
              <Link href="/realisations">
                <GlowButton variant="outline" size="lg" icon={<Eye className="w-5 h-5" />}>
                  Voir nos réalisations
                </GlowButton>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              {["Fabrication française", "Depuis 2018", "Devis gratuit", "200+ couleurs RAL"].map((badge, i) => (
                <span key={i} className="inline-flex items-center gap-2 text-white/50 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-glow" />
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats glassmorphism */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            {heroStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass-card rounded-2xl p-6 text-center border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                <div className="text-3xl font-bold text-cyan-glow mb-1">{stat.number}</div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 z-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs tracking-widest uppercase">Découvrir</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-20 bg-gradient-to-br from-navy-dark to-navy-medium">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Votre projet mérite le meilleur
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Devis gratuit, réponse sous 48h, fabrication dans notre atelier de 1 800m².
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <GlowButton size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                Demander un devis
              </GlowButton>
            </Link>
            <PhoneLink variant="button" />
          </div>
        </div>
      </section>
    </div>
  );
}
