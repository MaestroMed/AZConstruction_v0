"use client";

import { Wrench, Shield, Factory, Zap } from "lucide-react";
import { ThermolaquageSubPageTemplate } from "@/components/thermolaquage";

const benefits = [
  {
    icon: Shield,
    title: "Protection maximale",
    description: "Résistance aux UV, corrosion et intempéries. Durée de vie 25+ ans.",
  },
  {
    icon: Factory,
    title: "Capacité industrielle",
    description: "Cabine 7m et four XXL pour pièces de toutes tailles.",
  },
  {
    icon: Zap,
    title: "Délais optimisés",
    description: "Service express disponible. Grandes séries traitées efficacement.",
  },
];

const colors = [
  { name: "RAL 7016", hex: "#383E42" },
  { name: "RAL 9005", hex: "#0A0A0A" },
  { name: "RAL 9010", hex: "#F7F7F7" },
  { name: "RAL 7035", hex: "#D7D7D7" },
  { name: "RAL 3004", hex: "#6B1C23" },
  { name: "RAL 5003", hex: "#1E3A5F" },
  { name: "RAL 6005", hex: "#0E4243" },
  { name: "RAL 8017", hex: "#442F29" },
];

const processSteps = [
  { step: "1", title: "Réception & devis", description: "Analyse des pièces, choix couleur et délai, devis détaillé." },
  { step: "2", title: "Préparation surface", description: "Dégraissage, sablage ou grenaillage selon le métal." },
  { step: "3", title: "Thermolaquage", description: "Application poudre et cuisson au four industriel." },
  { step: "4", title: "Livraison", description: "Contrôle qualité et livraison ou enlèvement." },
];

export default function PiecesMetalliquesPage() {
  return (
    <ThermolaquageSubPageTemplate
      badge="PIÈCES MÉTALLIQUES"
      badgeIcon={Wrench}
      title="Portails, Garde-corps &"
      titleAccent="Structures"
      description="Thermolaquage professionnel pour tous vos ouvrages métalliques : portails, garde-corps, escaliers, mobilier, grilles et structures industrielles."
      heroImage="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
      stats={[
        { value: 7, suffix: "m", label: "Cabine max" },
        { value: 200, suffix: "+", label: "Teintes RAL" },
        { value: 25, suffix: "+", label: "Ans durée" },
      ]}
      benefits={benefits}
      colors={colors}
      processSteps={processSteps}
      ctaTitle="Un projet de métallerie ?"
      ctaDescription="Devis gratuit sous 24h. Enlèvement et livraison sur toute la région."
    />
  );
}
