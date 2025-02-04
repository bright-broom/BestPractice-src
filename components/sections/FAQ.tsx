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

  return (
    <section 
      className={cn(sectionStyles.padding, sectionStyles.background)}
      aria-labelledby="faq-heading"
    >
      <div 
        className={getGridPatternClass(5)}
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
            id="faq-heading"
            className={getHeadingClass(2, { tracking: 'tight', align: 'center' })}
          >
            よくある質問
          </h2>
          <p className={cn(
            "mt-6 text-lg leading-8 text-muted-foreground",
            "max-w-2xl mx-auto"
          )}>
            お客様からよくいただくご質問をまとめました
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto mt-16 space-y-8 lg:mt-20"
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
        >
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.3 + categoryIndex * 0.1}
            >
              <Card className={cn(
                "border-border shadow-sm",
                "bg-card text-card-foreground",
                getTransitionClass('normal')
              )}>
                <CardHeader className="pb-4">
                  <h3 className={getHeadingClass(3, { tracking: 'normal' })}>
                    {category.category}
                  </h3>
                </CardHeader>
                <CardContent>
                  <Accordion 
                    type="single" 
                    collapsible 
                    className="w-full"
                  >
                    {category.items.map((faq, index) => (
                      <AccordionItem 
                        key={faq.question}
                        value={`item-${categoryIndex}-${index}`}
                        className={cn(
                          "border-border",
                          "last:border-0",
                          getTransitionClass('fast'),
                          "data-[state=open]:bg-muted/50"
                        )}
                      >
                        <AccordionTrigger className={cn(
                          "text-left hover:no-underline",
                          "text-foreground hover:text-primary"
                        )}>
                          <span className="text-base font-medium">
                            {faq.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground">
                            {faq.answer}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}