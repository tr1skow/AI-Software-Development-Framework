# AIS-000 — Architecture Illustration System

| Attribute | Value |
| --------- | ----- |
| Document | AIS-000 Architecture Illustration System |
| Type | Repository / documentation governance |
| Classification | Informative / Reference (governance) |
| Status | Draft — awaiting publication approval |
| Framework baseline | Framework 0.7 Alpha; Runtime Foundation M2 |
| Related | [FAIS](../governance/FRAMEWORK-ASSET-IDENTIFICATION-STANDARD.md); [FA-001](../FA-001-NORMATIVE-LABELLING-CONVENTION.md); Whitepaper; README |

This document is **repository and documentation governance**. It is **not** a
Framework Asset and **must not** receive an `FA-###` identifier. It is **not**
an Architecture Decision Record. It does **not** define Runtime behaviour,
Method, or capability semantics.

**If an AIS figure and an Accepted ADR or labelled Framework Asset appear to
disagree, the Accepted ADRs and labelled Framework Assets are authoritative.**
The illustration is corrected.

---

## 1. Purpose and ownership

**AIS-000 owns exactly one responsibility:**

> Define the visual communication system used to represent the AI Software
> Development Framework consistently across all documentation.

AIS defines **how** Framework concepts are illustrated.

AIS does **not** define Framework behaviour.

AIS does **not** introduce Runtime concepts.

AIS does **not** redefine Method.

AIS remains a **visual communication standard**.

| Distinct from | Why |
| ------------- | --- |
| Whitepaper | Narrative architecture; consumes AIS figures |
| Runtime | Behavioural model; AIS may depict it, never redefine it |
| Framework Assets | Product guidance and templates; AIS is not FA content |
| README | Landing page; may embed derived exports |
| Architecture (ADRs) | Decide what is true; AIS decides how it is drawn |

---

## 2. Permanent illustration principles

1. **Semantic stability** — Each visual element has exactly one semantic
   meaning throughout the Framework. Colours, arrows, icons, containers, and
   line styles must never change semantic meaning between diagrams.
2. **One idea per illustration** — Every published illustration should
   communicate one primary architectural idea. Prefer splitting complex
   figures over increasing complexity.
3. Simplicity over decoration.
4. Architecture before implementation detail.
5. Capability relationships before workflows.
6. Colour reinforces meaning; it never creates meaning alone.
7. Diagrams remain readable in monochrome.
8. Avoid tool-specific notation as Framework language.
9. Avoid UML unless it clearly helps (rare).
10. SVG is the canonical source format; PNG is derived for GitHub/README.
11. Accessibility and colour-blind friendliness are required.
12. Use exact Framework terminology (no synonym drift).
13. Informative diagrams must not look like Normative process law.
14. Captions state purpose and force; behavioural/spine figures state they are
    **not** a Runtime workflow when relevant.

---

## 3. Diagram taxonomy

Official categories (purpose-based):

| Category | Intent |
| -------- | ------ |
| **Architecture** | Layers, Method/Core, pin, Entry, durable structure |
| **Capability relationship** | Ownership, composition, feeds, non-overlap |
| **Runtime behavioural** | Invoke / compose / skip / interrupt / complete; teaching views |
| **Governance** | Precedence, Baseline, Policy vs Framework, Human Authority |
| **Document navigation** | README → guides → assets relationships |

**Discourage as Framework defaults:** process swimlanes and lifecycle stage
machines (high risk of workflow misreading). If used at all, they must be
Explicitly captioned as Informative teaching aids, not Runtime law.

**Human Authority** figures are a **Governance** subtype unless a dedicated
figure needs a Governance + HA focus label in metadata.

---

## 4. Visual language

### 4.1 Colour

Use a small semantic palette. Example roles (exact hex tokens may be refined
in later illustration packages without changing *roles*):

| Role | Use |
| ---- | --- |
| Framework | Framework-owned concepts (Method, Core, Assets under pin) |
| Project | Consuming-project concepts (Entry, Policy, outcomes) |
| Runtime | Runtime behavioural elements |
| Constraint | Stop, Human Authority, precedence bounds |
| Informative | Teaching-only views (e.g. Runtime Execution Spine as Informative) |
| Focus | Single accent for “subject of this figure” |

Colour never carries force alone. Normative vs Informative appearance uses
caption + border style (see §4.3).

### 4.2 Containers and boundaries

| Treatment | Meaning |
| --------- | ------- |
| Solid container | Durable architectural concept |
| Dashed container | Informative / teaching view |
| Nested containment | **contains** |
| Explicit frame labels | Framework vs Project vs Informative view |

### 4.3 Line and arrow styles (stable meanings)

| Style | Meaning |
| ----- | ------- |
| Nesting / containment border | **contains** |
| Dashed arrow | **references** / points to |
| Solid labelled arrow (“binds”) | **binds** (Classification → capabilities) |
| Open arrow labelled “feeds” | **feeds** |
| Shared “Runtime uses” solid arrow | **invokes** / **composes** / executes under binding |
| Constraint bar or double line | **constrains** |
| Break / interrupt mark labelled “Stop” | **interrupts** |
| Optional open specialisation arrow | **specialises** (e.g. Policy within invariants) |

**extends** reuses **specialises** or **references** — do not invent a third
glyph without updating this standard.

### 4.4 Icons, callouts, grouping

- Icons are optional and never icon-only meaning.
- No vendor logos as Framework symbols.
- Callouts are rare and never Normative force.
- Group by proximity and light fills; avoid nested card stacks.
- One focus highlight per figure maximum.

### 4.5 Labels, legends, version badges

- Labels use Framework terms: Effective Classification, Local Project Entry,
  Stop, Human Authority, Project Integration, Runtime Execution Spine, etc.
- Legend required when more than two relationship styles or more than three
  semantic colours appear.
- Optional badge: “as of Framework 0.7 Alpha” (or current baseline) — positioning
  only, not a maturity claim engine.

---

## 5. Relationship semantics summary

Unique visual treatment: contains, references, binds, feeds, constrains,
interrupts, specialises (optional).

Shared visual treatment: invokes / composes / executes-under-binding.

Always reinforce: **Effective Classification** decides what executes; diagrams
are not mandatory workflows.

---

## 6. Typography

| Item | Rule |
| ---- | ---- |
| Family | Neutral sans-serif suitable for SVG (generic sans acceptable) |
| Weights | Regular labels; semibold node titles; bold only for focus term |
| Title | `AIS-### — Title` above or beside the figure |
| Caption | Purpose + Informative / Reference force + anti-workflow note when needed |
| Minimum size | ≥12 px equivalent at intended display width |
| README PNG | Verify readability at ~800–1200 px width |

---

## 7. Layout

- Prefer an 8 px spacing grid; consistent alignment.
- Generous whitespace; one primary idea per figure (§2).
- If a legend would need more than six relationship types, split the figure.
- Multi-figure series preferred over one dense diagram.
- Cross-cutting constraints (**Stop**, **Human Authority**) appear as side
  bars or overlays — not as a final pipeline stage.

---

## 8. Accessibility

- Text/icon contrast: aim for WCAG AA against fills.
- Meaning via shape + label + line style, not hue alone.
- Monochrome / print proof before publication.
- Prefer SVG that remains legible on light backgrounds for README; dark-mode
  sites may invert carefully without redefining semantics.
- Every published figure needs short Markdown alt text (or adjacent textual
  equivalent).
- Captions live in document prose, not only inside the image.

---

## 9. Publication formats

| Format | Role |
| ------ | ---- |
| **SVG** | **Canonical** source |
| **PNG** | **Derived** for GitHub / README |
| diagrams.net / Draw.io, Figma | Allowed **authoring** tools if clean SVG export |
| Mermaid | Optional **derived** for trivial navigation maps only |
| Excalidraw | Sketch only → promote to AIS SVG before publication |
| PlantUML, PowerPoint | **Unsupported** as canonical source |

---

## 10. Naming and identification

Illustrations receive stable identifiers:

| ID | Role |
| -- | ---- |
| **AIS-000** | This standard (the illustration system) |
| **AIS-001+** | Individual published illustrations |

AIS IDs are **not** `FA-###` and do not use FAIS typed FA namespaces. They are
a separate illustration namespace.

Filename pattern (recommended):

```text
AIS-###-short-kebab-title.svg
AIS-###-short-kebab-title.png
```

Allocation is recorded in
[allocation-log.md](./allocation-log.md).

---

## 11. Repository structure

Durable layout:

```text
docs/
  illustrations/
    AIS-000-ARCHITECTURE-ILLUSTRATION-SYSTEM.md   ← this document
    allocation-log.md
    svg/          ← canonical published SVG
    png/          ← derived PNG
    source/       ← optional authoring sources (.drawio, etc.)
```

---

## 12. SVG metadata

Canonical SVG files should carry (or be accompanied by sidecar/README notes
containing) at least:

| Field | Example |
| ----- | ------- |
| AIS ID | AIS-001 |
| title | Framework architectural layers |
| Framework version | Framework 0.7 Alpha |
| illustration version | 1.0 |
| publication date | YYYY-MM-DD |
| status | Draft / Approved / Published / Deprecated |
| force | Informative / Reference |
| source | path under `source/` or “native SVG” |

Prefer SVG `<title>` / `<desc>` plus a short Markdown caption at the point of
use.

### Illustration changelog (optional, recommended)

*Documentation maintenance — does not replace Git history.*

For published illustrations, maintain a lightweight **Changes** record (in the
allocation log Notes, a short sidecar next to the SVG, or the caption block)
keyed to **illustration version**:

```text
Changes

v1.0
Initial publication

v1.1
Accessibility improvements

v1.2
Terminology alignment
```

This is optional but recommended for maintainer traceability. Git remains the
authoritative history of file contents.

---

## 13. Illustration lifecycle

*Documentation governance — not Runtime.*

Production flow (how an illustration is made):

```text
Sketch
  → Review
  → Approved SVG
  → Published
  → Referenced
```

| Stage | Meaning |
| ----- | ------- |
| Sketch | Exploratory; not cited as Framework visual |
| Review | Checked against this standard and the checklist (§16) |
| Approved SVG | Canonical file accepted under AIS rules |
| Published | Placed under `svg/` (+ derived `png/`); allocation log updated |
| Referenced | Linked from README, whitepaper, guides, or presentations |

This production flow is separate from the illustration’s **publication status**
(§14).

---

## 14. Illustration status model

*Publication status of the illustration itself — not the production flow.*

| Status | Meaning |
| ------ | ------- |
| **Draft** | Work in progress; not ready for Framework documentation citations |
| **Approved** | Accepted under AIS rules; may not yet be linked from primary docs |
| **Published** | Canonical SVG (and derived PNG as needed) available for citation |
| **Deprecated** | Must not be used for new references; retained for history |

Record status in SVG metadata (§12) and in the
[allocation log](./allocation-log.md).

Do not silently reuse an AIS ID for a different semantic subject when
deprecating.

---

## 15. Hero Illustration

AIS-000 defines **criteria** for a Hero Illustration. It does **not** author
the illustration itself.

A **Hero Illustration** is a single primary figure that:

- communicates the Framework’s durable governance architecture at a glance;
- uses only AIS-stable semantics;
- remains Informative / Reference;
- is suitable for README / whitepaper first visual orientation;
- does not imply a mandatory workflow or production-ready kit.

Selection and drawing of any Hero Illustration are separate approved work.

---

## 16. Illustration review checklist

Before publication, confirm:

- [ ] Terminology matches ADRs / FAs / whitepaper / README (exact terms)
- [ ] Caption present (purpose + Informative / Reference)
- [ ] Legend present when needed
- [ ] One primary architectural idea
- [ ] Semantic stability respected (no reused glyphs with new meanings)
- [ ] Not readable as a mandatory Runtime workflow (unless explicitly a cautioned teaching aid)
- [ ] Monochrome readable
- [ ] Accessibility checked (contrast, non-colour cues, alt text)
- [ ] SVG valid and stored under `svg/`
- [ ] PNG generated under `png/` when needed for GitHub/README
- [ ] Metadata complete (§12)
- [ ] Allocation log updated
- [ ] Whitepaper terminology aligned (if referenced there)
- [ ] README terminology aligned (if referenced there)

---

## 17. Relationship to Framework documentation

```text
AIS-000 (this standard)
    │
    ├── AIS-00n illustrations (canonical SVG)
    │
    ├── README (derived PNG + links)
    ├── Whitepaper (figures + captions)
    ├── Alpha Adoption / Invocation guides
    ├── Framework Assets (rare teaching figures only)
    ├── Future presentations / website
    └── ADRs (may cite AIS figures; ADR remains authority)
```

---

## 18. Non-claims

This standard does **not**:

- define Runtime, Method, or capability behaviour
- introduce Framework law
- allocate `FA-###` identifiers
- amend ADR-001–004
- claim production readiness or Framework 1.0
- require UML, Mermaid, or a specific vendor tool

---

## End of AIS-000
