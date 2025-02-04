# UI コンポーネントライブラリ

このディレクトリには、再利用可能なUIコンポーネントが含まれています。各コンポーネントはデザインシステムと統合され、アクセシビリティに配慮して実装されています。

## デザインシステム

コンポーネントは `lib/design-system.ts` で定義されたデザイントークンを使用します：

- カラー
- タイポグラフィ
- スペーシング
- エレベーション（シャドウ）
- アニメーション
- ボーダーラディウス
- ブレークポイント

## 主要コンポーネント

### Button
```tsx
import { Button } from "@/components/ui/button";

// 基本的な使用方法
<Button>クリック</Button>

// バリアント
<Button variant="default" />   // デフォルト
<Button variant="destructive" />   // 破壊的アクション
<Button variant="outline" />   // アウトライン
<Button variant="secondary" />   // セカンダリ
<Button variant="ghost" />   // ゴースト
<Button variant="link" />   // リンク

// サイズ
<Button size="default" />   // デフォルト
<Button size="sm" />   // 小
<Button size="lg" />   // 大
<Button size="icon" />   // アイコン用
```

### Card
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

// 基本的な使用方法
<Card>
  <CardHeader>
    <CardTitle>タイトル</CardTitle>
    <CardDescription>説明文</CardDescription>
  </CardHeader>
  <CardContent>
    コンテンツ
  </CardContent>
  <CardFooter>
    フッター
  </CardFooter>
</Card>

// バリアント
<Card variant="default" />   // デフォルト
<Card variant="interactive" />   // インタラクティブ
<Card variant="ghost" />   // ゴースト
<Card variant="outline" />   // アウトライン

// サイズ
<Card size="default" />   // デフォルト
<Card size="sm" />   // 小
<Card size="lg" />   // 大
```

### Input / Label / FormField
```tsx
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// FormFieldを使用（推奨）
<FormField
  label="ユーザー名"
  description="ログインに使用する名前を入力してください"
  error="ユーザー名は必須です"
  required
/>

// 個別のコンポーネントとして使用
<div className="space-y-2">
  <Label htmlFor="username" required>ユーザー名</Label>
  <Input
    id="username"
    placeholder="ユーザー名を入力"
    error={hasError}
  />
</div>

// インプットバリアント
<Input variant="default" />   // デフォルト
<Input variant="ghost" />   // ゴースト
<Input variant="error" />   // エラー

// インプットサイズ
<Input size="default" />   // デフォルト
<Input size="sm" />   // 小
<Input size="lg" />   // 大

// 特殊なインプットタイプ
<Input type="search" />   // 検索
<Input type="file" />   // ファイル
```

## コンポーネントの原則

### 1. デザインシステムの活用
- デザイントークンを使用してスタイルを定義
- 一貫性のあるビジュアルデザイン
- メンテナンス性の向上

### 2. コンポーネント構成
- Compound Componentsパターンの採用
- 柔軟な拡張性
- 明確なインターフェース

### 3. アクセシビリティ
- ARIA属性の適切な使用
- キーボードナビゲーション
- スクリーンリーダー対応

### 4. パフォーマンス
- 条件付きレンダリングの最適化
- メモ化の適切な使用
- バンドルサイズの考慮

## ベストプラクティス

1. **FormFieldの使用**
```tsx
// 推奨
<FormField
  label="メールアドレス"
  type="email"
  required
  error={errors.email}
/>

// 非推奨
<div>
  <Label>メールアドレス</Label>
  <Input type="email" />
  {error && <p>{error}</p>}
</div>
```

2. **バリアントの活用**
```tsx
// 推奨
<Button variant="destructive">削除</Button>

// 非推奨
<Button className="bg-red-500">削除</Button>
```

3. **アクセシビリティの考慮**
```tsx
// 推奨
<FormField
  label="検索"
  type="search"
  aria-label="サイト内検索"
/>

// 非推奨
<Input type="search" placeholder="検索" />
```

4. **エラーハンドリング**
```tsx
// 推奨
<FormField
  label="パスワード"
  type="password"
  error={validationError}
  required
/>

// 非推奨
<Input
  type="password"
  className={hasError ? "border-red-500" : ""}
/>
```

## カスタマイズ

コンポーネントのカスタマイズは、以下の優先順位で行うことを推奨します：

1. 提供されているpropsを使用
2. バリアントの追加（必要な場合）
3. classNameによるスタイルの上書き（最終手段）

```tsx
// バリアントの追加例
const buttonVariants = cva(
  // 既存のベーススタイル
  {
    variants: {
      variant: {
        // 既存のバリアント
        custom: "custom-styles", // 新しいバリアント
      },
    },
  }
);
```

## 貢献

新しいコンポーネントを追加する場合は、以下の点に注意してください：

1. デザインシステムのトークンを使用
2. アクセシビリティガイドラインに従う
3. 適切なテストを追加
4. ドキュメントを更新