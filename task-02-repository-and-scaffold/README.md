# Task Two: Setting Up the Repository and Scaffold

## What this task is about
In this task, I set up the actual coding foundation for CaseFlo. CaseFlo is a web app that a law firm in Nigeria gives to its own clients. It allows clients to check case updates, download signed documents, and pay invoices.

The main user I am keeping in mind is Chidi. Chidi runs a small business and uses an affordable Android phone on a normal 3G or 4G network. He doesn't have unlimited data or a super fast phone. Because of that, my setup needs to be fast, lightweight, and very secure so his legal records never get mixed up with someone else's.

---

## Key decisions I made

### 1. Using Next.js 14 App Router
I picked Next.js 14 with the App Router because it uses Server Components by default. This means database checks and private case queries run safely on the server. The client's phone only gets the final HTML and a small bit of code. This stops sensitive law firm records from leaking into the browser.

### 2. Strict Design Tokens (Zero Hardcoded Styles)
I made sure the home screen uses the exact design tokens from `tokens.css` that we built in Task One. I did not hardcode any hex colors, pixel sizes, or shadows. Everything uses CSS variables like `var(--color-primary)` and `var(--typography-headline-large)`.

### 3. Server-Only Protection
I added `import "server-only";` at the very top of server files. If anyone ever accidentally tries to import database code or private keys into a client file, Next.js stops the build right away.

### 4. Catching Missing Setup with Zod
I created `src/lib/env.ts` with Zod to check that all environment variables (like database links and Flutterwave keys) exist. If something is missing, the app tells us immediately instead of silently failing later.

---

## How I verified it works

Before saving my work, I ran all the required commands in order. Everything passed with zero errors:

1. `npm run typecheck` – Passed with zero TypeScript errors.
2. `npm run lint` – Passed with zero ESLint warnings or errors.
3. `npm run test` – Passed cleanly.
4. `npm run build` – Successfully built the production app. The initial page download is only **87.5 kB**, well under my 100 kB target for Chidi's phone.

---

## Evidence and Documents in this folder

- [`evidence/01-agent-plan.txt`](file:///c:/Users/ANGEL%20ASHER/Desktop/CaseFlo/task-02-repository-and-scaffold/evidence/01-agent-plan.txt) – The plan I agreed on before starting the scaffold.
- [`evidence/02-files-created.txt`](file:///c:/Users/ANGEL%20ASHER/Desktop/CaseFlo/task-02-repository-and-scaffold/evidence/02-files-created.txt) – A complete list of all files created.
- [`evidence/03-server-start.txt`](file:///c:/Users/ANGEL%20ASHER/Desktop/CaseFlo/task-02-repository-and-scaffold/evidence/03-server-start.txt) – Log showing the dev server running on port 3000.
- [`evidence/04-first-load.txt`](file:///c:/Users/ANGEL%20ASHER/Desktop/CaseFlo/task-02-repository-and-scaffold/evidence/04-first-load.txt) – Real measurement of the first page request (HTTP 200).
- [`docs/scaffold-prompt.md`](file:///c:/Users/ANGEL%20ASHER/Desktop/CaseFlo/task-02-repository-and-scaffold/docs/scaffold-prompt.md) – My original prompt, the improved version, and the differences.
- [`docs/model-choices.md`](file:///c:/Users/ANGEL%20ASHER/Desktop/CaseFlo/task-02-repository-and-scaffold/docs/model-choices.md) – Plain explanations of why I chose each part of the tech stack.
- [`docs/performance-note.md`](file:///c:/Users/ANGEL%20ASHER/Desktop/CaseFlo/task-02-repository-and-scaffold/docs/performance-note.md) – How I kept the app lightweight for low-end Android phones.
- [`docs/false-success.md`](file:///c:/Users/ANGEL%20ASHER/Desktop/CaseFlo/task-02-repository-and-scaffold/docs/false-success.md) – Why silent failures are dangerous and what I did to prevent them.
- [`docs/working-tree.md`](file:///c:/Users/ANGEL%20ASHER/Desktop/CaseFlo/task-02-repository-and-scaffold/docs/working-tree.md) – A breakdown of all folders in the project.
- [`docs/information-design.md`](file:///c:/Users/ANGEL%20ASHER/Desktop/CaseFlo/task-02-repository-and-scaffold/docs/information-design.md) – How I organized the home screen for mobile users.
- [`docs/readme-test.md`](file:///c:/Users/ANGEL%20ASHER/Desktop/CaseFlo/task-02-repository-and-scaffold/docs/readme-test.md) – Step-by-step test showing anyone can run this project from scratch.
- [`docs/defects.md`](file:///c:/Users/ANGEL%20ASHER/Desktop/CaseFlo/task-02-repository-and-scaffold/docs/defects.md) – Real bugs I ran into while building this and how I fixed them.
- [`docs/interview-answers.md`](file:///c:/Users/ANGEL%20ASHER/Desktop/CaseFlo/task-02-repository-and-scaffold/docs/interview-answers.md) – Simple, direct answers to common technical questions about the setup.
