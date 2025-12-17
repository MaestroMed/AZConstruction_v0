"use client";

import * as React from "react";
import Link from "next/link";
import { Plus, Package, Filter, MoreVertical, Eye, Edit, Trash2, Copy } from "lucide-react";
import { DataTable, StatusBadge, ActionButtons } from "@/components/admin/ui/DataTable";
import { type ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface Product {
  id: string;
  slug: string;
  nom: string;
  description?: string;
  famille: { id: string; nom: string; slug: string };
  prixBaseHT: number;
  actif: boolean;
  imageUrl?: string;
  createdAt: Date;
}

// Mock data
const mockProducts: Product[] = [
  {
    id: "1",
    slug: "porte-jansen-design",
    nom: "Porte Jansen Design",
    description: "Porte d'entrée en profilés Jansen",
    famille: { id: "3", nom: "Portes", slug: "portes" },
    prixBaseHT: 2850,
    actif: true,
    imageUrl: "/images/products/porte-jansen.jpg",
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    slug: "garde-corps-verre",
    nom: "Garde-corps Verre & Inox",
    description: "Garde-corps en verre trempé avec fixations inox",
    famille: { id: "2", nom: "Garde-corps", slug: "garde-corps" },
    prixBaseHT: 450,
    actif: true,
    createdAt: new Date("2024-02-10"),
  },
  {
    id: "3",
    slug: "escalier-helicoidal",
    nom: "Escalier Hélicoïdal",
    description: "Escalier hélicoïdal en acier avec marches bois",
    famille: { id: "3", nom: "Escaliers", slug: "escaliers" },
    prixBaseHT: 8500,
    actif: true,
    createdAt: new Date("2024-03-05"),
  },
  {
    id: "4",
    slug: "fenetre-atelier",
    nom: "Fenêtre Atelier Jansen",
    description: "Fenêtre style atelier en profilés Jansen",
    famille: { id: "4", nom: "Fenêtres", slug: "fenetres" },
    prixBaseHT: 280,
    actif: true,
    createdAt: new Date("2024-04-20"),
  },
  {
    id: "5",
    slug: "grille-acoustique",
    nom: "Grille Acoustique Premium",
    description: "Grille de ventilation avec atténuation acoustique",
    famille: { id: "5", nom: "Grilles de ventilation", slug: "grilles-ventilation" },
    prixBaseHT: 12500,
    actif: true,
    createdAt: new Date("2024-05-12"),
  },
  {
    id: "6",
    slug: "porte-coupe-feu",
    nom: "Porte Coupe-feu EI60",
    description: "Porte coupe-feu certifiée EI60",
    famille: { id: "3", nom: "Portes", slug: "portes" },
    prixBaseHT: 4200,
    actif: false,
    createdAt: new Date("2024-06-01"),
  },
];

const families = [
  { id: "all", nom: "Toutes les familles" },
  { id: "1", nom: "Garde-corps" },
  { id: "2", nom: "Garde-corps" },
  { id: "3", nom: "Escaliers" },
  { id: "4", nom: "Fenêtres" },
  { id: "5", nom: "Grilles de ventilation" },
  { id: "6", nom: "Portails" },
  { id: "7", nom: "Clôtures" },
];

export default function ProductsPage() {
  const [products] = React.useState<Product[]>(mockProducts);
  const [selectedFamily, setSelectedFamily] = React.useState("all");

  const filteredProducts = selectedFamily === "all"
    ? products
    : products.filter((p) => p.famille.id === selectedFamily);

  const columns: ColumnDef<Product>[] = [
    {
      accessorKey: "nom",
      header: "Produit",
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
            {row.original.imageUrl ? (
              <img
                src={row.original.imageUrl}
                alt={row.original.nom}
                className="w-full h-full object-cover"
              />
            ) : (
              <Package className="w-6 h-6 text-gray-400" />
            )}
          </div>
          <div>
            <p className="font-medium text-gray-900">{row.original.nom}</p>
            <p className="text-sm text-gray-500">{row.original.slug}</p>
          </div>
        </div>
      ),
    },
    {
      accessorKey: "famille.nom",
      header: "Famille",
      cell: ({ row }) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
          {row.original.famille.nom}
        </span>
      ),
    },
    {
      accessorKey: "prixBaseHT",
      header: "Prix HT",
      cell: ({ row }) => (
        <span className="font-semibold text-gray-900">
          {row.original.prixBaseHT.toLocaleString("fr-FR")} €
        </span>
      ),
    },
    {
      accessorKey: "actif",
      header: "Statut",
      cell: ({ row }) => (
        <StatusBadge
          status={row.original.actif ? "Actif" : "Inactif"}
          variant={row.original.actif ? "success" : "default"}
        />
      ),
    },
    {
      accessorKey: "createdAt",
      header: "Créé le",
      cell: ({ row }) =>
        format(new Date(row.original.createdAt), "dd MMM yyyy", { locale: fr }),
    },
    {
      id: "actions",
      header: "",
      cell: ({ row }) => (
        <div className="flex items-center justify-end gap-1">
          <Link
            href={`/admin/produits/${row.original.id}`}
            className="p-1.5 text-gray-400 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors"
            title="Modifier"
          >
            <Edit className="w-4 h-4" />
          </Link>
          <button
            className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            title="Dupliquer"
          >
            <Copy className="w-4 h-4" />
          </button>
          <button
            className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            title="Supprimer"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Produits</h1>
          <p className="text-gray-500 mt-1">
            Gérez votre catalogue de produits
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/produits/familles"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Package className="w-4 h-4" />
            Familles
          </Link>
          <Link
            href="/admin/produits/options"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Filter className="w-4 h-4" />
            Options
          </Link>
          <Link
            href="/admin/produits/nouveau"
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Nouveau produit
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        {families.map((family) => (
          <button
            key={family.id}
            onClick={() => setSelectedFamily(family.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedFamily === family.id
                ? "bg-cyan-500 text-white"
                : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
            }`}
          >
            {family.nom}
          </button>
        ))}
      </div>

      {/* Table */}
      <DataTable
        columns={columns}
        data={filteredProducts}
        searchPlaceholder="Rechercher un produit..."
        onExport={() => console.log("Export products")}
      />
    </div>
  );
}


