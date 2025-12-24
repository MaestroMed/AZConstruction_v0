"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

type GlowButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type GlowButtonSize = "sm" | "md" | "lg" | "xl";

interface GlowButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: GlowButtonVariant;
  size?: GlowButtonSize;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  glow?: boolean;
  children: React.ReactNode;
}

const sizeClasses: Record<GlowButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
  xl: "px-10 py-5 text-lg",
};

const variantClasses: Record<GlowButtonVariant, string> = {
  primary: "bg-gradient-to-r from-cyan-glow to-cyan-light text-navy-dark font-semibold",
  secondary: "bg-white/10 text-white border border-white/20 hover:bg-white/20",
  outline: "bg-transparent text-white border-2 border-cyan-glow/50 hover:border-cyan-glow hover:bg-cyan-glow/10",
  ghost: "bg-transparent text-white hover:bg-white/10",
};

export function GlowButton({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  loading = false,
  glow = true,
  disabled,
  className,
  children,
  ...props
}: GlowButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <motion.button
      className={cn(
        "relative inline-flex items-center justify-center gap-2",
        "rounded-xl font-medium",
        "transition-all duration-300 ease-out",
        "focus:outline-none focus:ring-2 focus:ring-cyan-glow/50 focus:ring-offset-2 focus:ring-offset-navy-dark",
        sizeClasses[size],
        variantClasses[variant],
        glow && variant === "primary" && "btn-glow",
        isDisabled && "opacity-50 cursor-not-allowed",
        className
      )}
      disabled={isDisabled}
      whileHover={!isDisabled ? { scale: 1.02, y: -2 } : undefined}
      whileTap={!isDisabled ? { scale: 0.98 } : undefined}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {/* Glow effect for primary variant */}
      {glow && variant === "primary" && (
        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-glow/40 to-cyan-light/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      )}

      {/* Content */}
      <span className="relative flex items-center gap-2">
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            {icon && iconPosition === "left" && (
              <span className="flex-shrink-0">{icon}</span>
            )}
            {children}
            {icon && iconPosition === "right" && (
              <span className="flex-shrink-0">{icon}</span>
            )}
          </>
        )}
      </span>
    </motion.button>
  );
}


