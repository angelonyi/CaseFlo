---
Trigger: glob
Glob: "**/*.{tsx,jsx}"
---

*   **Rule:** Run the TypeScript compiler in strict mode before you commit code.
*   **Reason:** Catching type mismatches early prevents runtime crashes.
*   **Rule:** Ensure all code passes the standard ESLint configuration with zero warnings.
*   **Reason:** Consistent code style maintains codebase quality.
*   **Rule:** Execute the full test suite and ensure all tests pass before you complete a task.
*   **Reason:** Broken tests indicate regressions.