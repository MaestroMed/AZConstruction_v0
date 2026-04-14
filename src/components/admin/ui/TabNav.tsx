"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Tab {
  label: string;
  href: string;
  icon?: LucideIcon;
}

interface TabNavProps {
  tabs: Tab[];
}

export function TabNav({ tabs }: TabNavProps) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-xl mb-6 overflow-x-auto">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        const Icon = tab.icon;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={cn(
              "inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all",
              isActive
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            )}
          >
            {Icon && <Icon className="w-4 h-4" />}
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
