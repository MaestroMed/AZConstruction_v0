import { v2 as cloudinary } from "cloudinary";

// Lazy configuration de Cloudinary
let isConfigured = false;

function ensureCloudinaryConfig() {
  if (!isConfigured) {
    if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
      throw new Error("Cloudinary is not configured. Please set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET environment variables.");
    }
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    isConfigured = true;
  }
}

export interface UploadResult {
  url: string;
  publicId: string;
  width: number;
  height: number;
  format: string;
}

export async function uploadImage(
  file: Buffer | string,
  options?: {
    folder?: string;
    transformation?: object[];
  }
): Promise<UploadResult> {
  ensureCloudinaryConfig();
  const folder = options?.folder || "az-construction";

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "image",
        transformation: options?.transformation || [
          { quality: "auto:good" },
          { fetch_format: "auto" },
        ],
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else if (result) {
          resolve({
            url: result.secure_url,
            publicId: result.public_id,
            width: result.width,
            height: result.height,
            format: result.format,
          });
        }
      }
    );

    if (typeof file === "string") {
      // Base64 ou URL
      cloudinary.uploader.upload(file, {
        folder,
        resource_type: "image",
      }).then(result => {
        resolve({
          url: result.secure_url,
          publicId: result.public_id,
          width: result.width,
          height: result.height,
          format: result.format,
        });
      }).catch(reject);
    } else {
      // Buffer
      uploadStream.end(file);
    }
  });
}

export async function deleteImage(publicId: string): Promise<boolean> {
  try {
    ensureCloudinaryConfig();
    await cloudinary.uploader.destroy(publicId);
    return true;
  } catch (error) {
    console.error("Failed to delete image:", error);
    return false;
  }
}

export async function getOptimizedUrl(
  publicId: string,
  options?: { width?: number; height?: number; crop?: string }
): Promise<string> {
  ensureCloudinaryConfig();
  return cloudinary.url(publicId, {
    fetch_format: "auto",
    quality: "auto",
    width: options?.width,
    height: options?.height,
    crop: options?.crop || "fill",
  });
}

export { cloudinary };



