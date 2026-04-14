import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { blogArticles } from "@/data/blog-articles";

export async function POST() {
  try {
    const results = [];

    for (const article of blogArticles) {
      // Check if article already exists
      const existing = await prisma.blogPost.findUnique({
        where: { slug: article.slug },
      });

      if (existing) {
        results.push({ slug: article.slug, status: "exists" });
        continue;
      }

      const post = await prisma.blogPost.create({
        data: {
          slug: article.slug,
          title: article.title,
          excerpt: article.excerpt,
          content: article.content,
          category: article.category,
          tags: article.tags,
          author: article.author,
          published: article.published,
          readingTime: article.readingTime,
          seoTitle: article.seoTitle,
          seoDescription: article.seoDescription,
          publishedAt: new Date(),
        },
      });

      results.push({ slug: post.slug, status: "created", id: post.id });
    }

    return NextResponse.json({
      success: true,
      message: `${results.filter(r => r.status === "created").length} articles created, ${results.filter(r => r.status === "exists").length} already existed`,
      results,
    });
  } catch (error) {
    console.error("Blog seed error:", error);
    return NextResponse.json(
      { error: "Failed to seed blog articles" },
      { status: 500 }
    );
  }
}
