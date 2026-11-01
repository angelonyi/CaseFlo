/**
 * CaseFlo Shared Utility Functions
 * Strictly located at src/lib/utils.ts per .agents/rules/structure.md
 */

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

