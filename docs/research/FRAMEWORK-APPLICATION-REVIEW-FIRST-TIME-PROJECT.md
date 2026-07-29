# Framework Application Review — First-Time Project Journey (Alpha)

| Attribute | Value |
| --------- | ----- |
| Document | Framework Application Review — First-Time Project Journey |
| Classification | Informative / Research (application experience) |
| Status | Complete — observational findings recorded |
| Framework baseline | Framework 0.7 Alpha; Runtime Foundation M2 |
| Kind | Application review — **not** a Design Investigation, Engineering Review, Asset, or ADR |

**This review evaluates the experience of applying the completed Alpha
Framework from a first-time project’s perspective.** It does not redesign the
Framework, create Assets or ADRs, or treat missing Getting Started / Agent Pack
/ published consumer Baseline as defects against Alpha’s declared non-claims.

If this document and an Accepted ADR or labelled Framework Asset appear to
disagree, the Accepted ADRs and labelled Framework Assets are authoritative.

---

## Executive Summary

A first-time team **can** take a greenfield project from repository discovery
through Project Integration, a first Framework-governed change, and ongoing
Invocation — **if** they are experienced and follow the Alpha Adoption path.

The journey is **coherent but cognitively heavy**. Authority is recoverable
(FA-001 force labels; ADR wins on conflict; Entry is the project root), yet
**starting-point choice**, **construction-pin mechanics**, and **document
volume** create real friction. An AI agent **cannot** safely bootstrap a
greenfield alone: Project Integration and Decision Owner declaration are
human-gated by design; once Entry exists, agent discovery rules are clear.

**Verdict:** Alpha application UX is **usable for its intended audience**
(experienced evaluators), **not frictionless**, and **not a consumer kit**.
Remaining pain is mostly **empirical packaging/discoverability**, not missing
Runtime architecture. No new Framework Assets are justified from this review
alone.

---

## Walkthrough of the project journey

*Assumed: new greenfield software project; team has only this repository.*

### Stage 0 — Find the door

| Step | What the team encounters |
| ---- | ------------------------ |
| Open repo | [README](../../README.md) as human landing; states it is **not** law / Entry / agent root |
| See map | AIS-001 illustration + Documentation map table |
| Maturity | Alpha; no published consumer Baseline; architecture complete; application next |

**Intended next move for evaluation:** [Alpha Adoption Guide](../adoption/FRAMEWORK-0.7-ALPHA-ADOPTION-GUIDE.md) (README section + diagram handoff).

**Alternate path:** README “Where to start” lists FA-003 → FA-002 → M2 → FA-004–008 → classify — overlapping but not identical to Adoption Guide sequencing.

### Stage 1 — Understand the Framework

| Path | Documents |
| ---- | --------- |
| Orientation (optional) | Whitepaper, FA-003, FA-002 |
| Adoption-required honesty | README maturity + Adoption Guide non-claims |

Team learns: Human Authority; pin + Entry + Policy; change-based Runtime; force
labels matter.

### Stage 2 — Establish ownership and Project Integration

Per Adoption Guide §3:

1. **Pin** construction Baseline ([FA-004](../FA-004-PINNING-AND-BASELINE-GUIDE.md)) — commit/snapshot of normative set; not floating `main`; research/backlog excluded
2. **Local Project Entry** ([FA-005](../FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md) / [FA-006](../FA-006-LOCAL-PROJECT-ENTRY-TEMPLATE.md))
3. **Project Policy** ([FA-007](../FA-007-MINIMAL-PROJECT-POLICY-STARTER.md))
4. **FA-008** greenfield checklist
5. **Decision Owner** knowable via Entry/Policy

**Adoption gate:** ready to classify the first real **change**.

### Stage 3 — “Classify the project” vs classify the change

The scenario asks to classify the *project*. The Framework’s binding mechanism
is **Change Classification** ([FA-009](../FA-009-CHANGE-CLASSIFICATION-GUIDE.md)).
Project-level **delivery context** and **control posture** are recorded on the
Entry (ADR-003), not as a separate “project class” workflow.

First change: draft Classification → Decision Owner acceptance → Effective →
invoke only bound capabilities (Discovery if needed, Decision Support,
Planning, Implementation, Review, Verification, Approval).

### Stage 4 — Deliver software under Invocation

After first change, [Invocation Guide](../FRAMEWORK-INVOCATION-GUIDE.md) owns
session discipline: discover Entry → Policy → pin → Effective Classification →
bound capabilities only → Stop rather than invent → record outcomes.

### Stage 5 — Evolve the project

Subsequent changes repeat Invocation + Classification. Framework evolution
feedback may land on the [Evolution Backlog](../FRAMEWORK-EVOLUTION-BACKLOG.md)
(Informative). Project evolution (product backlog, releases) remains the
team’s; Framework does not replace product SDLC tooling.

---

## Friction points

| # | Friction | Severity |
| - | -------- | -------- |
| 1 | **Dual start paths** — README “Where to start” vs Alpha Adoption Guide | High for first hour |
| 2 | **Construction pin** — no published Baseline; must understand normative set vs research | High for Alpha (honest, but hard) |
| 3 | **Adoption Guide / Invocation still “Draft — awaiting publication approval”** | Medium — undermines confidence |
| 4 | **Document volume** — many FA/ADR IDs before first line of product code | Medium–High |
| 5 | **“Project classification” mismatch** — users may hunt for a project class | Medium |
| 6 | **FA-009 size/complexity** for first classification | Medium |
| 7 | **AIS-001 illustration lag** vs README map (research/backlog rows) | Low–Medium |
| 8 | **Whitepaper vs FA-003 vs README** all feel like “the overview” | Medium |
| 9 | **No Agent Pack** — AI onboarding depends on human-written Entry pointers | Expected for Alpha; still friction |
| 10 | **SDLC expectation** — Framework governs *changes*, not full product lifecycle ceremonies | Conceptual mismatch if team expects classic SDLC kit |

---

## Discovery issues

| Need | Discoverable? | Notes |
| ---- | ------------- | ----- |
| Human starting point | **Mostly yes** | README + diagram; Adoption Guide is the practical path if found |
| Mandatory vs Informative | **Yes if labels read** | FA-001; headers on Adoption/Invocation; ADR wins conflicts |
| Decision Owner | **Yes** | Adoption §3.5; FA-005; ADR-003 |
| What to pin | **Yes with care** | FA-004 construction pin + research exclusions (post merge-readiness) |
| What not to treat as offering | **Improved** | README Documentation map rows for backlog/research |
| Agent authoritative root | **Clear in Norms** | Entry first (FA-005); README forbidden as root |
| After first change, what next | **Yes** | Explicit handoff Adoption → Invocation |
| How to evolve Framework from lessons | **Yes** | Adoption §6 → Evolution Backlog |
| Fitness Challenge as RI | **Visible** | README; not a substitute for own pin |

**Hardest discoveries:** (1) which start path to follow; (2) exact normative
membership of a construction pin; (3) that classification is per-change.

---

## AI-agent perspective

### What works

- FA-005 **Agent discovery contract** is explicit: Entry first; local pin;
  same precedence; never invent Decision Owner/pin; never self-approve; never
  treat README/chat as root.
- Invocation Golden Rule matches agent session needs.
- Adoption Guide advises pointing agent instructions at Invocation, not
  pasting Framework into prompts.

### What fails or strains

- **Greenfield bootstrap:** Before Entry exists, an agent has no project root.
  A first-time AI-led team cannot complete Stage 2 without a human Decision
  Owner and Integration work — **by design (Human Authority)**, but the
  scenario’s “AI team” still depends on that human gate.
- **No Agent Pack:** Agent must be pointed at Invocation/Entry manually;
  tool-neutral but setup-heavy.
- **Live upstream temptation:** Without discipline, agents may float on
  `main` or read `docs/research/` as law — README/FA-004 now warn, but
  enforcement is behavioral.
- **Authority competition:** Large context windows may load whitepaper +
  research + Assets and blur force unless Entry/pin scoping is strict.

### Verdict (AI)

**Operable after Integration; not self-onboarding for greenfield Alpha.**

---

## Human engineer perspective

### What works

- Honest Alpha non-claims reduce false kit expectations.
- Adoption Guide is a linear path to first success.
- Responsibilities (Decision Owner, Human Authority, Stop) are clear once read.
- Handoff to Invocation for day-to-day is natural.
- Asset ID-first navigation scales once the mental model clicks.

### What strains

- Experienced-audience assumption is correct and exclusionary — juniors will
  struggle (not an Alpha defect per guide audience).
- Draft status on Adoption/Invocation feels unfinished.
- Early ceremony (pin, Entry, Policy, checklist) before product momentum.
- Parallel “maps” (README, FA-003, whitepaper, AIS-001) compete for “start
  here.”

### Verdict (human)

**Successful path exists for the intended evaluator audience; friction is
front-loaded in Integration and first Classification.**

---

## Evidence

| Question | Evidence-based answer |
| -------- | --------------------- |
| Correct starting point obvious? | **Partially** — README is obvious landing; practical start is Adoption Guide, but “Where to start” competes |
| Identify mandatory documents? | **Yes, with effort** — force labels + “ADR/Asset wins” banners; volume still confuses |
| AI identify authoritative sources? | **Yes after Entry** — FA-005 contract; **not** before Integration |
| Responsibilities clear? | **Yes** — Decision Owner / Human Authority / agent limits |
| Document transitions natural? | **Adoption → Invocation yes**; orientation docs less sequenced |
| Unnecessary friction? | **Yes** — dual start paths; construction pin; draft banners; FA-009 weight |
| Multiple equally authoritative docs? | **Appear so until force labels applied** — README/FA-003/whitepaper/Invocation |
| Required info hard to discover? | **Pin membership and start-path choice** hardest |
| Guide through SDLC? | **Guides change lifecycle (Runtime), not full product SDLC** |

Supporting artefacts: README (incl. post–merge-readiness map), Alpha Adoption
Guide, Invocation Guide, FA-004–010, FA-005 agent contract, FA-001, M2/Alpha
non-claims, Alpha Completion Assessment (architecture complete; application
next).

---

## Recommendations

*UX observations only — not implementation mandates. Prefer existing surfaces.
No new Assets proposed.*

1. **Make the practical start path singular on the landing page** — e.g. lead
   “Where to start” with Alpha Adoption Guide for first-time project
   evaluation, keeping FA-003/FA-002 as orientation depth (editorial clarity,
   not new Asset).
2. **Resolve or reword “Draft — awaiting publication approval”** on Adoption
   and Invocation if they are the official Alpha packaging — status mismatch
   is avoidable friction.
3. **Keep construction-pin exclusions visible** (already in FA-004/README);
   reinforce in Adoption §3.1 only if field confusion appears.
4. **Do not add Getting Started / Agent Pack / published Baseline** from this
   review alone — those remain Beta/1.0 positioning, not Alpha UX blockers
   against declared non-claims.
5. **Treat first-classification coaching as empirical feedback** (backlog
   intake) rather than pre-emptively rewriting FA-009.
6. **AIS-001 refresh** remains Beta-tolerant per merge readiness; low urgency
   vs application exercise.

---

## Answer map (review questions)

| Question | Short answer |
| -------- | ------------ |
| Starting point obvious? | Landing yes; practical path partially competed |
| Mandatory docs identifiable? | Yes via labels, with cognitive load |
| AI authoritative sources? | Clear post-Entry; human-gated pre-Entry |
| Responsibilities clear? | Yes |
| Transitions natural? | Strong Adoption→Invocation; weaker orientation cluster |
| Unnecessary friction? | Yes (listed) |
| Equally authoritative docs? | Appear so until force discipline applied |
| Hard to discover? | Start path; pin membership; change vs project class |
| Guides SDLC? | Change Runtime yes; full product SDLC no |

---

## End of Framework Application Review
