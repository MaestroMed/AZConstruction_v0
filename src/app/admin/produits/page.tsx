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

const families = [
  { id: "all", nom: "Toutes les familles" },
  { id: "garde-corps", nom: "Garde-corps" },
  { id: "escaliers", nom: "Escaliers" },
  { id: "portes", nom: "Portes" },
  { id: "fenetres", nom: "Fenêtres" },
  { id: "portails", nom: "Portails" },
  { id: "clotures", nom: "Clôtures" },
  { id: "grilles-ventilation", nom: "Grilles de ventilation" },
];

export default function ProductsPage() {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [selectedFamily, setSelectedFamily] = React.useState("all");
  const [loading, setLoading] = React.useState(true);

  // Charger les produits depuis localStorage
  React.useEffect(() => {
    const loadProducts = () => {
      try {
        const saved = localStorage.getItem("az_products");
        if (saved) {
          const parsed = JSON.parse(saved);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          setProducts(parsed.map((p: any) => {
            const familleId = typeof p.famille === "string" ? p.famille : p.famille?.id || "";
            return {
              ...p,
              createdAt: new Date(p.createdAt),
              famille: { 
                id: familleId, 
                nom: families.find(f => f.id === familleId)?.nom || familleId, 
                slug: familleId 
              },
              active: p.active !== false,
            };
          }));
        }
      } catch (e) {
        console.error("Erreur chargement produits:", e);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const filteredProducts = selectedFamily === "all"
    ? products
    : products.filter((p) => p.famille.slug === selectedFamily || p.famille.id === selectedFamily);

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

      {/* Table ou état vide */}
      {loading ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500">Chargement...</p>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Aucun produit</h3>
          <p className="text-gray-500 mb-6 max-w-sm mx-auto">
            {selectedFamily === "all"
              ? "Commencez par ajouter votre premier produit au catalogue."
              : "Aucun produit dans cette famille."}
          </p>
          {selectedFamily === "all" && (
            <Link
              href="/admin/produits/nouveau"
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Ajouter un produit
            </Link>
          )}
        </div>
      ) : (
        <DataTable
          columns={columns}
          data={filteredProducts}
          searchPlaceholder="Rechercher un produit..."
          onExport={() => console.log("Export products")}
        />
      )}
    </div>
  );
}


