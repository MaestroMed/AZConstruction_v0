import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type { ExportConfig } from '@/types/configurator';

// Types pour le formulaire de devis
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
  // Champs pro
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

export interface QuoteRequestState {
  // Configuration produit (copie depuis configuratorStore)
  configuration: ExportConfig | null;
  screenshotDataUrl: string | null;
  
  // Etapes du formulaire (1: Coordonnées, 2: Projet, 3: Confirmation)
  currentStep: 1 | 2 | 3;
  
  // Données du formulaire
  contactInfo: ContactInfo | null;
  projectInfo: ProjectInfo | null;
  
  // Consentement RGPD
  rgpdAccepted: boolean;
  
  // Statut de soumission
  isSubmitting: boolean;
  submissionError: string | null;
  submittedQuoteNumber: string | null;
}

export interface QuoteRequestActions {
  // Configuration
  setConfiguration: (config: ExportConfig, screenshot?: string) => void;
  setScreenshot: (dataUrl: string) => void;
  
  // Navigation
  setCurrentStep: (step: 1 | 2 | 3) => void;
  nextStep: () => void;
  prevStep: () => void;
  
  // Données formulaire
  setContactInfo: (info: ContactInfo) => void;
  setProjectInfo: (info: ProjectInfo) => void;
  setRgpdAccepted: (accepted: boolean) => void;
  
  // Soumission
  setSubmitting: (isSubmitting: boolean) => void;
  setSubmissionError: (error: string | null) => void;
  setSubmittedQuoteNumber: (quoteNumber: string) => void;
  
  // Reset
  reset: () => void;
  resetForm: () => void;
}

export type QuoteRequestStore = QuoteRequestState & QuoteRequestActions;

const initialState: QuoteRequestState = {
  configuration: null,
  screenshotDataUrl: null,
  currentStep: 1,
  contactInfo: null,
  projectInfo: null,
  rgpdAccepted: false,
  isSubmitting: false,
  submissionError: null,
  submittedQuoteNumber: null,
};

export const useQuoteRequestStore = create<QuoteRequestStore>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,

        // Configuration
        setConfiguration: (config: ExportConfig, screenshot?: string) =>
          set(
            { configuration: config, screenshotDataUrl: screenshot || null },
            false,
            'setConfiguration'
          ),

        setScreenshot: (dataUrl: string) =>
          set({ screenshotDataUrl: dataUrl }, false, 'setScreenshot'),

        // Navigation entre les étapes
        setCurrentStep: (step: 1 | 2 | 3) =>
          set({ currentStep: step }, false, 'setCurrentStep'),

        nextStep: () =>
          set(
            (state) => ({
              currentStep: Math.min(3, state.currentStep + 1) as 1 | 2 | 3,
            }),
            false,
            'nextStep'
          ),

        prevStep: () =>
          set(
            (state) => ({
              currentStep: Math.max(1, state.currentStep - 1) as 1 | 2 | 3,
            }),
            false,
            'prevStep'
          ),

        // Données du formulaire
        setContactInfo: (info: ContactInfo) =>
          set({ contactInfo: info }, false, 'setContactInfo'),

        setProjectInfo: (info: ProjectInfo) =>
          set({ projectInfo: info }, false, 'setProjectInfo'),

        setRgpdAccepted: (accepted: boolean) =>
          set({ rgpdAccepted: accepted }, false, 'setRgpdAccepted'),

        // Soumission
        setSubmitting: (isSubmitting: boolean) =>
          set({ isSubmitting }, false, 'setSubmitting'),

        setSubmissionError: (error: string | null) =>
          set({ submissionError: error }, false, 'setSubmissionError'),

        setSubmittedQuoteNumber: (quoteNumber: string) =>
          set({ submittedQuoteNumber: quoteNumber }, false, 'setSubmittedQuoteNumber'),

        // Reset complet
        reset: () => set(initialState, false, 'reset'),

        // Reset formulaire uniquement (garde la config)
        resetForm: () =>
          set(
            (state) => ({
              ...initialState,
              configuration: state.configuration,
              screenshotDataUrl: state.screenshotDataUrl,
            }),
            false,
            'resetForm'
          ),
      }),
      {
        name: 'az-quote-request-storage',
        partialize: (state) => ({
          configuration: state.configuration,
          screenshotDataUrl: state.screenshotDataUrl,
          currentStep: state.currentStep,
          contactInfo: state.contactInfo,
          projectInfo: state.projectInfo,
          rgpdAccepted: state.rgpdAccepted,
        }),
      }
    ),
    { name: 'QuoteRequestStore' }
  )
);

// Sélecteurs pour optimiser les re-renders
export const useQuoteConfiguration = () =>
  useQuoteRequestStore((s) => ({
    configuration: s.configuration,
    screenshotDataUrl: s.screenshotDataUrl,
  }));

export const useQuoteStep = () =>
  useQuoteRequestStore((s) => s.currentStep);

export const useQuoteContactInfo = () =>
  useQuoteRequestStore((s) => s.contactInfo);

export const useQuoteProjectInfo = () =>
  useQuoteRequestStore((s) => s.projectInfo);

export const useQuoteSubmission = () =>
  useQuoteRequestStore((s) => ({
    isSubmitting: s.isSubmitting,
    submissionError: s.submissionError,
    submittedQuoteNumber: s.submittedQuoteNumber,
  }));


