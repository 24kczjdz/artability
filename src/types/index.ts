export type AgeRange =
  | "early-childhood"
  | "middle-childhood"
  | "adolescence"
  | "all-ages";

export type SpectrumFocus =
  | "autism"
  | "adhd"
  | "sensory-processing"
  | "down-syndrome"
  | "general-support";

/** How significant support needs are (self-reported / from screening). */
export type ConditionSeverity =
  | "mild"
  | "moderate"
  | "significant"
  | "complex";

export type CreatorIdentity =
  | "young-artist"
  | "parent-guardian"
  | "teacher-therapist"
  | "family-caregiver";

export type LessonLevel = 1 | 2 | 3;

/** AI Art Education tracks */
export type CourseTrack =
  | "color-learning"
  | "drawing"
  | "ai-assisted"
  | "open-source";

export type ArtworkCategory = "physical" | "digital";

export type PurchaseOption = "physical" | "merchandise" | "digital";

export type PortalMode = "student" | "buyer";

export type VideoPlatform = "youtube" | "bilibili" | "other";

export interface VideoResource {
  id: string;
  title: string;
  channel: string;
  platform: VideoPlatform;
  url: string;
  /** Real YouTube thumbnail when platform is youtube */
  thumbnailUrl: string;
  youtubeId?: string;
  duration: string;
  level: string;
  topics: string[];
  description: string;
}

export interface AgeRangeOption {
  id: AgeRange;
  label: string;
  years: string;
}

export interface SpectrumFocusOption {
  id: SpectrumFocus;
  label: string;
  description: string;
}

export interface ConditionSeverityOption {
  id: ConditionSeverity;
  label: string;
  description: string;
}

export interface CreatorIdentityOption {
  id: CreatorIdentity;
  label: string;
  description: string;
}

export interface CourseTrackMeta {
  id: CourseTrack;
  label: string;
  labelZh: string;
  description: string;
  accent: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  track: CourseTrack;
  level: LessonLevel;
  ageRanges: AgeRange[];
  spectrumFocus: SpectrumFocus[];
  recommendedSeverity: ConditionSeverity[];
  durationMinutes: number;
  description: string;
  skills: string[];
  personalizedNote: string;
  colorAccent: string;
  coverImage: string;
  coverAlt: string;
  source?: string;
}

export interface DemoStep {
  id: string;
  stepNumber: number;
  title: string;
  instruction: string;
  audioPrompt: string;
  imageUrl: string;
  imageAlt: string;
}

export interface DemoLessonSample {
  imageUrl: string;
  imageAlt: string;
  caption: string;
}

export interface Artwork {
  id: string;
  title: string;
  slug: string;
  artistName: string;
  artistAge: number;
  category: ArtworkCategory;
  price: number;
  ageGroup: AgeRange;
  verifiedAsdCreator: boolean;
  story: string;
  imageGradient: string;
  tags: string[];
  socialChannels: ("instagram" | "tiktok" | "xiaohongshu")[];
  /** Featured on the physical Painting Bus / Art on the Move inventory */
  featuredOnBus: boolean;
}

export interface IncomeShare {
  label: string;
  percent: number;
  color: string;
}

export interface FlywheelStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
}

export interface SiteStat {
  id: string;
  value: string;
  label: string;
}

export interface BusFlowStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
}

export interface BusStop {
  id: string;
  venue: string;
  city: string;
  date: string;
  status: "upcoming" | "invite-open" | "completed";
}

export type PhotoWallCategory =
  | "all"
  | "senses"
  | "creating"
  | "exhibition"
  | "community";

export interface PhotoWallItem {
  id: string;
  src: string;
  alt: string;
  category: Exclude<PhotoWallCategory, "all">;
  tag: string;
  location: string;
  date: string;
  caption: string;
  likes: number;
  span?: "tall" | "wide" | "normal";
  /** Optional Five Senses label, e.g. Sound, Touch, Sight */
  sense?: "sound" | "touch" | "sight" | "smell" | "taste";
}

export interface AiProfileSuggestion {
  headline: string;
  summary: string;
  recommendedTracks: CourseTrack[];
  startingLevel: LessonLevel;
  pacingTips: string[];
  cautionNotes: string[];
}
