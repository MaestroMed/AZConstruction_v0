import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { prisma } from "@/lib/prisma";
import path from "path";
import { writeFile, mkdir } from "fs/promises";

// Types de fichiers autorisés
const ALLOWED_TYPES = {
  image: ["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"],
  video: ["video/mp4", "video/webm", "video/quicktime", "video/x-msvideo", "video/x-matroska"],
  document: [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/octet-stream",
  ],
  model: ["model/gltf-binary", "model/gltf+json", "application/octet-stream"],
};

const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB (videos can be larger)

// Vérifier si Vercel Blob est configuré
const useVercelBlob = !!process.env.BLOB_READ_WRITE_TOKEN;

// Vérifier si on est en local (pas sur Vercel)
const isLocal = !process.env.VERCEL;

async function uploadToVercelBlob(buffer: Buffer, fileName: string, contentType: string) {
  const { put } = await import("@vercel/blob");
  const blob = await put(fileName, buffer, {
    access: "public",
    contentType,
  });
  return blob;
}

async function saveToLocalDisk(buffer: Buffer, originalName: string, folder: string): Promise<string> {
  const uploadsDir = path.join(process.cwd(), "public", "uploads");
  await mkdir(uploadsDir, { recursive: true });
  const ext = path.extname(originalName) || ".jpg";
  const fileName = `${uuidv4()}${ext}`;
  const filePath = path.join(uploadsDir, fileName);
  await writeFile(filePath, buffer);
  return `/uploads/${fileName}`;
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
      } else if (ALLOWED_TYPES.video.includes(file.type) || /\.(mp4|webm|mov|avi|mkv)$/i.test(file.name)) {
        fileType = "video";
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

      // 1. Essayer Vercel Blob (provider principal)
      if (useVercelBlob) {
        try {
          const blob = await uploadToVercelBlob(buffer, uniqueName, file.type);
          const fileData = {
            id: uuidv4(),
            originalName: file.name,
            fileName: uniqueName,
            url: blob.url,
            type: fileType,
            size: file.size,
            mimeType: file.type,
            provider: "vercel-blob",
            uploadedAt: new Date().toISOString(),
          };

          try {
            await prisma.media.create({
              data: {
                id: fileData.id,
                fileName: fileData.fileName,
                originalName: fileData.originalName,
                url: fileData.url,
                type: fileData.type,
                mimeType: fileData.mimeType,
                size: fileData.size,
                provider: fileData.provider,
              },
            });
          } catch (dbErr) {
            console.warn("Media DB record skipped:", dbErr);
          }

          uploadedFiles.push(fileData);
          continue;
        } catch (blobError) {
          console.error("Vercel Blob upload failed:", blobError);
        }
      }

      // 2. Stockage local sur disque (uniquement en développement local)
      if (isLocal) {
        try {
          const url = await saveToLocalDisk(buffer, file.name, folder);
          const fileData = {
            id: uuidv4(),
            originalName: file.name,
            fileName: path.basename(url),
            url,
            type: fileType,
            size: file.size,
            mimeType: file.type,
            provider: "local",
            uploadedAt: new Date().toISOString(),
          };

          try {
            await prisma.media.create({
              data: {
                id: fileData.id,
                fileName: fileData.fileName,
                originalName: fileData.originalName,
                url: fileData.url,
                type: fileData.type,
                mimeType: fileData.mimeType,
                size: fileData.size,
                provider: fileData.provider,
              },
            });
          } catch (dbErr) {
            console.warn("Media DB record skipped:", dbErr);
          }

          uploadedFiles.push(fileData);
          continue;
        } catch (localError) {
          console.error("Local disk upload failed:", localError);
        }
      }

      // 3. Aucun provider disponible
      if (!useVercelBlob && !isLocal) {
        return NextResponse.json(
          {
            error: "Upload impossible : aucun service de stockage configuré. Configurez BLOB_READ_WRITE_TOKEN dans les variables d'environnement Vercel.",
          },
          { status: 500 }
        );
      }

      // 4. Dernier recours : base64 (images compressées uniquement)
      if (file.size > 2 * 1024 * 1024) {
        return NextResponse.json(
          {
            error: `Image trop grande (${Math.round(file.size / 1024)}KB). Compressez-la sous 2MB ou configurez BLOB_READ_WRITE_TOKEN.`,
          },
          { status: 413 }
        );
      }

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
  try {
    const medias = await prisma.media.findMany({
      orderBy: { createdAt: "desc" },
    });

    const fileList = medias.map((media) => ({
      id: media.id,
      fileName: media.fileName,
      originalName: media.originalName,
      url: media.url,
      type: media.type,
      size: media.size,
      mimeType: media.mimeType,
      width: media.width,
      height: media.height,
      provider: media.provider,
      uploadedAt: media.createdAt.toISOString(),
    }));

    return NextResponse.json({ files: fileList });
  } catch (error) {
    console.error("Error listing files:", error);
    return NextResponse.json({ files: [] });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const url = searchParams.get("url");

    let media = null;
    if (id) {
      media = await prisma.media.findUnique({ where: { id } });
    } else if (url) {
      media = await prisma.media.findFirst({ where: { url } });
    }

    if (!media) {
      return NextResponse.json({ error: "Fichier non trouvé" }, { status: 404 });
    }

    // Supprimer du provider
    if (media.provider === "vercel-blob" && useVercelBlob) {
      try {
        const { del } = await import("@vercel/blob");
        await del(media.url);
      } catch (e) {
        console.error("Error deleting from Vercel Blob:", e);
      }
    }

    await prisma.media.delete({ where: { id: media.id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur lors de la suppression:", error);
    return NextResponse.json(
      { error: "Erreur lors de la suppression du fichier" },
      { status: 500 }
    );
  }
}
