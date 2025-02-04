import * as React from "react";
import { Label } from "./label";
import { Input, type InputProps } from "./input";
import { cn } from "@/lib/utils";

export interface FormFieldProps extends Omit<InputProps, 'error'> {
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
}

const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ 
    id,
    label, 
    description,
    error,
    required,
    className,
    ...props 
  }, ref) => {
    // 一意のIDを生成（idが提供されていない場合）
    const uniqueId = React.useId();
    const fieldId = id || uniqueId;
    const descriptionId = `${fieldId}-description`;
    const errorId = `${fieldId}-error`;

    // エラーメッセージの有無をbooleanとしてInputに渡す
    const hasError = !!error;

    return (
      <div className="space-y-2">
        {label && (
          <Label
            htmlFor={fieldId}
            required={required}
            error={hasError}
          >
            {label}
          </Label>
        )}
        {description && (
          <p
            id={descriptionId}
            className="text-sm text-muted-foreground"
          >
            {description}
          </p>
        )}
        <Input
          ref={ref}
          id={fieldId}
          aria-describedby={
            cn(
              description ? descriptionId : undefined,
              error ? errorId : undefined
            )
          }
          aria-invalid={hasError}
          error={hasError}
          required={required}
          {...props}
        />
        {error && (
          <p
            id={errorId}
            className="text-sm font-medium text-destructive"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = "FormField";

export { FormField };