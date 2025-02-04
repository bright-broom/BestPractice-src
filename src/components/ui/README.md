# UIコンポーネントライブラリ

## 概要

このディレクトリには、アプリケーション全体で使用される再利用可能なUIコンポーネントが含まれています。各コンポーネントはアクセシビリティ、パフォーマンス、再利用性を考慮して設計されています。

## コンポーネントカタログ

### フォーム要素
- `Button` - 汎用ボタンコンポーネント
- `Input` - テキスト入力フィールド
- `Select` - ドロップダウン選択
- `Checkbox` - チェックボックス
- `Radio` - ラジオボタン
- `Textarea` - 複数行テキスト入力
- `Form` - フォームコンテナ
- `Label` - フォームラベル

### フィードバック
- `Alert` - アラートメッセージ
- `Toast` - トースト通知
- `Dialog` - モーダルダイアログ
- `Progress` - プログレスバー
- `Skeleton` - ローディングスケルトン

### ナビゲーション
- `Tabs` - タブナビゲーション
- `Breadcrumb` - パンくずリスト
- `Menu` - メニューコンポーネント
- `Navbar` - ナビゲーションバー
- `Pagination` - ページネーション

### レイアウト
- `Card` - カードコンテナ
- `Container` - レイアウトコンテナ
- `Grid` - グリッドシステム
- `Stack` - スタックレイアウト
- `Separator` - 区切り線

### データ表示
- `Table` - テーブル
- `List` - リスト
- `Badge` - バッジ
- `Avatar` - アバター
- `Icon` - アイコン

## 使用方法

### インポート方法
```typescript
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
```

### 基本的な例
```typescript
<Button variant="primary" size="md">
  クリック
</Button>

<Input 
  type="text"
  placeholder="入力してください"
  aria-label="検索"
/>
```

## アクセシビリティ

- すべてのコンポーネントはWAI-ARIAガイドラインに準拠
- キーボードナビゲーションのサポート
- 適切なARIAラベルとロールの実装
- 高コントラストモードの対応

## テーマ設定

コンポーネントは`src/lib/design-system`で定義されたテーマ設定に従います：

```typescript
const theme = {
  colors: { /* ... */ },
  spacing: { /* ... */ },
  typography: { /* ... */ }
};
```

## パフォーマンス最適化

- React.memoを使用した不要な再レンダリングの防止
- 遅延ローディングのサポート
- バンドルサイズの最適化

## テスト

各コンポーネントには以下のテストが含まれます：

```
__tests__/
  ├── unit/          # ユニットテスト
  ├── integration/   # 統合テスト
  └── snapshots/     # スナップショットテスト
```

## 貢献ガイド

1. 新しいコンポーネントの追加
   - 適切なディレクトリに配置
   - TypeScript型定義の作成
   - テストの作成
   - ドキュメントの追加

2. 既存コンポーネントの修正
   - 変更理由の明記
   - テストの更新
   - ドキュメントの更新

## バージョニング

セマンティックバージョニングに従います：
- MAJOR: 破壊的変更
- MINOR: 後方互換性のある機能追加
- PATCH: バグ修正