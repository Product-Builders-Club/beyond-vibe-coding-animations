"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { CloseIcon } from "@/components/icons";
import { featuredPlan, menuLinks } from "./data";
import { useOverlay } from "./use-overlay";

type OverlayMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function OverlayMenu({ open, onClose }: OverlayMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useOverlay(open, onClose);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  if (!open) return null;

  return (
    <div
      id="overlay-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Main menu"
      className="fixed inset-0 z-40 flex flex-col overflow-x-hidden overflow-y-auto overscroll-contain bg-ink text-white"
    >
      <span
        aria-hidden
        className="absolute -top-20 -right-20 h-[220px] w-[220px] rounded-full bg-coral sm:-top-[110px] sm:-right-[110px] sm:h-[340px] sm:w-[340px]"
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-6 lg:px-14">
        <div className="flex items-center gap-5">
          <button
            ref={closeRef}
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full bg-chrome text-ink"
          >
            <CloseIcon size={22} />
          </button>
          <span className="font-display text-[22px] font-extrabold tracking-[-0.02em]">
            hopscotch
          </span>
        </div>
      </div>

      {/* mt-auto (not justify-end) bottom-aligns the links but collapses
          when space runs out, so tall content scrolls instead of clipping */}
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col gap-10 px-6 pt-6 pb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:px-14 lg:pt-10 lg:pb-16">
        <nav aria-label="Primary" className="mt-auto">

          <ul className="flex flex-col gap-1">
            {menuLinks.map((link, i) => {
              const active = i === 0;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    className={`group flex items-center gap-4 sm:gap-7 ${
                      active ? "text-chrome" : "text-white hover:text-chrome"
                    }`}
                  >
                    <span
                      className={`label w-8 shrink-0 text-[15px] sm:w-10 ${
                        active ? "text-chrome" : "text-muted-light"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {/* Scales with both width and height so all five links fit short screens */}
                    <span className="font-display text-[clamp(40px,min(13vw,10.5vh),96px)] leading-[1.08] font-extrabold tracking-[-0.04em]">
                      {link.label}
                    </span>
                    {active && (
                      <span className="h-[18px] w-[18px] rounded-full bg-chrome" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <aside className="flex w-full max-w-[340px] flex-col gap-5 pb-4">
          <div className="flex flex-col gap-2.5 rounded-[24px] bg-cobalt p-6">
            <span className="label text-cobalt-mist">Next up · in 3 days</span>
            <span className="font-display text-[28px] leading-[30px] font-extrabold tracking-[-0.02em]">
              {featuredPlan.title}
            </span>
          </div>
          <div className="flex gap-6 text-base text-muted-light">
            <a href="#" className="hover:text-white">Help</a>
            <a href="#" className="hover:text-white">Invite friends</a>
            <Link href="/" className="hover:text-white">Log out</Link>
          </div>
          <span className="hidden text-[15px] text-muted-light sm:block">
            Press Esc to close
          </span>
        </aside>
      </div>
    </div>
  );
}
