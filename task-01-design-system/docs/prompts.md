# Prompts

This document contains the prompts I used while building CaseFlo for Task One. It shows how I converted my design tokens into CSS variables, built the sign-up page without the design system, and then applied the design system to the page. I have also included what happened after each prompt and any adjustments I made along the way.

## Prompt 1: JSON to CSS variables

**Prompt:**
```text
Create CSS variables for the primitive colours and make the colour roles reference those variables. The colour roles should be used directly in the UI, while primitive colours should not be used directly in UI components.

Also convert all 15 typography styles and the three shadows into CSS variables, preserving their values from the JSON file.

Use CSS variables to ensure the design system remains the single source of truth for the UI.

After generating the CSS file, list the variables created and confirm that the colour roles reference primitive variables rather than raw hex values.
```

**What happened:** It wrote a script, the role in tokens.css had no hex value copied in, for example it had `--color-primary: var(--color-role-primary)` referencing `--primitive-color-palettes-primary-primary40`, instead of hardcoding `#0044E3`. It worked perfectly.

**Did it work?** Yes.

**What I changed and why:** Nothing.

---

## Prompt 2: CaseFlo sign-up screen WITHOUT the design system

**Prompt :**
```text
Build a single HTML page for CaseFlo 
Create a simple sign-up screen. Do not use the design tokens yet.
```

**What happened:** AntiGravity built the CaseFlo sign-up screen without the design system. See `evidence/09-screen-without-system.png`.

**Did it work?** Yes.

**What I changed and why:** Nothing.

---

## Prompt 3: CaseFlo sign-up screen WITH the design system

**Goal:** Build the same sign-up screen using the design system.

**Prompt:**
```text
Read `tokens.css` 
Then build the same CaseFlo sign-up page using the design system. Use the colour, typography, and shadow variables from `tokens.css`. Do not use raw colour values in the page's CSS.
```

**What happened:** AntiGravity built the CaseFlo sign-up screen using the design system. However, the hard shadow around the login page looked too harsh. I noticed that the shadow settings I had set in Figma were not reflecting in the interface, so I gave an additional prompt to adjust the shadow. See `evidence/10-screen-with-system.png`.

**Did it work?** Yes.

**What I changed and why:** I gave an additional prompt to adjust the shadow around the login page because the original shadow looked too harsh.

---