import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with clsx
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format price in EUR
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price);
}

/**
 * Format date in French locale
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
}

/**
 * Throttle function
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Generate a unique ID
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 11);
}

/**
 * Clamp a number between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Map a value from one range to another
 */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

/**
 * RAL Colors commonly used in metallurgy
 */
export const RAL_COLORS = {
  "RAL 7016": { name: "Gris anthracite", hex: "#383E42" },
  "RAL 9016": { name: "Blanc signalisation", hex: "#F6F6F6" },
  "RAL 7035": { name: "Gris clair", hex: "#CBD0CC" },
  "RAL 7039": { name: "Gris quartz", hex: "#6C6B5E" },
  "RAL 9005": { name: "Noir foncé", hex: "#0E0E10" },
  "RAL 3000": { name: "Rouge feu", hex: "#A72920" },
  "RAL 5015": { name: "Bleu ciel", hex: "#2271B3" },
  "RAL 6005": { name: "Vert mousse", hex: "#0F4336" },
  "RAL 8017": { name: "Brun chocolat", hex: "#442F29" },
  "RAL 1015": { name: "Ivoire clair", hex: "#E6D2B5" },
} as const;

/**
 * Product categories
 */
export const PRODUCT_CATEGORIES = [
  { id: "garde-corps", name: "Garde-corps", icon: "fence" },
  { id: "escaliers", name: "Escaliers", icon: "stairs" },
  { id: "portes", name: "Portes", icon: "door" },
  { id: "fenetres", name: "Fenêtres", icon: "window" },
  { id: "grilles-ventilation", name: "Grilles de ventilation", icon: "grid" },
  { id: "portails", name: "Portails", icon: "gate" },
  { id: "clotures", name: "Clôtures", icon: "grid" },
] as const;



