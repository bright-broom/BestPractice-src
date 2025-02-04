"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  getSectionClass,
  getAnimationVariant,
  getHeadingClass,
  getGridPatternClass,
  getTransitionClass,
} from "@/lib/design-system";

const features = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "モダン開発",
    description: "Next.js、TypeScript、Tailwindを活用した最新のウェブ開発"
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UI/UXデザイン",
    description: "ユーザー中心の美しく機能的なインターフェース設計"
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "高速パフォーマンス",
    description: "最適化された処理とレスポンシブな表示で快適な体験を提供"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "チーム開発",
    description: "経験豊富な開発者とデザイナーによる効率的な開発体制"
  }
];

export default function About() {
  const sectionStyles = getSectionClass('alternate');
  const fadeInUpVariant = getAnimationVariant('fadeInUp');

  return (
    <section
      className={cn(
        sectionStyles.padding,
        sectionStyles.background,
        "relative isolate overflow-hidden"
      )}
      aria-labelledby="about-heading"
    >
      {/* 背景エフェクト */}
      <div className="absolute inset-0 -z-10">
        {/* グラデーション背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        
        {/* グリッドパターン */}
        <div
          className={cn(
            getGridPatternClass(5),
            "absolute inset-0"
          )}
          aria-hidden="true"
        />
        
        {/* デコレーティブな背景ブラー */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 blur-3xl opacity-30"
          aria-hidden="true"
        />
      </div>
      
      <Container className={sectionStyles.container}>
        <motion.div
          className="text-center space-y-8"
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
        >
          <h2
            id="about-heading"
            className={cn(
              getHeadingClass(2, { tracking: 'tight', align: 'center' }),
              "text-foreground relative inline-block"
            )}
          >
            <span className="relative inline-block">
              私たちについて
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </h2>
          <p className={cn(
            "max-w-2xl mx-auto",
            "text-body-large text-muted-foreground",
            "leading-relaxed",
            "opacity-90"
          )}>
            スケーラブルで効率的なウェブアプリケーションの開発に情熱を注ぐ
            プロフェッショナルチームです
          </p>
        </motion.div>

        <motion.div
          className={cn(
            "grid max-w-5xl grid-cols-1 sm:grid-cols-2",
            "gap-6 lg:gap-8 mx-auto mt-16 lg:mt-20"
          )}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeInUpVariant}
              custom={index * 0.1}
              className="group"
            >
              <Card className={cn(
                "h-full relative isolate overflow-hidden",
                "backdrop-blur-sm bg-card/30",
                "border border-border/50",
                "transition-all duration-500",
                "hover:shadow-elevation-3 hover:-translate-y-2",
                "hover:bg-card/50",
                "hover:border-primary/20",
                getTransitionClass('normal')
              )}>
                <CardHeader className="pb-4">
                  <div
                    className={cn(
                      "relative inline-flex items-center justify-center",
                      "w-16 h-16 rounded-2xl",
                      "bg-primary/10 text-primary",
                      "group-hover:bg-primary/20",
                      "group-hover:scale-110",
                      "ring-1 ring-primary/20",
                      "transition-all duration-500"
                    )}
                    aria-hidden="true"
                  >
                    {/* アイコンのグロー効果 */}
                    <div className="absolute inset-0 rounded-2xl bg-primary/5 group-hover:animate-pulse" />
                    {feature.icon}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className={cn(
                    "text-xl font-semibold",
                    "text-foreground",
                    "group-hover:text-primary",
                    "group-hover:translate-x-1",
                    getTransitionClass('normal')
                  )}>
                    {feature.title}
                  </h3>
                  <p className={cn(
                    "text-muted-foreground",
                    "leading-relaxed",
                    "group-hover:text-foreground/80",
                    getTransitionClass('normal')
                  )}>
                    {feature.description}
                  </p>
                </CardContent>
                
                {/* カードのホバーエフェクト用の装飾 */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
