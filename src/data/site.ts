import type { FlywheelStep, SiteStat } from "@/types";

export const siteConfig = {
  name: "ArtAbility",
  tagline: "Unlocking Creative Futures for Special Needs Artists",
  description:
    "Personalized AI-powered art education meets a self-sustaining marketplace. Empowering children with Autism to Learn, Create, Earn, and Sustain.",
  busName: "Painting Bus",
  busTagline: "Speak with Arts, Walk with Stars",
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/learn", label: "Learn" },
    { href: "/marketplace", label: "Marketplace" },
    { href: "/bus-gallery", label: "Bus Gallery" },
    { href: "/contact", label: "Contact Us" },
  ],
} as const;

export const heroStats: SiteStat[] = [
  {
    id: "stat-lessons",
    value: "100+",
    label: "Custom Lessons",
  },
  {
    id: "stat-verified",
    value: "100%",
    label: "Verified Creators",
  },
  {
    id: "stat-royalty",
    value: "Direct",
    label: "Creator Royalty Earned",
  },
];

export const flywheelSteps: FlywheelStep[] = [
  {
    id: "flywheel-1",
    stepNumber: 1,
    title: "Register & Verify",
    description:
      "Real-name registration: choose identity, share support-need severity, and optionally upload a screening report for an AI learning suggestion.",
  },
  {
    id: "flywheel-2",
    stepNumber: 2,
    title: "AI Learning",
    description:
      "Personalized AIGC courses across Color Learning, Drawing, AI-assisted Creation, and curated open resources.",
  },
  {
    id: "flywheel-3",
    stepNumber: 3,
    title: "Create Artwork",
    description:
      "Turn lesson progress into finished pieces with calm tools and encouraging feedback.",
  },
  {
    id: "flywheel-4",
    stepNumber: 4,
    title: "Upload",
    description:
      "After courses, upload artwork with an artist story ready for marketplace review.",
  },
  {
    id: "flywheel-5",
    stepNumber: 5,
    title: "Review",
    description:
      "Platform review checks safety, authenticity, and presentation before listing.",
  },
  {
    id: "flywheel-6",
    stepNumber: 6,
    title: "Marketplace & Painting Bus",
    description:
      "Sell online or exhibit on the Painting Bus — Physical, Digital, and merchandise options.",
  },
  {
    id: "flywheel-7",
    stepNumber: 7,
    title: "Customer Purchase",
    description:
      "Families, collectors, and CSR buyers purchase with clear creator attribution.",
  },
  {
    id: "flywheel-8",
    stepNumber: 8,
    title: "Revenue Distribution",
    description:
      "Sales split transparently: most income returns to the artist family, plus materials and platform operations.",
  },
];
