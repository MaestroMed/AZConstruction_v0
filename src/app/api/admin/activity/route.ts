import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET: Fetch recent activity
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "20");
    const entity = searchParams.get("entity");

    const logs = await prisma.activityLog.findMany({
      where: entity ? { entity } : undefined,
      orderBy: { createdAt: "desc" },
      take: limit,
    });

    return NextResponse.json({ success: true, logs });
  } catch (error) {
    console.error("Error fetching activity logs:", error);
    return NextResponse.json({ success: true, logs: [] });
  }
}

// POST: Record an activity
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, entity, entityId, label, metadata } = body;

    if (!action || !entity || !label) {
      return NextResponse.json({ error: "action, entity and label are required" }, { status: 400 });
    }

    const log = await prisma.activityLog.create({
      data: {
        action,
        entity,
        entityId: entityId || null,
        label,
        metadata: metadata || null,
      },
    });

    return NextResponse.json({ success: true, log });
  } catch (error) {
    console.error("Error creating activity log:", error);
    return NextResponse.json({ error: "Failed to log activity" }, { status: 500 });
  }
}
