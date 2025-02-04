import * as React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";
import type { FormValues } from "../../types/form";
import type { UseFieldReturn } from "../../hooks/useField";

export type FormFieldSize = "sm" | "md" | "lg";

export interface FormFieldProps<T extends FormValues = FormValues, K extends keyof T = keyof T> 
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size' | 'value' | 'onChange' | 'onBlur'> {
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  size?: FormFieldSize;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  field?: UseFieldReturn<T, K>;
}

function FormFieldComponent<T extends FormValues = FormValues, K extends keyof T = keyof T>({
  id,
  label,
  description,
  error,
  required,
  className,
  size = 'md',
  startContent,
  endContent,
  type = 'text',
  field,
  ...props
}: FormFieldProps<T, K>, ref: React.ForwardedRef<HTMLInputElement>) {
  // 一意のIDを生成（idが提供されていない場合）
  const uniqueId = React.useId();
  const fieldId = id || uniqueId;
  const descriptionId = `${fieldId}-description`;
  const errorId = `${fieldId}-error`;

  // フィールドの状態を取得
  const fieldState = field?.meta;
  const fieldProps = field?.field;

  // エラーメッセージの有無をbooleanとしてInputに渡す
  const hasError = !!(error || fieldState?.error);
  const errorMessage = error || fieldState?.error;

  // コンテナのクラス
  const containerClasses = cn(
    'group relative',
    className
  );

  // インプットラッパーのクラス
  const wrapperClasses = cn(
    'relative flex items-center gap-2',
    hasError && 'border-destructive'
  );

  return (
    <div className={containerClasses}>
      {label && (
        <Label
          htmlFor={fieldId}
          required={required}
          error={hasError}
          className="mb-2"
        >
          {label}
        </Label>
      )}

      {description && (
        <p
          id={descriptionId}
          className="text-sm text-muted-foreground mb-2"
        >
          {description}
        </p>
      )}

      <div className={wrapperClasses}>
        {startContent && (
          <div className="absolute left-2 flex items-center pointer-events-none text-muted-foreground">
            {startContent}
          </div>
        )}

        <Input
          ref={ref}
          id={fieldId}
          type={type}
          value={fieldProps?.value as string}
          onChange={fieldProps?.onChange}
          onBlur={fieldProps?.onBlur}
          aria-describedby={
            cn(
              description ? descriptionId : undefined,
              errorMessage ? errorId : undefined
            )
          }
          aria-invalid={hasError}
          required={required}
          size={size}
          error={hasError}
          {...props}
        />

        {endContent && (
          <div className="absolute right-2 flex items-center pointer-events-none text-muted-foreground">
            {endContent}
          </div>
        )}
      </div>

      {errorMessage && (
        <p
          id={errorId}
          className="text-sm font-medium text-destructive mt-1"
          role="alert"
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
}

FormFieldComponent.displayName = "FormField";

export const FormField = React.forwardRef(FormFieldComponent) as <
  T extends FormValues = FormValues,
  K extends keyof T = keyof T
>(
  props: FormFieldProps<T, K> & { ref?: React.ForwardedRef<HTMLInputElement> }
) => React.ReactElement;

export default FormField;