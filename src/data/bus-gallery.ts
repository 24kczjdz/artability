import type { BusStop, BusFlowStep, PhotoWallItem } from "@/types";

export const busFlowSteps: BusFlowStep[] = [
  {
    id: "bus-1",
    stepNumber: 1,
    title: "Children Create Artwork in AI Class",
    description:
      "Young artists finish personalized AI lessons and create original pieces with family support.",
  },
  {
    id: "bus-2",
    stepNumber: 2,
    title: "Artworks Displayed in Mobile Bus",
    description:
      "Selected works are printed, mounted, and installed inside the transformed exhibition bus.",
  },
  {
    id: "bus-3",
    stepNumber: 3,
    title: "Public Visits Bus & Scans QR",
    description:
      "Visitors tour the bus at malls, parks, and campuses, then scan QR codes beside each piece.",
  },
  {
    id: "bus-4",
    stepNumber: 4,
    title: "Direct Purchase / Digital License",
    description:
      "Buy framed art on-site, merchandise prints, or digital CSR licenses in a few taps.",
  },
  {
    id: "bus-5",
    stepNumber: 5,
    title: "Sustainable Income to Creator",
    description:
      "Proceeds return to the artist family and program materials — charity that sustains itself.",
  },
];

export const busStops: BusStop[] = [
  {
    id: "stop-mall",
    venue: "City Center Mall Plaza",
    city: "Metro District",
    date: "Sat, Aug 2 · 11:00–17:00",
    status: "upcoming",
  },
  {
    id: "stop-park",
    venue: "Central Park West",
    city: "Riverside",
    date: "Sun, Aug 10 · 10:00–16:00",
    status: "upcoming",
  },
  {
    id: "stop-campus",
    venue: "University Campus Quad",
    city: "Eastside",
    date: "Sat, Aug 16 · 12:00–18:00",
    status: "upcoming",
  },
  {
    id: "stop-school",
    venue: "Sunshine Primary School Fair",
    city: "North Hills",
    date: "Fri, Aug 22 · 13:00–16:30",
    status: "invite-open",
  },
];

export const busPurchaseOptions = [
  {
    id: "physical",
    title: "Physical framed painting",
    description: "Take home the canvas print displayed on the bus.",
  },
  {
    id: "merch",
    title: "Merchandise print",
    description: "T-shirts, tote bags, and postcards featuring the artwork.",
  },
  {
    id: "digital",
    title: "Digital CSR license",
    description: "Personal or corporate license for campaigns and spaces.",
  },
] as const;

/** Real event photos + complementary workshop moments for the Activity Gallery. */
export const photoWallItems: PhotoWallItem[] = [
  {
    id: "event-sound-of-water",
    src: "/bus-gallery/sound-of-water.jpg",
    alt: "Child tapping glass bottles filled with different water levels labeled do-re-mi",
    category: "senses",
    sense: "sound",
    tag: "👂 Sound of Water",
    location: "Painting Bus · Five Senses Stop",
    date: "Jul 2026",
    caption:
      "The Sound of Water — bottles filled to half or one-third create different pitches. Kids tap gently, listen closely, and invent little songs together.",
    likes: 142,
    span: "wide",
  },
  {
    id: "event-natural-music-wall",
    src: "/bus-gallery/natural-music-wall.jpg",
    alt: "Children playing a natural music wall made of colorful PVC pipes, tin cans, and bowls",
    category: "senses",
    sense: "sound",
    tag: "🥁 Natural Music Wall",
    location: "Outdoor Sensory Garden",
    date: "Jul 2026",
    caption:
      "Natural Music Wall — recycled cups, bowls, and pipes become a giant outdoor instrument. Every tap is a new texture of sound for curious little ears.",
    likes: 168,
    span: "tall",
  },
  {
    id: "event-draw-with-flower",
    src: "/bus-gallery/draw-with-flower.jpg",
    alt: "Hands pounding fresh flowers and leaves onto a canvas tote to print natural colors",
    category: "senses",
    sense: "touch",
    tag: "🌸 Draw with Flower",
    location: "Painting Bus · Nature Studio",
    date: "Jul 2026",
    caption:
      "Draw with Flower — fresh petals and leaves are gently pounded onto fabric so nature paints itself. Soft color, scent, and texture for calm sensory play.",
    likes: 131,
    span: "normal",
  },
  {
    id: "photo-185",
    src: "/bus-gallery/185.jpg",
    alt: "Painting Bus open exhibition with framed artworks on display outdoors",
    category: "exhibition",
    tag: "📍 Outdoor Exhibition Stop",
    location: "Community Plaza",
    date: "Jul 12, 2026",
    caption:
      "Neighbors pause to look, imagine, and tell stories beside framed works on the Painting Bus stage.",
    likes: 128,
    span: "wide",
  },
  {
    id: "photo-236",
    src: "/bus-gallery/236.jpg",
    alt: "Painting Bus logo — 画语巴士 speak with arts",
    category: "exhibition",
    tag: "🎨 Painting Bus Logo",
    location: "ArtAbility Brand",
    date: "Brand mark",
    caption:
      "画语巴士 — Speak with Arts, Walk with Stars. Our friendly bus mark for every neighborhood stop.",
    likes: 96,
    span: "normal",
  },
  {
    id: "photo-248",
    src: "/bus-gallery/248.png",
    alt: "Painting Bus community event photo",
    category: "community",
    tag: "🛍️ Community Visit",
    location: "City Center Mall Plaza",
    date: "Aug 2, 2026",
    caption:
      "Families and CSR partners gather around the bus — discovering young artists and scanning QR codes to support them.",
    likes: 154,
    span: "tall",
  },
  {
    id: "photo-273",
    src: "/bus-gallery/273.jpg",
    alt: "Autism-friendly art workshop concept on the roving art bus",
    category: "creating",
    tag: "🎨 AI Workshop",
    location: "University Campus Quad",
    date: "Aug 16, 2026",
    caption:
      "Inside the bus: calm stools, sensory-friendly corners, and space for children to create during autism-friendly workshops.",
    likes: 201,
    span: "wide",
  },
  {
    id: "photo-workshop-hands",
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80",
    alt: "Child painting with colorful materials during a workshop",
    category: "creating",
    tag: "🎨 Children Creating",
    location: "On-bus Art Studio",
    date: "Jul 19, 2026",
    caption:
      "Warm colors first — a young artist explores yellow and orange after an AI Color Learning lesson on the bus.",
    likes: 87,
    span: "normal",
  },
  {
    id: "photo-family-browse",
    src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80",
    alt: "Visitors browsing artwork in a bright gallery setting",
    category: "exhibition",
    tag: "📍 Central Park Stop",
    location: "Central Park West",
    date: "Aug 10, 2026",
    caption:
      "Visitors step into the bus gallery to browse physical framed paintings by verified young creators.",
    likes: 112,
    span: "normal",
  },
  {
    id: "photo-qr-sale",
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    alt: "Person using a phone near a checkout moment",
    category: "community",
    tag: "🛍️ First Art Sale!",
    location: "City Center Mall Plaza",
    date: "Aug 2, 2026",
    caption:
      "A visitor scans the QR beside Leo’s warm-color canvas — first sale of the afternoon, royalties straight to the family.",
    likes: 176,
    span: "normal",
  },
  {
    id: "photo-csr",
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
    alt: "Group of people visiting a community event together",
    category: "community",
    tag: "🤝 CSR Partners",
    location: "Sunshine Primary School Fair",
    date: "Aug 22, 2026",
    caption:
      "Corporate CSR guests tour the Painting Bus and learn how digital licenses fund materials for the next class.",
    likes: 64,
    span: "normal",
  },
];

export const photoWallFilters = [
  { id: "all" as const, label: "All Moments" },
  { id: "senses" as const, label: "Five Senses" },
  { id: "creating" as const, label: "Children Creating" },
  { id: "exhibition" as const, label: "Bus Exhibition" },
  { id: "community" as const, label: "Community & Purchases" },
];
