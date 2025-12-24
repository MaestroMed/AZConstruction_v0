"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface MeshGradientProps {
  variant?: "default" | "animated" | "aurora" | "subtle";
  className?: string;
  children?: React.ReactNode;
}

export function MeshGradient({
  variant = "default",
  className,
  children,
}: MeshGradientProps) {
  const variantClasses = {
    default: "mesh-gradient",
    animated: "mesh-gradient-animated",
    aurora: "aurora-bg",
    subtle: "bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate",
  };

  return (
    <div className={cn("relative", variantClasses[variant], className)}>
      {children}
    </div>
  );
}

// Particle Background Component
export function ParticleBackground({ count = 10 }: { count?: number }) {
  return (
    <div className="particles">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}

// Gradient Orbs for depth
interface GradientOrbProps {
  color?: "cyan" | "blue" | "purple";
  size?: "sm" | "md" | "lg" | "xl";
  position: { top?: string; bottom?: string; left?: string; right?: string };
  blur?: "sm" | "md" | "lg" | "xl";
  opacity?: number;
  animate?: boolean;
}

export function GradientOrb({
  color = "cyan",
  size = "md",
  position,
  blur = "lg",
  opacity = 0.3,
  animate = false,
}: GradientOrbProps) {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
    xl: "w-[500px] h-[500px]",
  };

  const colorClasses = {
    cyan: "bg-cyan-glow",
    blue: "bg-blue-corporate",
    purple: "bg-purple-500",
  };

  const blurClasses = {
    sm: "blur-2xl",
    md: "blur-3xl",
    lg: "blur-[100px]",
    xl: "blur-[150px]",
  };

  return (
    <div
      className={cn(
        "absolute rounded-full pointer-events-none",
        sizeClasses[size],
        colorClasses[color],
        blurClasses[blur],
        animate && "animate-float"
      )}
      style={{
        ...position,
        opacity,
      }}
    />
  );
}


