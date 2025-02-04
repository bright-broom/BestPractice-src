import { z } from 'zod';
import type { Status } from './common';

/**
 * スキーマの定義
 */
const emailSchema = z
  .string()
  .min(1, { message: 'メールアドレスは必須です' })
  .email({ message: '有効なメールアドレスを入力してください' });

const passwordSchema = z
  .string()
  .min(8, { message: 'パスワードは8文字以上である必要があります' })
  .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/, {
    message: 'パスワードには大文字、小文字、数字、特殊文字を含める必要があります'
  });

const rememberSchema = z.boolean();

/**
 * フォームスキーマ
 */
export const loginFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  remember: rememberSchema,
}).required();

/**
 * フォームの型定義
 */
export type LoginFormValues = {
  email: string;
  password: string;
  remember: boolean;
};

export interface FormField<T = unknown> {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  validation?: z.ZodType<T>;
}

export interface FormState {
  status: Status;
  error?: string;
  touched: Record<string, boolean>;
  dirty: boolean;
}

export type FormValues = Record<string, unknown>;

export type FormErrors = Record<string, string[] | undefined>;

export interface FieldMetadata {
  label: string;
  placeholder?: string;
  description?: string;
}

/**
 * フォームフィールドのメタデータ
 */
export const fieldMetadata: Record<string, FieldMetadata> = {
  email: {
    label: 'メールアドレス',
    placeholder: 'your@email.com',
    description: '有効なメールアドレスを入力してください'
  },
  password: {
    label: 'パスワード',
    description: '8文字以上で、大文字、小文字、数字、特殊文字を含める必要があります'
  },
  remember: {
    label: 'ログイン状態を保持',
    description: 'チェックするとログイン状態を維持します'
  }
} as const;

/**
 * フィールド値の型抽出
 */
export type FieldValue<T> = T extends FormValues ? T[keyof T] : never;

/**
 * バリデーション関数の型
 */
export type ValidateFunction<T> = (value: T) => string | undefined;

/**
 * フォーム送信ハンドラーの型
 */
export type SubmitHandler<T> = (values: T) => Promise<void>;