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
  { icon: Shield, text: "Protection 25+ ans" },
  { icon: Palette, text: "200+ couleurs RAL" },
  { icon: Zap, text: "Express 48h dispo" },
];

export default function ThermolaquageSection() {
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
      {/* Background */}
      <MeshGradient variant="aurora" className="absolute inset-0" />
      
      {/* Particles */}
      <ParticleBackground count={10} />
      
      {/* Gradient orbs */}
      <GradientOrb
        color="cyan"
        size="xl"
        position={{ top: "10%", right: "-10%" }}
        blur="xl"
        opacity={0.15}
      />
      <GradientOrb
        color="blue"
        size="lg"
        position={{ bottom: "10%", left: "-5%" }}
        blur="lg"
        opacity={0.1}
      />

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
              Notre atelier équipé d&apos;une cabine de <span className="text-cyan-glow font-semibold">7m</span> et d&apos;un four XXL 
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
                "Zéro COV - Écologique",
                "Finition uniforme",
                "Anti-corrosion 25+ ans",
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
            {/* Main card - Glassmorphism */}
            <GlassCard variant="spotlight" padding="xl" className="relative">
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

              {/* Selected Color Preview with Animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedColor.name}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="mb-8 p-6 rounded-2xl ring-1 ring-white/10 flex items-center gap-6"
                  style={{ backgroundColor: `${selectedColor.hex}20` }}
                >
                  <motion.div
                    className="w-20 h-20 rounded-xl shadow-2xl ring-4 ring-white/10 relative overflow-hidden"
                    style={{ backgroundColor: selectedColor.hex }}
                    animate={{ 
                      backgroundColor: selectedColor.hex,
                      boxShadow: isAutoMode 
                        ? [
                            `0 0 20px ${selectedColor.hex}40`,
                            `0 0 40px ${selectedColor.hex}60`,
                            `0 0 20px ${selectedColor.hex}40`
                          ]
                        : `0 0 20px ${selectedColor.hex}40`
                    }}
                    transition={{ 
                      backgroundColor: { duration: 0.5 },
                      boxShadow: { duration: 1.5, repeat: isAutoMode ? Infinity : 0, repeatType: "reverse" }
                    }}
                  >
                    {/* Subtle pulse effect when in auto mode */}
                    {isAutoMode && (
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        animate={{ opacity: [0, 0.3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                  <div>
                    <p className="text-cyan-glow text-sm font-medium mb-1">
                      {selectedColor.name}
                    </p>
                    <p className="text-white font-bold text-lg">
                      {selectedColor.label}
                    </p>
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
                <p className="font-bold text-navy-dark text-sm">Protection 25+ ans</p>
                <p className="text-xs text-gray-500">Écaillage & décoloration</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
