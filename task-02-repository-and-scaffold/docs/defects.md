# Defects I Found and Fixed in Task Two

Here are the real problems I encountered while setting up the project and how I fixed them.

---

## Defect 1: The build crashed when trying to download Google Fonts offline
- **File and line:** `src/app/layout.tsx`, lines 2 and 5.
- **What was wrong:** I originally used Next.js's built-in font loader (`next/font/google`). When I ran `npm run build` in an offline or sandboxed environment, Next.js tried to make a network request to `fonts.googleapis.com` during the build and failed with:
  `FetchError: request to https://fonts.googleapis.com/... failed ENOTFOUND`.
- **How I found it:** I ran `npm run build` inside my testing environment and the build crashed immediately.
- **Cost in production:** If this went to production, any automated deployment (like GitHub Actions, Vercel, or a Docker build) that runs without open internet or behind a strict firewall would fail. This would block us from deploying urgent legal updates or security fixes.
- **How I fixed it:** I removed the `next/font/google` code from `layout.tsx` and moved font loading to a standard CSS `@import` inside `globals.css` with `display=swap`. Now the build runs completely offline without touching external servers.

---

## Defect 2: ESLint warned about custom font tags in the layout
- **File and line:** `src/app/layout.tsx`, line 19.
- **What was wrong:** When I tried putting standard `<link rel="stylesheet">` tags in `layout.tsx` to load Google Fonts, Next.js ESLint flagged it with a warning:
  `Warning: Custom fonts not added in pages/_document.js will only load for a single page. @next/next/no-page-custom-font`.
- **How I found it:** I ran `npm run lint` and saw the warning.
- **Cost in production:** My project rules state that all code must pass ESLint with zero warnings. If any warning slips through, strict CI pipelines will reject the code and block deployment.
- **How I fixed it:** I removed the `<link>` tag from `layout.tsx` and placed the font `@import` directly inside `globals.css`. When I ran `npm run lint` again, it passed with zero warnings and zero errors.

---

## Defect 3: The rules folder was named `.agents` but skills looked for `.agent`
- **File and line:** Root directory and `SKILLS.md` lines 16, 30, and 36.
- **What was wrong:** The rule files were stored in a folder called `.agents/rules/` (plural). But `SKILLS.md` and some automated tools were looking for `.agent/rules/` (singular). This caused file-not-found errors when running skills.
- **How I found it:** I noticed that running the schema skill tried to open files in `.agent/rules/` which did not exist as a separate folder.
- **Cost in production:** If an automated deployment tool or developer tries to run database migration checks, the script would fail to locate the safety rules, risking unvetted changes to the live database.
- **How I fixed it:** I created a folder junction connecting `.agent` to `.agents`. Now, whether a tool looks for `.agent` or `.agents`, both point to the exact same files without duplicating anything.
