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

  return (
    <section 
      className={cn(sectionStyles.padding, sectionStyles.background)}
      aria-labelledby="testimonials-heading"
    >
      <div 
        className={getGridPatternClass(10)}
        aria-hidden="true"
      />
      
      <Container className={sectionStyles.container}>
        <motion.div
          className="text-center"
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <h2 
            id="testimonials-heading"
            className={getHeadingClass(2, { tracking: 'tight', align: 'center' })}
          >
            お客様の声
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-lg leading-8 text-muted-foreground">
            多くのお客様にご満足いただいています
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 mx-auto mt-16 max-w-7xl sm:grid-cols-2 lg:mt-20"
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.3 + index * 0.1}
            >
              <Card className={cn(
                "h-full bg-card text-card-foreground border-border",
                "hover:shadow-lg",
                getTransitionClass('normal')
              )}>
                <CardHeader className="pb-4">
                  <QuoteIcon className="w-8 h-8 text-primary/50" aria-hidden="true" />
                </CardHeader>
                <CardContent>
                  <blockquote className="space-y-6">
                    <p className="text-muted-foreground">
                      {testimonial.feedback}
                    </p>
                    <footer className="flex items-center gap-4">
                      <Avatar className="border-2 border-border">
                        <AvatarImage 
                          src={testimonial.avatar} 
                          alt={`${testimonial.name}の写真`}
                        />
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {testimonial.name.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-sm">
                        <cite className="not-italic font-semibold text-foreground">
                          {testimonial.name}
                        </cite>
                        <p className="mt-1 text-muted-foreground">
                          {testimonial.position}
                        </p>
                      </div>
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
