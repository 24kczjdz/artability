"use client";

import { Suspense, use, useState } from "react";
import Link from "next/link";
import { notFound, useSearchParams } from "next/navigation";
import { ArrowLeft, Bus, Loader2, QrCode, ShoppingBag } from "lucide-react";
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

function ArtworkDetailContent({ id }: { id: string }) {
  const searchParams = useSearchParams();
  const fromBusQr = searchParams.get("from") === "bus-qr";
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
    const messages: Record<PurchaseOption, string> = {
      physical:
        "Physical framed artwork order started. Thank you for your support.",
      merchandise:
        "Merchandise print order started (t-shirt / tote / postcard).",
      digital: "Digital CSR license reserved. Download details will follow.",
    };
    toast(messages[purchaseOption]);
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href={fromBusQr ? "/bus-gallery" : "/marketplace"}
        className="inline-flex items-center gap-2 text-sm font-semibold text-violet-deep hover:underline"
      >
        <ArrowLeft className="size-4" aria-hidden />
        {fromBusQr ? "Back to Bus Gallery" : "Back to marketplace"}
      </Link>

      {fromBusQr ? (
        <div className="mt-4 flex items-start gap-3 rounded-3xl border border-teal/20 bg-pastel-mint p-4">
          <QrCode className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden />
          <div>
            <p className="text-sm font-bold text-teal-deep">
              Mobile QR checkout · Art on the Move
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              You scanned this piece on the Painting Bus. Choose how you&apos;d
              like to support the young artist below.
            </p>
          </div>
        </div>
      ) : null}

      <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div
          className="min-h-[280px] rounded-[2rem] shadow-lg shadow-violet/15 sm:min-h-[420px]"
          style={{ background: artwork.imageGradient }}
          role="img"
          aria-label={`${artwork.title} by ${artwork.artistName}`}
        />

        <div>
          <div className="flex flex-wrap gap-2">
            {artwork.verifiedAsdCreator ? (
              <Badge>Verified ASD Creator</Badge>
            ) : null}
            {artwork.featuredOnBus ? (
              <Badge className="bg-teal/15 text-teal-deep">
                <Bus className="size-3.5" aria-hidden />
                On Painting Bus
              </Badge>
            ) : null}
          </div>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-violet-deep">
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
            <h2 className="text-sm font-bold uppercase tracking-wide text-sunflower-deep">
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
                    label: "Physical framed artwork",
                    hint: fromBusQr
                      ? "Take home the framed piece on-site from the bus"
                      : "Shipped / framed canvas for home, school, or gallery",
                  },
                  {
                    id: "merchandise" as const,
                    label: "Printed merchandise",
                    hint: "T-shirts, tote bags, and postcards of this artwork",
                  },
                  {
                    id: "digital" as const,
                    label: "Digital CSR license",
                    hint: "Licensed file for personal, classroom, or corporate use",
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
                      ? "border-violet bg-pastel-lilac"
                      : "border-violet/15 bg-white hover:bg-sand-50",
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
              className="text-sm font-bold uppercase tracking-wide text-sunflower-deep"
            >
              Income distribution
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

export default function ArtworkDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-lg px-4 py-20 text-center text-ink-muted">
          Loading artwork…
        </div>
      }
    >
      <ArtworkDetailContent id={id} />
    </Suspense>
  );
}
