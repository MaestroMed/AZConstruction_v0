import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

type ActivityAction = "create" | "update" | "delete" | "publish" | "unpublish";
type ActivityEntity = "blog" | "realization" | "product" | "slide" | "contact" | "devis" | "settings" | "image";

export async function logActivity(
  action: ActivityAction,
  entity: ActivityEntity,
  label: string,
  entityId?: string,
  metadata?: Record<string, unknown>,
) {
  try {
    await prisma.activityLog.create({
      data: {
        action,
        entity,
        entityId: entityId || null,
        label,
        metadata: metadata ? (metadata as Prisma.InputJsonValue) : Prisma.JsonNull,
      },
    });
  } catch (error) {
    console.error("Activity log error:", error);
  }
}
