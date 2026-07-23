import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-base font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-violet text-white shadow-md shadow-violet/25 hover:bg-violet-deep focus-visible:outline-violet",
        secondary:
          "bg-sunflower text-ink hover:bg-sunflower-deep hover:text-white focus-visible:outline-sunflower",
        outline:
          "border-2 border-violet/25 bg-white text-violet-deep hover:border-violet hover:bg-pastel-lilac focus-visible:outline-violet",
        ghost:
          "bg-transparent text-violet-deep hover:bg-pastel-lilac focus-visible:outline-violet",
        teal: "bg-teal text-white hover:bg-teal-deep focus-visible:outline-teal",
        coral:
          "bg-coral text-white shadow-md shadow-coral/25 hover:bg-coral-deep focus-visible:outline-coral",
      },
      size: {
        default: "min-h-12 px-6 py-3",
        sm: "min-h-10 rounded-full px-4 py-2 text-sm",
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
