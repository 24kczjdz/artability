import type { VideoResource } from "@/types";

/** Official YouTube thumbnail CDN — real cover frames for each video. */
function ytThumb(youtubeId: string) {
  return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
}

function ytWatch(youtubeId: string) {
  return `https://www.youtube.com/watch?v=${youtubeId}`;
}

export const videoResources: VideoResource[] = [
  {
    id: "yt-art-kids-hub-owl",
    title: "How To Draw An Owl",
    channel: "Art for Kids Hub",
    platform: "youtube",
    youtubeId: "OJZF9Nka-78",
    url: ytWatch("OJZF9Nka-78"),
    thumbnailUrl: ytThumb("OJZF9Nka-78"),
    duration: "8 min",
    level: "Beginner",
    topics: ["shapes", "drawing", "animals"],
    description:
      "Friendly step-by-step owl drawing — great for early childhood and parent co-learning.",
  },
  {
    id: "yt-color-mix-game",
    title: "The Color Mix Game!",
    channel: "Ask the Teacher",
    platform: "youtube",
    youtubeId: "1pmPzLhV-mo",
    url: ytWatch("1pmPzLhV-mo"),
    thumbnailUrl: ytThumb("1pmPzLhV-mo"),
    duration: "1 min",
    level: "Beginner",
    topics: ["color", "mixing"],
    description:
      "Quick primary → secondary color predictions — warm-up for Color Learning tracks.",
  },
  {
    id: "yt-sesame-primary-colors",
    title: "OK Go — Three Primary Colors",
    channel: "Sesame Street",
    platform: "youtube",
    youtubeId: "yu44JRTIxSQ",
    url: ytWatch("yu44JRTIxSQ"),
    thumbnailUrl: ytThumb("yu44JRTIxSQ"),
    duration: "3 min",
    level: "Beginner",
    topics: ["color", "music", "primary"],
    description:
      "Classic primary-color song that pairs well with calm color recognition lessons.",
  },
  {
    id: "yt-mixing-colors-song",
    title: "Mixing Primary Colors Song",
    channel: "OmoBerry",
    platform: "youtube",
    youtubeId: "g6dxDRXkZ-Q",
    url: ytWatch("g6dxDRXkZ-Q"),
    thumbnailUrl: ytThumb("g6dxDRXkZ-Q"),
    duration: "2 min",
    level: "Beginner",
    topics: ["color", "song"],
    description:
      "Upbeat mixing song for red, yellow, blue → orange, green, purple.",
  },
  {
    id: "yt-spring-tree",
    title: "How To Draw A Funny Spring Tree",
    channel: "Art for Kids Hub",
    platform: "youtube",
    youtubeId: "XzBirntzAXo",
    url: ytWatch("XzBirntzAXo"),
    thumbnailUrl: ytThumb("XzBirntzAXo"),
    duration: "8 min",
    level: "Beginner+",
    topics: ["nature", "trees", "drawing"],
    description:
      "Observational nature drawing that pairs with our Shapes in Nature course.",
  },
  {
    id: "yt-draw-a-tree",
    title: "How To Draw A Tree",
    channel: "Art for Kids Hub",
    platform: "youtube",
    youtubeId: "gExU54kVM0o",
    url: ytWatch("gExU54kVM0o"),
    thumbnailUrl: ytThumb("gExU54kVM0o"),
    duration: "10 min",
    level: "Beginner",
    topics: ["nature", "observation"],
    description:
      "Simple tree structure and foliage — good fine-motor practice.",
  },
  {
    id: "yt-finger-paint-butterflies",
    title: "Finger Paint Butterflies",
    channel: "Easy & Fun Art for Kids",
    platform: "youtube",
    youtubeId: "M8goix6QFos",
    url: ytWatch("M8goix6QFos"),
    thumbnailUrl: ytThumb("M8goix6QFos"),
    duration: "6–10 min",
    level: "Beginner",
    topics: ["sensory", "paint"],
    description:
      "Low-pressure sensory painting ideas for texture-first learners.",
  },
  {
    id: "yt-crazy-face-emoji",
    title: "How To Draw The Crazy Face Emoji",
    channel: "Art for Kids Hub",
    platform: "youtube",
    youtubeId: "Qy5xz_JRxCw",
    url: ytWatch("Qy5xz_JRxCw"),
    thumbnailUrl: ytThumb("Qy5xz_JRxCw"),
    duration: "8 min",
    level: "Beginner",
    topics: ["emotion", "faces"],
    description:
      "Expressive face drawing that pairs with Color & Emotion lessons.",
  },
  {
    id: "yt-snowman",
    title: "How To Draw A Snowman",
    channel: "Art for Kids Hub",
    platform: "youtube",
    youtubeId: "GBPrVhWdORg",
    url: ytWatch("GBPrVhWdORg"),
    thumbnailUrl: ytThumb("GBPrVhWdORg"),
    duration: "9 min",
    level: "Beginner",
    topics: ["shapes", "circles"],
    description:
      "Circle stacking and simple details — gentle shape practice.",
  },
  {
    id: "yt-cherry-blossom",
    title: "How To Draw A Cherry Blossom Tree",
    channel: "Art for Kids Hub",
    platform: "youtube",
    youtubeId: "88K3ytkQlek",
    url: ytWatch("88K3ytkQlek"),
    thumbnailUrl: ytThumb("88K3ytkQlek"),
    duration: "12 min",
    level: "Intermediate",
    topics: ["nature", "detail"],
    description:
      "Softer nature study for middle childhood and adolescence.",
  },
];

export const videoPlatformLabels = {
  youtube: "YouTube",
  bilibili: "Bilibili",
  other: "Online video",
} as const;
