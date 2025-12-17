"use client";

import * as React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Save, Eye, EyeOff, Settings, Trash2 } from "lucide-react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import TipTapLink from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { Input, Textarea, Switch } from "@/components/admin/ui/FormFields";
import { SlideOver } from "@/components/admin/ui/Modal";
import { toast } from "sonner";

// Mock page data
const mockPage = {
  id: "1",
  slug: "a-propos",
  title: "À propos",
  content: `
    <h2>Notre histoire</h2>
    <p>Fondée en 2010, AZ Construction est née de la passion d'un artisan pour le travail du métal. Aujourd'hui, nous sommes une équipe de 15 professionnels dédiés à la réalisation de vos projets sur mesure.</p>
    <h2>Nos valeurs</h2>
    <p>Qualité, précision et satisfaction client sont au cœur de notre métier. Chaque création est unique et réalisée avec le plus grand soin.</p>
    <h3>Savoir-faire artisanal</h3>
    <p>Nos artisans maîtrisent les techniques traditionnelles tout en intégrant les technologies modernes pour vous offrir des réalisations d'exception.</p>
    <h3>Made in France</h3>
    <p>Tous nos produits sont fabriqués dans nos ateliers en France, garantissant qualité et réactivité.</p>
  `,
  published: true,
  metaTitle: "À propos - AZ Construction",
  metaDescription: "Découvrez l'histoire et les valeurs d'AZ Construction, votre partenaire métallerie sur mesure.",
  createdAt: new Date("2024-01-10"),
  updatedAt: new Date("2024-12-01"),
};

// Toolbar component for TipTap
function EditorToolbar({ editor }: { editor: ReturnType<typeof useEditor> | null }) {
  if (!editor) return null;

  const buttons = [
    {
      label: "Gras",
      action: () => editor.chain().focus().toggleBold().run(),
      active: editor.isActive("bold"),
      icon: "B",
      className: "font-bold",
    },
    {
      label: "Italique",
      action: () => editor.chain().focus().toggleItalic().run(),
      active: editor.isActive("italic"),
      icon: "I",
      className: "italic",
    },
    { type: "divider" },
    {
      label: "Titre 2",
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      active: editor.isActive("heading", { level: 2 }),
      icon: "H2",
    },
    {
      label: "Titre 3",
      action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      active: editor.isActive("heading", { level: 3 }),
      icon: "H3",
    },
    { type: "divider" },
    {
      label: "Liste à puces",
      action: () => editor.chain().focus().toggleBulletList().run(),
      active: editor.isActive("bulletList"),
      icon: "•",
    },
    {
      label: "Liste numérotée",
      action: () => editor.chain().focus().toggleOrderedList().run(),
      active: editor.isActive("orderedList"),
      icon: "1.",
    },
    { type: "divider" },
    {
      label: "Citation",
      action: () => editor.chain().focus().toggleBlockquote().run(),
      active: editor.isActive("blockquote"),
      icon: "❝",
    },
    {
      label: "Lien",
      action: () => {
        const url = window.prompt("URL du lien:");
        if (url) {
          editor.chain().focus().setLink({ href: url }).run();
        }
      },
      active: editor.isActive("link"),
      icon: "🔗",
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-1 p-2 border-b border-gray-200 bg-gray-50">
      {buttons.map((btn, index) =>
        btn.type === "divider" ? (
          <div key={index} className="w-px h-6 bg-gray-300 mx-1" />
        ) : (
          <button
            key={index}
            type="button"
            onClick={btn.action}
            title={btn.label}
            className={`px-2 py-1 rounded text-sm transition-colors ${
              btn.active
                ? "bg-cyan-500 text-white"
                : "text-gray-600 hover:bg-gray-200"
            } ${btn.className || ""}`}
          >
            {btn.icon}
          </button>
        )
      )}
    </div>
  );
}

export default function PageEditorPage() {
  const params = useParams();
  const router = useRouter();
  const [page, setPage] = React.useState(mockPage);
  const [saving, setSaving] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      TipTapLink.configure({
        openOnClick: false,
      }),
      Placeholder.configure({
        placeholder: "Commencez à écrire votre contenu...",
      }),
    ],
    content: page.content,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose max-w-none p-4 min-h-[400px] focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      setPage({ ...page, content: editor.getHTML() });
    },
  });

  const handleSave = async () => {
    setSaving(true);
    try {
      // TODO: API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Page enregistrée");
    } catch {
      toast.error("Erreur lors de la sauvegarde");
    } finally {
      setSaving(false);
    }
  };

  const handleTogglePublish = () => {
    setPage({ ...page, published: !page.published });
    toast.success(page.published ? "Page dépubliée" : "Page publiée");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/pages"
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{page.title}</h1>
            <p className="text-gray-500 mt-1">/{page.slug}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSettingsOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Settings className="w-4 h-4" />
            SEO
          </button>
          <button
            onClick={handleTogglePublish}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              page.published
                ? "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                : "bg-emerald-500 text-white hover:bg-emerald-600"
            }`}
          >
            {page.published ? (
              <>
                <EyeOff className="w-4 h-4" />
                Dépublier
              </>
            ) : (
              <>
                <Eye className="w-4 h-4" />
                Publier
              </>
            )}
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 transition-colors disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {saving ? "Enregistrement..." : "Enregistrer"}
          </button>
        </div>
      </div>

      {/* Editor */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {/* Title input */}
        <div className="p-4 border-b border-gray-200">
          <input
            type="text"
            value={page.title}
            onChange={(e) => setPage({ ...page, title: e.target.value })}
            className="w-full text-2xl font-bold text-gray-900 border-0 p-0 focus:outline-none focus:ring-0"
            placeholder="Titre de la page"
          />
        </div>

        {/* TipTap Toolbar */}
        <EditorToolbar editor={editor} />

        {/* TipTap Editor */}
        <EditorContent editor={editor} className="min-h-[500px]" />
      </div>

      {/* SEO Settings Slide-over */}
      <SlideOver
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        title="Paramètres SEO"
        description="Optimisez le référencement de cette page"
        footer={
          <>
            <button
              onClick={() => setSettingsOpen(false)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Annuler
            </button>
            <button
              onClick={() => {
                setSettingsOpen(false);
                toast.success("Paramètres SEO enregistrés");
              }}
              className="px-4 py-2 text-sm font-medium text-white bg-cyan-500 rounded-lg hover:bg-cyan-600"
            >
              Enregistrer
            </button>
          </>
        }
      >
        <div className="space-y-6">
          <Input
            label="Meta Title"
            value={page.metaTitle || ""}
            onChange={(e) => setPage({ ...page, metaTitle: e.target.value })}
            placeholder="Titre pour les moteurs de recherche"
            hint="Idéalement entre 50 et 60 caractères"
          />
          <Textarea
            label="Meta Description"
            value={page.metaDescription || ""}
            onChange={(e) => setPage({ ...page, metaDescription: e.target.value })}
            placeholder="Description pour les moteurs de recherche"
            hint="Idéalement entre 150 et 160 caractères"
            rows={3}
          />

          {/* Preview */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Aperçu Google</p>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-blue-600 text-lg truncate">
                {page.metaTitle || page.title}
              </p>
              <p className="text-emerald-700 text-sm">
                azconstruction.fr/pages/{page.slug}
              </p>
              <p className="text-gray-600 text-sm line-clamp-2">
                {page.metaDescription || "Aucune description définie"}
              </p>
            </div>
          </div>
        </div>
      </SlideOver>
    </div>
  );
}

