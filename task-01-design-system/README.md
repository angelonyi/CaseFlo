# Task 1: Design System & Proving the Agent Used It

This folder contains my work for Task 1 of the CaseFlo project. 

CaseFlo is a mobile web portal for small law firms in Nigeria. It lets clients check their case updates, read approved legal documents, and pay invoices from their phones without having to call the office.

---

## 1. What This Task Was

The goal of this task was to create a complete design system for CaseFlo, export it as design tokens, convert those tokens into CSS variables, and prove that an AI coding agent actually built the interface using my system instead of guessing or using its own generic styles.

A lot of AI-built websites look exactly the same because developers just ask an agent to "make it look modern." In this task, I made sure my design system was the single source of truth for the styling.

---

## 2. What I Built

* **Colour System:**
  * Picked a trustworthy royal blue (`#0044E3`) as the primary brand colour and pinned it as Primary 40 in Figma.
  * Generated tonal palettes so light backgrounds, dark text, and buttons come from the same palette.
  * Created semantic colour roles (`--color-primary`, `--color-surface`, `--color-outline`, etc.) so the UI uses roles rather than raw hex values.
  * Tested contrast on all text and background pairings to make sure they pass WCAG AA standards.

* **Typography System:**
  * Built a 15-style type scale based on Material Design 3 (Display, Headline, Title, Body, and Label across Large, Medium, and Small).
  * Chose **DM Sans** because legal clients need clean, clear text on cheap Android screens.
  * Calculated all line heights using the formula `font size × 1.5` so paragraphs and headings have room to breathe.

* **Shadow System:**
  * Created three shadows (Soft, Medium, Hard).
  * Used the brand blue colour (`#0044E3`) with low opacity instead of black so the shadows feel natural and clean on the screen.

* **Token Conversion Script (`build-tokens.js`):**
  * Wrote a Node.js script that reads the exported `design-tokens..json` file and outputs `tokens.css`.
  * The script defines primitive values first, then points the semantic colour roles to those primitives using `var(--primitive-...)`.

* **The Sign-up Screen (`index.html`):**
  * Built a test sign-up screen using the design tokens to prove the system works in practice.

---

## 3. Key Decisions I Made

1. **Roles, not raw colours:** UI elements never use raw hex values or primitive palette names directly. A button uses `var(--color-primary)`, not `#0044E3`. That way, if the brand colour ever changes, we change one token and the whole app updates cleanly.
2. **DM Sans over default Google Sans:** Google Sans is standard, but DM Sans has clear letter shapes that remain very legible on smaller mobile screens with low resolution.
3. **Brand-tinted shadows over black:** Black drop shadows can look dirty or heavy on white cards. Giving them a subtle blue tint ties the cards into the CaseFlo brand identity.
4. **Deliberate Regression Test:** To prove why token referencing matters, I created a temporary branch named `test/broken-token-reference`. On that branch, I broke the button rule by hardcoding `#0044E3`, and then changed the brand colour in `tokens.css` to red (`#D00000`). The rest of the page updated to red, but the button stayed blue. That proved that hardcoding breaks maintainability. I captured the broken screen, switched back to `main`, and deleted the branch without merging it.

---

## 4. What I Got Wrong and What I Fixed

1. **The Incomplete Token Export:**
   When I first exported my tokens from Figma, I forgot to check the option to include Figma variables. The exported file had typography and shadows, but was completely missing the colour palette. I noticed when the JSON file was only 16 KB instead of ~94 KB. I kept the mistake as `05-tokens-incomplete.json` and then re-exported properly as `06-tokens-complete.json`.

2. **Harsh, Solid Box Shadows:**
   When the shadows were first converted to CSS, they looked like heavy dark blue rectangles around the sign-up card. The token exporter had saved the color as `#0044e3ff` (100% solid opacity). In CSS, a shadow needs alpha transparency. I updated `build-tokens.js` and `tokens.css` to use soft `rgba(0, 68, 227, 0.08)` values, which gave the card a soft, clean lift.

3. **Generic First Screen:**
   When I first asked the agent to build the sign-up screen without design tokens, it produced a generic layout with default system fonts and arbitrary blues. Once I provided `tokens.css` and instructed it to use only my CSS variables, the page took on CaseFlo's distinct typography and colour palette.

---

## 5. Deliverables in This Folder

* `docs/business-brief.md`: The CaseFlo business summary, user persona, and requirements (under 400 words).
* `docs/colour-roles.md`: Colour token roles, descriptions, and WCAG contrast check ratios.
* `docs/type-scale.md`: The 15 typography styles, font weights, sizes, and line heights.
* `docs/shadows.md`: Soft, medium, and hard shadow specifications and justification.
* `docs/divergences.md`: Where and why I diverged from Material defaults, and where my choices would be wrong.
* `docs/prompts.md`: The verbatim prompts I used with the agent, including what failed and what changed.
* `docs/defects.md`: Real defect logged by file and line number, plus production cost.
* `docs/interview-answers.md`: Answers to all 12 interview questions (under 200 words each).
* `evidence/`: Machine-specific evidence files (raw colour search results, agent typography verification, screenshots, and git log).

