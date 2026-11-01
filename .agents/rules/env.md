---
Trigger: glob
Glob: "**/.env*"
---

*  **Glob Pattern: .env, .env.example, .env.local
*   **Rule:** Add `.env` and `.env.local` to `.gitignore` before making any commits.
*   **Reason:** Committing these files exposes production credentials.
*   **Rule:** Parse and validate all environment variables inside `src/lib/env.ts` using Zod.
*   **Reason:** This stops the app from booting with missing configurations.
*   **Rule:** Require `DATABASE_URL`, `GEMINI_API_KEY`, `FLUTTERWAVE_SECRET_KEY`, `FLUTTERWAVE_PUBLIC_KEY`, `FLUTTERWAVE_WEBHOOK_HASH`, `SESSION_SECRET`, and `STAFF_SESSION_SECRET`.
*   **Reason:** Missing these exact keys will cause silent webhook or database failures.
*   **Rule:** Update `.env.example` in the same commit whenever you add a new environment variable.
*   **Reason:** This keeps the documentation accurate for human developers.
*   **Rule:** Never hardcode a real key, placeholder key, or secret directly into the application code.
*   **Reason:** Hardcoding bypasses environment validation and risks leaking secrets.