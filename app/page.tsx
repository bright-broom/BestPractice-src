import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import "@/styles/globals.css";

export default function HomePage() {
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
