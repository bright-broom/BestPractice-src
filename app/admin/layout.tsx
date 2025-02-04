import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { AdminHeader } from "./components/AdminHeader";
import { AdminSidebar } from "./components/AdminSidebar";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    redirect("/api/auth/signin");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminHeader session={session} />
      <AdminSidebar />
      <main className="pt-16 pl-64">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
