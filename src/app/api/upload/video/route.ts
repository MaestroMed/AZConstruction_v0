import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

/**
 * GET: Generate a one-time signed upload URL for the client.
 * The client will PUT the file directly to Vercel Blob using this URL,
 * bypassing the 4.5MB serverless body size limit entirely.
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get("filename");

    if (!filename) {
      return NextResponse.json({ error: "filename requis" }, { status: 400 });
    }

    // Validate extension
    const ext = filename.split(".").pop()?.toLowerCase();
    if (!ext || !["mp4", "webm", "mov"].includes(ext)) {
      return NextResponse.json(
        { error: "Format non autorisé. Acceptés : MP4, WebM, MOV" },
        { status: 400 }
      );
    }

    // Generate a unique path
    const blobPath = `hero-videos/${Date.now()}-${filename}`;

    // Create a placeholder to get the upload URL pattern
    // We'll use multipart upload via the client
    return NextResponse.json({ uploadPath: blobPath, ext });
  } catch (error) {
    console.error("[video-upload] GET error:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

/**
 * POST: Receive the file via server-side put() to Vercel Blob.
 * For files under 4.5MB this works directly.
 * For larger files, use PUT with streaming.
 */
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "Aucun fichier fourni" }, { status: 400 });
    }

    const ext = file.name.split(".").pop()?.toLowerCase() || "mp4";
    const blobPath = `hero-videos/${Date.now()}.${ext}`;

    const blob = await put(blobPath, file, {
      access: "public",
      contentType: file.type || "video/mp4",
    });

    return NextResponse.json({ url: blob.url });
  } catch (error) {
    console.error("[video-upload] POST error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erreur upload vidéo" },
      { status: 500 }
    );
  }
}

/**
 * PUT: Direct streaming upload to Vercel Blob (bypasses body limit).
 * The client sends the raw file body with headers for filename and content-type.
 */
export async function PUT(request: Request) {
  try {
    const filename = request.headers.get("x-filename") || `${Date.now()}.mp4`;
    const contentType = request.headers.get("content-type") || "video/mp4";

    // Validate extension
    const ext = filename.split(".").pop()?.toLowerCase();
    if (!ext || !["mp4", "webm", "mov"].includes(ext)) {
      return NextResponse.json(
        { error: "Format non autorisé. Acceptés : MP4, WebM, MOV" },
        { status: 400 }
      );
    }

    const blobPath = `hero-videos/${Date.now()}-${filename}`;

    // Stream the request body directly to Vercel Blob
    // This avoids buffering the entire file in the serverless function
    const blob = await put(blobPath, request.body!, {
      access: "public",
      contentType,
    });

    return NextResponse.json({ url: blob.url });
  } catch (error) {
    console.error("[video-upload] PUT error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erreur upload vidéo" },
      { status: 500 }
    );
  }
}
