"use client";

import * as React from "react";
import Image from "next/image";
import { useSiteImages } from "@/lib/hooks/useSiteImages";

export interface HeroSlide {
  id: string;
  ordre: number;
  active: boolean;
  imageKey: string;
  headline: string;
  headlineAccent: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  onSlideChange?: (index: number) => void;
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

const IMAGE_SLIDE_DURATION_MS = 6000;
const VIDEO_MAX_DURATION_MS = 15000;

/**
 * Performance strategy :
 *  - TOUS les slides sont montés en permanence (stack absolu), visibility via opacity.
 *    → passer d'un slide à l'autre n'implique PAS de recharger l'image/vidéo.
 *  - Video elements : currentTime remis à 0 quand on active le slide, pause sinon.
 *  - preload strategy :
 *      • slide 0 (premier rendu) : preload="auto" (accélère le first paint)
 *      • slide courant : preload="auto"
 *      • slide suivant (n+1) : preload="auto" (pré-buffer)
 *      • autres : preload="metadata" (léger, juste duration + poster)
 *  - Ken Burns zoom sur l'image/video active uniquement, effet propre.
 */
export default function HeroCarousel({
  slides,
  onSlideChange,
  currentIndex,
  onIndexChange,
}: HeroCarouselProps) {
  const { getImage, getVideo } = useSiteImages();
  const videoRefs = React.useRef<Map<number, HTMLVideoElement>>(new Map());

  const currentSlide = slides[currentIndex];
  const currentVideoUrl = currentSlide ? getVideo(currentSlide.imageKey) : null;

  const advance = React.useCallback(() => {
    if (slides.length <= 1) return;
    const next = (currentIndex + 1) % slides.length;
    onIndexChange(next);
    onSlideChange?.(next);
  }, [slides.length, currentIndex, onIndexChange, onSlideChange]);

  // ── Auto-advance logic ──────────────────────────────────────
  React.useEffect(() => {
    if (slides.length <= 1) return;

    if (currentVideoUrl) {
      const fallbackTimer = setTimeout(advance, VIDEO_MAX_DURATION_MS);
      return () => clearTimeout(fallbackTimer);
    }

    const interval = setInterval(advance, IMAGE_SLIDE_DURATION_MS);
    return () => clearInterval(interval);
  }, [currentIndex, currentVideoUrl, slides.length, advance]);

  // ── Video play/pause management ─────────────────────────────
  React.useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (index === currentIndex) {
        video.currentTime = 0;
        video.play().catch(() => {
          /* autoplay bloqué par navigateur, fallback silencieux */
        });
      } else {
        video.pause();
      }
    });
  }, [currentIndex]);

  const goToSlide = (index: number) => {
    onIndexChange(index);
    onSlideChange?.(index);
  };

  if (slides.length === 0) {
    return <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy-medium to-navy-dark" />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        const isNext = index === (currentIndex + 1) % slides.length;
        const videoUrl = getVideo(slide.imageKey);
        const imageUrl = getImage(slide.imageKey);
        // Preload : eager pour slide courant + suivant, metadata pour les autres
        const preload = isActive || isNext ? "auto" : "metadata";

        return (
          <div
            key={slide.id || index}
            className="absolute inset-0 transition-opacity ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{
              opacity: isActive ? 1 : 0,
              transitionDuration: "1400ms",
              zIndex: isActive ? 2 : 1,
              pointerEvents: "none",
            }}
            aria-hidden={!isActive}
          >
            {/* Ken Burns subtle zoom — animation CSS appliquee quand slide actif */}
            <div
              className="absolute inset-0"
              style={{
                animation: isActive ? "ken-burns 8s ease-in-out forwards" : "none",
                transformOrigin: "center center",
              }}
            >
              {videoUrl ? (
                <video
                  ref={(el) => {
                    if (el) videoRefs.current.set(index, el);
                    else videoRefs.current.delete(index);
                  }}
                  src={videoUrl}
                  poster={imageUrl || undefined}
                  muted
                  playsInline
                  preload={preload}
                  onEnded={() => {
                    if (isActive && slides.length > 1) advance();
                  }}
                  aria-label={`AZ Construction - ${slide.headline}`}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              ) : imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={`AZ Construction - ${slide.headline}`}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                  sizes="100vw"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate" />
              )}
            </div>
          </div>
        );
      })}

      {/* Overlay sombre pour lisibilité du texte */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy-dark/75 via-navy-dark/45 to-navy-dark/20 pointer-events-none" />

      {/* Navigation dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 h-2 bg-cyan-400"
                  : "w-2 h-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
