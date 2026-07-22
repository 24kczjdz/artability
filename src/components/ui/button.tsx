import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-2xl text-base font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-indigo-warm text-white shadow-sm shadow-indigo-warm/25 hover:bg-indigo-deep focus-visible:outline-indigo-warm",
        secondary:
          "bg-amber-soft text-ink hover:bg-amber-deep hover:text-white focus-visible:outline-amber-deep",
        outline:
          "border-2 border-indigo-warm/25 bg-white/70 text-indigo-deep hover:border-indigo-warm hover:bg-white focus-visible:outline-indigo-warm",
        ghost:
          "bg-transparent text-indigo-deep hover:bg-indigo-warm/10 focus-visible:outline-indigo-warm",
        teal: "bg-teal-calm text-white hover:bg-teal-deep focus-visible:outline-teal-calm",
      },
      size: {
        default: "min-h-12 px-6 py-3",
        sm: "min-h-10 rounded-xl px-4 py-2 text-sm",
        lg: "min-h-14 px-8 py-4 text-lg",
        icon: "size-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
