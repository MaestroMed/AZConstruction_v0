"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Paintbrush,
  Shield,
  Palette,
  Zap,
  ArrowRight,
  Phone,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

// Couleurs RAL populaires pour l'affichage
const featuredColors = [
  { name: "RAL 7016", label: "Gris Anthracite", hex: "#383E42" },
  { name: "RAL 9005", label: "Noir Profond", hex: "#0A0A0A" },
  { name: "RAL 9010", label: "Blanc Pur", hex: "#F7F7F7" },
  { name: "RAL 7035", label: "Gris Clair", hex: "#D7D7D7" },
  { name: "RAL 3004", label: "Rouge Bordeaux", hex: "#6B1C23" },
  { name: "RAL 6005", label: "Vert Mousse", hex: "#0E4243" },
];

const benefits = [
  { icon: Shield, text: "Garantie 10 ans" },
  { icon: Palette, text: "200+ couleurs RAL" },
  { icon: Zap, text: "Traitement express 48h" },
];

export default function ThermolaquageSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-navy-dark via-[#0d1f3c] to-blue-corporate relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-glow/5 blur-3xl pointer-events-none" />

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
            <div className="inline-flex items-center gap-2 bg-cyan-glow/20 backdrop-blur-sm border border-cyan-glow/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-glow" />
              <span className="text-cyan-glow text-sm font-medium">
                Service Premium
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Thermolaquage{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow to-blue-400">
                Professionnel
              </span>
            </h2>

            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Finition haut de gamme pour tous vos ouvrages métalliques. 
              Notre atelier équipé d'une cabine de 8m et d'un four XXL 
              garantit une qualité industrielle pour vos portails, garde-corps, 
              escaliers et structures.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap gap-6 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-white/80">
                  <benefit.icon className="w-5 h-5 text-cyan-glow" />
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
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
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-glow flex-shrink-0" />
                  <span className="text-white/70 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services/thermolaquage">
                <Button
                  size="lg"
                  className="bg-cyan-glow text-navy-dark hover:bg-cyan-pale w-full sm:w-auto"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Découvrir le service
                </Button>
              </Link>
              <a href="tel:+33123456789">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
                  icon={<Phone className="w-5 h-5" />}
                  iconPosition="left"
                >
                  01 23 45 67 89
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Content - Color Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Nuancier RAL
                  </h3>
                  <p className="text-white/60 text-sm">
                    Plus de 200 teintes disponibles
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-glow/20 to-blue-corporate/20 flex items-center justify-center">
                  <Paintbrush className="w-6 h-6 text-cyan-glow" />
                </div>
              </div>

              {/* Color Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {featuredColors.map((color, index) => (
                  <motion.div
                    key={color.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div
                      className="aspect-square rounded-xl mb-2 shadow-lg group-hover:scale-105 transition-transform relative overflow-hidden"
                      style={{ backgroundColor: color.hex }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2">
                        <span className="text-white text-xs font-medium">
                          {color.name}
                        </span>
                      </div>
                    </div>
                    <p className="text-white/60 text-xs text-center truncate">
                      {color.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <Link href="/couleurs-ral">
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Voir toutes les couleurs
                </Button>
              </Link>

              {/* Decorative gradient */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-glow/20 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-bold text-navy-dark text-sm">Garantie 10 ans</p>
                <p className="text-xs text-gray-500">Écaillage & décoloration</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}






