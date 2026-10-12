# Hopscotch — Animation Starter

A starter project for practicing animations and interactions. It's a small
Next.js site for **Hopscotch**, a made-up weekend-plans app for friend groups,
built flat and static on purpose so you can bring it to life yourself.

[Motion](https://motion.dev) is already installed, along with
[Motion Studio](https://motion.dev/studio) as a dev dependency. No animations
have been added yet. That part is up to you.

## What's inside

| Page | Route | Good for |
| --- | --- | --- |
| Landing page | `/` | Reveal and scroll animations: a hero with layered shapes, a marquee band, staggered feature cards, count-up stats, floating testimonial bubbles |
| Plans app | `/plans` | Micro-interactions: a tab bar with a sliding indicator, a full-screen overlay menu, a "New plan" modal, plus like, vote and RSVP toggles |

Everything on the plans page already works (switching tabs, opening the menu,
creating a plan). It just changes instantly, without motion.

## Getting started

You'll need [Node.js](https://nodejs.org) 20.9 or newer and npm.

1. **Clone the repo**

   ```bash
   git clone <your-repo-url> hopscotch-animations
   cd hopscotch-animations
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the dev server**

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) for the landing page
   and [http://localhost:3000/plans](http://localhost:3000/plans) for the app.
   Pages reload automatically as you edit.

### Other scripts

| Command | What it does |
| --- | --- |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Where things live

```
src/
├── app/
│   ├── page.tsx            # Landing page (/)
│   ├── plans/page.tsx      # Plans app route (/plans)
│   ├── layout.tsx          # Fonts and root layout
│   └── globals.css         # Tailwind theme: brand colors and fonts
└── components/
    ├── logo.tsx, icons.tsx # Shared logo and SVG icons
    └── plans/
        ├── plans-app.tsx       # Page state: active tab, menu, modal, data
        ├── tab-bar.tsx         # Tabs with the sliding indicator
        ├── panels.tsx          # Upcoming / Ideas / Past tab content
        ├── overlay-menu.tsx    # Full-screen menu
        └── new-plan-modal.tsx  # "New plan" form
```

## Adding your first animation

Motion's React components live under `motion/react`. Files that use them need
`"use client"` at the top, since animations run in the browser:

```tsx
"use client";

import { motion } from "motion/react";

export function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
```

The [Motion docs](https://motion.dev/docs/react) cover layout animations,
`AnimatePresence` for things that mount and unmount (like the menu and modal),
and scroll-linked effects.

## Built with

- [Next.js 16](https://nextjs.org) (App Router) and React 19
- [Tailwind CSS v4](https://tailwindcss.com)
- [Motion](https://motion.dev) and Motion Studio
- Bricolage Grotesque and DM Sans via `next/font`
