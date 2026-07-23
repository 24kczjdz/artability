"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, X } from "lucide-react";
import {
  photoWallFilters,
  photoWallItems,
} from "@/data/bus-gallery";
import type { PhotoWallCategory, PhotoWallItem } from "@/types";
import { CornerDoodles } from "@/components/ui/corner-doodles";
import { cn } from "@/lib/utils";

const senseLabels: Record<
  NonNullable<PhotoWallItem["sense"]>,
  { label: string; className: string }
> = {
  sound: { label: "Sound", className: "bg-teal text-white" },
  touch: { label: "Touch", className: "bg-sunflower text-ink" },
  sight: { label: "Sight", className: "bg-violet text-white" },
  smell: { label: "Smell", className: "bg-coral text-white" },
  taste: { label: "Taste", className: "bg-violet-deep text-white" },
};

export function PhotoWall() {
  const [filter, setFilter] = useState<PhotoWallCategory>("all");
  const [active, setActive] = useState<PhotoWallItem | null>(null);
  const [likes, setLikes] = useState<Record<string, number>>(() =>
    Object.fromEntries(photoWallItems.map((item) => [item.id, item.likes])),
  );
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  const visible = useMemo(() => {
    if (filter === "all") return photoWallItems;
    return photoWallItems.filter((item) => item.category === filter);
  }, [filter]);

  function toggleLike(id: string) {
    setLiked((current) => {
      const nextLiked = !current[id];
      setLikes((counts) => ({
        ...counts,
        [id]: Math.max(0, (counts[id] ?? 0) + (nextLiked ? 1 : -1)),
      }));
      return { ...current, [id]: nextLiked };
    });
  }

  return (
    <section
      id="photo-wall"
      className="relative overflow-hidden border-b border-violet/10 bg-white"
    >
      <CornerDoodles density="light" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <Image
              src="/bus-gallery/236.jpg"
              alt="Painting Bus logo 画语巴士"
              width={72}
              height={72}
              className="rounded-2xl bg-pastel-mint object-contain p-1 shadow-sm"
            />
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-deep">
              Activity Gallery
            </p>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-violet-deep sm:text-4xl">
            Moments on the Move: Real-Life Impact
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-muted sm:text-lg">
            See how our mobile bus gallery brings smiles, art education, and
            community support to life — including Five Senses workshops for
            sound, touch, and feel across local neighborhoods.
          </p>
        </div>

        <div
          className="mt-8 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Photo wall filters"
        >
          {photoWallFilters.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={filter === item.id}
              onClick={() => setFilter(item.id)}
              className={cn(
                "min-h-11 shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition",
                filter === item.id
                  ? "border-violet bg-violet text-white shadow-md shadow-violet/20"
                  : "border-violet/15 bg-white text-ink hover:bg-pastel-lilac",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile: swipeable row · Desktop: flexible masonry-like grid */}
        <ul className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:snap-none md:grid-cols-3 md:overflow-visible lg:grid-cols-4">
          {visible.map((item, index) => (
            <li
              key={item.id}
              className={cn(
                "min-w-[78%] snap-center sm:min-w-[55%] md:min-w-0",
                item.span === "wide" && "md:col-span-2",
                item.span === "tall" && "md:row-span-2",
              )}
            >
              <motion.button
                type="button"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.04, duration: 0.35 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setActive(item)}
                className={cn(
                  "group relative block w-full overflow-hidden rounded-[1.75rem] border border-violet/10 bg-sand-50 text-left shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet",
                  item.span === "tall" ? "aspect-[3/4] md:aspect-auto md:h-full md:min-h-[420px]" : "aspect-[4/3]",
                )}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-ink/10" />
                <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                  <span className="rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-ink shadow-sm">
                    {item.tag}
                  </span>
                  {item.sense ? (
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-1 text-xs font-bold shadow-sm",
                        senseLabels[item.sense].className,
                      )}
                    >
                      {senseLabels[item.sense].label}
                    </span>
                  ) : null}
                </div>
                <span className="absolute bottom-3 left-3 right-14 text-sm font-semibold text-white drop-shadow">
                  {item.location}
                </span>
                <span
                  role="presentation"
                  onClick={(event) => {
                    event.stopPropagation();
                    toggleLike(item.id);
                  }}
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-coral shadow-sm"
                >
                  <Heart
                    className={cn(
                      "size-3.5",
                      liked[item.id] && "fill-coral",
                    )}
                    aria-hidden
                  />
                  {likes[item.id]}
                </span>
              </motion.button>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="photo-lightbox-title"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 8 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 z-10 rounded-full bg-white/95 p-2 text-ink shadow-md hover:bg-sand-100"
                aria-label="Close photo"
              >
                <X className="size-5" />
              </button>
              <div className="relative aspect-[16/10] w-full bg-sand-100 sm:aspect-[16/9]">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  className="object-contain sm:object-cover"
                  sizes="(max-width: 896px) 100vw, 896px"
                  priority
                />
              </div>
              <div className="space-y-2 p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-semibold text-teal-deep">
                    {active.tag}
                  </p>
                  {active.sense ? (
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-1 text-xs font-bold",
                        senseLabels[active.sense].className,
                      )}
                    >
                      Five Senses · {senseLabels[active.sense].label}
                    </span>
                  ) : null}
                </div>
                <h3
                  id="photo-lightbox-title"
                  className="font-display text-2xl font-bold text-violet-deep"
                >
                  {active.location}
                </h3>
                <p className="text-sm font-medium text-ink-muted">
                  {active.date}
                </p>
                <p className="text-base leading-relaxed text-ink">
                  {active.caption}
                </p>
                <button
                  type="button"
                  onClick={() => toggleLike(active.id)}
                  className="mt-2 inline-flex min-h-11 items-center gap-2 rounded-full border border-coral/30 bg-pastel-peach px-4 text-sm font-bold text-coral"
                >
                  <Heart
                    className={cn(
                      "size-4",
                      liked[active.id] && "fill-coral",
                    )}
                    aria-hidden
                  />
                  {likes[active.id]} likes
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
