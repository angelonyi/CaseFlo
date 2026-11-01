import "server-only";

/**
 * CaseFlo Server Module Boundary
 * Enforces 'import "server-only";' on line 1 per .agents/rules/structure.md
 */

export const serverRuntimeConfig = {
  region: "eu-west-1",
  timezone: "UTC",
} as const;

