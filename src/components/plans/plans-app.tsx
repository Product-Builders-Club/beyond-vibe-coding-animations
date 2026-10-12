"use client";

import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { Logo } from "@/components/logo";
import { BellIcon, MenuIcon, PlusIcon } from "@/components/icons";
import {
  dateBlockColors,
  initialIdeas,
  initialPlans,
  pastPlans,
  type Idea,
  type Plan,
  type TabId,
} from "./data";
import { TabBar, type TabDef } from "./tab-bar";
import { IdeasPanel, PastPanel, UpcomingPanel } from "./panels";
import { OverlayMenu } from "./overlay-menu";
import { NewPlanModal, type NewPlanInput } from "./new-plan-modal";

export function PlansApp() {
  const [tab, setTab] = useState<TabId>("upcoming");
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [plans, setPlans] = useState<Plan[]>(initialPlans);
  const [ideas, setIdeas] = useState<Idea[]>(initialIdeas);
  const [going, setGoing] = useState(true);

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const newPlanButtonRef = useRef<HTMLButtonElement>(null);

  // Return focus to the trigger when a layer closes
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);
  const closeModal = useCallback(() => {
    setModalOpen(false);
    newPlanButtonRef.current?.focus();
  }, []);

  const createPlan = ({ title, date, inviteCrew }: NewPlanInput) => {
    const plan: Plan = {
      id: `plan-${Date.now()}`,
      day: date?.day ?? "TBD",
      date: date?.date ?? "?",
      title,
      detail: [
        inviteCrew ? "Crew invited" : "Just you so far",
        "1 going",
        date ? null : "voting on a date",
      ]
        .filter(Boolean)
        .join(" · "),
      dateBlock: dateBlockColors[plans.length % dateBlockColors.length],
      liked: false,
    };
    setPlans((prev) => [...prev, plan]);
    setTab("upcoming");
    closeModal();
  };

  const saveIdea = (title: string) => {
    setIdeas((prev) => [
      ...prev,
      { id: `idea-${Date.now()}`, tag: "Your idea", title, votes: 1, voted: true },
    ]);
    setTab("ideas");
    closeModal();
  };

  const tabs: TabDef[] = [
    { id: "upcoming", label: "Upcoming", count: plans.length + 1 },
    { id: "ideas", label: "Ideas", count: ideas.length },
    { id: "past", label: "Past" },
  ];

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col">
      {/* Top bar */}
      <header className="flex items-center justify-between px-6 py-6 lg:px-14">
        <div className="flex items-center gap-5">
          <button
            ref={menuButtonRef}
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="overlay-menu"
            onClick={() => setMenuOpen(true)}
            className="flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full bg-sidewalk hover:bg-sidewalk-deep"
          >
            <MenuIcon size={22} />
          </button>
          <Link href="/" aria-label="Hopscotch home">
            <Logo size="sm" />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Notifications (1 new)"
            className="relative hidden sm:flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full bg-sidewalk hover:bg-sidewalk-deep"
          >
            <BellIcon size={22} />
            <span className="absolute top-3 right-[13px] h-2.5 w-2.5 rounded-full border-2 border-sidewalk bg-coral" />
          </button>
          <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-chrome font-display text-xl font-extrabold">
            JB
          </span>
        </div>
      </header>

      {/* Page header */}
      <div className="flex flex-col gap-6 px-6 py-8 sm:flex-row sm:items-end sm:justify-between lg:px-14">
        <div className="flex flex-col gap-6">
          <h1 className="font-display text-[56px] leading-[56px] font-extrabold tracking-[-0.035em] lg:text-[72px] lg:leading-[72px]">
            Your plans
          </h1>
          <TabBar tabs={tabs} active={tab} onChange={setTab} />
        </div>
        <button
          ref={newPlanButtonRef}
          type="button"
          aria-haspopup="dialog"
          onClick={() => setModalOpen(true)}
          className="flex cursor-pointer items-center gap-2.5 self-start rounded-full bg-chrome px-7 py-[18px] text-[17px] font-semibold sm:self-auto"
        >
          <PlusIcon size={20} />
          New plan
        </button>
      </div>

      {/* Tab panel */}
      <main
        id={`panel-${tab}`}
        role="tabpanel"
        aria-labelledby={`tab-${tab}`}
        className="flex-1 px-6 pt-4 pb-14 lg:px-14"
      >
        {tab === "upcoming" && (
          <UpcomingPanel
            plans={plans}
            going={going}
            onToggleGoing={() => setGoing((v) => !v)}
            onToggleLike={(id) =>
              setPlans((prev) =>
                prev.map((p) => (p.id === id ? { ...p, liked: !p.liked } : p)),
              )
            }
          />
        )}
        {tab === "ideas" && (
          <IdeasPanel
            ideas={ideas}
            onToggleVote={(id) =>
              setIdeas((prev) =>
                prev.map((idea) =>
                  idea.id === id
                    ? {
                        ...idea,
                        voted: !idea.voted,
                        votes: idea.votes + (idea.voted ? -1 : 1),
                      }
                    : idea,
                ),
              )
            }
          />
        )}
        {tab === "past" && <PastPanel plans={pastPlans} />}
      </main>

      <OverlayMenu open={menuOpen} onClose={closeMenu} />
      <NewPlanModal
        open={modalOpen}
        onClose={closeModal}
        onCreate={createPlan}
        onSaveIdea={saveIdea}
      />
    </div>
  );
}
