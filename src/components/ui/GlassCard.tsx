"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type GlassVariant = "dark" | "light" | "glow" | "spotlight";

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  variant?: GlassVariant;
  hover?: boolean;
  glow?: boolean;
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-10",
};

const variantClasses: Record<GlassVariant, string> = {
  dark: "glass-card",
  light: "glass-card-light",
  glow: "glass-card-glow",
  spotlight: "glass-card spotlight-card",
};

export function GlassCard({
  variant = "dark",
  hover = true,
  glow = false,
  padding = "lg",
  className,
  children,
  ...props
}: GlassCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);

  // Spotlight effect - track mouse position
  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (variant !== "spotlight" || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cardRef.current.style.setProperty("--x", `${x}px`);
      cardRef.current.style.setProperty("--y", `${y}px`);
    },
    [variant]
  );

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        variantClasses[variant],
        paddingClasses[padding],
        glow && "neon-glow-always",
        className
      )}
      onMouseMove={handleMouseMove}
      whileHover={hover ? { scale: 1.02 } : undefined}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Subcomponents for structured content
export function GlassCardHeader({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mb-4", className)}>
      {children}
    </div>
  );
}

export function GlassCardTitle({
  className,
  children,
  gradient = false,
}: {
  className?: string;
  children: React.ReactNode;
  gradient?: boolean;
}) {
  return (
    <h3
      className={cn(
        "text-xl font-bold",
        gradient ? "text-gradient-cyan" : "text-white",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function GlassCardDescription({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={cn("text-white/70 text-sm leading-relaxed", className)}>
      {children}
    </p>
  );
}

export function GlassCardContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("", className)}>{children}</div>;
}

export function GlassCardIcon({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-glow/20 to-blue-corporate/30",
        "flex items-center justify-center mb-6",
        "ring-1 ring-white/10",
        className
      )}
    >
      {children}
    </div>
  );
}


