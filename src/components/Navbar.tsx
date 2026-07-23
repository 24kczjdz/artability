"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Heart,
  Menu,
  Palette,
  RefreshCw,
  X,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button-link";
import { usePortalMode } from "@/context/portal-mode";
import type { PortalMode } from "@/types";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [identityOpen, setIdentityOpen] = useState(false);
  const identityRef = useRef<HTMLDivElement>(null);
  const { mode, setMode, clearMode, hasChosen, ready, isBuyer, isStudent } =
    usePortalMode();

  const isRoleChooser = pathname === "/" && !hasChosen;
  const showFullNav = ready && hasChosen && !isRoleChooser;

  const navItems = siteConfig.nav.filter((item) => {
    if (isBuyer && item.href === "/learn") {
      return false;
    }
    return true;
  });

  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      if (
        identityRef.current &&
        !identityRef.current.contains(event.target as Node)
      ) {
        setIdentityOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function chooseIdentity(next: PortalMode) {
    setMode(next);
    setIdentityOpen(false);
    setOpen(false);
    if (next === "buyer" && (pathname.startsWith("/learn") || pathname.startsWith("/portal"))) {
      router.push("/marketplace");
      return;
    }
    if (pathname === "/") {
      router.push("/bus-gallery");
    }
  }

  function switchRole() {
    clearMode();
    setIdentityOpen(false);
    setOpen(false);
    router.push("/");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-violet/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href={hasChosen ? "/" : "/"}
          className="group flex items-center gap-2.5 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="relative flex size-11 items-center justify-center rounded-2xl bg-violet text-white shadow-md shadow-violet/30">
            <Palette className="size-5" aria-hidden />
            <Heart
              className="absolute -right-1 -top-1 size-4 fill-coral text-coral"
              aria-hidden
            />
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight text-violet-deep sm:text-2xl">
            {siteConfig.name}
          </span>
        </Link>

        {showFullNav ? (
          <nav
            className="hidden items-center gap-0.5 xl:flex"
            aria-label="Primary"
          >
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm font-semibold transition",
                    active
                      ? "bg-pastel-lilac text-violet-deep"
                      : "text-ink-muted hover:bg-sand-50 hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        ) : (
          <div className="hidden flex-1 xl:block" />
        )}

        <div className="hidden items-center gap-2 lg:flex">
          {showFullNav ? (
            <>
              <div className="relative" ref={identityRef}>
                <button
                  type="button"
                  onClick={() => setIdentityOpen((v) => !v)}
                  className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-violet/20 bg-white px-3 py-2 text-xs font-semibold text-ink hover:bg-pastel-lilac"
                  aria-expanded={identityOpen}
                  aria-haspopup="listbox"
                >
                  Switch role
                  <ChevronDown className="size-4" aria-hidden />
                </button>
                {identityOpen ? (
                  <ul
                    role="listbox"
                    className="absolute right-0 z-50 mt-2 w-60 overflow-hidden rounded-2xl border border-violet/15 bg-white py-1 shadow-xl"
                  >
                    {(
                      [
                        {
                          mode: "student" as const,
                          title: "Artist / Parent Portal",
                          hint: "Learn → Create → Upload",
                        },
                        {
                          mode: "buyer" as const,
                          title: "Buyer / CSR Mode",
                          hint: "Discover → Scan → Buy",
                        },
                      ] as const
                    ).map((option) => (
                      <li key={option.mode}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={mode === option.mode}
                          onClick={() => chooseIdentity(option.mode)}
                          className={cn(
                            "flex w-full flex-col px-4 py-3 text-left text-sm hover:bg-pastel-lilac",
                            mode === option.mode && "bg-pastel-lilac",
                          )}
                        >
                          <span className="font-semibold text-ink">
                            {option.title}
                          </span>
                          <span className="text-xs text-ink-muted">
                            {option.hint}
                          </span>
                        </button>
                      </li>
                    ))}
                    <li className="border-t border-violet/10">
                      <button
                        type="button"
                        onClick={switchRole}
                        className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm font-semibold text-violet-deep hover:bg-pastel-lilac"
                      >
                        <RefreshCw className="size-4" aria-hidden />
                        Reset & choose again
                      </button>
                    </li>
                  </ul>
                ) : null}
              </div>
              {!isBuyer ? (
                <ButtonLink href="/learn" size="sm" variant="primary">
                  Start Learning
                </ButtonLink>
              ) : null}
              <ButtonLink href="/marketplace" size="sm" variant="secondary">
                Explore Gallery
              </ButtonLink>
            </>
          ) : null}
        </div>

        {showFullNav ? (
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-violet/15 bg-white text-violet-deep xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        ) : null}
      </div>

      {open && showFullNav ? (
        <div
          id="mobile-nav"
          className="border-t border-violet/10 bg-white px-4 py-4 xl:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-semibold text-ink hover:bg-pastel-lilac"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 grid gap-2">
            <button
              type="button"
              onClick={() => chooseIdentity("student")}
              className={cn(
                "rounded-2xl border px-4 py-3 text-left text-sm font-semibold",
                isStudent
                  ? "border-violet bg-pastel-lilac"
                  : "border-violet/15",
              )}
            >
              Artist / Parent Portal
            </button>
            <button
              type="button"
              onClick={() => chooseIdentity("buyer")}
              className={cn(
                "rounded-2xl border px-4 py-3 text-left text-sm font-semibold",
                isBuyer ? "border-teal bg-pastel-mint" : "border-violet/15",
              )}
            >
              Buyer / CSR Mode
            </button>
            {!isBuyer ? (
              <ButtonLink href="/learn" onClick={() => setOpen(false)}>
                Start Learning
              </ButtonLink>
            ) : null}
            <ButtonLink
              href="/marketplace"
              variant="secondary"
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
