import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// 環境変数から NextAuth のシークレットを取得
const AUTH_SECRET = process.env.NEXTAUTH_SECRET;

/**
 * ミドルウェア: 管理者ページ（/admin）へのアクセス制限
 * @param req Next.js のリクエストオブジェクト
 * @returns NextResponse（許可 or リダイレクト）
 */
export async function middleware(req: NextRequest) {
  // JWT トークンを取得
  const token = await getToken({ req, secret: AUTH_SECRET });

  // /admin パスへのアクセスをチェック
  if (req.nextUrl.pathname.startsWith("/admin")) {
    // トークンがない場合はログインページにリダイレクト
    if (!token) {
      const signInUrl = new URL("/api/auth/signin", req.url);
      signInUrl.searchParams.set("callbackUrl", req.url);
      return NextResponse.redirect(signInUrl);
    }

    // 管理者以外のアクセスを拒否
    if (token.role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

// /admin 以下のすべてのページに適用
export const config = {
  matcher: ["/admin/:path*"],
};
