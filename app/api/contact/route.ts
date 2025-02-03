import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import type { PrismaClient } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    const contact = await prisma.contact.create({ data });

    return NextResponse.json({ success: true, contact }, { status: 201 });
  } catch (error) {
    console.error("Contact form error:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }

    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
