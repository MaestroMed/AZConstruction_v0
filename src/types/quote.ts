// Types spécifiques pour le système de devis

import type { ExportConfig } from './configurator';

// ============================================
// TYPES CLIENT
// ============================================

export type ClientType = 'particulier' | 'professionnel';
export type Civilite = 'M' | 'Mme';
export type TypeProjet = 'neuf' | 'renovation' | 'remplacement';
export type DelaiSouhaite = 'urgent' | '1-3mois' | '3-6mois' | 'flexible';

export interface ContactInfo {
  type: ClientType;
  civilite: Civilite;
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  raisonSociale?: string;
  siret?: string;
}

export interface AdresseChantier {
  rue: string;
  codePostal: string;
  ville: string;
}

export interface ProjectInfo {
  adresseChantier: AdresseChantier;
  typeProjet: TypeProjet;
  delaiSouhaite: DelaiSouhaite;
  poseRequise: boolean;
  commentaire?: string;
}

// ============================================
// PAYLOAD API
// ============================================

export interface QuoteRequestPayload {
  configuration: ExportConfig;
  contactInfo: ContactInfo;
  projectInfo: ProjectInfo;
  screenshotDataUrl?: string;
  rgpdAccepted: boolean;
}

export interface QuoteRequestResponse {
  success: boolean;
  quoteNumber?: string;
  quoteId?: string;
  message?: string;
  error?: string;
}

// ============================================
// STATUTS DEVIS
// ============================================

export type QuoteStatus = 
  | 'en_attente'
  | 'envoye'
  | 'accepte'
  | 'refuse'
  | 'expire';

export const quoteStatusLabels: Record<QuoteStatus, string> = {
  en_attente: 'En attente',
  envoye: 'Envoyé',
  accepte: 'Accepté',
  refuse: 'Refusé',
  expire: 'Expiré',
};

export const quoteStatusColors: Record<QuoteStatus, string> = {
  en_attente: 'bg-amber-100 text-amber-700',
  envoye: 'bg-blue-100 text-blue-700',
  accepte: 'bg-emerald-100 text-emerald-700',
  refuse: 'bg-red-100 text-red-700',
  expire: 'bg-gray-100 text-gray-500',
};

// ============================================
// AFFICHAGE DEVIS
// ============================================

export interface QuoteListItem {
  id: string;
  numero: string;
  dateDemande: Date;
  dateExpiration?: Date;
  status: QuoteStatus;
  totalTTC: number;
  itemsCount: number;
  productFamily?: string;
}

export interface QuoteDetail extends QuoteListItem {
  totalHT: number;
  tva: number;
  remiseSpeciale?: number;
  commentaireClient?: string;
  commentaireAdmin?: string;
  pdfPath?: string;
  items: QuoteItemDetail[];
  contactInfo: ContactInfo;
  projectInfo: ProjectInfo;
}

export interface QuoteItemDetail {
  id: string;
  productName: string;
  productFamily: string;
  quantity: number;
  configSnapshot: ExportConfig;
  prixUnitaireHT: number;
  prixTotalHT: number;
}

// ============================================
// LABELS POUR AFFICHAGE
// ============================================

export const typeProjetLabels: Record<TypeProjet, string> = {
  neuf: 'Construction neuve',
  renovation: 'Rénovation',
  remplacement: 'Remplacement',
};

export const delaiLabels: Record<DelaiSouhaite, string> = {
  urgent: 'Urgent (< 1 mois)',
  '1-3mois': '1 à 3 mois',
  '3-6mois': '3 à 6 mois',
  flexible: 'Flexible',
};

export const civiliteLabels: Record<Civilite, string> = {
  M: 'Monsieur',
  Mme: 'Madame',
};



