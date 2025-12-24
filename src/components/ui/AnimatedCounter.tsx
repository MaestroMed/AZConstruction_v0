"use client";

import * as React from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) =>
    Math.round(current * Math.pow(10, decimals)) / Math.pow(10, decimals)
  );

  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  React.useEffect(() => {
    const unsubscribe = display.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [display]);

  return (
    <motion.span
      ref={ref}
      className={cn("tabular-nums", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}
      {decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue)}
      {suffix}
    </motion.span>
  );
}

// Stat card with animated counter
interface StatCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

export function StatCard({
  value,
  suffix = "",
  prefix = "",
  label,
  icon,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "glass-card p-6 text-center",
        className
      )}
    >
      {icon && (
        <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-cyan-glow/20 flex items-center justify-center text-cyan-glow">
          {icon}
        </div>
      )}
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
        <AnimatedCounter value={value} prefix={prefix} suffix={suffix} />
      </div>
      <p className="text-white/60 text-sm">{label}</p>
    </div>
  );
}

