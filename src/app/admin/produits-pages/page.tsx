"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutGrid,
  Plus,
  Edit,
  Trash,
  Eye,
  ArrowUpDown,
  Image as ImageIcon,
  Check,
  X,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { toast } from "sonner";
import { productFamilies as defaultFamilies } from "@/lib/data/product-families";

interface ProductFamily {
  id: string;
  slug: string;
  nom: string;
  description?: string;
  imageUrl?: string;
  ordre: number;
  active: boolean;
  tagline?: string;
  startingPrice?: string;
  unit?: string;
  heroImages: { id: string; imageUrl: string; ordre: number }[];
}

export default function AdminProduitsPages() {
  const [families, setFamilies] = React.useState<ProductFamily[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchFamilies();
  }, []);

  const fetchFamilies = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/product-families");
      if (response.ok) {
        const data = await response.json();
        if (data.families && data.families.length > 0) {
          setFamilies(data.families);
        } else {
          // Initialize with default families if database is empty
          setFamilies(
            defaultFamilies.map((f, i) => ({
              id: f.id,
              slug: f.slug,
              nom: f.name,
              description: f.description,
              imageUrl: f.heroImages[0],
              ordre: i,
              active: true,
              tagline: f.tagline,
              startingPrice: f.startingPrice,
              unit: f.unit,
              heroImages: [],
            }))
          );
        }
      }
    } catch (error) {
      console.error("Failed to fetch product families:", error);
      // Fallback to default families
      setFamilies(
        defaultFamilies.map((f, i) => ({
          id: f.id,
          slug: f.slug,
          nom: f.name,
          description: f.description,
          imageUrl: f.heroImages[0],
          ordre: i,
          active: true,
          tagline: f.tagline,
          startingPrice: f.startingPrice,
          unit: f.unit,
          heroImages: [],
        }))
      );
    } finally {
      setLoading(false);
    }
  };

  const toggleActive = async (family: ProductFamily) => {
    try {
      const response = await fetch("/api/product-families", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...family,
          active: !family.active,
        }),
      });

      if (response.ok) {
        toast.success(`Page ${family.active ? "désactivée" : "activée"} avec succès`);
        fetchFamilies();
      } else {
        toast.error("Erreur lors de la mise à jour");
      }
    } catch (error) {
      console.error("Error toggling family:", error);
      toast.error("Erreur réseau");
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto py-10 px-6 text-center text-gray-500">
        Chargement des familles de produits...
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-10 px-6"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <LayoutGrid className="w-7 h-7 text-blue-corporate" />
            Pages Produits
          </h1>
          <p className="text-gray-500 mt-1">
            Gérez les landing pages de chaque famille de produits
          </p>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
            !
          </div>
          <div>
            <p className="text-amber-800 font-medium">Pages produits statiques</p>
            <p className="text-amber-700 text-sm mt-1">
              Les pages produits sont actuellement générées à partir de données statiques.
              Pour personnaliser le contenu (images, textes, variantes), modifiez le fichier{" "}
              <code className="bg-amber-100 px-1 rounded">src/lib/data/product-families.ts</code>.
              Une interface CMS complète sera disponible prochainement.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {families.map((family, index) => (
          <motion.div
            key={family.id || family.slug}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className={`h-full ${!family.active ? "opacity-60" : ""}`}>
              <CardContent className="p-0">
                {/* Image Preview */}
                <div className="relative h-48 bg-gray-100 rounded-t-xl overflow-hidden">
                  {family.imageUrl || family.heroImages?.[0]?.imageUrl ? (
                    <Image
                      src={family.heroImages?.[0]?.imageUrl || family.imageUrl || ""}
                      alt={family.nom}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-gray-300" />
                    </div>
                  )}
                  
                  {/* Status Badge */}
                  <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${
                    family.active
                      ? "bg-green-500 text-white"
                      : "bg-gray-500 text-white"
                  }`}>
                    {family.active ? "Active" : "Inactive"}
                  </div>

                  {/* Hero Images Count */}
                  {family.heroImages?.length > 0 && (
                    <div className="absolute bottom-3 right-3 bg-black/50 text-white px-2 py-1 rounded text-xs">
                      {family.heroImages.length} image{family.heroImages.length > 1 ? "s" : ""}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {family.nom}
                    </h3>
                    {family.startingPrice && (
                      <span className="text-sm text-gray-500">
                        À partir de {family.startingPrice}€/{family.unit || "u"}
                      </span>
                    )}
                  </div>

                  {family.tagline && (
                    <p className="text-cyan-600 text-sm font-medium mb-2">
                      {family.tagline}
                    </p>
                  )}

                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                    {family.description}
                  </p>

                  <div className="text-xs text-gray-400 mb-4">
                    URL: /produits/{family.slug}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link href={`/produits/${family.slug}`} target="_blank" className="flex-1">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        icon={<Eye className="w-4 h-4" />}
                      >
                        Voir
                      </Button>
                    </Link>
                    <Link href={`/admin/produits-pages/${family.slug}`} className="flex-1">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="w-full"
                        icon={<Edit className="w-4 h-4" />}
                      >
                        Modifier
                      </Button>
                    </Link>
                    <Button
                      variant={family.active ? "outline" : "default"}
                      size="sm"
                      onClick={() => toggleActive(family)}
                      icon={family.active ? <X className="w-4 h-4" /> : <Check className="w-4 h-4" />}
                    >
                      {family.active ? "Désact." : "Activer"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quick Links */}
      <div className="mt-12 p-6 bg-gray-50 rounded-xl">
        <h3 className="font-semibold text-gray-900 mb-4">Liens rapides</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/produits" target="_blank">
            <Button variant="outline" size="sm" icon={<ExternalLink className="w-4 h-4" />}>
              Page Catalogue
            </Button>
          </Link>
          <Link href="/admin/parametres/images">
            <Button variant="outline" size="sm" icon={<ImageIcon className="w-4 h-4" />}>
              Bibliothèque Médias
            </Button>
          </Link>
          <Link href="/admin/produits">
            <Button variant="outline" size="sm" icon={<LayoutGrid className="w-4 h-4" />}>
              Gestion Produits (base)
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

