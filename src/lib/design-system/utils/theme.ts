/**
 * デザインシステムのテーマユーティリティ
 */

import { cn } from "@/lib/utils";
import type {
  SpacingKey,
  StyleVariant,
  ComponentSize,
  SectionVariant,
  HeadingOptions,
  ElevationTheme,
  TypographyTheme,
  AnimationKey,
  SectionTheme,
  AnimationTheme
} from "../types";

/**
 * スペーシングクラスを生成
 */
export const getSpacing = (key: SpacingKey): string => key;

/**
 * エレベーション（シャドウ）クラスを生成
 */
export const getElevation = (key: keyof ElevationTheme): string => `shadow-${key}`;

/**
 * タイポグラフィクラスを生成
 */
export const getTypography = (key: keyof TypographyTheme['fontSize']): string => `text-${key}`;

/**
 * アニメーションクラスを生成
 */
export const getAnimation = (key: AnimationKey): string => `animate-${key}`;

/**
 * チャートカラークラスを生成
 */
export const getChartColor = (index: number): string => {
  const colors = ['chart-1', 'chart-2', 'chart-3', 'chart-4', 'chart-5'];
  return `text-${colors[index % colors.length]}`;
};

/**
 * バリアントに基づいてカラークラスを生成
 */
export const getColorVariant = (variant: StyleVariant): {
  background: string;
  text: string;
  hover: string;
  border?: string;
} => {
  const variants = {
    primary: {
      background: 'bg-primary',
      text: 'text-primary-foreground',
      hover: 'hover:bg-primary/90',
      border: 'border-primary'
    },
    secondary: {
      background: 'bg-secondary',
      text: 'text-secondary-foreground',
      hover: 'hover:bg-secondary/80',
      border: 'border-secondary'
    },
    accent: {
      background: 'bg-accent',
      text: 'text-accent-foreground',
      hover: 'hover:bg-accent/80',
      border: 'border-accent'
    },
    muted: {
      background: 'bg-muted',
      text: 'text-muted-foreground',
      hover: 'hover:bg-muted/60',
      border: 'border-muted'
    },
    destructive: {
      background: 'bg-destructive',
      text: 'text-destructive-foreground',
      hover: 'hover:bg-destructive/90',
      border: 'border-destructive'
    }
  };

  return variants[variant];
};

/**
 * コンポーネントサイズに基づいてパディングとフォントサイズを生成
 */
export const getSizeClasses = (size: ComponentSize): {
  padding: string;
  fontSize: string;
} => {
  const sizes = {
    sm: {
      padding: 'px-3 py-1.5',
      fontSize: 'text-body-small'
    },
    md: {
      padding: 'px-4 py-2',
      fontSize: 'text-body-base'
    },
    lg: {
      padding: 'px-6 py-3',
      fontSize: 'text-body-large'
    }
  };

  return sizes[size];
};

/**
 * インタラクティブな要素用のベースクラスを生成
 */
export const getInteractiveBaseClass = (): string => [
  'transition-all',
  'duration-200',
  'ease-in-out',
  'focus-visible:outline-none',
  'focus-visible:ring-2',
  'focus-visible:ring-ring',
  'focus-visible:ring-offset-2'
].join(' ');

/**
 * セクションスタイルを生成
 */
export const getSectionClass = (variant: SectionVariant): SectionTheme => {
  const variants: Record<SectionVariant, SectionTheme> = {
    hero: {
      padding: 'min-h-[85vh] flex items-center justify-center overflow-hidden',
      background: 'bg-gradient-to-b from-gray-50 via-white to-gray-50',
      container: 'relative'
    },
    default: {
      padding: 'py-16 md:py-24',
      background: 'bg-background',
      container: 'relative'
    },
    alternate: {
      padding: 'py-16 md:py-24',
      background: 'bg-muted/30',
      container: 'relative'
    },
    feature: {
      padding: 'py-20 md:py-32',
      background: 'bg-primary text-primary-foreground',
      container: 'relative'
    }
  };

  return variants[variant];
};

/**
 * ヘッディングスタイルを生成
 */
export const getHeadingClass = (
  level: 1 | 2 | 3 | 4,
  { responsive = true, tracking = 'normal', align = 'left' }: HeadingOptions = {}
): string => {
  const baseSize = {
    1: 'text-4xl',
    2: 'text-3xl',
    3: 'text-2xl',
    4: 'text-xl'
  };

  const responsiveSize = {
    1: 'sm:text-5xl md:text-6xl lg:text-7xl',
    2: 'sm:text-4xl md:text-5xl',
    3: 'sm:text-3xl md:text-4xl',
    4: 'sm:text-2xl md:text-3xl'
  };

  const trackingClass = {
    tight: 'tracking-tight',
    tighter: 'tracking-tighter',
    normal: 'tracking-normal'
  };

  return cn(
    'font-bold',
    baseSize[level],
    responsive ? responsiveSize[level] : '',
    trackingClass[tracking],
    `text-${align}`
  );
};