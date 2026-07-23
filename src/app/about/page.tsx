"use client";

import { CornerDoodles } from "@/components/ui/corner-doodles";
import { ButtonLink } from "@/components/ui/button-link";
import { flywheelSteps } from "@/data/site";

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

        <section className="mt-10">
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
