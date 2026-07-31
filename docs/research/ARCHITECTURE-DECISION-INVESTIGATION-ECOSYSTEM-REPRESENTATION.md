# Architecture Decision Investigation — Representation of Framework Ecosystem Architecture

| Attribute | Value |
| --------- | ----- |
| Document | Architecture Decision Investigation — Representation of Framework Ecosystem Architecture |
| Classification | Informative / Research (investigation only) |
| Status | Complete — representation recommendation recorded |
| Framework baseline | Framework v0.2.0; Runtime Foundation M2 |
| Related | [Design Investigation](./DESIGN-INVESTIGATION-ECOSYSTEM-AND-GOVERNANCE-MODEL.md); [Engineering Review](./ENGINEERING-REVIEW-ECOSYSTEM-AND-GOVERNANCE-MODEL.md) |
| Kind | Architecture decision investigation — **not** a Framework Asset, ADR, Method amendment, governance rule, or implementation |

**This investigation decides representation shape only.** It does not create
Framework Assets, Governance rules, Community rules, ADRs, roles, processes, or
implementation plans. It does not design diagrams beyond conceptual examples.
It does not reopen whether the ecosystem concern exists.

If this document and an Accepted ADR or labelled Framework Asset appear to
disagree, the Accepted ADRs and labelled Framework Assets are authoritative.

---

## Executive Summary

Prior work established that the Framework already spans multiple adjacent
domains and that a **thin** architectural representation is justified. The
remaining question is **how to represent** that architecture with the least
additional structure and **without expanding the Normative surface**.

**Recommended representation: Option B** — a single thin **Informative-only**
architectural overview page that is **not** an `FA-###` Asset and **not** an
ADR.

| Choice | Why |
| ------ | --- |
| Prefer **B** over **A** | [FA-003 (Framework Overview)](../FA-003-FRAMEWORK-OVERVIEW.md) is classified **Normative Framework**. Placing ecosystem-boundary content there risks force-inheritance and Normative-surface expansion even when labelled Informative. |
| Prefer **B** over **C** | A dedicated “Ecosystem Architecture / Governance Model” document adds naming gravity and maintenance surface beyond what is needed to make boundaries explicit. |
| Prefer **B** over pure **D** (pointer constellation) | README-only / pointer-only clarification is smaller, but README is non-authoritative ([FA-001](../FA-001-NORMATIVE-LABELLING-CONVENTION.md)) and too weak as the sole architectural representation. |

Option D (stepwise hybrid) remains a valid **sequencing** strategy: ship B only
when clarify-in-place pointers prove insufficient — but the **target
representation** should be B, not a Normative Asset amendment and not a heavy
named Ecosystem Model.

This investigation does **not** author that page.

---

## Decision Question

How should the Framework explicitly represent its ecosystem architecture while
introducing the least possible additional structure?

**In scope:** representation vehicle, force, discoverability, and non-goals.

**Out of scope:** whether the concern exists; role definitions; processes;
Research Program institutions; governance rules; Asset/ADR creation.

---

## What must be represented (minimum content intent)

Representation needs only enough to make the **implicit boundary map**
explicit. Conceptual example (not a prescribed diagram or vocabulary freeze):

```text
Framework product (Method / Core / Assets / Project Integration)
        │
        │  adopts / pins / invokes
        ▼
Consuming projects (Decision Owner local)
        │
        ├── Stewardship of the Framework product
        │     (repository construction governance; releases; claim honesty)
        ├── Validation / evaluation activity
        │     (Alpha evaluation; Reference Implementations as Informative)
        └── Informal Community
              (optional social participation — not adoption)
```

**Non-goals of any representation:**

- no role ladders
- no participation processes
- no Community or Research institutions
- no Normative Method/Core changes
- no `FA-###` for ecosystem domains or roles

---

## Alternatives

### Option A — No new artefact; clarify existing Framework Overview

Amend [FA-003 (Framework Overview)](../FA-003-FRAMEWORK-OVERVIEW.md) (and
possibly only cross-links elsewhere) to state adjacent-domain boundaries inside
the existing Overview map.

**Shape:** zero new files; content lives in the established human-first map.

**Force reality:** FA-003’s document Classification is **Normative Framework**,
with some Informative sections today. Ecosystem text would need explicit
`*Informative.*` section labelling ([FA-001](../FA-001-NORMATIVE-LABELLING-CONVENTION.md)
rule 2), against a Normative document default (rule 3).

---

### Option B — Single architectural overview page (Informative only)

Add one official Framework document that is:

- **Informative** (or Informative / Reference) overall
- **not** an `FA-###`
- **not** an ADR
- thin: domains, non-goals, pointers to existing artefacts
- discoverable from README documentation map and a single link from FA-003

**Shape:** matches existing non-Asset Informative packaging pattern (for example
Invocation Guide, Alpha Adoption Guide, whitepaper) without entering FAIS
numbering.

**Naming posture (constraint, not a title decision):** avoid institutional
titles such as “Governance Model,” “Research Program,” or “Community Charter.”
Prefer neutral map language (for example architecture context / adjacent
domains / boundary map). Exact title is left open.

---

### Option C — Dedicated Framework Ecosystem Architecture document (Informative)

Publish a distinctly named Ecosystem Architecture (or Ecosystem & Governance
Model) Informative document as the home for this concern.

**Shape:** one new artefact with explicit ecosystem branding and likely room to
grow (RI placement, stewardship domains, participation posture, etc.).

---

### Option D — Stepwise hybrid / pointer constellation (identified in investigation)

Two related sub-variants:

| Sub-variant | Description |
| ----------- | ----------- |
| **D1 — Pointer constellation only** | No new page and no FA-003 domain section. Strengthen README documentation map and existing Informative pointers (Alpha Guide, M2 Declaration, whitepaper RI chapter) so “what is not Framework product” is easier to find. |
| **D2 — Stepwise** | Start with D1 (or a minimal FA-003 link-only tweak). Promote to Option B only if discoverability/clarity remain insufficient. Never jump to Option C unless B proves too cramped *and* evidence shows need. |

Option D is the “least structure now” path; it is evaluated as a representation
strategy, not as an implementation plan.

---

## Trade-off Analysis

Evaluation key: **H** high / favourable, **M** medium, **L** low / unfavourable
for the criterion as stated.

### Clarity

| Option | Rating | Notes |
| ------ | ------ | ----- |
| A | M | Clear if readers already use FA-003; ecosystem content competes with product-layer map already in Overview |
| B | H | One purpose, one page, one force label — highest clarity per unit content |
| C | H | Clear, but clarity comes with stronger “this is a thing” institutional signal |
| D1 | L–M | Clarity depends on readers assembling multiple existing docs; architecture remains implicit |
| D2 | M→H | Clarity improves when promoted to B; initially same as D1 |

### Discoverability

| Option | Rating | Notes |
| ------ | ------ | ----- |
| A | H | FA-003 is already the intended map entry after README |
| B | H | High **if** linked from README documentation map + FA-003 authority/navigation |
| C | H | Same link needs as B; name may be more searchable, also more loaded |
| D1 | M | README helps humans; weak as architectural authority (README non-authoritative) |
| D2 | M→H | Improves when B is introduced |

### Maintenance cost

| Option | Rating | Notes |
| ------ | ------ | ----- |
| A | M | Edits a core Normative Asset; dual-care of force labels; Overview churn affects Baseline pin content kinds if Overview is in pin set |
| B | M | One extra doc to keep aligned with Alpha/RI/README maturity wording; isolated from Normative Asset churn |
| C | L | Higher growth/maintenance temptation; more surfaces to sync |
| D1 | H | Lowest file/maintenance cost; highest re-litigation cost when boundaries are debated |
| D2 | H→M | Low initially; converges to B’s cost if promoted |

### Risk of governance creep

| Option | Rating | Notes |
| ------ | ------ | ----- |
| A | M–L | Normative document gravity; Informative sections easily misread as Framework law |
| B | M | Contained if thin and force-labelled; creep risk rises if page accretes roles/processes |
| C | L | Name alone invites model expansion (“Governance,” “Ecosystem Architecture”) |
| D1 | H | Least new ceremony; creep risk is continued ambiguity, not new bureaucracy |
| D2 | H→M | Good creep control if promotion gate is real |

### Alignment with Framework philosophy

| Option | Rating | Notes |
| ------ | ------ | ----- |
| A | M | Minimal process ✓; Normative-contact risks Proportionate Ceremony / force hygiene |
| B | H | Minimal process ✓; Evidence-first (boundaries only) ✓; Human Authority untouched ✓; Tech neutrality ✓ |
| C | M | Compatible only while thin; naming conflicts with Progressive Commitment / minimal process |
| D1 | M | Minimal process ✓; weak evidence-channel clarity if debates continue undocumented |
| D2 | H | Best philosophy fit as a *sequence*; Progressive Commitment applied to documentation |

### Normative impact

| Option | Rating | Notes |
| ------ | ------ | ----- |
| A | L | Touches a **Normative Framework** Asset; even Informative sections change a Normative document’s surface area and pin-set contents |
| B | H | **No** Normative Method/Framework expansion if kept non-Asset Informative; no ADR |
| C | H | Same force potential as B; higher social Normative *perception* risk |
| D1 | H | No Normative Asset edit required if limited to README / already-Informative docs |
| D2 | H | Preserves Normative surface if FA-003 body is not expanded |

### Long-term scalability

| Option | Rating | Notes |
| ------ | ------ | ----- |
| A | M | FA-003 will become crowded as Assets and packaging grow; wrong long-term home for adjacent-domain map |
| B | H | Can remain a stable thin map; excess content can be refused or deferred |
| C | M–H | Scales as a home, but also scales as an attractor for process content |
| D1 | L | Does not scale as explicit architecture; re-derives boundaries from scattered text |
| D2 | H | Scales by promotion to B without premature C |

### Summary matrix

| Criterion | A | B | C | D1 | D2 |
| --------- | - | - | - | -- | -- |
| Clarity | M | **H** | H | L–M | M→H |
| Discoverability | **H** | **H** | H | M | M→H |
| Maintenance cost (favourable = low cost) | M | M | L | **H** | H→M |
| Governance-creep resistance | M–L | M | L | **H** | H→M |
| Philosophy alignment | M | **H** | M | M | **H** |
| Normative-impact safety | L | **H** | H | **H** | **H** |
| Long-term scalability | M | **H** | M–H | L | **H** |

---

## Recommended Representation

**Primary recommendation: Option B** — one thin Informative-only architectural
overview page (non-Asset, non-ADR).

**Sequencing note:** Option **D2** may be used as a *publication sequence*
(pointers first, then B) without changing the target representation. D1 alone
is not the recommended durable representation.

**Not recommended as target:**

- **Option A** as primary home — Normative-surface contact with FA-003
- **Option C** — excess naming/structure for current need

---

## Justification

### 1. Success criterion: make implicit architecture explicit

Option B gives a single citable Informative map of adjacent domains and
non-goals. That is enough to prevent the category errors identified earlier
(Community/Research mistaken for Assets; RI mistaken for Norms; steward
mistaken for Decision Owner) without designing institutions.

### 2. Success criterion: do not expand Normative surface

| Vehicle | Normative surface effect |
| ------- | ------------------------ |
| FA-003 amendment (A) | Edits a Normative Framework Asset; force-inheritance risk ([FA-001](../FA-001-NORMATIVE-LABELLING-CONVENTION.md) rule 3) |
| Informative non-Asset page (B) | Adds Informative surface only; matches Invocation/Alpha/whitepaper pattern |
| Dedicated Ecosystem Model doc (C) | Informative force possible, but social weight approximates a governance artefact |

Option B is the smallest representation that is both **explicit** and
**Normative-safe**. Option D1 is smaller but not sufficiently explicit as
architecture. Option A is explicit but not Normative-safe enough.

### 3. Least additional *architectural* structure

“Least structure” is not identical to “fewest files.”

- A new thin Informative page is one file, zero Normative layers, zero roles,
  zero processes.
- Amending FA-003 adds no file but couples ecosystem boundaries to Core Overview
  Normative packaging — more structural entanglement, not less.

### 4. Alignment with prior Engineering Review

The Engineering Review preferred weighing clarify-in-place before a dedicated
*Ecosystem & Governance Model*. Option B satisfies that intent **without**
adopting Option C’s institutional name: it is an architectural overview page,
not a governance-model publication. Clarify-in-place (A/D1) remains useful for
discoverability pointers, not as the sole home.

### 5. Existing documentation roles stay coherent

| Existing artefact | Stays responsible for |
| ----------------- | --------------------- |
| FA-003 | Framework product map (Method/Core/Integration) |
| ADRs / FA-002 | Normative architecture and Method |
| Alpha Adoption Guide | Temporary evaluation packaging |
| Whitepaper RI chapter / M2 | RI Informative posture already stated |
| FAIS / allocation / M2 | Repository construction stewardship |
| **New B page** | Adjacent-domain boundary map and non-goals only |

---

## Migration impact

This investigation **does not migrate anything**. If Option B were later
accepted for authoring, expected impact would be:

| Area | Impact |
| ---- | ------ |
| Normative Method / Core / Assets | **None required** for representation itself |
| FA-003 | Optional **one-line** Informative pointer only (discoverability); avoid relocating product Overview content |
| README documentation map | Add one Informative row pointing to the page |
| Alpha / Invocation / whitepaper | Cross-link only; no behaviour change |
| Adopters / Decision Owners | **No** new obligations |
| Pin / Baseline | Only if the Informative page is later included in a Baseline’s informative set — not required to “use the Framework” |
| Community / Research | **No** new structures |

**Non-migration:** no role definitions, no process introductions, no Asset IDs,
no ADR.

---

## Open Questions

Left open for later gated work (not answered here):

1. **Exact title** of the Option B page (must stay non-institutional).
2. **Folder / identity scheme** for non-Asset Informative architecture pages
   (alongside adoption/, whitepaper/, invocation — without FAIS IDs).
3. Whether FA-003 receives only a link, or also a one-sentence Informative
   boundary note.
4. Whether D2 pointer-first sequencing is required before authoring B, or B may
   be authored directly once approved.
5. How much domain vocabulary is permitted on the page without recreating the
   earlier “Research Program / role posture” naming gravity.
6. Whether an AIS Informative illustration is useful later — not required for
   representation decision.

---

## Final Recommendation

### Option B — single thin Informative architectural overview page

**Represent** Framework ecosystem architecture as:

1. **One** overview page
2. **Informative only** (never Normative Method / Normative Framework)
3. **Not** an `FA-###` Asset
4. **Not** an ADR
5. **Thin content:** adjacent domains, authority objects, non-goals, pointers to
   existing artefacts
6. **No** roles, processes, Community rules, Research institutions, or
   governance procedures
7. **Discovered** via README documentation map and a minimal FA-003 pointer

**Reject as target representation:** Option C.  
**Reject as primary home:** Option A (Normative-surface risk).  
**Allow as sequencing:** Option D2 (pointers → B).  
**Reject as durable architecture home:** Option D1 alone.

### Explicit non-actions (this investigation)

- No Framework Asset created or modified
- No Governance / Community rules
- No ADR
- No roles or processes defined
- No Option B page authored
- No diagrams beyond the conceptual example above

---

## Success criteria check

| Criterion | Result |
| --------- | ------ |
| Identify smallest representation that makes implicit architecture explicit | **Option B** (with D2 allowed only as sequence) |
| Without expanding Normative surface | **Satisfied by B** — Informative non-Asset page; A rejected as primary partly for this reason |
| No Assets / governance / roles / processes / ADRs from this investigation | **Satisfied** |

---

## End of Architecture Decision Investigation
