# レイアウトコンポーネント

## 概要

このディレクトリには、アプリケーションの構造を形成する再利用可能なレイアウトコンポーネントが含まれています。モバイルファーストのレスポンシブデザインと、アクセシビリティを考慮した設計を提供します。

## コンポーネント構成

### 基本レイアウト
- `Layout` - ベースレイアウト
- `Header` - ヘッダーコンポーネント
- `Footer` - フッターコンポーネント
- `Sidebar` - サイドバーコンポーネント

### 管理画面レイアウト
- `AdminLayout` - 管理画面用レイアウト
- `AdminHeader` - 管理画面ヘッダー
- `AdminSidebar` - 管理画面サイドバー

### グリッドシステム
- `Container` - コンテンツ幅の制御
- `Grid` - グリッドレイアウト
- `Stack` - 垂直/水平スタック

## 使用方法

### 基本レイアウト
```tsx
import { Layout } from "@/components/layouts";

export default function HomePage() {
  return (
    <Layout>
      <main>
        <h1>ホームページ</h1>
        {/* ページコンテンツ */}
      </main>
    </Layout>
  );
}
```

### 管理画面レイアウト
```tsx
import { AdminLayout } from "@/components/layouts/admin";

export default function AdminPage() {
  return (
    <AdminLayout>
      <div className="p-4">
        <h1>管理画面</h1>
        {/* 管理画面コンテンツ */}
      </div>
    </AdminLayout>
  );
}
```

### グリッドシステム
```tsx
import { Container, Grid } from "@/components/layouts";

export function ProductsPage() {
  return (
    <Container>
      <Grid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
        {/* 商品カード */}
      </Grid>
    </Container>
  );
}
```

## レスポンシブデザイン

### ブレークポイント
```typescript
const breakpoints = {
  sm: "640px",   // スマートフォン
  md: "768px",   // タブレット
  lg: "1024px",  // ノートPC
  xl: "1280px",  // デスクトップ
  "2xl": "1536px" // 大画面
};
```

### メディアクエリ
```typescript
// Tailwind CSSのユーティリティクラスを使用
const responsiveClasses = {
  container: "w-full px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
  sidebar: "hidden md:block w-64 h-screen",
  content: "w-full md:ml-64"
};
```

## アクセシビリティ

### スキップリンク
```tsx
<SkipLink href="#main-content">
  メインコンテンツにスキップ
</SkipLink>
```

### ランドマーク
```tsx
<Layout>
  <Header role="banner" />
  <main role="main" id="main-content">
    {/* メインコンテンツ */}
  </main>
  <Footer role="contentinfo" />
</Layout>
```

### キーボードナビゲーション
- フォーカストラップ（モーダル用）
- フォーカス可視化
- ショートカットキー

## パフォーマンス最適化

### 動的インポート
```typescript
const DynamicSidebar = dynamic(() => import('./Sidebar'), {
  loading: () => <SidebarSkeleton />
});
```

### 条件付きレンダリング
```typescript
const Layout = ({ sidebar = true }) => (
  <div className="flex">
    {sidebar && <Sidebar />}
    <main className={sidebar ? 'ml-64' : ''}>
      {/* コンテンツ */}
    </main>
  </div>
);
```

## テスト

### レイアウトテスト
```typescript
describe('Layout', () => {
  it('スキップリンクが機能する', () => {
    // テストコード
  });

  it('レスポンシブデザインが正しく動作する', () => {
    // テストコード
  });
});
```

## 開発ガイドライン

1. 新しいレイアウトの追加
   - モバイルファーストで設計
   - アクセシビリティを考慮
   - パフォーマンスを最適化
   - 適切なテストを作成

2. 既存レイアウトの修正
   - 下位互換性を維持
   - レスポンシブ対応を確認
   - アクセシビリティ要件を満たす

3. パフォーマンスの考慮
   - 不要なネストを避ける
   - CSSの最適化
   - レイアウトシフトの防止

## レイアウトの原則

1. **一貫性**
   - 共通のグリッドシステム
   - 統一されたスペーシング
   - 一貫したブレークポイント

2. **柔軟性**
   - コンポーザブルなコンポーネント
   - プロップによるカスタマイズ
   - 異なるコンテキストでの再利用

3. **保守性**
   - 明確な責務の分離
   - ドキュメント化された API
   - テスト可能な設計