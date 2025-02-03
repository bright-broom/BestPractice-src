"use client";

import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DashboardIcon, ExitIcon, EnterIcon } from "@radix-ui/react-icons";

export default function Header() {
  const { data: session } = useSession();
  const isAdmin = session?.user?.role === "admin";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gray-900 p-4 text-white backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">
          <Link href="/">My Brand</Link>
        </h1>
        
        <ul className="hidden md:flex space-x-6">
          <li><Link href="#about" className="hover:text-gray-300 transition-colors">About</Link></li>
          <li><Link href="#services" className="hover:text-gray-300 transition-colors">Services</Link></li>
          <li><Link href="#contact" className="hover:text-gray-300 transition-colors">Contact</Link></li>
        </ul>

        <div className="flex items-center gap-4">
          {/* 管理者の場合はダッシュボードへの直接リンクを表示 */}
          {isAdmin && (
            <Link href="/admin" className="hidden md:flex items-center gap-2 text-sm hover:text-gray-300 transition-colors">
              <DashboardIcon className="h-4 w-4" />
              Dashboard
            </Link>
          )}

          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="relative h-9 w-9 rounded-full p-0">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>{session.user?.name?.[0] || "U"}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {isAdmin && (
                  <DropdownMenuItem asChild>
                    <Link href="/admin" className="flex items-center">
                      <DashboardIcon className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem onClick={() => signOut()} className="text-red-600">
                  <ExitIcon className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button onClick={() => signIn()} size="sm" variant="outline">
              <EnterIcon className="mr-2 h-4 w-4" />
              Log In
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}
