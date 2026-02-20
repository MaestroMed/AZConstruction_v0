import { NextRequest, NextResponse } from "next/server";

// NOTE: productFamilyImage model not in Prisma schema yet — stub routes

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const familyId = searchParams.get("familyId");
  if (!familyId) return NextResponse.json({ error: "familyId is required" }, { status: 400 });
  return NextResponse.json({ success: true, images: [] });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { familyId, imageUrl } = body;
    if (!familyId || !imageUrl) return NextResponse.json({ error: "familyId and imageUrl are required" }, { status: 400 });
    return NextResponse.json({ success: false, error: "Model not yet in schema" }, { status: 501 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Image ID is required" }, { status: 400 });
  return NextResponse.json({ success: false, error: "Model not yet in schema" }, { status: 501 });
}
