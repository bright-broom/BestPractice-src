import Link from "next/link";
import { getServerSession } from "next-auth";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import "@/styles/globals.css";

// 🛠️ `session.user` に `role` を追加
import type { Session } from "next-auth";

declare module "next-auth" {
  interface User {
    role: string | undefined; // `role` プロパティを追加
  }

  interface Session {
    user: User;
  }
}

export default async function HomePage() {
  const session: Session | null = await getServerSession();

  return (
    <div className="relative min-h-screen scroll-smooth">
      <div className="flex flex-col gap-1" aria-label="メインコンテンツ">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </div>

    </div>
  );
}
