"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { usePortalMode } from "@/context/portal-mode";
import { useToast } from "@/components/ui/toast";

/** Buyers/public cannot access AI lessons — redirect to marketplace. */
export function LearnAccessGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { ready, hasChosen, canAccessLearn, isBuyer } = usePortalMode();
  const { toast } = useToast();
  const redirected = useRef(false);

  useEffect(() => {
    if (!ready || redirected.current) return;
    if (!hasChosen) {
      redirected.current = true;
      router.replace("/");
      return;
    }
    if (!canAccessLearn) {
      redirected.current = true;
      toast(
        "Buyer / Public portal can browse the marketplace only — lessons stay with Artist / Parent.",
      );
      router.replace("/marketplace");
    }
  }, [canAccessLearn, hasChosen, ready, router, toast]);

  if (!ready || !hasChosen || isBuyer) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center text-ink-muted">
        Checking portal access…
      </div>
    );
  }

  return <>{children}</>;
}
