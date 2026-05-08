---
version: alpha
name: Upbox UI
description: A B2B SaaS-grade Korean enterprise component system anchored on a near-white grey canvas (`{colors.grey-10}` — #ffffff) and Navy 80 (`{colors.navy-80}` — #264870), the brand voltage that carries every primary CTA, focus state, and selected indicator. Type runs Pretendard at modest, dense weights — Korean text-heavy interfaces (admin consoles, customer reports, operational dashboards) need 13/14/15px body sizes that hold up at 1.25 line-height; display headlines top out at 28px / 700, not the 36–48px hero sizes a marketing site would use. Radii are deliberately tight — the global `--radius` is **2px**, with components rounding at 3–4px (`rounded-[3px]` for badges/tags, `rounded-[4px]` for buttons/inputs). The shape language reads as crisp and engineered rather than friendly. Six color palettes (Grey, Navy, Blue, Green, Red, Orange) each scale 20–100 in 10-step increments and feed a small set of semantic tokens (`cta-primary`, `status-positive`, `label-1`, `bg-2`). Three-layer token architecture: primitive CSS variables → semantic tokens → Tailwind v4 `@theme`-mapped utilities.

colors:
  grey-10: "#FFFFFF"
  grey-20: "#F8F8F9"
  grey-30: "#ECEDF0"
  grey-40: "#D3D6DE"
  grey-50: "#AFB4BF"
  grey-60: "#8E94A3"
  grey-70: "#6F7789"
  grey-80: "#555C6C"
  grey-90: "#303445"
  grey-100: "#0D152A"
  navy-20: "#F4F7FC"
  navy-30: "#DAE7F5"
  navy-40: "#C5D6EC"
  navy-50: "#85A2C7"
  navy-60: "#4D7099"
  navy-70: "#385B85"
  navy-80: "#264870"
  navy-90: "#1D3756"
  navy-100: "#081E38"
  blue-20: "#F5F9FF"
  blue-30: "#E1EDFF"
  blue-40: "#B9D5FF"
  blue-50: "#93BEFF"
  blue-60: "#64A2FF"
  blue-70: "#3D8BFF"
  blue-80: "#0066FF"
  blue-90: "#004FC5"
  blue-100: "#003C96"
  green-20: "#F1F9F6"
  green-30: "#DBEEE9"
  green-40: "#B3D7CC"
  green-50: "#8EC0B1"
  green-60: "#66AF99"
  green-70: "#4DA288"
  green-80: "#1A8766"
  green-90: "#107B5A"
  green-100: "#006E4D"
  red-20: "#FFF6F6"
  red-30: "#FBEAEA"
  red-40: "#FDC9C9"
  red-50: "#F8A8A8"
  red-60: "#F27D7E"
  red-70: "#ED4242"
  red-80: "#E11D1D"
  red-90: "#C21919"
  red-100: "#851111"
  orange-20: "#FFF2E4"
  orange-30: "#FFE9D1"
  orange-40: "#FFDBB3"
  orange-50: "#FFBB63"
  orange-60: "#FFA037"
  orange-70: "#F68511"
  orange-80: "#E46F00"
  orange-90: "#CB5D00"
  orange-100: "#B14C00"
  cta-primary: "{colors.navy-80}"
  cta-destructive: "{colors.red-80}"
  cta-secondary: "{colors.grey-60}"
  cta-tertiary: "{colors.grey-30}"
  label-1: "{colors.grey-60}"
  label-2: "{colors.grey-90}"
  bg-1: "{colors.grey-10}"
  bg-2: "{colors.grey-20}"
  bg-3: "{colors.grey-30}"
  status-informative: "{colors.blue-80}"
  status-positive: "{colors.green-80}"
  status-negative: "{colors.red-80}"
  status-warning: "{colors.orange-80}"

typography:
  page-title-1:
    fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif"
    fontSize: 28px
    lineHeight: 36px
    fontWeight: 700
  page-title-2:
    fontSize: 24px
    lineHeight: 32px
    fontWeight: 700
  page-title-3:
    fontSize: 22px
    lineHeight: 32px
    fontWeight: 700
  page-title-4:
    fontSize: 20px
    lineHeight: 28px
    fontWeight: 700
  h1:
    fontSize: 24px
    lineHeight: 32px
    fontWeight: 700
  h2:
    fontSize: 22px
    lineHeight: 32px
    fontWeight: 700
  h3:
    fontSize: 20px
    lineHeight: 28px
    fontWeight: 700
  h4:
    fontSize: 18px
    lineHeight: 28px
    fontWeight: 700
  h5:
    fontSize: 16px
    lineHeight: 24px
    fontWeight: 700
  title-1:
    fontSize: 20px
    lineHeight: 28px
    fontWeight: 600
  title-2:
    fontSize: 18px
    lineHeight: 28px
    fontWeight: 600
  title-3:
    fontSize: 16px
    lineHeight: 24px
    fontWeight: 600
  title-4:
    fontSize: 15px
    lineHeight: 24px
    fontWeight: 600
  label-1:
    fontSize: 16px
    lineHeight: 24px
    fontWeight: 700
  label-2:
    fontSize: 15px
    lineHeight: 24px
    fontWeight: 700
  label-3:
    fontSize: 14px
    lineHeight: 20px
    fontWeight: 700
  label-4:
    fontSize: 13px
    lineHeight: 20px
    fontWeight: 700
  label-5:
    fontSize: 12px
    lineHeight: 16px
    fontWeight: 700
  label-6:
    fontSize: 11px
    lineHeight: 16px
    fontWeight: 700
  body-1:
    fontSize: 16px
    lineHeight: 24px
    fontWeight: 400
  body-2:
    fontSize: 15px
    lineHeight: 24px
    fontWeight: 400
  body-3:
    fontSize: 14px
    lineHeight: 20px
    fontWeight: 400
  body-4:
    fontSize: 13px
    lineHeight: 20px
    fontWeight: 400
  body-5:
    fontSize: 12px
    lineHeight: 16px
    fontWeight: 400
  caption-1:
    fontSize: 13px
    lineHeight: 20px
    fontWeight: 400
  caption-2:
    fontSize: 12px
    lineHeight: 16px
    fontWeight: 400
  caption-3:
    fontSize: 11px
    lineHeight: 16px
    fontWeight: 400

rounded:
  none: 0px
  xs: 2px
  sm: 3px
  md: 4px
  lg: 8px
  full: 9999px

spacing:
  "2": 2px
  "4": 4px
  "6": 6px
  "8": 8px
  "12": 12px
  "16": 16px
  "20": 20px
  "24": 24px
  "28": 28px
  "32": 32px
  "36": 36px
  "40": 40px
  "48": 48px
  "56": 56px
  "64": 64px
  "80": 80px
  "112": 112px

shadows:
  small: "0px 1px 2px 0px rgba(13, 21, 42, 0.08)"
  regular: "0px 2px 4px 0px rgba(13, 21, 42, 0.08)"
  medium: "0px 4px 8px 0px rgba(13, 21, 42, 0.08)"
  large: "0px 8px 16px 0px rgba(13, 21, 42, 0.08)"

components:
  button-primary-filled:
    backgroundColor: "{colors.navy-80}"
    textColor: "{colors.grey-10}"
    border: "1px solid {colors.navy-80}"
    typography: "{typography.label-3}"
    rounded: "{rounded.md}"
    paddingX: 16px
    paddingY: 8px
    height: 40px
    hoverBackground: "{colors.navy-90}"
    activeBackground: "{colors.navy-100}"
  button-primary-outlined:
    backgroundColor: "{colors.grey-10}"
    textColor: "{colors.cta-primary}"
    border: "1px solid {colors.cta-primary}"
    rounded: "{rounded.md}"
    hoverBackground: "{colors.navy-20}"
    activeBackground: "{colors.navy-30}"
  button-destructive-filled:
    backgroundColor: "{colors.red-80}"
    textColor: "{colors.grey-10}"
    border: "1px solid {colors.red-80}"
    rounded: "{rounded.md}"
    hoverBackground: "{colors.red-90}"
    activeBackground: "{colors.red-100}"
  button-secondary-filled:
    backgroundColor: "{colors.grey-60}"
    textColor: "{colors.grey-10}"
    border: "1px solid {colors.grey-60}"
    rounded: "{rounded.md}"
    hoverBackground: "{colors.grey-70}"
    activeBackground: "{colors.grey-80}"
  button-tertiary-filled:
    backgroundColor: "{colors.grey-30}"
    textColor: "{colors.grey-70}"
    border: "1px solid {colors.grey-30}"
    rounded: "{rounded.md}"
    hoverBackground: "{colors.grey-40}"
    activeBackground: "{colors.grey-50}"
  badge-soft:
    backgroundColor: "{colors.grey-30}"
    textColor: "{colors.grey-90}"
    typography: "{typography.label-5}"
    rounded: "{rounded.sm}"
    height: 20px
    paddingX: 8px
  badge-solid:
    backgroundColor: "{colors.grey-80}"
    textColor: "{colors.grey-10}"
    typography: "{typography.label-5}"
    rounded: "{rounded.sm}"
  badge-outline:
    backgroundColor: "{colors.grey-10}"
    textColor: "{colors.grey-90}"
    border: "1px solid {colors.grey-90}"
    rounded: "{rounded.sm}"
  tag-enabled:
    backgroundColor: "{colors.grey-10}"
    textColor: "{colors.grey-90}"
    border: "1px solid {colors.grey-90}"
    typography: "{typography.label-3}"
    rounded: "{rounded.md}"
    height: 32px
  tag-error:
    backgroundColor: "{colors.grey-10}"
    textColor: "{colors.red-80}"
    border: "1px solid {colors.red-80}"
    rounded: "{rounded.md}"
  input-frame-default:
    backgroundColor: "{colors.grey-10}"
    textColor: "{colors.grey-100}"
    border: "1px solid {colors.grey-40}"
    typography: "{typography.body-3}"
    rounded: "{rounded.md}"
    focusBorder: "1px solid {colors.navy-80}"
    errorBorder: "1px solid {colors.red-80}"
    disabledBackground: "{colors.grey-20}"
  card-default:
    backgroundColor: "{colors.grey-10}"
    border: "1px solid {colors.grey-30}"
    rounded: "{rounded.md}"
    shadow: "{shadows.small}"
    padding: 24px
  table-header-cell:
    backgroundColor: "{colors.grey-20}"
    textColor: "{colors.grey-80}"
    typography: "{typography.label-4}"
    border-bottom: "1px solid {colors.grey-30}"
  table-body-cell:
    backgroundColor: "{colors.grey-10}"
    textColor: "{colors.grey-90}"
    typography: "{typography.body-3}"
    border-bottom: "1px solid {colors.grey-30}"
  popover-surface:
    backgroundColor: "{colors.grey-10}"
    border: "1px solid {colors.grey-30}"
    rounded: "{rounded.md}"
    shadow: "{shadows.medium}"
  drawer-mobile:
    backgroundColor: "{colors.grey-10}"
    rounded: "16px 16px 0 0"
    width: 360px
  toggle-on:
    backgroundColor: "{colors.navy-80}"
    textColor: "{colors.grey-10}"
    rounded: "{rounded.full}"
  toggle-off:
    backgroundColor: "{colors.grey-40}"
    textColor: "{colors.grey-10}"
    rounded: "{rounded.full}"
---

> AI 디자인 툴(v0 / Stitch / Figma Make 등) 입력 및 디자인 의도 레퍼런스 문서. 토큰 hex 값·타이포 스케일·shape 언어·밀도 가이드라인까지가 적정 사용 범위이며, 정확한 컴포넌트 스펙·prop API·동작은 Storybook과 `src/` 소스 코드를 단일 진실로 따른다.

## Overview

Upbox UI is the design system that powers RECO's Upbox B2B suite — admin consoles, customer reports, operational dashboards, ops tooling. The base canvas is **near-white** (`{colors.grey-10}` — #ffffff) layered with **light grey surfaces** (`{colors.grey-20}` — #F8F8F9, `{colors.grey-30}` — #ECEDF0) for table headers, page bands, and disabled fields. Text sits in deep ink (`{colors.grey-100}` — #0D152A) with **Navy 80** (`{colors.navy-80}` — #264870) as the single brand voltage that carries every primary CTA, focused border, active selection, and emphasized stat. There is no marketing-loud accent — this is enterprise software that prioritizes scannability over delight.

Type runs **Pretendard** (a Korean-Latin hybrid family widely used in Korean SaaS) backed by `-apple-system`, `system-ui`, `Apple SD Gothic Neo`, and `Noto Sans KR`. The Latin proportions sit close to Inter while the Hangul cap heights are tuned to match Latin x-height so mixed-script lines (e.g., "고객 리포트 v2.4") read as one rhythm rather than two. Body text runs at 13–15px (`text-body-3`/`text-body-2`) — small by consumer standards but standard for Korean enterprise tools where users live in tables and forms 8 hours a day. Display tops out at 28px / 700 (`text-page-title-1`); this system never reaches the 36–48px headline sizes a marketing site uses, because there are no marketing pages here.

The shape language is **tight and engineered**. The global `--radius` is **2px** (`{rounded.xs}`), which propagates to Tailwind's `rounded-md` / `rounded-lg` / `rounded-sm` utilities. Components override this with arbitrary 3–4px radii: badges and tags at 3px (`rounded-[3px]`), buttons and inputs at 4px (`rounded-[4px]`), the smallest button (`xsmall`) at 3px, mobile picker drawers at 16px top-rounded only. There is **no fully-rounded pill button** in the core button set — pills appear only on toggles, badge counts, and dismissable tag close buttons.

**Key Characteristics:**
- Single brand color: `{colors.navy-80}` (#264870) carries every primary CTA, focus border, active tab indicator, and selected calendar day. Used scarcely — most surfaces are 90%+ grey/white with one Navy moment per view.
- Six-palette token system: Grey (text/surface), Navy (brand/primary), Blue (informative), Green (positive), Red (negative/destructive), Orange (warning) — each scaling 20–100 in 10-step increments. Naming follows Figma palette names directly (no `primary`/`info` aliasing in primitives — semantic aliases live one layer above as `cta-primary` etc).
- Three-layer token architecture: **primitive CSS variables** (`--color-grey-80`) → **semantic tokens** (`--color-cta-primary` → `var(--color-navy-80)`) → **Tailwind v4 `@theme` utilities** (`bg-navy-80`, `text-cta-primary`).
- Korean-tuned type: Pretendard at 13/14/15/16px body sizes; line-height runs 1.25–1.5 (vs. Latin-only systems at 1.4–1.6) because Korean glyphs need less leading.
- Tight radii: 2px global default, 3–4px component overrides; no marketing-soft 12–16px corners except mobile drawer top edges (16px).
- One-tier elevation primarily: `shadow-small` on cards, `shadow-medium` on popovers/dropdowns, `shadow-large` reserved for sheets/dialogs. Most surfaces are flat with 1px hairlines.
- Reka-ui headless primitives + CVA variants: every interactive component is a thin Vue wrapper around a Reka-ui primitive (`SwitchRoot`, `PopoverRoot`, `DialogRoot`, `TabsRoot`) styled via `class-variance-authority`.
- 4px base spacing unit, with the full token scale at 2/4/6/8/12/16/20/24/28/32/36/40/48/56/64/80/112 — denser than typical SaaS marketing sites because dashboards need more rows per scroll.

## Colors

### Brand / Primary CTA
- **Navy 80** (`{colors.navy-80}` — #264870): The single brand color. Powers `cta-primary`, primary button fill, focused input border, active tab/segment indicator, selected calendar day, primary toggle on-state. Most-recognizable color in the system.
- **Navy 90** (`{colors.navy-90}` — #1D3756): Primary button hover.
- **Navy 100** (`{colors.navy-100}` — #081E38): Primary button active (press) state.
- **Navy 20–40** (`{colors.navy-20}` / `{colors.navy-30}` / `{colors.navy-40}`): Outlined-primary button hover/active fills, soft-tone informational accents inside Navy-themed contexts.

### Surface (Grey)
- **Grey 10** (`{colors.grey-10}` — #FFFFFF): Default page floor and card surface. The dark-mode equivalent flips to #0D152A — see Dark Mode below.
- **Grey 20** (`{colors.grey-20}` — #F8F8F9): The next-lightest surface — used as table header rows, page subtle bands, disabled input fills, hover backgrounds on tertiary buttons.
- **Grey 30** (`{colors.grey-30}` — #ECEDF0): Slightly heavier surface — used as `bg-3`, neutral soft badge fill, tertiary CTA fill, table dividers, accordion hover states.
- **Grey 40** (`{colors.grey-40}` — #D3D6DE): Default 1px input border tone — `--border` token. Also the default border between table rows when stronger separation is needed.

### Text
- **Grey 100** (`{colors.grey-100}` — #0D152A): The dominant text color — `--foreground`. Used for headlines, body paragraphs, table cell content, primary input text. Never pure black.
- **Grey 90** (`{colors.grey-90}` — #303445): `label-2` token — secondary headline weight, label-style text inside cards.
- **Grey 80** (`{colors.grey-80}` — #555C6C): Strong secondary text — table header column labels, sub-section titles inside dialogs.
- **Grey 70** (`{colors.grey-70}` — #6F7789): Tertiary button text, muted but readable copy inside meta rows.
- **Grey 60** (`{colors.grey-60}` — #8E94A3): `label-1` token / `--muted-foreground` — placeholder text, helper text, deactivated nav labels, "이전" / "다음" pagination muted state.
- **Grey 50** (`{colors.grey-50}` — #AFB4BF): Disabled label text, divider line color in dense list rows.

### Hairlines & Borders
- **Grey 30** (`{colors.grey-30}` — #ECEDF0): Default border for non-focused element separators (used by the global `*` border reset in `style.css`).
- **Grey 40** (`{colors.grey-40}` — #D3D6DE): The standard 1px input/control outline — `--border` token. Stronger separation than Grey 30, used on form inputs, card borders.
- **Grey 90** (`{colors.grey-90}` — #303445): Heavy 1px outline on `tag` enabled state, outline-tone Neutral Badges. Provides high-contrast outlines without going to ink.

### Status (Semantic)
- **Status Informative** (`{colors.status-informative}` → `{colors.blue-80}` — #0066FF): Informational badges, info-toned alerts, link emphasis inside notice copy.
- **Status Positive** (`{colors.status-positive}` → `{colors.green-80}` — #1A8766): Success badges, positive validation messages, "활성" / "완료" indicators.
- **Status Negative** (`{colors.status-negative}` → `{colors.red-80}` — #E11D1D): Error badges, validation failure messages, destructive button fill.
- **Status Warning** (`{colors.status-warning}` → `{colors.orange-80}` — #E46F00): Warning badges, caution toasts, "지연" / "경고" indicators.

Each status palette has a full 20–100 scale. The `*-30` tier is used for "soft" badge backgrounds, `*-80` for "solid" tier, and `*-90` / `*-100` for hover/active darkening on filled CTAs.

### Semantic Aliases
The semantic layer collapses six palettes into a small action vocabulary:
- `cta-primary` → `navy-80` · `cta-destructive` → `red-80` · `cta-secondary` → `grey-60` · `cta-tertiary` → `grey-30`
- `label-1` → `grey-60` (muted) · `label-2` → `grey-90` (strong)
- `bg-1` → `grey-10` · `bg-2` → `grey-20` · `bg-3` → `grey-30`
- `status-{informative,positive,negative,warning}` → `{blue,green,red,orange}-80`

Always prefer semantic aliases when the meaning matches (e.g., `bg-cta-primary` for primary CTA, `text-label-1` for muted labels). Drop to primitives when you need a specific tier (e.g., `bg-navy-30` for a soft Navy callout that semantic tokens don't cover).

## Typography

### Font Family
The system runs **Pretendard** as the single typeface. The fallback stack walks through the Apple system font, BlinkMacSystem, system-ui, then Korean-specific fallbacks (`Apple SD Gothic Neo`, `Noto Sans KR`, `Malgun Gothic`) and ends at the generic `sans-serif`. Pretendard's Hangul x-height is tuned to Latin proportions, which is why mixed-script lines read as one rhythm.

There is no display family. Pretendard carries the entire scale at weights 400 (regular) / 500 (medium — defined but rarely used) / 600 (semibold) / 700 (bold).

### Hierarchy

The system exposes typography as **Tailwind utilities** (e.g., `text-page-title-1`, `text-body-3`, `text-label-4`) defined in `style.css` via the `@utility` directive. Six families × multiple sizes:

#### Page Title (Bold) — Top-of-page only
| Token | Size | Weight | Use |
|---|---|---|---|
| `text-page-title-1` | 28 / 36 | 700 | Top-most page heading on dashboards, settings pages |
| `text-page-title-2` | 24 / 32 | 700 | Sub-page heading or modal title in large dialogs |
| `text-page-title-3` | 22 / 32 | 700 | Card-level page section title |
| `text-page-title-4` | 20 / 28 | 700 | Compact page title (e.g., side-panel views) |

#### Headline (Bold) — Section heads inside content
| Token | Size | Weight | Use |
|---|---|---|---|
| `text-h1` | 24 / 32 | 700 | First-level section heading inside a page |
| `text-h2` | 22 / 32 | 700 | Second-level — most-used section head in dashboards |
| `text-h3` | 20 / 28 | 700 | Tertiary section head |
| `text-h4` | 18 / 28 | 700 | Card-level title inside multi-card layouts |
| `text-h5` | 16 / 24 | 700 | Small block heading |

#### Title (Semi-Bold) — Component-level emphasis
| Token | Size | Weight | Use |
|---|---|---|---|
| `text-title-1` | 20 / 28 | 600 | Modal title, sidebar group head |
| `text-title-2` | 18 / 28 | 600 | Card title, tab header |
| `text-title-3` | 16 / 24 | 600 | Form section title |
| `text-title-4` | 15 / 24 | 600 | Compact form title, settings row title |

#### Label (Bold) — Form labels, dense controls
| Token | Size | Weight | Use |
|---|---|---|---|
| `text-label-1` | 16 / 24 | 700 | Largest form label |
| `text-label-2` | 15 / 24 | 700 | Standard form label |
| `text-label-3` | 14 / 20 | 700 | Compact form label, default button text |
| `text-label-4` | 13 / 20 | 700 | Table header cell, tag text |
| `text-label-5` | 12 / 16 | 700 | Badge text, micro-tag |
| `text-label-6` | 11 / 16 | 700 | Smallest stat label |

#### Body (Regular) — Default running text
| Token | Size | Weight | Use |
|---|---|---|---|
| `text-body-1` | 16 / 24 | 400 | Comfortable reading body |
| `text-body-2` | 15 / 24 | 400 | Default form value, card body |
| `text-body-3` | 14 / 20 | 400 | Default table cell, dense list row |
| `text-body-4` | 13 / 20 | 400 | Compact dense table, small input value |
| `text-body-5` | 12 / 16 | 400 | Smallest body — meta rows |

Each Body size has **`-sb` (semibold/600)** and **`-b` (bold/700)** variants — `text-body-3-sb`, `text-body-3-b` — for emphasis without changing size.

#### Caption (Regular) — Meta and helper
| Token | Size | Weight | Use |
|---|---|---|---|
| `text-caption-1` | 13 / 20 | 400 | Helper text under inputs |
| `text-caption-2` | 12 / 16 | 400 | Timestamp, meta line |
| `text-caption-3` | 11 / 16 | 400 | Smallest meta — column count, footnote |

### Principles
Display weights stay **modest**. The largest element a page can carry is `text-page-title-1` at 28px / 700 — there is no hero typography in this system, because there are no hero pages. The dense, table-and-form-heavy product surfaces lean on `text-body-3` (14/20) and `text-label-4` (13/20) for 80% of their visible text, with `text-h2` / `text-h3` carrying section structure.

The single typographically loud moment is the **page title** at the top-left of dashboards and settings pages — `text-page-title-1` (28 / 700). That's the only place the system trusts type alone to carry hierarchy. Everywhere else, color, weight, and surface separation do the work.

### Note on Font Substitutes
If Pretendard is unavailable, the system falls through to Apple's San Francisco (`-apple-system`) on macOS/iOS, then `system-ui` on other platforms, then explicit Korean fallbacks (`Apple SD Gothic Neo`, `Noto Sans KR`, `Malgun Gothic`). On Windows without Pretendard, **Noto Sans KR** is the closest match for Hangul rendering; for Latin-only contexts, **Inter** is the best non-Korean substitute (proportions transfer cleanly, no line-height adjustment needed).

## Layout

### Spacing System
- **Base unit:** 4px (with 2px micro-step at the smallest end).
- **Tokens:** `space-2` 2px · `space-4` 4px · `space-6` 6px · `space-8` 8px · `space-12` 12px · `space-16` 16px · `space-20` 20px · `space-24` 24px · `space-28` 28px · `space-32` 32px · `space-36` 36px · `space-40` 40px · `space-48` 48px · `space-56` 56px · `space-64` 64px · `space-80` 80px · `space-112` 112px.
- **Card internal padding:** `space-24` (24px) for default card content; `space-16` (16px) for compact card body; `space-12` (12px) for table cell padding.
- **Form row gap:** `space-16` between form rows; `space-8` between label and input; `space-24` between form sections.
- **Page section gutter:** `space-32` to `space-48` between major page bands. Tighter than marketing sites because operational pages fit more controls per fold.

### Grid & Container
- The library does **not ship a hard max-width** — consuming apps decide their own page container width. Common patterns observed:
  - Admin console main: 1280–1440px centered
  - Customer report: 1080–1200px centered with sidebar
  - Front application: full-width responsive
- **Sidebar layout:** `Sidebar` component pairs with `SidebarProvider` at the page root; default sidebar width is consumer-controlled (typically 240–280px).
- **Table layout:** full-width within page container, with `Table` component handling its own scroll containers when columns overflow.

### Whitespace Philosophy
The system gives form rows comfortable 16–24px breathing room but compresses table cells to 8–12px vertical padding because operational tables routinely show 30+ rows per fold. The contrast is intentional: forms are deliberate, tables are scannable.

## Elevation

The system has **four shadow tiers** plus the flat baseline.

- **Flat (no shadow):** Body, page bands, table rows, default form inputs — 90% of surfaces.
- **`shadow-small`** — `0px 1px 2px 0px rgba(13, 21, 42, 0.08)`: Default card elevation, tooltips, inline notification surfaces.
- **`shadow-regular`** — `0px 2px 4px 0px rgba(13, 21, 42, 0.08)`: Hovered cards, active dropdown triggers.
- **`shadow-medium`** — `0px 4px 8px 0px rgba(13, 21, 42, 0.08)`: Popover surfaces, dropdown menus, autocomplete panels, calendar popovers.
- **`shadow-large`** — `0px 8px 16px 0px rgba(13, 21, 42, 0.08)`: Modal dialogs, drawers, sheets — top-of-stack overlays.

All shadows derive from a single ink color (`#0D152A`) at 8% alpha, scaling only the offset and blur radius. This means hovered/floating elements never shift in hue — only in elevation depth.

**Modal scrim:** Reka-ui's overlay defaults at ~50% black are kept for `Dialog`, `Sheet`, `Drawer`. No custom scrim color.

## Components

The system ships **48+ components** across 8 categories. Each component is a Vue 3 SFC + a sibling `index.ts` that exports the component, its `Props` interface, and CVA variant definitions.

### Buttons
- **`Button`** — Primary CTA component. Five sizes (`xsmall` 24px / `small` 32px / `regular` 40px / `large` 48px / `xlarge` 56px), four variants (`primary` Navy / `destructive` Red / `secondary` Grey-60 / `tertiary` Grey-30), two themes (`filled` / `outlined`), `block` for full-width, `loading` swaps content for `Spinner`. Border radius is `3px` for xsmall and `4px` everywhere else.
- **`IconButton`** — Square button with single icon child; same size scale as Button.
- **`TextButton`** — Borderless inline text-style button for in-content actions.
- **`Fab`** — Floating action button, fully rounded, used for primary action on mobile-style overlays.

### Forms
- **`InputFrame`** — The shared visual chrome for every input-style component. Resolves `size`/`variant`/`error`/`readonly`/`disabled` once and provides them to descendants via `useInputFrameInjectProvide`. Border default is `grey-40`, focus flips to `navy-80`, error flips to `red-80`. **Auto-error fallback**: if `props.error` is undefined, `InputFrame` automatically pulls from `FORM_ERROR_INJECTION_KEY` (provided by `FieldContainer` / vee-validate), so wrapping a `TextField` in a `FieldContainer` lights up the red border on validation failure with no explicit prop.
- **`InputGroup`** — Lower-level wrapper for free-form inline composition. Has `InputGroupAddon` (slots: inline-start/end, block-start/end), `InputGroupInput`, `InputGroupTextarea`, `InputGroupButton`, `InputGroupText`. Block-start/end addons share the wrapper's horizontal padding so addons line up with the input text baseline.
- **`TextField`**, **`Textarea`**, **`NumberField`**, **`SearchField`** — All built on InputFrame with monolithic API. NumberField additionally exports `NumberFieldRoot`/`NumberFieldContent`/`NumberFieldInput`/`NumberFieldIncrement`/`NumberFieldDecrement` as a compound dual-API.
- **`Checkbox`**, **`RadioGroup`**, **`Toggle`** — All built on Reka-ui primitives. Toggle is the single on/off pill switch (sizes `4xsmall` / `3xsmall` / `2xsmall`); for N-of-1 segmented control, use `Tabs variant="box"` instead.
- **`Select`** — Reka-ui Select wrapper with `SelectTrigger` / `SelectContent` / `SelectItem` / `SelectValue`. Trigger has an `inline` prop — when used inside another framed wrapper (e.g., `SearchField` filter slot), `<SelectTrigger inline>` renders without its own `InputFrame` to avoid double-borders.
- **`Label`**, **`FieldContainer`** — vee-validate integration scaffolding.

### Pickers (Compound + Mobile variants)
- **`DatePicker`**, **`DatePeriodPicker`**, **`TimePicker`** — Each follows the **Picker compound pattern**: outer `*Picker.vue` holds `defineModel`, provides via `<picker>Context.ts` key (`DATE_PICKER_CTX_KEY`, `TIME_PICKER_CTX_KEY`...), with `*Input` (raw input) + `*Trigger` (InputFrame + PopoverTrigger) + `*Panel` (calendar/dial in popover). Wrapper holds `panelDraft` and only commits to model on confirm.
- **`MobileDatePicker`**, **`MobileDatePeriodPicker`**, **`MobileTimePicker`** — Mobile variants share the **same input components and context keys** as desktop. Desktop uses `Popover` + `*Panel`; mobile uses `Drawer` + `*Dial` / `Mobile*Calendar`. Drawer is 360px wide with `rounded-t-[16px]`. Wheel dials use a single `ITEM_HEIGHT` constant; the centered row is the selected value, highlighted by an absolutely-positioned background bar.
- **`Calendar`** — Standalone calendar view; reused by all Picker `*Panel` components.
- **`DateMove`** — Date navigation/header subcomponent shared across pickers.

### Display & Surface
- **`Card`** + `CardHeader` + `CardTitle` + `CardDescription` + `CardContent` + `CardFooter` — Composable card primitive with default Grey-30 1px border and `shadow-small`. Internal padding `space-24`.
- **`Badge`** — Pill-or-rounded label. `variant`: neutral / negative / positive / informative / warning. `tone`: soft (filled 50%) / solid (filled 100%) / outline. `round` boolean (false = `rounded-[3px]`, true = `rounded-full`). Sizes 3xsmall / 2xsmall / xsmall. Slot `count` injects a small filled pill (e.g., "3", "12+").
- **`Tag`** — Removable label. `state`: enabled / disabled / error. `closable` boolean reveals an X close button (Grey-90 in default state, Red-80 in error state). Slot `badge` for prefix dot/icon.
- **`BadgeDivider`** — Tiny dot separator between badge groups.
- **`Avatar`** — Reka-ui Avatar wrapper with image/fallback slots.
- **`Empty`** — Empty-state composition: icon + title + description + optional CTA.
- **`Skeleton`** — Loading placeholder with `animate-pulse`.
- **`Spinner`** — Loading indicator; consumed by Button's `loading` state.
- **`Stepper`** — Multi-step progress indicator.

### Tables
- **`Table`** + `TableHeader` + `TableBody` + `TableRow` + `TableHead` + `TableCell` + `TableCaption` — Native `<table>` markup with token classes. Header row uses `bg-grey-20` + `text-label-4`; body cells use `text-body-3`.

### Tabs
- **`Tabs`** — Reka-ui Tabs wrapper with two variants: `default` (underlined active tab on a transparent background) and `box` (segmented-control style with rounded box around active tab). Use `box` when you need N-of-1 selection without resorting to Toggle.

### Overlays
- **`Dialog`** + Reka-ui DialogRoot/Trigger/Content/Title/Description/Overlay — Center-screen modal with `shadow-large`. Used for confirmations, forms.
- **`Sheet`** — Edge-anchored overlay (left/right/top/bottom). Same Reka-ui base as Dialog, different positioning.
- **`Drawer`** — Bottom-sheet overlay primarily used for mobile picker variants. Top-rounded at 16px.
- **`Popover`** — Reka-ui Popover wrapper. Used for Picker panels, action menus inside table rows, helper popovers. Surface uses `shadow-medium` + Grey-30 1px border.
- **`Tooltip`** — Reka-ui Tooltip wrapper. Compact, monospace info bubble.
- **`Sonner`** — Toast notification system (vue-sonner integration).

### Navigation
- **`Sidebar`** — Side navigation primitive with `SidebarProvider`, `SidebarHeader`, `SidebarContent`, `SidebarGroup`, `SidebarMenu`, `SidebarMenuButton`, `SidebarFooter`, etc. Composable into multi-level navigation. Width is consumer-controlled.
- **`Breadcrumb`** — Trail of links separated by chevrons.
- **`Pagination`** — First/Prev/Next/Last + numeric page buttons.
- **`DropdownMenu`** — Reka-ui DropdownMenu wrapper for action menus.
- **`DropdownFilter`** — Specialized filter dropdown for table column / list filtering UI.

### Files & Misc
- **`FileUploader`** — Drag-and-drop file upload zone with progress states.
- **`Accordion`** — Reka-ui Accordion wrapper with `accordion-down`/`accordion-up` keyframe animations defined in `style.css`.
- **`Separator`** — Horizontal/vertical 1px divider.

## Patterns

### Three-Layer Token Flow
```
tokens.css (primitive)              style.css @theme (Tailwind v4)         consumer .vue
─────────────────────              ────────────────────────────         ─────────────────
--color-grey-80: #555C6C  ─────►   --color-grey-80: #555C6C   ─────►   <div class="bg-grey-80">
--color-cta-primary:               --color-cta-primary:                  <button class="bg-cta-primary">
  var(--color-navy-80)               var(--color-navy-80)
```

`tokens.css` ships only the CSS variables and is what Storybook imports. `style.css` ships **both** the variables *and* the Tailwind v4 `@theme` block + `@utility` typography classes — that's what the library bundles. Consumers import `style.css` and re-declare the `@theme` block in their own CSS so Tailwind v4 generates utilities for the variables (Tailwind v4 only generates utilities from variables it sees in `@theme`). The dist JS file paths must also be added to the consumer's `@source` directive so Tailwind scans the class strings inside compiled component bundles.

### Component Conventions
- **Props typing:** every component exports an `interface XxxProps` with inline union literals (not `VariantProps`-derived indexed access types) so Storybook's vue-component-meta can resolve descriptions correctly. CVA's `VariantProps` is internal-only.
- **Boolean props for binary choices:** `round: boolean` (not `shape: "square" | "round"`), `block: boolean`, `closable: boolean`. String unions are reserved for 3+ choice axes.
- **Tone naming:** `soft` / `solid` / `outline` (Radix Themes / Tailwind UI convention) — never `light`/`filled`/`bordered`.
- **CVA-driven variants:** all multi-state components define a `cva()` config in their `index.ts` with a `compoundVariants` array for variant×tone combinations.
- **Reka-ui upstream typing workaround:** for components that wrap Reka-ui primitives directly (`Tabs`, `Separator`), define props/emits as inline union literals in the component's `index.ts` instead of importing types like `TabsRootProps` from `reka-ui`. Reka-ui's internal types (`DataOrientation`, `StringOrNumber`) aren't public exports, and importing them causes d.ts builds to emit non-portable `node_modules/reka-ui/dist/index3` paths that break consumer builds.
- **No `baseUrl` in tsconfig:** intentionally omitted — setting it causes TS to silently emit `node_modules/...` paths in declarations. `paths` works without `baseUrl` in modern TS.
- **Field components share `InputFrame`:** every input-style component (TextField, Textarea, NumberField, SearchField, DatePicker trigger, etc.) wraps `InputFrame` and uses `useInputFrameInjectProvide(() => pickInputFrameDesign(props))` to resolve and provide design context once.
- **Picker compound pattern:** `*Picker.vue` outer holds `defineModel` + provides context via `<picker>Context.ts`; `*Input.vue` injects context (or falls back to standalone `defineModel`); `*Trigger.vue` wraps `InputFrame` + `PopoverTrigger`; `*Panel.vue` (or mobile `*Dial`) reads from `panelDraft`/`dialDraft` and only commits to model on confirm. New pickers should clone `date-picker/` directory structure and only swap the model type.

## Responsive Behavior

The library is **agnostic about page-level breakpoints** — consumers define their own. Component-level responsive behavior:

| Breakpoint Concern | Behavior |
|---|---|
| **Picker desktop ↔ mobile** | Consumers pick `DatePicker` (desktop popover) or `MobileDatePicker` (drawer) explicitly. There is no automatic switch — page-level media query decides. |
| **Sidebar collapse** | `SidebarProvider` exposes collapse state; consumer wires up to viewport width. Sidebar collapses to icon-only or hides entirely depending on consumer config. |
| **Table overflow** | `Table` does not auto-stack on mobile — consumers wrap in a horizontal scroll container or render a card list at narrow widths. |
| **Mobile drawer** | Mobile pickers use `Drawer` at 360px width with `rounded-t-[16px]`. Always bottom-anchored; never side-anchored. |

### Touch Targets
- Default Button height is 40px (`regular` size); minimum tap target is 32px (`small`). 24px (`xsmall`) is below WCAG AAA — used only for inline dense controls.
- `IconButton` defaults match Button heights.
- Toggle smallest size is `4xsmall`; consumers should not use this as a primary tap target on mobile.
- Calendar day cells inside Pickers are 32–40px depending on size — borderline AAA, compensated by surrounding popover padding.

## Dark Mode

Dark mode is implemented by **flipping the primitive color tokens** when `.dark` is on the document root. Only the Grey, Navy, Blue, Green, Red, and Orange palette variables are inverted (10 ↔ 100, 20 ↔ 90, etc.) — semantic tokens (`cta-primary`, `bg-1`, `status-positive`) stay the same because they reference primitives by name.

**This means a single CSS class flip changes the entire system theme** without component-level dark variants. Buttons, inputs, badges, cards all re-color automatically.

### Implementation
```css
.dark {
  --color-grey-10: #0D152A;   /* was #FFFFFF */
  --color-grey-20: #303445;   /* was #F8F8F9 */
  /* ... full palette inversion ... */
}
```

The `.dark` block lives in both `tokens.css` and `style.css`. It is **not yet wired through Tailwind v4 `@theme`** for dark variants — flipping `.dark` swaps the underlying CSS variable values, and components inherit the new values directly. `dark:` Tailwind variants are not used in component code.

## Token Naming Migration (2026-03)

Color names were migrated to match Figma palette names directly. CSS variables, Tailwind classes, and component code were updated together:

| Before (semantic-prefixed) | After (Figma palette name) |
|---|---|
| `base` | `grey` |
| `primary` | `navy` |
| `info` | `blue` |
| `positive` | `green` |
| `error` | `red` |
| `warning` | `orange` |

The semantic intent moved up to a thin alias layer (`cta-primary` → `navy-80`, `status-positive` → `green-80`, etc.). Primitives now use Figma names; semantic aliases describe *use* rather than *appearance*.

## Known Gaps

- **No dark `@theme` variants:** Tailwind v4's per-variant `@theme dark` block is not yet wired; dark mode currently relies on direct CSS variable substitution under `.dark`. This means `dark:bg-foo` Tailwind variants are not generated and would not affect color tokens — components inherit the flipped variables instead.
- **Loading skeletons inconsistent:** `Skeleton` exists but is not consistently used across data-fetching components. Most components leave loading-state composition to the consumer.
- **Map / chart styling:** the library does not ship chart components — operational dashboards in Upbox-2.0-Customer-Report compose their own chart layer (typically ECharts or Chart.js), and theming tokens are referenced by hex through ad-hoc imports rather than via design system tokens.
- **Form input error state copy:** `InputFrame` handles error border color via auto-fallback to `FORM_ERROR_INJECTION_KEY`, but the helper-text/error-text rendering is the consumer's responsibility (typically via `FieldContainer` + vee-validate).
- **Hover states for table rows:** not standardized — some consumer apps add `hover:bg-grey-20`, others leave hover off entirely. The library does not enforce a default.
- **Sub-brands or product-line palettes:** unlike consumer marketplaces, Upbox does not have sub-brand color tokens — Navy 80 is the single brand color across all products (Boilerplate, Customer Report, Application). Multi-tenant theming is not in scope.
