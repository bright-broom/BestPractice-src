/**
 * アニメーション関連のユーティリティ関数
 */

import type { Variants } from "framer-motion";
import type { AnimationTheme } from "../types";

/**
 * アニメーションバリアントを生成
 */
export const getAnimationVariant = (type: 'fadeInUp' | 'fadeIn' | 'slideIn'): Variants => {
  const variants = {
    fadeInUp: {
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
    } as Variants,

    fadeIn: {
      hidden: { opacity: 0 },
      visible: (delay: number) => ({
        opacity: 1,
        transition: {
          delay,
          duration: 0.8,
          ease: "easeOut",
        },
      }),
    } as Variants,

    slideIn: {
      hidden: { opacity: 0, x: -20 },
      visible: (delay: number) => ({
        opacity: 1,
        x: 0,
        transition: {
          delay,
          duration: 0.8,
          ease: "easeOut",
        },
      }),
    } as Variants,
  };

  return variants[type];
};

/**
 * トランジション・アニメーションクラスを生成
 */
export const getTransitionClass = (duration: keyof AnimationTheme['durations'] = 'normal'): string => {
  const durationMap = {
    fast: '150',
    normal: '200',
    slow: '300'
  };

  return `transition-all duration-${durationMap[duration]} ease-in-out`;
};

/**
 * グリッドパターンの背景を生成
 */
export const getGridPatternClass = (opacity = 20): string => 
  `absolute inset-0 bg-[url('/images/grid.svg')] opacity-${opacity}`;

/**
 * カスタムスクロールバークラスを生成
 */
export const getScrollbarClass = (): string => [
  'scrollbar-thin',
  'scrollbar-track-transparent',
  'scrollbar-thumb-muted',
  'hover:scrollbar-thumb-muted/80'
].join(' ');