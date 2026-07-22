"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, ShoppingBag } from "lucide-react";
import { courseTracks, courses } from "@/data/courses";
import { artworks, categoryLabels } from "@/data/artworks";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";

export function FeaturedModules() {
  const previewCourses = courses.slice(0, 3);
  const previewArt = artworks.slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl font-bold tracking-tight text-indigo-deep sm:text-4xl">
          Learn with AI. Sell with dignity.
        </h2>
        <p className="mt-3 text-base leading-relaxed text-ink-muted sm:text-lg">
          Structured AIGC education tracks feed a marketplace for Physical and
          Digital artwork — promoted across social channels.
        </p>
      </div>

      <div className="mt-10 grid gap-12 lg:gap-16">
        <div>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div className="flex items-center gap-2 text-indigo-deep">
              <BookOpen className="size-5" aria-hidden />
              <h3 className="text-xl font-bold">AI Art Education</h3>
            </div>
            <ButtonLink href="/learn" variant="ghost" size="sm">
              View all lessons
              <ArrowRight aria-hidden />
            </ButtonLink>
          </div>
          <ul className="mb-5 flex flex-wrap gap-2">
            {courseTracks.map((track) => (
              <li key={track.id}>
                <Badge>
                  {track.label} · {track.labelZh}
                </Badge>
              </li>
            ))}
          </ul>
          <ul className="grid gap-4 sm:grid-cols-3">
            {previewCourses.map((course, index) => (
              <motion.li
                key={course.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="overflow-hidden rounded-3xl border border-indigo-warm/10 bg-white/80 shadow-sm shadow-indigo-deep/5"
              >
                <div className="relative h-32 w-full bg-sand-100">
                  <Image
                    src={course.coverImage}
                    alt={course.coverAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <Badge>Level {course.level}</Badge>
                  <p className="mt-3 text-lg font-bold text-ink">{course.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {course.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div className="flex items-center gap-2 text-indigo-deep">
              <ShoppingBag className="size-5" aria-hidden />
              <h3 className="text-xl font-bold">Online Art Marketplace</h3>
            </div>
            <ButtonLink href="/marketplace" variant="ghost" size="sm">
              Browse gallery
              <ArrowRight aria-hidden />
            </ButtonLink>
          </div>
          <ul className="grid gap-4 sm:grid-cols-3">
            {previewArt.map((art, index) => (
              <motion.li
                key={art.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="overflow-hidden rounded-3xl border border-indigo-warm/10 bg-white/80 shadow-sm shadow-indigo-deep/5"
              >
                <div
                  className="h-36"
                  style={{ background: art.imageGradient }}
                  role="img"
                  aria-label={`${art.title} artwork preview`}
                />
                <div className="p-5">
                  {art.verifiedAsdCreator ? (
                    <Badge>Verified ASD Creator</Badge>
                  ) : null}
                  <p className="mt-3 text-lg font-bold text-ink">{art.title}</p>
                  <p className="mt-1 text-sm text-ink-muted">
                    by {art.artistName}, Age {art.artistAge}
                  </p>
                  <p className="mt-1 text-xs font-medium text-teal-deep">
                    {categoryLabels[art.category]}
                  </p>
                  <p className="mt-3 text-base font-semibold text-indigo-deep">
                    {formatCurrency(art.price)}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
