# Scaffolding Prompt


```text
Read caseflo_prd.md, skills.md, all rule files in .agent/rules/, and the deisgn system. Treat these files as the absolute source of truth. If any files or instructions disagree, stop and ask me, do not make assumptions.

First, summarize your understanding of the architecture, security constraints, and styling rules. Then, STOP and wait for my explicit go-ahead.

Once approved, execute the foundation setup: initialize the Next.js App Router project, establish the folder structure, configure the base layout, and build a minimalistic 100vh home screen. You must use only the design system . Hard-coded values for colors, typography, or shadows are strictly forbidden.

Finally, list every file you created and state any technical assumptions you had to make to get the project running.
```

## 2. Tightened Version

```text
Read caseflo-prd-md.md, SKILLS.md, all rule files in .agents/rules/, and tokens.css. Treat these files as the single source of truth. If any files or instructions disagree, stop and ask rather than make assumptions.

Step 1: Summarize your understanding of the technical architecture, security constraints, and styling rules. State all assumptions explicitly. Then, STOP and wait for my approval. Do not write any code in this step.

Step 2: Once approved, execute only the foundation setup:
1. Initialize the Next.js App Router project with TypeScript in strict mode.
2. Establish the directory tree strictly following .agents/rules/structure.md (src/app/, src/server/, src/components/, src/lib/).
3. Place 'import "server-only";' on the first line of any server module.
4. Mount tokens.css and configure the base root layout.
5. Build only a minimal 100vh home screen using semantic design tokens (--color-*, --typography-*, --shadow-*). Hardcoded styling values are strictly forbidden. Do not build the full product.
6. List every file created and audit your output against these instructions.
```

## 3. What Changed Between Them and Why
* **Explicit Context File References**: Normalized file paths (`caseflo-prd-md.md`, `SKILLS.md`, `.agents/rules/`, `tokens.css`) to prevent path mismatches.
* **Strict Stop Enforcement**: Clarified that Step 1 is read-only and requires an explicit pause before writing any code.
* **Scope Boundary Guard**: Re-emphasized that only the foundation and minimal home screen should be built ("Not the product")
* **Architectural Rules Injected**: Explicitly referenced `.agents/rules/structure.md` and the `server-only` import requirement so the foundation layout is completely aligned with project rules from day one.

