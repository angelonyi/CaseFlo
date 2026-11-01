---
Trigger: Model Decision
---

* **Description:** Read before creating any new file, folder, or route or when deciding where a module belongs.

*   **Rule:** Place `import "server-only";` on the very first line of every module inside `src/server/`.
*   **Reason:** Without it, a stray import from a client component pulls the database client into the browser bundle.
*   **Rule:** Route handlers must live strictly in `src/app/api/`.
*   **Reason:** This prevents scattered API endpoints.
*   **Rule:** All deterministic answer checks live in `src/server/router/`, private record reads in `src/server/private/`, and vector queries in `src/server/retrieval/`.
*   **Reason:** This strict server boundary isolates high risk data access from UI components.
*   **Rule:** Place member routes in `src/app/`, staff routes in `src/app/staff/`, and owner routes in `src/app/owner/`.
*   **Reason:** This matches the multi tenant access model.
*   **Rule:** Place shared UI components in `src/components/` and feature specific components in `src/components/<feature>/`.
*   **Reason:** This prevents the agent from inventing new directory trees.
*   **Rule:** Place all shared utility functions strictly inside `src/lib/utils.ts`.
*   **Reason:** This prevents creating competing helper files in random locations.