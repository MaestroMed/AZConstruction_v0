"use client";

import { useState, useEffect } from "react";

export type PerformanceTier = "low" | "standard" | "high";

/**
 * Hook SSR-safe qui détecte les capacités du périphérique et retourne un tier :
 *
 * - "high"     : iPhone 12+ ou PC puissant (CPU ≥8 cores, densité ≥3x, mémoire ≥8GB)
 * - "standard" : appareil moderne ordinaire (valeur par défaut)
 * - "low"      : appareil limité, connexion lente, ou prefers-reduced-motion activé
 *
 * Toujours "standard" côté serveur (SSR safe), évalue en useEffect côté client.
 */
export function usePerformanceTier(): PerformanceTier {
  // Défaut "standard" pour SSR + hydration initiale
  const [tier, setTier] = useState<PerformanceTier>("standard");

  useEffect(() => {
    if (typeof window === "undefined") return;

    // ── Critères LOW ─────────────────────────────────────
    // 1. L'utilisateur a activé "réduire les animations" au niveau OS/navigateur
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 2. Connexion lente
    const nav = navigator as Navigator & {
      connection?: { effectiveType?: string };
      deviceMemory?: number;
    };
    const slowConnection =
      nav.connection?.effectiveType === "slow-2g" ||
      nav.connection?.effectiveType === "2g";

    // 3. CPU très limité (≤2 cœurs)
    const lowCPU = typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 2;

    if (prefersReduced || slowConnection || lowCPU) {
      setTier("low");
      return;
    }

    // ── Critères HIGH ─────────────────────────────────────
    // 1. CPU puissant : ≥8 cœurs logiques (PC gaming, Mac M-series, iPad Pro)
    const highCPU =
      typeof navigator.hardwareConcurrency === "number" &&
      navigator.hardwareConcurrency >= 8;

    // 2. Écran haute densité ≥3x : iPhone 12+ (3x), Samsung Galaxy S (3x)
    const highDPR = typeof window.devicePixelRatio === "number" && window.devicePixelRatio >= 3;

    // 3. Mémoire suffisante (API non-standard, Chrome/Edge uniquement)
    const highMemory =
      typeof nav.deviceMemory === "number" && nav.deviceMemory >= 8;

    if (highCPU || (highDPR && !lowCPU) || highMemory) {
      setTier("high");
      return;
    }

    // ── Sinon standard ────────────────────────────────────
    setTier("standard");
  }, []);

  return tier;
}
