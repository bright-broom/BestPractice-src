/**
 * デザインシステムのユーティリティ関数
 */

// スペーシングの型定義
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
type ElevationKey = 'elevation-1' | 'elevation-2' | 'elevation-3' | 'elevation-4';

// タイポグラフィの型定義
type TypographyKey =
  | 'heading-1'
  | 'heading-2'
  | 'heading-3'
  | 'heading-4'
  | 'body-large'
  | 'body-base'
  | 'body-small'
  | 'body-xs';

// アニメーションの型定義
type AnimationKey = 'fade-in' | 'slide-up' | 'slide-down' | 'scale';

// スタイルの組み合わせ型
export type StyleVariant = 'primary' | 'secondary' | 'accent' | 'muted' | 'destructive';

// コンポーネントのサイズ
export type ComponentSize = 'sm' | 'md' | 'lg';

/**
 * スペーシングクラスを生成
 */
export const getSpacing = (key: SpacingKey): string => {
  return key;
};

/**
 * エレベーション（シャドウ）クラスを生成
 */
export const getElevation = (key: ElevationKey): string => {
  return `shadow-${key}`;
};

/**
 * タイポグラフィクラスを生成
 */
export const getTypography = (key: TypographyKey): string => {
  return `text-${key}`;
};

/**
 * アニメーションクラスを生成
 */
export const getAnimation = (key: AnimationKey): string => {
  return `animate-${key}`;
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
 * レスポンシブコンテナクラスを生成
 */
export const getContainerClass = (fluid?: boolean): string => {
  return `${fluid ? 'w-full' : 'container'} mx-auto px-4 sm:px-6 lg:px-8`;
};

/**
 * フォーカスリングクラスを生成
 */
export const getFocusRingClass = (): string => {
  return 'focus-ring';
};

/**
 * インタラクティブな要素用のクラスを生成
 */
export const getInteractiveClass = (): string => {
  return 'interactive-scale';
};

/**
 * 標準トランジションクラスを生成
 */
export const getTransitionClass = (): string => {
  return 'transition-standard';
};