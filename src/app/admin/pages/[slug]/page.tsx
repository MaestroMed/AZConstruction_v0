"use client";

import * as React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Save,
  Loader2,
  ChevronDown,
  ChevronUp,
  Trash2,
  Plus,
  GripVertical,
  Image as ImageIcon,
  Type,
  List,
  Hash,
  ToggleLeft,
} from "lucide-react";
import { toast } from "sonner";

// Configuration des sections éditables par page
const pageConfigs: Record<string, PageConfig> = {
  thermolaquage: {
    title: "Thermolaquage",
    sections: [
      {
        key: "hero",
        label: "Section Hero",
        fields: [
          { name: "title", label: "Titre principal", type: "text" },
          { name: "subtitle", label: "Sous-titre", type: "textarea" },
          { name: "badge", label: "Badge", type: "text" },
        ],
      },
      {
        key: "advantages",
        label: "Avantages (Bento Grid)",
        fields: [
          { name: "sectionTitle", label: "Titre de section", type: "text" },
          { name: "sectionSubtitle", label: "Sous-titre", type: "text" },
        ],
        listField: {
          name: "items",
          label: "Avantages",
          itemFields: [
            { name: "title", label: "Titre", type: "text" },
            { name: "description", label: "Description", type: "textarea" },
            { name: "icon", label: "Icône (nom)", type: "text" },
            { name: "size", label: "Taille", type: "select", options: ["default", "large", "wide", "tall"] },
          ],
        },
      },
      {
        key: "client-demands",
        label: "Ce que demandent nos clients",
        fields: [
          { name: "sectionTitle", label: "Titre de section", type: "text" },
          { name: "sectionSubtitle", label: "Sous-titre", type: "text" },
        ],
        listField: {
          name: "items",
          label: "Items mosaïque",
          itemFields: [
            { name: "title", label: "Titre", type: "text" },
            { name: "description", label: "Description", type: "textarea" },
            { name: "imageUrl", label: "URL Image", type: "text" },
            { name: "size", label: "Taille", type: "select", options: ["default", "large", "wide", "tall"] },
          ],
        },
      },
      {
        key: "process",
        label: "Processus",
        fields: [
          { name: "sectionTitle", label: "Titre de section", type: "text" },
          { name: "processImageUrl", label: "Image du processus (URL)", type: "text" },
        ],
        listField: {
          name: "steps",
          label: "Étapes",
          itemFields: [
            { name: "title", label: "Titre", type: "text" },
            { name: "description", label: "Description", type: "textarea" },
          ],
        },
      },
      {
        key: "faq",
        label: "FAQ",
        fields: [
          { name: "sectionTitle", label: "Titre de section", type: "text" },
        ],
        listField: {
          name: "items",
          label: "Questions",
          itemFields: [
            { name: "question", label: "Question", type: "text" },
            { name: "answer", label: "Réponse", type: "textarea" },
          ],
        },
      },
    ],
  },
  homepage: {
    title: "Page d'accueil",
    sections: [
      {
        key: "hero",
        label: "Section Hero",
        fields: [
          { name: "title", label: "Titre principal", type: "text" },
          { name: "subtitle", label: "Sous-titre", type: "textarea" },
          { name: "ctaText", label: "Texte du bouton", type: "text" },
          { name: "ctaLink", label: "Lien du bouton", type: "text" },
        ],
      },
      {
        key: "stats",
        label: "Statistiques",
        listField: {
          name: "items",
          label: "Stats",
          itemFields: [
            { name: "value", label: "Valeur", type: "number" },
            { name: "suffix", label: "Suffixe", type: "text" },
            { name: "label", label: "Label", type: "text" },
          ],
        },
      },
    ],
  },
  particuliers: {
    title: "Particuliers",
    sections: [
      {
        key: "hero",
        label: "Section Hero",
        fields: [
          { name: "title", label: "Titre principal", type: "text" },
          { name: "subtitle", label: "Sous-titre", type: "textarea" },
        ],
      },
    ],
  },
  professionnels: {
    title: "Professionnels",
    sections: [
      {
        key: "hero",
        label: "Section Hero",
        fields: [
          { name: "title", label: "Titre principal", type: "text" },
          { name: "subtitle", label: "Sous-titre", type: "textarea" },
        ],
      },
      {
        key: "stats",
        label: "Statistiques",
        listField: {
          name: "items",
          label: "Stats",
          itemFields: [
            { name: "value", label: "Valeur", type: "number" },
            { name: "suffix", label: "Suffixe", type: "text" },
            { name: "label", label: "Label", type: "text" },
          ],
        },
      },
    ],
  },
};

interface FieldConfig {
  name: string;
  label: string;
  type: "text" | "textarea" | "number" | "select" | "boolean" | "image";
  options?: string[];
}

interface ListFieldConfig {
  name: string;
  label: string;
  itemFields: FieldConfig[];
}

interface SectionConfig {
  key: string;
  label: string;
  fields?: FieldConfig[];
  listField?: ListFieldConfig;
}

interface PageConfig {
  title: string;
  sections: SectionConfig[];
}

interface SectionData {
  id?: string;
  pageSlug: string;
  sectionKey: string;
  content: Record<string, unknown>;
  ordre: number;
  active: boolean;
}

export default function EditPageSections() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const pageConfig = pageConfigs[slug];

  const [sectionsData, setSectionsData] = React.useState<Record<string, SectionData>>({});
  const [expandedSections, setExpandedSections] = React.useState<Set<string>>(new Set(["hero"]));
  const [loading, setLoading] = React.useState(true);
  const [saving, setSaving] = React.useState(false);

  // Charger les données existantes
  React.useEffect(() => {
    if (!slug) return;

    const loadSections = async () => {
      try {
        const response = await fetch(`/api/sections?page=${slug}`);
        if (response.ok) {
          const data = await response.json();
          const sectionsMap: Record<string, SectionData> = {};
          
          data.sections?.forEach((section: SectionData) => {
            sectionsMap[section.sectionKey] = section;
          });

          setSectionsData(sectionsMap);
        }
      } catch (error) {
        console.error("Erreur chargement sections:", error);
      } finally {
        setLoading(false);
      }
    };

    loadSections();
  }, [slug]);

  if (!pageConfig) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Page non trouvée</h1>
        <Link href="/admin/pages" className="text-cyan-600 hover:underline">
          ← Retour aux pages
        </Link>
      </div>
    );
  }

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const getSectionContent = (sectionKey: string): Record<string, unknown> => {
    return sectionsData[sectionKey]?.content || {};
  };

  const updateSectionContent = (sectionKey: string, fieldName: string, value: unknown) => {
    setSectionsData((prev) => ({
      ...prev,
      [sectionKey]: {
        ...prev[sectionKey],
        pageSlug: slug,
        sectionKey,
        content: {
          ...(prev[sectionKey]?.content || {}),
          [fieldName]: value,
        },
        ordre: prev[sectionKey]?.ordre || 0,
        active: prev[sectionKey]?.active ?? true,
      },
    }));
  };

  const handleSave = async () => {
    setSaving(true);

    try {
      const promises = Object.entries(sectionsData).map(([, sectionData]) =>
        fetch("/api/sections", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(sectionData),
        })
      );

      await Promise.all(promises);
      toast.success("Modifications enregistrées !");
    } catch (error) {
      console.error("Erreur sauvegarde:", error);
      toast.error("Erreur lors de la sauvegarde");
    } finally {
      setSaving(false);
    }
  };

  const renderField = (sectionKey: string, field: FieldConfig, value: unknown) => {
    const fieldId = `${sectionKey}-${field.name}`;

    switch (field.type) {
      case "textarea":
        return (
          <textarea
            id={fieldId}
            rows={3}
            value={(value as string) || ""}
            onChange={(e) => updateSectionContent(sectionKey, field.name, e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
            placeholder={`Entrez ${field.label.toLowerCase()}`}
          />
        );

      case "number":
        return (
          <input
            id={fieldId}
            type="number"
            value={(value as number) || ""}
            onChange={(e) => updateSectionContent(sectionKey, field.name, parseInt(e.target.value) || 0)}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          />
        );

      case "select":
        return (
          <select
            id={fieldId}
            value={(value as string) || field.options?.[0] || ""}
            onChange={(e) => updateSectionContent(sectionKey, field.name, e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white"
          >
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      case "boolean":
        return (
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={(value as boolean) || false}
              onChange={(e) => updateSectionContent(sectionKey, field.name, e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
          </label>
        );

      default:
        return (
          <input
            id={fieldId}
            type="text"
            value={(value as string) || ""}
            onChange={(e) => updateSectionContent(sectionKey, field.name, e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            placeholder={`Entrez ${field.label.toLowerCase()}`}
          />
        );
    }
  };

  const renderListField = (sectionKey: string, listConfig: ListFieldConfig) => {
    const content = getSectionContent(sectionKey);
    const items = (content[listConfig.name] as Record<string, unknown>[]) || [];

    const addItem = () => {
      const newItem: Record<string, unknown> = {};
      listConfig.itemFields.forEach((field) => {
        newItem[field.name] = field.type === "number" ? 0 : "";
      });

      updateSectionContent(sectionKey, listConfig.name, [...items, newItem]);
    };

    const removeItem = (index: number) => {
      updateSectionContent(
        sectionKey,
        listConfig.name,
        items.filter((_, i) => i !== index)
      );
    };

    const updateItem = (index: number, fieldName: string, value: unknown) => {
      const updated = [...items];
      updated[index] = { ...updated[index], [fieldName]: value };
      updateSectionContent(sectionKey, listConfig.name, updated);
    };

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-gray-700">{listConfig.label}</h4>
          <button
            onClick={addItem}
            className="flex items-center gap-1 px-3 py-1.5 text-sm bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Ajouter
          </button>
        </div>

        {items.length === 0 ? (
          <p className="text-sm text-gray-500 italic">Aucun élément. Cliquez sur &quot;Ajouter&quot; pour commencer.</p>
        ) : (
          <div className="space-y-3">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <GripVertical className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-600">
                      #{index + 1}
                    </span>
                  </div>
                  <button
                    onClick={() => removeItem(index)}
                    className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {listConfig.itemFields.map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        {field.label}
                      </label>
                      {field.type === "textarea" ? (
                        <textarea
                          rows={2}
                          value={(item[field.name] as string) || ""}
                          onChange={(e) => updateItem(index, field.name, e.target.value)}
                          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                        />
                      ) : field.type === "select" ? (
                        <select
                          value={(item[field.name] as string) || field.options?.[0] || ""}
                          onChange={(e) => updateItem(index, field.name, e.target.value)}
                          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white"
                        >
                          {field.options?.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type === "number" ? "number" : "text"}
                          value={(item[field.name] as string | number) || ""}
                          onChange={(e) =>
                            updateItem(
                              index,
                              field.name,
                              field.type === "number" ? parseInt(e.target.value) || 0 : e.target.value
                            )
                          }
                          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-cyan-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/pages"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Éditer : {pageConfig.title}
            </h1>
            <p className="text-gray-500 mt-1">
              {pageConfig.sections.length} sections éditables
            </p>
          </div>
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 px-6 py-2.5 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 disabled:opacity-50 transition-colors"
        >
          {saving ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          Enregistrer
        </button>
      </div>

      {/* Sections */}
      <div className="space-y-4">
        {pageConfig.sections.map((section) => {
          const isExpanded = expandedSections.has(section.key);
          const content = getSectionContent(section.key);

          return (
            <div
              key={section.key}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.key)}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                    <Type className="w-5 h-5 text-cyan-700" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">{section.label}</h3>
                    <p className="text-sm text-gray-500">
                      Clé: {section.key}
                    </p>
                  </div>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>

              {/* Section Content */}
              {isExpanded && (
                <div className="border-t border-gray-100 p-6 space-y-6">
                  {/* Regular fields */}
                  {section.fields && section.fields.length > 0 && (
                    <div className="grid md:grid-cols-2 gap-6">
                      {section.fields.map((field) => (
                        <div key={field.name} className={field.type === "textarea" ? "md:col-span-2" : ""}>
                          <label
                            htmlFor={`${section.key}-${field.name}`}
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            {field.label}
                          </label>
                          {renderField(section.key, field, content[field.name])}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* List field */}
                  {section.listField && (
                    <div className="border-t border-gray-100 pt-6">
                      {renderListField(section.key, section.listField)}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
