"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  getSectionClass,
  getAnimationVariant,
  getHeadingClass,
  getGridPatternClass,
  getTransitionClass,
} from "@/lib/design-system";

const pricingPlans = [
  {
    name: "スタンダード",
    price: "¥19,800",
    period: "月額",
    description: "中小規模のプロジェクトに最適なプラン",
    features: [
      "5つまでのプロジェクト管理",
      "基本的なテクニカルサポート",
      "週次進捗レポート",
      "チャットサポート（平日9-18時）",
      "基本的なセキュリティ診断"
    ],
    cta: "無料で試す",
    popular: false
  },
  {
    name: "プロフェッショナル",
    price: "¥49,800",
    period: "月額",
    description: "大規模プロジェクトや複数チームでの利用に最適",
    features: [
      "無制限のプロジェクト管理",
      "24時間365日のテクニカルサポート",
      "リアルタイム進捗管理",
      "優先的なチャット・電話サポート",
      "高度なセキュリティ診断",
      "カスタマイズ可能なレポート",
      "専任のアカウントマネージャー"
    ],
    cta: "今すぐ始める",
    popular: true
  },
  {
    name: "エンタープライズ",
    price: "応相談",
    period: "",
    description: "カスタマイズされた包括的なソリューションが必要な企業向け",
    features: [
      "完全カスタマイズ可能なソリューション",
      "専任の開発・運用チーム",
      "SLA保証付きサポート",
      "オンサイトトレーニング",
      "セキュリティ監査・コンプライアンス対応",
      "システム統合サポート",
      "ホワイトラベル対応"
    ],
    cta: "お問い合わせ",
    popular: false
  }
];

export default function Pricing() {
  const sectionStyles = getSectionClass('feature');
  const fadeInUpVariant = getAnimationVariant('fadeInUp');

  return (
    <section 
      className={cn(
        sectionStyles.padding,
        sectionStyles.background,
        "relative isolate overflow-hidden"
      )}
      aria-labelledby="pricing-heading"
    >
      {/* 背景エフェクト */}
      <div className="absolute inset-0 -z-10">
        {/* グラデーション背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background opacity-90" />
        
        {/* グリッドパターン */}
        <div
          className={cn(
            getGridPatternClass(3),
            "absolute inset-0"
          )}
          aria-hidden="true"
        />
        
        {/* デコレーティブな背景ブラー */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 blur-3xl opacity-30"
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
            id="pricing-heading"
            className={cn(
              getHeadingClass(2, { tracking: 'tight', align: 'center' }),
              "text-primary-foreground relative inline-block"
            )}
          >
            <span className="relative inline-block">
              料金プラン
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-primary-foreground/30 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </h2>
          <p className={cn(
            "max-w-2xl mx-auto",
            "text-body-large text-primary-foreground/80",
            "leading-relaxed"
          )}>
            あなたのビジネスに最適なプランをお選びください
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 mx-auto mt-16 max-w-7xl lg:grid-cols-3 lg:gap-12 lg:mt-20"
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
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={fadeInUpVariant}
              custom={index * 0.1}
              className="relative flex group"
            >
              <Card className={cn(
                "flex flex-col w-full",
                "backdrop-blur-sm bg-card/30",
                "border border-border/50",
                "transition-all duration-500",
                "hover:shadow-elevation-3 hover:-translate-y-2",
                "hover:bg-card/50",
                plan.popular ? "border-primary ring-2 ring-primary/20" : "hover:border-primary/20",
                getTransitionClass('normal')
              )}>
                {plan.popular && (
                  <div className="absolute -top-4 left-0 w-full flex justify-center">
                    <Badge
                      className={cn(
                        "bg-primary text-primary-foreground",
                        "hover:bg-primary/90",
                        "shadow-lg",
                        "px-4 py-1",
                        "text-sm font-medium",
                        "rounded-full",
                        "transform transition-transform duration-300",
                        "group-hover:scale-110"
                      )}
                      aria-label="人気のプラン"
                    >
                      おすすめ
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <h3 className={cn(
                    "text-xl font-semibold",
                    "text-foreground",
                    "group-hover:text-primary",
                    "transition-colors duration-300"
                  )}>
                    {plan.name}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center mt-6 gap-x-1">
                    <span className={cn(
                      "text-4xl md:text-5xl font-bold tracking-tight",
                      "text-foreground",
                      "group-hover:text-primary",
                      "transition-colors duration-300"
                    )}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-sm font-semibold text-muted-foreground">
                        /{plan.period}
                      </span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex-grow">
                  <ul className="space-y-4 text-sm leading-6">
                    {plan.features.map((feature) => (
                      <motion.li 
                        key={feature} 
                        className="flex items-start gap-x-3 group/item"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className={cn(
                          "flex-shrink-0 w-5 h-5 mt-1",
                          "rounded-full",
                          "flex items-center justify-center",
                          "bg-primary/10 text-primary",
                          "group-hover/item:bg-primary/20",
                          "transition-colors duration-300"
                        )}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className={cn(
                          "text-muted-foreground",
                          "group-hover/item:text-foreground",
                          "transition-colors duration-300"
                        )}>
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-6">
                  <Button
                    className={cn(
                      "w-full rounded-full",
                      "text-base font-medium",
                      "shadow-lg hover:shadow-xl",
                      "transition-all duration-300",
                      "hover:scale-105",
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
                    )}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>

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
