# Interview Answers

## 1. How would you structure design tokens?

I would organise my design tokens into three groups: primitive, semantic, and component tokens.

Primitive tokens hold the basic values, like the colours in my palette. Semantic tokens explain what each value is used for, such as the primary colour or background colour. Component tokens hold values for specific parts of the interface, like buttons.

In CaseFlo, I made the colour roles reference the palette instead of putting raw hex values directly into the interface. This makes it easier to change colours without having to update every component manually.

## 2. When is a token change breaking?

A token change is breaking when it causes something in the interface to look or work differently from what was intended.

For example, changing a colour token could affect several buttons, headings, or other parts of the page. If the new colour makes text difficult to read, the change could create another problem.

I would check where the token is used and test the affected screens after making the change.

## 3. How would you support multiple brands and themes?

I would keep the basic colours separate from the colour roles that are used in the interface.

For example, two brands could use different primary colours while still using the same primary colour role. A light theme and a dark theme could also have different background and text colours.

This would make it easier to change the appearance without rebuilding the whole interface.

## 4. Can tokens guarantee accessible contrast?

No. Using design tokens does not automatically make an interface accessible.

Two colours in my palette might look good on their own but be difficult to read when used together.

I would check the contrast ratio between the text and its background to make sure it meets the relevant accessibility requirements.

## 5. How do you ensure that colour contrast guidelines are met within a website or application's design?

I would check the colours used for text and backgrounds and calculate their contrast ratios.

For WCAG AA, normal text generally needs a contrast ratio of at least 4.5:1, while large text needs at least 3:1.

If a colour combination does not meet the requirement, I would adjust the colours and test them again. I would record the actual contrast ratios instead of just saying the colours are accessible.

## 6. Can you discuss the differences between WCAG levels A, AA and AAA?

WCAG has three levels of accessibility.

Level A covers basic accessibility requirements. Level AA adds more requirements to make websites easier for people with disabilities to use. Level AAA has stricter requirements.

Many websites aim for Level AA because it provides a practical level of accessibility. However, meeting some accessibility requirements does not mean the entire website is accessible, so the interface still needs to be tested.

## 7. Discuss the importance of semantic HTML in the context of accessibility.

Semantic HTML means using HTML elements for their proper purpose.

For example, I should use a button for an action and a properly labelled input for a form field instead of using generic elements for everything.

This helps browsers and assistive technologies understand the page. It also makes the interface easier to navigate, especially for people who use screen readers or keyboards.

For CaseFlo, I would use the appropriate elements for the sign-up form, input fields, and buttons.

## 8. How do you handle design handoff to developers using Figma?

I would organise the Figma file so that the colours, typography, spacing, and shadows are clearly defined.

For CaseFlo, I created 15 typography styles and documented the type scale. I also documented the colour roles and shadows.

I would share these details with the developer so they know which values to use. After implementation, I would compare the page with the Figma design and correct any differences.

## 9. Why do AI-generated interfaces tend to look generic, and what specifically do you hand an agent to stop it?

AI-generated interfaces can look generic when the agent does not have enough information about the product or its design.

I would give the agent the product requirements, design tokens, typography styles, colours, and clear instructions on how to use them.

For CaseFlo, I first asked the agent to build a sign-up page without the design system. I then asked it to build the same page using the variables in `tokens.css`.

This allowed me to compare the two versions and see how the design system affected the result.

## 10. Your line height for Display Large is a specific number. Why that number and not one step either side of it? What would you lose with each?

I chose a line height of 96px for my 64px Display Large text because I used a ratio of 1.5 for my typography styles.

A smaller line height would make the heading more compact, but the lines could look crowded if the heading wraps. A larger line height would give the lines more space but could make the heading take up too much room.

I would compare the options in the actual interface to see which works best, especially when the heading takes up more than one line.

## 11. Point at one place in your own token structure that you would build differently if you started again. Say what you would do instead and what it would cost.

I would pay more attention to checking the shadow values exported from Figma before using them in CSS.

While working on CaseFlo, I noticed that the shadows on the sign-up page looked too harsh. I asked the agent to adjust them.

If I started again, I would compare the exported values with my Figma settings earlier. This would take extra time, but it could help me catch the problem before applying the shadows to the page.

## 12. Wrong-answer analysis: A candidate says, "I set up design tokens by exporting the hex values from Figma into a CSS file, so every colour in the codebase comes from one place. That makes it a single source of truth." What is missing, and what will go wrong in month four?

The problem is that putting colours in one CSS file does not mean the whole interface is using the design system correctly.

The colour roles need to reference the primitive colours, and the interface should use those roles instead of raw hex values.

For example, if the brand colour changes in month four, components that use the colour roles can update through the palette. But a component with a hardcoded hex value could keep the old colour.

This would leave different parts of the interface using different brand colours and make future changes harder.