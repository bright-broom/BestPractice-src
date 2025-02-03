import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Best Practice Portfolio",
  description: "モダンな技術とベストプラクティスを活用したポートフォリオサイト",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
