"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { usePortalMode } from "@/context/portal-mode";
import { useToast } from "@/components/ui/toast";

/** Register / verify is for Artist & Parent portal only. */
export function StudentAccessGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { ready, hasChosen, isStudent, isBuyer } = usePortalMode();
  const { toast } = useToast();
  const redirected = useRef(false);

  useEffect(() => {
    if (!ready || redirected.current) return;
    if (!hasChosen) {
      redirected.current = true;
      router.replace("/");
      return;
    }
    if (isBuyer) {
      redirected.current = true;
      toast("Registration is for Artist / Parent accounts. Opening the marketplace.");
      router.replace("/marketplace");
    }
  }, [hasChosen, isBuyer, ready, router, toast]);

  if (!ready || !hasChosen || !isStudent) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center text-ink-muted">
        Checking portal access…
      </div>
    );
  }

  return <>{children}</>;
}
