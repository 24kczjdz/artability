"use client";

import Link from "next/link";
import { HeartHandshake } from "lucide-react";
import { siteConfig } from "@/data/site";
import { usePortalMode } from "@/context/portal-mode";

export function SiteFooter() {
  const { hasChosen, isBuyer, isStudent } = usePortalMode();

  const links = !hasChosen
    ? [{ href: "/", label: "Choose identity" }]
    : isBuyer
      ? [
          { href: "/marketplace", label: "Marketplace" },
          { href: "/", label: "Switch identity" },
        ]
      : [
          { href: "/home", label: "Home" },
          { href: "/register", label: "Register" },
          { href: "/learn", label: "Learn" },
          { href: "/marketplace", label: "Marketplace" },
          { href: "/", label: "Switch identity" },
        ];

  return (
    <footer className="mt-auto border-t border-indigo-warm/10 bg-indigo-deep text-sand-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight">
            {siteConfig.name}
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-sand-100/85">
            Warm, accessible AI art education paired with a marketplace that
            returns income to special needs artist families.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-start">
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
            {links.map((item) => (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                className="text-sm font-medium text-sand-100/90 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-soft"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="inline-flex items-center gap-2 text-sm text-sand-100/75">
            <HeartHandshake className="size-4" aria-hidden />
            {isStudent
              ? "Learn · Create · Earn · Sustain"
              : isBuyer
                ? "Browse · Buy · Support"
                : "Choose your portal to begin"}
          </p>
        </div>
      </div>
    </footer>
  );
}
