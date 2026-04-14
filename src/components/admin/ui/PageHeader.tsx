"use client";

import Link from "next/link";
import { ArrowLeft, LucideIcon } from "lucide-react";

interface PageHeaderAction {
  label: string;
  icon?: LucideIcon;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  loading?: boolean;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  backHref?: string;
  backLabel?: string;
  actions?: PageHeaderAction[];
  badge?: { label: string; color?: string };
}

export function PageHeader({
  title,
  description,
  backHref,
  backLabel = "Retour",
  actions,
  badge,
}: PageHeaderProps) {
  const variantStyles = {
    primary:
      "bg-cyan-600 text-white hover:bg-cyan-700",
    secondary:
      "bg-gray-100 text-gray-700 hover:bg-gray-200",
    danger:
      "bg-red-50 text-red-600 hover:bg-red-100",
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <div>
        {backHref && (
          <Link
            href={backHref}
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-cyan-600 transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {backLabel}
          </Link>
        )}
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          {badge && (
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                badge.color || "bg-cyan-50 text-cyan-700"
              }`}
            >
              {badge.label}
            </span>
          )}
        </div>
        {description && (
          <p className="text-gray-500 text-sm mt-1">{description}</p>
        )}
      </div>

      {actions && actions.length > 0 && (
        <div className="flex items-center gap-2 flex-shrink-0">
          {actions.map((action, i) => {
            const style = variantStyles[action.variant || "primary"];
            const Icon = action.icon;
            const content = (
              <>
                {Icon && <Icon className="w-4 h-4" />}
                {action.label}
              </>
            );

            if (action.href) {
              return (
                <Link
                  key={i}
                  href={action.href}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${style}`}
                >
                  {content}
                </Link>
              );
            }

            return (
              <button
                key={i}
                onClick={action.onClick}
                disabled={action.disabled || action.loading}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors disabled:opacity-50 ${style}`}
              >
                {content}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
