"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";
import {
  getSectionClass,
  getAnimationVariant,
  getHeadingClass,
  getGridPatternClass,
  getTransitionClass,
} from "@/lib/design-system";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "田中 美咲",
    position: "株式会社テックイノベーション CEO",
    feedback: "チームの技術力と柔軟な対応には大変満足しています。プロジェクトの要件を完璧に理解し、期待以上の成果を上げてくれました。",
    avatar: "/images/avatars/misaki.jpg"
  },
  {
    name: "鈴木 健一",
    position: "グローバルコマース株式会社 CTO",
    feedback: "Webアプリケーションのパフォーマンスが大幅に改善され、ユーザーからの評価も上がりました。技術的な提案力が非常に高く、信頼できるパートナーです。",
    avatar: "/images/avatars/kenichi.jpg"
  },
  {
    name: "山田 優子",
    position: "スタートアップ・イノベーションズ 代表",
    feedback: "スタートアップの急速な成長に合わせて、柔軟にスケールできるシステムを構築していただき感謝しています。今後も長期的なパートナーとして協力していきたいと考えています。",
    avatar: "/images/avatars/yuko.jpg"
  },
  {
    name: "佐藤 龍太",
    position: "デジタルソリューションズ株式会社 部長",
    feedback: "UI/UXの改善提案から実装まで、ユーザー目線に立った素晴らしい仕事をしていただきました。社内からの評価も非常に高いです。",
    avatar: "/images/avatars/ryuta.jpg"
  }
];

export default function Testimonials() {
  const sectionStyles = getSectionClass('alternate');
  const fadeInUpVariant = getAnimationVariant('fadeInUp');
  const fadeInVariant = getAnimationVariant('fadeIn');

  return (
    <section 
      className={cn(
        sectionStyles.padding,
        sectionStyles.background,
        "relative isolate overflow-hidden"
      )}
      aria-labelledby="testimonials-heading"
    >
      {/* 背景エフェクト */}
      <div className="absolute inset-0 -z-10">
        {/* グラデーション背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        
        {/* グリッドパターン */}
        <div
          className={cn(
            getGridPatternClass(5),
            "absolute inset-0 opacity-50"
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
          viewport={{ once: true }}
          custom={0}
        >
          <h2 
            id="testimonials-heading"
            className={cn(
              getHeadingClass(2, { tracking: 'tight', align: 'center' }),
              "text-foreground relative inline-block"
            )}
          >
            <span className="relative inline-block">
              お客様の声
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
            多くのお客様にご満足いただいています
          </p>
        </motion.div>

        <motion.div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2",
            "gap-8 lg:gap-10 mx-auto mt-16 lg:mt-20",
            "max-w-7xl"
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
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
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
                <CardHeader className="pb-6 relative">
                  <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 opacity-10">
                    <QuoteIcon className="w-full h-full text-primary" aria-hidden="true" />
                  </div>
                  <QuoteIcon 
                    className={cn(
                      "w-10 h-10 text-primary/50",
                      "transform transition-transform duration-500",
                      "group-hover:scale-110 group-hover:text-primary/70"
                    )}
                    aria-hidden="true"
                  />
                </CardHeader>
                <CardContent className="space-y-8">
                  <motion.blockquote 
                    className="relative"
                    variants={fadeInVariant}
                    custom={index * 0.2}
                  >
                    <p className={cn(
                      "text-muted-foreground text-lg leading-relaxed",
                      "group-hover:text-foreground/90",
                      "transition-colors duration-300"
                    )}>
                      {testimonial.feedback}
                    </p>
                  </motion.blockquote>
                  
                  <footer className="flex items-center gap-4 relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Avatar className={cn(
                        "w-14 h-14",
                        "ring-2 ring-primary/20",
                        "group-hover:ring-primary/40",
                        "transition-all duration-300"
                      )}>
                        <AvatarImage 
                          src={testimonial.avatar} 
                          alt={`${testimonial.name}の写真`}
                          className="object-cover"
                        />
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {testimonial.name.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <div className="space-y-1">
                      <cite className={cn(
                        "not-italic font-semibold",
                        "text-foreground text-lg",
                        "group-hover:text-primary",
                        "transition-colors duration-300"
                      )}>
                        {testimonial.name}
                      </cite>
                      <p className={cn(
                        "text-sm text-muted-foreground",
                        "group-hover:text-foreground/80",
                        "transition-colors duration-300"
                      )}>
                        {testimonial.position}
                      </p>
                    </div>
                  </footer>
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
