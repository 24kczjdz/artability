"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bus, Sparkles, Store, Upload } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/button-link";
import { CornerDoodles } from "@/components/ui/corner-doodles";
import { FeaturedModules } from "@/components/home/featured-modules";
import { FlywheelSection } from "@/components/home/flywheel-section";
import { StatsBanner } from "@/components/home/stats-banner";
import { usePortalMode } from "@/context/portal-mode";

export default function HomeLanding() {
  const { isBuyer } = usePortalMode();

  return (
    <>
      <section className="relative isolate overflow-hidden bg-hero-wash">
        <CornerDoodles />
        <div className="mx-auto grid min-h-[calc(100svh-4.75rem)] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative z-10 max-w-xl"
          >
            <p className="font-display text-4xl font-extrabold tracking-tight text-violet-deep sm:text-5xl lg:text-6xl">
              {siteConfig.name}
            </p>
            <h1 className="mt-4 text-balance text-2xl font-bold leading-tight text-ink sm:text-3xl lg:text-[2.15rem]">
              {siteConfig.tagline}
            </h1>
            <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {!isBuyer ? (
                <ButtonLink href="/learn" size="lg" variant="primary">
                  <Sparkles aria-hidden />
                  Start Learning
                </ButtonLink>
              ) : null}
              <ButtonLink href="/marketplace" size="lg" variant="outline">
                <Store aria-hidden />
                Explore Gallery
                <ArrowRight aria-hidden />
              </ButtonLink>
              <ButtonLink href="/bus-gallery" size="lg" variant="teal">
                <Bus aria-hidden />
                Art on the Move
              </ButtonLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative z-10 min-h-[280px] sm:min-h-[360px] lg:min-h-[440px]"
            aria-hidden
          >
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-gradient-to-br from-sunflower via-coral/80 to-violet shadow-2xl shadow-violet/20">
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-violet-deep/60 to-transparent p-6 pt-16">
                <p className="font-display text-lg font-bold text-white">
                  {siteConfig.busName}: {siteConfig.busTagline}
                </p>
                <p className="mt-1 text-sm text-white/85">
                  Learn → Create → Upload → Marketplace + Bus Gallery
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <StatsBanner />

      <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <CornerDoodles density="light" />
        <div className="relative z-10 max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-violet-deep">
            Three connected paths
          </h2>
          <p className="mt-3 text-ink-muted">
            Artist learning, public discovery on the bus, and sustainable
            commerce — one platform.
          </p>
        </div>
        <div className="relative z-10 mt-8 grid gap-5 md:grid-cols-3">
          <PathCard
            href={isBuyer ? "/marketplace" : "/learn"}
            icon={<Sparkles className="size-6" />}
            title="Path A · Learn & Create"
            body="Profile setup, AI lessons, then upload finished work in the Artist Portal for review."
            accent="bg-pastel-lilac text-violet-deep"
          />
          <PathCard
            href="/bus-gallery"
            icon={<Bus className="size-6" />}
            title="Path B · Art on the Move"
            body="Tour schedule, QR scan checkout, and invite-the-bus CSR requests."
            accent="bg-pastel-mint text-teal-deep"
          />
          <PathCard
            href="/marketplace"
            icon={<Store className="size-6" />}
            title="Path C · Marketplace"
            body="Physical, merchandise, and digital CSR licenses with transparent royalties."
            accent="bg-pastel-peach text-sunflower-deep"
          />
        </div>
        {!isBuyer ? (
          <div className="relative z-10 mt-6">
            <ButtonLink href="/portal" variant="outline">
              <Upload aria-hidden />
              Open Artist Upload Portal
            </ButtonLink>
          </div>
        ) : null}
      </section>

      <FeaturedModules />
      <FlywheelSection />
    </>
  );
}

function PathCard({
  href,
  icon,
  title,
  body,
  accent,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  body: string;
  accent: string;
}) {
  return (
    <a
      href={href}
      className="group rounded-[1.75rem] border border-violet/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <span
        className={`inline-flex size-12 items-center justify-center rounded-2xl ${accent}`}
      >
        {icon}
      </span>
      <h3 className="mt-4 text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
      <p className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-violet-deep">
        Explore
        <ArrowRight className="size-4" aria-hidden />
      </p>
    </a>
  );
}
