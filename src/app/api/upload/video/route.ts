import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";

// Allow larger body for video uploads (up to 50MB on Vercel Pro)
export const maxDuration = 60; // seconds

/**
 * Server-side video upload to Vercel Blob.
 * Uses put() directly instead of client upload to avoid CORS issues.
 */
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "Aucun fichier fourni" }, { status: 400 });
    }

    // Validate file type
    const allowedTypes = ["video/mp4", "video/webm", "video/quicktime"];
    const allowedExts = /\.(mp4|webm|mov)$/i;
    if (!allowedTypes.includes(file.type) && !allowedExts.test(file.name)) {
      return NextResponse.json(
        { error: "Format non autorisé. Acceptés : MP4, WebM, MOV" },
        { status: 400 }
      );
    }

    // 50MB limit (Vercel Pro serverless body limit)
    if (file.size > 50 * 1024 * 1024) {
      return NextResponse.json(
        { error: `Fichier trop volumineux (${(file.size / 1024 / 1024).toFixed(1)} Mo). Max : 50 Mo.` },
        { status: 400 }
      );
    }

    const ext = file.name.split(".").pop()?.toLowerCase() || "mp4";
    const filename = `hero-videos/${Date.now()}.${ext}`;

    const blob = await put(filename, file, {
      access: "public",
      contentType: file.type,
    });

    return NextResponse.json({ url: blob.url, size: file.size });
  } catch (error) {
    console.error("[video-upload] error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erreur upload vidéo" },
      { status: 500 }
    );
  }
}
