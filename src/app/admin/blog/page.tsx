"use client";

import * as React from "react";
import Link from "next/link";
import {
  Plus, Edit2, Trash2, Eye, EyeOff, Search, Loader2, Save, X,
  ArrowLeft, BookOpen, Calendar, Tag, Clock,
} from "lucide-react";
import { toast } from "sonner";
import { PageSkeleton } from "@/components/admin/ui/PageSkeleton";
import { cn } from "@/lib/utils";
import { ConfirmDialog } from "@/components/admin/ui/Modal";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  content?: string;
  category: string;
  tags: string[];
  featuredImage?: string;
  author: string;
  published: boolean;
  publishedAt?: string;
  seoTitle?: string;
  seoDescription?: string;
  readingTime?: number;
  createdAt: string;
  updatedAt: string;
}

const CATEGORIES = [
  { value: "garde-corps", label: "Garde-corps" },
  { value: "normes", label: "Normes & Réglementation" },
  { value: "guide", label: "Guides pratiques" },
  { value: "prix", label: "Prix & Devis" },
  { value: "local-seo", label: "Île-de-France" },
  { value: "thermolaquage", label: "Thermolaquage" },
  { value: "escaliers", label: "Escaliers" },
  { value: "inspirations", label: "Inspirations" },
  { value: "actualites", label: "Actualités" },
];

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export default function AdminBlogPage() {
  const [posts, setPosts] = React.useState<BlogPost[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [search, setSearch] = React.useState("");
  const [editing, setEditing] = React.useState<Partial<BlogPost> | null>(null);
  const [saving, setSaving] = React.useState(false);
  const [deleting, setDeleting] = React.useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = React.useState<string | null>(null);

  const loadPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/blog?admin=true");
      const data = await res.json();
      if (data.success) setPosts(data.posts || []);
    } catch { toast.error("Erreur de chargement"); }
    finally { setLoading(false); }
  };

  React.useEffect(() => {
    loadPosts().then(() => {
      // Handle deep-link triggers from /admin/blog/nouveau and /admin/blog/[id]
      const newFlag = sessionStorage.getItem("blog_new_article");
      if (newFlag) {
        sessionStorage.removeItem("blog_new_article");
        handleNew();
      }
      const editId = sessionStorage.getItem("blog_edit_id");
      if (editId) {
        sessionStorage.removeItem("blog_edit_id");
        // Will be resolved after posts load
        setPosts(prev => {
          const post = prev.find(p => p.id === editId);
          if (post) setEditing({ ...post });
          return prev;
        });
      }
    });
  }, []);

  const filtered = posts.filter((p) =>
    !search ||
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleNew = () => setEditing({
    title: "", slug: "", excerpt: "", content: "", category: "guide",
    tags: [], author: "L'équipe AZ Construction", published: false,
    seoTitle: "", seoDescription: "", readingTime: 5,
  });

  const handleEdit = (post: BlogPost) => setEditing({ ...post });

  const handleSave = async () => {
    if (!editing?.title || !editing?.slug) {
      toast.error("Titre et slug requis");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editing),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.error);
      toast.success("Article sauvegardé !");
      setEditing(null);
      await loadPosts();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Erreur");
    } finally { setSaving(false); }
  };

  const handleTogglePublish = async (post: BlogPost) => {
    // Optimistic update
    const prevPosts = [...posts];
    setPosts(prev => prev.map(p => p.id === post.id ? { ...p, published: !p.published } : p));
    try {
      await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...post, published: !post.published }),
      });
      toast.success(post.published ? "Article dépublié" : "Article publié !");
    } catch {
      setPosts(prevPosts); // Revert on error
      toast.error("Erreur");
    }
  };

  const handleDelete = async (id: string) => {
    setDeleting(id);
    try {
      await fetch(`/api/blog?id=${id}`, { method: "DELETE" });
      toast.success("Article supprimé");
      await loadPosts();
    } catch { toast.error("Erreur"); }
    finally { setDeleting(null); setConfirmDeleteId(null); }
  };

  // ── Editor ────────────────────────────────────────────
  if (editing !== null) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <button onClick={() => setEditing(null)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-gray-900">
            {editing.id ? "Modifier l'article" : "Nouvel article"}
          </h1>
          <div className="ml-auto flex gap-3">
            <button onClick={() => setEditing(null)} className="px-4 py-2 border border-gray-200 text-gray-600 rounded-xl text-sm hover:bg-gray-50">
              Annuler
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 disabled:opacity-60"
            >
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              Sauvegarder
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Titre *</label>
              <input
                type="text"
                value={editing.title || ""}
                onChange={(e) => {
                  const title = e.target.value;
                  setEditing((p) => ({ ...p, title, slug: p?.id ? p.slug : slugify(title) }));
                }}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Ex : Prix d'un garde-corps en 2025 : guide complet"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Extrait</label>
              <textarea
                value={editing.excerpt || ""}
                onChange={(e) => setEditing((p) => ({ ...p, excerpt: e.target.value }))}
                rows={2}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                placeholder="Résumé court affiché dans la liste du blog (160 caractères max)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Contenu (HTML)</label>
              <textarea
                value={editing.content || ""}
                onChange={(e) => setEditing((p) => ({ ...p, content: e.target.value }))}
                rows={20}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-y font-mono text-sm"
                placeholder="<h2>Introduction</h2><p>Votre contenu HTML ici...</p>"
              />
              <p className="text-xs text-gray-400 mt-1">Saisissez du HTML. Les balises h2, h3, p, ul, li, strong, a sont supportées.</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Publication */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <h3 className="font-semibold text-gray-900 mb-4">Publication</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editing.published || false}
                    onChange={(e) => setEditing((p) => ({ ...p, published: e.target.checked }))}
                    className="w-4 h-4 rounded"
                  />
                  <span className="text-sm font-medium text-gray-700">Publier l'article</span>
                </label>
                {editing.id && (
                  <div className="pt-2">
                    <Link
                      href={`/blog/${editing.slug}`}
                      target="_blank"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Voir sur le site →
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Meta */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 space-y-4">
              <h3 className="font-semibold text-gray-900">Informations</h3>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Slug URL *</label>
                <input
                  type="text"
                  value={editing.slug || ""}
                  onChange={(e) => setEditing((p) => ({ ...p, slug: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none font-mono"
                  placeholder="prix-garde-corps-2025"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Catégorie</label>
                <select
                  value={editing.category || "guide"}
                  onChange={(e) => setEditing((p) => ({ ...p, category: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Tags (séparés par virgule)</label>
                <input
                  type="text"
                  value={Array.isArray(editing.tags) ? editing.tags.join(", ") : ""}
                  onChange={(e) => setEditing((p) => ({ ...p, tags: e.target.value.split(",").map((t) => t.trim()).filter(Boolean) }))}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="garde-corps, prix, ile-de-france"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Temps de lecture (min)</label>
                <input
                  type="number"
                  value={editing.readingTime || 5}
                  onChange={(e) => setEditing((p) => ({ ...p, readingTime: parseInt(e.target.value) || 5 }))}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Image principale (URL)</label>
                <input
                  type="text"
                  value={editing.featuredImage || ""}
                  onChange={(e) => setEditing((p) => ({ ...p, featuredImage: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="https://..."
                />
              </div>
            </div>

            {/* SEO */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 space-y-4">
              <h3 className="font-semibold text-gray-900">SEO</h3>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Titre SEO (60 car. max)</label>
                <input
                  type="text"
                  value={editing.seoTitle || ""}
                  onChange={(e) => setEditing((p) => ({ ...p, seoTitle: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  maxLength={70}
                />
                <p className="text-xs text-gray-400 mt-0.5">{(editing.seoTitle || "").length}/70</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Description SEO (160 car. max)</label>
                <textarea
                  value={editing.seoDescription || ""}
                  onChange={(e) => setEditing((p) => ({ ...p, seoDescription: e.target.value }))}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  maxLength={170}
                />
                <p className="text-xs text-gray-400 mt-0.5">{(editing.seoDescription || "").length}/170</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Liste ─────────────────────────────────────────────
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            Blog
          </h1>
          <p className="text-gray-500 mt-1">{posts.length} article{posts.length !== 1 ? "s" : ""}</p>
        </div>
        <div className="flex gap-3">
          <Link href="/blog" target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl text-sm hover:bg-gray-50 transition-colors">
            <Eye className="w-4 h-4" /> Voir le blog
          </Link>
          <button onClick={handleNew}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" /> Nouvel article
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Rechercher..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* List */}
      {loading ? (
        <PageSkeleton variant="table" />
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
          <BookOpen className="w-12 h-12 text-gray-200 mx-auto mb-3" />
          <p className="text-gray-500">Aucun article. Créez le premier !</p>
          <button onClick={handleNew} className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700">
            <Plus className="w-4 h-4" /> Créer un article
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-left">
                <th className="px-5 py-3 font-medium text-gray-500">Titre</th>
                <th className="px-5 py-3 font-medium text-gray-500">Catégorie</th>
                <th className="px-5 py-3 font-medium text-gray-500">Statut</th>
                <th className="px-5 py-3 font-medium text-gray-500">Date</th>
                <th className="px-5 py-3 font-medium text-gray-500"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3">
                    <div>
                      <p className="font-medium text-gray-900">{post.title}</p>
                      <p className="text-xs text-gray-400 font-mono">/blog/{post.slug}</p>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                      {CATEGORIES.find((c) => c.value === post.category)?.label || post.category}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <span className={cn(
                      "px-2 py-1 rounded-full text-xs font-medium",
                      post.published ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                    )}>
                      {post.published ? "Publié" : "Brouillon"}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-gray-500 text-xs">
                    {post.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" })
                      : new Date(post.createdAt).toLocaleDateString("fr-FR", { day: "2-digit", month: "short" })}
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-1 justify-end">
                      <button onClick={() => handleTogglePublish(post)} title={post.published ? "Dépublier" : "Publier"}
                        className={cn("p-1.5 rounded-lg transition-colors",
                          post.published ? "text-green-600 hover:bg-green-50" : "text-gray-400 hover:bg-gray-100")}>
                        {post.published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                      </button>
                      <button onClick={() => handleEdit(post)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => setConfirmDeleteId(post.id)} disabled={deleting === post.id}
                        className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50">
                        {deleting === post.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <ConfirmDialog
        isOpen={!!confirmDeleteId}
        onClose={() => setConfirmDeleteId(null)}
        onConfirm={() => confirmDeleteId && handleDelete(confirmDeleteId)}
        title="Supprimer l'article"
        message="Cette action est irréversible. L'article sera définitivement supprimé."
        confirmText="Supprimer"
        variant="danger"
        loading={!!deleting}
      />
    </div>
  );
}
