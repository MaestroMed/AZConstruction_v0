"use client";

import { useReportWebVitals } from "next/web-vitals";

// Types pour Web Vitals
type WebVitalMetric = {
  id: string;
  name: "CLS" | "FCP" | "FID" | "INP" | "LCP" | "TTFB";
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  delta: number;
  navigationType: "navigate" | "reload" | "back-forward" | "back-forward-cache" | "prerender";
};

// Seuils pour la notation (selon Google)
const THRESHOLDS = {
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  FID: { good: 100, poor: 300 },
  INP: { good: 200, poor: 500 },
  LCP: { good: 2500, poor: 4000 },
  TTFB: { good: 800, poor: 1800 },
};

// Fonction pour déterminer la notation
function getRating(name: WebVitalMetric["name"], value: number): WebVitalMetric["rating"] {
  const threshold = THRESHOLDS[name];
  if (!threshold) return "good";
  
  if (value <= threshold.good) return "good";
  if (value <= threshold.poor) return "needs-improvement";
  return "poor";
}

// Déclaration globale pour gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Composant pour reporter les Web Vitals vers GA4
 * Utilise le hook useReportWebVitals de Next.js
 */
export function WebVitals() {
  useReportWebVitals((metric) => {
    const rating = getRating(metric.name as WebVitalMetric["name"], metric.value);
    
    // Log en développement
    if (process.env.NODE_ENV === "development") {
      console.log(`[WebVital] ${metric.name}:`, {
        value: metric.value.toFixed(2),
        rating,
        id: metric.id,
      });
    }
    
    // Envoyer à Google Analytics 4
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", metric.name, {
        event_category: "Web Vitals",
        event_label: metric.id,
        value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
        non_interaction: true,
        // Paramètres personnalisés pour GA4
        metric_id: metric.id,
        metric_value: metric.value,
        metric_rating: rating,
        metric_delta: metric.delta,
      });
    }
    
    // Envoyer à Vercel Analytics (si disponible)
    if (typeof window !== "undefined" && "va" in window) {
      const va = window.va as (event: string, data: Record<string, unknown>) => void;
      va("vitals", {
        name: metric.name,
        value: metric.value,
        rating,
        id: metric.id,
      });
    }
  });

  return null;
}

/**
 * Hook pour mesurer des performances personnalisées
 */
export function usePerformanceMark() {
  const mark = (name: string) => {
    if (typeof window !== "undefined" && "performance" in window) {
      performance.mark(name);
    }
  };

  const measure = (name: string, startMark: string, endMark?: string) => {
    if (typeof window !== "undefined" && "performance" in window) {
      try {
        const measureName = `${name}_measure`;
        
        if (endMark) {
          performance.measure(measureName, startMark, endMark);
        } else {
          performance.measure(measureName, startMark);
        }
        
        const entries = performance.getEntriesByName(measureName);
        const duration = entries[entries.length - 1]?.duration || 0;
        
        // Envoyer à GA4
        if (window.gtag) {
          window.gtag("event", "custom_performance", {
            event_category: "Performance",
            event_label: name,
            value: Math.round(duration),
            non_interaction: true,
          });
        }
        
        return duration;
      } catch (e) {
        console.warn("Performance measure failed:", e);
        return 0;
      }
    }
    return 0;
  };

  return { mark, measure };
}

/**
 * Composant pour afficher les Web Vitals en développement
 */
export function WebVitalsDebug() {
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <div
      className="fixed bottom-4 right-4 bg-black/80 text-white text-xs p-3 rounded-lg font-mono z-50"
      id="web-vitals-debug"
    >
      <div className="text-gray-400 mb-1">Web Vitals</div>
      <div id="web-vitals-metrics">Chargement...</div>
    </div>
  );
}
