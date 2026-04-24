"use client";

import * as React from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
  useAnimationControls,
  type MotionValue,
} from "framer-motion";
import type { CollectionFinish } from "@/lib/data/thermolaquage-items";

interface Props {
  finishes: CollectionFinish[];
  accentColor: string;
}

const TILES_PER_COLUMN = 8;
const FEATURED_POOL_SIZE = 10;

/**
 * Cinematic background mosaic for collection pages.
 * - Pauses animations + cycling when hero is out of viewport
 * - Throttles mousemove via requestAnimationFrame
 * - Uses transform-based spotlight (compositor, no paint)
 */
export function CollectionHeroMosaic({ finishes, accentColor }: Props) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(containerRef, { margin: "200px 0px" });

  const withImg = React.useMemo(
    () => finishes.filter((f) => f.imageUrl),
    [finishes],
  );

  // Spread evenly across 3 columns, capped per column for perf
  const columns = React.useMemo(() => {
    const buckets: CollectionFinish[][] = [[], [], []];
    withImg.forEach((f, i) => buckets[i % 3].push(f));
    return buckets.map((col) => {
      let padded = col;
      while (padded.length < TILES_PER_COLUMN && col.length > 0) {
        padded = padded.concat(col);
      }
      return padded.slice(0, TILES_PER_COLUMN);
    });
  }, [withImg]);

  // Featured-tile pool: take a small subset (deterministic, not random per render)
  const featuredPool = React.useMemo(() => {
    if (withImg.length <= FEATURED_POOL_SIZE) return withImg;
    const step = Math.floor(withImg.length / FEATURED_POOL_SIZE);
    return Array.from({ length: FEATURED_POOL_SIZE }, (_, i) => withImg[i * step]);
  }, [withImg]);

  // Mouse tracking — rAF-throttled
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });

  const rafRef = React.useRef<number | null>(null);
  const onMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const cx = e.clientX;
      const cy = e.clientY;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        mx.set((cx - rect.left) / rect.width);
        my.set((cy - rect.top) / rect.height);
      });
    },
    [mx, my],
  );
  React.useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  // Container size for spotlight pixel transforms
  const [size, setSize] = React.useState({ w: 0, h: 0 });
  React.useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const ro = new ResizeObserver(([entry]) => {
      setSize({ w: entry.contentRect.width, h: entry.contentRect.height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const spotX = useTransform(sx, (v) => v * size.w);
  const spotY = useTransform(sy, (v) => v * size.h);

  // Parallax (subtle)
  const col1Y = useTransform(sy, [0, 1], [-12, 12]);
  const col2Y = useTransform(sy, [0, 1], [12, -12]);
  const col3Y = useTransform(sy, [0, 1], [-8, 8]);

  // Featured tile cycling — only when in view
  const [featuredIdx, setFeaturedIdx] = React.useState(0);
  React.useEffect(() => {
    if (!inView || featuredPool.length === 0) return;
    const id = window.setInterval(() => {
      setFeaturedIdx((i) => (i + 1) % featuredPool.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, [inView, featuredPool.length]);

  const featured = featuredPool[featuredIdx];

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden" onMouseMove={onMove}>
      {/* ── Marquee columns ── */}
      <div className="absolute inset-0 flex gap-3 px-3 opacity-55">
        <MarqueeColumn finishes={columns[0]} direction="up" duration={42} parallaxY={col1Y} active={inView} />
        <MarqueeColumn finishes={columns[1]} direction="down" duration={56} parallaxY={col2Y} active={inView} />
        <MarqueeColumn finishes={columns[2]} direction="up" duration={48} parallaxY={col3Y} active={inView} />
      </div>

      {/* ── Dark gradient for text readability ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

      {/* ── Color-tinted spotlight, transform-based for compositor-only paint ── */}
      {size.w > 0 && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute top-0 left-0 mix-blend-screen will-change-transform"
          style={{
            width: 700,
            height: 700,
            marginLeft: -350,
            marginTop: -350,
            x: spotX,
            y: spotY,
            background: `radial-gradient(circle, ${accentColor}66 0%, transparent 60%)`,
          }}
        />
      )}

      {/* ── Vignette ── */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_220px_rgba(0,0,0,0.65)]" />

      {/* ── Featured floating tile (top-right, hidden on mobile) ── */}
      <div className="pointer-events-none absolute top-10 right-10 hidden lg:block z-10">
        <div className="relative w-[260px]">
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
                    quality={70}
                    className="object-cover"
                    priority
                  />
                </motion.div>
              )}
            </AnimatePresence>

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
  active,
}: {
  finishes: CollectionFinish[];
  direction: "up" | "down";
  duration: number;
  parallaxY: MotionValue<number>;
  active: boolean;
}) {
  const items = React.useMemo(() => [...finishes, ...finishes], [finishes]);
  const controls = useAnimationControls();

  React.useEffect(() => {
    if (!active) {
      controls.stop();
      return;
    }
    controls.start({
      y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: { duration, repeat: Infinity, ease: "linear" },
    });
  }, [active, controls, direction, duration]);

  if (finishes.length === 0) return <div className="flex-1" />;

  return (
    <motion.div className="flex-1 relative overflow-hidden" style={{ y: parallaxY }}>
      <motion.div
        className="flex flex-col gap-3 absolute inset-x-0 will-change-transform"
        animate={controls}
      >
        {items.map((f, i) => (
          <div
            key={`${f.id}-${i}`}
            className="relative w-full aspect-[4/5] rounded-xl overflow-hidden ring-1 ring-white/10"
          >
            <Image
              src={f.imageUrl!}
              alt={`Finition ${f.name} — thermolaquage Adapta`}
              fill
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 18vw"
              quality={55}
              className="object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
