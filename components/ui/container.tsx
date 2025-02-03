import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, as: Component = "div", children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "container px-4 md:px-6 mx-auto relative z-10",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";

export { Container };