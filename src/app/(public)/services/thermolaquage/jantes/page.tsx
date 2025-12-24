"use client";

import { CircleDot, Shield, Palette, Sparkles } from "lucide-react";
import { ThermolaquageSubPageTemplate } from "@/components/thermolaquage";

const benefits = [
  {
    icon: Shield,
    title: "Résistance extrême",
    description: "Protection contre les gravillons, le sel et les produits chimiques. Durée de vie 15+ ans.",
  },
  {
    icon: Palette,
    title: "Personnalisation totale",
    description: "Mat, satiné, brillant ou métallisé. Toutes les teintes RAL disponibles.",
  },
  {
    icon: Sparkles,
    title: "Finition parfaite",
    description: "Aspect uniforme sans coulures ni traces. Qualité industrielle.",
  },
];

const colors = [
  { name: "Noir Mat", hex: "#1a1a1a" },
  { name: "Anthracite", hex: "#383E42" },
  { name: "Bronze", hex: "#8B7355" },
  { name: "Or Champagne", hex: "#C9A959" },
  { name: "Blanc Nacré", hex: "#F5F5F5" },
  { name: "Rouge Racing", hex: "#CC0000" },
  { name: "Bleu Nuit", hex: "#1E3A5F" },
  { name: "Vert British", hex: "#004225" },
];

const processSteps = [
  { step: "1", title: "Démontage & nettoyage", description: "Retrait des pneus, dégraissage complet des jantes." },
  { step: "2", title: "Sablage", description: "Décapage de l'ancienne peinture, préparation de la surface." },
  { step: "3", title: "Application poudre", description: "Projection électrostatique, épaisseur contrôlée 60-100µm." },
  { step: "4", title: "Cuisson", description: "Polymérisation au four à 180-200°C pendant 15-20 minutes." },
  { step: "5", title: "Remontage", description: "Remontage des pneus et équilibrage complet." },
];

export default function JantesPage() {
  return (
    <ThermolaquageSubPageTemplate
      badge="THERMOLAQUAGE JANTES"
      badgeIcon={CircleDot}
      title="Rénovation"
      titleAccent="Jantes"
      description="Transformez l'apparence de votre véhicule avec des jantes thermolaquées. Finition professionnelle, durabilité exceptionnelle, personnalisation infinie."
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
      stats={[
        { value: 15, suffix: "+", label: "Ans durabilité" },
        { value: 200, suffix: "+", label: "Teintes RAL" },
        { value: 48, suffix: "h", label: "Express dispo" },
      ]}
      benefits={benefits}
      colors={colors}
      processSteps={processSteps}
      ctaTitle="Envie de nouvelles jantes ?"
      ctaDescription="Envoyez-nous des photos pour un devis gratuit sous 24h. Livraison possible."
    />
  );
}
