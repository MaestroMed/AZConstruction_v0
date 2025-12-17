"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useQuoteRequestStore } from "@/stores/quoteRequestStore";
import {
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  ShoppingCart,
  FileText,
  Check,
  Info,
  Palette,
  Ruler,
  Settings2,
  Eye,
  Maximize2,
  Minimize2,
  RotateCw,
  Pause,
  Camera,
  View,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { ARButton, ARViewer, ExportActions, LoadingSpinner3D } from "@/components/configurator";
import type { ProductFamily, ProductFamilyConfig, ExportConfig } from "@/types/configurator";

// Import dynamique du Scene3D pour éviter les erreurs SSR
const Scene3D = dynamic(
  () => import("@/components/configurator/Scene3D").then((mod) => mod.Scene3D),
  { 
    ssr: false,
    loading: () => <LoadingSpinner3D message="Chargement du viewer 3D..." />
  }
);

// Configuration data for each product family
const familyConfigs: Record<string, ProductFamilyConfig> = {
  portails: {
    name: "Portails",
    nameSingular: "Portail",
    description: "Configurez votre portail sur mesure",
    basePrice: 1890,
    image: "/images/portail.jpg",
    dimensions: {
      width: { min: 200, max: 600, default: 350, step: 10, unit: "cm" },
      height: { min: 100, max: 250, default: 180, step: 10, unit: "cm" },
    },
    materials: [
      { id: "acier", name: "Acier thermolaqué", priceModifier: 1 },
      { id: "alu", name: "Aluminium", priceModifier: 1.3 },
      { id: "inox", name: "Inox 304", priceModifier: 1.8 },
    ],
    styles: [
      { id: "contemporain", name: "Contemporain", description: "Lignes épurées et design moderne", priceModifier: 1 },
      { id: "classique", name: "Classique", description: "Style traditionnel intemporel", priceModifier: 1.1 },
      { id: "ajoure", name: "Ajouré", description: "Motifs décoratifs découpés laser", priceModifier: 1.25 },
      { id: "plein", name: "Plein", description: "Opaque pour plus d'intimité", priceModifier: 1.15 },
    ],
    options: [
      { id: "motorisation", name: "Motorisation", description: "Kit moteur télécommandé inclus", price: 890, visible3D: true },
      { id: "digicode", name: "Digicode", description: "Clavier à code pour ouverture", price: 290, visible3D: false },
      { id: "interphone", name: "Interphone vidéo", description: "Visiophone couleur connecté", price: 590, visible3D: false },
      { id: "eclairage", name: "Éclairage LED", description: "Spots LED intégrés", price: 350, visible3D: true },
    ],
    colors: [
      { id: "ral7016", name: "Gris anthracite", ral: "RAL 7016", hex: "#383E42" },
      { id: "ral9005", name: "Noir", ral: "RAL 9005", hex: "#0A0A0A" },
      { id: "ral9010", name: "Blanc pur", ral: "RAL 9010", hex: "#F7F7F7" },
      { id: "ral7035", name: "Gris clair", ral: "RAL 7035", hex: "#D7D7D7" },
      { id: "ral3004", name: "Rouge bordeaux", ral: "RAL 3004", hex: "#6B1C23" },
      { id: "ral5003", name: "Bleu saphir", ral: "RAL 5003", hex: "#1E3A5F" },
    ],
  },
  "garde-corps": {
    name: "Garde-corps",
    nameSingular: "Garde-corps",
    description: "Configurez votre garde-corps sur mesure",
    basePrice: 290,
    image: "/images/garde-corps.jpg",
    dimensions: {
      width: { min: 50, max: 300, default: 100, step: 10, unit: "cm" },
      height: { min: 90, max: 130, default: 100, step: 5, unit: "cm" },
    },
    materials: [
      { id: "acier", name: "Acier thermolaqué", priceModifier: 1 },
      { id: "inox304", name: "Inox 304", priceModifier: 1.4 },
      { id: "inox316", name: "Inox 316 (extérieur)", priceModifier: 1.7 },
    ],
    styles: [
      { id: "verre", name: "Verre", description: "Panneaux en verre feuilleté 8+8", priceModifier: 1.5 },
      { id: "cables", name: "Câbles", description: "Câbles inox tendus horizontaux", priceModifier: 1.2 },
      { id: "barreaux", name: "Barreaux", description: "Barreaux verticaux classiques", priceModifier: 1 },
      { id: "toles", name: "Tôles perforées", description: "Tôles décoratives perforées", priceModifier: 1.3 },
    ],
    options: [
      { id: "main_courante", name: "Main courante LED", description: "Éclairage LED intégré", price: 180, visible3D: true },
      { id: "fixation_invisible", name: "Fixations invisibles", description: "Fixations cachées", price: 120, visible3D: false },
      { id: "verre_opale", name: "Verre opale", description: "Verre dépoli pour intimité", price: 90, visible3D: true },
    ],
    colors: [
      { id: "ral9006", name: "Alu blanc", ral: "RAL 9006", hex: "#A5A5A5" },
      { id: "ral9005", name: "Noir", ral: "RAL 9005", hex: "#0A0A0A" },
      { id: "ral7016", name: "Gris anthracite", ral: "RAL 7016", hex: "#383E42" },
      { id: "inox_brosse", name: "Inox brossé", ral: "Naturel", hex: "#C0C0C0" },
    ],
  },
  escaliers: {
    name: "Escaliers",
    nameSingular: "Escalier",
    description: "Configurez votre escalier sur mesure",
    basePrice: 4500,
    image: "/images/escalier.jpg",
    dimensions: {
      width: { min: 70, max: 150, default: 90, step: 5, unit: "cm" },
      height: { min: 200, max: 400, default: 280, step: 10, unit: "cm" },
    },
    materials: [
      { id: "acier", name: "Acier thermolaqué", priceModifier: 1 },
      { id: "inox", name: "Inox brossé", priceModifier: 1.5 },
      { id: "mixte", name: "Métal + Bois", priceModifier: 1.3 },
    ],
    styles: [
      { id: "droit", name: "Droit", description: "Escalier droit classique", priceModifier: 1 },
      { id: "quart", name: "Quart-tournant", description: "Avec un angle à 90°", priceModifier: 1.2 },
      { id: "double", name: "Double quart-tournant", description: "Avec deux angles", priceModifier: 1.4 },
      { id: "helicoidal", name: "Hélicoïdal", description: "Escalier en colimaçon", priceModifier: 1.8 },
    ],
    options: [
      { id: "garde_corps", name: "Garde-corps inclus", description: "Rambarde design assortie", price: 1200, visible3D: true },
      { id: "led", name: "Éclairage LED", description: "Bandes LED sous marches", price: 650, visible3D: true },
      { id: "marches_bois", name: "Marches en bois", description: "Marches en chêne massif", price: 1800, visible3D: true },
      { id: "antiderapant", name: "Nez de marche antidérapant", description: "Sécurité renforcée", price: 280, visible3D: false },
    ],
    colors: [
      { id: "ral9005", name: "Noir", ral: "RAL 9005", hex: "#0A0A0A" },
      { id: "ral7016", name: "Gris anthracite", ral: "RAL 7016", hex: "#383E42" },
      { id: "ral9010", name: "Blanc", ral: "RAL 9010", hex: "#F7F7F7" },
      { id: "inox", name: "Inox naturel", ral: "Naturel", hex: "#C0C0C0" },
    ],
  },
  clotures: {
    name: "Clôtures",
    nameSingular: "Clôture",
    description: "Configurez votre clôture sur mesure",
    basePrice: 120,
    image: "/images/cloture.jpg",
    dimensions: {
      width: { min: 100, max: 250, default: 200, step: 10, unit: "cm" },
      height: { min: 80, max: 200, default: 150, step: 10, unit: "cm" },
    },
    materials: [
      { id: "acier", name: "Acier galvanisé thermolaqué", priceModifier: 1 },
      { id: "alu", name: "Aluminium", priceModifier: 1.4 },
    ],
    styles: [
      { id: "barreaudee", name: "Barreaudée", description: "Barreaux verticaux espacés", priceModifier: 1 },
      { id: "panneaux", name: "Panneaux rigides", description: "Mailles soudées rigides", priceModifier: 0.8 },
      { id: "lames", name: "À lames", description: "Lames horizontales occultantes", priceModifier: 1.3 },
      { id: "decorative", name: "Décorative", description: "Motifs découpés laser", priceModifier: 1.6 },
    ],
    options: [
      { id: "soubassement", name: "Soubassement béton", description: "Base béton 25cm", price: 45, visible3D: true },
      { id: "portillon", name: "Portillon assorti", description: "Portillon 1m de large", price: 390, visible3D: false },
      { id: "occultant", name: "Kit occultant", description: "Lattes PVC occultantes", price: 35, visible3D: true },
    ],
    colors: [
      { id: "ral6005", name: "Vert mousse", ral: "RAL 6005", hex: "#0E4243" },
      { id: "ral7016", name: "Gris anthracite", ral: "RAL 7016", hex: "#383E42" },
      { id: "ral9005", name: "Noir", ral: "RAL 9005", hex: "#0A0A0A" },
      { id: "ral8017", name: "Marron chocolat", ral: "RAL 8017", hex: "#45322E" },
    ],
  },
  pergolas: {
    name: "Pergolas",
    nameSingular: "Pergola",
    description: "Configurez votre pergola sur mesure",
    basePrice: 6900,
    image: "/images/pergola.jpg",
    dimensions: {
      width: { min: 300, max: 700, default: 400, step: 50, unit: "cm" },
      height: { min: 220, max: 320, default: 280, step: 10, unit: "cm" },
    },
    materials: [
      { id: "alu", name: "Aluminium thermolaqué", priceModifier: 1 },
      { id: "acier", name: "Acier thermolaqué", priceModifier: 0.9 },
    ],
    styles: [
      { id: "bioclimatique", name: "Bioclimatique", description: "Lames orientables motorisées", priceModifier: 1.4 },
      { id: "classique", name: "Classique", description: "Lames fixes ou toile rétractable", priceModifier: 1 },
      { id: "adossee", name: "Adossée", description: "Fixée sur façade existante", priceModifier: 0.9 },
      { id: "autoportee", name: "Autoportée", description: "Structure indépendante 4 pieds", priceModifier: 1.15 },
    ],
    options: [
      { id: "led", name: "Éclairage LED", description: "Spots LED intégrés dimmables", price: 890, visible3D: true },
      { id: "stores", name: "Stores zip", description: "Fermetures latérales textiles", price: 1200, visible3D: true },
      { id: "chauffage", name: "Chauffage radiant", description: "Système de chauffage intégré", price: 1500, visible3D: false },
      { id: "brumisation", name: "Brumisation", description: "Système de brumisation d'été", price: 950, visible3D: false },
      { id: "sono", name: "Enceintes intégrées", description: "Système audio Bluetooth", price: 650, visible3D: false },
    ],
    colors: [
      { id: "ral7016", name: "Gris anthracite", ral: "RAL 7016", hex: "#383E42" },
      { id: "ral9010", name: "Blanc", ral: "RAL 9010", hex: "#F7F7F7" },
      { id: "ral9005", name: "Noir", ral: "RAL 9005", hex: "#0A0A0A" },
      { id: "ral1015", name: "Ivoire clair", ral: "RAL 1015", hex: "#E6D2B5" },
    ],
  },
  marquises: {
    name: "Marquises & Auvents",
    nameSingular: "Marquise",
    description: "Configurez votre marquise ou auvent sur mesure",
    basePrice: 890,
    image: "/images/marquise.jpg",
    dimensions: {
      width: { min: 80, max: 300, default: 150, step: 10, unit: "cm" },
      height: { min: 60, max: 150, default: 100, step: 10, unit: "cm" },
    },
    materials: [
      { id: "acier", name: "Acier thermolaqué", priceModifier: 1 },
      { id: "inox", name: "Inox 304", priceModifier: 1.5 },
      { id: "alu", name: "Aluminium", priceModifier: 1.2 },
    ],
    styles: [
      { id: "entree", name: "Porte d'entrée", description: "Marquise classique pour entrée", priceModifier: 1 },
      { id: "terrasse", name: "Auvent terrasse", description: "Protection solaire terrasse", priceModifier: 1.3 },
      { id: "casquette", name: "Casquette", description: "Bandeau architectural moderne", priceModifier: 1.4 },
      { id: "verre", name: "Verre", description: "Structure métal + vitrage securit", priceModifier: 1.5 },
    ],
    options: [
      { id: "eclairage", name: "Éclairage intégré", description: "Spots LED encastrés", price: 180, visible3D: true },
      { id: "gouttiere", name: "Gouttière", description: "Évacuation eaux de pluie", price: 120, visible3D: true },
      { id: "retombee", name: "Retombée latérale", description: "Protection pluie latérale", price: 150, visible3D: true },
    ],
    colors: [
      { id: "ral7016", name: "Gris anthracite", ral: "RAL 7016", hex: "#383E42" },
      { id: "ral9005", name: "Noir", ral: "RAL 9005", hex: "#0A0A0A" },
      { id: "ral9010", name: "Blanc", ral: "RAL 9010", hex: "#F7F7F7" },
      { id: "inox_brosse", name: "Inox brossé", ral: "Naturel", hex: "#C0C0C0" },
    ],
  },
  portes: {
    name: "Portes",
    nameSingular: "Porte",
    description: "Configurez votre porte sur mesure",
    basePrice: 1200,
    image: "/images/porte.jpg",
    dimensions: {
      width: { min: 70, max: 180, default: 90, step: 5, unit: "cm" },
      height: { min: 200, max: 280, default: 215, step: 5, unit: "cm" },
    },
    materials: [
      { id: "acier", name: "Acier thermolaqué", priceModifier: 1 },
      { id: "acier_blinde", name: "Acier blindé", priceModifier: 2.5 },
      { id: "inox", name: "Inox 304", priceModifier: 1.6 },
    ],
    styles: [
      { id: "entree", name: "Entrée design", description: "Porte d'entrée contemporaine", priceModifier: 1.2 },
      { id: "atelier", name: "Atelier", description: "Style industriel avec carreaux", priceModifier: 1.3 },
      { id: "technique", name: "Technique", description: "Accès locaux techniques", priceModifier: 0.9 },
      { id: "coupe-feu", name: "Coupe-feu", description: "Certifiée EI60", priceModifier: 1.4 },
      { id: "blindee", name: "Blindée", description: "Haute sécurité A2P", priceModifier: 2.8 },
      { id: "coulissante", name: "Coulissante", description: "Sur rail apparent ou encastré", priceModifier: 1.15 },
    ],
    options: [
      { id: "vitrage", name: "Vitrage", description: "Double vitrage sécurit", price: 350, visible3D: true },
      { id: "serrure_5pts", name: "Serrure 5 points", description: "Sécurité renforcée", price: 280, visible3D: false },
      { id: "ferme_porte", name: "Ferme-porte", description: "Fermeture automatique", price: 180, visible3D: true },
      { id: "imposte", name: "Imposte vitrée", description: "Partie haute vitrée", price: 420, visible3D: true },
    ],
    colors: [
      { id: "ral7016", name: "Gris anthracite", ral: "RAL 7016", hex: "#383E42" },
      { id: "ral9005", name: "Noir", ral: "RAL 9005", hex: "#0A0A0A" },
      { id: "ral9010", name: "Blanc", ral: "RAL 9010", hex: "#F7F7F7" },
      { id: "ral3004", name: "Rouge bordeaux", ral: "RAL 3004", hex: "#6B1C23" },
      { id: "ral5003", name: "Bleu saphir", ral: "RAL 5003", hex: "#1E3A5F" },
    ],
  },
  fenetres: {
    name: "Fenêtres & Châssis",
    nameSingular: "Fenêtre",
    description: "Configurez votre fenêtre sur mesure",
    basePrice: 890,
    image: "/images/fenetre.jpg",
    dimensions: {
      width: { min: 40, max: 300, default: 120, step: 10, unit: "cm" },
      height: { min: 40, max: 250, default: 140, step: 10, unit: "cm" },
    },
    materials: [
      { id: "acier", name: "Acier Jansen", priceModifier: 1 },
      { id: "acier_hi", name: "Acier Jansen HI", priceModifier: 1.3 },
    ],
    styles: [
      { id: "fixe", name: "Fixe", description: "Châssis fixe sans ouverture", priceModifier: 0.8 },
      { id: "oscillo-battante", name: "Oscillo-battante", description: "Double mode d'ouverture", priceModifier: 1.2 },
      { id: "coulissante", name: "Coulissante", description: "Baie vitrée coulissante", priceModifier: 1.4 },
      { id: "atelier", name: "Atelier", description: "Style verrière petits carreaux", priceModifier: 1.1 },
      { id: "panoramique", name: "Panoramique", description: "Grandes dimensions minimal frame", priceModifier: 1.8 },
      { id: "porte-fenetre", name: "Porte-fenêtre", description: "Accès terrasse", priceModifier: 1.3 },
    ],
    options: [
      { id: "triple_vitrage", name: "Triple vitrage", description: "Isolation thermique renforcée", price: 180, visible3D: false },
      { id: "store", name: "Store intégré", description: "Store vénitien intégré", price: 350, visible3D: true },
      { id: "moustiquaire", name: "Moustiquaire", description: "Protection insectes", price: 120, visible3D: false },
      { id: "grille_ventilation", name: "Grille ventilation", description: "Aération intégrée", price: 80, visible3D: true },
    ],
    colors: [
      { id: "ral7016", name: "Gris anthracite", ral: "RAL 7016", hex: "#383E42" },
      { id: "ral9005", name: "Noir", ral: "RAL 9005", hex: "#0A0A0A" },
      { id: "ral9010", name: "Blanc", ral: "RAL 9010", hex: "#F7F7F7" },
      { id: "ral7035", name: "Gris clair", ral: "RAL 7035", hex: "#D7D7D7" },
    ],
  },
  verrieres: {
    name: "Verrières",
    nameSingular: "Verrière",
    description: "Configurez votre verrière intérieure sur mesure",
    basePrice: 650,
    image: "/images/verriere.jpg",
    dimensions: {
      width: { min: 60, max: 400, default: 150, step: 10, unit: "cm" },
      height: { min: 80, max: 300, default: 220, step: 10, unit: "cm" },
    },
    materials: [
      { id: "acier", name: "Acier thermolaqué", priceModifier: 1 },
      { id: "inox", name: "Inox brossé", priceModifier: 1.4 },
    ],
    styles: [
      { id: "atelier", name: "Atelier fixe", description: "Style industriel classique", priceModifier: 1 },
      { id: "avec-porte", name: "Avec porte battante", description: "Intègre une porte assortie", priceModifier: 1.5 },
      { id: "toute-hauteur", name: "Toute hauteur", description: "Du sol au plafond", priceModifier: 1.3 },
      { id: "imposte", name: "Imposte", description: "Partie haute uniquement", priceModifier: 0.7 },
      { id: "cuisine", name: "Cuisine", description: "Séparation cuisine/séjour", priceModifier: 1.2 },
    ],
    options: [
      { id: "porte_coulissante", name: "Porte coulissante", description: "Au lieu de battante", price: 280, visible3D: true },
      { id: "soubassement", name: "Soubassement métal", description: "Partie basse pleine", price: 180, visible3D: true },
      { id: "verre_opale", name: "Verre opale", description: "Verre dépoli pour intimité", price: 120, visible3D: true },
      { id: "traverse", name: "Traverse horizontale", description: "Barre horizontale centrale", price: 90, visible3D: true },
    ],
    colors: [
      { id: "ral9005", name: "Noir", ral: "RAL 9005", hex: "#0A0A0A" },
      { id: "ral7016", name: "Gris anthracite", ral: "RAL 7016", hex: "#383E42" },
      { id: "ral9010", name: "Blanc", ral: "RAL 9010", hex: "#F7F7F7" },
      { id: "inox_brosse", name: "Inox brossé", ral: "Naturel", hex: "#C0C0C0" },
    ],
  },
  "grilles-ventilation": {
    name: "Grilles de ventilation",
    nameSingular: "Grille",
    description: "Configurez votre grille de ventilation sur mesure",
    basePrice: 180,
    image: "/images/grille-ventilation.jpg",
    dimensions: {
      width: { min: 20, max: 200, default: 60, step: 5, unit: "cm" },
      height: { min: 10, max: 100, default: 40, step: 5, unit: "cm" },
    },
    materials: [
      { id: "acier", name: "Acier thermolaqué", priceModifier: 1 },
      { id: "alu", name: "Aluminium", priceModifier: 1.2 },
      { id: "inox", name: "Inox 304", priceModifier: 1.5 },
    ],
    styles: [
      { id: "decorative", name: "Décorative", description: "Motifs personnalisés laser", priceModifier: 1.3 },
      { id: "technique", name: "Technique", description: "Lames fixes ou orientables", priceModifier: 1 },
      { id: "acoustique", name: "Acoustique", description: "Traitement phonique intégré", priceModifier: 1.8 },
      { id: "pare-pluie", name: "Pare-pluie", description: "Protection extérieure", priceModifier: 1.4 },
      { id: "coupe-feu", name: "Coupe-feu", description: "Volet fusible intégré", priceModifier: 2 },
    ],
    options: [
      { id: "moustiquaire", name: "Moustiquaire", description: "Grille anti-insectes", price: 45, visible3D: false },
      { id: "volet_reglage", name: "Volet de réglage", description: "Débit d'air ajustable", price: 60, visible3D: true },
      { id: "lames_orientables", name: "Lames orientables", description: "Direction du flux réglable", price: 80, visible3D: true },
    ],
    colors: [
      { id: "ral9010", name: "Blanc", ral: "RAL 9010", hex: "#F7F7F7" },
      { id: "ral7016", name: "Gris anthracite", ral: "RAL 7016", hex: "#383E42" },
      { id: "ral9005", name: "Noir", ral: "RAL 9005", hex: "#0A0A0A" },
      { id: "inox_brosse", name: "Inox brossé", ral: "Naturel", hex: "#C0C0C0" },
    ],
  },
};

export default function ConfigurateurPage() {
  const params = useParams();
  const router = useRouter();
  const family = params.family as string;
  const config = familyConfigs[family];

  // Quote store
  const { setConfiguration } = useQuoteRequestStore();

  // State
  const [dimensions, setDimensions] = React.useState({
    width: config?.dimensions.width.default || 200,
    height: config?.dimensions.height.default || 150,
  });
  const [material, setMaterial] = React.useState(config?.materials[0]?.id || "");
  const [style, setStyle] = React.useState(config?.styles[0]?.id || "");
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
  const [selectedColor, setSelectedColor] = React.useState(config?.colors[0]?.id || "");
  const [step, setStep] = React.useState(1);

  // 3D Viewer state
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const [autoRotate, setAutoRotate] = React.useState(true);
  const [showARViewer, setShowARViewer] = React.useState(false);
  const [viewerLoaded, setViewerLoaded] = React.useState(false);

  // If family not found
  if (!config) {
    return (
      <div className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-navy-dark mb-4">
            Configurateur non disponible
          </h1>
          <p className="text-gray-600 mb-8">
            Cette famille de produit n'existe pas encore.
          </p>
          <Link href="/produits">
            <Button>Voir nos produits</Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentColor = config.colors.find((c) => c.id === selectedColor);

  // Calculate price
  const calculatePrice = () => {
    const materialMod = config.materials.find((m) => m.id === material)?.priceModifier || 1;
    const styleMod = config.styles.find((s) => s.id === style)?.priceModifier || 1;
    const sizeFactor =
      (dimensions.width / config.dimensions.width.default) *
      (dimensions.height / config.dimensions.height.default);
    const optionsPrice = selectedOptions.reduce((total, optId) => {
      const opt = config.options.find((o) => o.id === optId);
      return total + (opt?.price || 0);
    }, 0);

    const baseCalculated = config.basePrice * sizeFactor * materialMod * styleMod;
    return Math.round(baseCalculated + optionsPrice);
  };

  const price = calculatePrice();

  // Export config
  const exportConfig: ExportConfig = {
    family: config.nameSingular,
    style: config.styles.find((s) => s.id === style)?.name || style,
    dimensions,
    material: config.materials.find((m) => m.id === material)?.name || material,
    color: currentColor?.ral || selectedColor,
    colorName: currentColor?.name || "N/A",
    options: selectedOptions.map((optId) => config.options.find((o) => o.id === optId)?.name || ""),
    price,
    date: new Date(),
  };

  const toggleOption = (optionId: string) => {
    setSelectedOptions((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    );
  };

  const resetConfig = () => {
    setDimensions({
      width: config.dimensions.width.default,
      height: config.dimensions.height.default,
    });
    setMaterial(config.materials[0].id);
    setStyle(config.styles[0].id);
    setSelectedOptions([]);
    setSelectedColor(config.colors[0].id);
    setStep(1);
  };

  // Capture du canvas et redirection vers la page de devis
  const handleRequestQuote = async () => {
    // Capturer le canvas 3D
    let screenshotDataUrl: string | undefined;
    try {
      const canvas = document.querySelector('canvas');
      if (canvas) {
        screenshotDataUrl = canvas.toDataURL('image/png');
      }
    } catch (e) {
      console.error('Failed to capture canvas:', e);
    }

    // Stocker la configuration dans le store
    setConfiguration(exportConfig, screenshotDataUrl);

    // Naviguer vers la page de devis
    router.push('/devis');
  };

  const steps = [
    { id: 1, name: "Dimensions", icon: Ruler },
    { id: 2, name: "Style", icon: Palette },
    { id: 3, name: "Options", icon: Settings2 },
    { id: 4, name: "Couleur", icon: Eye },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="pt-32 pb-8 bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate">
        <div className="container mx-auto px-6">
          <Link
            href="/produits"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux produits
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Configurateur {config.nameSingular}
            </h1>
            <p className="text-white/70">{config.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-100 sticky top-[72px] z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {steps.map((s, index) => (
              <React.Fragment key={s.id}>
                <button
                  onClick={() => setStep(s.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full transition-all",
                    step === s.id
                      ? "bg-blue-corporate text-white"
                      : step > s.id
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-500"
                  )}
                >
                  {step > s.id ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <s.icon className="w-4 h-4" />
                  )}
                  <span className="hidden sm:inline text-sm font-medium">{s.name}</span>
                </button>
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      "flex-1 h-0.5 mx-2",
                      step > s.id ? "bg-green-300" : "bg-gray-200"
                    )}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* 3D Viewer - Left Side */}
          <div className={cn(
            "lg:col-span-3 order-2 lg:order-1",
            isFullscreen && "fixed inset-0 z-50 bg-gray-100 p-4"
          )}>
            <Card variant="elevated" className="overflow-hidden">
              <CardContent className="p-0">
                {/* Viewer Header */}
                <div className="flex items-center justify-between p-4 bg-white border-b border-gray-100">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-700">
                      Aperçu 3D interactif
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setAutoRotate(!autoRotate)}
                        className={cn(
                          "p-2 rounded-lg transition-colors",
                          autoRotate ? "bg-cyan-glow/20 text-cyan-600" : "bg-gray-100 text-gray-500"
                        )}
                        title={autoRotate ? "Arrêter la rotation" : "Activer la rotation"}
                      >
                        {autoRotate ? <Pause className="w-4 h-4" /> : <RotateCw className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => setIsFullscreen(!isFullscreen)}
                        className="p-2 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
                        title={isFullscreen ? "Quitter plein écran" : "Plein écran"}
                      >
                        {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <ARButton onClick={() => setShowARViewer(true)} />
                  </div>
                </div>

                {/* 3D Canvas */}
                <div className={cn(
                  "relative bg-gradient-to-b from-gray-100 to-gray-200",
                  isFullscreen ? "h-[calc(100vh-180px)]" : "h-[400px] lg:h-[500px]"
                )}>
                  <Scene3D
                    family={family as ProductFamily}
                    style={style}
                    color={selectedColor}
                    colorHex={currentColor?.hex || "#383E42"}
                    width={dimensions.width}
                    height={dimensions.height}
                    autoRotate={autoRotate}
                    showGrid={true}
                    onLoad={() => setViewerLoaded(true)}
                  />
                </div>

                {/* Viewer Footer - Export Actions */}
                <div className="p-4 bg-white border-t border-gray-100">
                  <ExportActions 
                    config={exportConfig}
                    familyConfig={config}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Configuration Panel - Right Side */}
          <div className="lg:col-span-2 order-1 lg:order-2 space-y-6">
            {/* Configuration Steps */}
            <AnimatePresence mode="wait">
              {/* Step 1: Dimensions */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <h2 className="text-lg font-bold text-navy-dark mb-6 flex items-center gap-2">
                        <Ruler className="w-5 h-5 text-cyan-glow" />
                        Dimensions
                      </h2>

                      <div className="space-y-6">
                        {/* Width */}
                        <div>
                          <div className="flex justify-between mb-2">
                            <label className="text-sm font-medium text-gray-700">Largeur</label>
                            <span className="text-sm font-bold text-blue-corporate">
                              {dimensions.width} {config.dimensions.width.unit}
                            </span>
                          </div>
                          <input
                            type="range"
                            min={config.dimensions.width.min}
                            max={config.dimensions.width.max}
                            step={config.dimensions.width.step}
                            value={dimensions.width}
                            onChange={(e) =>
                              setDimensions({ ...dimensions, width: parseInt(e.target.value) })
                            }
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-corporate"
                          />
                          <div className="flex justify-between text-xs text-gray-400 mt-1">
                            <span>{config.dimensions.width.min} {config.dimensions.width.unit}</span>
                            <span>{config.dimensions.width.max} {config.dimensions.width.unit}</span>
                          </div>
                        </div>

                        {/* Height */}
                        <div>
                          <div className="flex justify-between mb-2">
                            <label className="text-sm font-medium text-gray-700">Hauteur</label>
                            <span className="text-sm font-bold text-blue-corporate">
                              {dimensions.height} {config.dimensions.height.unit}
                            </span>
                          </div>
                          <input
                            type="range"
                            min={config.dimensions.height.min}
                            max={config.dimensions.height.max}
                            step={config.dimensions.height.step}
                            value={dimensions.height}
                            onChange={(e) =>
                              setDimensions({ ...dimensions, height: parseInt(e.target.value) })
                            }
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-corporate"
                          />
                          <div className="flex justify-between text-xs text-gray-400 mt-1">
                            <span>{config.dimensions.height.min} {config.dimensions.height.unit}</span>
                            <span>{config.dimensions.height.max} {config.dimensions.height.unit}</span>
                          </div>
                        </div>

                        {/* Material */}
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-3 block">Matériau</label>
                          <div className="grid grid-cols-1 gap-2">
                            {config.materials.map((mat) => (
                              <button
                                key={mat.id}
                                onClick={() => setMaterial(mat.id)}
                                className={cn(
                                  "p-3 rounded-xl border-2 transition-all text-left",
                                  material === mat.id
                                    ? "border-blue-corporate bg-blue-corporate/5"
                                    : "border-gray-200 hover:border-gray-300"
                                )}
                              >
                                <span className="font-medium text-navy-dark block">
                                  {mat.name}
                                </span>
                                {mat.priceModifier !== 1 && (
                                  <span className="text-xs text-gray-500">
                                    {mat.priceModifier > 1 ? "+" : ""}
                                    {Math.round((mat.priceModifier - 1) * 100)}%
                                  </span>
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Step 2: Style */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <h2 className="text-lg font-bold text-navy-dark mb-6 flex items-center gap-2">
                        <Palette className="w-5 h-5 text-cyan-glow" />
                        Style & Design
                      </h2>

                      <div className="grid grid-cols-1 gap-3">
                        {config.styles.map((s) => (
                          <button
                            key={s.id}
                            onClick={() => setStyle(s.id)}
                            className={cn(
                              "p-4 rounded-xl border-2 transition-all text-left",
                              style === s.id
                                ? "border-blue-corporate bg-blue-corporate/5"
                                : "border-gray-200 hover:border-gray-300"
                            )}
                          >
                            <div className="flex justify-between items-start mb-1">
                              <span className="font-semibold text-navy-dark">{s.name}</span>
                              {style === s.id && <Check className="w-5 h-5 text-blue-corporate" />}
                            </div>
                            <p className="text-sm text-gray-500 mb-1">{s.description}</p>
                            {s.priceModifier !== 1 && (
                              <span className="text-xs text-cyan-glow font-medium">
                                {s.priceModifier > 1 ? "+" : ""}
                                {Math.round((s.priceModifier - 1) * 100)}%
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Step 3: Options */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <h2 className="text-lg font-bold text-navy-dark mb-6 flex items-center gap-2">
                        <Settings2 className="w-5 h-5 text-cyan-glow" />
                        Options
                      </h2>

                      <div className="space-y-3">
                        {config.options.map((opt) => (
                          <button
                            key={opt.id}
                            onClick={() => toggleOption(opt.id)}
                            className={cn(
                              "w-full p-4 rounded-xl border-2 transition-all text-left flex items-center justify-between",
                              selectedOptions.includes(opt.id)
                                ? "border-blue-corporate bg-blue-corporate/5"
                                : "border-gray-200 hover:border-gray-300"
                            )}
                          >
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold text-navy-dark">{opt.name}</span>
                                <span className="px-2 py-0.5 bg-cyan-glow/10 text-cyan-600 rounded text-xs font-medium">
                                  +{opt.price}€
                                </span>
                              </div>
                              <p className="text-sm text-gray-500">{opt.description}</p>
                            </div>
                            <div
                              className={cn(
                                "w-6 h-6 rounded-md border-2 flex items-center justify-center ml-4 transition-colors",
                                selectedOptions.includes(opt.id)
                                  ? "border-blue-corporate bg-blue-corporate"
                                  : "border-gray-300"
                              )}
                            >
                              {selectedOptions.includes(opt.id) && (
                                <Check className="w-4 h-4 text-white" />
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Step 4: Color */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <h2 className="text-lg font-bold text-navy-dark mb-6 flex items-center gap-2">
                        <Eye className="w-5 h-5 text-cyan-glow" />
                        Couleur
                      </h2>

                      <div className="grid grid-cols-2 gap-3">
                        {config.colors.map((color) => (
                          <button
                            key={color.id}
                            onClick={() => setSelectedColor(color.id)}
                            className={cn(
                              "p-3 rounded-xl border-2 transition-all",
                              selectedColor === color.id
                                ? "border-blue-corporate"
                                : "border-gray-200 hover:border-gray-300"
                            )}
                          >
                            <div
                              className="w-full h-12 rounded-lg mb-2 border border-gray-200"
                              style={{ backgroundColor: color.hex }}
                            />
                            <p className="font-medium text-navy-dark text-sm mb-0.5">
                              {color.name}
                            </p>
                            <p className="text-xs text-gray-400">{color.ral}</p>
                          </button>
                        ))}
                      </div>

                      <div className="mt-4 p-3 bg-gray-50 rounded-xl flex items-start gap-2">
                        <Info className="w-4 h-4 text-blue-corporate flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-gray-600">
                          Plus de 200 couleurs RAL disponibles sur demande.{" "}
                          <Link href="/contact" className="text-blue-corporate hover:underline">
                            Contactez-nous
                          </Link>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between gap-3">
              <Button
                variant="outline"
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
                icon={<ArrowLeft className="w-4 h-4" />}
                iconPosition="left"
                className="flex-1"
              >
                Précédent
              </Button>
              {step < 4 ? (
                <Button
                  onClick={() => setStep(Math.min(4, step + 1))}
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="flex-1"
                >
                  Suivant
                </Button>
              ) : (
                <Button
                  className="flex-1 bg-cyan-glow text-navy-dark hover:bg-cyan-pale"
                  icon={<ShoppingCart className="w-4 h-4" />}
                >
                  Ajouter au panier
                </Button>
              )}
            </div>

            {/* Price Summary Card */}
            <Card variant="elevated">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-navy-dark mb-4">
                  Votre {config.nameSingular}
                </h3>

                {/* Summary */}
                <div className="space-y-2 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Dimensions</span>
                    <span className="font-medium text-navy-dark">
                      {dimensions.width} × {dimensions.height} cm
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Matériau</span>
                    <span className="font-medium text-navy-dark">
                      {config.materials.find((m) => m.id === material)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Style</span>
                    <span className="font-medium text-navy-dark">
                      {config.styles.find((s) => s.id === style)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Couleur</span>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded border border-gray-200"
                        style={{ backgroundColor: currentColor?.hex }}
                      />
                      <span className="font-medium text-navy-dark">{currentColor?.name}</span>
                    </div>
                  </div>
                  {selectedOptions.length > 0 && (
                    <div className="pt-2 border-t border-gray-100">
                      <span className="text-gray-500 block mb-1">Options :</span>
                      {selectedOptions.map((optId) => {
                        const opt = config.options.find((o) => o.id === optId);
                        return (
                          <div key={optId} className="flex justify-between">
                            <span className="text-gray-600">+ {opt?.name}</span>
                            <span className="text-cyan-600">{opt?.price}€</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="bg-navy-dark rounded-xl p-4 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Prix estimé</span>
                    <span className="text-3xl font-bold text-cyan-glow">
                      {new Intl.NumberFormat('fr-FR').format(price)}€
                    </span>
                  </div>
                  <p className="text-xs text-white/50 mt-1">TTC, hors pose</p>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <Button className="w-full" icon={<ShoppingCart className="w-4 h-4" />}>
                    Ajouter au panier
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    icon={<FileText className="w-4 h-4" />}
                    onClick={handleRequestQuote}
                  >
                    Demander un devis
                  </Button>
                  <button
                    onClick={resetConfig}
                    className="w-full text-center text-sm text-gray-500 hover:text-gray-700 transition-colors flex items-center justify-center gap-2 py-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Réinitialiser
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* AR Viewer Modal */}
      <ARViewer
        isOpen={showARViewer}
        onClose={() => setShowARViewer(false)}
        modelSrc={`/models/${family}/${style}.glb`}
        alt={`${config.nameSingular} ${config.styles.find((s) => s.id === style)?.name}`}
      />
    </div>
  );
}
