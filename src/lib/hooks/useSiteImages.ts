"use client";

import { useState, useEffect, useCallback } from "react";

interface SiteImage {
  key: string;
  category: string;
  label: string;
  description: string;
  imageUrl: string | null;
  videoUrl?: string | null;
  fallbackUrl: string;
  url: string;
}

interface SiteImagesState {
  images: Record<string, string>; // key -> url
  videos: Record<string, string>; // key -> video url
  zooms: Record<string, number>; // key -> zoom factor (1.0 = normal)
  customImages: Set<string>; // keys of images that have custom URLs (not fallbacks)
  loading: boolean;
  error: Error | null;
}

// Cache global pour éviter les requêtes multiples
let cachedImages: Record<string, string> | null = null;
let cachePromise: Promise<FetchResult> | null = null;

// Images fallback locales (utilisées si l'API échoue)
const FALLBACK_IMAGES: Record<string, string> = {
  // Hero
  "hero-homepage": "/placeholder.svg",
  "hero-thermolaquage": "/placeholder.svg",
  "hero-particuliers": "/placeholder.svg",
  "hero-professionnels": "/placeholder.svg",
  "hero-a-propos": "/placeholder.svg",
  "hero-contact": "/placeholder.svg",
  "hero-carousel-1": "/placeholder.svg",
  "hero-carousel-2": "/placeholder.svg",
  "hero-carousel-3": "/placeholder.svg",
  "hero-carousel-4": "/placeholder.svg",
  "hero-carousel-5": "/placeholder.svg",
  "hero-carousel-6": "/placeholder.svg",
  
  // Products
  "product-garde-corps": "/placeholder.svg",
  "product-escaliers": "/placeholder.svg",
  "product-portails": "/placeholder.svg",
  "product-clotures": "/placeholder.svg",
  "product-pergolas": "/placeholder.svg",
  "product-marquises": "/placeholder.svg",
  "product-portes": "/placeholder.svg",
  "product-fenetres": "/placeholder.svg",
  "product-verrieres": "/placeholder.svg",
  "product-grilles": "/placeholder.svg",
  
  // Pages
  "page-atelier": "/placeholder.svg",
  "page-equipe": "/placeholder.svg",
  "thermolaquage-process": "/placeholder.svg",
  "thermolaquage-applications": "/placeholder.svg",
  
  // Process
  "process-consultation": "/placeholder.svg",
  "process-devis": "/placeholder.svg",
  "process-fabrication": "/placeholder.svg",
  "process-installation": "/placeholder.svg",
  
  // Team
  "team-member-1": "/placeholder.svg",
  "team-member-2": "/placeholder.svg",
  "team-member-3": "/placeholder.svg",
  "team-member-4": "/placeholder.svg",
  
  // Partners - Fournisseur
  "partner-jansen": "https://via.placeholder.com/200x80/C41E3A/FFFFFF?text=JANSEN",
  // Partners - Maîtres d'ouvrage
  "partner-demathieu-bard": "https://via.placeholder.com/200x80/1E3A8A/FFFFFF?text=DEMATHIEU+BARD",
  "partner-spie-batignolles": "https://via.placeholder.com/200x80/DC2626/FFFFFF?text=SPIE+BATIGNOLLES",
  "partner-rabot-dutilleul": "https://via.placeholder.com/200x80/059669/FFFFFF?text=RABOT+DUTILLEUL",
  "partner-bouygues": "https://via.placeholder.com/200x80/00539C/FFFFFF?text=BOUYGUES",
  "partner-vinci": "https://via.placeholder.com/200x80/003366/FFFFFF?text=VINCI",
  "partner-eiffage": "https://via.placeholder.com/200x80/E30613/FFFFFF?text=EIFFAGE",
  "partner-urbaine-travaux": "https://via.placeholder.com/200x80/7C3AED/FFFFFF?text=URBAINE+TRAVAUX",
  "partner-saint-gobain": "https://via.placeholder.com/200x80/004990/FFFFFF?text=SAINT-GOBAIN",
  
  // Réalisations B2B
  "realisation-b2b-1": "/placeholder.svg",
  "realisation-b2b-2": "/placeholder.svg",
  "realisation-b2b-3": "/placeholder.svg",

  // Secteurs professionnels
  "sector-btp": "/placeholder.svg",
  "sector-architecte": "/placeholder.svg",
  "sector-artisan": "/placeholder.svg",
  "sector-industrie": "/placeholder.svg",
};

interface FetchResult {
  images: Record<string, string>;
  videos: Record<string, string>;
  zooms: Record<string, number>;
  customImages: Set<string>;
}

async function fetchSiteImages(): Promise<FetchResult> {
  try {
    const response = await fetch("/api/site-images");
    if (!response.ok) throw new Error("Failed to fetch");

    const data = await response.json();
    const imageMap: Record<string, string> = {};
    const videoMap: Record<string, string> = {};
    const zoomMap: Record<string, number> = {};
    const customImages = new Set<string>();

    (data.images || []).forEach((img: SiteImage & { zoom?: number }) => {
      imageMap[img.key] = img.url;
      if (img.videoUrl) videoMap[img.key] = img.videoUrl;
      if (img.zoom && img.zoom !== 1.0) zoomMap[img.key] = img.zoom;
      if (img.imageUrl) {
        customImages.add(img.key);
      }
    });

    return {
      images: { ...FALLBACK_IMAGES, ...imageMap },
      videos: videoMap,
      zooms: zoomMap,
      customImages
    };
  } catch (error) {
    console.warn("Failed to fetch site images, using fallbacks:", error);
    return { images: FALLBACK_IMAGES, videos: {}, zooms: {}, customImages: new Set() };
  }
}

// Cache global
let cachedResult: FetchResult | null = null;

/**
 * Hook pour récupérer toutes les images du site
 * Utilise un cache global pour éviter les requêtes multiples
 */
export function useSiteImages(): SiteImagesState & {
  getImage: (key: string) => string;
  getVideo: (key: string) => string | null;
  getZoom: (key: string) => number;
  isPlaceholder: (key: string) => boolean;
} {
  const [state, setState] = useState<SiteImagesState>({
    images: cachedResult?.images || cachedImages || FALLBACK_IMAGES,
    videos: cachedResult?.videos || {},
    zooms: cachedResult?.zooms || {},
    customImages: cachedResult?.customImages || new Set(),
    loading: !cachedResult && !cachedImages,
    error: null,
  });

  useEffect(() => {
    if (cachedResult) {
      setState({
        images: cachedResult.images,
        videos: cachedResult.videos,
        zooms: cachedResult.zooms,
        customImages: cachedResult.customImages,
        loading: false,
        error: null
      });
      return;
    }

    if (!cachePromise) {
      cachePromise = fetchSiteImages();
    }

    cachePromise
      .then((result) => {
        cachedImages = result.images;
        cachedResult = result;
        setState({
          images: result.images,
          videos: result.videos,
          zooms: result.zooms,
          customImages: result.customImages,
          loading: false,
          error: null
        });
      })
      .catch((error) => {
        setState({
          images: FALLBACK_IMAGES,
          videos: {},
          zooms: {},
          customImages: new Set(),
          loading: false,
          error
        });
      });
  }, []);

  const getImage = useCallback(
    (key: string): string => {
      return state.images[key] || FALLBACK_IMAGES[key] || "";
    },
    [state.images]
  );

  const getVideo = useCallback(
    (key: string): string | null => {
      return state.videos[key] || null;
    },
    [state.videos]
  );

  const getZoom = useCallback(
    (key: string): number => {
      return state.zooms[key] ?? 1.0;
    },
    [state.zooms]
  );

  const isPlaceholder = useCallback(
    (key: string): boolean => {
      return !state.customImages.has(key);
    },
    [state.customImages]
  );

  return { ...state, getImage, getVideo, getZoom, isPlaceholder };
}

/**
 * Récupère une seule image par sa clé
 * Pour usage dans les Server Components ou sans hook
 */
export async function getSiteImage(key: string): Promise<string> {
  try {
    const response = await fetch(`/api/site-images?key=${key}`);
    if (!response.ok) throw new Error("Not found");
    const data = await response.json();
    return data.image?.url || FALLBACK_IMAGES[key] || "";
  } catch {
    return FALLBACK_IMAGES[key] || "";
  }
}

/**
 * Invalide le cache (à appeler après une modification admin)
 */
export function invalidateSiteImagesCache() {
  cachedImages = null;
  cachedResult = null;
  cachePromise = null;
}





