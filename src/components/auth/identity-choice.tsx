"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { HeartHandshake, Palette, ShoppingBag, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import { usePortalMode } from "@/context/portal-mode";
import { CornerDoodles } from "@/components/ui/corner-doodles";
import type { PortalMode } from "@/types";

const options: {
  mode: PortalMode;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Palette;
  points: string[];
}[] = [
  {
    mode: "student",
    title: "Artist / Kid’s Parent",
    subtitle: "Learn · Create · Sell",
    description:
      "For young artists and parents/guardians. Access AI lessons, verification, marketplace, and the Painting Bus.",
    icon: HeartHandshake,
    points: [
      "Personalized AI art lessons",
      "Marketplace & Painting Bus exhibitions",
      "Register & verify support needs",
    ],
  },
  {
    mode: "buyer",
    title: "Buyer / CSR",
    subtitle: "Browse · Buy · Support",
    description:
      "For collectors, CSR partners, and the public. Browse marketplace and Painting Bus — no lesson access.",
    icon: ShoppingBag,
    points: [
      "Physical & digital artwork",
      "Visit Painting Bus offline events",
      "Transparent creator support",
    ],
  },
];

export function IdentityChoice() {
  const router = useRouter();
  const { setMode } = usePortalMode();

  function choose(mode: PortalMode) {
    setMode(mode);
    router.push("/bus-gallery");
  }

  return (
    <div className="relative isolate min-h-[calc(100svh-4.75rem)] overflow-hidden bg-hero-wash">
      <CornerDoodles />
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col justify-center px-4 py-14 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-violet text-white shadow-lg shadow-violet/30">
            <Palette className="size-7" aria-hidden />
          </span>
          <p className="mt-5 font-display text-4xl font-extrabold tracking-tight text-violet-deep sm:text-5xl">
            {siteConfig.name}
          </p>
          <h1 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">
            Who is joining today?
          </h1>
          <p className="mt-3 text-base leading-relaxed text-ink-muted sm:text-lg">
            Choose a role to continue. Next you&apos;ll land on the Painting
            Bus gallery — speak with arts, walk with stars.
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
                onClick={() => choose(option.mode)}
                className="rounded-[2rem] border border-violet/15 bg-white/95 p-6 text-left shadow-lg shadow-violet/10 transition hover:-translate-y-0.5 hover:border-violet/40 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet sm:p-8"
              >
                <span
                  className={`inline-flex size-12 items-center justify-center rounded-2xl text-white ${
                    option.mode === "student" ? "bg-teal" : "bg-violet"
                  }`}
                >
                  <Icon className="size-6" aria-hidden />
                </span>
                <p className="mt-5 font-display text-2xl font-bold text-violet-deep">
                  {option.title}
                </p>
                <p className="mt-1 text-sm font-semibold text-sunflower-deep">
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
                      <Sparkles
                        className="mt-0.5 size-4 shrink-0 text-coral"
                        aria-hidden
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-bold text-violet-deep">
                  Continue → Painting Bus
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
