"use client";

import { useState, type FormEvent } from "react";
import { Loader2, Send } from "lucide-react";
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

function ContactPageContent() {
  const { toast } = useToast();
  const [inquiry, setInquiry] = useState<InquiryType>("parents");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSending(false);
    toast("Thanks! Your inquiry was received (demo). We’ll be in touch soon.");
    setMessage("");
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
          Choose who you are representing, then send a short note.
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
