# フォームコンポーネント

## 概要

このディレクトリには、フォーム関連の高度なコンポーネントとバリデーションロジックが含まれています。UIプリミティブを組み合わせて、使いやすく堅牢なフォームインターフェースを提供します。

## コンポーネント構成

### コアコンポーネント
- `FormField` - フォームフィールドのラッパー
- `FormControl` - 入力要素のコンテナ
- `FormLabel` - アクセシブルなラベル
- `FormMessage` - エラーメッセージ表示
- `FormDescription` - フィールドの説明

### カスタムフィールド
- `TextField` - テキスト入力
- `SelectField` - セレクトボックス
- `CheckboxField` - チェックボックス
- `RadioField` - ラジオボタン
- `FileField` - ファイルアップロード

### バリデーション統合
- Zodスキーマとの連携
- カスタムバリデーションルール
- エラーメッセージのローカライゼーション

## 使用方法

### 基本的な例
```tsx
import { useForm } from "@/hooks/useForm";
import { FormField } from "./FormField";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("有効なメールアドレスを入力してください"),
  password: z.string().min(8, "パスワードは8文字以上必要です"),
});

export const LoginForm = () => {
  const form = useForm({
    schema,
    onSubmit: async (values) => {
      // フォーム送信処理
    },
  });

  return (
    <form onSubmit={form.handleSubmit}>
      <FormField
        name="email"
        label="メールアドレス"
        error={form.errors.email}
      >
        <input type="email" {...form.register("email")} />
      </FormField>
      
      <FormField
        name="password"
        label="パスワード"
        error={form.errors.password}
      >
        <input type="password" {...form.register("password")} />
      </FormField>
      
      <button type="submit">ログイン</button>
    </form>
  );
};
```

### カスタムフィールドの例
```tsx
import { TextField } from "./TextField";
import { SelectField } from "./SelectField";

export const UserForm = () => {
  const form = useForm({
    // フォーム設定
  });

  return (
    <form>
      <TextField
        name="name"
        label="名前"
        placeholder="山田 太郎"
        required
      />
      
      <SelectField
        name="role"
        label="役割"
        options={[
          { value: "user", label: "一般ユーザー" },
          { value: "admin", label: "管理者" },
        ]}
      />
    </form>
  );
};
```

## アクセシビリティ

各フォームコンポーネントは以下のアクセシビリティ機能を実装:

- 適切なARIAラベルとロール
- エラー状態の音声読み上げ
- キーボードナビゲーション
- フォーカス管理
- 高コントラストモード対応

## バリデーション

### Zodスキーマの使用
```typescript
const schema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  age: z.number().min(18),
});
```

### カスタムバリデーション
```typescript
const customValidator = (value: string) => {
  // カスタムバリデーションロジック
  return value.length > 0 || "この項目は必須です";
};
```

## エラーハンドリング

### エラーメッセージのカスタマイズ
```typescript
const errorMessages = {
  required: "この項目は必須です",
  email: "有効なメールアドレスを入力してください",
  minLength: (min: number) => `${min}文字以上入力してください`,
};
```

## パフォーマンス最適化

- フォーム状態の最適化
- 不要な再レンダリングの防止
- メモ化されたコールバック
- 遅延バリデーション

## テスト

### ユニットテスト
```typescript
describe("FormField", () => {
  it("バリデーションエラーを正しく表示する", () => {
    // テストコード
  });
});
```

### 統合テスト
```typescript
describe("LoginForm", () => {
  it("正しい認証情報で送信できる", () => {
    // テストコード
  });
});
```

## 開発ガイドライン

1. 新しいフィールドの追加
   - 共通のインターフェースに従う
   - アクセシビリティを考慮
   - エラーハンドリングを実装
   - テストを作成

2. バリデーションの追加
   - Zodスキーマを使用
   - エラーメッセージを定義
   - 国際化対応を考慮

3. パフォーマンスの考慮
   - メモ化を適切に使用
   - 再レンダリングを最小限に
   - バンドルサイズを監視