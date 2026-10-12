import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 24, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export const CalendarIcon = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={2.4}>
    <rect x="3" y="5" width="18" height="16" rx="3" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
);

export const PinIcon = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={2.4}>
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={p.strokeWidth ?? 3.2}>
    <path d="M5 12l4.5 4.5L19 7" />
  </svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={2.6}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const PlusIcon = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={2.8}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const CloseIcon = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={2.6}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={2.4}>
    <path d="M4 8h16M4 16h10" />
  </svg>
);

export const BellIcon = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={2.2}>
    <path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z" />
    <path d="M10 20.5a2 2 0 0 0 4 0" />
  </svg>
);

export const HeartIcon = ({
  filled,
  ...p
}: IconProps & { filled?: boolean }) => (
  <svg
    {...base(p)}
    strokeWidth={2}
    fill={filled ? "currentColor" : "none"}
  >
    <path d="M12 20s-7.5-4.6-7.5-10A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7.5 3c0 5.4-7.5 10-7.5 10z" />
  </svg>
);

export const Squiggle = (p: SVGProps<SVGSVGElement>) => (
  <svg width="120" height="40" viewBox="0 0 120 40" fill="none" aria-hidden {...p}>
    <path
      d="M4 20 C 16 4, 28 4, 40 20 S 64 36, 76 20 S 100 4, 116 20"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
);
