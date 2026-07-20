---
name: BrainFit Karşıyaka
description: Cognitive development and mind check-up for children and adults — calm, credible, encouraging.
colors:
  coral: "#f5927e"
  amber: "#fcbf48"
  yellow: "#fcea96"
  forest-green: "#164c35"
  lime: "#d9f8a8"
  sky: "#aae8f6"
  lavender: "#9b66f4"
  canvas: "#faf9f5"
  paper: "#f4f1eb"
  ink: "#241d18"
  matte: "#514236"
  muted-brown: "#9b745f"
  espresso: "#160a08"
  footer-bg: "#242424"
typography:
  display:
    fontFamily: "Titillium Web, Arial, sans-serif"
    fontSize: "clamp(42px, 5.6vw, 76px)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "0"
  headline:
    fontFamily: "Titillium Web, Arial, sans-serif"
    fontSize: "clamp(36px, 4.4vw, 60px)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "0"
  title:
    fontFamily: "Titillium Web, Arial, sans-serif"
    fontSize: "clamp(32px, 3.7vw, 50px)"
    fontWeight: 700
    lineHeight: 1
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.72
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 800
    letterSpacing: "0.12em"
rounded:
  pill: "9999px"
  badge: "999px"
  card-lg: "34px"
  card-md: "28px"
  card-sm: "24px"
  nav: "30px"
  input: "18px"
spacing:
  section-v: "clamp(76px, 8vw, 126px)"
  inner-w: "min(1220px, calc(100% - 48px))"
components:
  button-primary:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.espresso}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "#f99f8d"
    textColor: "{colors.espresso}"
  button-adult-cta:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.espresso}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "52px"
  button-adult-cta-hover:
    backgroundColor: "#fdd060"
    textColor: "{colors.espresso}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "rgba(255,255,255,0.68)"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "52px"
  button-on-coral:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.espresso}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "48px"
  chip-info:
    backgroundColor: "rgba(255,255,255,0.07)"
    textColor: "rgba(255,255,255,0.52)"
    rounded: "{rounded.pill}"
    padding: "5px 14px"
---

# Design System: BrainFit Karşıyaka

## 1. Overview

**Creative North Star: "Grounded warmth meets scientific trust"**

BrainFit Karşıyaka is a cognitive development center, not a hospital and not a generic wellness brand. The visual language must carry both at once: the clinical credibility of a structured 45-minute assessment and the human warmth of a team that genuinely cares about cognitive growth. Every design decision is tested against this double standard. If a choice reads as sterile hospital, it fails. If it reads as soft wellness-retreat, it also fails.

The palette is drawn from BrainFit's PMS brand library (Vivid Orange 1505, Golden Yellow 7548, Rich Magenta 233, Bright Cyan 299, Fresh Green 361, Charcoal Gray 11) adapted to web density — not desaturated for comfort but specifically tuned so each hue can carry meaning in context without competing against the others at full saturation. The display font (Titillium Web, a geometric humanist sans-serif at weight 700) is the authority voice; the body font (Manrope, an extrabold humanist sans) is the practical voice. The two personas never reverse.

The adults page (`/yetiskinler`) runs a second North Star in parallel: "Growth without overwhelm." Where the main page reassures parents, the adults page signals forward momentum without clinical distance. The deep forest green hero section carries this autonomously — darker, denser, more purposeful — while staying within the shared color family. Both pages share the brand palette; they do not share section backgrounds or hero patterns.

**Key Characteristics:**
- Warm cream canvas with a coral brand accent — never cold white or clinical grey
- Display sans-serif (Titillium Web) for authority, extrabold sans (Manrope) for utility — never mixed within a single content role
- Full-radius pill shapes on all interactive elements — buttons, chips, badges, inputs
- Soft diffuse warm shadows signal interactivity and containment, not decoration — sections are flat by default
- Two-audience architecture: parents (coral, warm-organic) and adults (forest green, purposeful-focused) share colors but have distinct hero personalities

## 2. Colors: The Adapted Brand Palette

Five expressive hues from BrainFit's PMS library, adapted for web contrast, plus a neutral stack grounded in warm espresso.

### Primary
- **Coral Warmth** (`#f5927e`): The main brand accent. PMS 1505 adapted toward pink-orange for softer web contrast. Used on the main-page hero CTA, form submit button, badge borders, and the LogoMark background. Never used as a plain page background.
- **Forest Authority** (`#164c35`): Deep forest green. The adult hero section background on `/yetiskinler`. Signals expertise and focused growth without clinical coldness. Also appears as a leaf illustration stroke.

### Secondary
- **Amber Energy** (`#fcbf48`): Golden amber, close to PMS 7548. The accent color inside forest green contexts — adult kicker text, adult primary CTA button, and glass-card label text. Also drives the hero underline SVG animation and the `::selection` color across the site.
- **Pale Sunshine** (`#fcea96`): Soft version of amber. Used for the `::selection` highlight, trust chips on light backgrounds, and illustration accents.

### Tertiary
- **Sky Curiosity** (`#aae8f6`): Adapted from PMS 299. Appears in squiggle decorations, trust-chip icons, and leaf illustration fill. A breath of open air inside warm sections.
- **Lime Growth** (`#d9f8a8`): Adapted from PMS 361. Illustration accent (leaf secondary fill, wave band). Signals organic growth without the full saturation of PMS 361.
- **Lavender Focus** (`#9b66f4`): Adapted from PMS 233. Used in the dotted-path hero animation and plant illustration on the main page. One purposeful appearance per section — never repeated.

### Neutral
- **Canvas** (`#faf9f5`): Page background. Warm near-white with the merest hint of warmth — enough to feel human, not enough to read as beige.
- **Paper** (`#f4f1eb`): Elevated surface background for containers that need subtle lift above canvas.
- **Ink** (`#241d18`): Primary text color. Warm near-black, not pure black — the brown lean matches the brand's espresso base.
- **Matte** (`#514236`): Mid-tone warm brown for secondary headings and supporting copy.
- **Muted Brown** (`#9b745f`): Tertiary and de-emphasized text. Always verify 4.5:1 contrast against its background at the specific size and weight used.
- **Espresso** (`#160a08`): The deepest ink in the system. Used as button background for the primary pill button, and as text color on amber and cream button surfaces.
- **Footer Charcoal** (`#242424`): Footer background. Closest equivalent to PMS Cool Gray 11 in the digital system.

### Named Rules
**The Saturation Adaptation Rule.** The PMS brand colors (1505, 7548, 233, 299, 361) are always used at adapted-for-web saturation. Never reach for the full PMS value in a digital context — they compete too aggressively at screen resolution. Preserve hue identity, not saturation intensity.

**The Single Surface Rule.** Coral, forest green, and amber are accent and context colors, not page-level backgrounds. Coral appears on components (buttons, form submit, badges). Forest green appears on the adult hero section only. Amber appears as accent text and CTA within forest green contexts only. A section with a plain coral or amber background outside these designated uses is a violation.

## 3. Typography

**Display Font:** Titillium Web (with Arial, sans-serif)
**Body Font:** Manrope (with Manrope Fallback, Arial, sans-serif)

**Character:** Titillium Web brings structured authority — its geometric construction and weight 700 give headings a confident, purposeful clarity. Manrope at weight 800 brings the utility register: concise labels, button copy, and form hints that are legible and unambiguous. The pairing works because both are humanist sans-serifs occupying distinct weight and optical registers: Titillium Web is architectural and decisive; Manrope is functional and assertive.

### Hierarchy
- **Display** (weight 700, `clamp(42px, 5.6vw, 76px)`, line-height 0.94): Hero headlines only. `text-wrap: balance` always applied. Maximum 16ch per line. The longer adult hero headline uses a `64px` cap to preserve its measure while remaining above the section tier at every breakpoint.
- **Headline** (weight 700, `clamp(36px, 4.4vw, 60px)`, line-height 0.96): Section-level headings (`.section-title`). Titillium Web. This tier always remains smaller than the hero display tier at every breakpoint.
- **Title** (weight 700, `clamp(32px, 3.7vw, 50px)`, line-height 1): Mid-section headings (`.mid-section-title`). Titillium Web. Tighter ceiling keeps it subordinate to section headlines.
- **Compact title** (weight 700, `clamp(22px, 2.1vw, 28px)`, line-height 1.12): Card, process, form, and detail headings (`.compact-title`). Titillium Web. Manrope never carries semantic h1–h3 roles.
- **Body** (weight 400, 16–18px, line-height 1.7–1.85): Paragraph copy in Manrope. Max 65ch line length. Prose sections use 18px/1.85 (`.prose-brainfit`); hero subtext and short-form body use `clamp(16px, 1.7vw, 19px)`.
- **Label** (weight 800, 11–12px, letter-spacing 0.12–0.14em, all-caps): Kicker text, badge copy, card metadata. Always Manrope extrabold. Never applied to body-length copy.

### Named Rules
**The Persona Inversion Rule.** Titillium Web carries authority (headings, display sizes, card numeric values). Manrope carries utility (body, labels, buttons). They do not swap. A Manrope heading or a Titillium Web button label is a violation — it blurs the two voice registers and weakens the entire hierarchy.

**The Weight Anchor Rule.** Body Manrope is weight 400 in prose, weight 600–700 in description copy, weight 800 in labels and all interactive copy. The jump from 400 to 800 is the signal; 500 and 600 are transitional only, never used as a primary weight in a visible role.

## 4. Elevation

This system uses a **soft-and-intentional** shadow strategy: depth appears only in response to interactivity or structural separation, never as decoration. Page sections are flat by default. Shadows are warm-tinted using the espresso base (`rgba(22,10,8,…)` or `rgba(36,29,24,…)`), so they feel like materials under warm ambient light rather than neutral grey drop effects.

The adult hero section overrides this rule in a self-contained way: its forest green backdrop makes espresso shadows invisible, so shadows inside `.v4` use green-tinted or transparent-white tinting. This override is section-scoped to `.v4` only.

### Shadow Vocabulary
- **Form Card** (`0 30px 80px rgba(22,10,8,0.18)`): The heaviest shadow in the system. Used only on the white form card inside the coral form section. Signals the primary action surface.
- **Section Card** (`0 34px 90px rgba(36,29,24,0.15)`): For prominent image cards and hero image containers. Slightly lighter than Form Card.
- **Floating Card** (`0 18px 40px rgba(36,29,24,0.12)`): Trust chips, stat overlays, and layered content cards.
- **Header Ambient** (`0 10px 24px rgba(36,29,24,0.06)`): The lightest level. Used on the nav pill and inline badge elements.
- **Adult CTA Glow** (`0 14px 36px rgba(252,191,72,0.3)`): An amber-matched glow under the `.v4-cta-p` button in forest green context only. Not used elsewhere.

### Named Rules
**The Flat-By-Default Rule.** Sections sit flat on canvas. Shadows appear on contained components (cards, buttons in elevated states, the form container). A section wrapper with a shadow is always wrong; a card within a section with a shadow is always contextual.

## 5. Components

**Philosophy:** Rounded and confident. Every interactive surface has a full-radius pill or generously curved corner (28–34px on cards). The roundness signals approachability without infantilizing. The system is never sharp-cornered.

### Buttons

- **Shape:** Full pill (`9999px` radius) on all buttons, without exception.
- **Primary (main page, coral):** Fill `#f5927e`, espresso text `#160a08`, `min-height: 52px`, `padding: 0 28px`. Shadow: `0 18px 36px rgba(245,132,110,0.24)`. Hover: `translateY(-1px)`, fill shifts to `#f99f8d`. The dark label keeps the control comfortably above WCAG AA contrast.
- **Primary (adults page, amber):** Fill `#fcbf48`, text `#160a08`, `min-height: 52px`. Shadow: `0 14px 36px rgba(252,191,72,0.3)`. Hover: `translateY(-2px)`, fill `#fdd060`. Used inside forest green context only.
- **Ghost (adult secondary):** Transparent fill, `border: 1.5px solid rgba(255,255,255,0.18)`, text `rgba(255,255,255,0.68)`, `min-height: 52px`. Hover: `border-color: rgba(255,255,255,0.38)`. Inside forest green only.
- **On-Coral:** Fill `#faf9f5` (canvas), text `#160a08`. `min-height: 48px`. Hover: `background: #fff`. Used for CTAs placed inside any coral-background surface. This is the only safe button choice on coral.
- **Arrow Icon Behavior:** All CTA links use the `arrow-shift` class — the `ArrowUpRight` icon translates +4px on hover. This is the universal forward-navigation motion cue and must never be removed.

### Chips

- **Trust Chip (light context):** White pill (`bg-white`, `rounded-full`), Manrope extrabold 13px, text `#241D18`, colored icon inline (sky `#aae8f6`). Shadow: `0 10px 24px rgba(36,29,24,0.06)`. Appears in hero section proof strips.
- **Forest Chip (dark context):** Semi-transparent pill (`background: rgba(255,255,255,0.07)`, `border: 1px solid rgba(255,255,255,0.12)`). Text `rgba(255,255,255,0.52)`. Manrope 12px weight 700. Used exclusively inside forest green hero.

### Cards / Containers

- **Corner Style:** Large cards: 34px. Image cards: 28px inner radius, 34px outer. Info overlays: 22–26px. Nav pill: 30px bottom / 18px top (asymmetric softness).
- **Background:** White for primary cards inside colored section backgrounds. Canvas (`#faf9f5`) for default page containers.
- **Shadow Strategy:** Always one of the four named levels from Elevation. Never a one-off custom shadow value.
- **Border:** Thin line border (`1px solid rgba(36,29,24,0.16)`) on input fields only. Cards rely on shadow for separation — no stroke borders on cards.
- **Internal Padding:** Form card: `20px` → `28px` at `md`. Image overlay: 18–20px. Stat card: 16–20px.

### Inputs / Fields

- **Style:** Radius `18px`. Background `#FEF9F5` (warm near-white). `border: 1px solid rgba(36,29,24,0.16)`. `min-height: 52px`. Manrope 16px weight 700.
- **Focus:** Native outline with `outline-color: var(--coral)`, `outline-offset: 4px`.
- **Status (after submit):** Success: `background: #F0F7F2`, `color: #1B4332`. Error/warning: `background: #FFF0D7`, `color: #8C5038`.
- **Placeholder text:** `color: rgba(36,29,24,0.68)` at weight 700 meets 4.5:1 on `#FEF9F5`. Do not lighten further.

### Navigation

- **Style:** Floating pill nav with asymmetric radii (`rounded-b-[30px] rounded-t-[18px]`). Background: `rgba(255,255,255,0.95)` with `backdrop-filter: blur`. Max-width matches `.inner` container.
- **Logo mark:** SVG circle (coral fill, espresso inner star, yellow center ring) — never altered.
- **Links:** Manrope extrabold, `color: var(--ink)`. Audience-aware (different copy for children vs adults page).
- **CTA pill (`.header-cta`):** Coral fill `#f5846e`, espresso text, pill shape, `min-width: 172px`. Hidden below `640px`.
- **Mobile:** Header CTA hides below 640px; inline `.hero-mobile-cta` in the hero handles CTA on mobile.

### Audience Goal Card (Signature Component)

A coral-background card (`#F5846E`) inside the main landing page's audience concern section. Contains an audience concern heading in Titillium Web, a Manrope description, and a cream CTA button (`.cta-on-coral`). The CTA inside this card must always be `.cta-on-coral` — the espresso pill button and coral primary button both fail contrast against a coral background.

### Adult Hero Section (Signature Component)

The `.v4` section on `/yetiskinler`. Self-contained namespace: all child classes are prefixed `.v4-*`. Contains: amber kicker label, Titillium Web display h1 (white, max 16ch), muted-white subtext, amber primary CTA (`.v4-cta-p`), ghost secondary CTA (`.v4-cta-s`), and feature chips (`.v4-chip`). Right column: full-bleed image card (`.v4-img-inner`) with gradient overlay and a frosted-glass info card (`.v4-img-card`) at bottom. All shadows inside `.v4` are green-tinted or transparent-white. The `.v4-*` namespace must not be applied outside the `.v4` parent.

## 6. Do's and Don'ts

### Do:
- **Do** use `.cta-on-coral` (canvas fill, espresso text) for any CTA inside a coral-background element. The espresso pill button and coral primary button both fail contrast on coral — this is the only safe option.
- **Do** apply `text-wrap: balance` to all h1–h3 elements to prevent awkward orphan words on the last line.
- **Do** keep Titillium Web strictly at `font-weight: 700` for display use. This weight is what the design system is calibrated to; lighter weights lose authority.
- **Do** use warm shadow tinting (`rgba(22,10,8,…)` or `rgba(36,29,24,…)`) not neutral grey. The warmth of shadows is brand character, not an accident.
- **Do** keep all interactive touch targets at `min-height: 44px` minimum (WCAG 2.5.5). Form inputs use `min-h-13` (~52px); buttons use `min-height: 52px`.
- **Do** preserve the two audience personas: parents (coral, warm, organic) and adults (forest green, purposeful, focused). They share the palette family; they do not share hero patterns.
- **Do** test `muted-brown` (`#9b745f`) at every font size and weight it appears at — it sits near the 4.5:1 boundary against canvas at small sizes.
- **Do** respect `prefers-reduced-motion` — all animated elements (Reveal, path animations, StarBurst) must fall back to instant state or crossfade.

### Don't:
- **Don't** use sterile hospital aesthetics, cold-white backgrounds, or clinical grey typography stacks. PRODUCT.md explicitly prohibits this.
- **Don't** use childish edtech visual patterns: pastel-only palettes, emoji-adjacent rounded icon sets, playful outlined illustrations that look like a children's app.
- **Don't** use aggressive sales funnel patterns: countdown timers, urgency badges, pop-up modals, fear-based parenting copy.
- **Don't** build sections using repeated identical icon cards (icon + heading + text × 6). PRODUCT.md names this as a template pattern to avoid.
- **Don't** use exaggerated metrics ("10x focus boost", "+500% memory improvement") or vague transformation promises. These violate the brand's clinical credibility positioning and are explicitly prohibited by PRODUCT.md.
- **Don't** use generic wellness-coach language: "transform," "unlock your potential," "supercharge," "optimize," "seamless," "empower." Pick a specific cognitive function and describe it literally.
- **Don't** use gradient text (`background-clip: text` + gradient fill). This is an absolute system ban — decorative, never meaningful.
- **Don't** use side-stripe border cards (`border-left: 4px solid [accent]` as a decoration). Cards in this system use shadow-based depth only.
- **Don't** break the `.v4-*` class namespace by applying adult hero styles outside a `.v4` parent, or by reusing the forest green background (`#164c35`) as a section background outside the designated adult hero.
- **Don't** add an unassigned third font family. The system intentionally uses only Titillium Web and Manrope; a new decorative face requires a documented role before it is loaded.
- **Don't** make both pages feel identical. The shared color palette is a family, not a constraint. Parents page should feel warm and reassuring; adults page should feel purposeful and forward-moving.
