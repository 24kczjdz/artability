"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, Volume2 } from "lucide-react";
import { demoAiFeedback, demoLessonSteps } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { cn } from "@/lib/utils";
import { LearnAccessGuard } from "@/components/auth/learn-access-guard";

function LearnDemoPageContent() {
  const { toast } = useToast();
  const [activeStep, setActiveStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const step = demoLessonSteps[activeStep];

  async function playAudio() {
    setPlaying(true);
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(step.audioPrompt);
      utterance.rate = 0.92;
      utterance.onend = () => setPlaying(false);
      utterance.onerror = () => setPlaying(false);
      window.speechSynthesis.speak(utterance);
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setPlaying(false);
    }
  }

  async function generateLesson() {
    setGenerating(true);
    setShowFeedback(false);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setGenerating(false);
    setShowFeedback(true);
    toast("AI lesson steps generated for this demo.");
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-amber-deep">
        Interactive demo
      </p>
      <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-indigo-deep">
        AI Course Generator Preview
      </h1>
      <p className="mt-3 text-base leading-relaxed text-ink-muted">
        Big buttons, calm steps, and encouraging feedback — a preview of how
        ArtAbility guides young artists.
      </p>

      <div className="mt-8">
        <Button
          onClick={generateLesson}
          disabled={generating}
          aria-busy={generating}
          size="lg"
        >
          {generating ? (
            <>
              <Loader2 className="animate-spin" aria-hidden />
              Generating lesson…
            </>
          ) : (
            "Generate Lesson"
          )}
        </Button>
      </div>

      <ol className="mt-8 grid gap-4">
        {demoLessonSteps.map((item, index) => {
          const selected = index === activeStep;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => {
                  setActiveStep(index);
                  setShowFeedback(false);
                }}
                className={cn(
                  "w-full rounded-3xl border p-5 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-warm",
                  selected
                    ? "border-indigo-warm bg-white shadow-md shadow-indigo-deep/10"
                    : "border-indigo-warm/10 bg-white/70 hover:bg-white",
                )}
              >
                <p className="text-sm font-bold text-amber-deep">
                  Step {item.stepNumber}
                </p>
                <p className="mt-1 text-xl font-bold text-ink">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {item.instruction}
                </p>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button
          size="lg"
          variant="teal"
          onClick={playAudio}
          disabled={playing}
          aria-busy={playing}
          className="min-h-14 flex-1 text-lg"
        >
          {playing ? (
            <>
              <Loader2 className="animate-spin" aria-hidden />
              Playing instruction…
            </>
          ) : (
            <>
              <Volume2 aria-hidden />
              Play Audio Instruction
            </>
          )}
        </Button>
        <Button
          size="lg"
          variant="secondary"
          className="min-h-14 flex-1 text-lg"
          onClick={() => {
            setShowFeedback(true);
            toast("Nice work — feedback unlocked!");
          }}
        >
          <Check aria-hidden />
          I finished this step
        </Button>
      </div>

      <AnimatePresence>
        {showFeedback ? (
          <motion.aside
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="mt-6 rounded-3xl border border-teal-calm/30 bg-teal-calm/10 p-5"
            aria-live="polite"
          >
            <p className="text-sm font-bold uppercase tracking-wide text-teal-deep">
              AI Feedback
            </p>
            <p className="mt-2 text-base font-medium leading-relaxed text-ink">
              {demoAiFeedback}
            </p>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default function LearnDemoPage() {
  return (
    <LearnAccessGuard>
      <LearnDemoPageContent />
    </LearnAccessGuard>
  );
}

