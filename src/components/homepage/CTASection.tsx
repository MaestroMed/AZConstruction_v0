"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, BadgeCheck, Zap } from "lucide-react";
import {
  GlassCard,
  GlowButton,
  MeshGradient,
  ParticleBackground,
  GradientOrb,
  PhoneLink,
} from "@/components/ui";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <MeshGradient variant="aurora" className="absolute inset-0" />
      
      {/* Particles */}
      <ParticleBackground count={12} />
      
      {/* Gradient orbs */}
      <GradientOrb
        color="cyan"
        size="xl"
        position={{ top: "-20%", right: "-10%" }}
        blur="xl"
        opacity={0.2}
      />
      <GradientOrb
        color="blue"
        size="lg"
        position={{ bottom: "-10%", left: "20%" }}
        blur="lg"
        opacity={0.15}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <GlassCard variant="glow" padding="xl" className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                Contactez-nous dès maintenant pour un devis gratuit.
                Réponse garantie sous 24h, accompagnement personnalisé.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Link href="/contact">
                  <GlowButton size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                    Demander un devis gratuit
                  </GlowButton>
                </Link>
                <PhoneLink variant="button" className="justify-center" />
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-white/50 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Devis sous 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  <span>Fabrication rapide</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4" />
                  <span>Qualité professionnelle</span>
                </div>
              </div>
            </motion.div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}


