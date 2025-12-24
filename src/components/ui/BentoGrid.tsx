"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  className?: string;
  children: React.ReactNode;
}

export function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <div className={cn("bento-grid", className)}>
      {children}
    </div>
  );
}

type BentoItemSize = "default" | "large" | "wide" | "tall";

interface BentoItemProps {
  size?: BentoItemSize;
  className?: string;
  children: React.ReactNode;
  index?: number;
}

const sizeClasses: Record<BentoItemSize, string> = {
  default: "",
  large: "bento-item-large",
  wide: "bento-item-wide",
  tall: "bento-item-tall",
};

export function BentoItem({
  size = "default",
  className,
  children,
  index = 0,
}: BentoItemProps) {
  return (
    <motion.div
      className={cn(
        "glass-card-light relative overflow-hidden group",
        sizeClasses[size],
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Spotlight effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-glow/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}

// Bento Card with icon and content
interface BentoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  size?: BentoItemSize;
  highlight?: boolean;
  index?: number;
  className?: string;
}

export function BentoCard({
  icon,
  title,
  description,
  size = "default",
  highlight = false,
  index = 0,
  className,
}: BentoCardProps) {
  return (
    <BentoItem size={size} index={index} className={className}>
      <div className={cn(
        "p-8 h-full flex flex-col",
        size === "large" && "justify-between"
      )}>
        {/* Icon */}
        <div
          className={cn(
            "w-14 h-14 rounded-2xl flex items-center justify-center mb-6",
            "bg-gradient-to-br shadow-lg",
            highlight
              ? "from-cyan-glow/30 to-blue-corporate/30 text-cyan-glow ring-1 ring-cyan-glow/30"
              : "from-gray-100 to-gray-200 text-blue-corporate"
          )}
        >
          {icon}
        </div>

        {/* Content */}
        <div className={size === "large" ? "flex-1" : ""}>
          <h3
            className={cn(
              "font-bold text-navy-dark mb-3",
              size === "large" ? "text-2xl" : "text-xl"
            )}
          >
            {title}
          </h3>
          <p
            className={cn(
              "text-gray-600 leading-relaxed",
              size === "large" ? "text-base" : "text-sm"
            )}
          >
            {description}
          </p>
        </div>

        {/* Decorative element for large cards */}
        {size === "large" && (
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-cyan-glow/10 to-transparent pointer-events-none" />
        )}
      </div>
    </BentoItem>
  );
}


