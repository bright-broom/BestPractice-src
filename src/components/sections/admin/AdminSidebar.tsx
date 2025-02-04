"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/src/components/ui/button";
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  Users,
} from "lucide-react";

// ナビゲーション項目の定義
const navigationItems = [
  {
    href: "/admin",
    label: "ダッシュボード",
    icon: LayoutDashboard,
  },
  {
    href: "/admin/articles",
    label: "記事管理",
    icon: FileText,
  },
  {
    href: "/admin/portfolio",
    label: "ポートフォリオ管理",
    icon: Briefcase,
  },
  {
    href: "/admin/users",
    label: "ユーザー管理",
    icon: Users,
  },
] as const;

export function AdminSidebar() {
  const pathname = usePathname();

  const isActive = React.useCallback((path: string) => {
    return pathname === path ? "bg-gray-100" : "";
  }, [pathname]);

  return (
    <aside 
      className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white shadow-sm"
      aria-label="管理メニュー"
    >
      <nav 
        className="p-4 space-y-2"
        aria-label="管理メニューナビゲーション"
      >
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.href}
              variant="ghost"
              className={`w-full justify-start ${isActive(item.href)}`}
              asChild
            >
              <Link 
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                <Icon className="h-4 w-4 mr-2" aria-hidden="true" />
                {item.label}
              </Link>
            </Button>
          );
        })}
      </nav>
    </aside>
  );
}

// React.memo for performance optimization
export default React.memo(AdminSidebar);