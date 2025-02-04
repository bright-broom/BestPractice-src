import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { getInteractiveBaseClass } from "../../lib/design-system";

const inputVariants = cva(
  cn(
    "flex w-full rounded-md border bg-background text-sm ring-offset-background",
    "file:border-0 file:bg-transparent file:text-sm file:font-medium",
    "placeholder:text-muted-foreground",
    "disabled:cursor-not-allowed disabled:opacity-50",
    getInteractiveBaseClass()
  ),
  {
    variants: {
      variant: {
        default: cn(
          "border-input",
          "focus:border-primary"
        ),
        error: cn(
          "border-destructive",
          "focus:border-destructive"
        ),
        success: cn(
          "border-success",
          "focus:border-success"
        ),
      },
      size: {
        sm: "h-8 px-2 text-xs",
        md: "h-10 px-3 text-sm",
        lg: "h-12 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  error?: boolean;
  size?: "sm" | "md" | "lg";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size = "md", error, type, ...props }, ref) => {
    // エラー状態の場合、バリアントを強制的にerrorに設定
    const effectiveVariant = error ? "error" : variant;

    return (
      <input
        type={type}
        className={cn(inputVariants({ variant: effectiveVariant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
