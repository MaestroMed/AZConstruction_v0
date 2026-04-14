import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { Calendar, Clock, Tag, ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog Métallerie & Garde-corps | Conseils & Guides ",
  description:
    "Guides pratiques, normes, prix et inspirations pour vos projets de garde-corps, escaliers, portails et thermolaquage sur mesure en Île-de-France.",
  alternates: { canonical: "https://azconstruction.fr/blog" },
  openGraph: {
    title: "Blog AZ Construction — Métallerie sur mesure",
    description: "Conseils d'experts, guides prix, normes et inspirations pour vos projets métallerie en Île-de-France.",
    url: "https://azconstruction.fr/blog",
    siteName: "AZ Construction",
    locale: "fr_FR",
    type: "website",
  },
};

const CATEGORY_LABELS: Record<string, string> = {
  "garde-corps": "Garde-corps",
  "normes": "Normes & Réglementation",
  "guide": "Guides pratiques",
  "local-seo": "Île-de-France",
  "thermolaquage": "Thermolaquage",
  "inspirations": "Inspirations",
  "actualites": "Actualités",
  "escaliers": "Escaliers",
  "prix": "Prix & Devis",
};

async function getPosts(category?: string) {
  try {
    return await prisma.blogPost.findMany({
      where: { published: true, ...(category ? { category } : {}) },
      orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
      select: {
        id: true, slug: true, title: true, excerpt: true, category: true,
        tags: true, featuredImage: true, author: true, publishedAt: true,
        readingTime: true, seoTitle: true,
      },
    });
  } catch {
    return [];
  }
}

async function getCategories() {
  try {
    const cats = await prisma.blogPost.groupBy({
      by: ["category"],
      where: { published: true },
      _count: { category: true },
    });
    return cats;
  } catch {
    return [];
  }
}

interface Props {
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const { category } = await searchParams;
  const [posts, categories] = await Promise.all([getPosts(category), getCategories()]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate py-20 pt-32">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-glow/20 text-cyan-glow rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Blog & Conseils
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Guides & Inspirations{" "}
            <span className="text-cyan-glow">Métallerie</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Conseils d'experts, normes, prix et inspirations pour vos projets de garde-corps,
            escaliers et thermolaquage sur mesure en Île-de-France.
          </p>
        </div>
      </section>

      {/* Category filters */}
      {categories.length > 0 && (
        <div className="sticky top-[72px] z-30 bg-white border-b border-gray-100 shadow-sm">
          <div className="container mx-auto px-6 py-3">
            <div className="flex flex-wrap gap-2">
              <Link
                href="/blog"
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  !category ? "bg-blue-corporate text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Tous ({posts.length})
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.category}
                  href={`/blog?category=${cat.category}`}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    category === cat.category
                      ? "bg-blue-corporate text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {CATEGORY_LABELS[cat.category] || cat.category} ({cat._count.category})
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Posts grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-gray-200 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-500 mb-2">Articles à venir</h2>
              <p className="text-gray-400">
                Nos guides et conseils métallerie seront publiés prochainement.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden"
                >
                  {post.featuredImage && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                      {post.category && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full font-medium">
                          <Tag className="w-3 h-3" />
                          {CATEGORY_LABELS[post.category] || post.category}
                        </span>
                      )}
                      {post.readingTime && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readingTime} min
                        </span>
                      )}
                    </div>
                    <h2 className="text-lg font-bold text-navy-dark mb-2 line-clamp-2 group-hover:text-blue-corporate transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-gray-500 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    )}
                    <div className="flex items-center justify-between mt-auto">
                      {post.publishedAt && (
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      )}
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-medium text-blue-corporate hover:gap-2 transition-all"
                      >
                        Lire <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA devis */}
      <section className="py-16 bg-navy-dark">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Un projet de garde-corps ou de métallerie ?
          </h2>
          <p className="text-white/60 mb-8">
            Devis gratuit sous 48h, fabrication en Île-de-France.
          </p>
          <Link
            href="/devis/formulaire"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-glow text-navy-dark font-semibold rounded-xl hover:bg-cyan-pale transition-colors"
          >
            Demander un devis gratuit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
