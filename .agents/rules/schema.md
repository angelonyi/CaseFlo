---
Trigger: glob
Glob: "**/*.prisma"
---

*   **Rule:** Edit only the `schema.prisma` file when you need to change the database.
*   **Reason:** The system bans agents from running live database migrations to stop data loss.
*   **Rule:** Never add, rename, or remove a model, field, or index without user approval.
*   **Reason:** Unapproved schema changes cause silent failures.
*   **Rule:** Add a `firmId` foreign key to every model related to a law firm.
*   **Reason:** This enforces strict multi-tenant data isolation.