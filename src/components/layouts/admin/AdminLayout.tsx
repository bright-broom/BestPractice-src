"use client";

import * as React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../lib/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { z } from "zod";
import { AdminHeader } from "../../sections/admin/AdminHeader";
import { AdminSidebar } from "../../sections/admin/AdminSidebar";
import type { Session } from "next-auth";
import type { ReactNode } from "react";

// Zodスキーマ定義
const adminLayoutSchema = z.object({
  children: z.custom<ReactNode>(),
  session: z.custom<Session>((data) => data !== null, {
    message: "Session is required",
  }),
});

type AdminLayoutProps = z.infer<typeof adminLayoutSchema>;

// エラーバウンダリーコンポーネント
class AdminErrorBoundary extends React.Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("Admin layout error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900">
              エラーが発生しました
            </h2>
            <p className="mt-2 text-gray-600">
              管理画面の読み込み中にエラーが発生しました。
            </p>
            <button
              type="button"
              onClick={() => this.setState({ hasError: false })}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              再読み込み
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?error=Unauthorized");
  }

  if (session.user.role !== "admin") {
    redirect("/api/auth/signin?error=InsufficientPermissions");
  }

  return (
    <AdminErrorBoundary>
      <section 
        className="min-h-screen bg-gray-100"
        aria-label="管理画面"
      >
        <AdminHeader session={session} />
        <AdminSidebar />
        <main className="pt-16 pl-64">
          <div className="p-8">{children}</div>
        </main>
      </section>
    </AdminErrorBoundary>
  );
}