"use client";

import * as React from "react";
import Link from "next/link";
import { FileText, ChevronRight, Settings, Plus } from "lucide-react";

const availablePages = [
  {
    slug: "thermolaquage",
    title: "Thermolaquage",
    description: "Page principale du service thermolaquage",
    sections: ["hero", "advantages", "client-demands", "process", "ral-selector", "applications", "faq", "cta"],
  },
  {
    slug: "homepage",
    title: "Page d'accueil",
    description: "Page d'accueil du site",
    sections: ["hero", "services", "thermolaquage", "testimonials", "cta"],
  },
  {
    slug: "particuliers",
    title: "Particuliers",
    description: "Page dédiée aux particuliers",
    sections: ["hero", "services", "guarantees", "faq", "cta"],
  },
  {
    slug: "professionnels",
    title: "Professionnels",
    description: "Page dédiée aux professionnels",
    sections: ["hero", "advantages", "sectors", "realizations", "contact", "cta"],
  },
];

export default function AdminPagesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gestion des Pages</h1>
          <p className="text-gray-500 mt-1">
            Éditez le contenu des différentes pages du site
          </p>
        </div>
      </div>

      {/* Pages Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {availablePages.map((page) => (
          <Link
            key={page.slug}
            href={`/admin/pages/${page.slug}`}
            className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-cyan-500 hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                <FileText className="w-6 h-6 text-cyan-700" />
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all" />
            </div>

            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              {page.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">{page.description}</p>

            <div className="flex flex-wrap gap-2">
              {page.sections.slice(0, 4).map((section) => (
                <span
                  key={section}
                  className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600"
                >
                  {section}
                </span>
              ))}
              {page.sections.length > 4 && (
                <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">
                  +{page.sections.length - 4}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Info Card */}
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center">
            <Settings className="w-5 h-5 text-cyan-700" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Comment ça fonctionne ?
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Chaque page est composée de plusieurs sections éditables. Cliquez sur une page
              pour accéder à l&apos;éditeur de contenu. Les modifications sont enregistrées
              en base de données et appliquées instantanément sur le site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
