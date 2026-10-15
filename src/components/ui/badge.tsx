import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 tracking-wide",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#7028D8] text-white shadow hover:bg-[#5E1EC0]",
        secondary:
          "border border-[#30213F] bg-[#1E1430] text-[#F8F6FF] hover:bg-[#2A1C44]",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-[#F8F6FF] border-[#30213F] bg-[#151020]",
        blue: "border-[#7028D8]/40 bg-[#241738] text-[#B69AFF] font-medium",
        orange: "border-[#7028D8]/40 bg-[#241738] text-[#B69AFF] font-medium",
        amber: "border-[#7028D8]/40 bg-[#241738] text-[#B69AFF] font-medium",
        emerald: "border-emerald-500/30 bg-emerald-950/40 text-emerald-300 font-medium",
        purple: "border-[#7028D8]/50 bg-[#241738] text-[#B69AFF] font-medium",
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
