"use client";

import { motion } from "framer-motion";
import { Laptop, Palette, Search, Server, Shield, Zap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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

export default function Services() {
  return (
    <section 
      className="relative py-24 bg-gradient-to-b from-white to-gray-50"
      aria-labelledby="services-heading"
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
            id="services-heading"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            サービス内容
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-lg leading-8 text-gray-600">
            お客様のニーズに合わせた最適なソリューションを提供します
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 mx-auto mt-16 max-w-7xl sm:grid-cols-2 lg:grid-cols-3 lg:mt-20"
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.3 + index * 0.1}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div 
                    className={cn(
                      "inline-flex items-center justify-center w-12 h-12",
                      "text-primary bg-primary/10 rounded-xl"
                    )}
                    aria-hidden="true"
                  >
                    {service.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-gray-600">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {service.features.map((feature) => (
                      <Badge 
                        key={feature}
                        variant="secondary"
                        className="text-sm font-medium bg-primary/5 text-primary hover:bg-primary/10"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
