/**
 * Types pour le système SEO Premium+ — pages éditoriales sur-mesure
 * pour les URLs à plus fort potentiel de trafic.
 *
 * Architecture : un fichier .ts par URL Premium+ exporte un objet `PremiumCase`.
 * Le helper `getPremiumCase()` les agrège dans un registry et expose un lookup
 * par (productSlug, deptSlug, communeSlug?).
 *
 * Si une URL a un `PremiumCase` enregistré, le template `ProductLocalPage`
 * détecte sa présence et substitue/enrichit les blocs standard avec les
 * blocs Premium+ correspondants.
 */

export interface PremiumPhoto {
  /** URL absolue ou chemin /images/... — passe par next/image */
  url: string
  /** Texte alt SEO descriptif */
  alt: string
  /** Légende affichée sous la photo (optionnel) */
  caption?: string
}

export interface PremiumQuote {
  /** Citation courte du client (1-2 phrases max) */
  text: string
  /** Nom abrégé style "Marie B." (RGPD) */
  author: string
  /** Quartier/contexte ex. "15e arrondissement" */
  context?: string
}

export interface CaseStudy {
  /** Titre court ex. "Garde-corps verre toute hauteur — appartement 4P" */
  title: string
  /** Adresse approximative ex. "Avenue de Versailles, 15e" */
  location: string
  /** Date du chantier ex. "Mars 2024" */
  date: string
  /** Description du chantier (3-5 phrases) */
  description: string
  /** Photos before/after (optionnel mais recommandé) */
  photos?: { before?: PremiumPhoto; after?: PremiumPhoto }
  /** Données chiffrées : prix, délai, métrage */
  metrics?: {
    price?: string  // ex. "8 400 €"
    duration?: string  // ex. "5 semaines"
    surface?: string  // ex. "12 ml"
  }
  /** Témoignage du client de ce chantier (optionnel) */
  quote?: PremiumQuote
}

export interface LocalReview {
  /** Citation du client (5 phrases max) */
  text: string
  /** Nom abrégé style "Marie B." */
  author: string
  /** Quartier précis ex. "Quartier Necker, 15e" */
  context: string
  /** Note sur 5 (entier) */
  rating: 1 | 2 | 3 | 4 | 5
  /** Date approximative ex. "Juillet 2024" */
  date?: string
  /** Photo du chantier réalisé (optionnel) */
  photo?: PremiumPhoto
}

export interface CrossCityRow {
  /** Slug de commune existant dans le dépt (sera linkée) */
  communeSlug: string
  /** Nom affiché de la commune (peut différer du slug normalisé) */
  communeName: string
  /** Prix moyen observé en € — affiché tel quel ex. "350 €/ml" */
  priceAvg?: string
  /** Délai moyen observé ex. "5-7 sem." */
  durationAvg?: string
  /** Caractéristique notable ex. "Architecture haussmannienne" */
  note?: string
}

export interface CityGuideSection {
  /** Titre H2 de la section ex. "Architecture haussmannienne du 15e" */
  heading: string
  /** Corps de la section — paragraphes en plain text, sera rendu en <p> séparés par double newline */
  body: string
}

export interface PremiumCase {
  /** Triplet identifiant — productSlug × deptSlug × communeSlug (ou null = page dept-level premium) */
  productSlug: string
  deptSlug: string
  communeSlug: string | null

  /** Statut éditorial — détermine si on rend les blocs en prod */
  status: 'draft' | 'published'

  /** Photo principale du hero (substitue le hero gradient généré) */
  heroPhoto: PremiumPhoto

  /** Citation client en overlay du hero (optionnel) */
  heroQuote?: PremiumQuote

  /** Vidéo YouTube/Vimeo (URL embed) — affichée à côté du guide */
  videoEmbedUrl?: string

  /** Guide éditorial ville — 3 à 6 sections H2 + paragraphes (1000-2000 mots total) */
  cityGuide?: {
    intro: string  // chapeau
    sections: CityGuideSection[]
  }

  /** 2-3 chantiers réels documentés */
  caseStudies?: CaseStudy[]

  /** 3-5 témoignages locaux nommés */
  localReviews?: LocalReview[]

  /** Tableau comparaison cross-villes (3 villes voisines) */
  crossCity?: {
    intro: string
    rows: CrossCityRow[]
  }

  /** Stats locales pour data block — strings libres pour flexibilité éditoriale */
  localStats?: {
    label: string
    value: string
  }[]

  /** Métadonnées pour mise à jour future / suivi Search Console */
  meta?: {
    /** Date de dernière mise à jour éditoriale (ISO yyyy-mm-dd) */
    lastEditedAt?: string
    /** Auteur de la rédaction */
    editor?: string
    /** Notes internes (non rendues) */
    internalNotes?: string
  }

  // ──────────────────────────────────────────────────────────────────
  // Maxi-Premium — champs optionnels pour les ~5 URLs vitrines.
  // Si présents, le template injecte des sections supplémentaires
  // entre les blocs Premium standards. Aucun impact sur les autres URLs.
  // ──────────────────────────────────────────────────────────────────

  /** Tier visuel — 'maxi' active les composants Maxi-Premium dédiés */
  tier?: 'standard' | 'maxi'

  /**
   * Essai éditorial long signé — 800-1500 mots.
   * Format Medium : titre, sous-titre, 4-6 sections, signature.
   * Affiché en pleine largeur après le cityGuide.
   */
  editorialDeepDive?: {
    title: string
    subtitle?: string
    /** Lecture estimée en minutes (badge UI) */
    readMinutes?: number
    /** Sections éditoriales — markdown-light (paragraphes séparés par \n\n) */
    sections: { heading: string; body: string }[]
    /** Signature — nom du persona qui signe l'essai */
    signature?: { name: string; role: string }
  }

  /**
   * Tableau comparatif technique multi-critères.
   * Affiché en card stickyfooter scroll-snap.
   */
  comparisonTable?: {
    title: string
    intro?: string
    /** Colonnes (options comparées). 2-4 idéal */
    columns: string[]
    /** Lignes (critères techniques). 8-15 idéal */
    rows: { criterion: string; values: string[]; highlight?: 0 | 1 | 2 | 3 }[]
    /** Conclusion éditoriale (1-3 phrases) */
    conclusion?: string
  }

  /**
   * FAQ ultra-localisée — 8-15 Q/R.
   * Génère un schema.org FAQPage pour rich snippets Google.
   */
  localFAQ?: {
    intro?: string
    items: { question: string; answer: string }[]
  }

  /**
   * Timeline visuelle du chantier — phases J-30 → J+90.
   * Affichée en steppers verticaux avec icônes.
   */
  processTimeline?: {
    title?: string
    intro?: string
    steps: {
      /** Label temporel ex. "J-30" ou "Semaine 1" */
      when: string
      /** Titre de l'étape ex. "Métré sur place" */
      title: string
      /** Description courte (2-4 phrases) */
      description: string
      /** Durée approximative ex. "45 min" ou "3-4 semaines" */
      duration?: string
    }[]
  }

  /**
   * Données enrichies pour rich schema (JSON-LD étendu).
   * - GPS coordinates pour Place schema
   * - PriceSpecification range
   * - AggregateRating local
   */
  richSchema?: {
    /** Coordonnées GPS de la zone d'intervention principale */
    geo?: { latitude: number; longitude: number }
    /** Fourchette prix (pour PriceSpecification schema) */
    priceRange?: { low: number; high: number; currency?: 'EUR' | 'USD' }
    /** Rating local agrégé pour cette URL spécifique */
    aggregateRating?: { value: number; count: number }
    /** Awards / certifications mises en avant */
    awards?: string[]
  }
}
