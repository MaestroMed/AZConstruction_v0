import * as React from "react";

type ElementType = "span" | "div" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label";

/**
 * Composant pour cacher visuellement du contenu tout en le gardant accessible
 * aux technologies d'assistance (lecteurs d'écran)
 */
export function VisuallyHidden({
  children,
  as = "span",
  ...props
}: {
  children: React.ReactNode;
  as?: ElementType;
} & React.HTMLAttributes<HTMLElement>) {
  const Component = as;
  
  return (
    <Component className="sr-only" {...props}>
      {children}
    </Component>
  );
}

/**
 * Hook pour annoncer des messages aux lecteurs d'écran
 */
export function useAnnounce() {
  const announce = React.useCallback((message: string, priority: "polite" | "assertive" = "polite") => {
    const element = document.createElement("div");
    element.setAttribute("role", "status");
    element.setAttribute("aria-live", priority);
    element.setAttribute("aria-atomic", "true");
    element.className = "sr-only";
    element.textContent = message;
    
    document.body.appendChild(element);
    
    // Supprimer après l'annonce
    setTimeout(() => {
      document.body.removeChild(element);
    }, 1000);
  }, []);

  return announce;
}
