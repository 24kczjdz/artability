"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bus,
  MapPin,
  QrCode,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import {
  busFlowSteps,
  busPurchaseOptions,
  busStops,
} from "@/data/bus-gallery";
import { artworks } from "@/data/artworks";
import { siteConfig } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CornerDoodles } from "@/components/ui/corner-doodles";
import { RoleGate } from "@/components/auth/role-gate";
import { PhotoWall } from "@/components/bus/photo-wall";
import { useToast } from "@/components/ui/toast";
import { cn, formatCurrency } from "@/lib/utils";

const visitorFlow = [
  "Bus Tour in Malls/Parks",
  "Visitor Views Painting & Scans QR",
  "Opens Mobile Checkout",
  "100% Impact / Royalties to Family",
] as const;

function BusGalleryPageContent() {
  const { toast } = useToast();
  const [inviteOpen, setInviteOpen] = useState(false);
  const [venue, setVenue] = useState("");
  const [contact, setContact] = useState("");
  const [sending, setSending] = useState(false);
  const busArt = artworks.filter((art) => art.featuredOnBus);

  async function submitInvite(event: FormEvent) {
    event.preventDefault();
    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSending(false);
    setInviteOpen(false);
    setVenue("");
    setContact("");
    toast(
      "Invite request received! We’ll follow up about bringing the Painting Bus to your venue.",
    );
  }

  return (
    <div className="relative overflow-hidden">
      <section className="relative isolate overflow-hidden bg-hero-wash">
        <CornerDoodles />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <Badge className="bg-teal text-white">
              <Bus className="size-3.5" aria-hidden />
              Art on the Move
            </Badge>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-violet-deep sm:text-5xl">
              {siteConfig.busName}: {siteConfig.busTagline}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Bringing special needs children&apos;s artwork into malls, parks,
              and campuses. Scan a QR beside any painting to open the mobile
              checkout page with the artist story and impact split.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                variant="coral"
                onClick={() => setInviteOpen(true)}
              >
                Invite the Bus to Your Campus / Mall
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("bus-schedule")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View tour schedule
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative min-h-[260px] overflow-hidden rounded-[2rem] shadow-2xl shadow-violet/20 sm:min-h-[340px]"
          >
            <Image
              src="/bus-gallery/185.jpg"
              alt="Painting Bus outdoor exhibition with framed artworks"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-violet-deep/70 to-transparent p-5">
              <Image
                src="/bus-gallery/236.jpg"
                alt="Painting Bus logo"
                width={56}
                height={56}
                className="mb-2 rounded-xl bg-white/90 object-contain p-1"
              />
              <p className="text-sm font-semibold text-white">
                Real Painting Bus · Speak with Arts, Walk with Stars
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <PhotoWall />

      <section
        id="bus-schedule"
        className="border-b border-violet/10 bg-pastel-mint/50"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-bold text-violet-deep">
              Upcoming bus stops
            </h2>
            <ul className="mt-6 space-y-3">
              {busStops.map((stop) => (
                <li
                  key={stop.id}
                  className="rounded-3xl border border-violet/10 bg-white p-4 shadow-sm"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="font-bold text-ink">{stop.venue}</p>
                      <p className="mt-1 flex items-center gap-1 text-sm text-ink-muted">
                        <MapPin className="size-3.5" aria-hidden />
                        {stop.city}
                      </p>
                      <p className="mt-1 text-sm font-medium text-teal-deep">
                        {stop.date}
                      </p>
                    </div>
                    <Badge
                      className={cn(
                        stop.status === "invite-open"
                          ? "bg-sunflower/20 text-sunflower-deep"
                          : "bg-pastel-lilac text-violet-deep",
                      )}
                    >
                      {stop.status === "invite-open"
                        ? "Invite open"
                        : "Upcoming"}
                    </Badge>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-violet-deep">
              Interactive city route map
            </h2>
            <div
              className="relative mt-6 flex min-h-[320px] items-center justify-center overflow-hidden rounded-[2rem] border border-dashed border-teal/40 bg-white"
              role="img"
              aria-label="Map placeholder for Painting Bus route"
            >
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(#99f6e4 1px, transparent 1px), linear-gradient(90deg, #99f6e4 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="relative z-10 max-w-xs rounded-3xl bg-white/95 p-5 text-center shadow-lg">
                <MapPin className="mx-auto size-8 text-coral" aria-hidden />
                <p className="mt-2 font-bold text-ink">Live tracker preview</p>
                <p className="mt-1 text-sm text-ink-muted">
                  City Center Mall → Central Park → University Campus
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-violet-deep">
          Discover → Scan → Buy
        </h2>
        <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {visitorFlow.map((step, index) => (
            <li
              key={step}
              className="rounded-3xl border border-violet/10 bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-bold text-coral">{index + 1}</p>
              <p className="mt-2 font-semibold text-ink">{step}</p>
            </li>
          ))}
        </ol>

        <h3 className="mt-12 text-xl font-bold text-ink">
          Full eco-system (create → exhibit → earn)
        </h3>
        <ol className="mt-4 grid gap-3 md:grid-cols-5">
          {busFlowSteps.map((step, index) => (
            <li key={step.id}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="h-full rounded-3xl border border-violet/10 bg-pastel-mint/40 p-4"
              >
                <p className="text-sm font-bold text-teal-deep">
                  {step.stepNumber}
                </p>
                <h4 className="mt-2 text-sm font-bold text-ink">{step.title}</h4>
                <p className="mt-2 text-xs text-ink-muted">{step.description}</p>
              </motion.div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-violet/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="font-display text-3xl font-bold text-violet-deep">
                On the bus now
              </h2>
              <p className="mt-2 text-ink-muted">
                Physical print inventory currently touring. QR opens the
                mobile-optimized artwork page.
              </p>
            </div>
            <Badge className="bg-coral text-white">
              {busArt.length} featured on bus
            </Badge>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {busArt.map((art) => (
              <li
                key={art.id}
                className="overflow-hidden rounded-3xl border border-violet/10 bg-white shadow-sm"
              >
                <div
                  className="h-36"
                  style={{ background: art.imageGradient }}
                  role="img"
                  aria-label={art.title}
                />
                <div className="p-5">
                  <Badge className="bg-teal/15 text-teal-deep">
                    <Bus className="size-3.5" aria-hidden />
                    On Painting Bus
                  </Badge>
                  <h3 className="mt-3 text-lg font-bold text-ink">{art.title}</h3>
                  <p className="mt-1 text-sm text-ink-muted">
                    by {art.artistName}, Age {art.artistAge}
                  </p>
                  <p className="mt-2 font-semibold text-violet-deep">
                    {formatCurrency(art.price)}
                  </p>
                  <Link
                    href={`/marketplace/${art.slug}?from=bus-qr`}
                    className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-violet px-4 text-sm font-semibold text-white hover:bg-violet-deep"
                  >
                    <QrCode className="size-4" aria-hidden />
                    Simulate QR scan → checkout
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <CornerDoodles density="light" />
        <div className="relative z-10 max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-violet-deep">
            Purchase options after QR scan
          </h2>
          <p className="mt-3 text-ink-muted">
            Checkout opens the artwork detail page with physical, merchandise,
            or digital CSR license options.
          </p>
        </div>
        <ul className="relative z-10 mt-8 grid gap-3 sm:grid-cols-3">
          {busPurchaseOptions.map((option, index) => (
            <li
              key={option.id}
              className="rounded-3xl border border-violet/10 bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-bold uppercase tracking-wide text-coral">
                Option {String.fromCharCode(65 + index)}
              </p>
              <h3 className="mt-2 text-lg font-bold text-ink">{option.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{option.description}</p>
            </li>
          ))}
        </ul>
        <div className="relative z-10 mt-8 rounded-3xl bg-pastel-lilac p-6">
          <QrCode className="size-8 text-violet" aria-hidden />
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            <Sparkles className="mr-1 inline size-4 text-sunflower" />
            Tip: each bus piece links to{" "}
            <code className="rounded bg-white px-1.5 py-0.5 text-xs">
              /marketplace/[id]?from=bus-qr
            </code>{" "}
            — the QR destination for mobile visitors.
          </p>
        </div>
        <div className="relative z-10 mt-8">
          <Button size="lg" variant="coral" onClick={() => setInviteOpen(true)}>
            Invite the Bus to Your Campus / Mall
          </Button>
        </div>
      </section>

      {inviteOpen ? (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/40 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="invite-title"
        >
          <form
            onSubmit={submitInvite}
            className="w-full max-w-md rounded-[2rem] bg-white p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 id="invite-title" className="text-xl font-bold text-ink">
                  Invite the Painting Bus
                </h2>
                <p className="mt-1 text-sm text-ink-muted">
                  CSR / campus request · demo form
                </p>
              </div>
              <button
                type="button"
                onClick={() => setInviteOpen(false)}
                className="rounded-full p-2 hover:bg-sand-100"
                aria-label="Close"
              >
                <X className="size-5" />
              </button>
            </div>
            <label className="mt-5 block text-sm font-semibold text-ink">
              Venue / organization
              <input
                required
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-violet/15 px-4 py-3 text-sm font-normal outline-none ring-violet focus:ring-2"
              />
            </label>
            <label className="mt-4 block text-sm font-semibold text-ink">
              Contact email or phone
              <input
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-violet/15 px-4 py-3 text-sm font-normal outline-none ring-violet focus:ring-2"
              />
            </label>
            <Button
              type="submit"
              className="mt-6 w-full"
              disabled={sending}
              aria-busy={sending}
            >
              <Send aria-hidden />
              {sending ? "Sending…" : "Submit invite request"}
            </Button>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default function BusGalleryPage() {
  return (
    <RoleGate>
      <BusGalleryPageContent />
    </RoleGate>
  );
}
