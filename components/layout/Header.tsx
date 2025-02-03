"use client";

import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { data: session } = useSession(); // ユーザーのセッション情報を取得

  return (
    <header className="w-full p-4 text-white bg-gray-900">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">
          <Link href="/">My Brand</Link>
        </h1>
        <ul className="flex space-x-4">
          <li><Link href="#about" className="hover:underline">About</Link></li>
          <li><Link href="#services" className="hover:underline">Services</Link></li>
          <li><Link href="#contact" className="hover:underline">Contact</Link></li>
        </ul>
        {/* ログイン / ログアウトボタン */}
        <div>
          {session ? (
            <Button variant="outline" onClick={() => signOut()}>
              Log Out
            </Button>
          ) : (
            <Button onClick={() => signIn()}>
              Log In
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}
