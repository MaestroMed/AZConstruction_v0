"use client";

/**
 * /homepage-b — PREVISUALISATION Version B "Forge"
 *
 * Page variante avec ForgeScene (IPN incandescents -> thermolaque, braises, pull-back).
 * Ne pas merger en production sans validation client.
 */

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import ForgeSceneClient from "@/app/(public)/ForgeSceneClient";

const defaultHeadline = "L'acier sur";
const defaultAccent   = "mesure.";
const defaultSub      = "Expert en métallerie sur mesure : garde-corps, escaliers, portes, fenêtres, portails et clôtures. Profilés Jansen.";
const stats = [
  { value: "2018",  label: "Depuis" },
  { value: "1500+", label: "Projets réalisés" },
  { value: "1800m²", label: "D'\u0061telier" },
];

export default function HomepageBPage() {
  return (
    <>
      {/* ── BANNIERE PREVISUALISATION ── */}
      <div className="bg-orange-500 text-white text-center py-2 text-sm font-semibold sticky top-0 z-[60]">
        PRÉVISUALISATION — Version B &quot;Forge&quot; &nbsp;|&nbsp;
        <Link href="/" className="underline">
          Version actuelle
        </Link>
      </div>

      {/* ══════════════════════════════════════════════════════
          HERO — ForgeScene (IPN incandescents qui refroidissent)
      ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen overflow-hidden bg-black">
        {/* ForgeScene en fond */}
        <ForgeSceneClient className="absolute inset-0 z-0" />

        {/* Overlay gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

        {/* Grain texture subtile */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div className="container mx-auto px-6 lg:px-12 pt-32 pb-20 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-200px)]">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative max-w-2xl"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-white/70 mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Transformation métal, bois & verre depuis 2018
              </motion.div>

              {/* Headline */}
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] tracking-tight mb-6">
                {defaultHeadline}{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    {defaultAccent}
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </span>
              </h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg md:text-xl text-white/60 max-w-lg leading-relaxed mb-10"
              >
                {defaultSub}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/produits">
                  <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0a0f1a] font-semibold rounded-full text-base overflow-hidden transition-all hover:shadow-lg hover:shadow-white/20">
                    <span className="relative z-10">Découvrir nos produits</span>
                    <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute inset-0 z-10 flex items-center justify-center gap-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Découvrir nos produits</span>
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </button>
                </Link>
                <Link href="/realisations">
                  <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full text-base hover:bg-white/5 hover:border-white/30 transition-all">
                    <Play className="w-4 h-4" />
                    Voir nos réalisations
                  </button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex gap-12 mt-16 pt-10 border-t border-white/10"
              >
                {stats.map((stat, i) => (
                  <div key={i} className="text-left">
                    <div className="font-display text-3xl md:text-4xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/50">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-28 left-1/2 -translate-x-1/2 z-30"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-20 bg-gradient-to-b from-black to-navy-dark">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Votre projet sur mesure
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Devis gratuit, réponse sous 48h, fabrication dans notre atelier 1 800m² en Île-de-France.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-glow text-navy-dark font-semibold rounded-full hover:bg-cyan-pale transition-all">
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/produits">
              <button className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all">
                Voir nos produits
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
