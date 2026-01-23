/**
 * Utilitaires de tracking analytics
 * Events de conversion pour GA4 et Plausible
 */

// Types pour les events
interface TrackEventOptions {
  category?: string;
  label?: string;
  value?: number;
  [key: string]: string | number | boolean | undefined;
}

// Déclaration pour TypeScript
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, options?: { props?: Record<string, string | number> }) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Envoie un event vers GA4 et Plausible
 */
export function trackEvent(eventName: string, options?: TrackEventOptions) {
  // Google Analytics 4
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, {
      event_category: options?.category || "engagement",
      event_label: options?.label,
      value: options?.value,
      ...options,
    });
  }

  // Plausible
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible(eventName, {
      props: options as Record<string, string | number>,
    });
  }
}

// ============================================
// EVENTS DE CONVERSION
// ============================================

/**
 * Event: Formulaire de devis soumis
 */
export function trackQuoteSubmitted(data: {
  productFamily: string;
  estimatedValue: number;
  clientType: "particulier" | "professionnel";
}) {
  trackEvent("quote_submitted", {
    category: "conversion",
    label: data.productFamily,
    value: data.estimatedValue,
    product_family: data.productFamily,
    client_type: data.clientType,
  });

  // Event GA4 de conversion recommandé
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "generate_lead", {
      currency: "EUR",
      value: data.estimatedValue,
    });
  }
}

/**
 * Event: Formulaire de contact soumis
 */
export function trackContactFormSubmitted(data: {
  formType: "particulier" | "professionnel";
  subject?: string;
}) {
  trackEvent("contact_form_submitted", {
    category: "conversion",
    label: data.formType,
    form_type: data.formType,
    subject: data.subject,
  });
}

/**
 * Event: Clic sur le numéro de téléphone
 */
export function trackPhoneClick(location: string) {
  trackEvent("phone_click", {
    category: "contact",
    label: location,
    click_location: location,
  });
}

/**
 * Event: Clic sur l'email
 */
export function trackEmailClick(location: string) {
  trackEvent("email_click", {
    category: "contact",
    label: location,
    click_location: location,
  });
}

/**
 * Event: Ouverture du configurateur 3D
 */
export function trackConfiguratorOpened(productFamily: string) {
  trackEvent("configurator_opened", {
    category: "engagement",
    label: productFamily,
    product_family: productFamily,
  });
}

/**
 * Event: Configuration modifiée dans le configurateur
 */
export function trackConfiguratorChanged(data: {
  productFamily: string;
  changeType: "color" | "dimensions" | "style" | "options";
}) {
  trackEvent("configurator_changed", {
    category: "engagement",
    label: data.productFamily,
    product_family: data.productFamily,
    change_type: data.changeType,
  });
}

/**
 * Event: Vue d'une page produit
 */
export function trackProductView(data: {
  productFamily: string;
  productName: string;
}) {
  trackEvent("view_item", {
    category: "ecommerce",
    label: data.productName,
    product_family: data.productFamily,
    product_name: data.productName,
  });

  // Event GA4 e-commerce
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "view_item", {
      items: [
        {
          item_name: data.productName,
          item_category: data.productFamily,
        },
      ],
    });
  }
}

/**
 * Event: Téléchargement de PDF/Catalogue
 */
export function trackDownload(data: {
  fileName: string;
  fileType: "pdf" | "catalogue" | "devis";
}) {
  trackEvent("file_download", {
    category: "engagement",
    label: data.fileName,
    file_name: data.fileName,
    file_type: data.fileType,
  });
}

/**
 * Event: Inscription newsletter/compte
 */
export function trackSignUp(method: "email" | "google" | "compte") {
  trackEvent("sign_up", {
    category: "conversion",
    label: method,
    method,
  });

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "sign_up", { method });
  }
}

/**
 * Event: Scroll jusqu'à une section importante
 */
export function trackSectionView(sectionName: string) {
  trackEvent("section_view", {
    category: "engagement",
    label: sectionName,
    section_name: sectionName,
  });
}

/**
 * Event: Clic sur un CTA
 */
export function trackCTAClick(data: {
  ctaText: string;
  ctaLocation: string;
  destination?: string;
}) {
  trackEvent("cta_click", {
    category: "engagement",
    label: data.ctaText,
    cta_text: data.ctaText,
    cta_location: data.ctaLocation,
    destination: data.destination,
  });
}

/**
 * Event: Début du processus de devis
 */
export function trackQuoteStarted(productFamily: string) {
  trackEvent("quote_started", {
    category: "conversion",
    label: productFamily,
    product_family: productFamily,
  });

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "begin_checkout");
  }
}

/**
 * Event: Abandon du formulaire de devis
 */
export function trackQuoteAbandoned(data: {
  productFamily: string;
  step: number;
  stepName: string;
}) {
  trackEvent("quote_abandoned", {
    category: "conversion",
    label: data.productFamily,
    product_family: data.productFamily,
    step: data.step,
    step_name: data.stepName,
  });
}

/**
 * Event: Visite page thermolaquage (fort potentiel SEO)
 */
export function trackThermolaquageView(subpage?: string) {
  trackEvent("thermolaquage_view", {
    category: "pages",
    label: subpage || "main",
    subpage: subpage || "main",
  });
}
