"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function Pricing() {
  return (
    <section 
      className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white"
      aria-labelledby="pricing-heading"
    >
      <div 
        className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"
        aria-hidden="true"
      />
      
      <Container>
        <motion.div
          className="text-center"
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <h2 
            id="pricing-heading"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            料金プラン
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-lg leading-8 text-gray-600">
            あなたのビジネスに最適なプランをお選びください
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 mx-auto mt-16 max-w-7xl lg:grid-cols-3 lg:gap-12 lg:mt-20"
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.3 + index * 0.1}
              className="relative flex"
            >
              <Card className={cn(
                "flex flex-col w-full transition-all duration-300 hover:shadow-lg",
                plan.popular && "border-primary ring-2 ring-primary/20"
              )}>
                {plan.popular && (
                  <Badge
                    className="absolute right-4 -top-2 bg-primary hover:bg-primary/90"
                    aria-label="人気のプラン"
                  >
                    人気
                  </Badge>
                )}
                
                <CardHeader>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {plan.name}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline mt-6 gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-sm font-semibold leading-6 text-gray-600">
                        /{plan.period}
                      </span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex-grow">
                  <ul className="space-y-3 text-sm leading-6 text-gray-600">
                    {plan.features.map((feature) => (
                      <li 
                        key={feature} 
                        className="flex items-start gap-x-3"
                      >
                        <Check className="flex-shrink-0 w-5 h-5 text-primary mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    className={cn(
                      "w-full",
                      plan.popular
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    )}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
