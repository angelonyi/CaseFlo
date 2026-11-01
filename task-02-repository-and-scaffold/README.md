# Task 2: Repository Setup and Scaffold

## What this task is
I set up the project foundation and built a basic home screen for CaseFlo, a web app Nigerian law firms give their clients to check case updates, read documents, and pay fees.

The main client using this is Chidi, who uses an Android phone on a mobile connection. My focus here was keeping the setup small, fast to load, and making sure legal records stay strictly on the server.

## What I built
- A Next.js 14 project using the App Router and TypeScript.
- A single 100vh home screen styled using our Figma CSS variables from `tokens.css`.
- An environment check in `src/lib/env.ts` that stops the app if any database or payment key is missing.
- A server boundary file (`src/server/index.ts`) using `server-only` so database queries never leak into client files.

## Choices I made
- **Next.js App Router over Pages Router:** App Router runs components on the server by default. Client phones receive HTML rather than large bundles of JavaScript.
- **CSS Modules over utility frameworks:** Scoped CSS files keep styles clean without adding extra libraries, and all colors and typography link directly to variables in `tokens.css`.
- **Zod for environment variables:** If a key like `DATABASE_URL` is missing, the server stops right at the start and prints what is missing, rather than crashing in the middle of a user's payment.

## What went wrong and what I fixed
1. **Google fonts crashed offline builds:** `next/font/google` tried to connect to Google's servers during `npm run build`, which crashed in offline environments. I moved font loading to a CSS `@import` in `globals.css` with `display=swap`, so builds work completely offline.
2. **ESLint warned on layout links:** Putting `<link>` tags in `layout.tsx` gave an ESLint warning. Removing the tag and handling the font in CSS fixed the warning.

## How to run the checks
```bash
npm run typecheck   # checks TypeScript types
npm run lint        # checks for code style issues
npm run test        # runs tests
npm run build       # builds production package (87.5 kB total)
```

## Evidence and notes in this folder
- `evidence/01-agent-plan.txt` – My plan before writing code.
- `evidence/02-files-created.txt` – List of all project files created.
- `evidence/03-server-start.txt` – Terminal output starting the server on port 3000.
- `evidence/04-first-load.txt` – Measurement of the first page load response.
- `docs/scaffold-prompt.md` – How I structured my prompt to keep the scope small.
- `docs/model-choices.md` – Why I picked each tool in the stack.
- `docs/performance-note.md` – Bundle size breakdown for mobile devices.
- `docs/false-success.md` – Testing what happens when things break instead of assuming they worked.
- `docs/working-tree.md` – Breakdown of the project folders.
- `docs/information-design.md` – How the home screen is laid out for mobile screens.
- `docs/readme-test.md` – Verifying the project runs from a clean clone.
- `docs/defects.md` – Real bugs I ran into and how I fixed them.
- `docs/interview-answers.md` – Answers to technical interview questions about this setup.
