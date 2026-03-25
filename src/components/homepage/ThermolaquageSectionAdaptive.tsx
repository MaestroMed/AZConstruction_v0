"use client";

import ThermolaquageSection from "@/components/homepage/ThermolaquageSection";
import { usePerformanceTier } from "@/lib/hooks/usePerformanceTier";

/**
 * Wrapper client qui détecte les capacités du périphérique et adapte le rendu :
 * - tier "high"     → effets complets (version actuelle)
 * - tier "standard" → version allégée (lite=true, sans particules ni beams animés)
 * - tier "low"      → section masquée
 */
export default function ThermolaquageSectionAdaptive() {
  const tier = usePerformanceTier();

  if (tier === "low") return null;

  return <ThermolaquageSection lite={tier === "standard"} />;
}
