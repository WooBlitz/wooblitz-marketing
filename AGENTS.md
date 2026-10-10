# Wooblitz — marketing site

Single-page marketing site for **Wooblitz**, a multi-tenant AI-native commerce
platform. It is a standalone Next.js app — it is **not** part of the main
`D:\Blitz` monorepo and shares no code with the product.

> **The product is in closed beta.** The page says this in the announcement bar
> at the top, again in the hero badge, again in the FAQ, again in the pricing
> section, and again in the access form at the bottom. Keep all of them.

## What this site is

A landing page that explains the platform to a reviewer and collects beta
access requests, plus two static legal pages.

```
/            landing page (the whole marketing site)
/terms       Terms of Service
/privacy     Privacy Policy
```

## Commands

```bash
npm run dev        # dev server on http://localhost:3001
npm run build      # production build (static prerender)
npm start          # serve the production build on http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
```

## The two rules that matter

### 1. The layout is made of vendored shadcnspace blocks — do not hand-write sections

The blocks are the composition. If a block exists for a section, use it and
edit its content. Rewriting a section as bespoke JSX is a regression, even if
the result looks better.

Customization is limited to visible text, local images, and hrefs — plus colour
(see rule 2). Grid structure, responsive behavior and animation are block
behavior and should be left alone.

### 2. Never name the stack, and never use a vendor's colours

The site is written for merchants, not engineers. None of the underlying
technology may appear in rendered copy:

**Forbidden:** Medusa, Next.js, Stripe, Cloudflare, Mastra, PostgreSQL, Better
Auth, Resend, "RLS", "Postgres Row-Level Security", Apple Pay / Google Pay,
"multi-tenant" / "tenant", "headless", and the word "stack" when describing what
the product is built on. Dropbox / Slack / Figma integration logos are gone for
the same reason — vendor branding does not belong on this page.

**Why:** the reviewer is judging the product, not the implementation. Naming the
stack makes it read as a developer tool and invites comparison on the wrong axis.

Also avoid developer jargon generally. "Multi-store", "one platform, many
stores" — not "multi-tenant". "Do I need to write code?" — not "Do I need to know
Next.js?".

## Brand colour

The brand colour is `--primary: #ff4801` (orange), defined in
`app/globals.css` for both light and dark mode. Every accent on the site uses
`text-primary` / `bg-primary` / `border-primary`.

The template shipped with blue and amber accents. They were all replaced. If you
add a UI element, use `primary` — do not introduce a literal `blue-500`,
`amber-400` or a hard-coded hex gradient that is not in the orange family. The
only hard-coded hex allowed is the brand orange itself.

## Layout

`app/page.tsx` is the landing page. It is a list, not a layout:

```
AnnouncementBar          (closed-beta notice, dismissible)
NavbarBlock              (sticky, Platform mega-menu, Pricing / Changelog / Contact)
main
  #hero       HeroSection    headline + 4 auto-advancing tabs, one per product surface
  #features   Feature        alternating rows on branded gradient panels
  #workspace  Bentogrid      multi-store story + dashboard mockup + surface icons
  #pricing    Pricing        Indie $0 / Studio $99 + capability marquee
  #faq        Faq            5 real questions
  #contact    Contact        closed-beta access request form
Footer
```

`app/layout.tsx` only sets fonts (`Inter`, `Geist_Mono`) and the theme provider.

## Blocks

`components/shadcn-space/blocks/<block-name>/` — one directory per block.

| Block | Used for |
| --- | --- |
| `announcement-bar-03` | Closed-beta badge + copy + "Request access" CTA |
| `navbar-04` | Sticky nav, Platform mega-menu, anchor links |
| `hero-18` | Hero headline + 4 tabs, each tab showing one real capture |
| `feature-24` | Two alternating rows on **branded gradient panels** |
| `bento-grid-02` | Multi-store cards, dashboard mockup, surface icons, search demo |
| `pricing-09` | Two plans + capability marquee |
| `faq-04` | Five questions about the platform and the beta |
| `contact-06` | Beta access form (needs + footprint) |
| `footer-07` | Platform / Resources / Legal columns + LinkedIn |

`components/site/legal-page.tsx` — shared shell for `/terms` and `/privacy`.
Plain server component; must not pull in client components.

`components/ui/` — shadcn/ui primitives (base-ui variant) the blocks import.

## Brand assets

- `public/wooblitz-mark.png` — the brand mark, cropped from the supplied 800×800
  source down to its 746×396 alpha bounding box. Solid black, so `logo.tsx`
  applies `dark:invert` rather than shipping a second asset that can drift.
- `assets/logo/logo.tsx` — the lockup: `<Image>` mark + "Wooblitz" wordmark.
  Accepts `className`, `height` (28 default) and `markOnly`.
- `app/icon.png` — 128×128 favicon generated from the same mark. There is no
  `favicon.ico`; Next.js serves `icon.png`. Do not add one back, it would take
  precedence over the correct icon.
- `public/screenshots/` — the four real product captures.

### Which screenshot goes where

| File | Surface | Block slot |
| --- | --- | --- |
| `builder.png` | Chat storefront builder | `hero-18` tab 1 |
| `dashboard.png` | Ecommerce dashboard | `hero-18` tab 2, `bento-grid-02` mockup |
| `cx.png` | CX overview | `hero-18` tab 3 |
| `lifecycle.png` | Lifecycle setup | `hero-18` tab 4 |

`feature-24` deliberately uses **no screenshots** — its two panels are branded
gradients. The captures were unreadable under the scrim and the section reads
much better on brand colour. Do not add images back to it.

## The contact form has no backend

`contact-06` submits via `mailto:` to `hello@wooblitz.com`, prefilled with the
name, email, selected needs, footprint and message. There is no server endpoint
and no storage. If a backend is ever added, replace `handleSubmit` — and remove
the comment that says so, so nobody reads it as an oversight.

The file-attachment control is decorative. It records the filename into the
mailto body but the file itself is not transmitted. Either wire it up or remove
the control before launch; do not leave it implying an upload that never happens.

## Footer

- Platform / Resources / Legal columns. Every link resolves — no `href="#"`.
- Social is **LinkedIn only**, pointing at
  `https://www.linkedin.com/company/wooblitz/`.
- The template's giant outlined-text `SubFooter` was deleted. Do not restore it.

## Re-installing a block

Do not use `npx shadcn add`. On Windows it is unreliable. Fetch the registry
JSON and write the files:

```text
https://shadcnspace.com/r/<block>.json?email=<email>&license_key=<LIC-XXXX>
```

The PRO query parameter is `license_key` — not `key`, not `license`. Using the
wrong one returns 403 on PRO blocks while free blocks still resolve, which looks
like a permissions problem rather than a wrong parameter. Write each
`files[].content` to its `files[].target`.

## Known local fixes

Deliberate. Do not "clean them up":

- **Motion v12 easing types.** `ease: "easeOut"` and cubic-bezier arrays are
  asserted with `as const` / tuple casts in several block files.
- **`components/ui/toast.tsx`** uses `reduce` instead of a `.map()` accumulator,
  and a `useSyncExternalStore` hydration gate instead of `useState` +
  `setMounted` in an effect. Both were lint fixes.
- **The remaining `<img>` warnings** are the template's own tags in `hero-18`.
  They are not load-bearing.

## Before calling any change done

```bash
npm run typecheck
npm run lint
npm run build
```

Then fetch the live HTML and confirm the change actually shipped. A clean build
is not proof the copy shipped — and for anything copy-related, check that the
forbidden words in rule 2 did not come back.