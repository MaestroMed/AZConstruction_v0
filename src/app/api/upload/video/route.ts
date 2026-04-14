import { NextRequest, NextResponse } from "next/server";
import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";

/**
 * Vercel Blob Client Upload for videos.
 * This bypasses the 4.5MB serverless body limit by uploading
 * directly from the browser to Vercel Blob storage.
 */
export async function POST(request: NextRequest) {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        // Validate it's a video file
        const ext = pathname.split(".").pop()?.toLowerCase();
        const allowedExts = ["mp4", "webm", "mov", "avi", "mkv"];
        if (!ext || !allowedExts.includes(ext)) {
          throw new Error("Type de fichier non autorisé. Formats acceptés : MP4, WebM, MOV");
        }

        return {
          allowedContentTypes: [
            "video/mp4",
            "video/webm",
            "video/quicktime",
            "video/x-msvideo",
            "video/x-matroska",
          ],
          maximumSizeInBytes: 100 * 1024 * 1024, // 100MB
          tokenPayload: JSON.stringify({ purpose: "hero-video" }),
        };
      },
      onUploadCompleted: async ({ blob }) => {
        // Could log or process the upload here
        console.log("Video uploaded:", blob.url);
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erreur lors de l'upload vidéo" },
      { status: 400 }
    );
  }
}
