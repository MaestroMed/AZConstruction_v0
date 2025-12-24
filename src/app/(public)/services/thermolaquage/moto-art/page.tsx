"use client";

import { Bike, Palette, Award, Sparkles } from "lucide-react";
import { ThermolaquageSubPageTemplate } from "@/components/thermolaquage";

const benefits = [
  {
    icon: Palette,
    title: "Créativité sans limite",
    description: "Effets spéciaux, dégradés, métallisés. Exprimez votre style unique.",
  },
  {
    icon: Award,
    title: "Qualité show-room",
    description: "Finition digne des plus belles expositions et concours.",
  },
  {
    icon: Sparkles,
    title: "Art & durabilité",
    description: "Protection longue durée sans compromettre l'esthétique.",
  },
];

const colors = [
  { name: "Candy Red", hex: "#9B111E" },
  { name: "Pearl White", hex: "#F0EAD6" },
  { name: "Midnight Purple", hex: "#4B0082" },
  { name: "Sunset Orange", hex: "#FA5F55" },
  { name: "Chrome Effect", hex: "#C0C0C0" },
  { name: "Electric Blue", hex: "#7DF9FF" },
  { name: "Emerald Green", hex: "#50C878" },
  { name: "Gold Metallic", hex: "#D4AF37" },
];

const processSteps = [
  { step: "1", title: "Conception", description: "Discussion du design, choix des couleurs et effets spéciaux souhaités." },
  { step: "2", title: "Préparation", description: "Démontage, sablage fin et primaire d'accroche spécial." },
  { step: "3", title: "Application artistique", description: "Multicouches, masquages, effets personnalisés." },
  { step: "4", title: "Finition", description: "Vernis haute protection, polissage et contrôle qualité." },
];

export default function MotoArtPage() {
  return (
    <ThermolaquageSubPageTemplate
      badge="MOTO ART"
      badgeIcon={Bike}
      title="Moto &"
      titleAccent="Art Métal"
      description="Carcasses de moto, réservoirs, cadres et sculptures métalliques artistiques. Transformez le métal en œuvre d'art avec des finitions exceptionnelles."
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
      stats={[
        { value: 50, suffix: "+", label: "Projets art" },
        { value: 200, suffix: "+", label: "Effets dispo" },
        { value: 100, suffix: "%", label: "Sur mesure" },
      ]}
      benefits={benefits}
      colors={colors}
      processSteps={processSteps}
      ctaTitle="Un projet artistique ?"
      ctaDescription="Partagez votre vision. Nous créons ensemble une pièce unique."
    />
  );
}
