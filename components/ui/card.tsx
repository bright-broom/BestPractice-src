import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import {
  getElevation,
  getAnimation,
  getInteractiveBaseClass,
  getSizeClasses,
  getTransitionClass,
} from "@/lib/design-system";

// カードのベースとなるバリアントを定義
const cardVariants = cva(
  cn(
    "rounded-xl border bg-card text-card-foreground",
    getTransitionClass('normal'),
    getAnimation('scale')
  ),
  {
    variants: {
      variant: {
        default: cn(
          getElevation('elevation-1'),
          "hover:bg-card/95"
        ),
        interactive: cn(
          getElevation('elevation-2'),
          getInteractiveBaseClass(),
          "hover:bg-card/95 cursor-pointer"
        ),
        ghost: "border-none shadow-none hover:bg-muted/50",
        outline: "bg-transparent",
      },
      size: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, size, className }))}
      {...props}
    />
  )
);
Card.displayName = "Card";

// ヘッダーのバリアントを定義
const headerVariants = cva("flex flex-col space-y-1.5", {
  variants: {
    size: {
      default: "p-6",
      sm: "p-4",
      lg: "p-8",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface CardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof headerVariants> {}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(headerVariants({ size, className }))}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

// タイトルのバリアントを定義
const titleVariants = cva("font-semibold tracking-tight", {
  variants: {
    size: {
      default: getSizeClasses('md').fontSize,
      sm: getSizeClasses('sm').fontSize,
      lg: getSizeClasses('lg').fontSize,
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, size, as: Comp = 'h3', ...props }, ref) => (
    <Comp
      ref={ref}
      className={cn(titleVariants({ size, className }))}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

// フッターのバリアントを定義
const footerVariants = cva("flex items-center", {
  variants: {
    size: {
      default: "p-6 pt-0",
      sm: "p-4 pt-0",
      lg: "p-8 pt-0",
    },
    align: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    },
  },
  defaultVariants: {
    size: "default",
    align: "start",
  },
});

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof footerVariants> {}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, size, align, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(footerVariants({ size, align, className }))}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
