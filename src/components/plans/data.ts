export type TabId = "upcoming" | "ideas" | "past";

export type Plan = {
  id: string;
  day: string;
  date: string;
  title: string;
  detail: string;
  dateBlock: string;
  liked: boolean;
};

export type Idea = {
  id: string;
  tag: string;
  title: string;
  votes: number;
  voted: boolean;
};

export type PastPlan = {
  id: string;
  when: string;
  title: string;
  attended: number;
};

export const GROUP_SIZE = 11;

export const featuredPlan = {
  when: "This Saturday · 12:30 PM",
  title: "Picnic at Dolores Park",
  detail: "Near the palm trees · Mariela’s bringing the big blanket",
  going: 6,
  maybe: 2,
};

export const initialPlans: Plan[] = [
  {
    id: "brunch",
    day: "SUN",
    date: "19",
    title: "Board game brunch",
    detail: "Sam’s place · 4 going · you’re on waffles",
    dateBlock: "bg-chrome text-ink",
    liked: true,
  },
  {
    id: "karaoke",
    day: "FRI",
    date: "24",
    title: "Karaoke at Pandora",
    detail: "Room 4 booked · 8 going · bring your ballad",
    dateBlock: "bg-coral text-white",
    liked: false,
  },
  {
    id: "hike",
    day: "SAT",
    date: "01",
    title: "Mt. Tam sunrise hike",
    detail: "Pantoll lot · 3 going · voting on time",
    dateBlock: "bg-ink text-white",
    liked: false,
  },
];

export const initialIdeas: Idea[] = [
  { id: "tacos", tag: "Leading", title: "Taco crawl in the Mission", votes: 9, voted: true },
  { id: "pottery", tag: "New", title: "Pottery class at Clay by the Bay", votes: 5, voted: false },
  { id: "movie", tag: "Suggested by Sam", title: "Outdoor movie at the Presidio", votes: 2, voted: false },
];

export const pastPlans: PastPlan[] = [
  { id: "bowling", when: "Oct 4", title: "Cosmic bowling night", attended: 7 },
  { id: "beach", when: "Sep 27", title: "Ocean Beach bonfire", attended: 10 },
  { id: "dumplings", when: "Sep 13", title: "Dumpling-making party", attended: 6 },
  { id: "trivia", when: "Aug 30", title: "Pub trivia at The Page", attended: 5 },
];

export const dateOptions = [
  { id: "sun-19", label: "Sun, Oct 19", day: "SUN", date: "19" },
  { id: "sat-25", label: "Sat, Oct 25", day: "SAT", date: "25" },
];

export const menuLinks = [
  { label: "Plans", href: "/plans" },
  { label: "Friends", href: "#" },
  { label: "Calendar", href: "#" },
  { label: "Memories", href: "#" },
  { label: "Settings", href: "#" },
];

// Rotating colors for date blocks on newly created plans
export const dateBlockColors = [
  "bg-cobalt text-white",
  "bg-chrome text-ink",
  "bg-coral text-white",
  "bg-ink text-white",
];
