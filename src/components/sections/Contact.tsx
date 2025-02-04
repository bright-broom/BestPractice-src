"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Container } from "@/components/ui/container";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  getSectionClass,
  getAnimationVariant,
  getHeadingClass,
  getGridPatternClass,
  getSpacing,
  getTransitionClass,
} from "@/lib/design-system";
import { cn } from "@/lib/utils";

export default function Contact() {
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
      id="contact"
      aria-labelledby="contact-heading"
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

      <Container className={cn(sectionStyles.container, "max-w-2xl")}>
        <motion.div
          className="text-center space-y-8"
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <h2 
            id="contact-heading"
            className={cn(
              getHeadingClass(2, { tracking: 'tight', align: 'center' }),
              "text-foreground relative inline-block"
            )}
          >
            <span className="relative inline-block">
              お問い合わせ
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
            ご質問やご相談がありましたら、お気軽にお問い合わせください。
          </p>
        </motion.div>

        <motion.div
          className="mt-12"
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
        >
          <Card className={cn(
            "relative isolate overflow-hidden",
            "backdrop-blur-sm bg-card/30",
            "border border-border/50",
            "transition-all duration-500",
            "hover:shadow-elevation-2",
            "hover:bg-card/50",
            "hover:border-primary/20",
            "p-6 sm:p-8",
            getTransitionClass('normal')
          )}>
            <form className="space-y-8">
              <motion.div 
                className="space-y-6"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                <motion.div 
                  className="space-y-2"
                  variants={fadeInVariant}
                >
                  <Label 
                    htmlFor="name"
                    className={cn(
                      "text-sm font-medium",
                      "text-foreground/90"
                    )}
                  >
                    お名前
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="山田 太郎"
                    className={cn(
                      "w-full",
                      "bg-background/50",
                      "border-border/50",
                      "focus:border-primary/30",
                      "focus:ring-primary/20",
                      "placeholder:text-muted-foreground/50"
                    )}
                    required
                  />
                </motion.div>

                <motion.div 
                  className="space-y-2"
                  variants={fadeInVariant}
                >
                  <Label 
                    htmlFor="email"
                    className={cn(
                      "text-sm font-medium",
                      "text-foreground/90"
                    )}
                  >
                    メールアドレス
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your-email@example.com"
                    className={cn(
                      "w-full",
                      "bg-background/50",
                      "border-border/50",
                      "focus:border-primary/30",
                      "focus:ring-primary/20",
                      "placeholder:text-muted-foreground/50"
                    )}
                    required
                  />
                </motion.div>

                <motion.div 
                  className="space-y-2"
                  variants={fadeInVariant}
                >
                  <Label 
                    htmlFor="message"
                    className={cn(
                      "text-sm font-medium",
                      "text-foreground/90"
                    )}
                  >
                    メッセージ
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="ご用件をご記入ください"
                    className={cn(
                      "w-full min-h-[160px]",
                      "bg-background/50",
                      "border-border/50",
                      "focus:border-primary/30",
                      "focus:ring-primary/20",
                      "placeholder:text-muted-foreground/50",
                      "resize-y"
                    )}
                    required
                  />
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeInVariant}
                className="pt-2"
              >
                <Button
                  type="submit"
                  size="lg"
                  className={cn(
                    "w-full rounded-full",
                    "text-base font-medium",
                    "bg-primary text-primary-foreground",
                    "hover:bg-primary/90",
                    "shadow-lg hover:shadow-xl",
                    "transform transition-all duration-300",
                    "hover:scale-[1.02]"
                  )}
                >
                  送信する
                </Button>
              </motion.div>
            </form>

            {/* カードのホバーエフェクト用の装飾 */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Card>
        </motion.div>

        <motion.div
          className={cn(
            "mt-8 text-center",
            "text-sm text-muted-foreground",
            "space-y-2"
          )}
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.4}
        >
          <p>通常2営業日以内にご返信いたします。</p>
          <p className="text-primary/70">
            お急ぎの場合は、お電話でのお問い合わせもご検討ください。
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
