import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { Calendar, Clock, Tag, ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

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

async function getPost(slug: string) {
  try {
    return await prisma.blogPost.findUnique({ where: { slug, published: true } });
  } catch {
    return null;
  }
}

async function getRelatedPosts(category: string, excludeSlug: string) {
  try {
    return await prisma.blogPost.findMany({
      where: { published: true, category, slug: { not: excludeSlug } },
      take: 3,
      orderBy: { publishedAt: "desc" },
      select: { slug: true, title: true, excerpt: true, featuredImage: true, readingTime: true, publishedAt: true },
    });
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Article non trouvé" };

  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt || post.title;
  const canonicalUrl = `https://azconstruction.fr/blog/${post.slug}`;

  return {
    title: `${title} | Blog AZ Construction`,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "article",
      publishedTime: post.publishedAt?.toISOString(),
      modifiedTime: post.updatedAt.toISOString(),
      authors: [post.author],
      siteName: "AZ Construction",
      images: post.featuredImage ? [{ url: post.featuredImage, width: 1200, height: 630, alt: post.title }] : [],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(post.category, slug);

  // Schema.org Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt || post.title,
    "image": post.featuredImage || "",
    "author": { "@type": "Organization", "name": post.author, "url": "https://azconstruction.fr" },
    "publisher": {
      "@type": "Organization",
      "name": "AZ Construction",
      "url": "https://azconstruction.fr",
      "logo": { "@type": "ImageObject", "url": "https://azconstruction.fr/icons/icon.svg" }
    },
    "datePublished": post.publishedAt?.toISOString(),
    "dateModified": post.updatedAt.toISOString(),
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://azconstruction.fr/blog/${post.slug}` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://azconstruction.fr" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://azconstruction.fr/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://azconstruction.fr/blog/${post.slug}` },
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-100 pt-24 pb-4">
          <div className="container mx-auto px-6">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-blue-corporate">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/blog" className="hover:text-blue-corporate">Blog</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-gray-700 font-medium truncate max-w-xs">{post.title}</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
              {post.category && (
                <Link
                  href={`/blog?category=${post.category}`}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-medium hover:bg-blue-100 transition-colors"
                >
                  <Tag className="w-3 h-3" />
                  {CATEGORY_LABELS[post.category] || post.category}
                </Link>
              )}
              {post.readingTime && (
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readingTime} min de lecture
                </span>
              )}
              {post.publishedAt && (
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.publishedAt).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-xl text-gray-600 mb-8 leading-relaxed border-l-4 border-cyan-glow pl-5">
                {post.excerpt}
              </p>
            )}

            {/* Featured image */}
            {post.featuredImage && (
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-10">
                <Image src={post.featuredImage} alt={post.title} fill className="object-cover" priority />
              </div>
            )}

            {/* Content */}
            <div
              className="prose prose-lg max-w-none prose-headings:text-navy-dark prose-headings:font-bold prose-a:text-blue-corporate prose-a:no-underline hover:prose-a:underline prose-strong:text-navy-dark"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Author */}
            <div className="mt-8 p-6 bg-gray-50 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-corporate flex items-center justify-center text-white font-bold text-lg">
                AZ
              </div>
              <div>
                <p className="font-semibold text-navy-dark">{post.author}</p>
                <p className="text-sm text-gray-500">Expert en métallerie sur mesure en Île-de-France</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex gap-4">
              <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-corporate transition-colors">
                <ArrowLeft className="w-4 h-4" /> Retour au blog
              </Link>
            </div>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div className="max-w-3xl mx-auto mt-16 pt-10 border-t border-gray-100">
              <h2 className="text-2xl font-bold text-navy-dark mb-8">Articles similaires</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {related.map((rel) => (
                  <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group">
                    {rel.featuredImage && (
                      <div className="relative h-36 rounded-xl overflow-hidden mb-3">
                        <Image src={rel.featuredImage} alt={rel.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                    )}
                    <h3 className="font-semibold text-navy-dark group-hover:text-blue-corporate transition-colors line-clamp-2 text-sm">
                      {rel.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="bg-navy-dark py-12 mt-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Prêt pour votre projet ?
            </h2>
            <p className="text-white/60 mb-6">Devis gratuit sous 48h — Fabrication en Île-de-France</p>
            <Link
              href="/devis/formulaire"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-glow text-navy-dark font-semibold rounded-xl hover:bg-cyan-pale transition-colors"
            >
              Demander un devis <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
