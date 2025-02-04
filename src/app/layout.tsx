import type { Metadata, Viewport } from "next";
import { Layout } from "@layouts/layout";
import { Providers } from "@lib/providers";
import "@styles/globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Best Practice",
    template: "%s | Best Practice",
  },
  description: "モダンなReactアプリケーション開発のベストプラクティス実装",
  keywords: ["React", "Next.js", "TypeScript", "Best Practices"],
  authors: [
    {
      name: "Your Name",
      url: "https://github.com/yourusername",
    },
  ],
  creator: "Your Name",
  icons: {
    icon: [
      { url: "/icons/favicon.ico" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}