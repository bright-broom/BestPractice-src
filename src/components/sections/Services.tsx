"use client";

import { motion } from "framer-motion";
import { Laptop, Palette, Search, Server, Shield, Zap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  getSectionClass,
  getAnimationVariant,
  getHeadingClass,
  getGridPatternClass,
  getTransitionClass,
} from "@/lib/design-system";

const services = [
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "Webアプリケーション開発",
    description: "最新のフレームワークを使用した高品質なWebアプリケーションの開発",
    features: ["Next.js/React", "TypeScript", "APIインテグレーション"]
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UI/UXデザイン",
    description: "ユーザー中心の直感的で美しいインターフェースデザイン",
    features: ["レスポンシブデザイン", "アクセシビリティ対応", "プロトタイピング"]
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "バックエンド開発",
    description: "スケーラブルで安全なバックエンドシステムの構築",
    features: ["Node.js", "データベース設計", "セキュリティ対策"]
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "パフォーマンス最適化",
    description: "ウェブサイトの表示速度と処理効率の改善",
    features: ["レスポンス時間短縮", "画像最適化", "キャッシュ戦略"]
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "SEO対策",
    description: "検索エンジン最適化によるウェブサイトの視認性向上",
    features: ["メタデータ最適化", "構造化データ", "パフォーマンス改善"]
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "セキュリティ対策",
    description: "最新のセキュリティ基準に準拠したシステム保護",
    features: ["脆弱性診断", "認証・認可", "データ保護"]
  }
];

export default function Services() {
  const sectionStyles = getSectionClass('default');
  const fadeInUpVariant = getAnimationVariant('fadeInUp');
  const fadeInVariant = getAnimationVariant('fadeIn');

  return (
    <section
      className={cn(
        sectionStyles.padding,
        sectionStyles.background,
        "relative isolate overflow-hidden"
      )}
      aria-labelledby="services-heading"
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
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
        >
          <h2
            id="services-heading"
            className={cn(
              getHeadingClass(2, { tracking: 'tight', align: 'center' }),
              "text-foreground relative inline-block"
            )}
          >
            <span className="relative inline-block">
              サービス内容
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
            お客様のニーズに合わせた最適なソリューションを提供します
          </p>
        </motion.div>

        <motion.div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
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
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUpVariant}
              custom={index * 0.1}
              className="group relative"
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
                    {service.icon}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className={cn(
                      "text-xl font-semibold",
                      "text-foreground",
                      "group-hover:text-primary",
                      "group-hover:translate-x-1",
                      getTransitionClass('normal')
                    )}>
                      {service.title}
                    </h3>
                    <p className={cn(
                      "text-muted-foreground",
                      "leading-relaxed",
                      "group-hover:text-foreground/80",
                      getTransitionClass('normal')
                    )}>
                      {service.description}
                    </p>
                  </div>
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={fadeInVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index * 0.2}
                  >
                    {service.features.map((feature, featureIndex) => (
                      <Badge
                        key={feature}
                        variant="secondary"
                        className={cn(
                          "text-sm font-medium",
                          "bg-primary/5 text-primary/90",
                          "hover:bg-primary/10",
                          "border border-primary/10",
                          "backdrop-blur-sm",
                          "transform transition-all duration-300",
                          "hover:scale-105",
                          "hover:shadow-sm",
                          getTransitionClass('normal')
                        )}
                      >
                        {feature}
                      </Badge>
                    ))}
                  </motion.div>
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
