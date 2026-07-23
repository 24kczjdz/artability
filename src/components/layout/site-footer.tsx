"use client";

import Link from "next/link";
import { HeartHandshake } from "lucide-react";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-violet/10 bg-violet-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight">
            {siteConfig.name}
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85">
            Warm, accessible AI art education paired with a marketplace and
            Painting Bus that returns income to special needs artist
            families.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-start">
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/90 underline-offset-4 hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="inline-flex items-center gap-2 text-sm text-white/75">
            <HeartHandshake className="size-4" aria-hidden />
            Learn · Create · Earn · Sustain
          </p>
        </div>
      </div>
    </footer>
  );
}
