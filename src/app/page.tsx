import Link from "next/link";
import { Logo } from "@/components/logo";
import {
  ArrowRightIcon,
  CalendarIcon,
  CheckIcon,
  PinIcon,
  Squiggle,
} from "@/components/icons";

const container = "mx-auto w-full max-w-[1440px] px-6 lg:px-16";

const navLinks = [
  { label: "How it works", href: "#features" },
  { label: "Features", href: "#features" },
  { label: "Stories", href: "#stories" },
  { label: "Pricing", href: "#cta" },
];

const marqueeItems = [
  "Brunch",
  "Board games",
  "Beach day",
  "Karaoke",
  "Hike",
  "Movie night",
  "Taco Tuesday",
];

const features = [
  {
    step: "01",
    title: "Find the day",
    body: "Everyone taps the dates they’re free. We circle the winner.",
    Icon: CalendarIcon,
    card: "bg-chrome text-ink",
    iconWrap: "bg-ink text-chrome",
    offset: "",
  },
  {
    step: "02",
    title: "Pick the spot",
    body: "Drop ideas, vote with hearts, and settle it without a coin flip.",
    Icon: PinIcon,
    card: "bg-cobalt text-white",
    iconWrap: "bg-white text-cobalt",
    offset: "lg:translate-y-16",
  },
  {
    step: "03",
    title: "Split the to-dos",
    body: "Snacks, speaker, blanket — claimed in a tap, nudged if forgotten.",
    Icon: CheckIcon,
    card: "bg-sidewalk text-ink",
    iconWrap: "bg-coral text-white",
    offset: "lg:translate-y-32",
  },
];

const stats = [
  { value: "2.4M", caption: "plans made it off the group chat" },
  { value: "83%", caption: "of plans actually happen on the day" },
  { value: "11s", caption: "average time to vote on a date" },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col overflow-x-clip">
      {/* Nav */}
      <header className={`${container} flex items-center justify-between py-7`}>
        <Link href="/" aria-label="Hopscotch home">
          <Logo />
        </Link>
        <nav className="hidden md:flex gap-10 text-base font-medium">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-cobalt">
              {link.label}
            </a>
          ))}
        </nav>
        <Link
          href="/plans"
          className="rounded-full bg-ink px-[22px] py-3 text-[15px] font-semibold text-white"
        >
          Get the app
        </Link>
      </header>

      {/* Hero */}
      <section
        className={`${container} flex flex-col items-center gap-12 pt-14 pb-24 lg:flex-row lg:justify-between`}
      >
        <div className="flex w-full max-w-[720px] flex-col gap-8">
          <span className="label flex items-center gap-2 self-start rounded-full bg-sidewalk px-3.5 py-2">
            <span className="h-2 w-2 rounded-full bg-coral" />
            New · Group polls
          </span>
          <h1 className="flex flex-col font-display text-[64px] leading-[60px] font-extrabold tracking-[-0.035em] sm:text-[96px] sm:leading-[88px] xl:text-[120px] xl:leading-[108px]">
            <span>Plans that</span>
            <span>actually</span>
            <span>happen.</span>
          </h1>
          <p className="max-w-[520px] text-xl leading-[30px] text-muted">
            Hopscotch turns the endless “we should hang out” group chat into a
            real Saturday — dates, places and who’s bringing snacks.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/plans"
              className="rounded-full bg-chrome px-[30px] py-[18px] text-[17px] font-semibold"
            >
              Start a plan — it’s free
            </Link>
            <button
              type="button"
              className="rounded-full border-2 border-ink px-[26px] py-4 text-[17px] font-semibold"
            >
              Watch the 40s demo
            </button>
          </div>
        </div>

        <HeroArt />
      </section>

      {/* Marquee */}
      <div className="relative left-1/2 w-[110vw] -translate-x-1/2 -rotate-[1.5deg] overflow-hidden bg-cobalt py-7 text-white">
        <div className="flex w-max items-center gap-10 pl-10 font-display text-[44px] font-extrabold tracking-[-0.02em] whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-10">
              <span>{item}</span>
              <span className="h-[18px] w-[18px] shrink-0 rounded-full bg-chrome" />
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <section
        id="features"
        className={`${container} flex flex-col gap-16 pt-40 pb-[120px] lg:pb-[248px]`}
      >
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end lg:gap-12">
          <div className="flex flex-col gap-5">
            <span className="label text-cobalt">What it does</span>
            <h2 className="max-w-[760px] font-display text-5xl font-extrabold tracking-[-0.03em] lg:text-[72px] lg:leading-[72px]">
              Three taps from “someday” to Saturday.
            </h2>
          </div>
          <p className="max-w-[340px] text-[17px] leading-[27px] text-muted">
            No spreadsheets, no 47-message threads. Just the stuff a good friend
            would do for you if they had the time.
          </p>
        </div>

        <div className="flex flex-col items-stretch gap-6 lg:flex-row lg:items-start">
          {features.map(({ step, title, body, Icon, card, iconWrap, offset }) => (
            <article
              key={step}
              className={`flex h-[440px] flex-1 flex-col justify-between rounded-[32px] p-9 ${card} ${offset}`}
            >
              <span
                className={`flex h-[72px] w-[72px] items-center justify-center rounded-full ${iconWrap}`}
              >
                <Icon size={32} />
              </span>
              <div className="flex flex-col gap-3">
                <span className="label">{step}</span>
                <h3 className="font-display text-[40px] leading-[42px] font-extrabold tracking-[-0.02em]">
                  {title}
                </h3>
                <p className="text-[17px] leading-[26px] opacity-90">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink text-white">
        <div className={`${container} flex flex-col gap-[72px] py-[120px]`}>
          <h2 className="max-w-[640px] font-display text-[40px] leading-[46px] font-extrabold tracking-[-0.02em] lg:text-5xl lg:leading-[52px]">
            Friend groups are hanging out again. Here are the receipts.
          </h2>
          <div className="flex flex-col gap-12 md:flex-row md:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="flex flex-1 flex-col gap-3 border-t-2 border-chrome pt-7"
              >
                <span className="font-display text-[88px] leading-[84px] font-extrabold tracking-[-0.04em] text-chrome lg:text-[120px] lg:leading-[110px]">
                  {stat.value}
                </span>
                <span className="text-lg leading-[26px] text-[#C9C9D2]">
                  {stat.caption}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section
        id="stories"
        className={`${container} relative flex flex-col items-center gap-10 py-40`}
      >
        <span className="label text-cobalt">Stories</span>
        <blockquote className="max-w-[1000px] text-center font-display text-[40px] leading-[44px] font-extrabold tracking-[-0.03em] lg:text-[64px] lg:leading-[68px]">
          “We went from one hangout a year to a standing taco night. Hopscotch
          is the friend who finally books the table.”
        </blockquote>
        <div className="flex items-center gap-3.5">
          <span className="h-[52px] w-[52px] rounded-full bg-coral" />
          <div className="flex flex-col gap-0.5">
            <span className="text-[17px] font-semibold">Priya Raman</span>
            <span className="text-[15px] text-muted">
              Organizer of “Taco Tuesday Crew”, 9 friends
            </span>
          </div>
        </div>

        <span className="absolute top-[120px] left-[72px] hidden -rotate-6 rounded-[24px_24px_24px_6px] bg-chrome px-5 py-3.5 text-base font-semibold lg:block">
          i’m so in!!
        </span>
        <span className="absolute top-24 right-[140px] hidden rotate-[5deg] rounded-[24px_24px_6px_24px] bg-cobalt px-5 py-3.5 text-base font-semibold text-white lg:block">
          bringing the salsa
        </span>
        <span className="absolute right-[180px] bottom-[120px] hidden h-11 w-11 rounded-full bg-coral lg:block" />
        <span className="absolute bottom-[100px] left-[160px] hidden h-16 w-16 rounded-full border-[6px] border-cobalt lg:block" />
      </section>

      {/* Final CTA */}
      <section id="cta" className={`${container} pb-16`}>
        <div className="relative flex overflow-hidden rounded-[48px] bg-chrome px-8 py-16 lg:px-[72px] lg:py-[88px]">
          <span className="absolute -top-[120px] -right-20 h-[380px] w-[380px] rounded-full bg-coral" />
          <span className="absolute right-[260px] -bottom-[50px] h-[120px] w-[240px] rounded-full bg-cobalt" />
          <div className="relative flex flex-col gap-7">
            <h2 className="max-w-[720px] font-display text-[64px] leading-[60px] font-extrabold tracking-[-0.04em] lg:text-[96px] lg:leading-[90px]">
              This weekend’s on you.
            </h2>
            <Link
              href="/plans"
              className="flex items-center gap-3 self-start rounded-full bg-ink px-8 py-5 text-[17px] font-semibold text-white"
            >
              Start your first plan
              <ArrowRightIcon size={20} className="text-chrome" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`${container} flex flex-col items-start justify-between gap-6 pt-8 pb-12 text-[15px] text-muted md:flex-row md:items-center`}
      >
        <span className="font-display text-xl font-extrabold tracking-[-0.02em] text-ink">
          hopscotch
        </span>
        <nav className="flex gap-8">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Careers</a>
          <a href="#">Instagram</a>
        </nav>
        <span>© 2026 Hopscotch Inc.</span>
      </footer>
    </div>
  );
}

function HeroArt() {
  return (
    <div
      aria-hidden
      className="relative h-[600px] w-[540px] shrink-0 max-lg:-my-16 max-lg:scale-[0.8] max-sm:-my-[150px] max-sm:scale-[0.55]"
    >
      <span className="absolute top-10 left-[60px] h-[440px] w-[440px] rounded-full bg-chrome" />
      <span className="absolute top-[380px] left-0 h-[110px] w-[220px] rounded-full bg-cobalt" />
      <span className="absolute top-5 left-[452px] h-[72px] w-[72px] rounded-full bg-coral" />
      <Squiggle className="absolute top-[70px] left-5 text-ink" />

      <div className="absolute top-[150px] left-[130px] flex w-80 -rotate-4 flex-col gap-[18px] rounded-[28px] border-2 border-ink bg-white p-6">
        <div className="flex items-center justify-between">
          <span className="label text-muted">Sat · Oct 18</span>
          <span className="rounded-full bg-cobalt-tint px-2.5 py-1 text-[13px] font-semibold text-cobalt">
            Locked in
          </span>
        </div>
        <span className="font-display text-[32px] leading-[34px] font-extrabold tracking-[-0.02em]">
          Picnic at Dolores Park
        </span>
        <div className="flex items-center gap-2.5">
          <AvatarStack
            colors={["bg-chrome", "bg-coral", "bg-cobalt", "bg-ink"]}
            ring="border-white"
            size="h-9 w-9"
          />
          <span className="text-[15px] font-medium">6 going</span>
        </div>
      </div>

      <div className="absolute top-[420px] left-[380px] flex h-[132px] w-[132px] rotate-12 items-center justify-center rounded-full bg-coral text-white">
        <span className="text-center font-display text-[22px] leading-[22px] font-extrabold tracking-[-0.01em]">
          no more
          <br />
          “maybe”
        </span>
      </div>
    </div>
  );
}

function AvatarStack({
  colors,
  ring,
  size,
}: {
  colors: string[];
  ring: string;
  size: string;
}) {
  return (
    <span className="flex -space-x-2.5">
      {colors.map((color, i) => (
        <span key={i} className={`${size} rounded-full border-2 ${ring} ${color}`} />
      ))}
    </span>
  );
}
