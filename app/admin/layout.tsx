import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  // セッションがない、または管理者でない場合はサインインページへリダイレクト
  if (!session || session.user.role !== "admin") {
    redirect("/api/auth/signin");
  }

  return <>{children}</>;
}
