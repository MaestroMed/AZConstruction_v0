"use client";

import * as React from "react";
import { useDropzone } from "react-dropzone";
import {
  Upload,
  Grid,
  List,
  Search,
  Trash2,
  Copy,
  Image as ImageIcon,
  FileText,
  Box,
  X,
  Check,
  Loader2,
  RefreshCw,
} from "lucide-react";
import { Modal, ConfirmDialog } from "@/components/admin/ui/Modal";
import { toast } from "sonner";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface MediaFile {
  id: string;
  fileName: string;
  originalName?: string;
  url: string;
  type: "image" | "document" | "model" | "unknown";
  size: number;
  uploadedAt: string;
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} o`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} Ko`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
}

function getFileIcon(type: MediaFile["type"]) {
  switch (type) {
    case "image":
      return ImageIcon;
    case "document":
      return FileText;
    case "model":
      return Box;
    default:
      return FileText;
  }
}

export default function MediasPage() {
  const [files, setFiles] = React.useState<MediaFile[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [uploading, setUploading] = React.useState(false);
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid");
  const [search, setSearch] = React.useState("");
  const [typeFilter, setTypeFilter] = React.useState<string>("all");
  const [selectedFiles, setSelectedFiles] = React.useState<string[]>([]);
  const [previewFile, setPreviewFile] = React.useState<MediaFile | null>(null);
  const [deleteIds, setDeleteIds] = React.useState<string[]>([]);

  // Charger les fichiers depuis l'API
  const loadFiles = React.useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/upload");
      const data = await response.json();
      setFiles(data.files || []);
    } catch (error) {
      console.error("Erreur lors du chargement des fichiers:", error);
      toast.error("Erreur lors du chargement des fichiers");
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadFiles();
  }, [loadFiles]);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    accept: {
      "image/*": [".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"],
      "application/pdf": [".pdf"],
      "model/gltf-binary": [".glb"],
      "model/gltf+json": [".gltf"],
    },
    onDrop: async (acceptedFiles) => {
      if (acceptedFiles.length === 0) return;

      setUploading(true);
      const formData = new FormData();
      acceptedFiles.forEach((file) => {
        formData.append("files", file);
      });

      try {
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error || "Erreur lors de l'upload");
        }

        const data = await response.json();
        toast.success(`${data.files.length} fichier(s) uploadé(s) avec succès`);
        loadFiles(); // Recharger la liste
      } catch (error) {
        console.error("Erreur lors de l'upload:", error);
        toast.error(error instanceof Error ? error.message : "Erreur lors de l'upload");
      } finally {
        setUploading(false);
      }
    },
  });

  const filteredFiles = files.filter((file) => {
    const fileName = file.originalName || file.fileName;
    const matchesSearch = fileName.toLowerCase().includes(search.toLowerCase());
    const matchesType = typeFilter === "all" || file.type === typeFilter;
    return matchesSearch && matchesType;
  });

  const handleSelectFile = (id: string) => {
    setSelectedFiles((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedFiles.length === filteredFiles.length) {
      setSelectedFiles([]);
    } else {
      setSelectedFiles(filteredFiles.map((f) => f.id));
    }
  };

  const handleDelete = async () => {
    try {
      for (const id of deleteIds) {
        const file = files.find((f) => f.id === id);
        if (file) {
          await fetch(`/api/upload?file=${encodeURIComponent(file.fileName)}`, {
            method: "DELETE",
          });
        }
      }
      toast.success(`${deleteIds.length} fichier(s) supprimé(s)`);
      setSelectedFiles([]);
      setDeleteIds([]);
      loadFiles();
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
      toast.error("Erreur lors de la suppression");
    }
  };

  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(window.location.origin + url);
    toast.success("URL copiée dans le presse-papier");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Médiathèque</h1>
          <p className="text-gray-500 mt-1">
            Gérez vos images, documents et modèles 3D
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={loadFiles}
            className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </button>
          <button
            onClick={open}
            disabled={uploading}
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 transition-colors disabled:opacity-50"
          >
            {uploading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Upload className="w-4 h-4" />
            )}
            {uploading ? "Upload en cours..." : "Ajouter des fichiers"}
          </button>
        </div>
      </div>

      {/* Upload zone */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${
          isDragActive
            ? "border-cyan-500 bg-cyan-50"
            : uploading
            ? "border-gray-300 bg-gray-50"
            : "border-gray-200 hover:border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        {uploading ? (
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-12 h-12 text-cyan-500 animate-spin" />
            <p className="text-gray-600">Upload en cours...</p>
          </div>
        ) : (
          <>
            <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600">
              <span className="text-cyan-600 font-medium">Cliquez pour télécharger</span> ou
              glissez-déposez vos fichiers ici
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Images (JPG, PNG, WebP, SVG), Documents (PDF), Modèles 3D (GLB, GLTF)
            </p>
          </>
        )}
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher..."
              className="w-64 pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Type filter */}
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="all">Tous les types</option>
            <option value="image">Images</option>
            <option value="document">Documents</option>
            <option value="model">Modèles 3D</option>
          </select>
        </div>

        <div className="flex items-center gap-3">
          {/* Selection actions */}
          {selectedFiles.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">
                {selectedFiles.length} sélectionné(s)
              </span>
              <button
                onClick={() => setDeleteIds(selectedFiles)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* View mode */}
          <div className="flex items-center bg-white border border-gray-200 rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded ${
                viewMode === "grid"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded ${
                viewMode === "list"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Loading state */}
      {loading && files.length === 0 ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 text-cyan-500 animate-spin" />
        </div>
      ) : filteredFiles.length === 0 ? (
        <div className="text-center py-20">
          <Upload className="w-16 h-16 mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500 mb-2">Aucun fichier trouvé</p>
          <p className="text-sm text-gray-400">
            {search || typeFilter !== "all"
              ? "Essayez de modifier vos filtres"
              : "Uploadez vos premiers fichiers pour commencer"}
          </p>
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredFiles.map((file) => {
            const Icon = getFileIcon(file.type);
            const isSelected = selectedFiles.includes(file.id);
            const displayName = file.originalName || file.fileName;
            return (
              <div
                key={file.id}
                className={`bg-white rounded-xl border overflow-hidden group cursor-pointer ${
                  isSelected ? "border-cyan-500 ring-2 ring-cyan-200" : "border-gray-200"
                }`}
                onClick={() => setPreviewFile(file)}
              >
                {/* Preview */}
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  {file.type === "image" ? (
                    <img
                      src={file.url}
                      alt={displayName}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
                      }}
                    />
                  ) : null}
                  <div className={`w-full h-full flex items-center justify-center ${file.type === "image" ? "hidden" : ""}`}>
                    <Icon className="w-12 h-12 text-gray-400" />
                  </div>

                  {/* Selection checkbox */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectFile(file.id);
                    }}
                    className={`absolute top-2 left-2 w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-cyan-500 border-cyan-500 text-white"
                        : "bg-white border-gray-300 opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    {isSelected && <Check className="w-4 h-4" />}
                  </button>

                  {/* Quick actions */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyUrl(file.url);
                      }}
                      className="p-1.5 bg-white rounded-lg shadow text-gray-600 hover:text-cyan-600"
                    >
                      <Copy className="w-3 h-3" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setDeleteIds([file.id]);
                      }}
                      className="p-1.5 bg-white rounded-lg shadow text-gray-600 hover:text-red-600"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-2">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {displayName}
                  </p>
                  <p className="text-xs text-gray-400">{formatFileSize(file.size)}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedFiles.length === filteredFiles.length && filteredFiles.length > 0}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300"
                  />
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Fichier
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Taille
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Date
                </th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredFiles.map((file) => {
                const Icon = getFileIcon(file.type);
                const isSelected = selectedFiles.includes(file.id);
                const displayName = file.originalName || file.fileName;
                return (
                  <tr
                    key={file.id}
                    className={`hover:bg-gray-50 ${isSelected ? "bg-cyan-50" : ""}`}
                  >
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleSelectFile(file.id)}
                        className="rounded border-gray-300"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                          {file.type === "image" ? (
                            <img
                              src={file.url}
                              alt={displayName}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <Icon className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                        <span className="font-medium text-gray-900">{displayName}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded capitalize">
                        {file.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {formatFileSize(file.size)}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {format(new Date(file.uploadedAt), "dd MMM yyyy", { locale: fr })}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => handleCopyUrl(file.url)}
                          className="p-1.5 text-gray-400 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setDeleteIds([file.id])}
                          className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Preview Modal */}
      <Modal
        isOpen={!!previewFile}
        onClose={() => setPreviewFile(null)}
        title={previewFile?.originalName || previewFile?.fileName || ""}
        size="lg"
      >
        {previewFile && (
          <div className="space-y-4">
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
              {previewFile.type === "image" ? (
                <img
                  src={previewFile.url}
                  alt={previewFile.originalName || previewFile.fileName}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <FileText className="w-24 h-24 text-gray-300" />
              )}
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Taille</p>
                <p className="font-medium">{formatFileSize(previewFile.size)}</p>
              </div>
              <div>
                <p className="text-gray-500">Type</p>
                <p className="font-medium capitalize">{previewFile.type}</p>
              </div>
              <div>
                <p className="text-gray-500">Date d&apos;upload</p>
                <p className="font-medium">
                  {format(new Date(previewFile.uploadedAt), "dd MMMM yyyy", { locale: fr })}
                </p>
              </div>
              <div>
                <p className="text-gray-500">URL</p>
                <button
                  onClick={() => handleCopyUrl(previewFile.url)}
                  className="font-medium text-cyan-600 hover:underline"
                >
                  Copier l&apos;URL
                </button>
              </div>
            </div>
            <div className="pt-4 border-t">
              <p className="text-xs text-gray-400 break-all">{previewFile.url}</p>
            </div>
          </div>
        )}
      </Modal>

      {/* Delete Confirmation */}
      <ConfirmDialog
        isOpen={deleteIds.length > 0}
        onClose={() => setDeleteIds([])}
        onConfirm={handleDelete}
        title="Supprimer les fichiers"
        message={`Êtes-vous sûr de vouloir supprimer ${deleteIds.length} fichier(s) ? Cette action est irréversible.`}
        confirmText="Supprimer"
        variant="danger"
      />
    </div>
  );
}
