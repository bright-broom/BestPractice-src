"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  getSectionClass,
  getAnimationVariant,
  getHeadingClass,
  getGridPatternClass,
  getTransitionClass,
} from "@/lib/design-system";
import { cn } from "@/lib/utils";

const faqs = [
  {
    category: "サービスについて",
    items: [
      {
        question: "どのような技術スタックを使用していますか？",
        answer: "Next.js、TypeScript、Tailwind CSSなど、最新のモダンな技術スタックを採用しています。プロジェクトの要件に応じて、最適な技術を選択し、スケーラブルで保守性の高いソリューションを提供します。"
      },
      {
        question: "開発期間はどのくらいかかりますか？",
        answer: "プロジェクトの規模や複雑さによって異なりますが、一般的な開発期間は2〜6ヶ月程度です。具体的な期間は、要件定義の段階で詳細な見積もりをご提示させていただきます。"
      }
    ]
  },
  {
    category: "料金について",
    items: [
      {
        question: "見積もりは無料ですか？",
        answer: "はい、初回のご相談と見積もりは無料です。プロジェクトの要件をお伺いした上で、具体的なお見積もりをご提示させていただきます。"
      },
      {
        question: "支払い方法は何がありますか？",
        answer: "銀行振込、クレジットカード決済に対応しています。プロジェクトの規模に応じて、分割払いなどの柔軟なお支払い方法もご相談可能です。"
      }
    ]
  },
  {
    category: "サポートについて",
    items: [
      {
        question: "開発後のサポート体制はどうなっていますか？",
        answer: "ご契約いただいているプランに応じて、継続的なメンテナンスとサポートを提供しています。24時間365日の緊急対応から、定期的なアップデートまで、お客様のニーズに合わせたサポート体制を整えています。"
      },
      {
        question: "トレーニングやドキュメントは提供されますか？",
        answer: "はい、システムの利用マニュアルや運用ドキュメントを提供します。また、管理者向けのトレーニングセッションも実施可能です。"
      }
    ]
  }
];

export default function FAQ() {
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
      aria-labelledby="faq-heading"
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
            id="faq-heading"
            className={cn(
              getHeadingClass(2, { tracking: 'tight', align: 'center' }),
              "text-foreground relative inline-block"
            )}
          >
            <span className="relative inline-block">
              よくある質問
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
            お客様からよくいただくご質問をまとめました
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto mt-16 space-y-8 lg:mt-20"
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
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={fadeInUpVariant}
              custom={categoryIndex * 0.1}
              className="group"
            >
              <Card className={cn(
                "relative isolate overflow-hidden",
                "backdrop-blur-sm bg-card/30",
                "border border-border/50",
                "transition-all duration-500",
                "hover:shadow-elevation-2",
                "hover:bg-card/50",
                "hover:border-primary/20",
                getTransitionClass('normal')
              )}>
                <CardHeader className="pb-4">
                  <h3 className={cn(
                    getHeadingClass(3, { tracking: 'normal' }),
                    "group-hover:text-primary",
                    "transition-colors duration-300"
                  )}>
                    {category.category}
                  </h3>
                </CardHeader>
                <CardContent>
                  <Accordion 
                    type="single" 
                    collapsible 
                    className="w-full space-y-2"
                  >
                    {category.items.map((faq, index) => (
                      <AccordionItem 
                        key={faq.question}
                        value={`item-${categoryIndex}-${index}`}
                        className={cn(
                          "px-4 rounded-lg",
                          "border border-border/50",
                          "transition-all duration-300",
                          "data-[state=open]:bg-primary/5",
                          "data-[state=open]:border-primary/20",
                          "hover:border-primary/20",
                          "focus-within:border-primary/40",
                          "focus-within:ring-2",
                          "focus-within:ring-primary/20",
                          getTransitionClass('fast')
                        )}
                      >
                        <AccordionTrigger className={cn(
                          "text-left",
                          "hover:no-underline",
                          "[&[data-state=open]>div]:text-primary",
                          "py-4"
                        )}>
                          <motion.div
                            className={cn(
                              "text-base font-medium text-foreground",
                              "transition-colors duration-300",
                              "hover:text-primary"
                            )}
                            variants={fadeInVariant}
                            custom={index * 0.1}
                          >
                            {faq.question}
                          </motion.div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-4">
                          <motion.p 
                            className={cn(
                              "text-muted-foreground",
                              "leading-relaxed"
                            )}
                            variants={fadeInVariant}
                            custom={index * 0.2}
                            initial="hidden"
                            animate="visible"
                          >
                            {faq.answer}
                          </motion.p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
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