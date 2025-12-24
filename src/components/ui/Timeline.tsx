"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export function Timeline({ children, className }: TimelineProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden lg:block">
        {/* Background line */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
        {/* Progress line */}
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-glow to-blue-corporate"
          style={{ height: progressHeight }}
        />
      </div>

      {/* Steps */}
      <div className="relative space-y-16 lg:space-y-24">
        {children}
      </div>
    </div>
  );
}

interface TimelineStepProps {
  step: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  index?: number;
}

export function TimelineStep({
  step,
  title,
  description,
  icon,
  position = "left",
  index = 0,
}: TimelineStepProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(true);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-100px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center",
        position === "right" && "lg:[direction:rtl]"
      )}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Content */}
      <div
        className={cn(
          "lg:[direction:ltr]",
          position === "right" ? "lg:order-3" : "lg:order-1"
        )}
      >
        <motion.div
          className={cn(
            "glass-card-light p-8 relative overflow-hidden",
            isActive && "ring-2 ring-cyan-glow/30"
          )}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Glow effect when active */}
          {isActive && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-cyan-glow/10 to-transparent pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          )}

          <div className="relative">
            <span className="text-sm font-medium text-cyan-glow mb-2 block">
              Étape {step}
            </span>
            <h3 className="text-xl font-bold text-navy-dark mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </motion.div>
      </div>

      {/* Node */}
      <div className="hidden lg:flex order-2 justify-center">
        <motion.div
          className={cn(
            "timeline-node",
            isActive && "active"
          )}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
        >
          {icon ? (
            <span className={cn(
              "text-lg transition-colors",
              isActive ? "text-cyan-glow" : "text-gray-400"
            )}>
              {icon}
            </span>
          ) : (
            <span
              className={cn(
                "text-lg font-bold transition-colors",
                isActive ? "text-cyan-glow" : "text-gray-400"
              )}
            >
              {step}
            </span>
          )}
        </motion.div>
      </div>

      {/* Empty space for alternating layout */}
      <div
        className={cn(
          "hidden lg:block",
          position === "right" ? "lg:order-1" : "lg:order-3"
        )}
      />
    </motion.div>
  );
}

