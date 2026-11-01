# Performance Note: Making Sure CaseFlo Runs Fast on Chidi's Phone

## Who I am building this for
I am keeping Chidi in mind throughout this build. Chidi is a client of a small law firm in Nigeria. He uses an affordable Android phone (like an Infinix or Tecno Spark with 2GB or 3GB of RAM) and browses on mobile data that can be slow or spotty. 

If a website sends too much JavaScript, his phone will freeze up while trying to process it. If it downloads heavy files, it wastes his data and takes too long to load.

## Real numbers from my build
When I ran `npm run build`, Next.js showed me the exact size of the files being sent to the browser:

- **Shared code for the whole site:** 87.1 kB
- **Home page code:** 382 bytes
- **Total JavaScript downloaded on first visit:** **87.5 kB**

## Why these numbers matter

1. **Staying under the 100 kB limit:**
   I set a goal to keep the initial download under 100 kB. Because the total size is 87.5 kB, Chidi's phone doesn't have to struggle. It parses the file in a fraction of a second and renders the screen right away.

2. **Doing the heavy lifting on the server:**
   I kept the home page as a Server Component. That means the server does the work of assembling the page, and the phone only receives clean HTML and CSS. There is no heavy JavaScript framework running inside Chidi's browser just to show a login screen.

3. **Loading fonts without breaking the build:**
   At first, using Next.js automatic font download caused the build to freeze whenever there was no direct internet connection. I fixed this by loading the DM Sans font through standard CSS in `globals.css` using `display=swap`. This lets the browser show regular text immediately, then neatly swaps to DM Sans once loaded so Chidi isn't left staring at a blank screen.

4. **No extra styling libraries:**
   Instead of using bulky CSS-in-JS libraries that slow down mobile browsers, I used standard CSS Modules. The browser reads the styles natively and applies them with zero lag.
