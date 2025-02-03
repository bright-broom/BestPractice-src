# 🚀 Best Practice Project  

このプロジェクトは **Next.js 15 (App Router) + TypeScript + TailwindCSS + Prisma + NextAuth.js + Zustand** を使用したモダンなフルスタックアプリのベストプラクティスを提供します。  

## 📂 ディレクトリ構成  
```
📦 best-practice  
├── 📂 app              # Next.js App Router 構成  
│   ├── 📂 api         # API エンドポイント  
│   │   ├── analytics  # アクセス解析API  
│   │   ├── auth       # 認証API (NextAuth.js)  
│   │   ├── contact    # お問い合わせAPI  
│   │   ├── subscribe  # メール購読API  
│   ├── 📂 admin       # 管理画面  
│   ├── 📂 blog        # ブログ  
│   ├── 📂 portfolio   # ポートフォリオ  
│   ├── layout.tsx     # レイアウト設定  
│   ├── page.tsx       # ホームページ  
│   ├── middleware.ts  # ミドルウェア  
├── 📂 components       # UIコンポーネント  
│   ├── 📂 sections    # ページセクション  
│   ├── 📂 layout      # レイアウトコンポーネント  
│   ├── 📂 ui          # 汎用UI（ボタン、モーダル など）  
├── 📂 hooks           # カスタムフック  
├── 📂 lib             # ユーティリティ関数 & Prisma クライアント  
├── 📂 prisma          # Prisma ORM 設定 & マイグレーション  
├── 📂 store           # Zustand ステート管理  
├── 📂 styles          # Tailwind グローバルスタイル  
├── 📂 public          # 静的ファイル（画像、アイコン）  
├── next.config.ts     # Next.js 設定  
├── tailwind.config.ts # Tailwind 設定  
├── tsconfig.json      # TypeScript 設定  
```

## 🛠 技術スタック  
- **フロントエンド:** Next.js 15 (App Router) / React 19 / TypeScript  
- **スタイリング:** TailwindCSS / shadcn/ui / Framer Motion  
- **状態管理:** Zustand / React Query  
- **認証:** NextAuth.js  
- **バックエンド:** Next.js API Routes / Prisma ORM (PostgreSQL)  
- **監視・分析:** Sentry / アクセス解析API  

## 🚀 セットアップ  
### 1️⃣ **リポジトリをクローン**
```bash
git clone https://github.com/your-repo/best-practice.git
cd best-practice
```

### 2️⃣ **環境変数を設定**
`.env.local` を作成し、データベースURLなどを記述
```bash
cp .env.example .env.local
```

### 3️⃣ **依存関係をインストール**
```bash
npm install
```

### 4️⃣ **データベースのセットアップ**
```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5️⃣ **開発サーバーを起動**
```bash
npm run dev
```
➡ `http://localhost:3000` でアプリを確認  

## ✅ **機能一覧**
- **ユーザー認証:** NextAuth.js + Prisma  
- **管理画面:** 記事・ポートフォリオ管理  
- **ブログ:** マークダウン対応の静的ブログ  
- **アクセス解析:** API 経由で記録  
- **アニメーション:** Framer Motion を活用  
- **UIコンポーネント:** shadcn/ui を統合  

## 🛠 **開発ガイド**
### **1️⃣ コードフォーマット**
```bash
npx biome check --apply
```
### **2️⃣ 型チェック**
```bash
npm run type-check
```
### **3️⃣ ESLint + Prettier**
```bash
npm run lint
```

---

## **📂 完全なディレクトリ構成**
プロジェクトのディレクトリ構成を **全ファイル含めて** 記述し、一括で作成できるターミナルコマンドを用意しました。

### **📂 ディレクトリツリー**
```bash
best-practice
├── README.md
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.ts
├── next-env.d.ts
├── prisma/
│   ├── schema.prisma
│   ├── seed.ts
│   ├── migrations/
├── public/
│   ├── icons/
│   │   ├── favicon.ico
│   ├── images/
│   │   ├── logo.png
│   │   ├── banner.jpg
├── styles/
│   ├── globals.css
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── middleware.ts
│   ├── api/
│   │   ├── analytics/route.ts
│   │   ├── auth/route.ts
│   │   ├── contact/route.ts
│   │   ├── subscribe/route.ts
│   ├── admin/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── articles/
│   │   │   ├── page.tsx
│   │   │   ├── new/page.tsx
│   │   │   ├── [id]/edit.tsx
│   │   ├── users/
│   │   │   ├── page.tsx
│   │   │   ├── [id]/edit.tsx
│   │   ├── portfolio/
│   │   │   ├── page.tsx
│   │   │   ├── new/page.tsx
│   │   │   ├── [id]/edit.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   ├── [slug]/page.tsx
│   ├── portfolio/
│   │   ├── page.tsx
│   │   ├── [slug]/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   ├── Portfolio.tsx
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── modal.tsx
│   │   ├── navigation.tsx
│   │   ├── table.tsx
│   │   ├── toast.tsx
│   │   ├── tooltip.tsx
│   │   ├── skeleton.tsx
├── hooks/
│   ├── use-toast.ts
│   ├── use-auth.ts
│   ├── use-theme.ts
├── lib/
│   ├── prisma.ts
│   ├── utils.ts
│   ├── logger.ts
│   ├── api.ts
├── store/
│   ├── useAuthStore.ts
│   ├── useThemeStore.ts
├── tests/
│   ├── api.test.ts
│   ├── auth.test.ts
│   ├── components.test.ts
```

---

## **🚀 一括でディレクトリ & ファイル作成**
### **📌 1️⃣ ディレクトリ作成**
```bash
mkdir -p best-practice/{app/{api/{analytics,auth,contact,subscribe},admin/{articles/{new,[id]},users/{[id]},portfolio/{new,[id]}},blog/{[slug]},portfolio/{[slug]}},components/{layout,sections,ui},hooks,lib,store,tests,prisma/migrations,public/{icons,images},styles}
```

### **📌 2️⃣ 空のファイル作成**
```bash
touch best-practice/{README.md,.env.example,.gitignore,package.json,package-lock.json,tsconfig.json,tailwind.config.ts,postcss.config.js,next.config.ts,next-env.d.ts}
touch best-practice/styles/globals.css
touch best-practice/prisma/{schema.prisma,seed.ts}
touch best-practice/app/{layout.tsx,page.tsx,middleware.ts}
touch best-practice/app/api/{analytics/route.ts,auth/route.ts,contact/route.ts,subscribe/route.ts}
touch best-practice/app/admin/{layout.tsx,page.tsx}
touch best-practice/app/admin/articles/{page.tsx,new/page.tsx,[id]/edit.tsx}
touch best-practice/app/admin/users/{page.tsx,[id]/edit.tsx}
touch best-practice/app/admin/portfolio/{page.tsx,new/page.tsx,[id]/edit.tsx}
touch best-practice/app/blog/{page.tsx,[slug]/page.tsx}
touch best-practice/app/portfolio/{page.tsx,[slug]/page.tsx}
touch best-practice/components/layout/{Header.tsx,Footer.tsx}
touch best-practice/components/sections/{Hero.tsx,About.tsx,Services.tsx,Testimonials.tsx,Pricing.tsx,FAQ.tsx,Contact.tsx,Portfolio.tsx}
touch best-practice/components/ui/{button.tsx,card.tsx,input.tsx,modal.tsx,navigation.tsx,table.tsx,toast.tsx,tooltip.tsx,skeleton.tsx}
touch best-practice/hooks/{use-toast.ts,use-auth.ts,use-theme.ts}
touch best-practice/lib/{prisma.ts,utils.ts,logger.ts,api.ts}
touch best-practice/store/{useAuthStore.ts,useThemeStore.ts}
touch best-practice/tests/{api.test.ts,auth.test.ts,components.test.ts}
```

---

## **✅ コマンド解説**
1. `mkdir -p ...` → **ディレクトリを一括作成**
2. `touch ...` → **空のファイルを一括作成**

---

