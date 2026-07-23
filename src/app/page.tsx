"use client";

import { IdentityChoice } from "@/components/auth/identity-choice";
import { usePortalMode } from "@/context/portal-mode";
import HomeLanding from "@/components/home/home-landing";

export default function RootPage() {
  const { ready, hasChosen } = usePortalMode();

  if (!ready) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center text-ink-muted">
        Loading…
      </div>
    );
  }

  if (!hasChosen) {
    return <IdentityChoice />;
  }

  return <HomeLanding />;
}
