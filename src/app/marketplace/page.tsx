"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  HeartHandshake,
  Loader2,
  Share2,
  ShoppingBag,
} from "lucide-react";
import {
  artworks,
  categoryLabels,
  socialChannelLabels,
} from "@/data/artworks";
import { ageRangeOptions } from "@/data/courses";
import type { AgeRange, ArtworkCategory } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { cn, formatCurrency } from "@/lib/utils";

type CategoryFilter = "all" | ArtworkCategory;
type AgeFilter = "all" | AgeRange;

const categoryFilters: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "All types" },
  { id: "physical", label: categoryLabels.physical },
  { id: "digital", label: categoryLabels.digital },
];

export default function MarketplacePage() {
  const { toast } = useToast();
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [ageGroup, setAgeGroup] = useState<AgeFilter>("all");
  const [maxPrice, setMaxPrice] = useState(150);
  const [busyId, setBusyId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return artworks.filter((art) => {
      const categoryOk = category === "all" || art.category === category;
      const ageOk = ageGroup === "all" || art.ageGroup === ageGroup;
      const priceOk = art.price <= maxPrice;
      return categoryOk && ageOk && priceOk;
    });
  }, [ageGroup, category, maxPrice]);

  async function handleAction(id: string, kind: "buy" | "sponsor") {
    setBusyId(`${id}-${kind}`);
    await new Promise((resolve) => setTimeout(resolve, 650));
    setBusyId(null);
    toast(
      kind === "buy"
        ? "Purchase started — thank you for supporting a young artist."
        : "Sponsorship interest recorded. A family coordinator will follow up.",
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-deep">
          Module 2 · Online Art Marketplace
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-indigo-deep">
          Sell Physical & Digital artwork
        </h1>
        <p className="mt-3 text-base leading-relaxed text-ink-muted sm:text-lg">
          After courses, creators upload work for review. Listings sell as
          Physical Artwork or Digital Artwork, then get amplified on Instagram,
          TikTok, and 小红书.
        </p>
      </div>

      <section className="mt-8 rounded-3xl border border-indigo-warm/10 bg-gradient-to-br from-white to-sand-50 p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <Share2 className="mt-0.5 size-5 shrink-0 text-teal-calm" aria-hidden />
          <div>
            <h2 className="text-base font-bold text-ink">
              Social media amplification
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-ink-muted">
              ArtAbility helps promote verified pieces across Instagram, TikTok,
              and 小红书 so young artists gain exposure beyond the marketplace
              grid.
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {(
                ["instagram", "tiktok", "xiaohongshu"] as const
              ).map((channel) => (
                <li key={channel}>
                  <Badge>{socialChannelLabels[channel]}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        aria-label="Marketplace filters"
        className="mt-8 rounded-3xl border border-indigo-warm/10 bg-white/85 p-5 sm:p-6"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <fieldset>
            <legend className="text-sm font-semibold text-ink">
              Sales type
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {categoryFilters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCategory(item.id)}
                  className={cn(
                    "min-h-11 rounded-2xl border px-3 py-2 text-sm font-semibold transition",
                    category === item.id
                      ? "border-indigo-warm bg-indigo-warm text-white"
                      : "border-indigo-warm/15 bg-sand-50 text-ink hover:bg-sand-100",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-sm font-semibold text-ink">Age group</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setAgeGroup("all")}
                className={cn(
                  "min-h-11 rounded-2xl border px-3 py-2 text-sm font-semibold transition",
                  ageGroup === "all"
                    ? "border-teal-calm bg-teal-calm text-white"
                    : "border-indigo-warm/15 bg-sand-50 text-ink hover:bg-sand-100",
                )}
              >
                All ages
              </button>
              {ageRangeOptions
                .filter((option) => option.id !== "all-ages")
                .map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setAgeGroup(option.id)}
                    className={cn(
                      "min-h-11 rounded-2xl border px-3 py-2 text-sm font-semibold transition",
                      ageGroup === option.id
                        ? "border-teal-calm bg-teal-calm text-white"
                        : "border-indigo-warm/15 bg-sand-50 text-ink hover:bg-sand-100",
                    )}
                  >
                    {option.label}
                  </button>
                ))}
            </div>
          </fieldset>

          <div>
            <label
              htmlFor="price-range"
              className="text-sm font-semibold text-ink"
            >
              Max price: {formatCurrency(maxPrice)}
            </label>
            <input
              id="price-range"
              type="range"
              min={25}
              max={150}
              step={5}
              value={maxPrice}
              onChange={(event) => setMaxPrice(Number(event.target.value))}
              className="mt-4 w-full accent-indigo-warm"
            />
            <p className="mt-2 text-xs text-ink-muted">$25 – $150</p>
          </div>
        </div>
      </section>

      <p className="mt-6 text-sm text-ink-muted" aria-live="polite">
        {filtered.length} artwork{filtered.length === 1 ? "" : "s"} available
      </p>

      <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((art) => (
          <li
            key={art.id}
            className="flex flex-col overflow-hidden rounded-3xl border border-indigo-warm/10 bg-white shadow-sm"
          >
            <Link
              href={`/marketplace/${art.slug}`}
              className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-warm"
            >
              <div
                className="h-44"
                style={{ background: art.imageGradient }}
                role="img"
                aria-label={`${art.title} by ${art.artistName}`}
              />
            </Link>
            <div className="flex flex-1 flex-col p-5">
              {art.verifiedAsdCreator ? (
                <Badge>Verified ASD Creator</Badge>
              ) : null}
              {art.featuredOnBus ? (
                <Badge className="ml-2 bg-teal/15 text-teal-deep">
                  On Painting Bus
                </Badge>
              ) : null}
              <h2 className="mt-3 text-lg font-bold text-ink">
                <Link
                  href={`/marketplace/${art.slug}`}
                  className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-warm"
                >
                  {art.title}
                </Link>
              </h2>
              <p className="mt-1 text-sm text-ink-muted">
                by {art.artistName}, Age {art.artistAge}
              </p>
              <p className="mt-1 text-xs font-medium text-teal-deep">
                {categoryLabels[art.category]}
              </p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {art.socialChannels.map((channel) => (
                  <li key={channel}>
                    <Badge className="bg-sand-100 text-ink-muted">
                      {socialChannelLabels[channel]}
                    </Badge>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xl font-bold text-indigo-deep">
                {formatCurrency(art.price)}
              </p>
              <div className="mt-4 grid gap-2">
                <Button
                  onClick={() => handleAction(art.id, "buy")}
                  disabled={busyId === `${art.id}-buy`}
                  aria-busy={busyId === `${art.id}-buy`}
                >
                  {busyId === `${art.id}-buy` ? (
                    <>
                      <Loader2 className="animate-spin" aria-hidden />
                      Processing…
                    </>
                  ) : (
                    <>
                      <ShoppingBag aria-hidden />
                      Buy Artwork
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleAction(art.id, "sponsor")}
                  disabled={busyId === `${art.id}-sponsor`}
                  aria-busy={busyId === `${art.id}-sponsor`}
                >
                  {busyId === `${art.id}-sponsor` ? (
                    <>
                      <Loader2 className="animate-spin" aria-hidden />
                      Saving…
                    </>
                  ) : (
                    <>
                      <HeartHandshake aria-hidden />
                      Sponsor Artist
                    </>
                  )}
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
