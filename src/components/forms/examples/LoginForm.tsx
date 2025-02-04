import * as React from "react";
import { useForm } from "../../../hooks/useForm";
import { useField } from "../../../hooks/useField";
import { FormField } from "../FormField";
import { loginFormSchema, type LoginFormValues } from "../../../types/form";
import { Button } from "../../../components/ui/button";
import { AtSign, Lock } from "lucide-react";

const initialValues: LoginFormValues = {
  email: "",
  password: "",
  remember: false,
};

export function LoginForm() {
  const form = useForm<LoginFormValues>({
    initialValues,
    validationSchema: loginFormSchema,
    onSubmit: async (values) => {
      // 実際の実装ではここでログインAPIを呼び出す
      console.log("Form submitted:", values);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    },
  });

  const emailField = useField({
    name: "email",
    value: form.values.email,
    onChange: (value) => form.setFieldValue("email", value),
    onBlur: () => form.setFieldTouched("email"),
    validation: loginFormSchema.shape.email,
    validateOnChange: true,
  });

  const passwordField = useField({
    name: "password",
    value: form.values.password,
    onChange: (value) => form.setFieldValue("password", value),
    onBlur: () => form.setFieldTouched("password"),
    validation: loginFormSchema.shape.password,
    validateOnBlur: true,
  });

  const handlePasswordReset = React.useCallback(() => {
    // パスワードリセットの処理
    console.log("Password reset requested");
  }, []);

  const isLoading = form.state.status === "loading";
  const hasError = form.state.status === "error";

  return (
    <form
      onSubmit={form.handleSubmit}
      className="space-y-4 w-full max-w-sm mx-auto"
    >
      <FormField
        label="メールアドレス"
        type="email"
        placeholder="your@email.com"
        required
        startContent={<AtSign className="w-4 h-4" />}
        field={emailField}
      />

      <FormField
        label="パスワード"
        type="password"
        placeholder="••••••••"
        required
        startContent={<Lock className="w-4 h-4" />}
        field={passwordField}
      />

      <div className="flex items-center justify-between">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={form.values.remember}
            onChange={(e) => form.setFieldValue("remember", e.target.checked)}
            className="rounded border-gray-300"
          />
          <span className="text-sm text-gray-600">ログイン状態を保持</span>
        </label>

        <Button
          variant="link"
          type="button"
          onClick={handlePasswordReset}
          className="text-sm px-0"
        >
          パスワードを忘れた場合
        </Button>
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          className="w-full"
          variant="default"
          disabled={isLoading}
        >
          {isLoading ? "ログイン中..." : "ログイン"}
        </Button>
      </div>

      {hasError && (
        <p className="text-sm text-destructive text-center" role="alert">
          {form.state.error}
        </p>
      )}
    </form>
  );
}

export default LoginForm;