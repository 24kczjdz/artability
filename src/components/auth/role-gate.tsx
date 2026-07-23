"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePortalMode } from "@/context/portal-mode";

/** Require a chosen role before viewing app pages. */
export function RoleGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { ready, hasChosen } = usePortalMode();

  useEffect(() => {
    if (ready && !hasChosen) {
      router.replace("/");
    }
  }, [hasChosen, ready, router]);

  if (!ready || !hasChosen) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center text-ink-muted">
        Loading…
      </div>
    );
  }

  return <>{children}</>;
}
