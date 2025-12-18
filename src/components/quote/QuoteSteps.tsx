"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, User, MapPin, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuoteStepsProps {
  currentStep: 1 | 2 | 3;
  onStepClick?: (step: 1 | 2 | 3) => void;
  className?: string;
}

const steps = [
  { id: 1 as const, name: "Coordonnées", icon: User },
  { id: 2 as const, name: "Projet", icon: MapPin },
  { id: 3 as const, name: "Confirmation", icon: Send },
];

export function QuoteSteps({ currentStep, onStepClick, className }: QuoteStepsProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between max-w-xl mx-auto">
        {steps.map((step, index) => {
          const isCompleted = currentStep > step.id;
          const isCurrent = currentStep === step.id;
          const isClickable = onStepClick && (isCompleted || isCurrent);

          return (
            <React.Fragment key={step.id}>
              {/* Step indicator */}
              <motion.button
                type="button"
                onClick={() => isClickable && onStepClick?.(step.id)}
                disabled={!isClickable}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full transition-all",
                  isCurrent && "bg-blue-corporate text-white shadow-lg shadow-blue-corporate/25",
                  isCompleted && "bg-emerald-100 text-emerald-700 hover:bg-emerald-200",
                  !isCurrent && !isCompleted && "bg-gray-100 text-gray-400",
                  isClickable && "cursor-pointer"
                )}
                whileHover={isClickable ? { scale: 1.02 } : undefined}
                whileTap={isClickable ? { scale: 0.98 } : undefined}
              >
                <span
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                    isCurrent && "bg-white/20",
                    isCompleted && "bg-emerald-500 text-white",
                    !isCurrent && !isCompleted && "bg-gray-200"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <step.icon className="w-4 h-4" />
                  )}
                </span>
                <span className="hidden sm:inline text-sm font-medium">
                  {step.name}
                </span>
              </motion.button>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "flex-1 h-1 mx-2 rounded-full transition-colors",
                    currentStep > step.id ? "bg-emerald-300" : "bg-gray-200"
                  )}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Mobile step name */}
      <p className="text-center mt-4 text-sm text-gray-600 sm:hidden">
        Étape {currentStep} sur 3 : {steps.find((s) => s.id === currentStep)?.name}
      </p>
    </div>
  );
}

export default QuoteSteps;




