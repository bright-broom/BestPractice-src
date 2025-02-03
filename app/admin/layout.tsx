import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "管理画面 | Best Practice Portfolio",
  description: "管理者用ダッシュボード",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  
  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="flex min-h-screen">
      <nav className="w-64 p-4 text-white bg-gray-800">
        <h1 className="mb-8 text-xl font-bold">管理画面</h1>
        <ul className="space-y-2">
          <li>
            <a href="/admin/articles" className="block hover:text-blue-400">
              記事管理
            </a>
          </li>
          <li>
            <a href="/admin/portfolio" className="block hover:text-blue-400">
              ポートフォリオ管理
            </a>
          </li>
          <li>
            <a href="/admin/users" className="block hover:text-blue-400">
              ユーザー管理
            </a>
          </li>
        </ul>
      </nav>
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}