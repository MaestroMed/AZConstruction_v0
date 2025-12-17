import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

// Types de fichiers autorisés
const ALLOWED_TYPES = {
  image: ["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"],
  document: ["application/pdf"],
  model: ["model/gltf-binary", "model/gltf+json", "application/octet-stream"],
};

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

// Vérifier si Vercel Blob est configuré
const useVercelBlob = !!process.env.BLOB_READ_WRITE_TOKEN;

// Vérifier si Cloudinary est configuré
const useCloudinary = !!(
  process.env.CLOUDINARY_CLOUD_NAME &&
  process.env.CLOUDINARY_API_KEY &&
  process.env.CLOUDINARY_API_SECRET
);

async function uploadToCloudinary(buffer: Buffer, fileName: string, mimeType: string, folder: string = "az-construction") {
  try {
    const { uploadImage } = await import("@/lib/cloudinary");
    const base64 = `data:${mimeType};base64,${buffer.toString("base64")}`;
    return uploadImage(base64, { folder });
  } catch (error) {
    console.error("Cloudinary import/upload error:", error);
    throw error;
  }
}

async function uploadToVercelBlob(buffer: Buffer, fileName: string, contentType: string) {
  const { put } = await import("@vercel/blob");
  const blob = await put(fileName, buffer, {
    access: "public",
    contentType,
  });
  return blob;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("files") as File[];
    const folder = formData.get("folder") as string || "uploads";

    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: "Aucun fichier fourni" },
        { status: 400 }
      );
    }

    const uploadedFiles = [];

    for (const file of files) {
      // Vérifier la taille
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: `Le fichier ${file.name} dépasse la taille maximale de 50MB` },
          { status: 400 }
        );
      }

      // Déterminer le type de fichier
      let fileType = "unknown";
      if (ALLOWED_TYPES.image.includes(file.type)) {
        fileType = "image";
      } else if (ALLOWED_TYPES.document.includes(file.type)) {
        fileType = "document";
      } else if (
        ALLOWED_TYPES.model.includes(file.type) ||
        file.name.endsWith(".glb") ||
        file.name.endsWith(".gltf")
      ) {
        fileType = "model";
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const uniqueName = `${folder}/${uuidv4()}-${file.name}`;

      // 1. Essayer Vercel Blob (recommandé pour Vercel)
      if (useVercelBlob) {
        try {
          const blob = await uploadToVercelBlob(buffer, uniqueName, file.type);
          uploadedFiles.push({
            id: uuidv4(),
            originalName: file.name,
            fileName: uniqueName,
            url: blob.url,
            type: fileType,
            size: file.size,
            mimeType: file.type,
            provider: "vercel-blob",
            uploadedAt: new Date().toISOString(),
          });
          continue;
        } catch (blobError) {
          console.error("Vercel Blob upload failed:", blobError);
        }
      }

      // 2. Essayer Cloudinary
      if (useCloudinary && fileType === "image") {
        try {
          const result = await uploadToCloudinary(buffer, file.name, file.type, folder);
          uploadedFiles.push({
            id: result.publicId,
            originalName: file.name,
            fileName: result.publicId,
            url: result.url,
            type: fileType,
            size: file.size,
            mimeType: file.type,
            width: result.width,
            height: result.height,
            provider: "cloudinary",
            uploadedAt: new Date().toISOString(),
          });
          continue;
        } catch (cloudinaryError) {
          console.error("Cloudinary upload failed:", cloudinaryError);
        }
      }

      // 3. Fallback: retourner l'image en base64 pour stockage côté client
      const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;
      uploadedFiles.push({
        id: uuidv4(),
        originalName: file.name,
        fileName: file.name,
        url: base64,
        type: fileType,
        size: file.size,
        mimeType: file.type,
        provider: "base64",
        uploadedAt: new Date().toISOString(),
      });
    }

    return NextResponse.json({
      success: true,
      files: uploadedFiles,
    });
  } catch (error) {
    console.error("Erreur lors de l'upload:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'upload des fichiers" },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Pour Vercel Blob, on peut lister les fichiers
  if (useVercelBlob) {
    try {
      const { list } = await import("@vercel/blob");
      const { blobs } = await list();
      
      const fileList = blobs.map((blob) => ({
        id: blob.pathname,
        fileName: blob.pathname,
        url: blob.url,
        type: "image",
        size: blob.size,
        uploadedAt: blob.uploadedAt.toISOString(),
      }));
      
      return NextResponse.json({ files: fileList });
    } catch (error) {
      console.error("Error listing blobs:", error);
    }
  }

  // Retourner une liste vide si pas de storage configuré
  return NextResponse.json({ files: [] });
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get("url");

    if (!url) {
      return NextResponse.json(
        { error: "URL du fichier requise" },
        { status: 400 }
      );
    }

    // Pour Vercel Blob
    if (useVercelBlob && url.includes("blob.vercel-storage.com")) {
      const { del } = await import("@vercel/blob");
      await del(url);
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur lors de la suppression:", error);
    return NextResponse.json(
      { error: "Erreur lors de la suppression du fichier" },
      { status: 500 }
    );
  }
}
