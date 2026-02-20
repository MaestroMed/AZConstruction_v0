"use client";

import * as React from "react";
import Link from "next/link";
import {
  Building,
  Save,
  Loader2,
  ImageIcon,
  CreditCard,
  Mail,
  Search,
  LayoutGrid,
  ArrowLeft,
  CheckCircle2,
  MapPin,
  User,
  FileText,
} from "lucide-react";
import { toast } from "sonner";

const settingsSections = [
  { id: "general", label: "Général", icon: Building, href: "/admin/parametres" },
  { id: "images", label: "Images du site", icon: ImageIcon, href: "/admin/parametres/images" },
  { id: "realisations-pro", label: "Réalisations Pro", icon: LayoutGrid, href: "/admin/parametres/realisations-pro" },
  { id: "ecommerce", label: "E-commerce", icon: CreditCard, href: "/admin/parametres/ecommerce" },
  { id: "emails", label: "Emails", icon: Mail, href: "/admin/parametres/emails" },
  { id: "seo", label: "SEO", icon: Search, href: "/admin/parametres/seo" },
];

interface B2BCard {
  title: string;
  client: string;
  location: string;
  imageKey: string;
}

const DEFAULT_CARDS: B2BCard[] = [
  { title: "Garde-corps collectif", client: "Promoteur IDF", location: "Île-de-France", imageKey: "realisation-b2b-1" },
  { title: "Escalier industriel", client: "Usine automobile", location: "Seine-et-Marne (77)", imageKey: "realisation-b2b-2" },
  { title: "Portails résidence", client: "Collectivité locale", location: "Val-d'Oise (95)", imageKey: "realisation-b2b-3" },
];

export default function RealisationsProAdminPage() {
  const [cards, setCards] = React.useState<B2BCard[]>(DEFAULT_CARDS);
  const [loading, setLoading] = React.useState(true);
  const [saving, setSaving] = React.useState(false);
  const [saved, setSaved] = React.useState(false);

  React.useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/b2b-cards");
        const data = await res.json();
        if (data.success && data.cards) {
          // Merge with defaults to ensure imageKey is always present
          const merged = data.cards.map((card: Partial<B2BCard>, i: number) => ({
            ...DEFAULT_CARDS[i],
            ...card,
          }));
          setCards(merged);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setSaved(false);
    try {
      const res = await fetch("/api/b2b-cards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cards }),
      });
      if (!res.ok) throw new Error();
      setSaved(true);
      toast.success("Réalisations Pro sauvegardées !");
      setTimeout(() => setSaved(false), 3000);
    } catch {
      toast.error("Erreur lors de la sauvegarde");
    } finally {
      setSaving(false);
    }
  };

  const updateCard = (index: number, field: keyof B2BCard, value: string) => {
    setCards((prev) => prev.map((card, i) => i === index ? { ...card, [field]: value } : card));
    setSaved(false);
  };

  const cardLabels = ["Réalisation 1", "Réalisation 2", "Réalisation 3"];
  const imageKeyLabels = ["realisation-b2b-1", "realisation-b2b-2", "realisation-b2b-3"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header admin */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <Link href="/admin" className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            Admin
          </Link>
          <span className="text-gray-300">/</span>
          <span className="font-semibold text-gray-900">Réalisations Professionnels</span>
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-60"
        >
          {saving ? (
            <><Loader2 className="w-4 h-4 animate-spin" /> Sauvegarde...</>
          ) : saved ? (
            <><CheckCircle2 className="w-4 h-4" /> Sauvegardé</>
          ) : (
            <><Save className="w-4 h-4" /> Sauvegarder</>
          )}
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-white border-r border-gray-200 p-4 shrink-0">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-2">Paramètres</p>
          <nav className="space-y-1">
            {settingsSections.map((section) => {
              const Icon = section.icon;
              const isActive = section.id === "realisations-pro";
              return (
                <Link
                  key={section.id}
                  href={section.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {section.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8">
          <div className="max-w-3xl">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Réalisations Professionnels</h1>
              <p className="text-gray-500 text-sm">
                Modifiez les textes affichés sur les 3 cartes de la section portfolio de la page Professionnels.
                Les images sont gérées dans <Link href="/admin/parametres/images" className="text-blue-600 underline">Images du site</Link>.
              </p>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
              </div>
            ) : (
              <div className="space-y-6">
                {cards.map((card, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{cardLabels[index]}</h3>
                        <p className="text-xs text-gray-400">Image : {imageKeyLabels[index]} (gérable via Images du site)</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-1.5">
                          <FileText className="w-4 h-4 text-gray-400" />
                          Titre du projet
                        </label>
                        <input
                          type="text"
                          value={card.title}
                          onChange={(e) => updateCard(index, "title", e.target.value)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                          placeholder="Ex : Garde-corps collectif résidence"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-1.5">
                          <User className="w-4 h-4 text-gray-400" />
                          Client / Maître d&apos;ouvrage
                        </label>
                        <input
                          type="text"
                          value={card.client}
                          onChange={(e) => updateCard(index, "client", e.target.value)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                          placeholder="Ex : Promoteur immobilier IDF"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          Localisation
                        </label>
                        <input
                          type="text"
                          value={card.location}
                          onChange={(e) => updateCard(index, "location", e.target.value)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                          placeholder="Ex : Seine-et-Marne (77)"
                        />
                      </div>
                    </div>

                    {/* Preview */}
                    <div className="mt-5 p-4 bg-gray-900 rounded-xl">
                      <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Aperçu carte</p>
                      <div className="inline-block px-3 py-1 bg-cyan-400/20 rounded-full text-cyan-400 text-xs font-bold mb-2">
                        {card.location || "Localisation"}
                      </div>
                      <p className="text-white font-bold">{card.title || "Titre du projet"}</p>
                      <p className="text-gray-400 text-sm">{card.client || "Client"}</p>
                    </div>
                  </div>
                ))}

                <div className="flex justify-end pt-2">
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-60"
                  >
                    {saving ? <><Loader2 className="w-4 h-4 animate-spin" /> Sauvegarde...</> : <><Save className="w-4 h-4" /> Sauvegarder les modifications</>}
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
