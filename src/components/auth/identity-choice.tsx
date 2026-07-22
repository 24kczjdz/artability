"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Building2, HeartHandshake, Palette, ShoppingBag } from "lucide-react";
import { siteConfig } from "@/data/site";
import { usePortalMode } from "@/context/portal-mode";
import type { PortalMode } from "@/types";

const options: {
  mode: PortalMode;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  icon: typeof Palette;
  points: string[];
}[] = [
  {
    mode: "student",
    title: "Artist / Kid’s Parent",
    subtitle: "Learn · Create · Sell",
    description:
      "For young artists and parents/guardians. Access AI lessons, verification, and the marketplace.",
    href: "/home",
    icon: HeartHandshake,
    points: [
      "Register & verify support needs",
      "Personalized AI art lessons",
      "Upload work to the marketplace",
    ],
  },
  {
    mode: "buyer",
    title: "Buyer / Public",
    subtitle: "Browse · Buy · Support",
    description:
      "For collectors, CSR buyers, and the public. Browse and purchase artwork only — no lesson access.",
    href: "/marketplace",
    icon: ShoppingBag,
    points: [
      "Physical & digital artwork",
      "Verified ASD creators",
      "Transparent revenue split",
    ],
  },
];

export function IdentityChoice() {
  const router = useRouter();
  const { setMode } = usePortalMode();

  function choose(mode: PortalMode, href: string) {
    setMode(mode);
    router.push(href);
  }

  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-hero-wash" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(240,160,75,0.3), transparent 40%), radial-gradient(circle at 80% 30%, rgba(61,90,128,0.25), transparent 42%)",
        }}
        aria-hidden
      />

      <div className="mx-auto flex min-h-[calc(100svh-8rem)] max-w-5xl flex-col justify-center px-4 py-14 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-indigo-warm text-white shadow-lg shadow-indigo-warm/30">
            <Palette className="size-7" aria-hidden />
          </span>
          <p className="mt-5 font-display text-4xl font-extrabold tracking-tight text-indigo-deep sm:text-5xl">
            {siteConfig.name}
          </p>
          <h1 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">
            Who is joining today?
          </h1>
          <p className="mt-3 text-base leading-relaxed text-ink-muted sm:text-lg">
            Fake registration for this demo — pick an identity to open the right
            portal. You can switch later from the header.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {options.map((option, index) => {
            const Icon = option.icon;
            return (
              <motion.button
                key={option.mode}
                type="button"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
                onClick={() => choose(option.mode, option.href)}
                className="rounded-[2rem] border border-indigo-warm/15 bg-white/90 p-6 text-left shadow-lg shadow-indigo-deep/5 transition hover:-translate-y-0.5 hover:border-indigo-warm/40 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-warm sm:p-8"
              >
                <span
                  className={`inline-flex size-12 items-center justify-center rounded-2xl text-white ${
                    option.mode === "student" ? "bg-teal-calm" : "bg-indigo-warm"
                  }`}
                >
                  <Icon className="size-6" aria-hidden />
                </span>
                <p className="mt-5 font-display text-2xl font-bold text-indigo-deep">
                  {option.title}
                </p>
                <p className="mt-1 text-sm font-semibold text-amber-deep">
                  {option.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {option.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {option.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-ink"
                    >
                      <Building2
                        className="mt-0.5 size-4 shrink-0 text-teal-calm"
                        aria-hidden
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-bold text-indigo-deep">
                  Continue as {option.title} →
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
