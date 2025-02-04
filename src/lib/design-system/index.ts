/**
 * デザインシステムのメインエントリーポイント
 */

// 型定義のエクスポート
export * from "./types";

// テーマユーティリティのエクスポート
export * from "./utils/theme";

// アニメーションユーティリティのエクスポート
export * from "./utils/animation";

/**
 * デザインシステムのバージョン情報
 */
export const VERSION = "1.0.0";

/**
 * デザインシステムの設定
 */
export const DESIGN_SYSTEM_CONFIG = {
  /**
   * ブレークポイントの設定
   */
  breakpoints: {
    xs: "320px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  /**
   * アニメーションの設定
   */
  animation: {
    durations: {
      fast: "150ms",
      normal: "200ms",
      slow: "300ms",
    },
    timingFunctions: {
      default: "cubic-bezier(0.4, 0, 0.2, 1)",
      bounce: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      elastic: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
  },

  /**
   * フォントファミリーの設定
   */
  fontFamily: {
    sans: 'var(--font-sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif)',
    mono: 'var(--font-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace)',
  },

  /**
   * カラーパレットのテーマ設定
   */
  colors: {
    primary: "hsl(var(--primary))",
    secondary: "hsl(var(--secondary))",
    accent: "hsl(var(--accent))",
    muted: "hsl(var(--muted))",
    destructive: "hsl(var(--destructive))",
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
    border: "hsl(var(--border))",
    ring: "hsl(var(--ring))",
  },

  /**
   * セクションの設定
   */
  sections: {
    maxWidth: "1440px",
    padding: {
      sm: "1rem",
      md: "2rem",
      lg: "4rem",
    },
  },
} as const;

/**
 * デザインシステムのメタデータ
 */
export const DESIGN_SYSTEM_METADATA = {
  name: "Best Practice Design System",
  description: "モダンなReactアプリケーション向けのデザインシステム",
  version: VERSION,
  homepage: "https://github.com/yourusername/best-practice",
  license: "MIT",
  author: {
    name: "Your Name",
    email: "your.email@example.com",
  },
} as const;