"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Container } from "@/components/ui/container";
import {
  getSectionClass,
  getAnimationVariant,
  getHeadingClass,
  getGridPatternClass,
  getSpacing,
} from "@/lib/design-system";
import { cn } from "@/lib/utils";

export default function Contact() {
  const sectionStyles = getSectionClass('default');
  const fadeInUpVariant = getAnimationVariant('fadeInUp');

  return (
    <section 
      className={cn(sectionStyles.padding, sectionStyles.background)}
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div 
        className={getGridPatternClass(5)}
        aria-hidden="true"
      />

      <Container className={cn(sectionStyles.container, "max-w-2xl")}>
        <motion.div
          className="text-center"
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <h2 
            id="contact-heading"
            className={getHeadingClass(2, { tracking: 'tight', align: 'center' })}
          >
            お問い合わせ
          </h2>
          <p className={cn(
            "mt-4 text-muted-foreground",
            "text-base sm:text-lg"
          )}>
            ご質問やご相談がありましたら、お気軽にお問い合わせください。
          </p>
        </motion.div>

        <motion.form
          className={cn(
            "mt-8 space-y-6",
            `px-${getSpacing('spacing-4')}`,
            "sm:px-0"
          )}
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="お名前"
                className="w-full"
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="メールアドレス"
                className="w-full"
                required
              />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="メッセージ"
                className="w-full min-h-[120px]"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className={cn(
              "w-full",
              "text-base font-medium"
            )}
          >
            送信する
          </Button>
        </motion.form>

        <motion.p
          className={cn(
            "mt-8 text-center text-sm text-muted-foreground",
            "px-4 sm:px-0"
          )}
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.4}
        >
          通常2営業日以内にご返信いたします。
          <br />
          お急ぎの場合は、お電話でのお問い合わせもご検討ください。
        </motion.p>
      </Container>
    </section>
  );
}
