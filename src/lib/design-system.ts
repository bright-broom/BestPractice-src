/**
 * デザインシステムの基本設定と型定義
 */
import { cn } from "@/lib/utils";
import type { Variants } from "framer-motion";

// テーマの型定義
export interface Theme {
  colors: ColorTheme;
  typography: TypographyTheme;
  spacing: SpacingTheme;
  elevation: ElevationTheme;
  animation: AnimationTheme;
  borderRadius: RadiusTheme;
  breakpoints: BreakpointTheme;
  charts: ChartColorTheme;
}

// カラーテーマの型定義
interface ColorTheme {
  primary: string;
  secondary: string;
  accent: string;
  muted: string;
  destructive: string;
  background: string;
  foreground: string;
  border: string;
  ring: string;
  card: string;
  'card-foreground': string;
  popover: string;
  'popover-foreground': string;
}

// チャートカラーの型定義
interface ChartColorTheme {
  'chart-1': string;
  'chart-2': string;
  'chart-3': string;
  'chart-4': string;
  'chart-5': string;
}

// タイポグラフィの型定義
interface TypographyTheme {
  fontFamily: {
    sans: string;
    mono: string;
  };
  fontSize: {
    'heading-1': [string, { lineHeight: string; letterSpacing: string; fontWeight: string }];
    'heading-2': [string, { lineHeight: string; letterSpacing: string; fontWeight: string }];
    'heading-3': [string, { lineHeight: string; letterSpacing: string; fontWeight: string }];
    'heading-4': [string, { lineHeight: string; fontWeight: string }];
    'body-large': [string, { lineHeight: string }];
    'body-base': [string, { lineHeight: string }];
    'body-small': [string, { lineHeight: string }];
    'body-xs': [string, { lineHeight: string }];
  };
}

// スペーシングの型定義
type SpacingTheme = {
  [K in SpacingKey]: string;
};

type SpacingKey =
  | 'spacing-1'
  | 'spacing-2'
  | 'spacing-3'
  | 'spacing-4'
  | 'spacing-6'
  | 'spacing-8'
  | 'spacing-12'
  | 'spacing-16'
  | 'spacing-20'
  | 'spacing-24'
  | 'spacing-32';

// エレベーションの型定義
interface ElevationTheme {
  'elevation-1': string;
  'elevation-2': string;
  'elevation-3': string;
  'elevation-4': string;
}

// アニメーションの型定義
interface AnimationTheme {
  durations: {
    fast: string;
    normal: string;
    slow: string;
  };
  timingFunctions: {
    default: string;
    bounce: string;
    elastic: string;
  };
  animations: {
    'fade-in': string;
    'slide-up': string;
    'slide-down': string;
    'scale': string;
  };
}

// 境界半径の型定義
interface RadiusTheme {
  none: string;
  sm: string;
  md: string;
  lg: string;
  full: string;
}

// ブレークポイントの型定義
interface BreakpointTheme {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

// コンポーネントのスタイルバリアント
export type StyleVariant = 'primary' | 'secondary' | 'accent' | 'muted' | 'destructive';

// コンポーネントのサイズ
export type ComponentSize = 'sm' | 'md' | 'lg';

// アニメーションの種類
export type AnimationKey = 'fade-in' | 'slide-up' | 'slide-down' | 'scale';

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
 * セクションの型定義
 */
export interface SectionTheme {
  padding: string;
  background: string;
  container: string;
}

/**
 * セクションバリアントの型定義
 */
export type SectionVariant = 'hero' | 'default' | 'alternate' | 'feature';

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
 * ヘッディングスタイルを生成
 */
export interface HeadingOptions {
  responsive?: boolean;
  tracking?: 'tight' | 'tighter' | 'normal';
  align?: 'left' | 'center' | 'right';
}

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

/**
 * グリッドパターンの背景を生成
 */
export const getGridPatternClass = (opacity = 20): string => 
  `absolute inset-0 bg-[url('/images/grid.svg')] opacity-${opacity}`;

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
 * カスタムスクロールバークラスを生成
 */
export const getScrollbarClass = (): string => [
  'scrollbar-thin',
  'scrollbar-track-transparent',
  'scrollbar-thumb-muted',
  'hover:scrollbar-thumb-muted/80'
].join(' ');