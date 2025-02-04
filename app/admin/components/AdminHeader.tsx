"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import type { Session } from "next-auth";

type AdminHeaderProps = {
  session: Session;
};

export function AdminHeader({ session }: AdminHeaderProps) {
  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-10">
      <div className="h-16 px-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">管理画面</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            {session.user.name}さん
          </span>
          <Button variant="outline" size="sm" asChild>
            <Link href="/api/auth/signout">
              <LogOut className="h-4 w-4 mr-2" />
              ログアウト
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}