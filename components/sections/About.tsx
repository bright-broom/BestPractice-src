"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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

export default function About() {
  return (
    <section 
      className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white"
      aria-labelledby="about-heading"
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
            id="about-heading"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            私たちについて
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-lg leading-8 text-gray-600">
            スケーラブルで効率的なウェブアプリケーションの開発に情熱を注ぐ
            プロフェッショナルチームです
          </p>
        </motion.div>

        <motion.div
          className="grid max-w-5xl grid-cols-1 gap-6 mx-auto mt-16 sm:grid-cols-2 lg:mt-20"
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.3 + index * 0.1}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-4">
                  <div 
                    className={cn(
                      "inline-flex items-center justify-center w-12 h-12",
                      "text-primary bg-primary/10 rounded-xl"
                    )}
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
