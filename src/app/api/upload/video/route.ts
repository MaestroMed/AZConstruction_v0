import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";

/**
 * Vercel Blob client upload handler.
 *
 * Flow:
 * 1. Client calls upload() from @vercel/blob/client
 * 2. upload() sends a small JSON POST here to get a signed token
 * 3. This route calls handleUpload() which generates the token
 * 4. Client uploads the file DIRECTLY to Vercel Blob (not through this function)
 * 5. After upload, Vercel Blob notifies this route via onUploadCompleted
 *
 * The file NEVER passes through this serverless function,
 * so the 4.5MB body limit doesn't apply.
 */
export async function POST(request: Request): Promise<NextResponse> {
  // Garde-fou : si le token Blob n'est pas configuré, on retourne un message parlant
  // au lieu de laisser le SDK générer un token invalide qui fait foirer le client en CORS.
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json(
      {
        error:
          "BLOB_READ_WRITE_TOKEN manquant côté serveur. Créer un store Vercel Blob (Dashboard → Storage → Blob) et lier la variable au projet, puis redéployer.",
      },
      { status: 500 }
    );
  }

  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname: string) => {
        const ext = pathname.split(".").pop()?.toLowerCase();
        const allowed = ["mp4", "webm", "mov"];
        if (!ext || !allowed.includes(ext)) {
          throw new Error("Format non autorisé. Acceptés : MP4, WebM, MOV");
        }

        return {
          allowedContentTypes: [
            "video/mp4",
            "video/webm",
            "video/quicktime",
          ],
          maximumSizeInBytes: 100 * 1024 * 1024, // 100 MB
        };
      },
      onUploadCompleted: async ({ blob }) => {
        console.log("[video-upload] completed:", blob.url);
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    console.error("[video-upload] error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erreur upload vidéo" },
      { status: 400 }
    );
  }
}
