"use client";

/**
 * /services/thermolaquage-b — PREVISUALISATION Version B "Spectre RAL"
 *
 * Page variante avec SpectreScene (5 IPN en rang, palette RAL, radar lateral).
 * Ne pas merger en production sans validation client.
 */

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { GlowButton, AnimatedCounter, PhoneLink } from "@/components/ui";
import SpectreSceneClient from "@/app/(public)/services/thermolaquage/SpectreSceneClient";

function HeroStat({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="glass-card p-6 text-center"
    >
      <div className="text-3xl md:text-4xl font-bold text-white mb-1">
        <AnimatedCounter value={value} suffix={suffix} duration={2.5} />
      </div>
      <p className="text-white/60 text-sm">{label}</p>
    </motion.div>
  );
}

export default function ThermolaquageBPage() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">

      {/* ── BANNIERE PREVISUALISATION ── */}
      <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold sticky top-0 z-[60]">
        PRÉVISUALISATION — Version B &quot;Spectre RAL&quot; &nbsp;|&nbsp;
        <Link href="/services/thermolaquage" className="underline">
          Version actuelle
        </Link>
      </div>

      {/* ══════════════════════════════════════════════════════
          HERO — SpectreScene (5 IPN × 5 couleurs RAL)
      ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* SpectreScene en fond */}
        <SpectreSceneClient className="absolute inset-0 z-0" />

        {/* Overlay sombre pour lisibilite du texte */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/55 via-transparent to-black/70" />

        {/* Content */}
        <div className="container mx-auto px-6 relative z-20 py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass-card-glow px-5 py-2.5 mb-8"
            >
              <Sparkles className="w-4 h-4 text-cyan-glow" />
              <span className="text-cyan-glow text-sm font-medium tracking-wide">
                SERVICE PROFESSIONNEL
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
            >
              Thermolaquage{" "}
              <span className="text-gradient-premium">
                Poudre Epoxy
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed max-w-2xl mx-auto"
            >
              Protection et finition <span className="text-cyan-glow font-semibold">haut de gamme</span> pour{" "}
              tous vos ouvrages métalliques. <span className="text-white font-medium">200+ teintes RAL</span>,{" "}
              résistance maximale.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 md:gap-6 max-w-xl mx-auto mb-12"
            >
              <HeroStat value={7} suffix="m" label="Cabine max" delay={0.4} />
              <HeroStat value={200} suffix="+" label="Couleurs RAL" delay={0.5} />
              <HeroStat value={48} suffix="h" label="Délai express" delay={0.6} />
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <GlowButton size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Demander un devis gratuit
                </GlowButton>
              </Link>
              <PhoneLink variant="button" className="justify-center" />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-cyan-glow rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-20 bg-gradient-to-b from-black to-navy-dark">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            200+ teintes RAL disponibles
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Cabine jusqu'à 7m, délai express 48h, finitions mat, satiné, brillant ou texturé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <GlowButton size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                Demander un devis
              </GlowButton>
            </Link>
            <Link href="/couleurs-ral">
              <GlowButton variant="outline" size="lg">
                Voir le nuancier RAL
              </GlowButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
