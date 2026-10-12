"use client";

import { useState, type FormEvent } from "react";
import { ArrowRightIcon, CheckIcon, CloseIcon } from "@/components/icons";
import { dateOptions } from "./data";
import { useOverlay } from "./use-overlay";

export type NewPlanInput = {
  title: string;
  /** null means "let the group vote" */
  date: (typeof dateOptions)[number] | null;
  inviteCrew: boolean;
};

type NewPlanModalProps = {
  open: boolean;
  onClose: () => void;
  onCreate: (input: NewPlanInput) => void;
  onSaveIdea: (title: string) => void;
};

export function NewPlanModal(props: NewPlanModalProps) {
  useOverlay(props.open, props.onClose);
  if (!props.open) return null;
  // Mounting fresh each time resets the form state
  return <ModalContent {...props} />;
}

const VOTE = "vote";

function ModalContent({ onClose, onCreate, onSaveIdea }: NewPlanModalProps) {
  const [title, setTitle] = useState("");
  const [dateId, setDateId] = useState<string>(dateOptions[0].id);
  const [inviteCrew, setInviteCrew] = useState(true);

  const trimmed = title.trim();

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (!trimmed) return;
    onCreate({
      title: trimmed,
      date: dateOptions.find((d) => d.id === dateId) ?? null,
      inviteCrew,
    });
  };

  const chip = (selected: boolean) =>
    `flex cursor-pointer items-center gap-2 rounded-full px-[18px] py-3 text-base font-semibold ${
      selected ? "bg-ink text-white" : "bg-sidewalk text-ink hover:bg-sidewalk-deep"
    }`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-ink/70 p-4"
      onClick={onClose}
    >
      <form
        role="dialog"
        aria-modal="true"
        aria-labelledby="new-plan-title"
        onSubmit={submit}
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-[600px] flex-col gap-7 rounded-[36px] bg-white p-7 text-ink sm:p-10"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="label text-cobalt">New plan</span>
            <h2
              id="new-plan-title"
              className="font-display text-[36px] leading-[40px] font-extrabold tracking-[-0.03em] sm:text-[44px] sm:leading-[46px]"
            >
              What are we doing?
            </h2>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-sidewalk"
          >
            <CloseIcon size={18} />
          </button>
        </div>

        <label className="flex flex-col gap-2.5">
          <span className="text-[15px] font-semibold">Plan name</span>
          <input
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Sunday bike ride to Sausalito"
            className="rounded-[18px] border-2 border-sidewalk-deep px-5 py-[18px] text-lg caret-cobalt outline-none placeholder:text-muted-light focus:border-ink"
          />
        </label>

        <fieldset className="flex flex-col gap-2.5">
          <legend className="pb-2.5 text-[15px] font-semibold">When works?</legend>
          <div role="radiogroup" className="flex flex-wrap gap-2.5">
            {dateOptions.map((option) => {
              const selected = dateId === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setDateId(option.id)}
                  className={chip(selected)}
                >
                  {selected && <CheckIcon size={16} className="text-chrome" />}
                  {option.label}
                </button>
              );
            })}
            <button
              type="button"
              role="radio"
              aria-checked={dateId === VOTE}
              onClick={() => setDateId(VOTE)}
              className={
                dateId === VOTE
                  ? chip(true)
                  : "flex cursor-pointer items-center rounded-full border-2 border-dashed border-[#C9C9D2] px-[18px] py-2.5 text-base font-semibold text-muted hover:border-ink hover:text-ink"
              }
            >
              {dateId === VOTE && <CheckIcon size={16} className="mr-2 text-chrome" />}
              + Let them vote
            </button>
          </div>
        </fieldset>

        <div className="flex items-center justify-between gap-4 rounded-[18px] bg-sidewalk px-5 py-[18px]">
          <div className="flex items-center gap-3.5">
            <span className="flex -space-x-2.5" aria-hidden>
              {["bg-chrome", "bg-coral", "bg-cobalt"].map((c) => (
                <span key={c} className={`h-9 w-9 rounded-full border-[3px] border-sidewalk ${c}`} />
              ))}
            </span>
            <span id="invite-label" className="text-base font-medium">
              Taco Tuesday Crew · 9 friends
            </span>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={inviteCrew}
            aria-labelledby="invite-label"
            onClick={() => setInviteCrew((v) => !v)}
            className={`flex h-[30px] w-[52px] shrink-0 cursor-pointer items-center rounded-full p-[3px] ${
              inviteCrew ? "justify-end bg-cobalt" : "justify-start bg-[#C9C9D2]"
            }`}
          >
            <span className="h-6 w-6 rounded-full bg-white" />
          </button>
        </div>

        <div className="flex items-center justify-between gap-4 pt-1">
          <button
            type="button"
            disabled={!trimmed}
            onClick={() => onSaveIdea(trimmed)}
            className="cursor-pointer text-base font-semibold text-muted hover:text-ink disabled:cursor-not-allowed disabled:opacity-50"
          >
            Save as idea
          </button>
          <button
            type="submit"
            disabled={!trimmed}
            className="flex cursor-pointer items-center gap-2.5 rounded-full bg-chrome px-7 py-[18px] text-[17px] font-semibold disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send to the crew
            <ArrowRightIcon size={18} />
          </button>
        </div>

        <span
          aria-hidden
          className="absolute -bottom-7 -left-8 hidden h-[84px] w-[84px] -rotate-10 items-center justify-center rounded-full bg-coral text-center font-display text-[17px] leading-[17px] font-extrabold text-white sm:flex"
        >
          <span>
            let’s
            <br />
            go!
          </span>
        </span>
      </form>
    </div>
  );
}
