"use client";

import { useRef, type CSSProperties, type KeyboardEvent } from "react";
import type { TabId } from "./data";

export type TabDef = { id: TabId; label: string; count?: number };

type TabBarProps = {
  tabs: TabDef[];
  active: TabId;
  onChange: (id: TabId) => void;
};

export function TabBar({ tabs, active, onChange }: TabBarProps) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeIndex = tabs.findIndex((tab) => tab.id === active);

  // Arrow-key navigation per the WAI-ARIA tabs pattern
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const delta =
      event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    event.preventDefault();
    const next = (activeIndex + delta + tabs.length) % tabs.length;
    onChange(tabs[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <div
      role="tablist"
      aria-label="Plan views"
      onKeyDown={onKeyDown}
      className="relative flex items-center self-start rounded-full bg-sidewalk p-1.5 [--tab-w:104px] sm:[--tab-w:148px]"
      style={{ "--i": activeIndex } as CSSProperties}
    >
      {/* Sliding indicator: positioned by the active index */}
      <span
        aria-hidden
        className="absolute top-1.5 left-[calc(6px+var(--i)*var(--tab-w))] h-12 w-(--tab-w) rounded-full bg-ink"
      />
      {tabs.map((tab, i) => {
        const selected = tab.id === active;
        return (
          <button
            key={tab.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            id={`tab-${tab.id}`}
            role="tab"
            type="button"
            aria-selected={selected}
            aria-controls={`panel-${tab.id}`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(tab.id)}
            className={`relative flex h-12 w-(--tab-w) cursor-pointer items-center justify-center gap-2 rounded-full text-base font-semibold ${
              selected ? "text-white" : "text-muted hover:text-ink"
            }`}
          >
            {tab.label}
            {tab.count !== undefined && (
              <span
                className={`flex h-[22px] max-sm:hidden min-w-[22px] items-center justify-center rounded-full px-1.5 text-[13px] font-bold text-ink ${
                  selected ? "bg-chrome" : "bg-sidewalk-deep"
                }`}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
