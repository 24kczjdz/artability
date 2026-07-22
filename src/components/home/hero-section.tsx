"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Store } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/button-link";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-hero-wash"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 22%, rgba(240,160,75,0.35), transparent 42%), radial-gradient(circle at 82% 18%, rgba(61,90,128,0.28), transparent 40%), radial-gradient(circle at 70% 78%, rgba(47,107,90,0.28), transparent 45%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-canvas to-transparent"
        aria-hidden
      />

      <div className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-xl"
        >
          <p className="font-display text-4xl font-extrabold tracking-tight text-indigo-deep sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </p>
          <h1 className="mt-4 text-balance text-2xl font-bold leading-tight text-ink sm:text-3xl lg:text-[2.15rem]">
            {siteConfig.tagline}
          </h1>
          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
            {siteConfig.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/register" size="lg" variant="primary">
              <Sparkles aria-hidden />
              Register & Verify
            </ButtonLink>
            <ButtonLink href="/marketplace" size="lg" variant="outline">
              <Store aria-hidden />
              Browse Artwork Marketplace
              <ArrowRight aria-hidden />
            </ButtonLink>
          </div>

          <p className="mt-5 text-sm font-medium text-teal-deep">
            Artist / Parent portal: verify support needs, learn with AI, then
            share work in the marketplace.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[440px]"
          aria-hidden
        >
          <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-gradient-to-br from-amber-soft via-teal-calm/70 to-indigo-warm shadow-2xl shadow-indigo-deep/20">
            <div className="absolute -left-8 top-10 size-40 rounded-full bg-white/25 blur-2xl" />
            <div className="absolute bottom-8 right-6 size-52 rounded-full bg-indigo-deep/25 blur-3xl" />
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 size-full"
              role="presentation"
            >
              <path
                d="M40 280 C90 180, 140 320, 200 220 C250 140, 290 240, 360 160"
                fill="none"
                stroke="rgba(255,255,255,0.55)"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <circle cx="118" cy="150" r="34" fill="rgba(255,248,235,0.85)" />
              <circle cx="270" cy="110" r="22" fill="rgba(61,90,128,0.45)" />
              <rect
                x="70"
                y="300"
                width="70"
                height="48"
                rx="14"
                fill="rgba(255,255,255,0.35)"
              />
              <rect
                x="160"
                y="270"
                width="90"
                height="78"
                rx="18"
                fill="rgba(255,255,255,0.28)"
              />
              <rect
                x="270"
                y="250"
                width="64"
                height="98"
                rx="16"
                fill="rgba(47,107,90,0.45)"
              />
            </svg>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-indigo-deep/55 to-transparent p-6 pt-16">
              <p className="font-display text-lg font-bold text-white">
                Art that teaches. Art that sustains.
              </p>
              <p className="mt-1 text-sm text-white/85">
                Adaptive lessons → marketplace → family income
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
