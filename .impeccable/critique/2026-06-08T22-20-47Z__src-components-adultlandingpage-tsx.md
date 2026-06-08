---
target: /yetiskinler
total_score: 29
p0_count: 0
p1_count: 2
timestamp: 2026-06-08T22-20-47Z
slug: src-components-adultlandingpage-tsx
---
**Design Health Score**

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Selected audience concern is reflected in the hero and form; form status exists, but field-level validation is minimal. |
| 2 | Match System / Real World | 4 | Adult concerns, check-up boundaries, and no-diagnosis language match the user's real decision context well. |
| 3 | User Control and Freedom | 3 | Users can jump by nav and choose concern paths, but the sticky header keeps the mobile menu button visible on desktop and adds visual noise. |
| 4 | Consistency and Standards | 3 | Consistent palette and components, but repeated badge-plus-heading-plus-card patterns become too predictable. |
| 5 | Error Prevention | 2 | Required fields exist, but phone and age inputs provide little constraint, guidance, or inline prevention. |
| 6 | Recognition Rather Than Recall | 3 | Audience cards and repeated proof chips help recognition; the long page still asks users to remember why they came by the final form. |
| 7 | Flexibility and Efficiency | 2 | Primary CTA is available, but the page offers many same-weight routes before the form and no shortened path for decided visitors beyond anchors. |
| 8 | Aesthetic and Minimalist Design | 2 | Warm and credible, but the section rhythm leans into AI-template repetition: badges, rounded cards, icons, shadows, centered headings. |
| 9 | Error Recovery | 3 | Submit error and success messages exist; recovery could be stronger with field-specific feedback and alternate contact path. |
| 10 | Help and Documentation | 4 | FAQ, check-up steps, boundaries, and report preview answer the right anxieties. |
| **Total** | | **29/40** | **Good foundation, conversion and distinctiveness need work** |

**Anti-Patterns Verdict**

**LLM assessment**: This does not look broken or careless, but it does show AI-generation tells: repeated tiny badge labels above nearly every section, many rounded icon/card grids, soft blobs/squiggles, and a long sequence of sections with similar hierarchy. The adult positioning is credible, yet the visual grammar is more template-polished than memorable. The most distinctive moment is the hero report/goal card; the rest becomes a familiar landing-page cascade.

**Deterministic scan**: `detect.mjs --json src/components/AdultLandingPage.tsx` returned `[]`. No deterministic anti-pattern findings were reported.

**Visual overlays**: No reliable user-visible overlay is available. The local dev server started successfully, but browser automation was unavailable in this session: no Playwright/Puppeteer package is installed and no Browser navigation/screenshot API was exposed by the available tools.

**Overall Impression**

The page is strategically sound and unusually careful about boundaries: it avoids medical claims and makes the check-up feel low-risk. The biggest opportunity is to reduce the template cadence and make the adult page feel more like a calm, credible assessment experience rather than a long marketing checklist.

**What's Working**

- The hero directly names adult goals: focus, memory, learning, performance. That matches the confirmed product strategy and avoids child-page leakage.
- The trust-boundary section is a strong credibility move. "Ne yapıyoruz / Ne yapmıyoruz" supports the WCAG/ethical trust goal and reduces overclaim risk.
- The report preview makes an abstract service concrete. Showing the output, even with a clear "not real data" note, helps users understand the appointment value.

**Priority Issues**

**[P1] Repeated landing-page grammar weakens brand distinctiveness**
Why it matters: Sections repeatedly use a badge, large centered heading, short paragraph, and rounded cards. That makes the page feel generated even though the content is good.
Fix: Keep the strongest two card grids, then vary the rest: turn the check-up journey into a horizontal timeline, the programs into a comparison/decision module, and the FAQ into a quieter editorial support block.
Suggested command: `/impeccable layout /yetiskinler`

**[P1] The funnel is too long before the form**
Why it matters: A decided adult user sees audience cards, steps, report, programs, boundaries, metrics, testimonial, FAQ, then the form. The page reassures, but it also delays action.
Fix: Add a persistent low-noise CTA after the hero or collapse mid-page proof into a shorter decision path: "Know your goal? Book now. Still comparing? Read the 45-minute flow."
Suggested command: `/impeccable distill /yetiskinler`

**[P2] Adult credibility is undercut by generic proof**
Why it matters: "BrainFit Karşıyaka Katılımcısı" and "Google Müşteri Puanı: 4.6/5" read as placeholders unless supported by named source framing, review count, or a more transparent testimonial convention.
Fix: Either make proof specific and verifiable, or make it deliberately anonymous: "Anonim yetişkin katılımcı, odak programı sonrası görüşme notu." Add review count/source only if real.
Suggested command: `/impeccable clarify /yetiskinler`

**[P2] Desktop header carries a mobile menu affordance**
Why it matters: The hamburger button is visible on desktop while the full nav is also visible. It adds a redundant control and slightly lowers perceived polish.
Fix: Hide the menu button at `lg` and above, or make it a deliberate compact-menu pattern across all sizes.
Suggested command: `/impeccable polish Header`

**[P2] Form prevention is basic for a high-value lead**
Why it matters: Required fields catch empties, but phone and age fields allow low-quality input; errors are generic. Users can fail without knowing exactly what to fix.
Fix: Add field-level validation, examples, `autocomplete`, clearer phone format tolerance, and error text tied to the specific field.
Suggested command: `/impeccable harden /yetiskinler form`

**Persona Red Flags**

**First-time adult seeking help**: The page answers concerns well, but the long middle sequence may feel like homework. After choosing an audience card, the selected concern is reflected later, yet the user still has to traverse many modules before the form.

**Skeptical professional**: The "does not diagnose" boundary helps, but the generic testimonial and unsupported Google rating can trigger doubt. This persona needs fewer decorative claims and more precise proof.

**Mobile, time-constrained visitor**: The content is likely readable, but the number of full sections before conversion is high. The form should feel closer, or the page should offer a compact "book now" path once intent is clear.

**Minor Observations**

- The adult page uses Fraunces/Playfair-style display choices already present in the brand. Identity preservation is fine, but new design work should avoid amplifying editorial-seriffed tropes.
- The repeated all-caps badges are acceptable one or two times, but not as the default section opener.
- The hero's selected-goal interaction is useful; it could do more work by shortening the rest of the page based on the chosen path.

**Questions to Consider**

- What proof would make a skeptical adult believe this without adding more sections?
- Can the page convert a decided visitor in two scrolls while still supporting a cautious visitor below?
- Which sections would still be necessary if the selected concern actively shaped the rest of the page?
