"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import ConfiguratorPreview from "./ConfiguratorPreview";

// Image de l'atelier - à remplacer par le chemin réel après upload
const HERO_IMAGE = "/images/hero/atelier-facade.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0f1a]">
      {/* Background Image - Photo de l'atelier */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="AZ Construction - Atelier de métallerie"
          fill
          priority
          className="object-cover object-center"
          quality={90}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Overlay gradient sophistiqué style Apple */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/95 via-[#0a0f1a]/70 to-[#0a0f1a]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-[#0a0f1a]/30" />
      </div>

      {/* Subtle grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Accent light effect */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none z-10">
        <div 
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)",
          }}
        />
      </div>

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
              Fabrication française depuis 2015
            </motion.div>

            {/* Headline - Style Apple : clean, bold, minimal */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] tracking-tight mb-6">
              L&apos;acier sur{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  mesure
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
              <br />
              <span className="text-white/90">vite et bien.</span>
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-white/60 max-w-lg leading-relaxed mb-10"
            >
              Expert en métallerie sur mesure : garde-corps, escaliers, 
              portes, fenêtres, portails et clôtures. Profilés Jansen.
            </motion.p>

            {/* CTA Buttons - Style Apple */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/produits">
                <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0a0f1a] font-semibold rounded-full text-base overflow-hidden transition-all hover:shadow-lg hover:shadow-white/20">
                  <span className="relative z-10">Configurer mon projet</span>
                  <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute inset-0 z-10 flex items-center justify-center gap-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Configurer mon projet</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
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

            {/* Stats - Style Apple minimal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-12 mt-16 pt-10 border-t border-white/10"
            >
              {[
                { value: "10", label: "Années d'expertise" },
                { value: "1500+", label: "Projets réalisés" },
                { value: "1800m²", label: "D'atelier" },
              ].map((stat, i) => (
                <div key={i} className="text-left">
                  <div className="font-display text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Configurator Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:block"
          >
            {/* Glassmorphism wrapper */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent rounded-[2rem] blur-2xl" />
              <div className="relative backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-2xl p-5 shadow-2xl">
                <ConfiguratorPreview />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-50 to-transparent z-20" />

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
  );
}
