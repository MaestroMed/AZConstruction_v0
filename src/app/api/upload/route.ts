import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

// Types de fichiers autorisés
const ALLOWED_TYPES = {
  image: ["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"],
  document: ["application/pdf"],
  model: ["model/gltf-binary", "model/gltf+json", "application/octet-stream"],
};

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

// Vérifier si Cloudinary est configuré
const useCloudinary = !!(
  process.env.CLOUDINARY_CLOUD_NAME &&
  process.env.CLOUDINARY_API_KEY &&
  process.env.CLOUDINARY_API_SECRET
);

async function uploadToCloudinary(buffer: Buffer, fileName: string, folder: string = "az-construction") {
  const { uploadImage } = await import("@/lib/cloudinary");
  const base64 = `data:image/png;base64,${buffer.toString("base64")}`;
  return uploadImage(base64, { folder });
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

      // Upload vers Cloudinary si configuré, sinon local
      if (useCloudinary && fileType === "image") {
        try {
          const result = await uploadToCloudinary(buffer, file.name, folder);
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
        } catch (cloudinaryError) {
          console.error("Cloudinary upload failed, falling back to local:", cloudinaryError);
          // Fallback to local upload
          const localResult = await uploadLocal(buffer, file, fileType);
          uploadedFiles.push(localResult);
        }
      } else {
        // Upload local
        const localResult = await uploadLocal(buffer, file, fileType);
        uploadedFiles.push(localResult);
      }
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

async function uploadLocal(buffer: Buffer, file: File, fileType: string) {
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  
  if (!existsSync(uploadDir)) {
    await mkdir(uploadDir, { recursive: true });
  }

  const ext = path.extname(file.name);
  const uniqueName = `${uuidv4()}${ext}`;
  const filePath = path.join(uploadDir, uniqueName);

  await writeFile(filePath, buffer);

  return {
    id: uuidv4(),
    originalName: file.name,
    fileName: uniqueName,
    url: `/uploads/${uniqueName}`,
    type: fileType,
    size: file.size,
    mimeType: file.type,
    provider: "local",
    uploadedAt: new Date().toISOString(),
  };
}

export async function GET() {
  // Retourner la liste des fichiers uploadés
  // Dans une vraie application, cela viendrait de la base de données
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  
  if (!existsSync(uploadDir)) {
    return NextResponse.json({ files: [] });
  }

  const fs = await import("fs/promises");
  const files = await fs.readdir(uploadDir);
  
  const fileList = await Promise.all(
    files.map(async (fileName) => {
      const filePath = path.join(uploadDir, fileName);
      const stats = await fs.stat(filePath);
      const ext = path.extname(fileName).toLowerCase();
      
      let type = "unknown";
      if ([".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"].includes(ext)) {
        type = "image";
      } else if ([".pdf"].includes(ext)) {
        type = "document";
      } else if ([".glb", ".gltf"].includes(ext)) {
        type = "model";
      }

      return {
        id: fileName,
        fileName,
        url: `/uploads/${fileName}`,
        type,
        size: stats.size,
        uploadedAt: stats.mtime.toISOString(),
      };
    })
  );

  return NextResponse.json({ files: fileList });
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const fileName = searchParams.get("file");

    if (!fileName) {
      return NextResponse.json(
        { error: "Nom de fichier requis" },
        { status: 400 }
      );
    }

    const filePath = path.join(process.cwd(), "public", "uploads", fileName);

    if (!existsSync(filePath)) {
      return NextResponse.json(
        { error: "Fichier non trouvé" },
        { status: 404 }
      );
    }

    const fs = await import("fs/promises");
    await fs.unlink(filePath);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur lors de la suppression:", error);
    return NextResponse.json(
      { error: "Erreur lors de la suppression du fichier" },
      { status: 500 }
    );
  }
}

