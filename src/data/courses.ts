import type {
  AgeRangeOption,
  AiProfileSuggestion,
  ConditionSeverity,
  ConditionSeverityOption,
  Course,
  CourseTrack,
  CourseTrackMeta,
  CreatorIdentityOption,
  DemoLessonSample,
  DemoStep,
  SpectrumFocus,
  SpectrumFocusOption,
} from "@/types";

export const ageRangeOptions: AgeRangeOption[] = [
  {
    id: "early-childhood",
    label: "Early Childhood",
    years: "0–6 years",
  },
  {
    id: "middle-childhood",
    label: "Middle Childhood",
    years: "7–12 years",
  },
  {
    id: "adolescence",
    label: "Adolescence",
    years: "13–18 years",
  },
  {
    id: "all-ages",
    label: "All Ages",
    years: "Flexible pacing",
  },
];

export const creatorIdentityOptions: CreatorIdentityOption[] = [
  {
    id: "young-artist",
    label: "Young Artist",
    description: "I am creating and learning myself",
  },
  {
    id: "parent-guardian",
    label: "Parent / Guardian",
    description: "I support a child artist at home",
  },
  {
    id: "teacher-therapist",
    label: "Teacher / Therapist",
    description: "I guide learners in class or clinic",
  },
  {
    id: "family-caregiver",
    label: "Family Caregiver",
    description: "I help with daily learning and care",
  },
];

export const conditionSeverityOptions: ConditionSeverityOption[] = [
  {
    id: "mild",
    label: "Mild support needs",
    description: "Mostly independent with occasional guidance",
  },
  {
    id: "moderate",
    label: "Moderate support needs",
    description: "Benefits from structured steps and check-ins",
  },
  {
    id: "significant",
    label: "Significant support needs",
    description: "Needs shorter tasks, calm pacing, and co-learning",
  },
  {
    id: "complex",
    label: "Complex / multi-need",
    description: "Multiple supports; sensory and communication aware",
  },
];

export const spectrumFocusOptions: SpectrumFocusOption[] = [
  {
    id: "autism",
    label: "Autism Spectrum",
    description: "Visual structure, predictable steps, sensory-aware pacing",
  },
  {
    id: "adhd",
    label: "ADHD Focus Support",
    description: "Short bursts, clear goals, motivating checkpoints",
  },
  {
    id: "sensory-processing",
    label: "Sensory Processing",
    description: "Texture-first activities with calm audio cues",
  },
  {
    id: "down-syndrome",
    label: "Down Syndrome",
    description: "Repetition-friendly lessons with large visual targets",
  },
  {
    id: "general-support",
    label: "General Support",
    description: "Adaptive guidance for mixed learning needs",
  },
];

export const courseTracks: CourseTrackMeta[] = [
  {
    id: "color-learning",
    label: "Color Learning",
    labelZh: "色彩认知",
    description:
      "AIGC lessons for naming colors, matching feelings, and warm/cool awareness.",
    accent: "#F0A04B",
  },
  {
    id: "drawing",
    label: "Drawing Basics",
    labelZh: "基础绘画",
    description:
      "Shapes, lines, and nature sketching with big targets and step cards.",
    accent: "#3D5A80",
  },
  {
    id: "ai-assisted",
    label: "AI-assisted Creation",
    labelZh: "AI 辅助创作",
    description:
      "Guided prompts that help young artists turn ideas into finished pieces.",
    accent: "#2F6B5A",
  },
  {
    id: "open-source",
    label: "Curated Open Resources",
    labelZh: "开源资料整理",
    description:
      "AI organizes trusted open teaching materials into calm, age-fit paths.",
    accent: "#C77820",
  },
];

export const courses: Course[] = [
  {
    id: "course-color-emotion",
    title: "Color & Emotion Recognition",
    slug: "color-emotion-recognition",
    track: "color-learning",
    level: 1,
    ageRanges: ["early-childhood", "middle-childhood"],
    spectrumFocus: ["autism", "general-support"],
    recommendedSeverity: ["mild", "moderate", "significant"],
    durationMinutes: 15,
    description:
      "Match colors to feelings with gentle prompts. Builds emotional vocabulary through painting and choice-making.",
    skills: ["Color naming", "Emotion matching", "Choice making"],
    personalizedNote: "Starts with 3 colors; AI expands the palette as confidence grows.",
    colorAccent: "#F0A04B",
    coverImage: "/learn/primary-colors-art.jpg",
    coverAlt: "Family coloring with a child beside the Roving Art Truck",
  },
  {
    id: "course-warm-cool",
    title: "Warm & Cool Color Worlds",
    slug: "warm-cool-worlds",
    track: "color-learning",
    level: 2,
    ageRanges: ["middle-childhood", "adolescence"],
    spectrumFocus: ["autism", "adhd", "general-support"],
    recommendedSeverity: ["mild", "moderate"],
    durationMinutes: 18,
    description:
      "Sort warm and cool hues, then paint a simple sky-and-sun scene with adaptive difficulty.",
    skills: ["Warm/cool sorting", "Scene building"],
    personalizedNote: "Difficulty scales from 2 piles to mixed gradients.",
    colorAccent: "#E07A5F",
    coverImage: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=900&q=80",
    coverAlt: "Abstract warm and cool painted canvas",
  },
  {
    id: "course-shapes-nature",
    title: "Shapes in Nature — Basic Drawing",
    slug: "shapes-in-nature",
    track: "drawing",
    level: 2,
    ageRanges: ["middle-childhood", "adolescence"],
    spectrumFocus: ["autism", "adhd", "general-support"],
    recommendedSeverity: ["mild", "moderate", "significant"],
    durationMinutes: 20,
    description:
      "Find circles, triangles, and lines outdoors or in photos, then draw them into a simple landscape.",
    skills: ["Shape recognition", "Observation", "Fine motor"],
    personalizedNote: "Trace-first mode available for significant support needs.",
    colorAccent: "#3D5A80",
    coverImage: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80",
    coverAlt: "Art studio with nature-inspired drawings",
  },
  {
    id: "course-line-friends",
    title: "Friendly Lines & Faces",
    slug: "friendly-lines",
    track: "drawing",
    level: 1,
    ageRanges: ["early-childhood", "middle-childhood"],
    spectrumFocus: ["down-syndrome", "autism", "general-support"],
    recommendedSeverity: ["moderate", "significant", "complex"],
    durationMinutes: 12,
    description:
      "Practice big straight and curved lines, then turn them into smiling faces.",
    skills: ["Line control", "Expression"],
    personalizedNote: "Extra-large stroke targets and slower audio pacing.",
    colorAccent: "#457B9D",
    coverImage: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=900&q=80",
    coverAlt: "Hands drawing simple line sketches on paper",
  },
  {
    id: "course-ai-prompt-paint",
    title: "AI Prompt Painting Studio",
    slug: "ai-prompt-painting",
    track: "ai-assisted",
    level: 2,
    ageRanges: ["middle-childhood", "adolescence"],
    spectrumFocus: ["adhd", "autism", "general-support"],
    recommendedSeverity: ["mild", "moderate"],
    durationMinutes: 25,
    description:
      "Describe a feeling in simple words; AI suggests a composition, then you paint over the guide layer.",
    skills: ["Prompting", "Composition", "Finishing"],
    personalizedNote: "Prompt length and option count adapt to attention profile.",
    colorAccent: "#2F6B5A",
    coverImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",
    coverAlt: "Digital design tablet and creative workspace",
  },
  {
    id: "course-ai-story-frame",
    title: "Story Frames with AI Helpers",
    slug: "ai-story-frames",
    track: "ai-assisted",
    level: 3,
    ageRanges: ["adolescence", "middle-childhood"],
    spectrumFocus: ["general-support", "autism", "adhd"],
    recommendedSeverity: ["mild", "moderate"],
    durationMinutes: 30,
    description:
      "Turn a short daily moment into a three-panel comic with AI layout suggestions you can edit.",
    skills: ["Sequencing", "Narrative", "Digital editing"],
    personalizedNote: "Panel count can drop to 1–2 for shorter sessions.",
    colorAccent: "#588157",
    coverImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
    coverAlt: "Notebook and pen for story sketching",
  },
  {
    id: "course-open-color-labs",
    title: "Open Color Labs (Curated)",
    slug: "open-color-labs",
    track: "open-source",
    level: 1,
    ageRanges: ["all-ages"],
    spectrumFocus: ["general-support", "autism", "sensory-processing"],
    recommendedSeverity: ["mild", "moderate", "significant", "complex"],
    durationMinutes: 16,
    description:
      "AI gathers free open art worksheets and rebuilds them into a calm, sequential Color Lab path.",
    skills: ["Self-paced practice", "Resource literacy"],
    personalizedNote: "Sources are filtered for sensory-friendly visuals.",
    colorAccent: "#C77820",
    coverImage: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=80",
    coverAlt: "Watercolor palette with soft pigments",
    source: "Open educational art worksheets (curated)",
  },
  {
    id: "course-open-drawing-path",
    title: "Community Drawing Path",
    slug: "community-drawing-path",
    track: "open-source",
    level: 2,
    ageRanges: ["middle-childhood", "adolescence", "all-ages"],
    spectrumFocus: ["adhd", "general-support", "autism"],
    recommendedSeverity: ["mild", "moderate"],
    durationMinutes: 22,
    description:
      "Trusted open drawing tutorials are sorted by level, then wrapped with ArtAbility audio prompts.",
    skills: ["Independent practice", "Progress tracking"],
    personalizedNote: "Skip ahead when mastery checks pass.",
    colorAccent: "#9A6B2F",
    coverImage: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=900&q=80",
    coverAlt: "Colored pencils and sketchbook for drawing practice",
    source: "Open-source drawing tutorials (curated)",
  },
];

export const demoLessonSteps: DemoStep[] = [
  {
    id: "demo-step-1",
    stepNumber: 1,
    title: "Meet the Primary Colors",
    instruction:
      "Look at red, blue, and yellow — the three primary colors. Point to each one on the picture.",
    audioPrompt:
      "Let's meet the primary colors. Look at red, blue, and yellow. Point to each one.",
    imageUrl: "/learn/primary-colors-art.jpg",
    imageAlt: "Child coloring at a table with family beside the colorful Roving Art Truck",
  },
  {
    id: "demo-step-2",
    stepNumber: 2,
    title: "Find Warm Yellow",
    instruction:
      "Yellow feels warm like sunshine. Look at this yellow paint — tap it in your mind, then find yellow on your paper or palette.",
    audioPrompt:
      "Yellow feels warm like sunshine. Look at this yellow. Can you find yellow on your paper?",
    imageUrl:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Yellow and warm watercolor pigments on a palette",
  },
  {
    id: "demo-step-3",
    stepNumber: 3,
    title: "Meet Cool Blue",
    instruction:
      "Blue feels cool like the sky or ocean. Look at this blue, then find blue among your paints.",
    audioPrompt:
      "Blue feels cool like the sky. Look at this blue color. Find blue on your palette.",
    imageUrl:
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Soft blue paint and brushes for cool color practice",
  },
  {
    id: "demo-step-4",
    stepNumber: 4,
    title: "Mix Blue & Yellow",
    instruction:
      "Gently mix a little blue into yellow. Watch them become green — the color of leaves and grass.",
    audioPrompt:
      "Now mix blue and yellow together. Great mixing makes green, like leaves and grass.",
    imageUrl:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Green and nature-inspired paint colors from mixing",
  },
  {
    id: "demo-step-5",
    stepNumber: 5,
    title: "Draw a Warm Sun",
    instruction:
      "Use your warm yellow to draw a big sun. Add soft orange or red rays if you like. Take your time — there is no rush.",
    audioPrompt:
      "Draw a big sun with warm yellow. You can add orange rays. You are doing wonderful work.",
    imageUrl:
      "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Bright sun in a warm sky as painting inspiration",
  },
];

export const demoLessonSample: DemoLessonSample = {
  imageUrl:
    "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Finished warm-and-cool abstract painting sample for the lesson",
  caption:
    "Sample finished piece — a warm sun glowing over cool sky and green ground. Yours can look different and still be wonderful!",
};

export const demoAiFeedback =
  "Great job using warm colors! Your sun feels bright and friendly. Ready for the next adventure whenever you are.";

export function getTrackMeta(track: CourseTrack): CourseTrackMeta {
  return courseTracks.find((item) => item.id === track) ?? courseTracks[0];
}

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

export function buildAiProfileSuggestion(input: {
  identityLabel: string;
  focus: SpectrumFocus;
  severity: ConditionSeverity;
  ageLabel: string;
  hasReport: boolean;
  reportNote: string;
}): AiProfileSuggestion {
  const trackBySeverity: Record<ConditionSeverity, CourseTrack[]> = {
    mild: ["color-learning", "drawing", "ai-assisted", "open-source"],
    moderate: ["color-learning", "drawing", "open-source", "ai-assisted"],
    significant: ["color-learning", "drawing", "open-source"],
    complex: ["color-learning", "open-source", "drawing"],
  };

  const levelBySeverity: Record<ConditionSeverity, 1 | 2 | 3> = {
    mild: 2,
    moderate: 1,
    significant: 1,
    complex: 1,
  };

  const focusLabel =
    spectrumFocusOptions.find((option) => option.id === input.focus)?.label ??
    input.focus;

  const pacingTips: string[] =
    input.severity === "mild"
      ? [
          "Offer 20–25 minute sessions with one stretch goal.",
          "Introduce AI-assisted creation after two foundational lessons.",
        ]
      : input.severity === "moderate"
        ? [
            "Keep lessons under 20 minutes with a mid-point break.",
            "Use audio instructions before each new step.",
          ]
        : [
            "Use 8–12 minute micro-lessons with co-learner support.",
            "Prefer large buttons, fewer choices, and calm transitions.",
          ];

  const cautionNotes: string[] = [
    "This is a supportive learning suggestion, not a medical diagnosis.",
  ];

  if (input.hasReport) {
    cautionNotes.push(
      input.reportNote.trim()
        ? `Screening note considered: “${input.reportNote.trim().slice(0, 120)}${input.reportNote.trim().length > 120 ? "…" : ""}”.`
        : "Uploaded screening report noted — pacing leans toward calmer steps.",
    );
  }

  if (input.severity === "complex" || input.severity === "significant") {
    cautionNotes.push(
      "Invite a parent, guardian, or therapist to co-pilot the first few sessions.",
    );
  }

  return {
    headline: `Personalized path for ${input.ageLabel}`,
    summary: `As a ${input.identityLabel.toLowerCase()} supporting ${focusLabel.toLowerCase()} needs (${conditionSeverityOptions.find((o) => o.id === input.severity)?.label.toLowerCase()}), we recommend starting with structured color and drawing tracks, then opening curated resources before heavier AI-assisted creation.`,
    recommendedTracks: trackBySeverity[input.severity],
    startingLevel: levelBySeverity[input.severity],
    pacingTips,
    cautionNotes,
  };
}
