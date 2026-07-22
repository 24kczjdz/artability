"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FeaturedModules } from "@/components/home/featured-modules";
import { FlywheelSection } from "@/components/home/flywheel-section";
import { HeroSection } from "@/components/home/hero-section";
import { StatsBanner } from "@/components/home/stats-banner";
import { usePortalMode } from "@/context/portal-mode";

export default function HomePage() {
  const router = useRouter();
  const { ready, hasChosen, isBuyer } = usePortalMode();

  useEffect(() => {
    if (!ready) return;
    if (!hasChosen) {
      router.replace("/");
      return;
    }
    if (isBuyer) {
      router.replace("/marketplace");
    }
  }, [hasChosen, isBuyer, ready, router]);

  if (!ready || !hasChosen || isBuyer) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center text-ink-muted">
        Loading your portal…
      </div>
    );
  }

  return (
    <>
      <HeroSection />
      <StatsBanner />
      <FeaturedModules />
      <FlywheelSection />
    </>
  );
}
