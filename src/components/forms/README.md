# フォームコンポーネント

このディレクトリには、フォーム関連のコンポーネントが含まれています。

## FormField

`FormField`は、ラベル、インプット、エラーメッセージを含む完全なフォームフィールドを提供します。

### 基本的な使用方法

```tsx
import { FormField } from '@/components/forms/FormField';

// 基本的な使用方法
<FormField
  label="ユーザー名"
  placeholder="username123"
  required
/>

// フィールドの説明付き
<FormField
  label="メールアドレス"
  type="email"
  description="仕事用のメールアドレスを入力してください"
  required
/>

// エラー表示
<FormField
  label="パスワード"
  type="password"
  error="パスワードは8文字以上である必要があります"
/>

// カスタムサイズ
<FormField
  label="検索"
  size="lg"
  startContent={<SearchIcon />}
/>
```

### フォームフックとの統合

`useForm`と`useField`フックを使用して、フォームの状態管理と検証を行うことができます：

```tsx
import { useForm } from '@/hooks/useForm';
import { useField } from '@/hooks/useField';
import { FormField } from '@/components/forms/FormField';
import { loginFormSchema } from '@/types/form';

interface LoginForm {
  email: string;
  password: string;
}

function LoginForm() {
  const form = useForm<LoginForm>({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginFormSchema,
    onSubmit: async (values) => {
      // フォームの送信処理
    }
  });

  const emailField = useField({
    name: 'email',
    value: form.values.email,
    onChange: form.setFieldValue,
    onBlur: () => form.setFieldTouched('email'),
    validation: loginFormSchema.shape.email
  });

  return (
    <form onSubmit={form.handleSubmit}>
      <FormField
        label="メールアドレス"
        type="email"
        field={emailField}
        required
      />
      <button type="submit" disabled={form.state.status === 'loading'}>
        ログイン
      </button>
    </form>
  );
}
```

### Props

#### FormField

| プロパティ | 型 | デフォルト | 説明 |
|------------|------|---------|-------------|
| label | string | - | フィールドのラベル |
| description | string | - | フィールドの説明文 |
| error | string | - | エラーメッセージ |
| required | boolean | false | 必須フィールドかどうか |
| size | 'sm' \| 'md' \| 'lg' | 'md' | フィールドのサイズ |
| startContent | ReactNode | - | 入力フィールドの前に表示するコンテンツ |
| endContent | ReactNode | - | 入力フィールドの後に表示するコンテンツ |
| field | UseFieldReturn | - | useFieldフックの戻り値 |

その他のプロパティはHTMLの`input`要素に直接渡されます。

### アクセシビリティ

- 適切なARIA属性が自動的に設定されます
- エラー状態はスクリーンリーダーに通知されます
- キーボードナビゲーションに対応

### ベストプラクティス

1. **フォームフックの使用**
```tsx
// 推奨
const emailField = useField({...});
<FormField field={emailField} />

// 非推奨
<FormField value={value} onChange={handleChange} />
```

2. **エラー処理**
```tsx
// 推奨
<FormField
  field={emailField}
  description="正しいメールアドレスを入力してください"
/>

// 非推奨
{error && <p className="text-red-500">{error}</p>}
```

3. **アクセシビリティ**
```tsx
// 推奨
<FormField
  label="検索"
  type="search"
  aria-label="サイト内検索"
/>

// 非推奨
<FormField
  placeholder="検索"
  type="search"
/>
```

### カスタマイズ

スタイルのカスタマイズは、以下の優先順位で行うことを推奨します：

1. 提供されているpropsを使用（size, variant等）
2. classNameによるスタイルの追加
3. コンポーネントの拡張（最終手段）