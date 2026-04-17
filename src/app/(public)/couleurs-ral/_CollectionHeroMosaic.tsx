"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { CollectionFinish } from "@/lib/data/thermolaquage-items";

interface Props {
  finishes: CollectionFinish[];
  accentColor: string;
}

/**
 * Cinematic background mosaic for collection pages.
 * Three vertical marquee columns of finish images, parallax + spotlight + featured tile.
 */
export function CollectionHeroMosaic({ finishes, accentColor }: Props) {
  const withImg = React.useMemo(
    () => finishes.filter((f) => f.imageUrl),
    [finishes],
  );

  // Spread evenly across 3 columns; trim per column to keep DOM lean.
  const columns = React.useMemo(() => {
    const buckets: CollectionFinish[][] = [[], [], []];
    withImg.forEach((f, i) => buckets[i % 3].push(f));
    // If a column is short (< 6), pad with repeats so the marquee feels dense.
    return buckets.map((col) => {
      const min = 8;
      let padded = col;
      while (padded.length < min && col.length > 0) {
        padded = padded.concat(col);
      }
      return padded.slice(0, 14); // cap per column
    });
  }, [withImg]);

  // Mouse-tracking for spotlight + parallax
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });

  const onMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const r = e.currentTarget.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width);
      my.set((e.clientY - r.top) / r.height);
    },
    [mx, my],
  );

  // Parallax offsets per column (subtle)
  const col1Y = useTransform(sy, [0, 1], [-12, 12]);
  const col2Y = useTransform(sy, [0, 1], [12, -12]);
  const col3Y = useTransform(sy, [0, 1], [-8, 8]);

  // Spotlight position (CSS px-style as percentages)
  const spotX = useTransform(sx, [0, 1], ["0%", "100%"]);
  const spotY = useTransform(sy, [0, 1], ["0%", "100%"]);

  // Featured tile: cycles through finishes every 4s
  const [featuredIdx, setFeaturedIdx] = React.useState(0);
  React.useEffect(() => {
    if (withImg.length === 0) return;
    const id = window.setInterval(() => {
      setFeaturedIdx((i) => (i + 1) % withImg.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, [withImg.length]);

  const featured = withImg[featuredIdx];

  return (
    <div className="absolute inset-0 overflow-hidden" onMouseMove={onMove}>
      {/* ── Marquee columns ── */}
      <div className="absolute inset-0 flex gap-3 px-3 opacity-55">
        <MarqueeColumn finishes={columns[0]} direction="up" duration={42} parallaxY={col1Y} />
        <MarqueeColumn finishes={columns[1]} direction="down" duration={56} parallaxY={col2Y} />
        <MarqueeColumn finishes={columns[2]} direction="up" duration={48} parallaxY={col3Y} />
      </div>

      {/* ── Dark gradient for text readability (left → transparent right) ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

      {/* ── Color-tinted spotlight following the cursor ── */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-32 mix-blend-screen"
        style={{
          background: `radial-gradient(circle at var(--sx) var(--sy), ${accentColor}66 0%, transparent 35%)`,
          // Bind motion values via custom properties
          ["--sx" as string]: spotX,
          ["--sy" as string]: spotY,
        }}
      />

      {/* ── Vignette ── */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_220px_rgba(0,0,0,0.65)]" />

      {/* ── Featured floating tile (top-right, hidden on mobile) ── */}
      <div className="pointer-events-none absolute top-10 right-10 hidden lg:block z-10">
        <div className="relative w-[260px]">
          {/* Glow ring using accent color */}
          <div
            className="absolute -inset-3 rounded-[1.6rem] blur-2xl opacity-70"
            style={{ background: `radial-gradient(circle, ${accentColor}55, transparent 70%)` }}
          />
          <div className="relative w-[260px] h-[320px] rounded-[1.4rem] overflow-hidden ring-1 ring-white/15 shadow-2xl bg-black/50 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              {featured && (
                <motion.div
                  key={featured.id}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={featured.imageUrl!}
                    alt={featured.name}
                    fill
                    sizes="260px"
                    className="object-cover"
                    priority
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Caption overlay */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
              <AnimatePresence mode="wait">
                {featured && (
                  <motion.div
                    key={`caption-${featured.id}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.45 }}
                  >
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-1">
                      Now showing
                    </p>
                    <p className="text-white font-semibold leading-tight truncate">
                      {featured.name}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Top-left dot indicator */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: accentColor }}
              />
              <span className="text-[9px] text-white/70 uppercase tracking-wider">Live</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarqueeColumn({
  finishes,
  direction,
  duration,
  parallaxY,
}: {
  finishes: CollectionFinish[];
  direction: "up" | "down";
  duration: number;
  parallaxY: ReturnType<typeof useTransform<number, number>>;
}) {
  // Duplicate the list once for seamless infinite scroll
  const items = React.useMemo(() => [...finishes, ...finishes], [finishes]);

  if (finishes.length === 0) return <div className="flex-1" />;

  return (
    <motion.div
      className="flex-1 relative overflow-hidden"
      style={{ y: parallaxY }}
    >
      <motion.div
        className="flex flex-col gap-3 absolute inset-x-0"
        animate={{
          y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {items.map((f, i) => (
          <div
            key={`${f.id}-${i}`}
            className="relative w-full aspect-[4/5] rounded-xl overflow-hidden ring-1 ring-white/10"
          >
            <Image
              src={f.imageUrl!}
              alt=""
              fill
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 18vw"
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
