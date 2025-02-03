### **📌 Next.js App Router を活用したスケーラブルなディレクトリ構成（Admin + Portfolio 対応）**  
この構成は、**スケーラビリティ・拡張性・パフォーマンス最適化** を考慮した設計になっています。  
- **`components/sections/`** → **ページごとのセクションを整理**  
- **`components/ui/`** → **ボタン・モーダル・トーストなどの共通コンポーネントを一元管理**  
- **`app/admin/`** → **管理者専用のダッシュボード & 記事・ユーザー管理**  
- **`app/portfolio/`** → **作品紹介ページ（動的ルーティング）**  
- **`store/`** → **Zustand による状態管理**  
- **`hooks/`** → **再利用可能なカスタムフック**  
- **`lib/`** → **API クライアント・認証処理・ユーティリティ関数**  

---

## **🚀 スケーラブルなディレクトリ構成**
```
📦 my-project
├── 📂 app
│   ├── layout.tsx               # ✅ 全体レイアウト
│   ├── page.tsx                 # ✅ ホームページ
│   ├── loading.tsx              # ✅ ローディング画面
│   ├── not-found.tsx            # ✅ 404 ページ
│   ├── error.tsx                # ✅ エラーページ (Sentry 用)
│   ├── 📂 api                   # ✅ API エンドポイント
│   │   ├── auth/route.ts        # 認証 API (NextAuth.js)
│   │   ├── contact/route.ts     # お問い合わせフォーム API
│   │   ├── subscribe/route.ts   # メール購読 API
│   │   ├── analytics/route.ts   # アクセス解析 API
│   ├── 📂 blog                  # ✅ ブログページ
│   │   ├── page.tsx             # ブログ一覧ページ
│   │   ├── [slug]/page.tsx      # 記事詳細ページ
│   ├── 📂 portfolio             # ✅ 作品紹介ページ（動的ルーティング）
│   │   ├── page.tsx             # 作品一覧
│   │   ├── [slug]/page.tsx      # 作品詳細ページ
│   ├── 📂 admin                 # ✅ 管理画面
│   │   ├── layout.tsx           # 管理画面の共通レイアウト
│   │   ├── page.tsx             # ダッシュボード
│   │   ├── 📂 articles          # 記事管理
│   │   │   ├── page.tsx         # 記事一覧
│   │   │   ├── new/page.tsx     # 記事作成
│   │   │   ├── [id]/edit.tsx    # 記事編集
│   │   ├── 📂 users             # ユーザー管理
│   │   │   ├── page.tsx         # ユーザー一覧
│   │   │   ├── [id]/edit.tsx    # ユーザー編集
│   │   ├── 📂 portfolio         # 作品管理
│   │   │   ├── page.tsx         # 作品一覧
│   │   │   ├── new/page.tsx     # 作品登録
│   │   │   ├── [id]/edit.tsx    # 作品編集
├── 📂 components
│   ├── 📂 sections              # ✅ 各セクションごとに整理
│   │   ├── Hero.tsx             # ヒーローセクション
│   │   ├── About.tsx            # 会社概要
│   │   ├── Services.tsx         # サービス紹介
│   │   ├── Testimonials.tsx     # お客様の声
│   │   ├── Pricing.tsx          # 料金プラン
│   │   ├── Contact.tsx          # お問い合わせ
│   │   ├── Portfolio.tsx        # ポートフォリオ一覧
│   │   ├── FAQ.tsx              # よくある質問
│   │   ├── Footer.tsx           # フッター
│   ├── 📂 ui                    # ✅ 再利用可能な UI コンポーネント
│   │   ├── button.tsx           # ボタン
│   │   ├── card.tsx             # カードデザイン
│   │   ├── input.tsx            # 入力フィールド
│   │   ├── navbar.tsx           # ナビゲーションバー
│   │   ├── modal.tsx            # モーダル
│   │   ├── pagination.tsx       # ページネーション
│   │   ├── accordion.tsx        # アコーディオン
│   │   ├── tabs.tsx             # タブ切り替え
│   │   ├── toast.tsx            # トースト通知
│   │   ├── skeleton.tsx         # ローディングスケルトン
│   ├── 📂 layout                # ✅ レイアウト関連
│   │   ├── header.tsx           # ヘッダー
│   │   ├── sidebar.tsx          # サイドバー
├── 📂 hooks                     # ✅ カスタムフック
│   ├── useAuth.ts               # 認証情報取得
│   ├── useTheme.ts              # ダークモード切り替え
│   ├── useScroll.ts             # スクロールイベント処理
│   ├── useModal.ts              # モーダルの開閉管理
├── 📂 store                     # ✅ Zustand を使った状態管理
│   ├── useAuthStore.ts          # 認証管理
│   ├── useThemeStore.ts         # テーマ管理
├── 📂 lib                       # ✅ ユーティリティ関数
│   ├── api.ts                   # API クライアント（React Query 用）
│   ├── auth.ts                  # 認証関連処理
│   ├── prisma.ts                # Prisma クライアント設定
│   ├── cn.ts                    # clsx + tailwind-merge ヘルパー
├── 📂 styles                    # ✅ グローバルスタイル
│   ├── globals.css              # TailwindCSS のグローバルスタイル
│   ├── tailwind.css             # TailwindCSS の設定
├── 📂 public                     # ✅ 静的アセット
│   ├── images/                  # 画像ファイル
│   │   ├── hero.webp
│   │   ├── logo.svg
│   ├── icons/                   # アイコン
│   │   ├── facebook.svg
│   │   ├── instagram.svg
├── 📂 prisma                     # ✅ データベーススキーマ
│   ├── schema.prisma             # Prisma のスキーマ定義
│   ├── seed.ts                   # 初期データ投入スクリプト
├── tailwind.config.ts            # TailwindCSS 設定
├── next.config.js                # Next.js 設定
├── tsconfig.json                 # TypeScript 設定
├── package.json                  # パッケージ管理
└── .eslintrc.js                  # ESLint 設定
```

---

### **✅ 最適化されたポイント**
🔥 **Admin 機能強化**（記事・ユーザー・ポートフォリオ管理）  
🔥 **NextAuth.js による認証**（`app/api/auth/route.ts`）  
🔥 **Zustand + React Query で状態管理 & API キャッシュ**  
🔥 **Sentry でエラーロギングを実装**  

---

### **📌 0 から作る最適な順番（Next.js App Router + TailwindCSS + Zustand + React Query）**  
この手順は、**スケーラビリティ・メンテナンス性・パフォーマンス最適化** を考慮した、**最も効率的な開発順序** です。  

---

## **🚀 開発の最適なステップ**
### **🟢 1️⃣ プロジェクトのセットアップ**
まず、Next.js + TypeScript + TailwindCSS + shadcn/ui をセットアップ。

```bash
# 1. Next.js App Router プロジェクトを作成
npx create-next-app@latest my-project --typescript --tailwind --eslint --app
cd my-project

---

#### **✅ Turbopack を使うべき？**  
**結論: **❌ No（現時点では推奨しない）  
👉 Turbopack は Next.js の **次世代バンドラー** だが、**まだ実験段階** であり、安定性に問題がある。  

✅ **Turbopack のメリット:**  
- **開発時 (`next dev`) のビルドが最大 10 倍速い**  
- **ホットリロードが高速化**  

❌ **デメリット:**  
- **`next build`（本番用ビルド）には影響しない**（開発時のみ）  
- **一部のライブラリ（Tailwind, shadcn/ui, ESLint など）が正常に動作しないことがある**  
- **安定性が低く、公式でも「試験的」とされている**  

👉 **結論: `No`（現時点では Turbopack を使わない方が良い）**  

---

# 2. 必要なパッケージをインストール
npm install @tanstack/react-query zustand next-auth @auth/prisma-adapter \
  @hookform/resolvers react-hook-form zod prisma @prisma/client \
  @sentry/nextjs framer-motion clsx tailwind-merge
```

📌 **インストールするもの:**  
✅ **React Query**（API キャッシュ & フェッチ管理）  
✅ **Zustand**（状態管理）  
✅ **NextAuth.js**（認証）  
✅ **Prisma**（データベース ORM）  
✅ **Zod**（バリデーション）  
✅ **Sentry**（エラーロギング）  
✅ **Framer Motion**（アニメーション）  
✅ **clsx & tailwind-merge**（Tailwind クラス管理）  

---

### **🟢 2️⃣ TailwindCSS & shadcn/ui のセットアップ**
```bash
# 1. TailwindCSS の設定
npx tailwindcss init -p
```
📌 `tailwind.config.ts` を編集：
```ts
import { type Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
} satisfies Config;
```

```bash
# 2. shadcn/ui の設定
npx shadcn-ui@latest init
```

---

### **🟢 3️⃣ ディレクトリ構成を作成**
📌 `mkdir` コマンドで作成：
```bash
mkdir -p components/{ui,layout,sections} hooks store lib prisma public/images
mkdir -p app/{api,admin,portfolio,blog}
mkdir -p app/api/{auth,contact,subscribe,analytics}
mkdir -p app/admin/{articles,users,portfolio}
```
📌 **フォルダの役割:**  
- `app/api/` → API ルート  
- `components/ui/` → 共通 UI コンポーネント  
- `components/layout/` → ヘッダー・フッター  
- `components/sections/` → セクションごとのコンポーネント  
- `store/` → Zustand による状態管理  
- `hooks/` → カスタムフック  

---

### **🟢 4️⃣ Prisma 設定**
```bash
npx prisma init
```
📌 `prisma/schema.prisma` を編集：
```prisma
generator client {
  provider = "prisma-client-js"
}
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
model User {
  id        String  @id @default(uuid())
  email     String  @unique
  password  String?
  name      String?
  articles  Article[]
}
model Article {
  id        String  @id @default(uuid())
  title     String
  content   String
  authorId  String
  author    User    @relation(fields: [authorId], references: [id])
  createdAt DateTime @default(now())
}
```
```bash
# マイグレーション & クライアント生成
npx prisma migrate dev --name init
npx prisma generate
```

---

### **🟢 5️⃣ Zustand で状態管理**
📌 `store/useAuthStore.ts`
```ts
import { create } from "zustand";

interface AuthState {
  user: { id: string; name: string } | null;
  setUser: (user: AuthState["user"]) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
```

---

### **🟢 6️⃣ API 実装**
📌 `app/api/auth/route.ts`
```ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: { email: { label: "Email" }, password: { label: "Password" } },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({ where: { email: credentials?.email } });
        return user || null;
      },
    }),
  ],
});
```

---

### **🟢 7️⃣ ページ & セクションの作成**
📌 `components/sections/Hero.tsx`
```tsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-screen flex items-center justify-center bg-gray-900 text-white"
    >
      <h1 className="text-5xl font-bold">Welcome to My Landing Page</h1>
    </motion.section>
  );
}
```

📌 `app/page.tsx`
```tsx
import Hero from "@/components/sections/Hero";

export default function HomePage() {
  return <Hero />;
}
```

---

### **🟢 8️⃣ フォーム & バリデーション（Zod + React Hook Form）**
📌 `components/ui/form.tsx`
```tsx
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = z.object({
  email: z.string().email("Invalid email"),
});

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <Input {...register("email")} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

---

### **🟢 9️⃣ デプロイ準備**
```bash
# Vercel にデプロイ
npm run build
vercel deploy
```

---

## **✅ まとめ**
### **💡 最適な開発順序**
1️⃣ **プロジェクトセットアップ（Next.js + Tailwind + shadcn/ui）**  
2️⃣ **ディレクトリ構成の作成**  
3️⃣ **Prisma 設定（データベース構築）**  
4️⃣ **Zustand + API 実装（状態管理 & 認証）**  
5️⃣ **ページ & セクション作成（UI & アニメーション）**  
6️⃣ **フォーム & バリデーション（Zod + React Hook Form）**  
7️⃣ **デプロイ（Vercel）**

---

### **📌 PostgreSQL のエラー `FATAL: role "johndoe" does not exist` の解決方法**  

このエラーの原因は、PostgreSQL に `johndoe` というユーザー（ロール）が **存在しない** ためです。  
以下の手順で **ユーザーを作成し、適切な権限を設定** することで解決できます。  

---

## **✅ 解決策**
### **🔹 1️⃣ PostgreSQL に `postgres` ユーザーで接続**
まず、**PostgreSQL の管理者ユーザー（`postgres`）で接続** します。  

```bash
psql -U postgres
```
✅ **成功すると、以下のようなプロンプトが表示されます。**
```
psql (14.5)
Type "help" for help.

postgres=#
```

---

### **🔹 2️⃣ `johndoe` ユーザーを作成**
```sql
CREATE USER johndoe WITH PASSWORD 'yourpassword';
```
📌 `yourpassword` は適切なパスワードに置き換えてください。  
📌 **すでに `johndoe` ユーザーが存在する場合、このコマンドは失敗します。**

---

### **🔹 3️⃣ `mydb` データベースを作成**
```sql
CREATE DATABASE mydb OWNER johndoe;
```
📌 もし `mydb` がすでに存在する場合は、次の手順に進んでください。

---

### **🔹 4️⃣ `johndoe` にデータベースアクセス権を付与**
```sql
GRANT ALL PRIVILEGES ON DATABASE mydb TO johndoe;
```
👉 これで、`johndoe` は `mydb` にアクセスできるようになります。  

---

### **🔹 5️⃣ `public` スキーマの権限を設定**
```sql
GRANT ALL PRIVILEGES ON SCHEMA public TO johndoe;
```
👉 `johndoe` が `public` スキーマ内のテーブルにアクセス・作成できるようになります。  

---

### **🔹 6️⃣ `psql -U johndoe -d mydb` で接続をテスト**
`postgres` ユーザーから抜けて、`johndoe` でログインを試します。  

```bash
\q  # psql から抜ける
psql -U johndoe -d mydb
```

✅ **成功すると、次のようなプロンプトが表示されます。**
```
mydb=>
```
👉 これで `johndoe` ユーザーが `mydb` にアクセスできるようになりました！ 🚀  

---

## **✅ まとめ**
| エラー | 解決策 |
|--------|--------|
| `FATAL: role "johndoe" does not exist` | `CREATE USER johndoe WITH PASSWORD 'yourpassword';` |
| `FATAL: database "mydb" does not exist` | `CREATE DATABASE mydb OWNER johndoe;` |
| `FATAL: permission denied for database "mydb"` | `GRANT ALL PRIVILEGES ON DATABASE mydb TO johndoe;` |

---

### **📌 不足しているフォルダ & ファイルを作成するコマンド**  
現在のディレクトリ構成と目標のディレクトリ構成を比較し、**不足しているフォルダ・ファイルを作成** するためのコマンドを作成しました。  

```bash
# ✅ 必要なフォルダを作成
mkdir -p \
  app/api/analytics \
  app/api/contact \
  app/api/subscribe \
  app/blog \
  app/portfolio \
  app/admin/articles \
  app/admin/users \
  app/admin/portfolio \
  components/layout \
  components/sections \
  components/ui \
  hooks \
  lib \
  store \
  styles \
  public/images \
  public/icons

# ✅ 必要なファイルを作成
touch \
  app/loading.tsx \
  app/not-found.tsx \
  app/error.tsx \
  app/api/auth/route.ts \
  app/api/contact/route.ts \
  app/api/subscribe/route.ts \
  app/api/analytics/route.ts \
  app/blog/page.tsx \
  app/blog/[slug]/page.tsx \
  app/portfolio/page.tsx \
  app/portfolio/[slug]/page.tsx \
  app/admin/layout.tsx \
  app/admin/page.tsx \
  app/admin/articles/page.tsx \
  app/admin/articles/new/page.tsx \
  app/admin/articles/[id]/edit.tsx \
  app/admin/users/page.tsx \
  app/admin/users/[id]/edit.tsx \
  app/admin/portfolio/page.tsx \
  app/admin/portfolio/new/page.tsx \
  app/admin/portfolio/[id]/edit.tsx \
  components/sections/About.tsx \
  components/sections/Services.tsx \
  components/sections/Testimonials.tsx \
  components/sections/Pricing.tsx \
  components/sections/Contact.tsx \
  components/sections/Portfolio.tsx \
  components/sections/FAQ.tsx \
  components/sections/Footer.tsx \
  components/ui/button.tsx \
  components/ui/card.tsx \
  components/ui/input.tsx \
  components/ui/navbar.tsx \
  components/ui/modal.tsx \
  components/ui/pagination.tsx \
  components/ui/accordion.tsx \
  components/ui/tabs.tsx \
  components/ui/toast.tsx \
  components/ui/skeleton.tsx \
  components/layout/header.tsx \
  components/layout/sidebar.tsx \
  hooks/useAuth.ts \
  hooks/useTheme.ts \
  hooks/useScroll.ts \
  hooks/useModal.ts \
  store/useThemeStore.ts \
  lib/api.ts \
  lib/auth.ts \
  lib/prisma.ts \
  lib/cn.ts \
  styles/globals.css \
  styles/tailwind.css \
  prisma/seed.ts
```

---

### **✅ コマンドの説明**
1. **不足しているフォルダを作成**
   - `mkdir -p` を使い、**フォルダがない場合のみ作成** する（既にある場合はスキップ）。
  
2. **不足しているファイルを作成**
   - `touch` を使い、**必要なファイルを一括作成**（既にある場合は何もしない）。

---

### **✅ まとめ**
このコマンドを実行すると、目標のディレクトリ構成に必要なフォルダ & ファイルが作成されます！ 🚀  

**📌 次のステップ:**  
1️⃣ `app/` 内の各 `page.tsx` に適切なコンポーネントを追加する  
2️⃣ `lib/prisma.ts` を設定し、Prisma とデータベースを接続する  
3️⃣ `api/` 内の `route.ts` を実装し、API を作成する  

---

### **✨ 次のステップ**
`components/sections/` 内のセクションコンポーネントを作成する  

