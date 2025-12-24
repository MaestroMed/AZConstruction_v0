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
};

async function fetchSiteImages(): Promise<Record<string, string>> {
  try {
    const response = await fetch("/api/site-images");
    if (!response.ok) throw new Error("Failed to fetch");
    
    const data = await response.json();
    const imageMap: Record<string, string> = {};
    
    (data.images || []).forEach((img: SiteImage) => {
      imageMap[img.key] = img.url;
    });
    
    return { ...FALLBACK_IMAGES, ...imageMap };
  } catch (error) {
    console.warn("Failed to fetch site images, using fallbacks:", error);
    return FALLBACK_IMAGES;
  }
}

/**
 * Hook pour récupérer toutes les images du site
 * Utilise un cache global pour éviter les requêtes multiples
 */
export function useSiteImages(): SiteImagesState & { getImage: (key: string) => string } {
  const [state, setState] = useState<SiteImagesState>({
    images: cachedImages || FALLBACK_IMAGES,
    loading: !cachedImages,
    error: null,
  });

  useEffect(() => {
    if (cachedImages) {
      setState({ images: cachedImages, loading: false, error: null });
      return;
    }

    if (!cachePromise) {
      cachePromise = fetchSiteImages();
    }

    cachePromise
      .then((images) => {
        cachedImages = images;
        setState({ images, loading: false, error: null });
      })
      .catch((error) => {
        setState({ images: FALLBACK_IMAGES, loading: false, error });
      });
  }, []);

  const getImage = useCallback(
    (key: string): string => {
      return state.images[key] || FALLBACK_IMAGES[key] || "";
    },
    [state.images]
  );

  return { ...state, getImage };
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
  cachePromise = null;
}




