"use client";

import { Cookie } from "lucide-react";

export function ResetCookiesButton() {
  const handleClick = () => {
    // Supprimer le consentement pour réafficher la bannière
    localStorage.removeItem("az_cookie_consent");
    window.location.reload();
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl hover:from-cyan-600 hover:to-cyan-700 transition-all font-medium"
    >
      <Cookie className="w-5 h-5" />
      Modifier mes préférences
    </button>
  );
}
