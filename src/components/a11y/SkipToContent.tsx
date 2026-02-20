"use client";

/**
 * Lien d'évitement pour l'accessibilité
 * Permet aux utilisateurs de clavier et lecteurs d'écran de sauter directement au contenu principal
 */
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="
        sr-only focus:not-sr-only
        fixed top-4 left-4 z-[10000]
        bg-cyan-600 text-white
        px-6 py-3 rounded-lg
        font-semibold text-sm
        shadow-lg shadow-cyan-600/30
        focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-navy-dark
        transition-all duration-200
        hover:bg-cyan-700
      "
    >
      Aller au contenu principal
    </a>
  );
}

/**
 * Wrapper pour le contenu principal avec l'ID cible du skip link
 */
export function MainContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className={`outline-none ${className}`}
      role="main"
      aria-label="Contenu principal"
    >
      {children}
    </main>
  );
}
