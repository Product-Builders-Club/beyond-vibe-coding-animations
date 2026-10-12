"use client";

import {
  featuredPlan,
  GROUP_SIZE,
  type Idea,
  type PastPlan,
  type Plan,
} from "./data";
import { CheckIcon, HeartIcon } from "@/components/icons";

function AvatarStack({ colors, ring }: { colors: string[]; ring: string }) {
  return (
    <span className="flex -space-x-3">
      {colors.map((color, i) => (
        <span key={i} className={`h-10 w-10 rounded-full border-[3px] ${ring} ${color}`} />
      ))}
    </span>
  );
}

/* ---------- Upcoming ---------- */

type UpcomingPanelProps = {
  plans: Plan[];
  going: boolean;
  onToggleGoing: () => void;
  onToggleLike: (id: string) => void;
};

export function UpcomingPanel({
  plans,
  going,
  onToggleGoing,
  onToggleLike,
}: UpcomingPanelProps) {
  const goingCount = featuredPlan.going - 1 + (going ? 1 : 0);

  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <article className="relative flex min-h-[460px] flex-col justify-between gap-10 overflow-hidden rounded-[32px] bg-cobalt p-9 text-white lg:w-[620px] lg:shrink-0">
        <span
          aria-hidden
          className="absolute -top-[50px] -right-[50px] h-[120px] w-[120px] rounded-full bg-chrome sm:h-[180px] sm:w-[180px]"
        />
        <div className="relative flex flex-col gap-3.5">
          <span className="label">{featuredPlan.when}</span>
          <h2 className="max-w-[420px] font-display text-[44px] leading-[46px] font-extrabold tracking-[-0.03em] sm:text-[56px] sm:leading-[56px]">
            {featuredPlan.title}
          </h2>
          <p className="text-[17px] leading-[26px] text-cobalt-mist">
            {featuredPlan.detail}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AvatarStack
              colors={["bg-chrome", "bg-coral", "bg-white", "bg-ink"]}
              ring="border-cobalt"
            />
            <span className="text-base font-medium">
              {goingCount} going · {featuredPlan.maybe} maybe
            </span>
          </div>
          <button
            type="button"
            aria-pressed={going}
            onClick={onToggleGoing}
            className="flex cursor-pointer items-center gap-2.5 rounded-full bg-white py-3 pr-5 pl-3 text-base font-semibold text-ink"
          >
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full ${
                going ? "bg-ink text-chrome" : "border-2 border-sidewalk-deep text-transparent"
              }`}
            >
              <CheckIcon size={16} />
            </span>
            {going ? "I’m going" : "Count me in"}
          </button>
        </div>
      </article>

      <ul className="flex flex-1 flex-col gap-6">
        {plans.map((plan) => (
          <li
            key={plan.id}
            className="flex min-h-[148px] flex-1 items-center gap-6 rounded-[28px] bg-sidewalk px-7 py-6"
          >
            <span
              className={`flex h-[84px] w-[84px] shrink-0 flex-col items-center justify-center rounded-[22px] ${plan.dateBlock}`}
            >
              <span className="label">{plan.day}</span>
              <span className="font-display text-[34px] leading-[34px] font-extrabold">
                {plan.date}
              </span>
            </span>
            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
              <h3 className="font-display text-[28px] leading-[30px] font-extrabold tracking-[-0.02em]">
                {plan.title}
              </h3>
              <p className="text-base text-muted">{plan.detail}</p>
            </div>
            <button
              type="button"
              aria-pressed={plan.liked}
              aria-label={plan.liked ? `Unlike ${plan.title}` : `Like ${plan.title}`}
              onClick={() => onToggleLike(plan.id)}
              className={`flex h-[52px] w-[52px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-white ${
                plan.liked ? "text-coral" : "text-ink"
              }`}
            >
              <HeartIcon size={22} filled={plan.liked} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Ideas ---------- */

const ideaStyles = [
  { card: "bg-chrome", bar: "bg-ink", track: "bg-white" },
  { card: "bg-sidewalk", bar: "bg-cobalt", track: "bg-white" },
  { card: "bg-sidewalk", bar: "bg-coral", track: "bg-white" },
];

export function IdeasPanel({
  ideas,
  onToggleVote,
}: {
  ideas: Idea[];
  onToggleVote: (id: string) => void;
}) {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {ideas.map((idea, i) => {
        const style = ideaStyles[Math.min(i, ideaStyles.length - 1)];
        const pct = Math.round((idea.votes / GROUP_SIZE) * 100);
        return (
          <li
            key={idea.id}
            className={`flex min-h-[460px] flex-col justify-between gap-10 rounded-[32px] p-8 ${style.card}`}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="label pt-2.5">{idea.tag}</span>
              <button
                type="button"
                aria-pressed={idea.voted}
                aria-label={`${idea.voted ? "Remove vote for" : "Vote for"} ${idea.title}`}
                onClick={() => onToggleVote(idea.id)}
                className={`flex cursor-pointer items-center gap-2 rounded-full px-4 py-2.5 text-[15px] font-semibold ${
                  idea.voted ? "bg-ink text-white" : "bg-white text-ink"
                }`}
              >
                <HeartIcon
                  size={18}
                  filled={idea.voted}
                  className={idea.voted ? "text-coral" : "text-ink"}
                />
                {idea.votes}
              </button>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="font-display text-[44px] leading-[46px] font-extrabold tracking-[-0.025em]">
                {idea.title}
              </h3>
              <div
                role="progressbar"
                aria-valuenow={idea.votes}
                aria-valuemin={0}
                aria-valuemax={GROUP_SIZE}
                aria-label={`${idea.votes} of ${GROUP_SIZE} votes`}
                className={`h-3 w-full rounded-full ${style.track}`}
              >
                <div
                  className={`h-3 rounded-full ${style.bar}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="text-base">
                {idea.votes} of {GROUP_SIZE} friends are into it
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

/* ---------- Past ---------- */

export function PastPanel({ plans }: { plans: PastPlan[] }) {
  return (
    <ul className="flex flex-col">
      {plans.map((plan) => (
        <li
          key={plan.id}
          className="flex items-center gap-6 border-b-2 border-sidewalk py-6 first:pt-2"
        >
          <span className="label w-20 shrink-0 text-muted">{plan.when}</span>
          <h3 className="flex-1 font-display text-[28px] leading-[30px] font-extrabold tracking-[-0.02em] sm:text-[36px] sm:leading-[38px]">
            {plan.title}
          </h3>
          <span className="flex shrink-0 items-center gap-2 rounded-full bg-sidewalk px-4 py-2 text-[15px] font-semibold">
            <CheckIcon size={16} className="text-cobalt" />
            {plan.attended} went
          </span>
        </li>
      ))}
    </ul>
  );
}
