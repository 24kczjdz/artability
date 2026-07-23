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

/** Photography exhibitions & awards (shown in team member title dropdowns). */
export const photographyTitles = [
  '2023 · "Plants Don\'t Speak" Photography Exhibition — Artron Art Center, Beijing',
  "2024 · 10th Seoul International Photo Festival – Thematic Exhibition of Foreign Artists — Seoul Artist Hall",
  '2024 · 4th "Wanxiang" International University Photography Art Invitational Exhibition — China Academy of Art, China National Design Museum',
  "2024 · 7th China-ASEAN University Cultural Week International Photography Exhibition – Award for Outstanding Work — Haikou University of Economics",
  '2025 · "Yuyi Tongxing" – 11th Chongqing Photography Art Exhibition – Silver Award — Chongqing Federation of Literary and Art Circles Art Museum, Hall A',
  "2025 · Lishui Photography Festival — Lishui Guyan Painting Village Art Center",
  "2025 · 25th Pingyao International Photo Festival — Pingyao Ancient City, Shanxi",
  "2025 · Our Vision – International Youth Photography Competition, Third Prize — Shangtu Charity Foundation + Ying Gallery",
  "2025 · 26th Chiba Oriental Art Exhibition — Chiba, Japan",
] as const;

export const teamMembers = [
  {
    id: "vicky-wang",
    name: "Vicky Wang Li Jia",
    role: "Software Engineer",
    focus: "Our Solution · Presentation 3 & 4",
    bio: "Computer Science student at The University of Hong Kong and Software Engineer at Arts Tech Lab (Faculty of Arts, HKU). Builds the ArtAbility platform and presents our product solution — learning, marketplace, and Painting Bus in one experience.",
    imageSrc: "/team/vicky-wang-li-jia.png",
    imageAlt: "Portrait of Vicky Wang Li Jia, Software Engineer at ArtAbility",
    titles: [] as string[],
  },
  {
    id: "li-yuxiang",
    name: "Li Yuxiang",
    role: "Video Creator",
    focus: "POC · Intro Video · AI Lesson Video",
    bio: "Creates introduction and AI lesson videos that show how ArtAbility works for families and partners.",
    imageSrc: "/team/li-yuxiang.jpg",
    imageAlt: "Portrait of Li Yuxiang, Video Creator at ArtAbility",
    titles: [...photographyTitles],
  },
  {
    id: "chang-e",
    name: "Chang E",
    role: "Research",
    focus: "Existing Cases · Do Search",
    bio: "Researches existing cases and market insights that shape how ArtAbility grows with the community.",
    imageSrc: "/team/chang-e.jpg",
    imageAlt: "Portrait of Chang E, Research at ArtAbility",
    titles: [] as string[],
  },
  {
    id: "kevin",
    name: "Kevin",
    role: "Video Creator",
    focus: "POC · Intro Video · AI Lesson Video",
    bio: "Partners on POC video production — introduction film and AI lesson demos for the ArtAbility story.",
    imageSrc: "/team/kevin.jpg",
    imageAlt: "Portrait of Kevin, Video Creator at ArtAbility",
    titles: [] as string[],
  },
  {
    id: "louise",
    name: "Louise Goh",
    role: "Social Impact · Business Mentor",
    focus: "Social Issue · Presentation 1 · Strategic Planning",
    bio: "Engineering and entrepreneurial scholar from NTU’s Renaissance Engineering Programme (REP). Hands-on with philanthropic and entrepreneurship ventures like Project Organdie and Boothifool Moments, and placed 3rd in a global sustainability challenge with PeatGuard. Mentors the Mobile Initiative with business and strategic planning so projects stay innovative, scalable, and commercially viable.",
    imageSrc: "/team/louise-goh.jpg",
    imageAlt: "Portrait of Louise Goh smiling outdoors by a lake fountain",
    titles: [] as string[],
  },
  {
    id: "cai-zhidan",
    name: "Cai Zhidan",
    role: "Strategy & Feasibility",
    focus: "Presentation 5 · Tech · Ops · Risk · Future",
    bio: "Owns technical and operational feasibility, risk management, and future development planning.",
    imageSrc: "/team/cai-zhidan.jpg",
    imageAlt: "Portrait of Cai Zhidan, Strategy & Feasibility at ArtAbility",
    titles: [] as string[],
  },
  {
    id: "jerry",
    name: "Jerry",
    role: "Business & Finance",
    focus: "Business Model · Financial Feasibility",
    bio: "Shapes the business model and financial feasibility so ArtAbility can sustain creator income.",
    imageSrc: "/team/jerry.jpg",
    imageAlt: "Portrait of Jerry, Business & Finance at ArtAbility",
    titles: [] as string[],
  },
  {
    id: "feiyang",
    name: "Tan Feiyang",
    role: "Business & Finance",
    focus: "Business Model · Financial Feasibility",
    bio: "Works on business model design and financial feasibility alongside the growth team.",
    imageSrc: "/team/tan-feiyang.jpg",
    imageAlt: "Portrait of Tan Feiyang, Business & Finance at ArtAbility",
    titles: [] as string[],
  },
] as const satisfies readonly {
  id: string;
  name: string;
  role: string;
  focus: string;
  bio: string;
  imageSrc: string | null;
  imageAlt: string;
  titles: readonly string[];
}[];
