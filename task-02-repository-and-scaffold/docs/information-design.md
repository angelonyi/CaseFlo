# How I Designed the Home Screen for Chidi

## Who is looking at this screen?
The person using this screen is Chidi. He is a client of a law firm. He is opening this link on his Android phone, probably while he is busy at work or dealing with his business. 

He didn't come here to browse around. He came with one specific goal in mind: either to see if the lawyer uploaded an update on his case, download a signed agreement, or pay an invoice.

He doesn't want to see complicated menus, pop-ups, or legal jargon. He needs to know immediately:
1. Is this my law firm's web app?
2. Where do I click to sign in?
3. Are my records safe?

---

## Screen layout on a mobile phone

Here is how the elements appear from top to bottom on a phone screen:

```text
+------------------------------------------+
|                                          |
|                [ CF ]                    | <- 1. CaseFlo badge (Royal Blue, 52x52px)
|                                          |
|               CaseFlo                    | <- 2. Clear title in DM Sans
|                                          |
|     Law firm web app. Check case         | <- 3. One sentence explaining what
|    updates, read approved documents,     |    this app does
|         and pay fees seamlessly.         |
|                                          |
|   +----------------------------------+   |
|   |         Client Sign In           |   | <- 4. Big primary button (easy to tap)
|   +----------------------------------+   |
|                                          |
|   +----------------------------------+   |
|   |   Law Firm Staff & Owner Login   |   | <- 5. Outline button for staff
|   +----------------------------------+   |
|                                          |
|   +----------------------------------+   |
|   | [!] Private & Confidential       |   | <- 6. Clear trust notice
|   | Records isolated by session      |   |
|   +----------------------------------+   |
|                                          |
|   (c) 2026 CaseFlo. Multi-tenant web app | <- 7. Clean footer
+------------------------------------------+
```

---

## Why I arranged it this way

1. **The blue brand badge at the top:**
   The first thing Chidi sees is the blue badge with the white "CF" monogram. This tells him immediately that he opened the right page and that it looks like a legitimate service.

2. **One simple title and tagline:**
   I kept the text very short. It plainly says what CaseFlo does: check case updates, read approved documents, and pay fees.

3. **Big, easy-to-tap buttons (48px high):**
   People use phones with their thumbs while walking or holding things. If buttons are too small, they miss them or tap the wrong thing. I made both buttons 48px high, which is larger than the minimum accessibility standard of 44px.

4. **Clear difference between Client and Staff:**
   Chidi is a client, so the "Client Sign In" button is filled with solid Royal Blue (`var(--color-primary)`). It stands out immediately. The staff and owner login is just a border outline so clients don't get confused and click the wrong button.

5. **A privacy reassurance card:**
   Clients are naturally protective of their legal matters. Having a simple note at the bottom confirming that case records are kept private and isolated gives them peace of mind.

6. **Fitting neatly on one screen (100vh):**
   On a mobile phone, Chidi shouldn't have to scroll up and down just to find the login button. The entire card is centered and contained within the height of the screen.
