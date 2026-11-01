---
name: schema-change-handoff
description: Use when a task needs a change to a Prisma model, field, index or relation. Takes the change from an approved diff to a migration handoff for the human, then verifies and commits.
---

# Schema Change Handoff

## When to use
Use this skill when a task needs any change to `prisma/schema.prisma`.

## Procedure
1. Read `.agents/rules/schema.md` and `.agents/rules/commands.md` in full. Open the current `schema.prisma`.
2. Write the proposed change in the chat as a table. Use one row per change. Columns:
   - Model
   - Field, index or relation
   - Old definition (write "new" if none)
   - New definition (write "removed" if none)
   - The PRD requirement that needs it
   Follow `.agents/rules/schema.md` for any column the rules file requires.
3. Ask for approval and stop. Do not edit any file in this step.
4. Wait for a "yes" in the chat. If the user changes the proposal, go back to step 2 with the new version. Do not continue on silence or a partial yes.
5. Edit `schema.prisma`. Follow `.agents/rules/schema.md` for what you may edit. Make only the approved changes.
6. Paste the changed lines of `schema.prisma` into the chat. Check that each pasted change matches a row in the approved table.
7. Write the handoff note in the chat. It must contain, in this order:
   - A migration name in snake_case that describes the change.
   - The approved table from step 2.
   - For each change, one line saying whether existing rows are affected. Name the cases: a new required field with no default, a removed field, a renamed field, a changed type.
   - The human step: apply the database migration.
   - Acknowledge that once the user confirms the migration is applied, you will run `npx prisma generate`.
   Follow `.agents/rules/commands.md` for every database command. Do not run the database migration step yourself.
8. Stop. Do not run typecheck, lint, tests or build yet. Wait for the user to say the migration is applied.
9. After the user confirms the migration, run `npx prisma generate` to update the Prisma client, then run the checks in the order `.agents/rules/commands.md` gives. Paste the exact output.
10. If a check fails because of the schema change, report the failure in the chat. Do not edit `schema.prisma` again without a new approval from step 3.
11. Commit as your Git rules require. Put the schema edit and the code that depends on it in the same commit.

