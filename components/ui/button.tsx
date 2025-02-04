import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/utils";
import {
  getColorVariant,
  getSizeClasses,
  getElevation,
  getAnimation,
  getInteractiveBaseClass,
  getTransitionClass,
} from "../../lib/design-system";

const buttonVariants = cva(
  cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
    getInteractiveBaseClass(),
    getAnimation('scale')
  ),
  {
    variants: {
      variant: {
        default: cn(
          getColorVariant('primary').background,
          getColorVariant('primary').text,
          getColorVariant('primary').hover,
          getElevation('elevation-1')
        ),
        destructive: cn(
          getColorVariant('destructive').background,
          getColorVariant('destructive').text,
          getColorVariant('destructive').hover,
          getElevation('elevation-1')
        ),
        outline: cn(
          'border',
          getColorVariant('muted').border,
          'bg-background',
          getElevation('elevation-1'),
          'hover:bg-accent hover:text-accent-foreground'
        ),
        secondary: cn(
          getColorVariant('secondary').background,
          getColorVariant('secondary').text,
          getColorVariant('secondary').hover,
          getElevation('elevation-1')
        ),
        ghost: cn(
          'hover:bg-accent hover:text-accent-foreground',
          getAnimation('fade-in')
        ),
        link: cn(
          'text-primary underline-offset-4 hover:underline',
          getAnimation('fade-in')
        ),
      },
      size: {
        default: cn(getSizeClasses('md').padding, getSizeClasses('md').fontSize),
        sm: cn(getSizeClasses('sm').padding, getSizeClasses('sm').fontSize),
        lg: cn(getSizeClasses('lg').padding, getSizeClasses('lg').fontSize),
        icon: "h-9 w-9 p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
