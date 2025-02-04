"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  Users,
} from "lucide-react";

export function AdminSidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "bg-gray-100" : "";
  };

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white shadow-sm">
      <nav className="p-4 space-y-2">
        <Button
          variant="ghost"
          className={`w-full justify-start ${isActive("/admin")}`}
          asChild
        >
          <Link href="/admin">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            ダッシュボード
          </Link>
        </Button>
        <Button
          variant="ghost"
          className={`w-full justify-start ${isActive("/admin/articles")}`}
          asChild
        >
          <Link href="/admin/articles">
            <FileText className="h-4 w-4 mr-2" />
            記事管理
          </Link>
        </Button>
        <Button
          variant="ghost"
          className={`w-full justify-start ${isActive("/admin/portfolio")}`}
          asChild
        >
          <Link href="/admin/portfolio">
            <Briefcase className="h-4 w-4 mr-2" />
            ポートフォリオ管理
          </Link>
        </Button>
        <Button
          variant="ghost"
          className={`w-full justify-start ${isActive("/admin/users")}`}
          asChild
        >
          <Link href="/admin/users">
            <Users className="h-4 w-4 mr-2" />
            ユーザー管理
          </Link>
        </Button>
      </nav>
    </aside>
  );
}