# Margaret Amshi Foundation website

Static React site (React, Vite, TypeScript, Tailwind CSS, React Router, Framer Motion, Lucide).
No backend, database, authentication or CMS. Deploys to Cloudflare Pages as plain static files.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/
npm run preview    # test the production build
npm run typecheck  # optional: full TypeScript check
```
Node 20 or newer (`.nvmrc` included).

## What is built in
- **Installable app (PWA):** manifest, service worker (offline app shell), install suggestion, update toast, app shortcuts (Donate, Programs, Volunteer, Contact), maskable icons.
- **Search engine setup:** page titles and descriptions, canonical links, Open Graph and Twitter cards, structured data (Organization, WebSite, LocalBusiness, ContactPage, Breadcrumbs, FAQ, Course, Event, BlogPosting, Article), `sitemap.xml` and `robots.txt`.
- **Accessibility:** skip link, keyboard-friendly menus, labelled forms, visible focus, reduced-motion support.
- **Speed:** every page is code-split, images load lazily, pages are prefetched when a link is hovered.

## Environment variables
Copy `.env.example` to `.env`.

| Variable | Purpose |
|---|---|
| `VITE_PAYSTACK_PUBLIC_KEY` | Paystack PUBLIC key (`pk_test_...` while testing, `pk_live_...` for the live site) |
| `VITE_SITE_URL` | Final site address, used for canonical links and sharing |

**Never put a Paystack secret key (`sk_...`) in this project.** Online payments only need the public key.

## Sitemap and robots.txt
`npm run build` regenerates `public/sitemap.xml` and `public/robots.txt` automatically from your routes and content, using `VITE_SITE_URL`. Run `npm run sitemap` to refresh them by hand.
After deploying, submit `https://your-domain/sitemap.xml` in Google Search Console.

## Installable app (PWA)
Icons are in `public/icons/` and the install-screen images in `public/screenshots/`. The screenshots are simple mock-ups: replace them with real screenshots of the finished site
(`home-wide.png` 1280x720 and `home-narrow.png` 750x1334) using the same file names.
The service worker only runs on the built site (`npm run build` then `npm run preview`), not in `npm run dev`.
Payments (Paystack), analytics, maps and WhatsApp links are never cached.

## Deploy to Cloudflare Pages
1. Push this folder to GitHub.
2. Cloudflare dashboard > Workers & Pages > Create > Pages > Connect to Git.
3. Build command `npm run build`, output directory `dist`, add the two environment variables above.
4. `public/_redirects` handles page refreshes, `public/_headers` sets security headers and caching.
5. Add your custom domain, then verify Google Search Console with the DNS TXT record.

## Where to edit things
| What | File |
|---|---|
| Phones, email, address, social links, bank details, map | `src/config/site.ts` |
| Paystack key, minimum amount, presets, funds | `src/config/paystack.ts` |
| Menu and dropdowns | `src/content/navigation.ts` |
| Home page numbers | `src/content/stats.ts` |
| Mission, vision, values | `src/content/values.ts` |
| Stories, news, events, FAQs | `src/content/stories.ts`, `news.ts`, `events.ts`, `faqs.ts` |
| Annual reports, financial figures, project updates | `src/content/reports.ts`, `financials.ts`, `projects.ts` |
| Job openings | `src/content/careers.ts` |
| Application notices and downloadable forms | `src/content/notices.ts`, `src/content/downloads.ts` (PDF files in `public/downloads/`) |
| Privacy Policy and Terms text | `src/content/legal.ts` |
| Courses | `src/content/courses.ts` |
| The 14 program pages (text, eligibility, dates, FAQs) | `src/content/programDetails.ts` |
| Fundraise, Volunteer, Member, Refer, Partner pages | `src/content/involve.ts` |
| Leaders, board, team, staff, advisers, volunteers | `src/content/people.ts` |
| Founder page (story, achievements, quote, message) | `src/content/founder.ts` (photos and gallery in `src/content/images.ts`) |
| Mission, vision, values and what they mean in practice | `src/content/values.ts` |
| Every form (fields and WhatsApp message) | `src/content/forms.ts` |

## Changing the photos
Every photo on the site is listed in **`src/content/images.ts`** and currently uses one placeholder (`public/images/placeholder.webp`).
1. Put your photo in `public/images/` (for example `hero.jpg`).
2. In `src/content/images.ts`, change that slot's `src` to `'/images/hero.jpg'` and update its `alt` text.
3. Use `position` (for example `'center top'`) to keep faces in view when a photo is cropped.

Slots: hero and page banners, founder portrait and 9-photo gallery (edit each caption and category), people photos (add them under `people` using each person's slug), course photos, about, program cards (14), impact stories (4), news (3), events (3), gallery (6), ways to give (4) and side images.
Keep files under about 250 KB (WebP or compressed JPG) so the site stays fast, and only publish photos you have permission to use, with consent for people and children.

## Downloadable forms and reports
The PDFs in `public/downloads/` are simple branded forms generated for you. To use your official forms, replace the files and keep the same file names (or update `src/content/downloads.ts`).
Annual reports show a "Request a copy" button until you add a PDF: put the file in `public/downloads/` and set its `file` in `src/content/reports.ts`.

## How the forms work
Every form validates in the browser, then opens WhatsApp (`wa.me`) to the number in `site.ts` with all answers written into the message.
The visitor taps Send. Nothing is stored on the website. `src/services/forms.ts` is the single place to add a backend or form service later.

## How donations work
`/donate` opens Paystack's popup (card, bank transfer, USSD) using the public key, plus a bank transfer tab with copy button and WhatsApp forms.
Paystack's dashboard is your record of payments. Server-side verification, receipts and donor records are a later phase (see comments in `DonationForm.tsx`).

## Before going live
- Review all invented content (names, numbers, stories, courses, dates) and replace it with real details.
- Confirm the bank account number and phone numbers.
- Switch Paystack to your live public key in Cloudflare.
