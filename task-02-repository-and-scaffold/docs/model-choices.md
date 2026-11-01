# Why I Chose These Tools for CaseFlo

Here is why I picked each part of the tech stack and what would go wrong without it.

---

## 1. Next.js 14 with App Router
- **What I chose:** Next.js 14 using the App Router.
- **Why I chose it:** Next.js runs code on the server by default. For a law firm web app, this is very important. Client cases, invoices, and legal documents should stay on the server. Only the records meant for the logged-in client ever get sent to their phone.
- **What breaks without it:** With older React setups, developers often download all data to the browser and filter it there. If someone inspects the network tab, they could see another client's private legal information.

---

## 2. Strict TypeScript
- **What I chose:** TypeScript with strict mode turned on.
- **Why I chose it:** CaseFlo deals with real money (in kobo) and private legal updates. If a variable is missing or typed incorrectly, it could lead to billing mistakes or broken screens. Strict TypeScript forces me to handle every empty or missing value before running the code.
- **What breaks without it:** The app could easily crash with errors like "cannot read property of undefined", or accidentally treat an amount in Naira when the database expects kobo.

---

## 3. CSS Modules with `tokens.css`
- **What I chose:** Plain CSS Modules connected to the design tokens I created in Task One.
- **Why I chose it:** This keeps styles organized per page while forcing every color, font size, and shadow to come straight from `tokens.css`. It stops me or anyone else from randomly typing in arbitrary hex codes like `#0044E3` or guess-and-checking font sizes.
- **What breaks without it:** Over time, the app starts looking messy with inconsistent blues, mismatched button heights, and harsh shadows.

---

## 4. `server-only` Protection
- **What I chose:** Adding `import "server-only";` at the top of server files.
- **Why I chose it:** This is a safety lock. If a developer accidentally imports database code or private keys into a file that runs on the user's phone, Next.js will stop the build immediately.
- **What breaks without it:** Database connection strings, private API keys, or full database tables could accidentally be included in the public JavaScript file that anyone can inspect.

---

## 5. Zod for Environment Checks
- **What I chose:** Validating environment variables using Zod in `src/lib/env.ts`.
- **Why I chose it:** It checks that everything the app needs—like the database URL, Gemini key, and payment secrets—is actually set up. If a key is missing, it fails right away with a clear message telling me what to fix.
- **What breaks without it:** The app might seem to work at first, but crash unexpectedly when a client tries to make a payment or view a document.
