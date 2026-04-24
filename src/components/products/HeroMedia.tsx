"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface HeroMediaProps {
  videoUrl?: string | null;
  imageUrl?: string;
  alt: string;
  imageIndexKey?: number | string;
  posterUrl?: string;
}

export function HeroMedia({
  videoUrl,
  imageUrl,
  alt,
  imageIndexKey,
  posterUrl,
}: HeroMediaProps) {
  if (videoUrl) {
    return (
      <video
        key={videoUrl}
        src={videoUrl}
        poster={posterUrl || imageUrl}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label={alt}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
    );
  }

  if (!imageUrl) {
    return <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-blue-corporate to-cyan-800" />;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={imageIndexKey ?? imageUrl}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
      >
        <Image
          src={imageUrl}
          alt={alt}
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>
    </AnimatePresence>
  );
}
