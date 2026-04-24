"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import ConfiguratorPreview from "./ConfiguratorPreview";
import HeroCarousel, { type HeroSlide } from "./HeroCarousel";
import AnimatedHeroTitle from "./AnimatedHeroTitle";

/* ── Fallback statique si DB vide ── */
const DEFAULT_SLIDES: HeroSlide[] = [
  { id: "d1", ordre: 0, active: true, imageKey: "hero-carousel-1", headline: "Garde-corps", headlineAccent: "sur mesure.", subheadline: "Verre feuilleté, câbles acier, barreaux design — fabriqués dans notre atelier de 1 800m² à Bruyères-sur-Oise.", ctaText: "Découvrir les garde-corps", ctaLink: "/produits/garde-corps" },
  { id: "d2", ordre: 1, active: true, imageKey: "hero-carousel-2", headline: "Escaliers", headlineAccent: "d'exception.", subheadline: "Droits, hélicoïdaux, quart-tournant — chaque escalier est une pièce unique conçue sur mesure.", ctaText: "Voir nos escaliers", ctaLink: "/produits/escaliers" },
  { id: "d3", ordre: 2, active: true, imageKey: "hero-carousel-3", headline: "L'acier", headlineAccent: "à votre image.", subheadline: "Portails, clôtures, portes Jansen, verrières — tout fabriqué sur mesure depuis 2018.", ctaText: "Explorer nos produits", ctaLink: "/produits" },
];

interface HeroSettings {
  badge: string;
  badgeEnabled: boolean;
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
  badge: "Transformation métal, bois & verre depuis 2018",
  badgeEnabled: true,
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
  const [slides, setSlides] = React.useState<HeroSlide[]>(DEFAULT_SLIDES);
  const [slideIndex, setSlideIndex] = React.useState(0);

  React.useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      // Charger les slides depuis l'API
      try {
        const res = await fetch("/api/hero-slides", { signal: controller.signal });
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.slides?.length) {
            setSlides(data.slides);
          }
        }
      } catch (e) {
        console.error("Erreur chargement slides:", e);
      }

      // Charger les paramètres hero depuis localStorage
      try {
        const saved = localStorage.getItem("az_hero_settings");
        if (saved) setSettings({ ...defaultSettings, ...JSON.parse(saved) });
      } catch (e) {
        console.error("Erreur parsing hero settings:", e);
      }

      // Toggle configurateur
      try {
        const res = await fetch("/api/settings");
        if (res.ok) {
          const data = await res.json();
          if (data.settings?.showConfigurator !== undefined) {
            setShowConfigurator(data.settings.showConfigurator);
          }
        }
      } catch (e) {
        console.error("Erreur chargement settings:", e);
      }
    };

    load();

    const handleUpdate = (e: CustomEvent) => {
      setSettings({ ...defaultSettings, ...e.detail });
    };
    window.addEventListener("az_hero_updated", handleUpdate as EventListener);
    return () => {
      controller.abort();
      window.removeEventListener("az_hero_updated", handleUpdate as EventListener);
    };
  }, []);

  const currentSlide = slides[slideIndex] ?? slides[0];

  return (
    <>
      {/* Promo Banner */}
      {settings.promoEnabled && settings.promoText && (
        <div
          className="fixed top-0 left-0 right-0 z-[60] py-2.5 px-4 text-center text-white text-sm font-medium"
          style={{ backgroundColor: settings.promoBgColor }}
        >
          {settings.promoLink ? (
            <a href={settings.promoLink} className="hover:underline">{settings.promoText}</a>
          ) : settings.promoText}
        </div>
      )}

      <section className={`relative min-h-screen overflow-hidden bg-[#0a0f1a] ${settings.promoEnabled ? "mt-10" : ""}`}>
        {/* Background Carousel — slides gérés depuis /admin/hero-slides */}
        <HeroCarousel
          slides={slides}
          currentIndex={slideIndex}
          onIndexChange={setSlideIndex}
          onSlideChange={setSlideIndex}
        />

        {/* Grain texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />

        {/* Accent light */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none z-10">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)" }} />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 lg:px-12 pt-32 pb-20 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-200px)]">

            {/* Left Column — texte animé par slide */}
            <div className="relative max-w-2xl">
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

              {/* Headline animé par slide — stagger lettre par lettre + métallique */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={slideIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {currentSlide && (
                    <AnimatedHeroTitle
                      headline={currentSlide.headline}
                      headlineAccent={currentSlide.headlineAccent}
                      slideKey={slideIndex}
                    />
                  )}

                  <p className="text-lg md:text-xl text-white/60 max-w-lg leading-relaxed mb-10">
                    {currentSlide?.subheadline}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href={currentSlide?.ctaLink || "/produits"}>
                      <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0a0f1a] font-semibold rounded-full text-base overflow-hidden transition-all hover:shadow-lg hover:shadow-white/20">
                        <span className="relative z-10">{currentSlide?.ctaText}</span>
                        <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="absolute inset-0 z-10 flex items-center justify-center gap-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <span>{currentSlide?.ctaText}</span>
                          <ArrowRight className="w-5 h-5" />
                        </span>
                      </button>
                    </Link>
                    <Link href={settings.ctaSecondaryLink}>
                      <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full text-base hover:bg-white/5 hover:border-white/30 transition-all">
                        <Play className="w-4 h-4" />
                        {settings.ctaSecondaryText}
                      </button>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Stats */}
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
                      <div className="font-display text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-white/50">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Right Column — Configurator Preview (optionnel) */}
            {showConfigurator && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative hidden lg:block"
              >
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
