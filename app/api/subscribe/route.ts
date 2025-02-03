import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import type { PrismaClient } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const subscribeSchema = z.object({
  email: z.string().email("Invalid email format"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = subscribeSchema.parse(body);

    const subscriber = await prisma.subscriber.upsert({
      where: { email: data.email },
      update: {},
      create: { email: data.email },
    });

    return NextResponse.json({ success: true, subscriber }, { status: 201 });
  } catch (error) {
    console.error("Subscription error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }

    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
