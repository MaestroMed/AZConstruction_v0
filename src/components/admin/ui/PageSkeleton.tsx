"use client";

import { cn } from "@/lib/utils";

function SkeletonPulse({ className }: { className?: string }) {
  return <div className={cn("animate-pulse bg-gray-200 dark:bg-slate-700 rounded-lg", className)} />;
}

interface PageSkeletonProps {
  variant?: "table" | "grid" | "form" | "dashboard";
}

export function PageSkeleton({ variant = "table" }: PageSkeletonProps) {
  if (variant === "dashboard") {
    return (
      <div className="space-y-6">
        {/* KPI cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
              <SkeletonPulse className="h-4 w-20 mb-3" />
              <SkeletonPulse className="h-8 w-16 mb-2" />
              <SkeletonPulse className="h-3 w-28" />
            </div>
          ))}
        </div>
        {/* Content area */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <SkeletonPulse className="h-5 w-40 mb-6" />
          {[1, 2, 3].map(i => (
            <div key={i} className="flex items-center gap-4 py-4 border-b border-gray-50 last:border-0">
              <SkeletonPulse className="w-10 h-10 rounded-full" />
              <div className="flex-1 space-y-2">
                <SkeletonPulse className="h-4 w-48" />
                <SkeletonPulse className="h-3 w-32" />
              </div>
              <SkeletonPulse className="h-6 w-16 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <SkeletonPulse className="aspect-video rounded-none" />
            <div className="p-4 space-y-2">
              <SkeletonPulse className="h-4 w-3/4" />
              <SkeletonPulse className="h-3 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "form") {
    return (
      <div className="bg-white rounded-2xl p-6 border border-gray-100 space-y-6">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="space-y-2">
            <SkeletonPulse className="h-4 w-24" />
            <SkeletonPulse className="h-10 w-full" />
          </div>
        ))}
        <SkeletonPulse className="h-10 w-32 mt-4" />
      </div>
    );
  }

  // Default: table
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      {/* Table header */}
      <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-100">
        {[1, 2, 3, 4].map(i => (
          <SkeletonPulse key={i} className="h-4 flex-1" />
        ))}
      </div>
      {/* Table rows */}
      {[1, 2, 3, 4, 5].map(i => (
        <div key={i} className="flex items-center gap-4 px-6 py-4 border-b border-gray-50 last:border-0">
          <SkeletonPulse className="w-8 h-8 rounded-lg flex-shrink-0" />
          <SkeletonPulse className="h-4 flex-1" />
          <SkeletonPulse className="h-4 w-24" />
          <SkeletonPulse className="h-4 w-16" />
          <SkeletonPulse className="h-6 w-20 rounded-full" />
        </div>
      ))}
    </div>
  );
}
