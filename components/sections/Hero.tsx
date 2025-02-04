"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  getSectionClass,
  getAnimationVariant,
  getHeadingClass,
  getGridPatternClass,
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
      className={cn(sectionStyles.padding, sectionStyles.background)}
      aria-labelledby="hero-heading"
    >
      <div 
        className={getGridPatternClass()}
        aria-hidden="true"
      />
      
      <Container className={sectionStyles.container}>
        <motion.div
          className="flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            id="hero-heading"
            className={getHeadingClass(1, { tracking: 'tighter', align: 'center' })}
            variants={fadeInUpVariant}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            あなたのビジョンを
            <span className="block mt-2 text-primary">現実に</span>
          </motion.h1>
          
          <motion.p
            className="max-w-2xl mx-auto mt-6 text-base text-gray-600 sm:text-lg md:text-xl"
            variants={fadeInUpVariant}
            initial="hidden"
            animate="visible"
            custom={0.4}
          >
            Next.jsとモダンな技術スタックで、
            <br className="hidden sm:inline" />
            あなたのウェブ体験を最高のものに
          </motion.p>

          <motion.div
            className="flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row sm:gap-6"
            variants={fadeInUpVariant}
            initial="hidden"
            animate="visible"
            custom={0.6}
          >
            <Button
              size="lg"
              asChild
              className={cn(
                "rounded-full text-base sm:text-lg font-medium",
                "bg-primary hover:bg-primary/90",
                "transition-all duration-300 ease-out"
              )}
            >
              <a href="#contact">お問い合わせ</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className={cn(
                "rounded-full text-base sm:text-lg font-medium",
                "text-primary border-primary",
                "hover:bg-primary/10 hover:text-primary",
                "transition-all duration-300 ease-out"
              )}
            >
              <a href="#services">サービス一覧</a>
            </Button>
          </motion.div>

          <motion.p
            className="mt-8 text-sm text-gray-500"
            variants={fadeInUpVariant}
            initial="hidden"
            animate="visible"
            custom={0.8}
          >
            現在の時刻: {currentTime}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
