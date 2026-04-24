/**
 * Upload a single file and return its public URL.
 * - IMAGE => POST /api/upload (form-data), returns data.files[0].url
 * - VIDEO => @vercel/blob/client upload() with handleUploadUrl /api/upload/video
 *
 * Thin wrapper meant to be shared between family-level and variant-level
 * AssetUploader onUpload callbacks.
 */
import { upload as blobUpload } from "@vercel/blob/client";

export type UploadAssetType = "IMAGE" | "VIDEO";

export async function uploadAssetFile(
  file: File,
  type: UploadAssetType,
  folder: string = "families"
): Promise<{ url: string }> {
  if (type === "IMAGE") {
    const fd = new FormData();
    fd.append("files", file);
    fd.append("folder", folder);
    const res = await fetch("/api/upload", {
      method: "POST",
      body: fd,
    });
    const data = await res.json().catch(() => null);
    if (!res.ok || !data?.success) {
      throw new Error(data?.error || "Upload image échoué");
    }
    const url: string | undefined = data.files?.[0]?.url;
    if (!url) throw new Error("URL manquante dans la réponse upload");
    return { url };
  }

  // VIDEO via Vercel Blob client upload
  const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
  const pathname = `${folder}/${Date.now()}-${safeName}`;
  const blob = await blobUpload(pathname, file, {
    access: "public",
    handleUploadUrl: "/api/upload/video",
  });
  if (!blob?.url) throw new Error("Upload vidéo : URL manquante");
  return { url: blob.url };
}
