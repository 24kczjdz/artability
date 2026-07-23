"use client";

import { useState, type FormEvent } from "react";
import { HeartHandshake, Loader2, Send } from "lucide-react";
import { CornerDoodles } from "@/components/ui/corner-doodles";
import { Button } from "@/components/ui/button";
import { RoleGate } from "@/components/auth/role-gate";
import { useToast } from "@/components/ui/toast";
import { cn } from "@/lib/utils";

type InquiryType = "parents" | "schools" | "csr";

const inquiryOptions: { id: InquiryType; label: string; hint: string }[] = [
  {
    id: "parents",
    label: "Parents",
    hint: "Learning support, registration, or uploading artwork questions",
  },
  {
    id: "schools",
    label: "Schools",
    hint: "Classroom partnerships or inviting the Painting Bus to campus",
  },
  {
    id: "csr",
    label: "Corporate CSR Partnership",
    hint: "Sponsorships, digital licenses, or mall exhibition hosting",
  },
];

const volunteerRoles = [
  "Bus exhibition helper",
  "Workshop assistant",
  "Photo / video support",
  "Community outreach",
  "Translation / accessibility",
  "Other",
] as const;

const availabilityOptions = [
  "Weekdays",
  "Weekends",
  "School holidays",
  "Flexible / as needed",
] as const;

function ContactPageContent() {
  const { toast } = useToast();
  const [inquiry, setInquiry] = useState<InquiryType>("parents");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const [volName, setVolName] = useState("");
  const [volEmail, setVolEmail] = useState("");
  const [volPhone, setVolPhone] = useState("");
  const [volRole, setVolRole] =
    useState<(typeof volunteerRoles)[number]>("Bus exhibition helper");
  const [volAvailability, setVolAvailability] = useState<string[]>([
    "Weekends",
  ]);
  const [volAbout, setVolAbout] = useState("");
  const [volSending, setVolSending] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSending(false);
    toast("Thanks! Your inquiry was received (demo). We’ll be in touch soon.");
    setMessage("");
  }

  function toggleAvailability(option: string) {
    setVolAvailability((current) =>
      current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option],
    );
  }

  async function handleVolunteerSubmit(event: FormEvent) {
    event.preventDefault();
    if (volAvailability.length === 0) {
      toast("Please choose at least one availability option.");
      return;
    }
    setVolSending(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setVolSending(false);
    toast(
      "Thanks for volunteering! We received your interest (demo) and will follow up soon.",
    );
    setVolAbout("");
  }

  return (
    <div className="relative overflow-hidden">
      <CornerDoodles density="light" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-sunflower-deep">
          Contact Us
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-violet-deep">
          Let’s build something kind together
        </h1>
        <p className="mt-3 text-base leading-relaxed text-ink-muted">
          Choose who you are representing, then send a short note — or join us
          as a volunteer below.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6 rounded-[2rem] border border-violet/10 bg-white p-6 shadow-sm sm:p-8"
        >
          <fieldset>
            <legend className="text-sm font-semibold text-ink">I am…</legend>
            <div className="mt-3 grid gap-2">
              {inquiryOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setInquiry(option.id)}
                  className={cn(
                    "rounded-2xl border px-4 py-3 text-left transition",
                    inquiry === option.id
                      ? "border-violet bg-pastel-lilac"
                      : "border-violet/15 hover:bg-sand-50",
                  )}
                >
                  <span className="block text-sm font-bold text-ink">
                    {option.label}
                  </span>
                  <span className="text-xs text-ink-muted">{option.hint}</span>
                </button>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-ink">
              Name
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-violet/15 px-4 py-3 text-sm font-normal outline-none ring-violet focus:ring-2"
              />
            </label>
            <label className="block text-sm font-semibold text-ink">
              Email
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-violet/15 px-4 py-3 text-sm font-normal outline-none ring-violet focus:ring-2"
              />
            </label>
          </div>

          <label className="block text-sm font-semibold text-ink">
            Organization (optional)
            <input
              value={org}
              onChange={(e) => setOrg(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-violet/15 px-4 py-3 text-sm font-normal outline-none ring-violet focus:ring-2"
            />
          </label>

          <label className="block text-sm font-semibold text-ink">
            Message
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-violet/15 px-4 py-3 text-sm font-normal outline-none ring-violet focus:ring-2"
              placeholder="Share a few details about your request…"
            />
          </label>

          <Button type="submit" size="lg" disabled={sending} aria-busy={sending}>
            {sending ? (
              <>
                <Loader2 className="animate-spin" aria-hidden />
                Sending…
              </>
            ) : (
              <>
                <Send aria-hidden />
                Send inquiry
              </>
            )}
          </Button>
        </form>

        <section
          id="volunteers-wanted"
          className="mt-12 rounded-[2rem] border border-teal/20 bg-pastel-mint/40 p-6 sm:p-8"
          aria-labelledby="volunteers-heading"
        >
          <div className="flex items-start gap-3">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-teal text-white shadow-sm">
              <HeartHandshake className="size-5" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-deep">
                Volunteers Wanted
              </p>
              <h2
                id="volunteers-heading"
                className="mt-1 font-display text-2xl font-bold text-violet-deep sm:text-3xl"
              >
                Help bring art to every neighborhood
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
                Join Painting Bus stops, workshops, and community events. No
                special skills required — just patience, kindness, and a love
                for kids creating art.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleVolunteerSubmit}
            className="mt-8 space-y-5 rounded-[1.75rem] border border-violet/10 bg-white p-5 shadow-sm sm:p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-ink">
                Full name
                <input
                  required
                  value={volName}
                  onChange={(e) => setVolName(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-violet/15 px-4 py-3 text-sm font-normal outline-none ring-teal focus:ring-2"
                />
              </label>
              <label className="block text-sm font-semibold text-ink">
                Email
                <input
                  required
                  type="email"
                  value={volEmail}
                  onChange={(e) => setVolEmail(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-violet/15 px-4 py-3 text-sm font-normal outline-none ring-teal focus:ring-2"
                />
              </label>
            </div>

            <label className="block text-sm font-semibold text-ink">
              Phone / WeChat (optional)
              <input
                value={volPhone}
                onChange={(e) => setVolPhone(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-violet/15 px-4 py-3 text-sm font-normal outline-none ring-teal focus:ring-2"
              />
            </label>

            <label className="block text-sm font-semibold text-ink">
              I’d like to help with
              <select
                value={volRole}
                onChange={(e) =>
                  setVolRole(e.target.value as (typeof volunteerRoles)[number])
                }
                className="mt-2 w-full rounded-2xl border border-violet/15 bg-white px-4 py-3 text-sm font-normal outline-none ring-teal focus:ring-2"
              >
                {volunteerRoles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </label>

            <fieldset>
              <legend className="text-sm font-semibold text-ink">
                Availability
              </legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {availabilityOptions.map((option) => {
                  const selected = volAvailability.includes(option);
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => toggleAvailability(option)}
                      className={cn(
                        "min-h-11 rounded-full border px-4 py-2 text-sm font-semibold transition",
                        selected
                          ? "border-teal bg-teal text-white"
                          : "border-violet/15 bg-white text-ink hover:bg-pastel-mint/50",
                      )}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <label className="block text-sm font-semibold text-ink">
              Tell us a little about yourself
              <textarea
                required
                rows={4}
                value={volAbout}
                onChange={(e) => setVolAbout(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-violet/15 px-4 py-3 text-sm font-normal outline-none ring-teal focus:ring-2"
                placeholder="Why you’d like to volunteer, languages, or any experience with kids / art…"
              />
            </label>

            <Button
              type="submit"
              size="lg"
              variant="teal"
              disabled={volSending}
              aria-busy={volSending}
            >
              {volSending ? (
                <>
                  <Loader2 className="animate-spin" aria-hidden />
                  Submitting…
                </>
              ) : (
                <>
                  <HeartHandshake aria-hidden />
                  Apply to volunteer
                </>
              )}
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <RoleGate>
      <ContactPageContent />
    </RoleGate>
  );
}
