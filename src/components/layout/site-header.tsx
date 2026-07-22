"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Palette, RefreshCw, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button-link";
import { usePortalMode } from "@/context/portal-mode";
import { siteConfig } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { ready, hasChosen, isStudent, isBuyer, label, clearMode } =
    usePortalMode();

  const navItems = !hasChosen
    ? []
    : isBuyer
      ? [{ href: "/marketplace", label: "Marketplace" }]
      : [
          { href: "/home", label: "Home" },
          { href: "/register", label: "Register" },
          { href: "/learn", label: "Learn" },
          { href: "/marketplace", label: "Marketplace" },
        ];

  const homeHref = !hasChosen ? "/" : isBuyer ? "/marketplace" : "/home";

  return (
    <header className="sticky top-0 z-50 border-b border-indigo-warm/10 bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href={homeHref}
          className="group flex items-center gap-2.5 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-warm"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="flex size-10 items-center justify-center rounded-2xl bg-indigo-warm text-white shadow-sm shadow-indigo-warm/30 transition group-hover:scale-[1.03]">
            <Palette className="size-5" aria-hidden />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-indigo-deep sm:text-2xl">
            {siteConfig.name}
          </span>
        </Link>

        {ready && hasChosen ? (
          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Primary"
          >
            {navItems.map((item) => {
              const active =
                item.href === "/home"
                  ? pathname === "/home"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-3.5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-warm",
                    active
                      ? "bg-indigo-warm/10 text-indigo-deep"
                      : "text-ink-muted hover:bg-sand-100 hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        ) : null}

        <div className="hidden items-center gap-3 lg:flex">
          {ready && hasChosen ? (
            <>
              <span className="rounded-xl bg-sand-100 px-3 py-2 text-xs font-semibold text-ink-muted">
                {label}
              </span>
              <Link
                href="/"
                onClick={() => clearMode()}
                className="inline-flex min-h-10 items-center gap-2 rounded-xl px-3 text-sm font-semibold text-indigo-deep hover:bg-indigo-warm/10"
              >
                <RefreshCw className="size-4" aria-hidden />
                Switch identity
              </Link>
              {isStudent ? (
                <ButtonLink href="/learn" size="sm" variant="primary">
                  Start Learning
                </ButtonLink>
              ) : null}
              <ButtonLink href="/marketplace" size="sm" variant="outline">
                Explore Gallery
              </ButtonLink>
            </>
          ) : null}
        </div>

        {ready && hasChosen ? (
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-2xl border border-indigo-warm/15 bg-white text-indigo-deep md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        ) : null}
      </div>

      {open && hasChosen ? (
        <div
          id="mobile-nav"
          className="border-t border-indigo-warm/10 bg-canvas px-4 py-4 md:hidden"
        >
          <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-ink-muted">
            {label}
          </p>
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-semibold text-ink hover:bg-sand-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 grid gap-2">
            <Link
              href="/"
              onClick={() => {
                clearMode();
                setOpen(false);
              }}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-indigo-warm/15 bg-white px-4 text-sm font-semibold text-indigo-deep"
            >
              <RefreshCw className="size-4" aria-hidden />
              Switch identity
            </Link>
            {isStudent ? (
              <ButtonLink href="/learn" onClick={() => setOpen(false)}>
                Start Learning
              </ButtonLink>
            ) : null}
            <ButtonLink
              href="/marketplace"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Explore Gallery
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
