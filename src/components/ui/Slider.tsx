"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  onChange: (value: number) => void;
  className?: string;
}

export function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  unit = "cm",
  onChange,
  className,
}: SliderProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">{label}</span>
        <span className="text-sm font-semibold text-navy-dark">
          {value}
          {unit}
        </span>
      </div>
      <div className="relative h-2 bg-gray-200 rounded-full">
        <div
          className="absolute h-full bg-gradient-to-r from-blue-corporate to-cyan-glow rounded-full transition-all duration-150"
          style={{ width: `${percentage}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-blue-corporate rounded-full shadow-md pointer-events-none transition-all duration-150"
          style={{ left: `calc(${percentage}% - 8px)` }}
        />
      </div>
    </div>
  );
}



