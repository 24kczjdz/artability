import type { Artwork, IncomeShare } from "@/types";

export const artworks: Artwork[] = [
  {
    id: "art-rainbow-dreams",
    title: "Rainbow Dreams",
    slug: "rainbow-dreams",
    artistName: "Leo Hartwell",
    artistAge: 5,
    category: "physical",
    price: 45,
    ageGroup: "early-childhood",
    verifiedAsdCreator: true,
    story:
      "Leo Hartwell painted this after a rainy afternoon. He mixed every color he could find and said the rainbow was 'how happy feels in the sky.'",
    imageGradient: "linear-gradient(145deg, #F6C177 0%, #E07A5F 40%, #3D5A80 100%)",
    tags: ["watercolor", "emotion", "rainbow"],
    socialChannels: ["instagram", "xiaohongshu"],
    featuredOnBus: true,
  },
  {
    id: "art-quiet-ocean",
    title: "Quiet Ocean",
    slug: "quiet-ocean",
    artistName: "Maya Song",
    artistAge: 8,
    category: "digital",
    price: 65,
    ageGroup: "middle-childhood",
    verifiedAsdCreator: true,
    story:
      "Maya Song loves the sound of waves. She layered soft teal strokes until the page felt calm enough to rest her eyes on.",
    imageGradient: "linear-gradient(160deg, #A8DADC 0%, #457B9D 55%, #1D3557 100%)",
    tags: ["calm", "nature", "print"],
    socialChannels: ["instagram", "tiktok"],
    featuredOnBus: true,
  },
  {
    id: "art-circle-friends",
    title: "Circle Friends",
    slug: "circle-friends",
    artistName: "Sam Delgado",
    artistAge: 7,
    category: "digital",
    price: 25,
    ageGroup: "middle-childhood",
    verifiedAsdCreator: true,
    story:
      "Sam Delgado draws circles for everyone he cares about. Each ring is a person; the overlapping ones are family.",
    imageGradient: "linear-gradient(135deg, #F4A261 0%, #E9C46A 45%, #2A9D8F 100%)",
    tags: ["shapes", "family", "digital"],
    socialChannels: ["xiaohongshu", "tiktok"],
    featuredOnBus: false,
  },
  {
    id: "art-texture-garden",
    title: "Texture Garden",
    slug: "texture-garden",
    artistName: "Ava Kim",
    artistAge: 10,
    category: "physical",
    price: 95,
    ageGroup: "middle-childhood",
    verifiedAsdCreator: true,
    story:
      "Ava Kim collected fabric scraps and pressed them into paint. Her garden grew from touch first, then from color.",
    imageGradient: "linear-gradient(150deg, #DAD7CD 0%, #A3B18A 40%, #588157 100%)",
    tags: ["tactile", "collage", "garden"],
    socialChannels: ["instagram"],
    featuredOnBus: true,
  },
  {
    id: "art-starlight-paths",
    title: "Starlight Paths",
    slug: "starlight-paths",
    artistName: "Noah Greer",
    artistAge: 12,
    category: "digital",
    price: 120,
    ageGroup: "adolescence",
    verifiedAsdCreator: true,
    story:
      "Noah Greer maps routes between stars the way he maps routes between thoughts. Corporate CSR partners use this piece for calm workspace galleries.",
    imageGradient: "linear-gradient(165deg, #1B263B 0%, #415A77 50%, #E0E1DD 100%)",
    tags: ["night", "abstract", "csr"],
    socialChannels: ["instagram", "tiktok", "xiaohongshu"],
    featuredOnBus: true,
  },
  {
    id: "art-sunny-squares",
    title: "Sunny Squares",
    slug: "sunny-squares",
    artistName: "Ellie Tanaka",
    artistAge: 6,
    category: "digital",
    price: 35,
    ageGroup: "early-childhood",
    verifiedAsdCreator: true,
    story:
      "Ellie Tanaka lined up yellow squares like cookies cooling on a tray. She giggled every time she added another warm block.",
    imageGradient: "linear-gradient(140deg, #FFE8A3 0%, #F4A261 50%, #E76F51 100%)",
    tags: ["pattern", "warm", "playful"],
    socialChannels: ["xiaohongshu"],
    featuredOnBus: false,
  },
  {
    id: "art-forest-whispers",
    title: "Forest Whispers",
    slug: "forest-whispers",
    artistName: "Jordan Blake",
    artistAge: 14,
    category: "physical",
    price: 150,
    ageGroup: "adolescence",
    verifiedAsdCreator: true,
    story:
      "Jordan Blake spent three weeks building layers of green. The darkest trees are days that felt hard; the lightest leaves are days that felt kind.",
    imageGradient: "linear-gradient(155deg, #CAD2C5 0%, #84A98C 35%, #354F52 100%)",
    tags: ["landscape", "emotion", "framed"],
    socialChannels: ["instagram", "tiktok"],
    featuredOnBus: true,
  },
  {
    id: "art-hello-hands",
    title: "Hello Hands",
    slug: "hello-hands",
    artistName: "Priya Mehta",
    artistAge: 4,
    category: "physical",
    price: 28,
    ageGroup: "early-childhood",
    verifiedAsdCreator: true,
    story:
      "Priya Mehta pressed her hands into paint with her dad. Each print is a hello — bright, messy, and full of trust.",
    imageGradient: "linear-gradient(145deg, #FFB4A2 0%, #E5989B 40%, #B5838D 100%)",
    tags: ["handprint", "family", "early"],
    socialChannels: ["xiaohongshu", "instagram"],
    featuredOnBus: false,
  },
];

export const incomeDistribution: IncomeShare[] = [
  {
    label: "Artist Family",
    percent: 70,
    color: "#2F6B5A",
  },
  {
    label: "Material Fund",
    percent: 20,
    color: "#F0A04B",
  },
  {
    label: "Platform Operation",
    percent: 10,
    color: "#3D5A80",
  },
];

export const categoryLabels: Record<Artwork["category"], string> = {
  physical: "Physical Artwork",
  digital: "Digital Artwork",
};

export const socialChannelLabels = {
  instagram: "Instagram",
  tiktok: "TikTok",
  xiaohongshu: "小红书",
} as const;

export function getArtworkById(id: string): Artwork | undefined {
  return artworks.find((artwork) => artwork.id === id || artwork.slug === id);
}

export function getArtworkBySlug(slug: string): Artwork | undefined {
  return artworks.find((artwork) => artwork.slug === slug);
}
