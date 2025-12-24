"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  ChevronLeft,
  LucideIcon,
} from "lucide-react";
import {
  GlassCard,
  GlassCardIcon,
  GlassCardTitle,
  GlassCardDescription,
  GlowButton,
  MeshGradient,
  ParticleBackground,
  GradientOrb,
  AnimatedCounter,
} from "@/components/ui";

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ColorFinish {
  name: string;
  hex: string;
}

interface ThermolaquageSubPageProps {
  // Hero section
  badge: string;
  badgeIcon: LucideIcon;
  title: string;
  titleAccent: string;
  description: string;
  heroImage: string;
  
  // Stats (optional)
  stats?: Array<{ value: number; suffix: string; label: string }>;
  
  // Benefits section
  benefits: Benefit[];
  
  // Colors section
  colors: ColorFinish[];
  
  // Process section
  processSteps: ProcessStep[];
  
  // CTA section
  ctaTitle: string;
  ctaDescription: string;
}

export default function ThermolaquageSubPageTemplate({
  badge,
  badgeIcon: BadgeIcon,
  title,
  titleAccent,
  description,
  heroImage,
  stats,
  benefits,
  colors,
  processSteps,
  ctaTitle,
  ctaDescription,
}: ThermolaquageSubPageProps) {
  const [selectedColor, setSelectedColor] = React.useState(colors[0]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <MeshGradient variant="animated" className="absolute inset-0" />
        
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
          position={{ bottom: "20%", left: "-5%" }}
          blur="lg"
          opacity={0.1}
        />
        
        <ParticleBackground count={10} />
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={`${title} ${titleAccent}`}
            fill
            priority
            className="object-cover object-center opacity-15"
            quality={85}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 py-32">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/services/thermolaquage"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Retour au thermolaquage
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 glass-card-glow px-5 py-2.5 mb-8"
              >
                <BadgeIcon className="w-4 h-4 text-cyan-glow" />
                <span className="text-cyan-glow text-sm font-medium tracking-wide">
                  {badge}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]"
              >
                {title}{" "}
                <span className="text-gradient-premium">{titleAccent}</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-white/70 mb-10 leading-relaxed"
              >
                {description}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/contact">
                  <GlowButton size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                    Demander un devis
                  </GlowButton>
                </Link>
                <a href="tel:+33494000000">
                  <GlowButton
                    variant="outline"
                    size="lg"
                    icon={<Phone className="w-5 h-5" />}
                    iconPosition="left"
                    glow={false}
                  >
                    04 94 XX XX XX
                  </GlowButton>
                </a>
              </motion.div>
            </div>

            {/* Hero Image Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <GlassCard variant="glow" padding="md" className="overflow-hidden">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                  <Image
                    src={heroImage}
                    alt={`${title} ${titleAccent}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </GlassCard>
            </motion.div>
          </div>

          {/* Stats */}
          {stats && stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 md:gap-6 max-w-xl mt-12"
            >
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2} />
                  </div>
                  <p className="text-white/60 text-xs">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ============================================
          BENEFITS SECTION
          ============================================ */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Pourquoi nous{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                choisir
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="glass-card-light p-8 h-full text-center group hover:scale-[1.02] transition-transform">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center mx-auto mb-6 group-hover:from-cyan-200 group-hover:to-blue-200 transition-colors">
                    <benefit.icon className="w-8 h-8 text-blue-corporate" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-dark mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          COLORS SECTION
          ============================================ */}
      <section className="py-24 bg-navy-dark relative overflow-hidden">
        <MeshGradient variant="aurora" className="absolute inset-0" />
        
        <GradientOrb
          color="cyan"
          size="lg"
          position={{ top: "20%", left: "10%" }}
          blur="xl"
          opacity={0.1}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Finitions Populaires
            </h2>
            <p className="text-white/70">
              Quelques exemples parmi les 200+ teintes disponibles.
            </p>
          </motion.div>

          {/* Color Preview */}
          <motion.div
            className="max-w-md mx-auto mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <GlassCard variant="glow" padding="lg" className="text-center">
              <motion.div
                className="w-24 h-24 rounded-full mx-auto mb-4 shadow-2xl ring-4 ring-white/10"
                style={{ backgroundColor: selectedColor.hex }}
                animate={{ backgroundColor: selectedColor.hex }}
                transition={{ duration: 0.3 }}
              />
              <p className="text-white font-medium">{selectedColor.name}</p>
              <p className="text-white/50 text-sm">{selectedColor.hex}</p>
            </GlassCard>
          </motion.div>

          {/* Color Grid */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 max-w-4xl mx-auto">
            {colors.map((color, index) => (
              <motion.button
                key={color.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                onClick={() => setSelectedColor(color)}
                className={`aspect-square rounded-xl shadow-lg transition-all duration-300 hover:scale-110 ${
                  selectedColor.name === color.name
                    ? "ring-3 ring-cyan-glow scale-110"
                    : "ring-1 ring-white/10"
                }`}
                style={{ backgroundColor: color.hex }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          PROCESS SECTION
          ============================================ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Comment ça{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                marche
              </span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {processSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-glow to-cyan-light flex items-center justify-center text-navy-dark font-bold text-xl flex-shrink-0 shadow-lg shadow-cyan-glow/30 group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <div className="glass-card-light p-6 flex-1 group-hover:shadow-xl transition-shadow">
                    <h3 className="font-bold text-navy-dark text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
          ============================================ */}
      <section className="py-24 relative overflow-hidden">
        <MeshGradient variant="aurora" className="absolute inset-0" />
        <ParticleBackground count={8} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard variant="glow" padding="xl" className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {ctaTitle}
              </h2>
              <p className="text-white/70 text-lg mb-8">
                {ctaDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <GlowButton size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                    Demander un devis gratuit
                  </GlowButton>
                </Link>
                <a href="tel:+33494000000">
                  <GlowButton
                    variant="outline"
                    size="lg"
                    icon={<Phone className="w-5 h-5" />}
                    iconPosition="left"
                    glow={false}
                  >
                    04 94 XX XX XX
                  </GlowButton>
                </a>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

