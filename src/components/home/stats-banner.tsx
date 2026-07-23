"use client";

import { motion } from "framer-motion";
import { heroStats } from "@/data/site";

export function StatsBanner() {
  return (
    <section
      aria-label="Platform highlights"
      className="border-y border-indigo-warm/10 bg-white/70"
    >
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:px-8">
        {heroStats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: index * 0.08, duration: 0.35 }}
            className="text-center sm:text-left"
          >
            <p className="font-display text-3xl font-extrabold tracking-tight text-violet-deep">
              {stat.value}
            </p>
            <p className="mt-1 text-sm font-medium text-ink-muted">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
