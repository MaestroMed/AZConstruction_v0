/**
 * Configuration Sentry pour le monitoring des erreurs
 * 
 * Ce fichier fournit une abstraction pour Sentry.
 * Pour une installation complète, exécutez:
 * npx @sentry/wizard@latest -i nextjs
 */

// Types pour le contexte Sentry
interface SentryContext {
  user?: {
    id?: string;
    email?: string;
    name?: string;
  };
  tags?: Record<string, string>;
  extra?: Record<string, unknown>;
}

// Interface minimale pour Sentry
interface SentryLike {
  setUser: (user: SentryContext["user"] | null) => void;
  setTag: (key: string, value: string) => void;
  setExtra: (key: string, value: unknown) => void;
  captureException: (error: Error) => void;
  captureMessage: (message: string, level?: string) => void;
  addBreadcrumb: (breadcrumb: unknown) => void;
  startInactiveSpan: (options: { name: string; op: string }) => { end: () => void } | null;
}

// Vérifier si Sentry est disponible
function getSentry(): SentryLike | null {
  if (typeof window === "undefined") return null;
  
  const win = window as unknown as { Sentry?: SentryLike };
  return win.Sentry || null;
}

/**
 * Capture une erreur et l'envoie à Sentry
 */
export function captureError(error: Error, context?: SentryContext): void {
  // Log en console en développement
  console.error("[Error]", error.message, error);
  
  // Envoyer à Sentry si disponible
  const Sentry = getSentry();
  if (Sentry) {
    if (context?.user) {
      Sentry.setUser(context.user);
    }
    
    if (context?.tags) {
      Object.entries(context.tags).forEach(([key, value]) => {
        Sentry.setTag(key, value);
      });
    }
    
    if (context?.extra) {
      Object.entries(context.extra).forEach(([key, value]) => {
        Sentry.setExtra(key, value);
      });
    }
    
    Sentry.captureException(error);
  }
}

/**
 * Capture un message (non-erreur) pour le suivi
 */
export function captureMessage(
  message: string,
  level: "info" | "warning" | "error" = "info",
  context?: SentryContext
): void {
  console.log(`[${level.toUpperCase()}]`, message);
  
  const Sentry = getSentry();
  if (Sentry) {
    if (context?.tags) {
      Object.entries(context.tags).forEach(([key, value]) => {
        Sentry.setTag(key, value);
      });
    }
    
    Sentry.captureMessage(message, level);
  }
}

/**
 * Démarre une transaction pour le suivi de performance
 */
export function startTransaction(name: string, op: string): { finish: () => void } {
  const Sentry = getSentry();
  if (Sentry) {
    const transaction = Sentry.startInactiveSpan({ name, op });
    return {
      finish: () => transaction?.end(),
    };
  }
  
  // Fallback sans Sentry
  const startTime = performance.now();
  return {
    finish: () => {
      const duration = performance.now() - startTime;
      console.log(`[Performance] ${name}: ${duration.toFixed(2)}ms`);
    },
  };
}

/**
 * Configure le contexte utilisateur pour Sentry
 */
export function setUser(user: { id?: string; email?: string; name?: string } | null): void {
  const Sentry = getSentry();
  if (Sentry) {
    Sentry.setUser(user);
  }
}

/**
 * Ajoute un breadcrumb pour le suivi du parcours utilisateur
 */
export function addBreadcrumb(breadcrumb: {
  category: string;
  message: string;
  level?: "debug" | "info" | "warning" | "error";
  data?: Record<string, unknown>;
}): void {
  const Sentry = getSentry();
  if (Sentry) {
    Sentry.addBreadcrumb({
      ...breadcrumb,
      timestamp: Date.now() / 1000,
    });
  }
}
