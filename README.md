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

### Before you begin

Install these once on your computer:

- **[Node.js](https://nodejs.org)** (version 20.9 or newer). Download the
  "LTS" installer and run it. npm comes with it.
- **Git.** On a Mac, it's usually already there. If not, your Mac will offer
  to install it the first time it's needed. On Windows, install it from
  [git-scm.com](https://git-scm.com).
- **[Claude Code Desktop](https://claude.com/download)**

### Set up the project with Claude Code

1. **Create a new, empty folder** anywhere on your computer, for example
   `animations-workshop`.
2. **Open that folder in Claude Code Desktop.**
3. **Paste this prompt** and send it:

   ```text
   Clone https://github.com/Product-Builders-Club/beyond-vibe-coding-animations.git
   directly into this folder (not into a new subfolder), then install the
   dependencies with npm. When that's done, start the dev server and show
   me the site.
   ```

4. Claude will download the project, install everything and start the site.
   You'll see the landing page, and the app lives at `/plans` (for example
   [http://localhost:3000/plans](http://localhost:3000/plans)).

That's it. From here, you can ask Claude to start adding animations.

### Or set it up yourself in a terminal

If you're comfortable with the command line, run these from inside an empty
folder. The `.` at the end clones into the current folder:

```bash
git clone https://github.com/Product-Builders-Club/beyond-vibe-coding-animations.git .
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) for the landing page
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
