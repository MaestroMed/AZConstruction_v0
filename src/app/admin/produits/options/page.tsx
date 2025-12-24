"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Plus, Edit, Trash2, Globe, Package } from "lucide-react";
import { DataTable, StatusBadge } from "@/components/admin/ui/DataTable";
import { Modal } from "@/components/admin/ui/Modal";
import { Input, Select, Switch, Textarea } from "@/components/admin/ui/FormFields";
import { type ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";

interface ProductOption {
  id: string;
  nom: string;
  slug: string;
  type: "number" | "text" | "boolean" | "choice" | "color";
  valeursPossibles?: string[];
  global: boolean;
  productsCount: number;
}

const mockOptions: ProductOption[] = [
  { id: "1", nom: "Largeur", slug: "largeur", type: "number", global: true, productsCount: 15 },
  { id: "2", nom: "Hauteur", slug: "hauteur", type: "number", global: true, productsCount: 15 },
  { id: "3", nom: "Profondeur", slug: "profondeur", type: "number", global: false, productsCount: 8 },
  { id: "4", nom: "Couleur RAL", slug: "couleur-ral", type: "color", global: true, productsCount: 20 },
  { id: "5", nom: "Motorisation", slug: "motorisation", type: "choice", valeursPossibles: ["Sans", "Standard", "Premium"], global: false, productsCount: 6 },
  { id: "6", nom: "Type de verre", slug: "type-verre", type: "choice", valeursPossibles: ["Transparent", "Dépoli", "Teinté"], global: false, productsCount: 4 },
  { id: "7", nom: "Avec portillon", slug: "avec-portillon", type: "boolean", global: false, productsCount: 5 },
  { id: "8", nom: "Éclairage LED", slug: "eclairage-led", type: "boolean", global: false, productsCount: 3 },
];

const optionTypes = [
  { value: "number", label: "Nombre" },
  { value: "text", label: "Texte" },
  { value: "boolean", label: "Oui/Non" },
  { value: "choice", label: "Choix multiple" },
  { value: "color", label: "Couleur" },
];

export default function OptionsPage() {
  const [options, setOptions] = React.useState<ProductOption[]>(mockOptions);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [editingOption, setEditingOption] = React.useState<ProductOption | null>(null);

  const handleEdit = (option: ProductOption) => {
    setEditingOption(option);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    const option = options.find((o) => o.id === id);
    if (option && option.productsCount > 0) {
      toast.error("Impossible de supprimer une option utilisée par des produits");
      return;
    }
    setOptions((items) => items.filter((item) => item.id !== id));
    toast.success("Option supprimée");
  };

  const handleSave = (data: Partial<ProductOption>) => {
    if (editingOption) {
      setOptions((items) =>
        items.map((item) =>
          item.id === editingOption.id ? { ...item, ...data } : item
        )
      );
      toast.success("Option mise à jour");
    } else {
      const newOption: ProductOption = {
        id: String(options.length + 1),
        nom: data.nom || "",
        slug: data.slug || "",
        type: data.type || "text",
        valeursPossibles: data.valeursPossibles,
        global: data.global || false,
        productsCount: 0,
      };
      setOptions([...options, newOption]);
      toast.success("Option créée");
    }
    setIsModalOpen(false);
    setEditingOption(null);
  };

  const columns: ColumnDef<ProductOption>[] = [
    {
      accessorKey: "nom",
      header: "Nom",
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
            {row.original.global ? (
              <Globe className="w-5 h-5 text-cyan-500" />
            ) : (
              <Package className="w-5 h-5 text-gray-400" />
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
      accessorKey: "type",
      header: "Type",
      cell: ({ row }) => {
        const typeLabels: Record<string, string> = {
          number: "Nombre",
          text: "Texte",
          boolean: "Oui/Non",
          choice: "Choix",
          color: "Couleur",
        };
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
            {typeLabels[row.original.type]}
          </span>
        );
      },
    },
    {
      accessorKey: "valeursPossibles",
      header: "Valeurs",
      cell: ({ row }) => {
        if (row.original.type === "choice" && row.original.valeursPossibles) {
          return (
            <div className="flex flex-wrap gap-1">
              {row.original.valeursPossibles.slice(0, 3).map((v) => (
                <span key={v} className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                  {v}
                </span>
              ))}
              {row.original.valeursPossibles.length > 3 && (
                <span className="text-xs text-gray-400">
                  +{row.original.valeursPossibles.length - 3}
                </span>
              )}
            </div>
          );
        }
        return <span className="text-gray-400">-</span>;
      },
    },
    {
      accessorKey: "global",
      header: "Portée",
      cell: ({ row }) => (
        <StatusBadge
          status={row.original.global ? "Globale" : "Spécifique"}
          variant={row.original.global ? "info" : "default"}
        />
      ),
    },
    {
      accessorKey: "productsCount",
      header: "Produits",
      cell: ({ row }) => (
        <span className="text-gray-600">{row.original.productsCount}</span>
      ),
    },
    {
      id: "actions",
      header: "",
      cell: ({ row }) => (
        <div className="flex items-center justify-end gap-1">
          <button
            onClick={() => handleEdit(row.original)}
            className="p-1.5 text-gray-400 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors"
            title="Modifier"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleDelete(row.original.id)}
            className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            title="Supprimer"
            disabled={row.original.productsCount > 0}
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
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/produits"
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Options de configuration</h1>
            <p className="text-gray-500 mt-1">
              Définissez les options personnalisables des produits
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            setEditingOption(null);
            setIsModalOpen(true);
          }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Nouvelle option
        </button>
      </div>

      {/* Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-700">
          <Globe className="w-4 h-4 inline mr-2" />
          <strong>Options globales</strong> : disponibles pour tous les produits.
          <Package className="w-4 h-4 inline ml-4 mr-2" />
          <strong>Options spécifiques</strong> : assignées manuellement à chaque produit.
        </p>
      </div>

      {/* Table */}
      <DataTable
        columns={columns}
        data={options}
        searchPlaceholder="Rechercher une option..."
      />

      {/* Modal */}
      <OptionModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingOption(null);
        }}
        option={editingOption}
        onSave={handleSave}
      />
    </div>
  );
}

function OptionModal({
  isOpen,
  onClose,
  option,
  onSave,
}: {
  isOpen: boolean;
  onClose: () => void;
  option: ProductOption | null;
  onSave: (data: Partial<ProductOption>) => void;
}) {
  const [formData, setFormData] = React.useState<Partial<ProductOption>>({
    nom: "",
    slug: "",
    type: "text",
    valeursPossibles: [],
    global: false,
  });
  const [choicesText, setChoicesText] = React.useState("");

  React.useEffect(() => {
    if (option) {
      setFormData({
        nom: option.nom,
        slug: option.slug,
        type: option.type,
        valeursPossibles: option.valeursPossibles,
        global: option.global,
      });
      setChoicesText(option.valeursPossibles?.join("\n") || "");
    } else {
      setFormData({ nom: "", slug: "", type: "text", valeursPossibles: [], global: false });
      setChoicesText("");
    }
  }, [option]);

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleSubmit = () => {
    const data = {
      ...formData,
      valeursPossibles:
        formData.type === "choice"
          ? choicesText.split("\n").filter((v) => v.trim())
          : undefined,
    };
    onSave(data);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={option ? "Modifier l'option" : "Nouvelle option"}
      size="md"
      footer={
        <>
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Annuler
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm font-medium text-white bg-cyan-500 rounded-lg hover:bg-cyan-600"
          >
            {option ? "Mettre à jour" : "Créer"}
          </button>
        </>
      }
    >
      <div className="space-y-4">
        <Input
          label="Nom de l'option"
          value={formData.nom || ""}
          onChange={(e) => {
            const nom = e.target.value;
            setFormData({
              ...formData,
              nom,
              slug: option ? formData.slug : generateSlug(nom),
            });
          }}
          placeholder="Ex: Largeur"
          required
        />
        <Input
          label="Slug"
          value={formData.slug || ""}
          onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
          placeholder="largeur"
          hint="Identifiant technique"
          required
        />
        <Select
          label="Type de valeur"
          value={formData.type}
          options={optionTypes}
          onChange={(value) => setFormData({ ...formData, type: value as ProductOption["type"] })}
          required
        />
        {formData.type === "choice" && (
          <Textarea
            label="Valeurs possibles"
            value={choicesText}
            onChange={(e) => setChoicesText(e.target.value)}
            placeholder="Sans&#10;Standard&#10;Premium"
            hint="Une valeur par ligne"
            rows={4}
          />
        )}
        <Switch
          label="Option globale"
          description="Disponible pour tous les produits automatiquement"
          checked={formData.global}
          onChange={(checked) => setFormData({ ...formData, global: checked })}
        />
      </div>
    </Modal>
  );
}









