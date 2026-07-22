import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      style={style}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-xl bg-teal-calm/15 px-2.5 py-1 text-xs font-semibold text-teal-deep",
        className,
      )}
    >
      {children}
    </span>
  );
}
