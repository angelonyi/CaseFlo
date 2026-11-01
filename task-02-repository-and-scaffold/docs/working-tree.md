# CaseFlo Folder and File Structure

Here is how the project is organized and what each part does.

```text
CaseFlo/
├── .agent/                             # Shortcut to .agents so tools always find the rules
├── .agents/                            # The assessment rules and guidelines
│   ├── rules/                          # Detailed rules for security, auth, database, etc.
│   │   ├── auth.md                     # Rules for cookies and 6-digit PIN login
│   │   ├── ci.md                       # Rules for TypeScript and lint checks
│   │   ├── client.md                   # Rules for server vs client components
│   │   ├── commands.md                 # Order to run checks (typecheck -> lint -> test)
│   │   ├── data access.md              # Keeping customer records private
│   │   ├── env.md                      # Rules for secret environment variables
│   │   ├── git.md                      # Rules for clean git commits
│   │   ├── payment.md                  # Whole kobo storage and Flutterwave rules
│   │   ├── retrieval.md                # Policy Q&A similarity threshold (0.75)
│   │   ├── schema.md                   # Rules for changing schema.prisma
│   │   ├── security.md                 # Rules against logging PINs or secrets
│   │   ├── storage.md                  # S3 document download rules (15-min limit)
│   │   ├── structure.md                # Where new files and routes belong
│   │   └── testing.md                  # Test file location and mocking rules
│   └── skills/                         # Skills for modifying database schema
│       └── schema-change-handoff/      # Safe handoff process for Prisma migrations
│           └── SKILL.md
├── src/
│   ├── app/                            # The pages and routes of the web app
│   │   ├── api/                        # Reserved only for incoming webhooks (Flutterwave)
│   │   ├── staff/                      # Screens for law firm staff
│   │   ├── owner/                      # Screens for the law firm owner (approvals)
│   │   ├── globals.css                 # Global styling reset and tokens.css import
│   │   ├── layout.tsx                  # Base layout for all pages
│   │   ├── page.module.css             # Scoped styles for the home page using tokens
│   │   └── page.tsx                    # Minimalist home screen for Chidi
│   ├── lib/
│   │   ├── env.ts                      # Makes sure all required secret keys exist
│   │   └── utils.ts                    # Shared helper functions (like combining class names)
│   └── server/                         # Code that is only allowed to run on the server
│       ├── index.ts                    # Server root boundary with 'import "server-only"'
│       ├── private/                    # Code that reads private case records by customer ID
│       ├── retrieval/                  # Policy search using pgvector
│       └── router/                     # Rules for checking policy answers
├── task-01-design-system/              # All documentation and evidence for Task One
├── task-02-repository-and-scaffold/    # All documentation and evidence for Task Two
│   ├── docs/
│   │   ├── defects.md                  # Real bugs I found and how I fixed them
│   │   ├── false-success.md            # Why silent failures hurt and how I tested breakages
│   │   ├── information-design.md       # How the mobile home screen is laid out
│   │   ├── interview-answers.md        # Plain English answers to technical viva questions
│   │   ├── model-choices.md            # Why I chose Next.js, TypeScript, and CSS Modules
│   │   ├── performance-note.md         # Keeping page size at 87.5 kB for budget phones
│   │   ├── readme-test.md              # Steps proving anyone can run this code cleanly
│   │   ├── scaffold-prompt.md          # My prompt and how I improved it
│   │   └── working-tree.md             # This document
│   ├── evidence/
│   │   ├── 01-agent-plan.txt           # The agreed plan before writing code
│   │   ├── 02-files-created.txt        # Full list of files created
│   │   ├── 03-server-start.txt         # Dev server start log (port 3000, PID 7584)
│   │   └── 04-first-load.txt           # Measurement of first page load (HTTP 200)
│   └── README.md                       # Overview of Task Two
├── task-03-client-validation/          # Empty placeholder for Task Three
├── task-04-server-security/            # Empty placeholder for Task Four
├── task-05-sessions-compliance-defence/# Empty placeholder for Task Five
├── .env.example                        # Template showing what secret keys are needed
├── .eslintrc.json                      # ESLint setup to catch code mistakes
├── .gitignore                          # Files git should ignore (build files, secrets)
├── AGENTS.md                           # Main project rules that I must always follow
├── package.json                        # The npm packages and project scripts
├── tokens.css                          # Single source of truth for all colors and fonts
└── tsconfig.json                       # Strict TypeScript settings
```
