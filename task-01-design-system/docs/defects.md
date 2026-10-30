# Defects

Real defects I encountered while building CaseFlo for Task One.

## Defect 1: Shadows looked too harsh (found and fixed)

- **File and line:** `tokens.css`, shadow variables `--shadow-soft`, `--shadow-medium`, and `--shadow-hard`.

- **What was wrong:** The shadows around the CaseFlo login page looked too harsh. The shadow settings I created in Figma were not reflecting as expected in the interface.

- **How I found it:** When I viewed the login page after applying the design system, I noticed that the shadows looked too harsh.

- **Cost in production:** Shadows that are too strong can make the login page look visually heavy and distract users from the form. This can affect the clean appearance of the interface.

- **Fix:** I asked AntiGravity to adjust the shadow values. It changed them to:
  - **Soft:** `1.5px 6px 16px 0px rgba(0, 68, 227, 0.08)`
  - **Medium:** `4px 6px 24px 0px rgba(0, 68, 227, 0.12)`
  - **Hard:** `6px 10px 20px 0px rgba(0, 68, 227, 0.16)`

