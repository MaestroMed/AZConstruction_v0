"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus, LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon?: LucideIcon;
  variant?: "default" | "primary" | "success" | "warning" | "error";
  loading?: boolean;
}

export function StatsCard({
  title,
  value,
  change,
  changeLabel = "vs mois dernier",
  icon: Icon,
  variant = "default",
  loading = false,
}: StatsCardProps) {
  const variants = {
    default: {
      bg: "bg-white",
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600",
    },
    primary: {
      bg: "bg-gradient-to-br from-cyan-500 to-cyan-600",
      iconBg: "bg-white/20",
      iconColor: "text-white",
    },
    success: {
      bg: "bg-white",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    warning: {
      bg: "bg-white",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
    },
    error: {
      bg: "bg-white",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },
  };

  const isPrimary = variant === "primary";
  const style = variants[variant];

  const getTrendIcon = () => {
    if (change === undefined) return null;
    if (change > 0) return <TrendingUp className="w-4 h-4" />;
    if (change < 0) return <TrendingDown className="w-4 h-4" />;
    return <Minus className="w-4 h-4" />;
  };

  const getTrendColor = () => {
    if (change === undefined) return "";
    if (isPrimary) {
      return change >= 0 ? "text-white/80" : "text-red-200";
    }
    if (change > 0) return "text-emerald-600";
    if (change < 0) return "text-red-600";
    return "text-gray-500";
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-6 animate-pulse">
        <div className="flex items-start justify-between">
          <div className="space-y-3 flex-1">
            <div className="h-4 bg-gray-200 rounded w-24" />
            <div className="h-8 bg-gray-200 rounded w-32" />
            <div className="h-3 bg-gray-200 rounded w-20" />
          </div>
          <div className="w-12 h-12 bg-gray-200 rounded-xl" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-xl border border-gray-200 p-6 transition-all duration-200 hover:shadow-lg",
        style.bg,
        isPrimary && "border-transparent text-white"
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p
            className={cn(
              "text-sm font-medium",
              isPrimary ? "text-white/80" : "text-gray-500"
            )}
          >
            {title}
          </p>
          <p
            className={cn(
              "text-3xl font-bold tracking-tight",
              isPrimary ? "text-white" : "text-gray-900"
            )}
          >
            {value}
          </p>
          {change !== undefined && (
            <div className={cn("flex items-center gap-1 text-sm", getTrendColor())}>
              {getTrendIcon()}
              <span className="font-medium">
                {change > 0 ? "+" : ""}
                {change}%
              </span>
              <span className={cn(isPrimary ? "text-white/60" : "text-gray-400")}>
                {changeLabel}
              </span>
            </div>
          )}
        </div>
        {Icon && (
          <div
            className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center",
              style.iconBg
            )}
          >
            <Icon className={cn("w-6 h-6", style.iconColor)} />
          </div>
        )}
      </div>
    </div>
  );
}

// Mini stats for inline display
export function MiniStat({
  label,
  value,
  change,
}: {
  label: string;
  value: string | number;
  change?: number;
}) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-gray-500">{label}</span>
      <div className="flex items-center gap-2">
        <span className="font-semibold text-gray-900">{value}</span>
        {change !== undefined && (
          <span
            className={cn(
              "text-xs font-medium px-1.5 py-0.5 rounded",
              change >= 0 ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
            )}
          >
            {change > 0 ? "+" : ""}
            {change}%
          </span>
        )}
      </div>
    </div>
  );
}

// Stats grid wrapper
export function StatsGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {children}
    </div>
  );
}




