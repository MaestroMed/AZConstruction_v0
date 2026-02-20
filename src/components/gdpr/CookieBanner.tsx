"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Settings, X, Check, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  hasConsent,
  acceptAllCookies,
  rejectAllCookies,
  saveConsent,
  getStoredConsent,
  type ConsentPreferences,
} from "@/lib/consent";

interface CookieBannerProps {
  className?: string;
}

export function CookieBanner({ className }: CookieBannerProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [showSettings, setShowSettings] = React.useState(false);
  const [preferences, setPreferences] = React.useState({
    analytics: false,
    marketing: false,
    functional: false,
  });

  React.useEffect(() => {
    // Afficher la bannière si pas de consentement stocké
    const timer = setTimeout(() => {
      if (!hasConsent()) {
        setIsVisible(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleAcceptAll = () => {
    acceptAllCookies();
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    rejectAllCookies();
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleOpenSettings = () => {
    // Charger les préférences existantes si disponibles
    const stored = getStoredConsent();
    if (stored) {
      setPreferences({
        analytics: stored.analytics,
        marketing: stored.marketing,
        functional: stored.functional,
      });
    }
    setShowSettings(true);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay pour les paramètres */}
          {showSettings && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
              onClick={() => setShowSettings(false)}
            />
          )}

          {/* Modal des paramètres */}
          <AnimatePresence>
            {showSettings && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="fixed inset-x-4 top-1/2 -translate-y-1/2 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-lg bg-white dark:bg-navy-dark rounded-2xl shadow-2xl z-[9999] overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                        <Settings className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Paramètres des cookies
                      </h3>
                    </div>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    {/* Cookies nécessaires */}
                    <CookieCategory
                      title="Cookies nécessaires"
                      description="Essentiels au fonctionnement du site. Ils ne peuvent pas être désactivés."
                      checked={true}
                      disabled={true}
                      icon={<Shield className="w-4 h-4" />}
                    />

                    {/* Cookies analytiques */}
                    <CookieCategory
                      title="Cookies analytiques"
                      description="Nous aident à comprendre comment vous utilisez le site pour l'améliorer."
                      checked={preferences.analytics}
                      onChange={(checked) =>
                        setPreferences((p) => ({ ...p, analytics: checked }))
                      }
                      icon={<Cookie className="w-4 h-4" />}
                    />

                    {/* Cookies marketing */}
                    <CookieCategory
                      title="Cookies marketing"
                      description="Utilisés pour vous proposer des publicités pertinentes."
                      checked={preferences.marketing}
                      onChange={(checked) =>
                        setPreferences((p) => ({ ...p, marketing: checked }))
                      }
                      icon={<Cookie className="w-4 h-4" />}
                    />

                    {/* Cookies fonctionnels */}
                    <CookieCategory
                      title="Cookies fonctionnels"
                      description="Permettent de mémoriser vos préférences (langue, région)."
                      checked={preferences.functional}
                      onChange={(checked) =>
                        setPreferences((p) => ({ ...p, functional: checked }))
                      }
                      icon={<Cookie className="w-4 h-4" />}
                    />
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={handleRejectAll}
                      className="flex-1 px-4 py-2.5 border border-gray-300 dark:border-white/20 rounded-xl text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors font-medium"
                    >
                      Tout refuser
                    </button>
                    <button
                      onClick={handleSavePreferences}
                      className="flex-1 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl hover:from-cyan-600 hover:to-cyan-700 transition-all font-medium"
                    >
                      Enregistrer
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bannière principale */}
          {!showSettings && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={cn(
                "fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6",
                className
              )}
            >
              <div className="max-w-5xl mx-auto bg-white dark:bg-navy-dark rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 overflow-hidden">
                <div className="p-4 md:p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    {/* Icône et texte */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center flex-shrink-0">
                          <Cookie className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Nous respectons votre vie privée
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic 
                        et personnaliser le contenu. Vous pouvez accepter tous les cookies, les refuser 
                        ou personnaliser vos préférences.{" "}
                        <Link
                          href="/cookies"
                          className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium"
                        >
                          En savoir plus
                        </Link>
                      </p>
                    </div>

                    {/* Boutons */}
                    <div className="flex flex-col sm:flex-row gap-2 md:gap-3 flex-shrink-0">
                      <button
                        onClick={handleOpenSettings}
                        className="px-4 py-2.5 border border-gray-300 dark:border-white/20 rounded-xl text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors font-medium text-sm flex items-center justify-center gap-2"
                      >
                        <Settings className="w-4 h-4" />
                        Personnaliser
                      </button>
                      <button
                        onClick={handleRejectAll}
                        className="px-4 py-2.5 border border-gray-300 dark:border-white/20 rounded-xl text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors font-medium text-sm"
                      >
                        Tout refuser
                      </button>
                      <button
                        onClick={handleAcceptAll}
                        className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl hover:from-cyan-600 hover:to-cyan-700 transition-all font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                      >
                        <Check className="w-4 h-4" />
                        Tout accepter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}

// Composant pour une catégorie de cookies
function CookieCategory({
  title,
  description,
  checked,
  onChange,
  disabled = false,
  icon,
}: {
  title: string;
  description: string;
  checked: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <label
      className={cn(
        "flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer",
        disabled
          ? "bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 cursor-not-allowed"
          : checked
          ? "bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-500/30"
          : "bg-white dark:bg-transparent border-gray-200 dark:border-white/10 hover:border-cyan-300 dark:hover:border-cyan-500/50"
      )}
    >
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          {icon && (
            <span className="text-gray-400 dark:text-gray-500">{icon}</span>
          )}
          <span className="font-medium text-gray-900 dark:text-white">
            {title}
          </span>
          {disabled && (
            <span className="text-xs bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-full">
              Requis
            </span>
          )}
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </div>
      <div className="flex-shrink-0 mt-1">
        <div
          className={cn(
            "w-12 h-7 rounded-full transition-all relative",
            checked
              ? "bg-cyan-500"
              : "bg-gray-300 dark:bg-white/20",
            disabled && "opacity-60"
          )}
        >
          <div
            className={cn(
              "absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-all",
              checked ? "left-6" : "left-1"
            )}
          />
        </div>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => !disabled && onChange?.(e.target.checked)}
          disabled={disabled}
          className="sr-only"
        />
      </div>
    </label>
  );
}

// Bouton pour rouvrir les paramètres de cookies (à placer dans le footer)
export function CookieSettingsButton() {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleClick = () => {
    // Déclencher l'affichage de la bannière
    window.dispatchEvent(new CustomEvent("open-cookie-settings"));
  };

  React.useEffect(() => {
    // Afficher le bouton uniquement si le consentement a été donné
    setIsVisible(hasConsent());

    const handleConsentUpdate = () => {
      setIsVisible(hasConsent());
    };

    window.addEventListener("consent-updated", handleConsentUpdate);
    return () => window.removeEventListener("consent-updated", handleConsentUpdate);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={handleClick}
      className="text-sm text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-1"
    >
      <Cookie className="w-3.5 h-3.5" />
      Gérer les cookies
    </button>
  );
}
