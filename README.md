# Wooblitz — marketing site

Marketing site for **Wooblitz**, an AI-native commerce platform where the
storefront, back office, support and lifecycle tools all share the same data.

**Status: closed beta.** The page says so in the announcement bar, in the hero
badge, in the FAQ, in pricing, and in the access form. Access is invited.

## Run it

```bash
npm install
npm run dev      # http://localhost:3001
```

Production build:

```bash
npm run build
npm start        # http://localhost:3000
```

## Routes

| Route | What |
| --- | --- |
| `/` | The landing page — the whole marketing site |
| `/terms` | Terms of Service |
| `/privacy` | Privacy Policy |

## How the page is built

The page is a composition of vendored shadcnspace blocks — **the layout is the
blocks**. `app/page.tsx` only orders them:

| Order | Block | Section |
| --- | --- | --- |
| — | `announcement-bar-03` | Closed-beta notice + "Request access" |
| — | `navbar-04` | Sticky nav, Platform mega-menu, anchor links |
| 1 | `hero-18` | `#hero` — headline + 4 tabs, one per product surface |
| 2 | `feature-24` | `#features` — two rows on branded gradient panels |
| 3 | `bento-grid-02` | `#workspace` — multi-store story + dashboard capture |
| 4 | `pricing-09` | `#pricing` — Indie $0 / Studio $99 |
| 5 | `faq-04` | `#faq` — five questions about the platform |
| 6 | `contact-06` | `#contact` — closed-beta access request |
| — | `footer-07` | Platform / Resources / Legal + LinkedIn |

## House rules

Two things that are easy to break by accident:

1. **Never name the stack.** No Medusa, Next.js, Stripe, Cloudflare, Mastra,
   PostgreSQL, Better Auth, Resend, RLS, or vendor logos. Also no "multi-tenant"
   or "headless" — the site speaks merchant language, not developer language.
   The copy is written to be judged on the product, not the implementation.

2. **Every accent uses `--primary` (`#ff4801`).** The template shipped with blue
   and amber accents and they have all been replaced. Don't reintroduce a
   literal `blue-500` or a non-orange hex gradient.

The contact form has **no backend** — it composes a `mailto:` to
`hello@wooblitz.com`. The file-attachment control is decorative and transmits
nothing.

`AGENTS.md` has the full editing rules, the block-by-block map, and the
screenshot placement table.

## Images

Every image is either the brand mark or a real capture from a live founding
store (`public/screenshots/`). No stock photography, no placeholder content, no
vendor imagery.

## Stack

Next.js 16.2.6 (Turbopack) · React 19 · Tailwind CSS v4 · shadcn/ui (base-ui
variant) · motion · lucide-react · next-themes

## Before calling a change done

```bash
npm run typecheck
npm run lint
npm run build
```

Then fetch the live HTML and confirm the change shipped.