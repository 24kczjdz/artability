"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type DoodleKind = "star" | "apple" | "bear" | "avocado" | "rabbit" | "heart";

interface CornerDoodlesProps {
  className?: string;
  density?: "light" | "normal";
}

const doodles: {
  kind: DoodleKind;
  corner: "tl" | "tr" | "bl" | "br";
  delay: number;
  size: number;
}[] = [
  { kind: "star", corner: "tl", delay: 0, size: 36 },
  { kind: "apple", corner: "tr", delay: 0.4, size: 42 },
  { kind: "bear", corner: "bl", delay: 0.8, size: 44 },
  { kind: "avocado", corner: "br", delay: 1.1, size: 40 },
];

const lightDoodles = doodles.filter((_, index) => index % 2 === 0);

function DoodleSvg({ kind }: { kind: DoodleKind }) {
  switch (kind) {
    case "star":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden>
          <path
            d="M24 4l5.2 12.4L42 18l-9.5 8.4L35.5 42 24 34.8 12.5 42l3-15.6L6 18l12.8-1.6L24 4z"
            fill="#F59E0B"
            opacity="0.9"
          />
        </svg>
      );
    case "apple":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden>
          <ellipse cx="24" cy="28" rx="14" ry="15" fill="#FF6B6B" />
          <path d="M24 12c2 4 6 5 8 4" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="19" cy="26" r="2" fill="#fff" opacity="0.7" />
          <circle cx="29" cy="26" r="2" fill="#fff" opacity="0.7" />
          <path d="M20 32c2 2 6 2 8 0" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "bear":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden>
          <circle cx="14" cy="14" r="7" fill="#D6A77A" />
          <circle cx="34" cy="14" r="7" fill="#D6A77A" />
          <circle cx="24" cy="26" r="14" fill="#E8C39E" />
          <circle cx="18" cy="24" r="2.2" fill="#1E293B" />
          <circle cx="30" cy="24" r="2.2" fill="#1E293B" />
          <ellipse cx="24" cy="30" rx="3" ry="2.2" fill="#8B5CF6" />
        </svg>
      );
    case "avocado":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden>
          <ellipse cx="24" cy="26" rx="13" ry="16" fill="#14B8A6" />
          <ellipse cx="24" cy="28" rx="8" ry="10" fill="#99F6E4" />
          <circle cx="24" cy="28" r="4.5" fill="#92400E" />
          <circle cx="20" cy="22" r="1.6" fill="#1E293B" />
          <circle cx="28" cy="22" r="1.6" fill="#1E293B" />
          <path d="M21 33c1.5 1.4 4.5 1.4 6 0" stroke="#0F766E" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "rabbit":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden>
          <ellipse cx="16" cy="12" rx="5" ry="12" fill="#F5D0FE" />
          <ellipse cx="32" cy="12" rx="5" ry="12" fill="#F5D0FE" />
          <circle cx="24" cy="28" r="13" fill="#FCE7F3" />
          <circle cx="19" cy="27" r="2" fill="#1E293B" />
          <circle cx="29" cy="27" r="2" fill="#1E293B" />
          <ellipse cx="24" cy="32" rx="2.5" ry="1.8" fill="#FF6B6B" />
        </svg>
      );
    case "heart":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden>
          <path
            d="M24 40s-14-8.5-14-18a8 8 0 0 1 14-5 8 8 0 0 1 14 5c0 9.5-14 18-14 18z"
            fill="#8B5CF6"
          />
        </svg>
      );
  }
}

const cornerClass: Record<(typeof doodles)[number]["corner"], string> = {
  tl: "left-2 top-2 sm:left-4 sm:top-4",
  tr: "right-2 top-2 sm:right-4 sm:top-4",
  bl: "bottom-2 left-2 sm:bottom-4 sm:left-4",
  br: "bottom-2 right-2 sm:bottom-4 sm:right-4",
};

export function CornerDoodles({
  className,
  density = "normal",
}: CornerDoodlesProps) {
  const items = density === "light" ? lightDoodles : doodles;

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      {items.map((item) => (
        <motion.div
          key={`${item.kind}-${item.corner}`}
          className={cn("absolute opacity-70", cornerClass[item.corner])}
          style={{ width: item.size, height: item.size }}
          animate={{ y: [0, -8, 0], rotate: [0, 4, -3, 0] }}
          transition={{
            duration: 4.5 + item.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          <DoodleSvg kind={item.kind} />
        </motion.div>
      ))}
    </div>
  );
}
