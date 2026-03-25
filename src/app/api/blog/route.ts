import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/blog — liste les articles publiés (ou tous si admin=true)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const category = searchParams.get("category");
  const admin = searchParams.get("admin") === "true";
  const limit = searchParams.get("limit") ? parseInt(searchParams.get("limit")!) : undefined;

  try {
    // Article unique par slug
    if (slug) {
      const post = await prisma.blogPost.findUnique({
        where: { slug },
      });
      if (!post || (!admin && !post.published)) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
      }
      return NextResponse.json({ success: true, post });
    }

    // Liste
    const posts = await prisma.blogPost.findMany({
      where: {
        ...(admin ? {} : { published: true }),
        ...(category ? { category } : {}),
      },
      orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
      take: limit,
      select: {
        id: true,
        slug: true,
        title: true,
        excerpt: true,
        category: true,
        tags: true,
        featuredImage: true,
        author: true,
        publishedAt: true,
        published: true,
        seoTitle: true,
        seoDescription: true,
        readingTime: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    const categories = await prisma.blogPost
      .groupBy({ by: ["category"], where: { published: true } })
      .catch(() => []);

    return NextResponse.json({
      success: true,
      posts,
      total: posts.length,
      categories: categories.map((c) => c.category),
    });
  } catch (error) {
    console.error("Blog GET error:", error);
    return NextResponse.json({ success: true, posts: [], total: 0, categories: [] });
  }
}

// POST /api/blog — créer ou mettre à jour un article
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      id, slug, title, excerpt, content, category = "guide",
      tags = [], featuredImage, author, published = false,
      publishedAt, seoTitle, seoDescription, readingTime,
    } = body;

    if (!slug || !title) {
      return NextResponse.json({ error: "slug et title requis" }, { status: 400 });
    }

    const data = {
      slug,
      title,
      excerpt: excerpt || null,
      content: content || "",
      category,
      tags,
      featuredImage: featuredImage || null,
      author: author || "L'équipe AZ Construction",
      published,
      publishedAt: published && !publishedAt ? new Date() : publishedAt ? new Date(publishedAt) : null,
      seoTitle: seoTitle || null,
      seoDescription: seoDescription || null,
      readingTime: readingTime || null,
    };

    const post = id
      ? await prisma.blogPost.update({ where: { id }, data })
      : await prisma.blogPost.upsert({
          where: { slug },
          update: data,
          create: data,
        });

    return NextResponse.json({ success: true, post });
  } catch (error) {
    console.error("Blog POST error:", error);
    return NextResponse.json({ error: "Erreur lors de la sauvegarde" }, { status: 500 });
  }
}

// DELETE /api/blog?id=xxx
export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "id requis" }, { status: 400 });

  try {
    await prisma.blogPost.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Blog DELETE error:", error);
    return NextResponse.json({ error: "Erreur lors de la suppression" }, { status: 500 });
  }
}
