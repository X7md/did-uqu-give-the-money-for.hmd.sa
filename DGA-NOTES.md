# DGA «كود المنصات» — extracted design tokens

Source of truth: npm `platformscode-new-react@0.1.44` → `@platformscode/core@0.0.51`
(`dist/collection/assets/styles/main.css`), plus the guides at design.dga.gov.sa
(`/developing`, `/guidelines/foundations/color-system`, `/guidelines/foundations/typography`).
The upstream library is **Stencil web components** (not React primitives) — this project
re-implements the same design language as shadcn-style components over Base UI.

## Tokens mimicked here

| Token | Value | Used as |
|---|---|---|
| Primary «SA Flag» 600 | `#1b8354` | `--primary` (hover: 700 `#166a45`, light: 50 `#f3fcf6`, dark-mode: 400 `#54c08a`) |
| Secondary gold 600 | `#dba102` | `--secondary` |
| Neutral 50 / 100 / 200 | `#f9fafb` / `#f3f4f6` / `#e5e7eb` | body bg / muted / borders |
| Neutral 600 / 800 | `#4d5761` / `#1f2a37` | paragraph / display text |
| Error 600 / 50 | `#d92c20` / `#fef3f2` | `--destructive` (the big «لا») |
| Success 700 / 50 | `#067647` / `#ecfdf3` | success chips |
| Radius | sm 4px (buttons) · md 8px · lg 16px (cards) · full | `--radius-*` |
| Spacing | 4px scale (`--spacing-1..`) | Tailwind defaults align |
| Font | **IBM Plex Sans Arabic** | Google Fonts import |
| Button base | inline-flex, `radius-sm`, no border, `focus-visible: outline 2px solid black` | `components/ui/button.tsx` |
| Accordion | 16px header padding (`--accordion-lg-header-padding`) | `components/ui/accordion.tsx` |
| Body/card | body `neutral-50`, card white | `--background` / `--card` |

Light mode only, matching the light-first DGA kit (`color-scheme: light` is pinned in index.html).

**Identity note:** visual language only — no DGA/government logos, emblems, or claims of
officialdom are used; the site carries an explicit «غير حكومي» banner.
