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
}
