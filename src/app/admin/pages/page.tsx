"use client";

import * as React from "react";
import Link from "next/link";
import { Plus, Edit, Eye, Trash2, FileText, EyeOff, Copy } from "lucide-react";
import { DataTable, StatusBadge } from "@/components/admin/ui/DataTable";
import { Modal, ConfirmDialog } from "@/components/admin/ui/Modal";
import { Input, Textarea } from "@/components/admin/ui/FormFields";
import { type ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { toast } from "sonner";

interface Page {
  id: string;
  slug: string;
  title: string;
  published: boolean;
  metaTitle?: string;
  metaDescription?: string;
  createdAt: Date;
  updatedAt: Date;
}

const mockPages: Page[] = [
  {
    id: "1",
    slug: "a-propos",
    title: "À propos",
    published: true,
    metaTitle: "À propos - AZ Construction",
    metaDescription: "Découvrez l'histoire et les valeurs d'AZ Construction, votre partenaire métallerie sur mesure.",
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-12-01"),
  },
  {
    id: "2",
    slug: "mentions-legales",
    title: "Mentions légales",
    published: true,
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-06-15"),
  },
  {
    id: "3",
    slug: "cgv",
    title: "Conditions Générales de Vente",
    published: true,
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-09-20"),
  },
  {
    id: "4",
    slug: "politique-confidentialite",
    title: "Politique de confidentialité",
    published: true,
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-03-05"),
  },
  {
    id: "5",
    slug: "faq",
    title: "Questions fréquentes",
    published: true,
    metaTitle: "FAQ - AZ Construction",
    metaDescription: "Toutes les réponses à vos questions sur nos produits et services.",
    createdAt: new Date("2024-02-20"),
    updatedAt: new Date("2024-11-10"),
  },
  {
    id: "6",
    slug: "nos-engagements",
    title: "Nos engagements qualité",
    published: false,
    createdAt: new Date("2024-12-10"),
    updatedAt: new Date("2024-12-10"),
  },
];

export default function PagesPage() {
  const [pages, setPages] = React.useState<Page[]>(mockPages);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [editingPage, setEditingPage] = React.useState<Page | null>(null);
  const [deleteId, setDeleteId] = React.useState<string | null>(null);

  const handleTogglePublish = (id: string) => {
    setPages((items) =>
      items.map((item) =>
        item.id === id ? { ...item, published: !item.published } : item
      )
    );
    const page = pages.find((p) => p.id === id);
    toast.success(page?.published ? "Page dépubliée" : "Page publiée");
  };

  const handleDuplicate = (page: Page) => {
    const newPage: Page = {
      ...page,
      id: String(pages.length + 1),
      slug: `${page.slug}-copie`,
      title: `${page.title} (copie)`,
      published: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setPages([...pages, newPage]);
    toast.success("Page dupliquée");
  };

  const handleDelete = () => {
    if (deleteId) {
      setPages((items) => items.filter((item) => item.id !== deleteId));
      toast.success("Page supprimée");
      setDeleteId(null);
    }
  };

  const handleCreate = (data: { title: string; slug: string }) => {
    const newPage: Page = {
      id: String(pages.length + 1),
      title: data.title,
      slug: data.slug,
      published: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setPages([...pages, newPage]);
    toast.success("Page créée - Vous pouvez maintenant éditer le contenu");
    setIsModalOpen(false);
  };

  const columns: ColumnDef<Page>[] = [
    {
      accessorKey: "title",
      header: "Titre",
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
            <FileText className="w-5 h-5 text-gray-400" />
          </div>
          <div>
            <Link
              href={`/admin/pages/${row.original.slug}`}
              className="font-medium text-gray-900 hover:text-cyan-600"
            >
              {row.original.title}
            </Link>
            <p className="text-sm text-gray-500">/{row.original.slug}</p>
          </div>
        </div>
      ),
    },
    {
      accessorKey: "published",
      header: "Statut",
      cell: ({ row }) => (
        <StatusBadge
          status={row.original.published ? "Publiée" : "Brouillon"}
          variant={row.original.published ? "success" : "default"}
        />
      ),
    },
    {
      accessorKey: "metaTitle",
      header: "SEO",
      cell: ({ row }) => {
        const hasMetaTitle = !!row.original.metaTitle;
        const hasMetaDesc = !!row.original.metaDescription;
        if (hasMetaTitle && hasMetaDesc) {
          return (
            <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
              ✓ Complet
            </span>
          );
        }
        if (hasMetaTitle || hasMetaDesc) {
          return (
            <span className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded">
              Partiel
            </span>
          );
        }
        return (
          <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">
            À configurer
          </span>
        );
      },
    },
    {
      accessorKey: "updatedAt",
      header: "Dernière modification",
      cell: ({ row }) =>
        format(new Date(row.original.updatedAt), "dd MMM yyyy", { locale: fr }),
    },
    {
      id: "actions",
      header: "",
      cell: ({ row }) => (
        <div className="flex items-center justify-end gap-1">
          <Link
            href={`/admin/pages/${row.original.slug}`}
            className="p-1.5 text-gray-400 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors"
            title="Modifier"
          >
            <Edit className="w-4 h-4" />
          </Link>
          <button
            onClick={() => handleTogglePublish(row.original.id)}
            className={`p-1.5 rounded-lg transition-colors ${
              row.original.published
                ? "text-emerald-600 hover:bg-emerald-50"
                : "text-gray-400 hover:bg-gray-100"
            }`}
            title={row.original.published ? "Dépublier" : "Publier"}
          >
            {row.original.published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          </button>
          <button
            onClick={() => handleDuplicate(row.original)}
            className="p-1.5 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
            title="Dupliquer"
          >
            <Copy className="w-4 h-4" />
          </button>
          <button
            onClick={() => setDeleteId(row.original.id)}
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
          <h1 className="text-2xl font-bold text-gray-900">Pages CMS</h1>
          <p className="text-gray-500 mt-1">
            Gérez les pages de contenu de votre site
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Nouvelle page
        </button>
      </div>

      {/* Table */}
      <DataTable
        columns={columns}
        data={pages}
        searchPlaceholder="Rechercher une page..."
      />

      {/* Create Modal */}
      <CreatePageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreate}
      />

      {/* Delete Confirmation */}
      <ConfirmDialog
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={handleDelete}
        title="Supprimer la page"
        message="Êtes-vous sûr de vouloir supprimer cette page ? Cette action est irréversible."
        confirmText="Supprimer"
        variant="danger"
      />
    </div>
  );
}

function CreatePageModal({
  isOpen,
  onClose,
  onCreate,
}: {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (data: { title: string; slug: string }) => void;
}) {
  const [title, setTitle] = React.useState("");
  const [slug, setSlug] = React.useState("");

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  React.useEffect(() => {
    if (!isOpen) {
      setTitle("");
      setSlug("");
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Nouvelle page"
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
            onClick={() => onCreate({ title, slug })}
            disabled={!title || !slug}
            className="px-4 py-2 text-sm font-medium text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 disabled:opacity-50"
          >
            Créer et éditer
          </button>
        </>
      }
    >
      <div className="space-y-4">
        <Input
          label="Titre de la page"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setSlug(generateSlug(e.target.value));
          }}
          placeholder="Ex: À propos de nous"
          required
        />
        <Input
          label="URL (slug)"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="a-propos-de-nous"
          hint="L'URL sera : /pages/{slug}"
          required
        />
      </div>
    </Modal>
  );
}



