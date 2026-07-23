"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Loader2,
  Sparkles,
  Volume2,
} from "lucide-react";
import {
  demoAiFeedback,
  demoLessonSample,
  demoLessonSteps,
} from "@/data/courses";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { cn } from "@/lib/utils";
import { LearnAccessGuard } from "@/components/auth/learn-access-guard";

function LearnDemoPageContent() {
  const { toast } = useToast();
  const [started, setStarted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [showSample, setShowSample] = useState(false);

  const totalSteps = demoLessonSteps.length;
  const step = demoLessonSteps[activeStep];
  const isLastStep = activeStep === totalSteps - 1;
  const stepDone = completedSteps.includes(activeStep);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

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
    setShowSample(false);
    setCompletedSteps([]);
    setActiveStep(0);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setGenerating(false);
    setStarted(true);
    toast("AI lesson ready — follow each picture step.");
  }

  function finishStep() {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setPlaying(false);

    setCompletedSteps((current) =>
      current.includes(activeStep) ? current : [...current, activeStep],
    );

    if (isLastStep) {
      setShowSample(true);
      toast("Wonderful! Here’s a sample finished painting.");
      return;
    }

    toast("Nice work — next picture step unlocked!");
    setActiveStep((index) => Math.min(index + 1, totalSteps - 1));
  }

  function goBack() {
    if (showSample) {
      setShowSample(false);
      return;
    }
    setActiveStep((index) => Math.max(0, index - 1));
  }

  function goNext() {
    if (!stepDone && !isLastStep) {
      toast("Finish this step first, then jump to the next one.");
      return;
    }
    if (isLastStep) {
      setShowSample(true);
      return;
    }
    setActiveStep((index) => Math.min(index + 1, totalSteps - 1));
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
        Step-by-step picture guidance with calm audio — finish a step, then jump
        to the next. At the end, see a sample finished painting.
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
          ) : started ? (
            "Restart Lesson"
          ) : (
            "Generate Lesson"
          )}
        </Button>
      </div>

      {!started ? (
        <div className="mt-10 rounded-[2rem] border border-dashed border-indigo-warm/30 bg-white/70 p-8 text-center">
          <Sparkles className="mx-auto size-8 text-amber-deep" aria-hidden />
          <p className="mt-3 font-semibold text-ink">
            Press Generate Lesson to begin
          </p>
          <p className="mt-2 text-sm text-ink-muted">
            You’ll see primary colors with pictures, then mixing, then a sun —
            and a sample finished artwork at the end.
          </p>
        </div>
      ) : (
        <>
          <ol className="mt-8 flex gap-2 overflow-x-auto pb-1">
            {demoLessonSteps.map((item, index) => {
              const done = completedSteps.includes(index);
              const current = index === activeStep && !showSample;
              return (
                <li key={item.id} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      if (index <= Math.max(...completedSteps, 0) || index === 0 || completedSteps.includes(index - 1) || done) {
                        setShowSample(false);
                        setActiveStep(index);
                      }
                    }}
                    className={cn(
                      "inline-flex min-h-10 items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold transition",
                      current
                        ? "border-indigo-warm bg-indigo-warm text-white"
                        : done
                          ? "border-teal-calm/40 bg-teal-calm/15 text-teal-deep"
                          : "border-indigo-warm/15 bg-white text-ink-muted",
                    )}
                  >
                    {done ? <Check className="size-3.5" aria-hidden /> : null}
                    Step {item.stepNumber}
                  </button>
                </li>
              );
            })}
            <li className="shrink-0">
              <button
                type="button"
                onClick={() => {
                  if (completedSteps.includes(totalSteps - 1) || showSample) {
                    setShowSample(true);
                  }
                }}
                className={cn(
                  "inline-flex min-h-10 items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold transition",
                  showSample
                    ? "border-coral bg-coral text-white"
                    : "border-indigo-warm/15 bg-white text-ink-muted",
                )}
              >
                Sample
              </button>
            </li>
          </ol>

          <AnimatePresence mode="wait">
            {showSample ? (
              <motion.section
                key="sample"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="mt-6 overflow-hidden rounded-[2rem] border border-violet/10 bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3] w-full bg-sand-50">
                  <Image
                    src={demoLessonSample.imageUrl}
                    alt={demoLessonSample.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 768px"
                    priority
                  />
                </div>
                <div className="space-y-3 p-5 sm:p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-coral">
                    Sample finished picture
                  </p>
                  <h2 className="font-display text-2xl font-bold text-indigo-deep">
                    You completed every step!
                  </h2>
                  <p className="text-base leading-relaxed text-ink-muted">
                    {demoLessonSample.caption}
                  </p>
                  <aside
                    className="rounded-3xl border border-teal-calm/30 bg-teal-calm/10 p-4"
                    aria-live="polite"
                  >
                    <p className="text-sm font-bold uppercase tracking-wide text-teal-deep">
                      AI Feedback
                    </p>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-ink">
                      {demoAiFeedback}
                    </p>
                  </aside>
                </div>
              </motion.section>
            ) : (
              <motion.section
                key={step.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="mt-6 overflow-hidden rounded-[2rem] border border-violet/10 bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3] w-full bg-sand-50">
                  <Image
                    src={step.imageUrl}
                    alt={step.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 768px"
                    priority
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-indigo-deep shadow-sm">
                    Step {step.stepNumber} of {totalSteps}
                  </span>
                </div>
                <div className="space-y-3 p-5 sm:p-6">
                  <p className="text-sm font-bold text-amber-deep">
                    Picture + audio guidance
                  </p>
                  <h2 className="font-display text-2xl font-bold text-ink">
                    {step.title}
                  </h2>
                  <p className="text-base leading-relaxed text-ink-muted">
                    {step.instruction}
                  </p>

                  <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                    <Button
                      size="lg"
                      variant="teal"
                      onClick={playAudio}
                      disabled={playing}
                      aria-busy={playing}
                      className="min-h-14 flex-1 text-base"
                    >
                      {playing ? (
                        <>
                          <Loader2 className="animate-spin" aria-hidden />
                          Playing…
                        </>
                      ) : (
                        <>
                          <Volume2 aria-hidden />
                          Play Audio
                        </>
                      )}
                    </Button>
                    <Button
                      size="lg"
                      variant="secondary"
                      className="min-h-14 flex-1 text-base"
                      onClick={finishStep}
                    >
                      <Check aria-hidden />
                      {isLastStep
                        ? "I finished — show sample"
                        : "I finished this step"}
                    </Button>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button
                      size="lg"
                      variant="outline"
                      className="min-h-12 flex-1"
                      onClick={goBack}
                      disabled={activeStep === 0}
                    >
                      <ArrowLeft aria-hidden />
                      Back
                    </Button>
                    <Button
                      size="lg"
                      variant="coral"
                      className="min-h-12 flex-1"
                      onClick={goNext}
                      disabled={!stepDone && !isLastStep}
                    >
                      Next step
                      <ArrowRight aria-hidden />
                    </Button>
                  </div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </>
      )}
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
