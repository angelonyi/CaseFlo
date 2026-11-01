---
Trigger: Always on
---

*   **Rule:** Run `npm run typecheck`, `npm run lint`, and `npm run test` in exactly this order before claiming a change works.
*   **Reason:** A change that typechecks but fails lint or tests is incomplete.
*   **Rule:** Paste the exact output of the test commands into the chat. A summary of the output is not allowed.
*   **Reason:** AI summaries often hallucinate successful test runs.
*   **Rule:** Run `npm run build` before considering any pull request ready.
*   **Reason:** The development server tolerates errors that the production build strictly rejects.
*   **Rule:** Never run `prisma migrate dev`, `prisma migrate deploy`, `prisma migrate reset`, `prisma db push`, `prisma db seed`, or `prisma db execute`.
*   **Reason:** A migration against the wrong connection string destroys real client data.
*   **Rule:** You are permitted to run `npx prisma generate` strictly after making modifications to `schema.prisma`.
*   **Reason:** This updates the local Prisma Client types without altering the actual database schema or live data.
*   **Rule:** Never write or run any script or direct database client (`psql`, `pg_dump`) that opens a database connection and writes to it.
*   **Reason:** You lack permission to alter live data directly.
*   **Rule:** Ask for explicit user permission before you install any new package.
*   **Reason:** Unvetted packages introduce security vulnerabilities.