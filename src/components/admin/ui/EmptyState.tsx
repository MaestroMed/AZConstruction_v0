"use client";

import { LucideIcon, Inbox } from "lucide-react";

interface EmptyStateProps {
  icon?: LucideIcon;
  title?: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({
  icon: Icon = Inbox,
  title = "Aucun élément",
  description = "Il n'y a rien à afficher pour le moment.",
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-gray-200 dark:border-slate-700">
      <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-slate-800 flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-gray-300 dark:text-gray-600" />
      </div>
      <p className="text-gray-900 dark:text-white font-semibold mb-1">{title}</p>
      <p className="text-gray-400 dark:text-gray-500 text-sm text-center max-w-sm">{description}</p>
      {action && (
        <button
          onClick={action.onClick}
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-xl text-sm font-semibold hover:bg-cyan-700 transition-colors"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
