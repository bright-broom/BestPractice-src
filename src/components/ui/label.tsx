import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const labelVariants = cva(
  cn(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
    "select-none"
  ),
  {
    variants: {
      variant: {
        default: "text-foreground",
        error: "text-destructive",
        success: "text-success",
      },
      required: {
        true: "after:content-['*'] after:text-destructive after:ml-0.5",
      },
    },
    defaultVariants: {
      variant: "default",
      required: false,
    },
  }
);

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {
  error?: boolean;
}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, variant, required, error, ...props }, ref) => {
  // エラー状態の場合、バリアントを強制的にerrorに設定
  const effectiveVariant = error ? "error" : variant;

  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants({ variant: effectiveVariant, required, className }))}
      {...props}
    />
  );
});

Label.displayName = LabelPrimitive.Root.displayName;

export { Label, labelVariants };
