import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import type { PrismaClient } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });

  // 未認証ユーザーは `/admin` へアクセス不可
  if (!token && req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
