"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import ConfiguratorPreview from "./ConfiguratorPreview";
import HeroCarousel from "./HeroCarousel";

// Image par défaut
const DEFAULT_HERO_IMAGE = "/images/hero/atelier-facade.jpg";

interface HeroSettings {
  backgroundImage: string;
  backgroundOverlayOpacity: number;
  badge: string;
  badgeEnabled: boolean;
  headline: string;
  headlineAccent: string;
  headlineEnd: string;
  subheadline: string;
  ctaPrimaryText: string;
  ctaPrimaryLink: string;
  ctaSecondaryText: string;
  ctaSecondaryLink: string;
  promoEnabled: boolean;
  promoText: string;
  promoLink: string;
  promoBgColor: string;
  statsEnabled: boolean;
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  stat3Value: string;
  stat3Label: string;
}

const defaultSettings: HeroSettings = {
  backgroundImage: DEFAULT_HERO_IMAGE,
  backgroundOverlayOpacity: 70,
  badge: "Transformation métal, bois & verre depuis 2018",
  badgeEnabled: true,
  headline: "L'acier sur",
  headlineAccent: "mesure.",
  headlineEnd: "",
  subheadline: "Expert en métallerie sur mesure : garde-corps, escaliers, portes, fenêtres, portails et clôtures. Profilés Jansen.",
  ctaPrimaryText: "Découvrir nos produits",
  ctaPrimaryLink: "/produits",
  ctaSecondaryText: "Voir nos réalisations",
  ctaSecondaryLink: "/realisations",
  promoEnabled: false,
  promoText: "",
  promoLink: "",
  promoBgColor: "#dc2626",
  statsEnabled: true,
  stat1Value: "2018",
  stat1Label: "Depuis",
  stat2Value: "1500+",
  stat2Label: "Projets réalisés",
  stat3Value: "1800m²",
  stat3Label: "D'atelier",
};

export default function HeroSection() {
  const [settings, setSettings] = React.useState<HeroSettings>(defaultSettings);
  const [showConfigurator, setShowConfigurator] = React.useState(false);

  // Charger les paramètres depuis localStorage et API
  React.useEffect(() => {
    const loadSettings = async () => {
      // Charger les hero settings depuis localStorage
      const saved = localStorage.getItem("az_hero_settings");
      if (saved) {
        try {
          setSettings({ ...defaultSettings, ...JSON.parse(saved) });
        } catch (e) {
          console.error("Erreur parsing hero settings:", e);
        }
      }

      // Charger le toggle configurateur depuis l'API
      try {
        const response = await fetch("/api/settings");
        if (response.ok) {
          const data = await response.json();
          if (data.settings?.showConfigurator !== undefined) {
            setShowConfigurator(data.settings.showConfigurator);
          }
        }
      } catch (e) {
        console.error("Erreur chargement settings:", e);
      }
    };

    loadSettings();

    // Écouter les mises à jour
    const handleUpdate = (e: CustomEvent) => {
      setSettings({ ...defaultSettings, ...e.detail });
    };

    window.addEventListener("az_hero_updated", handleUpdate as EventListener);
    return () => {
      window.removeEventListener("az_hero_updated", handleUpdate as EventListener);
    };
  }, []);

  const heroImage = settings.backgroundImage || DEFAULT_HERO_IMAGE;

  return (
    <>
      {/* Promo Banner */}
      {settings.promoEnabled && settings.promoText && (
        <div
          className="fixed top-0 left-0 right-0 z-[60] py-2.5 px-4 text-center text-white text-sm font-medium"
          style={{ backgroundColor: settings.promoBgColor }}
        >
          {settings.promoLink ? (
            <Link href={settings.promoLink} className="hover:underline">
              {settings.promoText}
            </Link>
          ) : (
            settings.promoText
          )}
        </div>
      )}
    <section className={`relative min-h-screen overflow-hidden bg-[#0a0f1a] ${settings.promoEnabled ? "mt-10" : ""}`}>
      {/* Background Carousel - Photos des réalisations */}
      <HeroCarousel />

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
            {settings.badgeEnabled && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-white/70 mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {settings.badge}
              </motion.div>
            )}

            {/* Headline - Style Apple : clean, bold, minimal */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] tracking-tight mb-6">
              {settings.headline}{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  {settings.headlineAccent}
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
              <br />
              <span className="text-white/90">{settings.headlineEnd}</span>
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-white/60 max-w-lg leading-relaxed mb-10"
            >
              {settings.subheadline}
            </motion.p>

            {/* CTA Buttons - Style Apple */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href={settings.ctaPrimaryLink}>
                <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0a0f1a] font-semibold rounded-full text-base overflow-hidden transition-all hover:shadow-lg hover:shadow-white/20">
                  <span className="relative z-10">{settings.ctaPrimaryText}</span>
                  <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute inset-0 z-10 flex items-center justify-center gap-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>{settings.ctaPrimaryText}</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </Link>
              <Link href={settings.ctaSecondaryLink}>
                <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full text-base hover:bg-white/5 hover:border-white/30 transition-all">
                  <Play className="w-4 h-4" />
                  {settings.ctaSecondaryText}
                </button>
              </Link>
            </motion.div>

            {/* Stats - Style Apple minimal */}
            {settings.statsEnabled && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex gap-12 mt-16 pt-10 border-t border-white/10"
              >
                {[
                  { value: settings.stat1Value, label: settings.stat1Label },
                  { value: settings.stat2Value, label: settings.stat2Label },
                  { value: settings.stat3Value, label: settings.stat3Label },
                ].map((stat, i) => (
                  <div key={i} className="text-left">
                    <div className="font-display text-3xl md:text-4xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/50">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Right Column - Configurator Preview (conditionnel) */}
          {showConfigurator && (
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
          )}
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
    </>
  );
}
