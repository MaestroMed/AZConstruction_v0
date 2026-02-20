/**
 * Gestion du consentement RGPD et Consent Mode V2
 * Conforme aux exigences CNIL et Google
 */

// Types pour le consentement
export interface ConsentPreferences {
  necessary: boolean; // Toujours true
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  timestamp: number;
  version: string;
}

// Version actuelle de la politique de cookies
export const CONSENT_VERSION = "1.0.0";

// Clé de stockage
const CONSENT_KEY = "az_cookie_consent";

// Durée de validité du consentement (13 mois max selon CNIL)
const CONSENT_DURATION_MS = 13 * 30 * 24 * 60 * 60 * 1000; // ~13 mois

// Déclaration TypeScript pour gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

/**
 * Récupère les préférences de consentement stockées
 */
export function getStoredConsent(): ConsentPreferences | null {
  if (typeof window === "undefined") return null;
  
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;
    
    const consent = JSON.parse(stored) as ConsentPreferences;
    
    // Vérifier si le consentement est encore valide
    const age = Date.now() - consent.timestamp;
    if (age > CONSENT_DURATION_MS) {
      localStorage.removeItem(CONSENT_KEY);
      return null;
    }
    
    // Vérifier si la version a changé
    if (consent.version !== CONSENT_VERSION) {
      localStorage.removeItem(CONSENT_KEY);
      return null;
    }
    
    return consent;
  } catch {
    return null;
  }
}

/**
 * Vérifie si le consentement a déjà été donné
 */
export function hasConsent(): boolean {
  return getStoredConsent() !== null;
}

/**
 * Sauvegarde les préférences de consentement
 */
export function saveConsent(preferences: Omit<ConsentPreferences, "necessary" | "timestamp" | "version">): void {
  if (typeof window === "undefined") return;
  
  const consent: ConsentPreferences = {
    necessary: true, // Toujours actif
    analytics: preferences.analytics,
    marketing: preferences.marketing,
    functional: preferences.functional,
    timestamp: Date.now(),
    version: CONSENT_VERSION,
  };
  
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  
  // Mettre à jour le Consent Mode V2 de Google
  updateGoogleConsent(consent);
  
  // Activer/désactiver les scripts marketing
  updateMarketingScripts(consent);
  
  // Émettre un événement personnalisé
  window.dispatchEvent(new CustomEvent("consent-updated", { detail: consent }));
}

/**
 * Accepte tous les cookies
 */
export function acceptAllCookies(): void {
  saveConsent({
    analytics: true,
    marketing: true,
    functional: true,
  });
}

/**
 * Refuse tous les cookies optionnels
 */
export function rejectAllCookies(): void {
  saveConsent({
    analytics: false,
    marketing: false,
    functional: false,
  });
}

/**
 * Met à jour le Consent Mode V2 de Google
 */
export function updateGoogleConsent(consent: ConsentPreferences): void {
  if (typeof window === "undefined" || !window.gtag) return;
  
  window.gtag("consent", "update", {
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
    analytics_storage: consent.analytics ? "granted" : "denied",
    functionality_storage: consent.functional ? "granted" : "denied",
    personalization_storage: consent.functional ? "granted" : "denied",
    security_storage: "granted", // Toujours autorisé
  });
}

/**
 * Initialise le Consent Mode V2 avec les valeurs par défaut (tout refusé)
 */
export function initializeConsentMode(): void {
  if (typeof window === "undefined") return;
  
  // Créer dataLayer si nécessaire
  window.dataLayer = window.dataLayer || [];
  
  // Fonction gtag si non définie
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  }
  
  // Consent Mode V2 par défaut - tout refusé
  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "denied",
    personalization_storage: "denied",
    security_storage: "granted",
    wait_for_update: 500, // Attendre 500ms pour le consentement
  });
  
  // Définir la région (France)
  window.gtag("set", "ads_data_redaction", true);
  window.gtag("set", "url_passthrough", true);
  
  // Si consentement déjà stocké, l'appliquer
  const stored = getStoredConsent();
  if (stored) {
    updateGoogleConsent(stored);
    updateMarketingScripts(stored);
  }
}

/**
 * Active/désactive les scripts marketing selon le consentement
 */
function updateMarketingScripts(consent: ConsentPreferences): void {
  if (typeof window === "undefined") return;
  
  // Facebook Pixel
  if (consent.marketing && window.fbq) {
    window.fbq("consent", "grant");
  }
  
  // Microsoft Clarity
  if (consent.analytics && window.clarity) {
    window.clarity("consent");
  }
}

/**
 * Obtient le texte de statut du consentement pour affichage
 */
export function getConsentStatus(): string {
  const consent = getStoredConsent();
  if (!consent) return "Non défini";
  
  const parts = [];
  if (consent.analytics) parts.push("Analytique");
  if (consent.marketing) parts.push("Marketing");
  if (consent.functional) parts.push("Fonctionnel");
  
  return parts.length > 0 ? parts.join(", ") : "Cookies essentiels uniquement";
}
