"use client";

import * as React from "react";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhoneLinkProps {
  className?: string;
  iconClassName?: string;
  showIcon?: boolean;
  variant?: "default" | "button" | "minimal";
}

// Cache global pour éviter les appels API multiples
let cachedPhone: string | null = null;
let fetchPromise: Promise<string> | null = null;

async function fetchPhone(): Promise<string> {
  if (cachedPhone) return cachedPhone;
  
  if (fetchPromise) return fetchPromise;
  
  fetchPromise = fetch("/api/settings")
    .then((res) => res.json())
    .then((data) => {
      cachedPhone = data.settings?.phone || "+33 1 23 45 67 89";
      return cachedPhone as string;
    })
    .catch(() => {
      cachedPhone = "+33 1 23 45 67 89";
      return cachedPhone as string;
    });
  
  return fetchPromise;
}

export function PhoneLink({
  className,
  iconClassName,
  showIcon = true,
  variant = "default",
}: PhoneLinkProps) {
  const [phone, setPhone] = React.useState<string>(cachedPhone || "+33 1 23 45 67 89");

  React.useEffect(() => {
    fetchPhone().then(setPhone);
    
    // Écouter les mises à jour des settings
    const handleUpdate = (e: CustomEvent) => {
      if (e.detail?.phone) {
        cachedPhone = e.detail.phone;
        setPhone(e.detail.phone);
      }
    };
    
    window.addEventListener("az_settings_updated", handleUpdate as EventListener);
    return () => {
      window.removeEventListener("az_settings_updated", handleUpdate as EventListener);
    };
  }, []);

  // Format tel: link (remove spaces and special chars)
  const telLink = `tel:${phone.replace(/[\s.-]/g, "")}`;

  if (variant === "button") {
    return (
      <a
        href={telLink}
        className={cn(
          "inline-flex items-center gap-2 px-4 py-2 rounded-full",
          "bg-white/10 hover:bg-white/20 border border-white/20",
          "text-white font-medium transition-all duration-200",
          className
        )}
      >
        {showIcon && <Phone className={cn("w-4 h-4", iconClassName)} />}
        {phone}
      </a>
    );
  }

  if (variant === "minimal") {
    return (
      <a
        href={telLink}
        className={cn(
          "inline-flex items-center gap-1.5 text-inherit hover:opacity-80 transition-opacity",
          className
        )}
      >
        {showIcon && <Phone className={cn("w-4 h-4", iconClassName)} />}
        {phone}
      </a>
    );
  }

  return (
    <a
      href={telLink}
      className={cn(
        "inline-flex items-center gap-2 text-white hover:text-cyan-glow transition-colors",
        className
      )}
    >
      {showIcon && <Phone className={cn("w-5 h-5", iconClassName)} />}
      <span>{phone}</span>
    </a>
  );
}

// Hook pour utiliser le téléphone ailleurs
export function usePhone() {
  const [phone, setPhone] = React.useState<string>(cachedPhone || "+33 1 23 45 67 89");

  React.useEffect(() => {
    fetchPhone().then(setPhone);
  }, []);

  return phone;
}


