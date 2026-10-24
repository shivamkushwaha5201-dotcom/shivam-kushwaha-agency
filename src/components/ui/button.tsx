import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#459B45] to-[#246B32] text-white shadow-md shadow-[#459B45]/20 hover:from-[#246B32] hover:to-[#459B45] hover:shadow-lg hover:shadow-[#459B45]/30",
        primary:
          "bg-[#459B45] text-white hover:bg-[#246B32] shadow-sm hover:shadow",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-[#E5E9E5] bg-[#FFFFFF] text-[#111111] hover:bg-[#F7F9F7] hover:border-[#459B45]/60 hover:text-[#246B32] shadow-sm",
        secondary:
          "bg-[#F7F9F7] text-[#111111] hover:bg-[#E5F5E5] border border-[#E5E9E5]",
        ghost: "text-[#555B55] hover:bg-[#F7F9F7] hover:text-[#111111]",
        link: "text-[#459B45] underline-offset-4 hover:underline hover:text-[#246B32]",
        subtleBlue: "bg-[#E5F5E5] text-[#246B32] border border-[#459B45]/30 hover:bg-[#E5F5E5]/80",
        subtleOrange: "bg-[#E5F5E5] text-[#246B32] border border-[#459B45]/30 hover:bg-[#E5F5E5]/80",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-3.5 text-xs",
        lg: "h-12 rounded-xl px-7 text-base font-semibold",
        icon: "h-10 w-10 p-0 rounded-xl",
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
