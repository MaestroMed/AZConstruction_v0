"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface AnimatedHeroTitleProps {
  headline: string;
  headlineAccent: string;
  /**
   * Clé qui change à chaque slide → relance l'animation (via key React)
   */
  slideKey: string | number;
}

// Split un texte en "tokens" : lettres individuelles + espaces séparés.
// On préserve les espaces comme tokens spécifiques (pour le wrapping naturel)
// et on garde le layout word-by-word (pas de coupure au milieu d'un mot).
function splitWords(text: string): string[][] {
  // Retourne un array de mots, chaque mot est un array de caractères.
  return text.trim().split(/\s+/).map((word) => Array.from(word));
}

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    rotateX: -45,
    filter: "blur(8px)",
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.035,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const, // ease-out expo custom, très smooth
    },
  }),
};

export default function AnimatedHeroTitle({
  headline,
  headlineAccent,
  slideKey,
}: AnimatedHeroTitleProps) {
  const headlineWords = splitWords(headline);
  const accentWords = splitWords(headlineAccent);
  const headlineLetterCount = headlineWords.reduce((sum, w) => sum + w.length, 0);

  return (
    <motion.h1
      key={slideKey}
      className="relative font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight mb-6"
      style={{ perspective: 800 }}
      initial="hidden"
      animate="visible"
    >
      {/* Partie 1 : headline avec fill metallique argent */}
      <span className="inline-block align-baseline mr-3">
        {headlineWords.map((word, wi) => (
          <span key={`h-${wi}`} className="inline-block whitespace-nowrap">
            {word.map((char, ci) => {
              const globalIndex =
                headlineWords.slice(0, wi).reduce((s, w) => s + w.length, 0) + ci;
              return (
                <motion.span
                  key={`h-${wi}-${ci}`}
                  custom={globalIndex}
                  variants={letterVariants}
                  className="hero-title-metallic inline-block"
                  style={{ transformOrigin: "50% 100%" }}
                >
                  {char}
                </motion.span>
              );
            })}
            {wi < headlineWords.length - 1 && <span className="inline-block w-[0.4em]" />}
          </span>
        ))}
      </span>

      {/* Partie 2 : headlineAccent avec gradient cyan + soulignement animé */}
      <span className="relative inline-block">
        <span className="inline-block align-baseline">
          {accentWords.map((word, wi) => (
            <span key={`a-${wi}`} className="inline-block whitespace-nowrap">
              {word.map((char, ci) => {
                const globalIndex =
                  headlineLetterCount +
                  accentWords.slice(0, wi).reduce((s, w) => s + w.length, 0) +
                  ci;
                return (
                  <motion.span
                    key={`a-${wi}-${ci}`}
                    custom={globalIndex}
                    variants={letterVariants}
                    className="hero-title-accent inline-block"
                    style={{ transformOrigin: "50% 100%" }}
                  >
                    {char}
                  </motion.span>
                );
              })}
              {wi < accentWords.length - 1 && <span className="inline-block w-[0.4em]" />}
            </span>
          ))}
        </span>
        {/* Soulignement animé (scaleX) */}
        <motion.span
          className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: (headlineLetterCount + 2) * 0.035,
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          style={{ transformOrigin: "left center" }}
        />
      </span>
    </motion.h1>
  );
}
