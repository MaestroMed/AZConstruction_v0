"use client";

import { useState, useEffect, useCallback } from "react";

export interface CompanyInfo {
  // Identité
  companyName: string;
  // Coordonnées
  address: string;
  codePostal: string;
  ville: string;
  fullAddress: string;
  phone: string;
  email: string;
  // Réseaux sociaux
  facebook: string;
  instagram: string;
  linkedin: string;
  // Logos
  logoUrl: string;
  logoLightUrl: string;
  faviconUrl: string;
  // Horaires
  horaires: {
    semaine: string;
    samedi: string;
    dimanche: string;
  };
}

interface CompanyInfoState {
  info: CompanyInfo;
  loading: boolean;
  error: Error | null;
}

// Valeurs par défaut
const DEFAULT_INFO: CompanyInfo = {
  companyName: "AZ Construction SARL",
  address: "23 Chemin du Bac des Aubins",
  codePostal: "95820",
  ville: "Bruyères-sur-Oise",
  fullAddress: "23 Chemin du Bac des Aubins, 95820 Bruyères-sur-Oise",
  phone: "+33 1 23 45 67 89",
  email: "contact@zaconstruction.fr",
  facebook: "https://facebook.com/azconstruction",
  instagram: "https://instagram.com/azconstruction",
  linkedin: "https://linkedin.com/company/azconstruction",
  logoUrl: "",
  logoLightUrl: "",
  faviconUrl: "",
  horaires: {
    semaine: "8h00 - 18h00",
    samedi: "9h00 - 12h00",
    dimanche: "Fermé",
  },
};

// Cache global
let cachedInfo: CompanyInfo | null = null;
let cachePromise: Promise<CompanyInfo> | null = null;

async function fetchCompanyInfo(): Promise<CompanyInfo> {
  try {
    const response = await fetch("/api/settings");
    if (!response.ok) throw new Error("Failed to fetch");
    
    const data = await response.json();
    const settings = data.settings || {};
    
    // Parser l'adresse si elle est formatée
    const addressParts = (settings.address || "").split(",").map((s: string) => s.trim());
    const address = addressParts[0] || DEFAULT_INFO.address;
    const codePostalVille = addressParts[1] || "";
    const [codePostal, ...villeParts] = codePostalVille.split(" ");
    
    return {
      companyName: settings.companyName || DEFAULT_INFO.companyName,
      address: settings.address || DEFAULT_INFO.address,
      codePostal: codePostal || DEFAULT_INFO.codePostal,
      ville: villeParts.join(" ") || DEFAULT_INFO.ville,
      fullAddress: settings.address 
        ? `${settings.address}` 
        : DEFAULT_INFO.fullAddress,
      phone: settings.phone || DEFAULT_INFO.phone,
      email: settings.email || DEFAULT_INFO.email,
      facebook: settings.facebook || DEFAULT_INFO.facebook,
      instagram: settings.instagram || DEFAULT_INFO.instagram,
      linkedin: settings.linkedin || DEFAULT_INFO.linkedin,
      logoUrl: settings.logoUrl || DEFAULT_INFO.logoUrl,
      logoLightUrl: settings.logoLightUrl || DEFAULT_INFO.logoLightUrl,
      faviconUrl: settings.faviconUrl || DEFAULT_INFO.faviconUrl,
      horaires: DEFAULT_INFO.horaires, // Pour l'instant, pas stocké en DB
    };
  } catch (error) {
    console.warn("Failed to fetch company info, using defaults:", error);
    return DEFAULT_INFO;
  }
}

/**
 * Hook pour récupérer les informations de l'entreprise
 * Utilise un cache global pour éviter les requêtes multiples
 */
export function useCompanyInfo(): CompanyInfoState & {
  getPhone: () => string;
  getPhoneLink: () => string;
  getEmail: () => string;
  getGoogleMapsLink: () => string;
} {
  const [state, setState] = useState<CompanyInfoState>({
    info: cachedInfo || DEFAULT_INFO,
    loading: !cachedInfo,
    error: null,
  });

  useEffect(() => {
    if (cachedInfo) {
      setState({ info: cachedInfo, loading: false, error: null });
      return;
    }

    if (!cachePromise) {
      cachePromise = fetchCompanyInfo();
    }

    cachePromise
      .then((info) => {
        cachedInfo = info;
        setState({ info, loading: false, error: null });
      })
      .catch((error) => {
        setState({ info: DEFAULT_INFO, loading: false, error });
      });
  }, []);

  const getPhone = useCallback(() => {
    return state.info.phone.replace(/\s/g, " ");
  }, [state.info.phone]);

  const getPhoneLink = useCallback(() => {
    return `tel:${state.info.phone.replace(/\s/g, "")}`;
  }, [state.info.phone]);

  const getEmail = useCallback(() => {
    return state.info.email;
  }, [state.info.email]);

  const getGoogleMapsLink = useCallback(() => {
    const address = encodeURIComponent(state.info.fullAddress);
    return `https://www.google.com/maps/search/?api=1&query=${address}`;
  }, [state.info.fullAddress]);

  return { ...state, getPhone, getPhoneLink, getEmail, getGoogleMapsLink };
}

/**
 * Invalide le cache (à appeler après une modification admin)
 */
export function invalidateCompanyInfoCache() {
  cachedInfo = null;
  cachePromise = null;
}

// Export des valeurs par défaut pour usage synchrone
export { DEFAULT_INFO };

