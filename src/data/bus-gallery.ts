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

/** Real event photos for the Activity Gallery (curated set). */
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
    id: "photo-roving-art-sale",
    src: "/bus-gallery/roving-art-for-sale.jpg",
    alt: "Family helping a child color artwork for sale in front of the Roving Art Truck",
    category: "community",
    tag: "❤️ Art For Sale",
    location: "National Gallery Singapore Stop",
    date: "2025",
    caption:
      "Look, imagine, and tell the stories — a young artist colors with family beside the Roving Art Truck, with an Art For Sale sign on the table.",
    likes: 203,
    span: "wide",
  },
  {
    id: "photo-painting-sound-bus",
    src: "/bus-gallery/painting-sound-bus.jpg",
    alt: "Illustrated Painting and Sound Bus with children making music and art inside",
    category: "exhibition",
    tag: "🎵 Painting & Sound Bus",
    location: "画语巴士 Concept",
    date: "Concept art",
    caption:
      "Painting & Sound Bus — 以画为语，以声为伴. Kids explore color bottles and kitchen-pot concerts inside a cheerful mobile studio.",
    likes: 210,
    span: "wide",
  },
  {
    id: "photo-winter-art-bus",
    src: "/bus-gallery/winter-art-bus.jpg",
    alt: "Illustrated Winter Art Bus autism-friendly workshop in a snowy landscape",
    category: "creating",
    tag: "❄️ Winter Art Bus",
    location: "Autism-Friendly Workshop",
    date: "Concept art",
    caption:
      "Winter Art Bus — warm lights, calm stools, and autism-friendly art workshops that turn cold days into creative ones.",
    likes: 196,
    span: "wide",
  },
];

export const photoWallFilters = [
  { id: "all" as const, label: "All Moments" },
  { id: "senses" as const, label: "Five Senses" },
  { id: "creating" as const, label: "Children Creating" },
  { id: "exhibition" as const, label: "Bus Exhibition" },
  { id: "community" as const, label: "Community & Purchases" },
];
