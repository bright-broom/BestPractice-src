import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Skeleton } from "@ui/skeleton";
import { cn } from "@/lib/utils";

// 動的インポートによる最適化
const LoadingSkeleton = ({ isHero = false }: { isHero?: boolean }) => (
  <Skeleton
    className={cn(
      isHero ? "h-[85vh]" : "h-96",
      "w-full rounded-none",
      "animate-pulse bg-muted/50",
      "relative overflow-hidden",
      "after:absolute after:inset-0",
      "after:bg-gradient-to-r after:from-transparent",
      "after:via-white/10 after:to-transparent",
      "after:animate-shimmer after:translate-x-[-100%]"
    )}
  />
);

const Hero = dynamic(() => import("@sections/Hero"), {
  loading: () => <LoadingSkeleton isHero />,
});

const About = dynamic(() => import("@sections/About"), {
  loading: () => <LoadingSkeleton />,
});

const Services = dynamic(() => import("@sections/Services"), {
  loading: () => <LoadingSkeleton />,
});

const Testimonials = dynamic(() => import("@sections/Testimonials"), {
  loading: () => <LoadingSkeleton />,
});

const Pricing = dynamic(() => import("@sections/Pricing"), {
  loading: () => <LoadingSkeleton />,
});

const FAQ = dynamic(() => import("@sections/FAQ"), {
  loading: () => <LoadingSkeleton />,
});

const Contact = dynamic(() => import("@sections/Contact"), {
  loading: () => <LoadingSkeleton />,
});

export const metadata = {
  title: "ホーム",
};

export default function HomePage() {
  return (
    <main
      className={cn(
        "relative min-h-screen",
        "scroll-smooth overflow-x-hidden",
        "selection:bg-primary/20 selection:text-primary"
      )}
    >
      <div
        className={cn(
          "flex flex-col",
          "gap-spacing-24 md:gap-spacing-32",
          "animate-fade-in [animation-fill-mode:both]",
          "[scroll-timeline:--reveal-scroll block]",
          "[animation-timeline:--reveal-scroll]",
          "[animation-range:entry]"
        )}
        aria-label="メインコンテンツ"
      >
        <Suspense fallback={<Skeleton className="h-screen" />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<Skeleton className="h-96" />}>
          <About />
        </Suspense>

        <Suspense fallback={<Skeleton className="h-96" />}>
          <Services />
        </Suspense>

        <Suspense fallback={<Skeleton className="h-96" />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<Skeleton className="h-96" />}>
          <Pricing />
        </Suspense>

        <Suspense fallback={<Skeleton className="h-96" />}>
          <FAQ />
        </Suspense>

        <Suspense fallback={<Skeleton className="h-96" />}>
          <Contact />
        </Suspense>
      </div>
    </main>
  );
}