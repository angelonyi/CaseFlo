# My Answers to the Task Two  Interview Questions

### 1. Why did you choose Next.js 14 App Router over the older Pages Router?
I chose the App Router because it uses React Server Components by default. That means the code that talks to the database and handles private case records stays on the server. The user's phone only receives clean HTML and minimal JavaScript. In a legal app where client confidentiality is the number one priority, this stops sensitive legal data from accidentally leaking into the browser.

### 2. How does Server Component architecture protect attorney-client confidentiality?
In regular single-page React apps, developers often fetch all cases from an API and use JavaScript to filter out what the user should see in the browser. That means anyone opening Chrome DevTools could see other clients' records in the network tab. With Server Components, the filtering happens directly on the database query before anything leaves the server. Other clients' records are never sent over the internet.

### 3. Why is `import "server-only";` needed at the top of server files?
JavaScript bundlers sometimes pull in server files if someone accidentally imports them into a client component. If that happens, database passwords or private keys can end up inside the public JavaScript file that anyone can inspect. Adding `import "server-only";` turns on a compiler safety check: if a client component tries to import that file, the build stops immediately with an error.

### 4. How does keeping the JavaScript bundle at 87.5 kB help Chidi?
Chidi uses an affordable Android phone with limited memory and browses on mobile data that can be slow or spotty. Low-end phones struggle to parse heavy JavaScript files, which makes the screen freeze or lag. By keeping the total download down to 87.5 kB, his phone loads and displays the screen in less than a second without wasting his mobile data.

### 5. Why did you use Zod to check environment variables in `src/lib/env.ts`?
Environment variables are just plain text strings. If someone forgets to add the database URL or the Flutterwave webhook secret, an app might start up fine and only crash later when a real client tries to pay an invoice. Zod checks every single required key the moment the app starts. If anything is missing or misconfigured, it tells us immediately so we can fix it before users are affected.

### 6. Why do you store money amounts as whole kobo rather than Naira with decimals?
Computers have known rounding errors when doing math with decimal numbers (for example, `0.1 + 0.2` often equals `0.30000000000000004`). In legal billing, fractional rounding errors can compound over time and cause payment mismatches or failed audits. Storing money as whole numbers in kobo guarantees that calculations are always 100% exact. We only convert to Naira when displaying the price to the user.

### 7. What is the real danger of filtering client records in the browser instead of on the server?
Filtering in the browser is fake security. If an API sends ten clients' legal files to Chidi's phone and only hides nine of them with CSS or JavaScript, those nine files are still sitting inside his phone's network memory. Anyone inspecting the network traffic can read opposing counsel documents or private invoices. That is why CaseFlo filters exclusively inside the database query on the server using Chidi's verified customer ID.

### 8. How do CSS Modules and `tokens.css` keep the styling consistent?
CSS Modules stop styles from accidentally bleeding into other pages. By forcing every style to use CSS variables from `tokens.css` (like `var(--color-primary)`), I don't have to guess hex codes or font sizes. It prevents inconsistent colors and makes sure that if the law firm brand color ever changes, updating it in `tokens.css` automatically updates the entire app.

### 9. What trade-off did you make with DM Sans font loading?
Next.js tries to download Google Fonts during the build. When building offline or in a secure pipeline, that causes the build to freeze with a network error. I moved the font loading to standard CSS `@import` with `display=swap`. The trade-off is that the browser shows a clean system font for a split second before swapping to DM Sans, but in exchange, our builds run 100% reliably without depending on Google's servers.

### 10. What is a "false success" and how do deliberate breakage tests help?
A false success is when an app looks like it worked, but failed in the background—like a form saying "Saved" when the database never actually recorded the change. Deliberate breakage tests (like trying to start two servers on the same port or importing server code into the client) prove that our safety checks actively catch mistakes and warn us, rather than failing.

### 11. Why can't clients create their own accounts or reset their own PINs?
CaseFlo is an invite-only legal web app, not a public consumer app. Allowing public sign-ups or automated resets would let strangers try to probe case numbers or guess client emails. To protect confidentiality, only law firm staff can create client accounts and manually generate 6-digit PINs. This completely eliminates automated bot attacks and unauthorized account creation.

12. If you were starting this scaffold again, what is one thing you would do differently?
I would update my Windows PowerShell execution policy to RemoteSigned before starting anything. I lost momentum because my terminal blocked standard scripts like npm run typecheck. Fixing the environment permissions first makes the whole scaffolding process much smoother.
