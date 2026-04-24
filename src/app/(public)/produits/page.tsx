"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Settings,
  Shield,
  Award,
  Truck,
  Palette,
  Ruler,
  Clock,
  CheckCircle2,
  Star,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

// ── Type DB ──────────────────────────────────────────────────────
interface DbAsset {
  id: string;
  type: "IMAGE" | "VIDEO";
  role: "HERO" | "GALLERY" | "CARD";
  url: string;
  alt?: string | null;
  ordre: number;
}

interface DbProductVariant {
  id: string;
  slug: string;
  name: string;
  ordre: number;
  assets?: DbAsset[];
}

interface DBFamilyRaw {
  id: string;
  nom: string;
  slug: string;
  description?: string | null;
  imageUrl?: string | null;
  tagline?: string | null;
  features: string[];
  // Legacy JSON (gardé en DB mais non consommé ici) :
  variants?: Array<{ id: string; name: string }> | null;
  // Nouvelle source de vérité :
  productVariants?: DbProductVariant[];
  assets?: DbAsset[];
  active: boolean;
  ordre: number;
}

interface DBFamily {
  id: string;
  nom: string;
  slug: string;
  description?: string | null;
  imageUrl?: string | null;
  tagline?: string | null;
  features: string[];
  variants?: Array<{ id: string; name: string }> | null;
  active: boolean;
  ordre: number;
}

const guarantees = [
  {
    icon: Shield,
    title: "Garantie 10 ans",
    description: "Tous nos produits sont garantis 10 ans contre les défauts de fabrication.",
  },
  {
    icon: Award,
    title: "Fabrication française",
    description: "100% de nos ouvrages sont fabriqués dans nos ateliers en Île-de-France.",
  },
  {
    icon: Truck,
    title: "Livraison incluse",
    description: "Livraison gratuite en Île-de-France, tarifs préférentiels sur le reste de la France.",
  },
  {
    icon: Palette,
    title: "200+ couleurs RAL",
    description: "Personnalisez votre ouvrage parmi plus de 200 teintes RAL thermolaquées.",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Consultez nos produits",
    description: "Découvrez notre gamme complète et trouvez le produit adapté à votre projet.",
    icon: Settings,
  },
  {
    step: 2,
    title: "Demandez un devis",
    description: "Contactez-nous pour un devis gratuit et personnalisé sous 48h.",
    icon: Clock,
  },
  {
    step: 3,
    title: "Fabrication sur mesure",
    description: "Votre ouvrage est fabriqué dans nos ateliers selon vos spécifications exactes.",
    icon: Ruler,
  },
  {
    step: 4,
    title: "Livraison & Pose",
    description: "Livraison soignée et pose professionnelle par notre équipe qualifiée.",
    icon: Truck,
  },
];

const testimonials = [
  {
    name: "Marie L.",
    location: "Pontoise (95)",
    text: "Un garde-corps magnifique, exactement comme je l'avais imaginé. L'équipe a été à l'écoute du début à la fin.",
    rating: 5,
    product: "Garde-corps verre",
  },
  {
    name: "Philippe D.",
    location: "Paris (75)",
    text: "La qualité de l'escalier hélicoïdal est exceptionnelle. Un vrai travail d'artisan !",
    rating: 5,
    product: "Escalier hélicoïdal",
  },
  {
    name: "Architecte SCI Rénovation",
    location: "Lyon (69)",
    text: "Excellente collaboration pour nos fenêtres en profilés Jansen. Finition irréprochable.",
    rating: 5,
    product: "Fenêtres Jansen",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ProduitsPage() {
  const [families, setFamilies] = React.useState<DBFamily[]>([]);
  const [loadingFamilies, setLoadingFamilies] = React.useState(true);
  const [vedettes, setVedettes] = React.useState<{ id: string; titre: string; description: string; imageUrl?: string; href: string; badge?: string }[]>([]);

  React.useEffect(() => {
    // Charger les familles depuis la DB (nouvelle source de vérité)
    // - active=true : uniquement les familles publiquement visibles
    // - withAssets=true : inclut family.assets (pour CARD image)
    // - withVariants=true : inclut productVariants (pour "Modèles populaires")
    fetch("/api/families?active=true&withAssets=true&withVariants=true")
      .then((r) => r.json())
      .then((data) => {
        if (data.success && Array.isArray(data.families) && data.families.length) {
          const mapped = (data.families as DBFamilyRaw[]).map((f): DBFamily => {
            // imageUrl pour la card : asset role=CARD type=IMAGE, sinon fallback legacy imageUrl
            const cardAsset = Array.isArray(f.assets)
              ? f.assets
                  .filter((a) => a.role === "CARD" && a.type === "IMAGE")
                  .sort((a, b) => a.ordre - b.ordre)[0]
              : undefined;
            const resolvedImageUrl = cardAsset?.url ?? f.imageUrl ?? null;

            // Liste "Modèles populaires" : depuis productVariants (sinon fallback legacy variants JSON)
            const variantNames = Array.isArray(f.productVariants) && f.productVariants.length > 0
              ? f.productVariants.map((pv) => ({ id: pv.slug, name: pv.name }))
              : f.variants ?? null;

            return {
              id: f.id,
              nom: f.nom,
              slug: f.slug,
              description: f.description ?? null,
              imageUrl: resolvedImageUrl,
              tagline: f.tagline ?? null,
              features: f.features ?? [],
              variants: variantNames,
              active: f.active,
              ordre: f.ordre,
            };
          });
          setFamilies(mapped);
        }
      })
      .catch(() => {})
      .finally(() => setLoadingFamilies(false));

    // Charger les produits vedettes
    fetch("/api/produits-vedettes")
      .then((r) => r.json())
      .then((data) => {
        if (data.success && data.items?.length) setVedettes(data.items);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20h40M20 0v40' fill='none' stroke='%2300d4ff' stroke-width='0.5'/%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-cyan-glow/20 text-cyan-glow rounded-full text-sm font-medium mb-6">
              {families.length > 0 ? `${families.length} familles de produits` : "Nos familles de produits"} • 1800m² d&apos;atelier
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nos Produits{" "}
              <span className="font-serif italic text-cyan-pale">sur mesure</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Découvrez notre gamme complète d'ouvrages métalliques sur mesure.
              Fabrication française, qualité premium, devis gratuit sous 48h.
            </p>
            {families.length > 0 && (
              <div className="flex flex-wrap justify-center gap-4">
                {families.map((family) => (
                  <a
                    key={family.id}
                    href={`#${family.slug}`}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 hover:bg-white/20 hover:text-white transition-all text-sm"
                  >
                    {family.nom}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Guarantees Bar */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <guarantee.icon className="w-6 h-6 text-cyan-glow flex-shrink-0" />
                <span className="text-sm text-gray-700 font-medium">{guarantee.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Families */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {loadingFamilies ? (
            /* Skeleton loading */
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-gray-100 animate-pulse">
                  <div className="h-48 bg-gray-200" />
                  <div className="p-6 space-y-3">
                    <div className="h-5 bg-gray-200 rounded w-2/3" />
                    <div className="h-4 bg-gray-100 rounded w-full" />
                    <div className="h-4 bg-gray-100 rounded w-5/6" />
                    <div className="h-10 bg-gray-200 rounded-xl mt-4" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {families.map((family) => {
                // Extraire les noms de variants pour la liste "Modèles populaires"
                const variantNames: string[] = Array.isArray(family.variants)
                  ? (family.variants as Array<{ name?: string }>).map((v) => v.name ?? "").filter(Boolean).slice(0, 4)
                  : [];

                return (
                  <motion.div key={family.id} id={family.slug} variants={cardVariants}>
                    <Card variant="elevated" hover className="h-full group overflow-hidden">
                      {/* Image area */}
                      <div className="relative h-48 bg-gradient-to-br from-blue-corporate/10 to-navy-dark/20 overflow-hidden">
                        {family.imageUrl ? (
                          <Image
                            src={family.imageUrl}
                            alt={family.nom}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-blue-corporate/40 group-hover:scale-110 transition-transform duration-300">
                            <Layers className="w-12 h-12" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>

                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h2 className="text-xl font-bold text-navy-dark">{family.nom}</h2>
                          <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex-shrink-0 ml-2">
                            Décennale
                          </span>
                        </div>

                        {family.description && (
                          <p className="text-gray-500 mb-4 leading-relaxed text-sm">{family.description}</p>
                        )}

                        {/* Features */}
                        {family.features?.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {family.features.slice(0, 3).map((feature, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center gap-1 px-2 py-1 bg-cyan-glow/10 text-cyan-600 rounded-full text-xs font-medium"
                              >
                                <CheckCircle2 className="w-3 h-3" />
                                {feature}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Variants / Modèles populaires */}
                        {variantNames.length > 0 && (
                          <div className="mb-4 pb-4 border-b border-gray-100">
                            <p className="text-xs text-gray-400 mb-2">Modèles populaires :</p>
                            <ul className="space-y-1">
                              {variantNames.map((name, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow flex-shrink-0" />
                                  {name}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <Link href={`/produits/${family.slug}`}>
                          <Button
                            className="w-full group-hover:bg-cyan-glow group-hover:text-navy-dark transition-colors"
                            icon={<ArrowRight className="w-4 h-4" />}
                          >
                            Découvrir les {family.nom.toLowerCase()}
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              De la conception à l'installation, nous vous accompagnons à chaque étape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-cyan-glow to-transparent" />
                )}
                <div className="relative text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-corporate to-navy-dark text-white flex items-center justify-center mx-auto mb-4 relative z-10">
                    <step.icon className="w-7 h-7" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-glow text-navy-dark text-sm font-bold rounded-full flex items-center justify-center">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-semibold text-navy-dark mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Plus de 1 500 projets réalisés depuis 2018.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="elevated" className="h-full">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-navy-dark">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">{testimonial.location}</p>
                      </div>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                        {testimonial.product}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Detail */}
      <section className="py-20 bg-navy-dark">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nos engagements qualité
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Des garanties concrètes pour votre tranquillité d'esprit.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-cyan-glow/20 flex items-center justify-center mx-auto mb-4">
                  <guarantee.icon className="w-7 h-7 text-cyan-glow" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{guarantee.title}</h3>
                <p className="text-sm text-white/60">{guarantee.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Produits vedettes */}
      {vedettes.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-cyan-700 font-semibold text-sm tracking-wider uppercase mb-4">
                À découvrir
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
                Produits en vedette
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Nos réalisations et produits phares sélectionnés par nos équipes.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vedettes.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={item.href || "/produits"}>
                    <div className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer">
                      {item.imageUrl ? (
                        <Image
                          src={item.imageUrl}
                          alt={item.titre}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-navy-dark via-blue-corporate to-cyan-800" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/30 to-transparent" />
                      {item.badge && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-cyan-glow/90 text-navy-dark text-xs font-bold rounded-full">
                            {item.badge}
                          </span>
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-white font-bold text-lg mb-1">{item.titre}</h3>
                        {item.description && (
                          <p className="text-white/60 text-sm line-clamp-2">{item.description}</p>
                        )}
                        <span className="inline-flex items-center gap-1 text-cyan-glow text-xs font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          Découvrir <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-navy-dark text-white hover:bg-navy-medium"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Demander un devis
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
