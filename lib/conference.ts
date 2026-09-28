export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/schedule", label: "Schedule" },
  { href: "/speakers", label: "Speakers" },
];

export type TrackSlug =
  | "frontend"
  | "performance"
  | "accessibility"
  | "tooling";

export type Track = {
  slug: TrackSlug;
  name: string;
  /** Line breaks (\n) follow the design. */
  tagline: string;
};

export const tracks: Track[] = [
  {
    slug: "frontend",
    name: "Frontend",
    tagline: "Building modern interfaces\nfor the web",
  },
  {
    slug: "performance",
    name: "Performance",
    tagline: "Make every\nmillisecond count",
  },
  {
    slug: "accessibility",
    name: "Accessibility",
    tagline: "Building inclusive\nexperiences for everyone",
  },
  {
    slug: "tooling",
    name: "Tooling",
    tagline: "Level up your\ndeveloper workflow",
  },
];

/** Full class names so Tailwind can see them. */
export const trackColors: Record<
  SessionTrack,
  { text: string; bg: string; pressed: string }
> = {
  keynote: {
    text: "text-cyan-100",
    bg: "bg-cyan-100",
    pressed: "aria-pressed:border-cyan-100 aria-pressed:bg-cyan-100",
  },
  frontend: {
    text: "text-yellow-100",
    bg: "bg-yellow-100",
    pressed: "aria-pressed:border-yellow-100 aria-pressed:bg-yellow-100",
  },
  performance: {
    text: "text-red-100",
    bg: "bg-red-100",
    pressed: "aria-pressed:border-red-100 aria-pressed:bg-red-100",
  },
  accessibility: {
    text: "text-blue-100",
    bg: "bg-blue-100",
    pressed: "aria-pressed:border-blue-100 aria-pressed:bg-blue-100",
  },
  tooling: {
    text: "text-purple-100",
    bg: "bg-purple-100",
    pressed: "aria-pressed:border-purple-100 aria-pressed:bg-purple-100",
  },
};

export type Speaker = {
  slug: string;
  name: string;
  role: string;
  company: string;
  talk: string;
  /** Background behind the transparent portrait. */
  color: string;
  bio: string;
};

export const speakers: Speaker[] = [
  {
    slug: "elena-vasquez",
    name: "Elena Vasquez",
    role: "Principal Frontend Engineer",
    company: "ByteCraft",
    talk: "The Next Frontier of Web Development",
    color: "bg-cyan-100",
    bio: "Elena has spent the last decade pushing the boundaries of in-browser development environments. She led the browser-native IDE initiative at Bytecraft and is a frequent contributor to the TC39 process. Her work focuses on making the web platform a first-class development target.",
  },
  {
    slug: "aisha-patel",
    name: "Aisha Patel",
    role: "Web Performance Lead",
    company: "EdgeVane",
    talk: "Eliminating Layout Shift Once and for All",
    color: "bg-red-100",
    bio: "Aisha leads web performance at EdgeVane, where the team cut median layout shift across its storefronts to near zero. Aisha writes about Core Web Vitals and runs performance clinics for open source projects.",
  },
  {
    slug: "naomi-tanaka",
    name: "Naomi Tanaka",
    role: "Accessibility Engineering Lead",
    company: "Axion",
    talk: "Screen Readers Deserve Better Components",
    color: "bg-blue-100",
    bio: "Naomi runs accessibility engineering at Axion and maintains a widely used library of screen reader tested components. Naomi has spent ten years working alongside assistive technology users to shape how teams build interfaces.",
  },
  {
    slug: "james-okonkwo",
    name: "James Okonkwo",
    role: "Engineering Director",
    company: "Cartwell",
    talk: "Monorepos at Scale: Lessons from 500 Packages",
    color: "bg-purple-100",
    bio: "James directs engineering at Cartwell, home to one of the largest JavaScript monorepos in production. James focuses on build tooling, ownership boundaries and keeping hundreds of engineers shipping without stepping on each other.",
  },
  {
    slug: "sarah-lindstrom",
    name: "Sarah Lindström",
    role: "Design Systems Lead",
    company: "Tessera",
    talk: "Type-Safe Design Tokens Across Platforms",
    color: "bg-yellow-100",
    bio: "Sarah leads the design system at Tessera, shipping one set of tokens to web, iOS and Android from a single typed source. Sarah cares about the seams between design and engineering.",
  },
  {
    slug: "devon-park",
    name: "Devon Park",
    role: "Frontend Architect",
    company: "Luminary",
    talk: "Streaming Server Components for Instant Pages",
    color: "bg-purple-100",
    bio: "Devon is a frontend architect at Luminary, where the team moved its product to streaming server rendering. Devon speaks about data loading, suspense boundaries and making pages feel instant.",
  },
  {
    slug: "bertram-gilfoyle",
    name: "Bertram Gilfoyle",
    role: "Systems Architect",
    company: "Pied Piper",
    talk: "Teaching Machines to Write Code: Building Son of Anton",
    color: "bg-purple-100",
    bio: "Bertram is a systems architect at Pied Piper who builds infrastructure other engineers are slightly afraid of. Lately that means code generation systems and the guardrails that keep them honest.",
  },
  {
    slug: "priya-sharma",
    name: "Priya Sharma",
    role: "Senior Developer Advocate",
    company: "Cobalt",
    talk: "ARIA Patterns You're Probably Using Wrong",
    color: "bg-blue-100",
    bio: "Priya is a senior developer advocate at Cobalt, teaching teams to build accessible interfaces with the platform rather than against it. Priya has audited hundreds of ARIA widgets and has opinions about most of them.",
  },
  {
    slug: "lucas-moreau",
    name: "Lucas Moreau",
    role: "Senior Frontend Engineer",
    company: "WebSmith",
    talk: "Browser DevTools: Hidden Gems for CSS Debugging",
    color: "bg-purple-100",
    bio: "Lucas is a senior frontend engineer at WebSmith and a longtime browser DevTools power user. Lucas collects debugging tricks for CSS layout and shares them in a popular newsletter.",
  },
  {
    slug: "marcus-chen",
    name: "Marcus Chen",
    role: "Staff UI Engineer",
    company: "Nimbus",
    talk: "React Server Components: A Practical Deep Dive",
    color: "bg-yellow-100",
    bio: "Marcus is a staff UI engineer at Nimbus who led the migration of a large dashboard to React Server Components. Marcus writes about the tradeoffs the documentation leaves out.",
  },
  {
    slug: "ryan-osullivan",
    name: "Ryan O'Sullivan",
    role: "DevTools Engineer",
    company: "Cobalt",
    talk: "Profiling React Renders at 120fps",
    color: "bg-red-100",
    bio: "Ryan builds profiling tools at Cobalt and spends most days staring at flame charts. Ryan's focus is making render performance visible to every engineer on a team, not just the specialists.",
  },
  {
    slug: "fatima-al-rashid",
    name: "Fatima Al-Rashid",
    role: "Senior UI Engineer",
    company: "Spectra",
    talk: "Designing Accessible Audio Experiences",
    color: "bg-blue-100",
    bio: "Fatima is a senior UI engineer at Spectra working on audio-first interfaces. Fatima designs players, captions and controls that work for listeners of every ability.",
  },
  {
    slug: "tom-kowalski",
    name: "Tom Kowalski",
    role: "Platform Engineer",
    company: "Nimbus",
    talk: "Deploy Preview Environments That Scale",
    color: "bg-purple-100",
    bio: "Tom is a platform engineer at Nimbus responsible for the deploy pipeline behind thousands of preview environments a week. Tom thinks a lot about speed, cost and cleanup.",
  },
  {
    slug: "mei-lin-zhang",
    name: "Mei-Lin Zhang",
    role: "Staff Engineer",
    company: "Roamly",
    talk: "CSS Container Queries in Production",
    color: "bg-yellow-100",
    bio: "Mei-Lin is a staff engineer at Roamly who shipped container queries across a travel booking product used in forty countries. Mei-Lin loves layout problems and the CSS features that finally solve them.",
  },
  {
    slug: "dinesh-chugtai",
    name: "Dinesh Chugtai",
    role: "Senior Frontend Engineer",
    company: "Pied Piper",
    talk: "Video Compression for the Web: The Middle-Out Approach",
    color: "bg-red-100",
    bio: "Dinesh is a senior frontend engineer at Pied Piper working on video delivery in the browser. Dinesh has strong feelings about codecs, buffering and who deserves credit for the compression algorithm.",
  },
  {
    slug: "carlos-rivera",
    name: "Carlos Rivera",
    role: "Core Team Member",
    company: "Blaze",
    talk: "Inside a Modern Bundler: An Architectural Deep Dive",
    color: "bg-red-100",
    bio: "Carlos is a core team member at Blaze, an open source bundler. Carlos works on the module graph and incremental caching, and enjoys explaining how build tools work under the hood.",
  },
  {
    slug: "hannah-bergstrom",
    name: "Hannah Bergström",
    role: "UX Engineer",
    company: "PayPath",
    talk: "Accessible Payment Forms That Convert",
    color: "bg-blue-100",
    bio: "Hannah is a UX engineer at PayPath who designs checkout flows that are accessible and fast. Hannah's research links inclusive form design directly to conversion rates.",
  },
  {
    slug: "kwame-asante",
    name: "Kwame Asante",
    role: "Engineering Manager",
    company: "Trackwise",
    talk: "AI-Powered Developer Tools: Hype vs. Reality",
    color: "bg-purple-100",
    bio: "Kwame manages the developer experience team at Trackwise and has evaluated dozens of AI coding tools in production. Kwame brings data on what actually helps engineers and what just adds noise.",
  },
  {
    slug: "julia-petrov",
    name: "Julia Petrov",
    role: "Runtime Engineer",
    company: "Dawn",
    talk: "Server-Side Rendering Without the Framework",
    color: "bg-yellow-100",
    bio: "Julia is a runtime engineer at Dawn, building a JavaScript runtime designed for the edge. Julia likes stripping frameworks down to find the few ideas that really matter.",
  },
  {
    slug: "oliver-chang",
    name: "Oliver Chang",
    role: "Principal Architect",
    company: "Crestline",
    talk: "Web Performance at Billion-User Scale",
    color: "bg-yellow-100",
    bio: "Oliver is a principal architect at Crestline, responsible for the performance of pages served to over a billion people. Oliver speaks about budgets, regressions and the culture that keeps a big site fast.",
  },
];

const featuredSlugs = [
  "elena-vasquez",
  "naomi-tanaka",
  "james-okonkwo",
  "sarah-lindstrom",
  "priya-sharma",
  "lucas-moreau",
  "ryan-osullivan",
  "tom-kowalski",
];

export const featuredSpeakers = featuredSlugs.flatMap(
  (slug) => speakers.find((speaker) => speaker.slug === slug) ?? [],
);

export type SessionTrack = TrackSlug | "keynote";

export const trackLabels: Record<SessionTrack, string> = {
  keynote: "Keynote",
  frontend: "Frontend",
  performance: "Performance",
  accessibility: "Accessibility",
  tooling: "Tooling",
};

export type Day = 1 | 2 | 3;

export const days: Day[] = [1, 2, 3];

export type Session = {
  id: string;
  title: string;
  speakerSlug: string;
  speaker: string;
  company: string;
  track: SessionTrack;
  day: Day;
  start: string;
  end: string;
  room: string;
  abstract: string;
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

type SessionSlot = {
  /** Speaker slug. The talk title, name and company come from `speakers`. */
  speaker: string;
  track: SessionTrack;
  day: Day;
  start: string;
  end: string;
  room: string;
  abstract: string;
};

// Day 1 follows the design. The slots for days 2 and 3 and every abstract
// except the opening keynote's are placeholders.
const slots: SessionSlot[] = [
  {
    speaker: "elena-vasquez",
    track: "keynote",
    day: 1,
    start: "9:00",
    end: "10:00",
    room: "Room A",
    abstract:
      "The opening keynote. Elena takes the audience on a tour of the web platform's most transformative recent additions: from WebGPU to View Transitions to baseline support for container queries. She live-demos a full-stack application running entirely in the browser and makes the case that the gap between native and web has never been smaller.",
  },
  {
    speaker: "ryan-osullivan",
    track: "performance",
    day: 1,
    start: "10:00",
    end: "11:00",
    room: "Room B",
    abstract:
      "A hands-on walk through the React Profiler and the browser performance panel, hunting down the renders that cost you frames.",
  },
  {
    speaker: "dinesh-chugtai",
    track: "performance",
    day: 1,
    start: "11:00",
    end: "12:00",
    room: "Room B",
    abstract:
      "How a new compression approach cuts video payloads without hurting quality, and what it takes to ship it in the browser.",
  },
  {
    speaker: "james-okonkwo",
    track: "tooling",
    day: 1,
    start: "12:00",
    end: "13:00",
    room: "Room C",
    abstract:
      "Build caching, dependency boundaries and release automation that kept a 500-package monorepo fast for a team of hundreds.",
  },
  {
    speaker: "mei-lin-zhang",
    track: "frontend",
    day: 1,
    start: "13:00",
    end: "14:00",
    room: "Room A",
    abstract:
      "What changed when a large product moved its components from viewport breakpoints to container queries.",
  },
  {
    speaker: "priya-sharma",
    track: "accessibility",
    day: 1,
    start: "15:00",
    end: "16:00",
    room: "Room B",
    abstract:
      "Common ARIA mistakes found in real audits, why they break assistive technology, and the native HTML that usually does the job better.",
  },
  {
    speaker: "kwame-asante",
    track: "tooling",
    day: 1,
    start: "16:00",
    end: "17:00",
    room: "Room C",
    abstract:
      "A measured look at where AI assistants genuinely speed up frontend work and where they still get in the way.",
  },
  {
    speaker: "oliver-chang",
    track: "keynote",
    day: 2,
    start: "9:00",
    end: "10:00",
    room: "Room A",
    abstract:
      "The day two keynote. What changes when a page has to load quickly for a billion people on every kind of device and network.",
  },
  {
    speaker: "sarah-lindstrom",
    track: "frontend",
    day: 2,
    start: "10:00",
    end: "11:00",
    room: "Room A",
    abstract:
      "One source of truth for color, type and spacing, compiled to CSS, iOS and Android with types that catch drift before it ships.",
  },
  {
    speaker: "fatima-al-rashid",
    track: "accessibility",
    day: 2,
    start: "11:00",
    end: "12:00",
    room: "Room B",
    abstract:
      "Captions, transcripts and controls that work for everyone, with patterns you can take back to your own players.",
  },
  {
    speaker: "aisha-patel",
    track: "performance",
    day: 2,
    start: "12:00",
    end: "13:00",
    room: "Room B",
    abstract:
      "Finding the sources of layout shift in a large app and the reserved space, font and image fixes that keep it at zero.",
  },
  {
    speaker: "naomi-tanaka",
    track: "accessibility",
    day: 2,
    start: "14:00",
    end: "15:00",
    room: "Room B",
    abstract:
      "Testing a component library with real screen reader users, and the fixes that made the biggest difference.",
  },
  {
    speaker: "marcus-chen",
    track: "frontend",
    day: 2,
    start: "15:00",
    end: "16:00",
    room: "Room A",
    abstract:
      "Where the server and client boundary belongs, how data flows across it, and the mistakes that quietly ship extra JavaScript.",
  },
  {
    speaker: "lucas-moreau",
    track: "tooling",
    day: 2,
    start: "16:00",
    end: "17:00",
    room: "Room C",
    abstract:
      "Layout overlays, cascade layers and container query tooling you probably have not opened yet.",
  },
  {
    speaker: "bertram-gilfoyle",
    track: "keynote",
    day: 3,
    start: "9:00",
    end: "10:00",
    room: "Room A",
    abstract:
      "The day three keynote. What happened when a team let a model write production code, and the guardrails they wish they had built first.",
  },
  {
    speaker: "julia-petrov",
    track: "frontend",
    day: 3,
    start: "10:00",
    end: "11:00",
    room: "Room A",
    abstract:
      "Streaming HTML from a plain runtime to learn what frameworks actually do for you, and what you can do without them.",
  },
  {
    speaker: "devon-park",
    track: "performance",
    day: 3,
    start: "11:00",
    end: "12:00",
    room: "Room B",
    abstract:
      "Sending the shell first and streaming the rest, so pages feel instant even when the data is slow.",
  },
  {
    speaker: "tom-kowalski",
    track: "tooling",
    day: 3,
    start: "12:00",
    end: "13:00",
    room: "Room C",
    abstract:
      "Running a full preview environment for every pull request without the cloud bill running away from you.",
  },
  {
    speaker: "hannah-bergstrom",
    track: "accessibility",
    day: 3,
    start: "14:00",
    end: "15:00",
    room: "Room B",
    abstract:
      "Labels, errors and focus handling for checkout forms that everyone can complete, with the conversion numbers to back it up.",
  },
  {
    speaker: "carlos-rivera",
    track: "tooling",
    day: 3,
    start: "15:00",
    end: "16:00",
    room: "Room C",
    abstract:
      "A tour of a modern bundler's internals: the module graph, incremental caching and how tree shaking really decides what stays.",
  },
];

export const sessions: Session[] = slots.map(({ speaker: slug, ...slot }) => {
  const speaker = speakers.find((s) => s.slug === slug);
  if (!speaker) throw new Error(`Unknown speaker: ${slug}`);
  return {
    ...slot,
    id: slugify(speaker.talk),
    title: speaker.talk,
    speakerSlug: speaker.slug,
    speaker: speaker.name,
    company: speaker.company,
  };
});

const highlightIds = [
  "video-compression-for-the-web-the-middle-out-approach",
  "css-container-queries-in-production",
  "designing-accessible-audio-experiences",
  "deploy-preview-environments-that-scale",
];

export const scheduleHighlights = sessions.filter((session) =>
  highlightIds.includes(session.id),
);

export const venue = {
  name: "Pier 70",
  city: "San Francisco, CA",
  dates: "Nov 15-17, 2026",
};
