"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  Clock3,
  ExternalLink,
  PlayCircle,
  Sparkles,
  Volume2,
} from "lucide-react";
import { courseTracks, courses, getTrackMeta } from "@/data/courses";
import {
  videoPlatformLabels,
  videoResources,
} from "@/data/video-resources";
import type { CourseTrack } from "@/types";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { LearnAccessGuard } from "@/components/auth/learn-access-guard";
import { cn } from "@/lib/utils";

function LearnPageContent() {
  const [track, setTrack] = useState<CourseTrack | "all">("all");

  const displayCourses = useMemo(() => {
    if (track === "all") return courses;
    return courses.filter((course) => course.track === track);
  }, [track]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-deep">
          Module 1 · AI Art Education
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-indigo-deep">
          Personalized AIGC art courses
        </h1>
        <p className="mt-3 text-base leading-relaxed text-ink-muted sm:text-lg">
          Courses are generated and adjusted by learner level across four
          tracks: Color Learning, Drawing, AI-assisted Creation, and curated
          open teaching resources.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href="/register" variant="outline">
            Complete verification first
          </ButtonLink>
          <ButtonLink href="/learn/demo" variant="secondary">
            <Sparkles aria-hidden />
            Open AI Lesson Demo
          </ButtonLink>
        </div>
      </div>

      <section aria-labelledby="tracks-heading" className="mt-10">
        <h2 id="tracks-heading" className="text-xl font-bold text-ink">
          Course tracks
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <button
            type="button"
            onClick={() => setTrack("all")}
            className={cn(
              "rounded-3xl border p-4 text-left transition",
              track === "all"
                ? "border-indigo-warm bg-indigo-warm/10"
                : "border-indigo-warm/10 bg-white/80 hover:bg-white",
            )}
          >
            <p className="font-bold text-ink">All tracks</p>
            <p className="mt-1 text-sm text-ink-muted">
              Browse every personalized lesson
            </p>
          </button>
          {courseTracks.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTrack(item.id)}
              className={cn(
                "rounded-3xl border p-4 text-left transition",
                track === item.id
                  ? "border-indigo-warm bg-white shadow-sm"
                  : "border-indigo-warm/10 bg-white/80 hover:bg-white",
              )}
            >
              <div
                className="mb-3 h-2 w-12 rounded-full"
                style={{ backgroundColor: item.accent }}
                aria-hidden
              />
              <p className="font-bold text-ink">{item.label}</p>
              <p className="text-xs font-medium text-amber-deep">
                {item.labelZh}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </button>
          ))}
        </div>
      </section>

      <section aria-labelledby="course-feed-heading" className="mt-12">
        <h2
          id="course-feed-heading"
          className="text-2xl font-bold text-indigo-deep"
        >
          Section A · AI-generated courses
        </h2>
        <p className="mt-2 text-sm text-ink-muted">
          Difficulty adapts to learner progress (Personalized Learning).
          Showing {displayCourses.length} lesson
          {displayCourses.length === 1 ? "" : "s"}.
        </p>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayCourses.map((course) => {
            const meta = getTrackMeta(course.track);
            return (
              <li
                key={course.id}
                className="flex flex-col overflow-hidden rounded-3xl border border-indigo-warm/10 bg-white/90 shadow-sm"
              >
                <div className="relative h-40 w-full bg-sand-100">
                  <Image
                    src={course.coverImage}
                    alt={course.coverAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-1.5"
                    style={{ backgroundColor: course.colorAccent }}
                    aria-hidden
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap gap-2">
                    <Badge>
                      {meta.label} · {meta.labelZh}
                    </Badge>
                    <Badge className="bg-indigo-warm/10 text-indigo-deep">
                      Level {course.level}
                    </Badge>
                    <Badge className="bg-amber-soft/20 text-amber-deep">
                      <Clock3 className="size-3.5" aria-hidden />
                      {course.durationMinutes} min
                    </Badge>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-ink">
                    {course.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                    {course.description}
                  </p>
                  <p className="mt-3 text-xs font-medium leading-relaxed text-teal-deep">
                    Personalized: {course.personalizedNote}
                  </p>
                  {course.source ? (
                    <p className="mt-2 text-xs text-ink-muted">
                      Source: {course.source}
                    </p>
                  ) : null}
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {course.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-lg bg-sand-100 px-2 py-1 text-xs font-medium text-ink-muted"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink
                    href="/learn/demo"
                    variant="outline"
                    size="sm"
                    className="mt-5"
                  >
                    <Volume2 aria-hidden />
                    Start lesson preview
                  </ButtonLink>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section
        aria-labelledby="video-resources-heading"
        className="mt-16 border-t border-indigo-warm/10 pt-12"
      >
        <div className="max-w-2xl">
          <h2
            id="video-resources-heading"
            className="text-2xl font-bold text-indigo-deep"
          >
            Section B · Online video resources
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
            Real YouTube lessons with official thumbnails. Open in a new tab —
            great for co-learning alongside ArtAbility courses.
          </p>
        </div>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {videoResources.map((video) => (
            <li
              key={video.id}
              className="flex flex-col overflow-hidden rounded-3xl border border-indigo-warm/10 bg-white/90 shadow-sm"
            >
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-video w-full bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-warm"
              >
                <Image
                  src={video.thumbnailUrl}
                  alt={`YouTube thumbnail: ${video.title}`}
                  fill
                  className="object-cover transition group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/25 transition group-hover:bg-ink/35">
                  <span className="flex size-14 items-center justify-center rounded-full bg-white/95 text-indigo-deep shadow-lg">
                    <PlayCircle className="size-8" aria-hidden />
                  </span>
                  <span className="sr-only">Watch on YouTube</span>
                </span>
              </a>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-amber-soft/20 text-amber-deep">
                    <PlayCircle className="size-3.5" aria-hidden />
                    {videoPlatformLabels[video.platform]}
                  </Badge>
                  <Badge className="bg-sand-100 text-ink-muted">
                    {video.level}
                  </Badge>
                  <Badge className="bg-sand-100 text-ink-muted">
                    {video.duration}
                  </Badge>
                </div>
                <h3 className="mt-3 text-lg font-bold text-ink">{video.title}</h3>
                <p className="mt-1 text-sm font-medium text-teal-deep">
                  {video.channel}
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                  {video.description}
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {video.topics.map((topic) => (
                    <li
                      key={topic}
                      className="rounded-lg bg-sand-100 px-2 py-1 text-xs font-medium text-ink-muted"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl border-2 border-indigo-warm/25 bg-white/70 px-4 py-2 text-sm font-semibold text-indigo-deep transition hover:border-indigo-warm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-warm",
                  )}
                >
                  Watch on YouTube
                  <ExternalLink className="size-4" aria-hidden />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default function LearnPage() {
  return (
    <LearnAccessGuard>
      <LearnPageContent />
    </LearnAccessGuard>
  );
}
