"use client";

import { useState, useEffect, useCallback } from "react";

interface SiteImage {
  key: string;
  category: string;
  label: string;
  description: string;
  imageUrl: string | null;
  fallbackUrl: string;
  url: string;
}

interface SiteImagesState {
  images: Record<string, string>; // key -> url
  customImages: Set<string>; // keys of images that have custom URLs (not fallbacks)
  loading: boolean;
  error: Error | null;
}

// Cache global pour éviter les requêtes multiples
let cachedImages: Record<string, string> | null = null;
let cachePromise: Promise<Record<string, string>> | null = null;

// Images fallback locales (utilisées si l'API échoue)
const FALLBACK_IMAGES: Record<string, string> = {
  // Hero
  "hero-homepage": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
  "hero-thermolaquage": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&q=80",
  "hero-particuliers": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
  "hero-professionnels": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
  "hero-a-propos": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80",
  "hero-contact": "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80",
  "hero-carousel-1": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  "hero-carousel-2": "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1920&q=80",
  "hero-carousel-3": "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=1920&q=80",
  
  // Products
  "product-garde-corps": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  "product-escaliers": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  "product-portails": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  "product-clotures": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
  "product-pergolas": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  "product-marquises": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  "product-portes": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  "product-fenetres": "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
  "product-verrieres": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  "product-grilles": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  
  // Pages
  "page-atelier": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
  "page-equipe": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
  
  // Process
  "process-consultation": "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80",
  "process-devis": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  "process-fabrication": "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
  "process-installation": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
  
  // Team
  "team-member-1": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  "team-member-2": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  "team-member-3": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  "team-member-4": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  
  // Partners
  "partner-jansen": "https://via.placeholder.com/200x80/C41E3A/FFFFFF?text=JANSEN",
  "partner-bouygues": "https://via.placeholder.com/200x80/00539C/FFFFFF?text=BOUYGUES",
  "partner-vinci": "https://via.placeholder.com/200x80/003366/FFFFFF?text=VINCI",
  "partner-eiffage": "https://via.placeholder.com/200x80/E30613/FFFFFF?text=EIFFAGE",
  "partner-saint-gobain": "https://via.placeholder.com/200x80/004990/FFFFFF?text=SAINT-GOBAIN",
  
  // Réalisations B2B
  "realisation-b2b-1": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  "realisation-b2b-2": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  "realisation-b2b-3": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
};

interface FetchResult {
  images: Record<string, string>;
  customImages: Set<string>;
}

async function fetchSiteImages(): Promise<FetchResult> {
  try {
    const response = await fetch("/api/site-images");
    if (!response.ok) throw new Error("Failed to fetch");
    
    const data = await response.json();
    const imageMap: Record<string, string> = {};
    const customImages = new Set<string>();
    
    (data.images || []).forEach((img: SiteImage) => {
      imageMap[img.key] = img.url;
      // Track images that have custom URLs (not using fallback)
      if (img.imageUrl) {
        customImages.add(img.key);
      }
    });
    
    return { 
      images: { ...FALLBACK_IMAGES, ...imageMap },
      customImages
    };
  } catch (error) {
    console.warn("Failed to fetch site images, using fallbacks:", error);
    return { images: FALLBACK_IMAGES, customImages: new Set() };
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
  isPlaceholder: (key: string) => boolean;
} {
  const [state, setState] = useState<SiteImagesState>({
    images: cachedResult?.images || cachedImages || FALLBACK_IMAGES,
    customImages: cachedResult?.customImages || new Set(),
    loading: !cachedResult && !cachedImages,
    error: null,
  });

  useEffect(() => {
    if (cachedResult) {
      setState({ 
        images: cachedResult.images, 
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
          customImages: result.customImages,
          loading: false, 
          error: null 
        });
      })
      .catch((error) => {
        setState({ 
          images: FALLBACK_IMAGES, 
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

  const isPlaceholder = useCallback(
    (key: string): boolean => {
      return !state.customImages.has(key);
    },
    [state.customImages]
  );

  return { ...state, getImage, isPlaceholder };
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





