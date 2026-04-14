import { prisma } from "@/lib/prisma";

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
        metadata: metadata || null,
      },
    });
  } catch (error) {
    // Non-blocking — don't fail the main operation if logging fails
    console.error("Activity log error:", error);
  }
}
