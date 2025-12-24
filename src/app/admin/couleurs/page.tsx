"use client";

import * as React from "react";
import { Plus, Edit, Trash2, Upload, Search } from "lucide-react";
import { Modal, ConfirmDialog } from "@/components/admin/ui/Modal";
import { Input, ColorPicker } from "@/components/admin/ui/FormFields";
import { toast } from "sonner";

interface RALColor {
  code: string;
  nom: string;
  hex: string;
}

const mockColors: RALColor[] = [
  { code: "RAL 1000", nom: "Beige vert", hex: "#BEBD7F" },
  { code: "RAL 1001", nom: "Beige", hex: "#C2B078" },
  { code: "RAL 1002", nom: "Jaune sable", hex: "#C6A664" },
  { code: "RAL 1003", nom: "Jaune de sécurité", hex: "#E5BE01" },
  { code: "RAL 1004", nom: "Jaune or", hex: "#CDA434" },
  { code: "RAL 3000", nom: "Rouge feu", hex: "#AF2B1E" },
  { code: "RAL 3001", nom: "Rouge signalisation", hex: "#A52019" },
  { code: "RAL 3002", nom: "Rouge carmin", hex: "#A2231D" },
  { code: "RAL 5002", nom: "Bleu outremer", hex: "#20214F" },
  { code: "RAL 5003", nom: "Bleu saphir", hex: "#1D1E33" },
  { code: "RAL 5004", nom: "Bleu noir", hex: "#18171C" },
  { code: "RAL 5005", nom: "Bleu de sécurité", hex: "#1E2460" },
  { code: "RAL 6005", nom: "Vert mousse", hex: "#2F4538" },
  { code: "RAL 6009", nom: "Vert sapin", hex: "#31372B" },
  { code: "RAL 7015", nom: "Gris ardoise", hex: "#434B4D" },
  { code: "RAL 7016", nom: "Gris anthracite", hex: "#293133" },
  { code: "RAL 7021", nom: "Gris noir", hex: "#23282B" },
  { code: "RAL 7035", nom: "Gris clair", hex: "#D7D7D7" },
  { code: "RAL 7040", nom: "Gris fenêtre", hex: "#9DA1AA" },
  { code: "RAL 8017", nom: "Brun chocolat", hex: "#45322E" },
  { code: "RAL 9001", nom: "Blanc crème", hex: "#FFFDF4" },
  { code: "RAL 9005", nom: "Noir foncé", hex: "#0A0A0D" },
  { code: "RAL 9006", nom: "Aluminium blanc", hex: "#A5A5A5" },
  { code: "RAL 9010", nom: "Blanc pur", hex: "#FFFFFF" },
  { code: "RAL 9016", nom: "Blanc signalisation", hex: "#F6F6F6" },
];

export default function CouleursPage() {
  const [colors, setColors] = React.useState<RALColor[]>(mockColors);
  const [search, setSearch] = React.useState("");
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [editingColor, setEditingColor] = React.useState<RALColor | null>(null);
  const [deleteCode, setDeleteCode] = React.useState<string | null>(null);

  const filteredColors = colors.filter(
    (c) =>
      c.code.toLowerCase().includes(search.toLowerCase()) ||
      c.nom.toLowerCase().includes(search.toLowerCase())
  );

  const handleEdit = (color: RALColor) => {
    setEditingColor(color);
    setIsModalOpen(true);
  };

  const handleDelete = () => {
    if (deleteCode) {
      setColors((items) => items.filter((item) => item.code !== deleteCode));
      toast.success("Couleur supprimée");
      setDeleteCode(null);
    }
  };

  const handleSave = (data: RALColor) => {
    if (editingColor) {
      setColors((items) =>
        items.map((item) =>
          item.code === editingColor.code ? data : item
        )
      );
      toast.success("Couleur mise à jour");
    } else {
      // Check if code already exists
      if (colors.some((c) => c.code === data.code)) {
        toast.error("Ce code RAL existe déjà");
        return;
      }
      setColors([...colors, data]);
      toast.success("Couleur ajoutée");
    }
    setIsModalOpen(false);
    setEditingColor(null);
  };

  const handleImport = () => {
    // TODO: Implement file import
    toast.info("Fonctionnalité d'import en cours de développement");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Couleurs RAL</h1>
          <p className="text-gray-500 mt-1">
            Gérez le nuancier de couleurs disponibles
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleImport}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Upload className="w-4 h-4" />
            Importer
          </button>
          <button
            onClick={() => {
              setEditingColor(null);
              setIsModalOpen(true);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Ajouter une couleur
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher par code ou nom..."
          className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      {/* Stats */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <p className="text-sm text-gray-500">
          <span className="font-semibold text-gray-900">{colors.length}</span> couleurs dans le nuancier
          {search && ` • ${filteredColors.length} résultat${filteredColors.length > 1 ? "s" : ""}`}
        </p>
      </div>

      {/* Colors grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {filteredColors.map((color) => (
          <div
            key={color.code}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden group hover:shadow-lg transition-shadow"
          >
            {/* Color preview */}
            <div
              className="aspect-square relative"
              style={{ backgroundColor: color.hex }}
            >
              {/* Actions overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button
                  onClick={() => handleEdit(color)}
                  className="p-2 bg-white rounded-lg text-gray-700 hover:bg-cyan-500 hover:text-white transition-colors"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDeleteCode(color.code)}
                  className="p-2 bg-white rounded-lg text-gray-700 hover:bg-red-500 hover:text-white transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Info */}
            <div className="p-3">
              <p className="font-medium text-gray-900 text-sm">{color.code}</p>
              <p className="text-xs text-gray-500 truncate">{color.nom}</p>
              <p className="text-xs text-gray-400 font-mono mt-1">{color.hex}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredColors.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">Aucune couleur trouvée</p>
        </div>
      )}

      {/* Edit Modal */}
      <ColorModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingColor(null);
        }}
        color={editingColor}
        onSave={handleSave}
      />

      {/* Delete Confirmation */}
      <ConfirmDialog
        isOpen={!!deleteCode}
        onClose={() => setDeleteCode(null)}
        onConfirm={handleDelete}
        title="Supprimer la couleur"
        message="Êtes-vous sûr de vouloir supprimer cette couleur du nuancier ?"
        confirmText="Supprimer"
        variant="danger"
      />
    </div>
  );
}

function ColorModal({
  isOpen,
  onClose,
  color,
  onSave,
}: {
  isOpen: boolean;
  onClose: () => void;
  color: RALColor | null;
  onSave: (data: RALColor) => void;
}) {
  const [formData, setFormData] = React.useState<RALColor>({
    code: "",
    nom: "",
    hex: "#000000",
  });

  React.useEffect(() => {
    if (color) {
      setFormData(color);
    } else {
      setFormData({ code: "", nom: "", hex: "#000000" });
    }
  }, [color]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={color ? "Modifier la couleur" : "Nouvelle couleur"}
      size="sm"
      footer={
        <>
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Annuler
          </button>
          <button
            onClick={() => onSave(formData)}
            disabled={!formData.code || !formData.nom}
            className="px-4 py-2 text-sm font-medium text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 disabled:opacity-50"
          >
            {color ? "Mettre à jour" : "Ajouter"}
          </button>
        </>
      }
    >
      <div className="space-y-4">
        {/* Color preview */}
        <div
          className="w-full h-32 rounded-xl border border-gray-200"
          style={{ backgroundColor: formData.hex }}
        />

        <Input
          label="Code RAL"
          value={formData.code}
          onChange={(e) => setFormData({ ...formData, code: e.target.value })}
          placeholder="RAL 7016"
          disabled={!!color}
          required
        />
        <Input
          label="Nom de la couleur"
          value={formData.nom}
          onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
          placeholder="Gris anthracite"
          required
        />
        <ColorPicker
          label="Couleur (HEX)"
          value={formData.hex}
          onChange={(hex) => setFormData({ ...formData, hex })}
        />
      </div>
    </Modal>
  );
}








