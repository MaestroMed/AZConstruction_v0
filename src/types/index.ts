// ============================================
// AZ Construction - Type Definitions
// ============================================

// User Types
export type UserType = "client_particulier" | "client_pro" | "admin";

export interface User {
  id: string;
  type: UserType;
  email: string;
  nom?: string;
  prenom?: string;
  raisonSociale?: string;
  telephone?: string;
  siret?: string;
  tvaIntra?: string;
  remisePercent?: number;
  validated: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Address
export interface Address {
  id: string;
  userId: string;
  label?: string;
  rue: string;
  complement?: string;
  codePostal: string;
  ville: string;
  pays: string;
  isDefault: boolean;
}

// Product Types
export type ProductFamilySlug =
  | "garde-corps"
  | "escaliers"
  | "portes"
  | "fenetres"
  | "grilles-ventilation"
  | "portails"
  | "clotures";

export interface Product {
  id: string;
  slug: string;
  nom: string;
  description?: string;
  familleId: string;
  prixBaseHT: number;
  poidsBase: number;
  delaiFabrication: number;
  actif: boolean;
  imageUrl?: string;
  model3dUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductFamily {
  id: string;
  nom: string;
  slug: ProductFamilySlug;
  description?: string;
  imageUrl?: string;
}

// Product Options
export type OptionType = "number" | "text" | "boolean" | "choice" | "color";

export interface ProductOption {
  id: string;
  nom: string;
  type: OptionType;
  valeursPossibles?: string[];
  global: boolean;
}

export interface ProductOptionConfig {
  id: string;
  productId: string;
  optionId: string;
  valeurMin?: number;
  valeurMax?: number;
  supplementHT?: number;
  multiplicateurPrix?: number;
}

// RAL Color
export interface RALColor {
  code: string;
  nom: string;
  hex: string;
}

// Configuration
export interface ProductConfiguration {
  productId: string;
  options: Record<string, string | number | boolean>;
  quantity: number;
  prixUnitaireHT: number;
  prixTotalHT: number;
}

// Cart
export interface CartItem {
  id: string;
  productId: string;
  product?: Product;
  configuration: ProductConfiguration;
  quantity: number;
  prixUnitaireHT: number;
  prixTotalHT: number;
}

export interface Cart {
  id: string;
  userId?: string;
  items: CartItem[];
  totalHT: number;
  totalTTC: number;
  createdAt: Date;
  updatedAt: Date;
}

// Order
export type OrderStatus =
  | "en_attente_paiement"
  | "payee"
  | "en_preparation"
  | "en_fabrication"
  | "expediee"
  | "livree"
  | "annulee";

export type PaymentStatus = "en_attente" | "paye" | "rembourse" | "echec";

export interface Order {
  id: string;
  userId: string;
  dateCommande: Date;
  statusCommande: OrderStatus;
  statusPaiement: PaymentStatus;
  totalHT: number;
  tva: number;
  totalTTC: number;
  adresseLivraison: Address;
  adresseFacturation: Address;
  moyenPaiement?: string;
  transactionId?: string;
  trackingLivraison?: string;
  devisId?: string;
  items: OrderItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  product?: Product;
  quantity: number;
  configSnapshot: ProductConfiguration;
  prixUnitaireHT: number;
  prixTotalHT: number;
}

// Quote (Devis)
export type QuoteStatus =
  | "en_attente"
  | "envoye"
  | "accepte"
  | "refuse"
  | "expire";

export interface Quote {
  id: string;
  userId: string;
  dateDemandem: Date;
  status: QuoteStatus;
  totalHT: number;
  totalTTC: number;
  remiseSpeciale?: number;
  commentaireAdmin?: string;
  commentaireClient?: string;
  pdfPath?: string;
  items: QuoteItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface QuoteItem {
  id: string;
  quoteId: string;
  productId: string;
  product?: Product;
  quantity: number;
  configSnapshot: ProductConfiguration;
  prixUnitaireHT: number;
  prixTotalHT: number;
}

// Messages
export type MessageSender = "client" | "admin";

export interface Message {
  id: string;
  orderId?: string;
  quoteId?: string;
  sender: MessageSender;
  senderId?: string;
  messageText: string;
  dateEnvoi: Date;
  lu: boolean;
}

// CMS Page
export interface Page {
  id: string;
  slug: string;
  title: string;
  content: string;
  published: boolean;
  metaTitle?: string;
  metaDescription?: string;
  lastModified: Date;
}

// Realization (Portfolio)
export interface Realization {
  id: string;
  titre: string;
  description?: string;
  categorie: string;
  dateRealisation?: Date;
  ville?: string;
  latitude?: number;
  longitude?: number;
  images: RealizationImage[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface RealizationImage {
  id: string;
  realizationId: string;
  url: string;
  legend?: string;
  order: number;
  isCover: boolean;
}

// Configurator State
export interface ConfiguratorState {
  product: Product | null;
  largeur: number;
  hauteur: number;
  profondeur: number;
  couleur: string;
  couleurNom: string;
  options: Record<string, string | number | boolean>;
  prixEstime: number;
}

// API Response
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Pagination
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

