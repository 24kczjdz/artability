"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { CornerDoodles } from "@/components/ui/corner-doodles";
import { ButtonLink } from "@/components/ui/button-link";
import { flywheelSteps, teamMembers } from "@/data/site";
import { cn } from "@/lib/utils";

type TeamMember = (typeof teamMembers)[number];

function TeamMemberCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const initials = member.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.35 }}
      className="overflow-hidden rounded-[2rem] border border-violet/10 bg-white shadow-sm"
    >
      <div className="relative aspect-square w-full bg-pastel-mint/40">
        {member.imageSrc ? (
          <Image
            src={member.imageSrc}
            alt={member.imageAlt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
            priority={index === 0}
          />
        ) : (
          <div
            className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-pastel-lilac via-white to-pastel-mint"
            role="img"
            aria-label={member.imageAlt}
          >
            <span className="font-display text-4xl font-bold text-violet-deep">
              {initials}
            </span>
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink-muted">
              Photo coming soon
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-deep">
          {member.role}
        </p>
        <h3 className="mt-1 text-xl font-bold text-ink">{member.name}</h3>
        <p className="mt-1 text-xs font-medium text-violet">{member.focus}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {member.bio}
        </p>

        {member.titles.length > 0 ? (
          <div className="mt-4 border-t border-violet/10 pt-3">
            <button
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((value) => !value)}
              className="flex min-h-11 w-full items-center justify-between gap-2 rounded-full border border-violet/15 bg-pastel-lilac/50 px-4 py-2 text-left text-sm font-semibold text-violet-deep transition hover:bg-pastel-lilac"
            >
              <span>Exhibitions & awards</span>
              <ChevronDown
                className={cn(
                  "size-4 shrink-0 transition-transform duration-200",
                  open && "rotate-180",
                )}
                aria-hidden
              />
            </button>

            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  id={panelId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <ul className="mt-3 max-h-56 space-y-2 overflow-y-auto pr-1 text-left">
                    {member.titles.map((title) => (
                      <li
                        key={title}
                        className="rounded-2xl bg-sand-50 px-3 py-2 text-xs leading-relaxed text-ink-muted"
                      >
                        {title}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <CornerDoodles density="light" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-sunflower-deep">
          About Us
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-violet-deep">
          Replacing short-term charity with sustainable empowerment
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          ArtAbility exists so special needs children can Learn, Create, Earn,
          and Sustain — through AI-assisted art education, an online marketplace,
          and the Painting Bus — Speak with Arts, Walk with Stars.
        </p>

        <section className="mt-10 rounded-[2rem] bg-pastel-lilac/80 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-ink">Our mission</h2>
          <p className="mt-3 text-base leading-relaxed text-ink-muted">
            We believe dignity grows when learning leads to creation, and
            creation can return income to families. AI personalizes the
            classroom; the marketplace and bus tour turn finished work into
            community celebration and sustainable support.
          </p>
        </section>

        <section className="mt-14" aria-labelledby="meet-team-heading">
          <h2
            id="meet-team-heading"
            className="font-display text-3xl font-bold text-violet-deep"
          >
            Meet our team
          </h2>
          <p className="mt-2 max-w-xl text-ink-muted">
            The people building ArtAbility — presentation, product, research,
            and growth. Photos will be added as they come in.
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <li key={member.id}>
                <TeamMemberCard member={member} index={index} />
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-violet-deep">
            Impact vision · the flywheel
          </h2>
          <p className="mt-2 text-ink-muted">
            Learn → Create → Earn → Sustain
          </p>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2">
            {flywheelSteps.slice(0, 4).map((step) => (
              <li
                key={step.id}
                className="rounded-3xl border border-violet/10 bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-bold text-coral">
                  Step {step.stepNumber}
                </p>
                <h3 className="mt-1 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/register">Join as Artist / Parent</ButtonLink>
          <ButtonLink href="/contact" variant="coral">
            Partner with us
          </ButtonLink>
          <ButtonLink href="/bus-gallery" variant="teal">
            Meet the Painting Bus
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
