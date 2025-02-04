/**
 * デザインシステムのコアとなる型定義
 */

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
export interface ColorTheme {
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
export interface ChartColorTheme {
  'chart-1': string;
  'chart-2': string;
  'chart-3': string;
  'chart-4': string;
  'chart-5': string;
}

// タイポグラフィの型定義
export interface TypographyTheme {
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
export type SpacingTheme = {
  [K in SpacingKey]: string;
};

export type SpacingKey =
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
export interface ElevationTheme {
  'elevation-1': string;
  'elevation-2': string;
  'elevation-3': string;
  'elevation-4': string;
}

// アニメーションの型定義
export interface AnimationTheme {
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
export interface RadiusTheme {
  none: string;
  sm: string;
  md: string;
  lg: string;
  full: string;
}

// ブレークポイントの型定義
export interface BreakpointTheme {
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

// セクションの型定義
export interface SectionTheme {
  padding: string;
  background: string;
  container: string;
}

// セクションバリアントの型定義
export type SectionVariant = 'hero' | 'default' | 'alternate' | 'feature';

// ヘッディングオプションの型定義
export interface HeadingOptions {
  responsive?: boolean;
  tracking?: 'tight' | 'tighter' | 'normal';
  align?: 'left' | 'center' | 'right';
}