# デザインシステムガイド

## 概要

このデザインシステムは、一貫性のある視覚言語とコンポーネントの再利用を実現するために設計されています。システムは以下の主要な要素で構成されています：

- カラーシステム
- タイポグラフィ
- スペーシング
- エレベーション（シャドウ）
- アニメーション
- レイアウトパターン
- コンポーネントバリアント

## 使用方法

### 1. カラーシステムの使用

カラーバリアントを使用してコンポーネントのスタイルを定義：

```typescript
import { getColorVariant } from '../lib/design-system';

// プライマリカラーを適用
const primaryClasses = getColorVariant('primary');
// {
//   background: 'bg-primary',
//   text: 'text-primary-foreground',
//   hover: 'hover:bg-primary/90',
//   border: 'border-primary'
// }
```

### 2. タイポグラフィ

一貫したテキストスタイルを適用：

```typescript
import { getTypography } from '../lib/design-system';

// 見出しスタイルを適用
const headingClass = getTypography('heading-1');
```

### 3. スペーシングとレイアウト

グリッドとフレックスレイアウトの使用：

```typescript
import { getGridClass, getFlexClass } from '../lib/design-system';

// レスポンシブグリッド
const gridClass = getGridClass({
  cols: 3,
  gap: 'spacing-4',
  responsive: true
});

// フレックスレイアウト
const flexClass = getFlexClass({
  direction: 'row',
  wrap: true,
  gap: 'spacing-4',
  align: 'center',
  justify: 'between'
});
```

### 4. アニメーションとトランジション

インタラクティブな要素にアニメーションを追加：

```typescript
import { getAnimation, getTransitionClass } from '../lib/design-system';

const animatedClass = getAnimation('fade-in');
const transitionClass = getTransitionClass('normal');
```

### 5. コンポーネントサイズ

一貫したサイジングを適用：

```typescript
import { getSizeClasses } from '../lib/design-system';

const sizeClasses = getSizeClasses('md');
// {
//   padding: 'px-4 py-2',
//   fontSize: 'text-body-base'
// }
```

## ベストプラクティス

1. **一貫性の維持**
   - デザインシステムの関数を使用して、スタイルの一貫性を保持
   - カスタムCSS記述を最小限に抑える

2. **レスポンシブデザイン**
   - レスポンシブなグリッドとコンテナを活用
   - ブレークポイントに応じた適切なレイアウト調整

3. **アクセシビリティ**
   - カラーコントラストを考慮したバリアントの使用
   - インタラクティブ要素への適切なフォーカススタイルの適用

4. **パフォーマンス**
   - 必要な機能のみをインポート
   - アニメーションの過剰使用を避ける

## コンポーネント例

### ボタンコンポーネント

```typescript
import { getColorVariant, getSizeClasses, getInteractiveBaseClass } from '../lib/design-system';

const buttonClasses = cn(
  getInteractiveBaseClass(),
  getColorVariant('primary').background,
  getColorVariant('primary').text,
  getSizeClasses('md').padding
);
```

### カードコンポーネント

```typescript
import { getElevation, getSpacing } from '../lib/design-system';

const cardClasses = cn(
  'bg-card text-card-foreground',
  getElevation('elevation-2'),
  `p-${getSpacing('spacing-4')}`
);
```

### グリッドレイアウト

```typescript
import { getGridClass } from '../lib/design-system';

const gridClasses = getGridClass({
  cols: 4,
  gap: 'spacing-6',
  responsive: true
});
```

## ダークモード対応

システムはダークモードに完全対応しています。CSS変数を通じてカラーとシャドウが自動的に切り替わります：

```html
<div class="dark">
  <!-- ダークモード用のスタイルが自動適用 -->
</div>
```

## チャートカラー

データビジュアライゼーション用の専用カラーパレット：

```typescript
import { getChartColor } from '../lib/design-system';

const chartColorClass = getChartColor(0); // 最初のチャートカラー
```

## カスタマイズ

デザインシステムは`tailwind.config.ts`と`globals.css`で定義された変数を通じてカスタマイズ可能です：

1. カラーの変更：CSS変数を更新
2. スペーシングスケールの調整：Tailwind設定を更新
3. アニメーションの追加：新しいキーフレームを定義
