"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@ui/button";
import { Container } from "@ui/container";
import {
  getSectionClass,
  getAnimationVariant,
  getHeadingClass,
  getGridPatternClass,
  getTransitionClass,
} from "@/lib/design-system";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleString('ja-JP'));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const sectionStyles = getSectionClass('hero');
  const fadeInUpVariant = getAnimationVariant('fadeInUp');

  return (
    <section
      className={cn(
        sectionStyles.padding,
        sectionStyles.background,
        "relative isolate overflow-hidden"
      )}
      aria-labelledby="hero-heading"
    >
      {/* 背景エフェクト */}
      <div className="absolute inset-0 -z-10">
        {/* グラデーション背景 */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        
        {/* グリッドパターン */}
        <div
          className={cn(
            getGridPatternClass(8),
            "absolute inset-0 opacity-50"
          )}
          aria-hidden="true"
        />
        
        {/* デコレーティブな背景ブラー */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl opacity-30"
          aria-hidden="true"
        />
      </div>
      
      <Container className={cn(sectionStyles.container, "relative z-10")}>
        <motion.div
          className="flex flex-col items-center justify-center text-center gap-spacing-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
              },
            },
          }}
        >
          <motion.div variants={fadeInUpVariant} className="space-y-6">
            <motion.h1
              id="hero-heading"
              className={cn(
                getHeadingClass(1, { tracking: 'tighter', align: 'center' }),
                "max-w-4xl mx-auto leading-[1.15]",
                "relative"
              )}
            >
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                あなたのビジョンを
              </span>
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary/90 to-secondary bg-clip-text text-transparent
                transform hover:scale-105 transition-transform duration-300
                text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter"
              >
                現実に
              </span>
            </motion.h1>
            
            <motion.p
              className={cn(
                "max-w-2xl mx-auto",
                "text-base sm:text-lg md:text-xl",
                "text-muted-foreground leading-relaxed",
                "opacity-90"
              )}
            >
              Next.jsとモダンな技術スタックで、
              <br className="hidden sm:inline" />
              あなたのウェブ体験を最高のものに
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeInUpVariant}
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center",
              "gap-4 sm:gap-6 mt-8 sm:mt-12"
            )}
          >
            <Button
              size="lg"
              asChild
              className={cn(
                "rounded-full text-base sm:text-lg font-medium w-full sm:w-auto",
                "bg-primary hover:bg-primary/90",
                "shadow-lg hover:shadow-xl",
                "px-8 py-6 sm:px-10",
                "transform hover:scale-105",
                getTransitionClass('normal')
              )}
            >
              <a href="#contact">お問い合わせ</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className={cn(
                "rounded-full text-base sm:text-lg font-medium w-full sm:w-auto",
                "text-primary border-primary/20",
                "hover:bg-primary/5 hover:border-primary",
                "backdrop-blur-sm",
                "px-8 py-6 sm:px-10",
                "transform hover:scale-105",
                getTransitionClass('normal')
              )}
            >
              <a href="#services">サービス一覧</a>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUpVariant}
            className="w-full max-w-lg mx-auto mt-16 flex flex-col items-center"
          >
            <motion.p
              className={cn(
                "text-sm text-muted-foreground/80",
                "backdrop-blur-sm rounded-full px-4 py-2",
                "border border-border/10",
                "mb-8"
              )}
            >
              現在の時刻: {currentTime}
            </motion.p>

            {/* スクロールインジケーター */}
            <motion.div
              className="animate-bounce cursor-pointer"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              <div className="w-8 h-12 rounded-full border-2 border-muted-foreground/20 flex items-center justify-center p-2">
                <div className="w-1 h-3 bg-muted-foreground/20 rounded-full" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
