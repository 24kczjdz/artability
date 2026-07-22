"use client";

import { Building2, Users } from "lucide-react";
import { usePortalMode } from "@/context/portal-mode";
import { cn } from "@/lib/utils";
import type { PortalMode } from "@/types";

const options: {
  mode: PortalMode;
  label: string;
  short: string;
  icon: typeof Users;
}[] = [
  {
    mode: "student",
    label: "Student / Parent Portal",
    short: "Student / Parent",
    icon: Users,
  },
  {
    mode: "buyer",
    label: "Buyer / Corporate CSR Portal",
    short: "Buyer / CSR",
    icon: Building2,
  },
];

export function RoleSwitcher({ className }: { className?: string }) {
  const { mode, setMode } = usePortalMode();

  return (
    <div
      className={cn(
        "inline-flex rounded-2xl border border-indigo-warm/15 bg-white/80 p-1 shadow-sm",
        className,
      )}
      role="group"
      aria-label="Portal mode"
    >
      {options.map((option) => {
        const Icon = option.icon;
        const selected = mode === option.mode;
        return (
          <button
            key={option.mode}
            type="button"
            aria-pressed={selected}
            onClick={() => setMode(option.mode)}
            className={cn(
              "inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-warm sm:text-sm",
              selected
                ? "bg-teal-calm text-white shadow-sm"
                : "text-ink-muted hover:bg-sand-100 hover:text-ink",
            )}
          >
            <Icon className="size-4 shrink-0" aria-hidden />
            <span className="whitespace-nowrap">{option.short}</span>
            <span className="sr-only">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
