import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { page, ip } = await req.json();

    const visit = await prisma.analytics.create({
      data: { page, ip },
    });

    return NextResponse.json({ success: true, visit }, { status: 201 });
  } catch (error) {
    console.error("Analytics logging error:", error);

    return NextResponse.json(
      { error: "Failed to log analytics", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
