"use client";

import { useMemo, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Upload } from "lucide-react";
import { CornerDoodles } from "@/components/ui/corner-doodles";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";
import { StudentAccessGuard } from "@/components/auth/student-access-guard";
import { useToast } from "@/components/ui/toast";
import { cn } from "@/lib/utils";

type ReviewStatus = "draft" | "pending" | "approved";

interface Submission {
  id: string;
  title: string;
  artistName: string;
  fileName: string;
  story: string;
  status: ReviewStatus;
}

function PortalPageContent() {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [artistName, setArtistName] = useState("");
  const [story, setStory] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([
    {
      id: "sub-1",
      title: "Sunny Squares Study",
      artistName: "Ellie Tanaka",
      fileName: "sunny-squares.jpg",
      story: "Warm yellow blocks after color lesson 2.",
      status: "approved",
    },
  ]);

  const pendingCount = useMemo(
    () => submissions.filter((item) => item.status === "pending").length,
    [submissions],
  );

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!fileName) {
      toast("Please attach an artwork file first.");
      return;
    }
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    const pending: Submission = {
      id: `sub-${Date.now()}`,
      title,
      artistName,
      fileName,
      story,
      status: "pending",
    };
    setSubmissions((current) => [pending, ...current]);
    setSubmitting(false);
    toast("Submitted for special education teacher review.");

    // Demo: auto-approve after a short delay → dual distribution notice
    window.setTimeout(() => {
      setSubmissions((current) =>
        current.map((item) =>
          item.id === pending.id ? { ...item, status: "approved" } : item,
        ),
      );
      toast(
        `"${pending.title}" approved — synced to Marketplace AND Painting Bus inventory.`,
      );
    }, 2200);

    setTitle("");
    setArtistName("");
    setStory("");
    setFileName(null);
  }

  return (
    <div className="relative overflow-hidden">
      <CornerDoodles density="light" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-sunflower-deep">
          Path A · Artist Portal
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-violet-deep">
          Upload artwork for teacher review
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">
          After AI lessons, parents upload finished pieces. Once a special
          education teacher approves, ArtAbility automatically distributes the
          work to both the online Marketplace and the physical Bus Gallery print
          inventory.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <Badge className="bg-pastel-lilac text-violet-deep">
            Learn → Create → Upload
          </Badge>
          <Badge className="bg-pastel-mint text-teal-deep">
            Dual sync: Marketplace + Bus
          </Badge>
          {pendingCount > 0 ? (
            <Badge className="bg-sunflower/20 text-sunflower-deep">
              {pendingCount} pending review
            </Badge>
          ) : null}
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5 rounded-[2rem] border border-violet/10 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-ink">
              Artwork title
              <input
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-violet/15 px-4 py-3 text-sm font-normal outline-none ring-violet focus:ring-2"
              />
            </label>
            <label className="block text-sm font-semibold text-ink">
              Artist name
              <input
                required
                value={artistName}
                onChange={(e) => setArtistName(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-violet/15 px-4 py-3 text-sm font-normal outline-none ring-violet focus:ring-2"
              />
            </label>
          </div>

          <label className="block text-sm font-semibold text-ink">
            Artist story
            <textarea
              required
              rows={4}
              value={story}
              onChange={(e) => setStory(e.target.value)}
              placeholder="A short story about how this piece was made…"
              className="mt-2 w-full rounded-2xl border border-violet/15 px-4 py-3 text-sm font-normal outline-none ring-violet focus:ring-2"
            />
          </label>

          <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-3xl border border-dashed border-violet/30 bg-pastel-lilac/40 px-6 py-10 text-center transition hover:bg-pastel-lilac">
            <Upload className="size-8 text-violet" aria-hidden />
            <span className="text-sm font-semibold text-ink">
              {fileName ? fileName : "Upload finished artwork"}
            </span>
            <span className="text-xs text-ink-muted">PNG, JPG, or PDF · demo only</span>
            <input
              type="file"
              accept="image/*,.pdf"
              className="sr-only"
              onChange={(event) => {
                const file = event.target.files?.[0];
                setFileName(file ? file.name : null);
              }}
            />
          </label>

          <Button type="submit" size="lg" disabled={submitting} aria-busy={submitting}>
            {submitting ? (
              <>
                <Loader2 className="animate-spin" aria-hidden />
                Submitting…
              </>
            ) : (
              <>
                <Upload aria-hidden />
                Submit for review
              </>
            )}
          </Button>
        </form>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-violet-deep">Submission status</h2>
          <ul className="mt-4 space-y-3">
            {submissions.map((item) => (
              <li
                key={item.id}
                className="rounded-3xl border border-violet/10 bg-white p-5 shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-bold text-ink">{item.title}</p>
                    <p className="mt-1 text-sm text-ink-muted">
                      by {item.artistName} · {item.fileName}
                    </p>
                    <p className="mt-2 text-sm text-ink-muted">{item.story}</p>
                  </div>
                  <Badge
                    className={cn(
                      item.status === "approved" && "bg-teal text-white",
                      item.status === "pending" &&
                        "bg-sunflower/20 text-sunflower-deep",
                      item.status === "draft" && "bg-sand-100 text-ink-muted",
                    )}
                  >
                    {item.status === "approved" ? (
                      <span className="inline-flex items-center gap-1">
                        <CheckCircle2 className="size-3.5" /> Approved · dual sync
                      </span>
                    ) : item.status === "pending" ? (
                      "Pending teacher review"
                    ) : (
                      "Draft"
                    )}
                  </Badge>
                </div>
                {item.status === "approved" ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    <ButtonLink href="/marketplace" size="sm" variant="outline">
                      View Marketplace
                    </ButtonLink>
                    <ButtonLink href="/bus-gallery" size="sm" variant="teal">
                      View Bus inventory
                    </ButtonLink>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default function PortalPage() {
  return (
    <StudentAccessGuard>
      <PortalPageContent />
    </StudentAccessGuard>
  );
}
