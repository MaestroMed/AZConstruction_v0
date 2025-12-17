import { z } from 'zod';

// ============================================
// SCHEMAS DE VALIDATION - COORDONNEES
// ============================================

export const contactInfoSchema = z.object({
  type: z.enum(['particulier', 'professionnel']),
  civilite: z.enum(['M', 'Mme']),
  prenom: z
    .string()
    .min(2, 'Le prénom doit contenir au moins 2 caractères')
    .max(50, 'Le prénom ne peut pas dépasser 50 caractères'),
  nom: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(50, 'Le nom ne peut pas dépasser 50 caractères'),
  email: z
    .string()
    .email('Veuillez entrer une adresse email valide'),
  telephone: z
    .string()
    .min(10, 'Le numéro de téléphone doit contenir au moins 10 chiffres')
    .regex(
      /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
      'Veuillez entrer un numéro de téléphone français valide'
    ),
  // Champs professionnels (optionnels)
  raisonSociale: z
    .string()
    .max(100, 'La raison sociale ne peut pas dépasser 100 caractères')
    .optional(),
  siret: z
    .string()
    .regex(/^\d{14}$/, 'Le SIRET doit contenir exactement 14 chiffres')
    .optional(),
}).refine(
  (data) => {
    // Si professionnel, raison sociale obligatoire
    if (data.type === 'professionnel') {
      return data.raisonSociale && data.raisonSociale.length >= 2;
    }
    return true;
  },
  {
    message: 'La raison sociale est obligatoire pour les professionnels',
    path: ['raisonSociale'],
  }
);

// ============================================
// SCHEMAS DE VALIDATION - PROJET
// ============================================

export const adresseChantierSchema = z.object({
  rue: z
    .string()
    .min(5, 'L\'adresse doit contenir au moins 5 caractères')
    .max(200, 'L\'adresse ne peut pas dépasser 200 caractères'),
  codePostal: z
    .string()
    .regex(/^\d{5}$/, 'Le code postal doit contenir 5 chiffres'),
  ville: z
    .string()
    .min(2, 'La ville doit contenir au moins 2 caractères')
    .max(100, 'La ville ne peut pas dépasser 100 caractères'),
});

export const projectInfoSchema = z.object({
  adresseChantier: adresseChantierSchema,
  typeProjet: z.enum(['neuf', 'renovation', 'remplacement'], {
    message: 'Veuillez sélectionner un type de projet',
  }),
  delaiSouhaite: z.enum(['urgent', '1-3mois', '3-6mois', 'flexible'], {
    message: 'Veuillez sélectionner un délai',
  }),
  poseRequise: z.boolean(),
  commentaire: z
    .string()
    .max(1000, 'Le commentaire ne peut pas dépasser 1000 caractères')
    .optional(),
});

// ============================================
// SCHEMAS DE VALIDATION - CONFIGURATION
// ============================================

export const dimensionsSchema = z.object({
  width: z.number().min(10).max(1000),
  height: z.number().min(10).max(500),
  depth: z.number().optional(),
});

export const configurationSchema = z.object({
  family: z.string().min(1, 'La famille de produit est requise'),
  style: z.string().min(1, 'Le style est requis'),
  dimensions: dimensionsSchema,
  material: z.string().min(1, 'Le matériau est requis'),
  color: z.string().min(1, 'La couleur est requise'),
  colorName: z.string(),
  options: z.array(z.string()),
  price: z.number().min(0),
  date: z.coerce.date(),
  reference: z.string().optional(),
});

// ============================================
// SCHEMA COMPLET POUR LA SOUMISSION
// ============================================

export const quoteRequestSchema = z.object({
  configuration: configurationSchema,
  contactInfo: contactInfoSchema,
  projectInfo: projectInfoSchema,
  screenshotDataUrl: z.string().optional(),
  rgpdAccepted: z.literal(true, {
    message: 'Vous devez accepter la politique de confidentialité',
  }),
});

// ============================================
// TYPES INFÉRÉS
// ============================================

export type ContactInfoInput = z.infer<typeof contactInfoSchema>;
export type ProjectInfoInput = z.infer<typeof projectInfoSchema>;
export type AdresseChantierInput = z.infer<typeof adresseChantierSchema>;
export type QuoteRequestInput = z.infer<typeof quoteRequestSchema>;


