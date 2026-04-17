"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Paintbrush,
  Shield,
  Palette,
  Zap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Play,
  Pause,
} from "lucide-react";
import { GlowButton, GlassCard, MeshGradient, ParticleBackground, GradientOrb, PhoneLink } from "@/components/ui";

// Couleurs RAL populaires pour l'affichage (étendu à 12 pour la homepage)
const featuredColors = [
  { name: "RAL 7016", label: "Gris Anthracite", hex: "#383E42" },
  { name: "RAL 9005", label: "Noir Profond", hex: "#0A0A0A" },
  { name: "RAL 9010", label: "Blanc Pur", hex: "#F7F7F7" },
  { name: "RAL 7035", label: "Gris Clair", hex: "#D7D7D7" },
  { name: "RAL 3004", label: "Rouge Bordeaux", hex: "#6B1C23" },
  { name: "RAL 6005", label: "Vert Mousse", hex: "#0E4243" },
  { name: "RAL 5003", label: "Bleu Saphir", hex: "#1E3A5F" },
  { name: "RAL 1015", label: "Ivoire Clair", hex: "#E6D2B5" },
  { name: "RAL 2004", label: "Orange Pur", hex: "#E75B12" },
  { name: "RAL 8017", label: "Brun Chocolat", hex: "#442F29" },
  { name: "RAL 1021", label: "Jaune Colza", hex: "#EEC900" },
  { name: "RAL 4005", label: "Lilas Bleu", hex: "#6C4675" },
];

const benefits = [
  { icon: Palette, text: "200+ couleurs RAL" },
  { icon: Zap, text: "Express 48h dispo" },
  { icon: Shield, text: "Garantie sur demande" },
];

export default function ThermolaquageSection({ lite = false }: { lite?: boolean }) {
  const [colorIndex, setColorIndex] = React.useState(0);
  const [isAutoMode, setIsAutoMode] = React.useState(true);
  const autoResumeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  
  const selectedColor = featuredColors[colorIndex];

  // Auto-cycle effect - change color every 3 seconds when in auto mode
  React.useEffect(() => {
    if (!isAutoMode) return;
    
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % featuredColors.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isAutoMode]);

  // Resume auto-mode after 5 seconds of inactivity
  const handleColorClick = (index: number) => {
    setColorIndex(index);
    setIsAutoMode(false);
    
    // Clear existing timeout
    if (autoResumeTimeoutRef.current) {
      clearTimeout(autoResumeTimeoutRef.current);
    }
    
    // Set new timeout to resume auto mode after 5 seconds
    autoResumeTimeoutRef.current = setTimeout(() => {
      setIsAutoMode(true);
    }, 5000);
  };

  // Toggle auto mode manually
  const toggleAutoMode = () => {
    setIsAutoMode((prev) => !prev);
    if (autoResumeTimeoutRef.current) {
      clearTimeout(autoResumeTimeoutRef.current);
    }
  };

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (autoResumeTimeoutRef.current) {
        clearTimeout(autoResumeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Base Background */}
      <MeshGradient variant="aurora" className="absolute inset-0" />
      
      {/* DYNAMIC RAL COLOR BACKGROUND - INTENSE Full section effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(ellipse 150% 120% at 75% 50%, ${selectedColor.hex}70 0%, ${selectedColor.hex}45 30%, ${selectedColor.hex}20 60%, transparent 85%)`,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      
      {/* SWEEPING REVEAL RAY - Big dramatic effect on color change */}
      {!lite && (
        <motion.div
          key={`ray-${colorIndex}`}
          className="absolute inset-0 pointer-events-none"
          style={{ 
            background: `linear-gradient(105deg, transparent 0%, transparent 35%, ${selectedColor.hex}90 48%, ${selectedColor.hex} 50%, ${selectedColor.hex}90 52%, transparent 65%, transparent 100%)`,
          }}
          initial={{ x: "-150%", opacity: 1 }}
          animate={{ x: "150%", opacity: 0.3 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
      
      {/* Secondary wave */}
      {!lite && (
        <motion.div
          key={`wave-${colorIndex}`}
          className="absolute inset-0 pointer-events-none"
          style={{ 
            background: `linear-gradient(95deg, transparent 40%, ${selectedColor.hex}50 49%, ${selectedColor.hex}70 50%, ${selectedColor.hex}50 51%, transparent 60%)`,
          }}
          initial={{ x: "-120%", opacity: 0.8 }}
          animate={{ x: "120%", opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.15 }}
        />
      )}
      
      {/* Intense pulsing color wash */}
      {!lite && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: [
              `radial-gradient(circle 800px at 85% 40%, ${selectedColor.hex}50 0%, transparent 70%)`,
              `radial-gradient(circle 900px at 75% 55%, ${selectedColor.hex}65 0%, transparent 75%)`,
              `radial-gradient(circle 800px at 85% 40%, ${selectedColor.hex}50 0%, transparent 70%)`,
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      
      {/* Particles */}
      {!lite && <ParticleBackground count={10} />}
      
      {/* MEGA Gradient orbs - Intense RAL colors */}
      {!lite && (
        <>
          <motion.div
            className="absolute w-[800px] h-[800px] rounded-full pointer-events-none"
            style={{ top: "-10%", right: "-20%", filter: "blur(80px)" }}
            animate={{
              backgroundColor: `${selectedColor.hex}`,
              opacity: [0.5, 0.7, 0.5],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              backgroundColor: { duration: 0.6 },
              opacity: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ bottom: "-5%", left: "-10%", filter: "blur(60px)" }}
            animate={{
              backgroundColor: `${selectedColor.hex}`,
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.15, 1],
            }}
            transition={{ 
              backgroundColor: { duration: 0.6 },
              opacity: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
            }}
          />
        </>
      )}
      
      {/* Vertical light beam - prominent */}
      {!lite && (
        <>
          <motion.div
            className="absolute top-0 h-full pointer-events-none"
            style={{ right: "30%", width: "300px", filter: "blur(50px)" }}
            animate={{
              background: `linear-gradient(180deg, ${selectedColor.hex}00 0%, ${selectedColor.hex}60 25%, ${selectedColor.hex}80 50%, ${selectedColor.hex}60 75%, ${selectedColor.hex}00 100%)`,
              opacity: isAutoMode ? [0.4, 0.7, 0.4] : 0.5,
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Horizontal accent beam */}
          <motion.div
            className="absolute left-0 w-full pointer-events-none"
            style={{ top: "40%", height: "200px", filter: "blur(40px)" }}
            animate={{
              background: `linear-gradient(90deg, transparent 0%, ${selectedColor.hex}40 30%, ${selectedColor.hex}60 50%, ${selectedColor.hex}40 70%, transparent 100%)`,
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 glass-card-glow px-5 py-2.5 mb-8"
            >
              <Sparkles className="w-4 h-4 text-cyan-glow" />
              <span className="text-cyan-glow text-sm font-medium tracking-wide">
                SERVICE PREMIUM
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Thermolaquage{" "}
              <span className="text-gradient-premium">
                Professionnel
              </span>
            </h2>

            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Finition haut de gamme pour tous vos ouvrages métalliques. 
              Notre atelier équipé d&apos;une cabine accueillant des pièces <span className="text-cyan-glow font-semibold">jusqu&apos;à 7m</span> et d&apos;un four XXL 
              garantit une qualité industrielle pour vos portails, garde-corps, 
              escaliers et structures.
            </p>

            {/* Benefits - Glass cards */}
            <div className="flex flex-wrap gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="glass-card px-4 py-3 flex items-center gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <benefit.icon className="w-5 h-5 text-cyan-glow" />
                  <span className="text-white/90 text-sm font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Features list */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {[
                "Résistance UV maximale",
                "Procédé sans solvant",
                "Finition uniforme",
                "Teintes spéciales disponibles",
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-glow flex-shrink-0" />
                  <span className="text-white/70 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/services/thermolaquage">
                <GlowButton size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Découvrir le service
                </GlowButton>
              </Link>
              <PhoneLink variant="button" className="justify-center" />
              <a
                href="https://azepoxy.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500/10 text-orange-200 border border-orange-400/30 rounded-xl hover:bg-orange-500/20 hover:text-orange-100 transition-all text-sm font-medium"
              >
                Site dédié azepoxy.fr ↗
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Color Showcase with Auto-Cycle */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main card - Glassmorphism with subtle color tint */}
            <GlassCard 
              variant="spotlight" 
              padding="xl" 
              className="relative overflow-hidden backdrop-blur-xl"
              style={{
                background: `linear-gradient(135deg, rgba(20,25,40,0.85) 0%, rgba(20,25,40,0.7) 100%)`,
                borderColor: `${selectedColor.hex}40`,
                transition: 'border-color 0.6s ease-in-out'
              }}
            >
              {/* Subtle inner glow from selected color */}
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-2xl"
                animate={{
                  boxShadow: `inset 0 0 60px ${selectedColor.hex}20, inset 0 0 120px ${selectedColor.hex}10`,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              {/* Header with Auto Mode Toggle */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Nuancier RAL
                  </h3>
                  <p className="text-white/60 text-sm">
                    Plus de 200 teintes disponibles
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {/* Auto Mode Indicator */}
                  <button
                    onClick={toggleAutoMode}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      isAutoMode
                        ? "bg-cyan-glow/20 text-cyan-glow ring-1 ring-cyan-glow/30"
                        : "bg-white/10 text-white/60 ring-1 ring-white/10"
                    }`}
                  >
                    {isAutoMode ? (
                      <>
                        <Pause className="w-3 h-3" />
                        Auto
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3" />
                        Manuel
                      </>
                    )}
                  </button>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-glow/20 to-blue-corporate/20 flex items-center justify-center ring-1 ring-white/10">
                    <Paintbrush className="w-6 h-6 text-cyan-glow" />
                  </div>
                </div>
              </div>

              {/* Selected Color Preview - Harmonized smooth animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedColor.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative mb-8 p-5 rounded-2xl flex items-center gap-5 overflow-hidden ring-1 ring-white/10"
                  style={{ 
                    background: `linear-gradient(135deg, ${selectedColor.hex}40 0%, ${selectedColor.hex}15 100%)`,
                  }}
                >
                  {/* Color swatch - clean design */}
                  <motion.div
                    className="relative w-20 h-20 rounded-xl shadow-xl ring-2 ring-white/20 overflow-hidden flex-shrink-0"
                    animate={{ 
                      backgroundColor: selectedColor.hex,
                      boxShadow: `0 4px 24px ${selectedColor.hex}50`,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Shine overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-black/10" />
                  </motion.div>
                  
                  <div className="relative z-10 flex-1">
                    <p className="text-cyan-glow text-xs font-semibold tracking-wider mb-0.5">
                      {selectedColor.name}
                    </p>
                    <p className="text-white font-bold text-xl leading-tight">
                      {selectedColor.label}
                    </p>
                    <p className="text-white/40 text-xs mt-1 font-mono">{selectedColor.hex}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Color Grid */}
              <div className="grid grid-cols-6 gap-3 mb-8">
                {featuredColors.map((color, index) => (
                  <motion.button
                    key={color.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    onClick={() => handleColorClick(index)}
                    className={`
                      aspect-square rounded-xl shadow-lg transition-all duration-300 hover:scale-110 relative
                      ${colorIndex === index
                        ? "ring-3 ring-cyan-glow scale-110"
                        : "ring-1 ring-white/10 hover:ring-white/30"
                      }
                    `}
                    style={{ backgroundColor: color.hex }}
                  >
                    {/* Active indicator dot */}
                    {colorIndex === index && isAutoMode && (
                      <motion.div
                        className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-glow rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Progress bar for auto mode */}
              {isAutoMode && (
                <div className="mb-6">
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-glow to-blue-400"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                      key={colorIndex}
                    />
                  </div>
                </div>
              )}

              {/* CTA */}
              <Link href="/services/thermolaquage">
                <GlowButton
                  variant="secondary"
                  className="w-full"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Voir toutes les couleurs
                </GlowButton>
              </Link>
            </GlassCard>

            {/* Floating badge - Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 glass-card-light p-4 flex items-center gap-3 shadow-2xl"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-navy-dark text-sm">Livraison Île-de-France</p>
                <p className="text-xs text-gray-500">Enlèvement disponible</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Gammes carousel ── */}
      <GammesCarousel />
    </section>
  );
}

// ── Gammes carousel ────────────────────────────────────────────────────────
const gammes = [
  {
    id: "ral",
    slug: "/couleurs-ral",
    nom: "RAL Classique",
    subtitle: "200+ teintes standard",
    description: "Toute la palette RAL Classic disponible en thermolaquage poudre époxy.",
    swatches: ["#383E42", "#0A0A0A", "#F7F7F7", "#D7D7D7", "#007CB0", "#0E4243"],
    bg: "from-slate-900 via-slate-800 to-gray-900",
    accent: "#00d4ff",
  },
  {
    id: "patina",
    slug: "/couleurs-ral/patina",
    nom: "Patina Collection",
    subtitle: "Oxide & Corten Effects",
    description: "Effets oxyde et corten — patines naturelles pour un rendu authentique.",
    swatches: ["#A0522D", "#8B6042", "#4A8B7A", "#C4A882", "#7A6E5C", "#5C4030"],
    bg: "from-amber-950 via-orange-900 to-stone-900",
    accent: "#D4823A",
  },
  {
    id: "polaris",
    slug: "/couleurs-ral/polaris",
    nom: "Polaris Collection",
    subtitle: "For Industrial Design",
    description: "Finitions métalliques et structurées pour projets industriels exigeants.",
    swatches: ["#5A6E82", "#B8B8B0", "#4A7280", "#808890", "#C0C0B8", "#686868"],
    bg: "from-slate-900 via-blue-950 to-slate-800",
    accent: "#6B9AC4",
  },
  {
    id: "dichroic",
    slug: "/couleurs-ral/dichroic",
    nom: "Dichroic Collection",
    subtitle: "Effets dichroïques",
    description: "Reflets changeants selon la lumière — un effet irisé unique.",
    swatches: ["#5050A0", "#808040", "#A04020", "#6080A0", "#607040", "#8040A0"],
    bg: "from-violet-950 via-purple-900 to-indigo-950",
    accent: "#A855F7",
  },
  {
    id: "sfera",
    slug: "/couleurs-ral/sfera",
    nom: "Sfera Collection",
    subtitle: "Effets anodisés",
    description: "Cuivre, bronze, aluminium anodisé — finitions cosmos double couche.",
    swatches: ["#B87333", "#D4A520", "#2A5A8A", "#2E8B57", "#8B6914", "#C0C0C8"],
    bg: "from-amber-900 via-yellow-900 to-stone-900",
    accent: "#E8A84A",
  },
];

function GammesCarousel() {
  const [idx, setIdx] = React.useState(0);

  return (
    <div className="mt-16 relative">
      <div className="text-center mb-8">
        <span className="inline-block text-cyan-glow font-semibold text-xs tracking-widest uppercase mb-3">
          Nos gammes de finitions
        </span>
        <h3 className="text-2xl font-bold text-white">
          Du RAL classique aux effets spéciaux
        </h3>
      </div>

      {/* Horizontal scroll */}
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 lg:justify-center">
        {gammes.map((gamme, i) => (
          <Link key={gamme.id} href={gamme.slug} className="flex-shrink-0 snap-start">
            <motion.div
              whileHover={{ y: -4 }}
              className={`w-64 rounded-2xl overflow-hidden bg-gradient-to-br ${gamme.bg} border border-white/10 group cursor-pointer`}
            >
              {/* Color swatches strip */}
              <div className="flex gap-1 p-3 pb-0">
                {gamme.swatches.map((hex, si) => (
                  <div
                    key={si}
                    className="w-8 h-8 rounded-lg ring-1 ring-white/10 flex-shrink-0"
                    style={{ backgroundColor: hex }}
                  />
                ))}
              </div>
              <div className="p-4 pt-3">
                <p className="text-white font-bold text-base mb-0.5 group-hover:text-cyan-glow transition-colors">
                  {gamme.nom}
                </p>
                <p className="text-white/40 text-xs mb-2">{gamme.subtitle}</p>
                <p className="text-white/50 text-xs leading-relaxed line-clamp-2">
                  {gamme.description}
                </p>
                <div className="mt-3 flex items-center gap-1 text-xs font-medium" style={{ color: gamme.accent }}>
                  Découvrir
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Dot nav */}
      <div className="flex justify-center gap-2 mt-4">
        {gammes.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all ${i === 0 ? "w-6 h-1.5 bg-cyan-glow" : "w-1.5 h-1.5 bg-white/20"}`}
          />
        ))}
      </div>
    </div>
  );
}
