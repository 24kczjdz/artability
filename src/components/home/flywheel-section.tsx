"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { flywheelSteps } from "@/data/site";
import { ButtonLink } from "@/components/ui/button-link";

export function FlywheelSection() {
  return (
    <section className="relative overflow-hidden border-t border-indigo-warm/10 bg-gradient-to-b from-sand-50 to-canvas">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-indigo-deep sm:text-4xl">
            From register to revenue
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-muted sm:text-lg">
            One continuous journey: verify, learn, create, upload, review, sell,
            and return income to artist families.
          </p>
        </div>

        <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {flywheelSteps.map((step, index) => (
            <li key={step.id} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.05, duration: 0.35 }}
                className="h-full rounded-3xl border border-indigo-warm/10 bg-white/90 p-5"
              >
                <p className="font-display text-sm font-bold text-amber-deep">
                  Step {step.stepNumber}
                </p>
                <h3 className="mt-2 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </motion.div>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/register" variant="teal">
            Start with Register & Verify
            <ArrowRight aria-hidden />
          </ButtonLink>
          <ButtonLink href="/marketplace" variant="outline">
            Browse Marketplace
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
