"use client";

import { Car, Shield, Wrench, Sparkles } from "lucide-react";
import { ThermolaquageSubPageTemplate } from "@/components/thermolaquage";

const benefits = [
  {
    icon: Shield,
    title: "Protection durable",
    description: "Résistance accrue aux chocs, rayures et intempéries. Finition qui dure.",
  },
  {
    icon: Wrench,
    title: "Restauration complète",
    description: "Idéal pour redonner vie aux pièces anciennes, abîmées ou rouillées.",
  },
  {
    icon: Sparkles,
    title: "Finition esthétique",
    description: "Large choix de couleurs et d'effets pour un look unique sur votre véhicule.",
  },
];

const colors = [
  { name: "Noir Brillant", hex: "#0A0A0A" },
  { name: "Gris Anthracite", hex: "#383E42" },
  { name: "Rouge Ferrari", hex: "#FF2800" },
  { name: "Bleu Électrique", hex: "#0066CC" },
  { name: "Blanc Glacier", hex: "#F8F8F8" },
  { name: "Orange Lamborghini", hex: "#FF6600" },
  { name: "Vert Racing", hex: "#006400" },
  { name: "Jaune Citron", hex: "#FFE135" },
];

const processSteps = [
  { step: "1", title: "Préparation", description: "Dégraissage, décapage et sablage des pièces pour une adhérence optimale." },
  { step: "2", title: "Application", description: "Projection électrostatique de la poudre polyester sur la surface." },
  { step: "3", title: "Polymérisation", description: "Cuisson à haute température pour fusion et durcissement parfaits." },
  { step: "4", title: "Contrôle", description: "Vérification minutieuse de la finition et de la résistance." },
];

export default function RenovationVoiturePage() {
  return (
    <ThermolaquageSubPageTemplate
      badge="RÉNOVATION AUTOMOBILE"
      badgeIcon={Car}
      title="Pièces"
      titleAccent="Automobiles"
      description="Redonnez une nouvelle vie à vos pièces de voiture avec une finition durable et esthétique. Capots, ailes, pare-chocs, châssis et plus encore."
      heroImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80"
      stats={[
        { value: 25, suffix: "+", label: "Ans durabilité" },
        { value: 200, suffix: "+", label: "Teintes RAL" },
        { value: 72, suffix: "h", label: "Délai moyen" },
      ]}
      benefits={benefits}
      colors={colors}
      processSteps={processSteps}
      ctaTitle="Un projet de restauration ?"
      ctaDescription="Contactez-nous pour un devis personnalisé et gratuit. Photos bienvenues."
    />
  );
}
