/**
 * 共通型定義
 */

// コンポーネントの基本プロパティ
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

// スタイルバリアントの型
export type StyleVariant = 'primary' | 'secondary' | 'accent' | 'muted' | 'destructive';

// コンポーネントサイズの型
export type Size = 'sm' | 'md' | 'lg';

// アニメーションの型
export type Animation = 'fade' | 'slide' | 'scale' | 'bounce';

// 方向の型
export type Direction = 'top' | 'right' | 'bottom' | 'left';

// アラインメントの型
export type Alignment = 'start' | 'center' | 'end';

// ステータスの型
export type Status = 'idle' | 'loading' | 'success' | 'error';

// レスポンシブブレークポイントの型
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';