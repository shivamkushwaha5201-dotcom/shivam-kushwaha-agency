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
          "bg-gradient-to-r from-[#7028D8] to-[#8B5CE8] text-white shadow-md shadow-[#7028D8]/20 hover:from-[#5E1EC0] hover:to-[#7028D8] hover:shadow-lg hover:shadow-[#7028D8]/30",
        primary:
          "bg-[#7028D8] text-white hover:bg-[#5E1EC0] shadow-sm hover:shadow",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-[#30213F] bg-[#151020] text-[#F8F6FF] hover:bg-[#1E1430] hover:border-[#7028D8]/60 hover:text-white shadow-sm",
        secondary:
          "bg-[#1E1430] text-[#F8F6FF] hover:bg-[#2A1C44] border border-[#30213F]",
        ghost: "text-[#B7AEC9] hover:bg-[#1E1430] hover:text-[#F8F6FF]",
        link: "text-[#B69AFF] underline-offset-4 hover:underline",
        subtleBlue: "bg-[#241738] text-[#B69AFF] border border-[#7028D8]/30 hover:bg-[#35106B]/50",
        subtleOrange: "bg-[#241738] text-[#B69AFF] border border-[#7028D8]/30 hover:bg-[#35106B]/50",
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
