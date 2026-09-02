import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 tracking-wide",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-slate-900 text-slate-50 shadow hover:bg-slate-800",
        secondary:
          "border-transparent bg-slate-100 text-slate-900 hover:bg-slate-200",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-slate-700 border-slate-200 bg-white",
        blue: "border-blue-200 bg-blue-50/90 text-blue-800 font-medium",
        orange: "border-blue-200 bg-blue-50/90 text-blue-800 font-medium",
        amber: "border-blue-200 bg-blue-50 text-blue-900 font-medium",
        emerald: "border-emerald-200 bg-emerald-50 text-emerald-800 font-medium",
        purple: "border-indigo-200 bg-indigo-50 text-indigo-800 font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
