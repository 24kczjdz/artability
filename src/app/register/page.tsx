"use client";

import { useMemo, useState } from "react";
import { FileUp, Loader2, Sparkles } from "lucide-react";
import {
  ageRangeOptions,
  buildAiProfileSuggestion,
  conditionSeverityOptions,
  courseTracks,
  creatorIdentityOptions,
  getTrackMeta,
  spectrumFocusOptions,
} from "@/data/courses";
import type {
  AgeRange,
  ConditionSeverity,
  CreatorIdentity,
  SpectrumFocus,
} from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";
import { useToast } from "@/components/ui/toast";
import { cn } from "@/lib/utils";
import { StudentAccessGuard } from "@/components/auth/student-access-guard";

function RegisterPageContent() {
  const { toast } = useToast();
  const [identity, setIdentity] = useState<CreatorIdentity>("parent-guardian");
  const [ageRange, setAgeRange] = useState<AgeRange>("early-childhood");
  const [focus, setFocus] = useState<SpectrumFocus>("autism");
  const [severity, setSeverity] = useState<ConditionSeverity>("moderate");
  const [reportName, setReportName] = useState<string | null>(null);
  const [reportNote, setReportNote] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [verified, setVerified] = useState(false);
  const [suggestionReady, setSuggestionReady] = useState(false);

  const identityLabel =
    creatorIdentityOptions.find((option) => option.id === identity)?.label ??
    "Creator";
  const ageLabel =
    ageRangeOptions.find((option) => option.id === ageRange)?.label ??
    "Learner";

  const suggestion = useMemo(
    () =>
      buildAiProfileSuggestion({
        identityLabel,
        focus,
        severity,
        ageLabel,
        hasReport: Boolean(reportName),
        reportNote,
      }),
    [ageLabel, focus, identityLabel, reportName, reportNote, severity],
  );

  async function handleAnalyze() {
    setAnalyzing(true);
    setSuggestionReady(false);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setAnalyzing(false);
    setSuggestionReady(true);
    setVerified(true);
    toast("Verification saved. AI learning suggestion is ready.");
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-deep">
          Step 1 · Real-name verification
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-indigo-deep">
          Register & verify
        </h1>
        <p className="mt-3 text-base leading-relaxed text-ink-muted sm:text-lg">
          Choose who you are, share how much support is needed, and optionally
          upload a screening report. ArtAbility AI then suggests a calm starting
          path — not a medical diagnosis.
        </p>
      </div>

      <div className="mt-10 space-y-8">
        <section className="rounded-3xl border border-indigo-warm/10 bg-white/90 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-ink">Your identity</h2>
          <p className="mt-1 text-sm text-ink-muted">
            Artists and caregivers can both register — pick the role that fits.
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {creatorIdentityOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setIdentity(option.id)}
                className={cn(
                  "min-h-16 rounded-2xl border px-4 py-3 text-left transition",
                  identity === option.id
                    ? "border-indigo-warm bg-indigo-warm/10"
                    : "border-indigo-warm/15 bg-sand-50 hover:bg-sand-100",
                )}
              >
                <span className="block text-sm font-bold text-ink">
                  {option.label}
                </span>
                <span className="text-xs text-ink-muted">
                  {option.description}
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-indigo-warm/10 bg-white/90 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-ink">Learner age range</h2>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {ageRangeOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setAgeRange(option.id)}
                className={cn(
                  "min-h-14 rounded-2xl border px-4 py-3 text-left transition",
                  ageRange === option.id
                    ? "border-teal-calm bg-teal-calm/10"
                    : "border-indigo-warm/15 bg-sand-50 hover:bg-sand-100",
                )}
              >
                <span className="block text-sm font-bold text-ink">
                  {option.label}
                </span>
                <span className="text-xs text-ink-muted">{option.years}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-indigo-warm/10 bg-white/90 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-ink">Focus & support level</h2>
          <fieldset className="mt-4">
            <legend className="text-sm font-semibold text-ink">
              Cognitive / spectrum focus
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {spectrumFocusOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setFocus(option.id)}
                  className={cn(
                    "min-h-11 rounded-2xl border px-4 py-2 text-sm font-semibold transition",
                    focus === option.id
                      ? "border-indigo-warm bg-indigo-warm text-white"
                      : "border-indigo-warm/15 bg-white text-ink hover:bg-sand-100",
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6">
            <legend className="text-sm font-semibold text-ink">
              How significant are support needs?
            </legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {conditionSeverityOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setSeverity(option.id)}
                  className={cn(
                    "min-h-16 rounded-2xl border px-4 py-3 text-left transition",
                    severity === option.id
                      ? "border-amber-deep bg-amber-soft/25"
                      : "border-indigo-warm/15 bg-sand-50 hover:bg-sand-100",
                  )}
                >
                  <span className="block text-sm font-bold text-ink">
                    {option.label}
                  </span>
                  <span className="text-xs text-ink-muted">
                    {option.description}
                  </span>
                </button>
              ))}
            </div>
          </fieldset>
        </section>

        <section className="rounded-3xl border border-indigo-warm/10 bg-white/90 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-ink">
            Screening report (optional)
          </h2>
          <p className="mt-1 text-sm text-ink-muted">
            Upload a screening or assessment PDF/image and briefly describe the
            situation. Demo only — files stay in your browser session.
          </p>

          <label className="mt-5 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-3xl border border-dashed border-indigo-warm/30 bg-sand-50 px-6 py-10 text-center transition hover:bg-sand-100">
            <FileUp className="size-8 text-indigo-warm" aria-hidden />
            <span className="text-sm font-semibold text-ink">
              {reportName ? reportName : "Choose screening report"}
            </span>
            <span className="text-xs text-ink-muted">PDF, PNG, or JPG</span>
            <input
              type="file"
              accept=".pdf,image/png,image/jpeg"
              className="sr-only"
              onChange={(event) => {
                const file = event.target.files?.[0];
                setReportName(file ? file.name : null);
                if (file) {
                  toast(`Report “${file.name}” attached for AI review.`);
                }
              }}
            />
          </label>

          <label className="mt-4 block">
            <span className="text-sm font-semibold text-ink">
              Situation notes
            </span>
            <textarea
              value={reportNote}
              onChange={(event) => setReportNote(event.target.value)}
              rows={4}
              placeholder="Example: Prefers quiet rooms, responds well to visual schedules, tires after 15 minutes…"
              className="mt-2 w-full rounded-2xl border border-indigo-warm/15 bg-white px-4 py-3 text-sm text-ink outline-none ring-indigo-warm placeholder:text-ink-muted/70 focus:ring-2"
            />
          </label>
        </section>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            onClick={handleAnalyze}
            disabled={analyzing}
            aria-busy={analyzing}
          >
            {analyzing ? (
              <>
                <Loader2 className="animate-spin" aria-hidden />
                AI is reviewing…
              </>
            ) : (
              <>
                <Sparkles aria-hidden />
                Get AI overall suggestion
              </>
            )}
          </Button>
          {verified ? (
            <ButtonLink href="/learn" size="lg" variant="outline">
              Continue to AI Learning
            </ButtonLink>
          ) : null}
        </div>

        {suggestionReady ? (
          <aside
            className="rounded-3xl border border-teal-calm/30 bg-teal-calm/10 p-6 sm:p-8"
            aria-live="polite"
          >
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-teal-calm text-white">AI suggestion</Badge>
              {reportName ? (
                <Badge>Report considered</Badge>
              ) : (
                <Badge className="bg-sand-100 text-ink-muted">
                  No report uploaded
                </Badge>
              )}
            </div>
            <h2 className="mt-4 text-2xl font-bold text-indigo-deep">
              {suggestion.headline}
            </h2>
            <p className="mt-2 text-base leading-relaxed text-ink">
              {suggestion.summary}
            </p>
            <p className="mt-4 text-sm font-semibold text-ink">
              Recommended starting level: {suggestion.startingLevel}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {suggestion.recommendedTracks.map((track) => {
                const meta = getTrackMeta(track);
                return (
                  <li key={track}>
                    <Badge
                      className="bg-white text-ink"
                      style={{ borderLeft: `4px solid ${meta.accent}` }}
                    >
                      {meta.label} · {meta.labelZh}
                    </Badge>
                  </li>
                );
              })}
            </ul>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-amber-deep">
                  Pacing tips
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink-muted">
                  {suggestion.pacingTips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-amber-deep">
                  Please note
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink-muted">
                  {suggestion.cautionNotes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-5 text-xs text-ink-muted">
              Tracks available:{" "}
              {courseTracks.map((track) => track.label).join(" · ")}
            </p>
          </aside>
        ) : null}
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <StudentAccessGuard>
      <RegisterPageContent />
    </StudentAccessGuard>
  );
}

