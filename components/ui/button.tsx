import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2540] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-sm hover:shadow-md",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#0A2540] to-[#1E4A6B] text-white hover:from-[#0d2f4f] hover:to-[#255a7a] transform hover:-translate-y-0.5",
        outline:
          "border-2 border-[#0A2540] bg-transparent text-[#0A2540] hover:bg-[#0A2540] hover:text-white",
        ghost: "hover:bg-gray-100 text-[#0A2540] shadow-none",
      },
      size: {
        default: "h-12 px-8 py-2",
        sm: "h-10 rounded-lg px-5 text-sm",
        lg: "h-14 rounded-xl px-10 text-base",
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
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
