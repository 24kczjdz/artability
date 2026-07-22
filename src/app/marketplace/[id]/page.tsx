"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Loader2, ShoppingBag } from "lucide-react";
import {
  categoryLabels,
  getArtworkBySlug,
  incomeDistribution,
  socialChannelLabels,
} from "@/data/artworks";
import type { PurchaseOption } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { cn, formatCurrency } from "@/lib/utils";

export default function ArtworkDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const artwork = getArtworkBySlug(id);
  const { toast } = useToast();
  const [purchaseOption, setPurchaseOption] =
    useState<PurchaseOption>("physical");
  const [buying, setBuying] = useState(false);

  if (!artwork) {
    notFound();
  }

  async function handlePurchase() {
    setBuying(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setBuying(false);
    toast(
      purchaseOption === "physical"
        ? "Physical artwork order started. Thank you for your support."
        : "Digital artwork license reserved. Download details will follow.",
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/marketplace"
        className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-deep hover:underline"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Back to marketplace
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div
          className="min-h-[280px] rounded-[2rem] shadow-lg shadow-indigo-deep/15 sm:min-h-[420px]"
          style={{ background: artwork.imageGradient }}
          role="img"
          aria-label={`${artwork.title} by ${artwork.artistName}`}
        />

        <div>
          {artwork.verifiedAsdCreator ? (
            <Badge>Verified ASD Creator</Badge>
          ) : null}
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-indigo-deep">
            {artwork.title}
          </h1>
          <p className="mt-2 text-lg text-ink-muted">
            by {artwork.artistName}, Age {artwork.artistAge}
          </p>
          <p className="mt-1 text-sm font-medium text-teal-deep">
            {categoryLabels[artwork.category]}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {artwork.socialChannels.map((channel) => (
              <li key={channel}>
                <Badge className="bg-sand-100 text-ink-muted">
                  Promoted on {socialChannelLabels[channel]}
                </Badge>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-3xl font-bold text-ink">
            {formatCurrency(artwork.price)}
          </p>

          <section className="mt-6">
            <h2 className="text-sm font-bold uppercase tracking-wide text-amber-deep">
              Story behind the artwork
            </h2>
            <p className="mt-2 text-base leading-relaxed text-ink-muted">
              {artwork.story}
            </p>
          </section>

          <fieldset className="mt-6">
            <legend className="text-sm font-semibold text-ink">
              Purchase option
            </legend>
            <div className="mt-3 grid gap-2">
              {(
                [
                  {
                    id: "physical" as const,
                    label: "Physical Artwork",
                    hint: "Shipped / framed piece for home, school, or gallery",
                  },
                  {
                    id: "digital" as const,
                    label: "Digital Artwork",
                    hint: "Licensed file for personal, classroom, or CSR use",
                  },
                ] as const
              ).map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setPurchaseOption(option.id)}
                  className={cn(
                    "rounded-2xl border px-4 py-3 text-left transition",
                    purchaseOption === option.id
                      ? "border-indigo-warm bg-indigo-warm/10"
                      : "border-indigo-warm/15 bg-white hover:bg-sand-50",
                  )}
                >
                  <span className="block text-sm font-bold text-ink">
                    {option.label}
                  </span>
                  <span className="text-xs text-ink-muted">{option.hint}</span>
                </button>
              ))}
            </div>
          </fieldset>

          <section className="mt-6" aria-labelledby="income-heading">
            <h2
              id="income-heading"
              className="text-sm font-bold uppercase tracking-wide text-amber-deep"
            >
              Revenue distribution
            </h2>
            <div
              className="mt-3 flex h-4 overflow-hidden rounded-full"
              role="img"
              aria-label="70% artist family, 20% material fund, 10% platform"
            >
              {incomeDistribution.map((share) => (
                <div
                  key={share.label}
                  style={{
                    width: `${share.percent}%`,
                    backgroundColor: share.color,
                  }}
                  title={`${share.label}: ${share.percent}%`}
                />
              ))}
            </div>
            <ul className="mt-3 space-y-1.5">
              {incomeDistribution.map((share) => (
                <li
                  key={share.label}
                  className="flex items-center gap-2 text-sm text-ink-muted"
                >
                  <span
                    className="size-2.5 rounded-full"
                    style={{ backgroundColor: share.color }}
                    aria-hidden
                  />
                  <span className="font-semibold text-ink">{share.percent}%</span>
                  {share.label}
                </li>
              ))}
            </ul>
          </section>

          <Button
            className="mt-8 w-full"
            size="lg"
            onClick={handlePurchase}
            disabled={buying}
            aria-busy={buying}
          >
            {buying ? (
              <>
                <Loader2 className="animate-spin" aria-hidden />
                Processing purchase…
              </>
            ) : (
              <>
                <ShoppingBag aria-hidden />
                Buy Artwork
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
