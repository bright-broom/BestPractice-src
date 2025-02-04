"use client";

import * as React from "react";
import Link from "next/link";
import { z } from "zod";
import { Button } from "@/src/components/ui/button";
import { LogOut } from "lucide-react";
import type { Session } from "next-auth";

// Zodスキーマ定義
export const adminHeaderSchema = z.object({
  session: z.custom<Session>((data) => data !== null, {
    message: "Session is required",
  }),
});

// 型定義
export type AdminHeaderProps = z.infer<typeof adminHeaderSchema>;

export function AdminHeader({ session }: AdminHeaderProps) {
  return (
    <header 
      className="bg-white shadow-sm fixed top-0 w-full z-10"
      aria-label="管理画面ヘッダー"
    >
      <div className="h-16 px-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">管理画面</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600" aria-label="ログインユーザー">
            {session.user.name}さん
          </span>
          <Button 
            variant="outline" 
            size="sm" 
            asChild
          >
            <Link 
              href="/api/auth/signout"
              aria-label="ログアウト"
            >
              <LogOut className="h-4 w-4 mr-2" aria-hidden="true" />
              ログアウト
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

// React.memo for performance optimization
export default React.memo(AdminHeader);