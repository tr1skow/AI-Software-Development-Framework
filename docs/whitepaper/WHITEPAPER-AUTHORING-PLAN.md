# Whitepaper Authoring Plan

| Attribute | Value |
| --------- | ----- |
| Document | Whitepaper Authoring Plan |
| Type | Repository planning (not a Framework Asset; not an ADR) |
| Classification | Informative / planning |
| Status | Accepted |
| Basis | Approved Whitepaper Architecture Engineering Review (incl. editorial refinements) |
| Framework baseline | Framework 0.7 Alpha; Runtime Foundation M2 |

This document plans **authoring**. It is not the whitepaper. It makes no new
architectural decisions.

---

## Architecture status

The Whitepaper Architecture Engineering Review is **accepted**. Architecture
is complete. No further Engineering Reviews are required before authoring
unless new architectural issues are discovered.

Next phase: **Whitepaper Authoring** (incremental, chapter-by-chapter).

---

## Final architecture refinement — Reading Guide

*Informative reading aid only.*

Add a short **Reading Guide** immediately after the Abstract (or as part of
the Introduction):

> This whitepaper is intentionally organised from problem to architecture.
>
> Readers unfamiliar with the Framework are encouraged to read it sequentially.
>
> Readers already familiar with the Framework may use individual chapters as
> reference.
>
> Throughout the document, each architectural concept is introduced by
> explaining:
>
> - why it exists,
> - what it is,
> - and where its normative definition lives.

This reinforces the reader-first principle and must not become Framework law.

---

## Authoring philosophy

Author with the same engineering discipline as the Framework:

- **Incremental** — do not write the complete whitepaper in one iteration.
- **Chapter = reviewable unit** — each chapter independently reviewable.
- Every chapter must be internally coherent; Informative / Reference only;
  avoid FA duplication; ID-first pointers to ADRs/FAs; readable without prior
  Framework knowledge.
- Force banner and authority-conflict statement in the title/status block
  (and echoed lightly in Introduction).

### One Core Message per Chapter

*Informative authoring principle.*

> Each chapter should leave the reader with one primary architectural insight.
>
> If a chapter attempts to explain multiple major ideas, prefer splitting or
> simplifying rather than increasing chapter size.

Purpose: improve readability, reduce repetition, reinforce reader-first
philosophy, and keep chapters independently reviewable.

### Chapter quality checklist

*Informative.* Apply after drafting every chapter:

- Does the chapter explain why before what?
- Does it avoid introducing Framework law?
- Does it reference ADRs and Framework Assets instead of duplicating them?
- Could a technical decision-maker understand the chapter without reading
  later chapters?
- Does the chapter naturally transition to the next chapter?

---

## Locked chapter sequence

| # | Chapter | Writing order |
| - | ------- | ------------- |
| 0 | Title / version / status block | With Ch. 1–3 shell |
| 1 | Abstract | Late (after body stable) or draft-early / revise-last |
| 2 | Executive Summary | Late (after body stable) |
| 3 | Introduction (+ Reading Guide) | Early |
| 4 | Problem | Early |
| 5 | Design Principles | Early–mid |
| 6 | Architecture Overview | Mid |
| 7 | Runtime | Mid |
| 8 | Change Classification & Effective Classification | Mid |
| 9 | Capability Architecture | Mid–late |
| 10 | Human Authority and Agent Participation | Mid |
| 11 | Project Integration Sketch | Mid |
| 12 | Reference Implementation | Mid–late |
| 13 | Maturity and Roadmap (incl. architectural stability) | Mid–late |
| 14 | Related Work (optional) | Optional / late |
| 15 | Conclusion | Late |
| 16 | Appendices (optional) | Late / parallel |

**Recommended writing order (minimise rewrites):**

```text
3 Introduction + Reading Guide
4 Problem
5 Design Principles
6 Architecture Overview
7 Runtime
8 Classification & Effective Classification
10 Human Authority (may draft in parallel with 7–8)
11 Project Integration Sketch
9 Capability Architecture (after 7–8–10–11 so relationships are stable)
12 Reference Implementation
13 Maturity and Roadmap
14 Related Work (optional)
15 Conclusion
1 Abstract + 2 Executive Summary (final pass)
16 Appendices
0 Status block versioning (every checkpoint)
```

---

## Chapter plans

### Ch. 0 — Title / version / status block

| | |
|--|--|
| **Objective** | Identify Framework version (0.7 Alpha), Informative/Reference force, non-law banner, authority-conflict statement |
| **Audience** | All readers |
| **Dependencies** | None |
| **References** | M2 Declaration; README; FA-001 spirit |
| **Review complexity** | Low |
| **Order** | Maintain continuously |

### Ch. 1 — Abstract

| | |
|--|--|
| **Objective** | One-screen problem → idea → honesty (M2/Alpha) → RI |
| **Audience** | CTO / EM / skim readers |
| **Dependencies** | Body chapters largely stable |
| **References** | None normative |
| **Review complexity** | Medium (precision of claims) |
| **Order** | Last substantive pass |

### Ch. 2 — Executive Summary

| | |
|--|--|
| **Objective** | Decision-maker summary without procedures |
| **Audience** | Primary (architect / EM / CTO) |
| **Dependencies** | Ch. 4–13 |
| **References** | Cite ADRs/FAs lightly |
| **Review complexity** | Medium–High (oversell risk) |
| **Order** | After body |

### Ch. 3 — Introduction (+ Reading Guide)

| | |
|--|--|
| **Objective** | Audience, how to use vs Assets/ADRs, Reading Guide, reader-first |
| **Audience** | First-time readers |
| **Dependencies** | Architecture ER only |
| **References** | README path; FA-003 as “start here” |
| **Review complexity** | Low–Medium |
| **Order** | **1st** |

### Ch. 4 — Problem

| | |
|--|--|
| **Objective** | Why AI-assisted delivery fails without shared governance |
| **Audience** | Primary + secondary |
| **Dependencies** | Ch. 3 |
| **References** | None required; may preview FA-002 themes without restating law |
| **Review complexity** | Medium |
| **Order** | **2nd** |

### Ch. 5 — Design Principles

| | |
|--|--|
| **Objective** | Coherent philosophy narrative (why before what): Human Authority, capability-first, Classification before execution, progressive ceremony, explicit ownership, tool neutrality, examples ≠ norms, Stop over invention |
| **Audience** | Primary |
| **Dependencies** | Ch. 4 |
| **References** | Point to FA-002, ADR-001–004 for normative homes — **do not** restate Normative Method verbatim as whitepaper law |
| **Review complexity** | High (authority bleed) |
| **Order** | **3rd** |

### Ch. 6 — Architecture Overview

| | |
|--|--|
| **Objective** | Map Core, Baseline pin, Project Integration, Agent Interaction at ADR altitude |
| **Audience** | Architects |
| **Dependencies** | Ch. 5 |
| **References** | ADR-001–004 (cite, don’t paste bodies) |
| **Review complexity** | Medium–High |
| **Order** | **4th** |

### Ch. 7 — Runtime

| | |
|--|--|
| **Objective** | Change as unit; invoke/compose/skip/interrupt/complete; Informative Runtime Execution Spine; Stop |
| **Audience** | Architects / tech leads |
| **Dependencies** | Ch. 6 |
| **References** | ADR-001; M2 Declaration for spine definition; FA-009 for binding role |
| **Review complexity** | High (lifecycle misread risk) |
| **Order** | **5th** |

### Ch. 8 — Change Classification & Effective Classification

| | |
|--|--|
| **Objective** | Why binding exists; what Classification/Effective Classification are; where FA-009/010 live |
| **Audience** | Architects / EM |
| **Dependencies** | Ch. 7 |
| **References** | FA-009, FA-010; ADR-001 §Classification |
| **Review complexity** | Medium–High |
| **Order** | **6th** |

### Ch. 9 — Capability Architecture

| | |
|--|--|
| **Objective** | Ownership relationships (not catalogue dump): Discovery feeds spine; DS vs Planning; Artefact Fitness; Acceptance Chain composition |
| **Audience** | Architects |
| **Dependencies** | Ch. 7, 8, 10, 11 (write after those drafts exist) |
| **References** | FA-011–024 ID-first one-liners + links |
| **Review complexity** | High (duplication / catalogue trap) |
| **Order** | **9th** (after 7–8–10–11) |

### Ch. 10 — Human Authority and Agent Participation

| | |
|--|--|
| **Objective** | Propose ≠ accept; material Approval human; agents within Policy |
| **Audience** | EM / governance / architects |
| **Dependencies** | Ch. 5; benefits from Ch. 7–8 |
| **References** | FA-002, ADR-004, FA-015 |
| **Review complexity** | Medium |
| **Order** | **7th** (parallel-friendly with 7–8) |

### Ch. 11 — Project Integration Sketch

| | |
|--|--|
| **Objective** | Entry, Policy, pin as gateway concepts — not templates |
| **Audience** | Architects / tech leads |
| **Dependencies** | Ch. 6 |
| **References** | ADR-002–003; FA-004–008 |
| **Review complexity** | Medium |
| **Order** | **8th** |

### Ch. 12 — Reference Implementation

| | |
|--|--|
| **Objective** | Fitness Challenge as first official RI; Framework governs / project validates; **not proof of correctness** — exposes incompleteness, validates assumptions, feeds evolution |
| **Audience** | Primary + researchers |
| **Dependencies** | Ch. 7–9 (conceptual) |
| **References** | M2 Declaration; README RI section |
| **Review complexity** | Medium (marketing tone risk) |
| **Order** | **10th** |

### Ch. 13 — Maturity and Roadmap

| | |
|--|--|
| **Objective** | M2 vs Spine Complete; 0.7 Alpha / Beta / 1.0; **Architectural stability** subsection (stable decisions / experimental guidance / planned expansion / known limitations) |
| **Audience** | Primary |
| **Dependencies** | Honest alignment with M2 Declaration + README |
| **References** | M2 Declaration; README |
| **Review complexity** | High (claim discipline) |
| **Order** | **11th** |

### Ch. 14 — Related Work (optional)

| | |
|--|--|
| **Objective** | Light differentiation vs process frameworks / agent tooling — non-exhaustive |
| **Audience** | Researchers / architects |
| **Dependencies** | Ch. 5–7 |
| **References** | None Framework-normative |
| **Review complexity** | Medium (scope creep) |
| **Order** | Optional / late |

### Ch. 15 — Conclusion

| | |
|--|--|
| **Objective** | Close narrative; restate non-law; point into Framework |
| **Audience** | All |
| **Dependencies** | Ch. 2–13 |
| **References** | FA-003, ADRs |
| **Review complexity** | Low–Medium |
| **Order** | Late |

### Ch. 16 — Appendices (optional)

| | |
|--|--|
| **Objective** | FA/ADR index tables; glossary; “where to go next” |
| **Audience** | Reference readers |
| **Dependencies** | Asset list FA-001–024 |
| **References** | Allocation log (factual) |
| **Review complexity** | Low |
| **Order** | Parallel / late |

---

## Dependency graph

```text
Ch.3 Introduction + Reading Guide
        │
        ▼
Ch.4 Problem
        │
        ▼
Ch.5 Design Principles
        │
        ▼
Ch.6 Architecture Overview
        │
        ├──────────────► Ch.11 Project Integration Sketch
        │
        ▼
Ch.7 Runtime ──────────► Ch.8 Classification
        │                      │
        │                      │
        ├──────► Ch.10 Human Authority ◄──────┤
        │                      │
        └──────────┬───────────┘
                   ▼
            Ch.9 Capability Architecture
                   │
                   ▼
            Ch.12 Reference Implementation
                   │
                   ▼
            Ch.13 Maturity and Roadmap
                   │
                   ├─► Ch.14 Related Work (optional)
                   ▼
            Ch.15 Conclusion
                   │
                   ▼
            Ch.1 Abstract + Ch.2 Executive Summary
                   │
                   ▼
            Ch.16 Appendices (optional)
```

---

## Review strategy

1. **One chapter (or tight pair) per review cycle** — no mega-PR of full whitepaper first draft.
2. **Review gates per chapter:**  
   - Informative only?  
   - why → what → where normative?  
   - FA/ADR duplication avoided?  
   - oversell / Beta-1.0 claim creep?  
   - authority-conflict respected?
3. **Ch. 5, 7, 9, 13** = elevated scrutiny (philosophy, Runtime misread, catalogue dump, maturity claims).
4. **Abstract + Executive Summary** reviewed only after body checkpoint approval.
5. **Combined whitepaper consistency review** once Ch. 3–13 exist as Accepted drafts.
6. Human approval required before any commit/push of whitepaper prose (when that phase starts).

---

## Estimated complexity

| Chapter | Complexity |
| ------- | ---------- |
| 0 Status block | Low |
| 1 Abstract | Medium |
| 2 Executive Summary | Medium–High |
| 3 Introduction + Reading Guide | Low–Medium |
| 4 Problem | Medium |
| 5 Design Principles | **High** |
| 6 Architecture Overview | Medium–High |
| 7 Runtime | **High** |
| 8 Classification | Medium–High |
| 9 Capability Architecture | **High** |
| 10 Human Authority | Medium |
| 11 Project Integration | Medium |
| 12 Reference Implementation | Medium |
| 13 Maturity and Roadmap | **High** |
| 14 Related Work | Medium |
| 15 Conclusion | Low–Medium |
| 16 Appendices | Low |

---

## Publication checkpoints

| Checkpoint | Contents | Intent |
| ---------- | -------- | ------ |
| **WP-A1** | Ch. 3–5 | Problem + principles readable alone |
| **WP-A2** | Ch. 6–8 + 10–11 | Architecture + Runtime + Classification + HA + Integration |
| **WP-A3** | Ch. 9 + 12–13 | Capability Architecture + RI + maturity |
| **WP-A4** | Ch. 1–2 + 15 (+ optional 14/16) | Front matter + close; full draft |
| **WP-A5** | Full consistency pass + PDF export trial | 0.7 Alpha whitepaper candidate |

Do not treat checkpoints as Framework releases. Whitepaper version tracks **Framework 0.7 Alpha** until a later release bumps both.

Link from README only after at least **WP-A4** is approved (or earlier as “draft” if explicitly labelled) — out of scope until directed.

---

## Recommendation

1. Accept this **Whitepaper Authoring Plan** (incl. Reading Guide placement).  
2. Begin authoring with **Ch. 3 (Introduction + Reading Guide)** then **Ch. 4 (Problem)** when directed.  
3. Do not draft the full whitepaper in one iteration.

No whitepaper prose authored in this step. No commits.

---

## End of plan
