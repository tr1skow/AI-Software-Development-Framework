# Design Investigation — Published Consumer Baseline

| Attribute | Value |
| --------- | ----- |
| Document | Design Investigation — Published Consumer Baseline |
| Classification | Informative / Research (investigation only) |
| Status | Complete — recommendation recorded |
| Framework baseline | Framework 0.7 Alpha; Runtime Foundation M2 |
| Related | [Evolution Backlog item 7](../FRAMEWORK-EVOLUTION-BACKLOG.md); [ADR-002](../adr/ADR-002-BASELINE-PINNING-AND-VERSIONING.md); [FA-004](../FA-004-PINNING-AND-BASELINE-GUIDE.md); [Evolution Process Investigation](./DESIGN-INVESTIGATION-FRAMEWORK-EVOLUTION-PROCESS.md) |
| Kind | Design investigation — **not** a Framework Asset, ADR, Method amendment, Baseline publication, or release procedure |

**This investigation answers whether to explicitly define / communicate a
published consumer Baseline.** It does not publish a Baseline, redefine
Framework Assets, change release procedures, or create certification /
compliance requirements. It does not author the Informative surfaces it may
recommend.

If this document and an Accepted ADR or labelled Framework Asset appear to
disagree, the Accepted ADRs and labelled Framework Assets are authoritative.

---

## Executive Summary

Two different needs are easy to conflate:

| Need | Status today |
| ---- | ------------ |
| **A. Architectural Framework Baseline** (ADR-002) — immutable pin target for Runtime | Architecture **Accepted**; Alpha uses **construction pins** because a separately published consumer Baseline identity does **not** yet exist |
| **B. Consumer surface clarity** — what an adopter may treat as the official offering vs research/history | **Partial** — README says “Published consumer Baseline: Not yet”; FA-004 describes construction pins; FA-001 distinguishes force; research/backlog/RI docs have grown without a single consumer-facing exclusion map |

**Research question answer:** Yes — the Framework should **explicitly communicate**
what belongs on the consumer surface and what does not — **and** should
eventually publish a true consumer Baseline identity when claim-defensible.
It should **not** now create a document that *pretends* to be the published
consumer Baseline.

**Final Recommendation: Option D** — split representation:

1. **Near term:** Informative consumer-surface clarity via existing
   documentation (and a thin addendum if needed) — Normative pin-set vs
   Informative aids vs research/stewardship material.
2. **Not now:** Do not declare or invent a published consumer Baseline
   identity (would contradict README/M2 non-claims).
3. **Later (claim-gated):** Publish a real ADR-002 Baseline identity when
   1.0-defensible — that act is product publication, not this investigation.

This preserves minimal governance and evidence-based evolution: clarify
honestly at Alpha; publish Baseline identity only when ready.

---

## Research Question

Should the Framework explicitly define its published consumer baseline?

---

## Current State Analysis

### What “Baseline” already means (architecture)

[ADR-002](../adr/ADR-002-BASELINE-PINNING-AND-VERSIONING.md) already defines:

- **Framework Identity** vs **Framework Baseline**
- Projects pin a Baseline identity, never Identity alone
- Baseline immutability, offline resolution, Normative distinguishable from
  Informative
- Minimum pin-content *kinds* (identity metadata, Method Spine, Capability
  Semantics/Catalogue, normative implementations, agent rules when used)
- Informative examples/adapters MAY be omitted from the minimum pin

[FA-004](../FA-004-PINNING-AND-BASELINE-GUIDE.md) already states that **during
Framework Construction**, before a separately published consumer Baseline
identity exists, projects may pin a known commit/snapshot of this repository’s
**normative set**, recorded explicitly in the Local Project Entry.

So the architecture does **not** lack a Baseline concept. It lacks a
**published consumer Baseline identity** and a **consumer-clear map** of what
that pin includes versus the rest of the repository.

### What the repository contains today

| Category | Examples | Consumer role |
| -------- | -------- | ------------- |
| Normative Method / Framework Assets | FA-001–024 | Pin / govern work |
| Accepted ADRs | ADR-001–004 | Architectural law for pinned Baseline |
| Informative operational packaging | Invocation Guide; Alpha Adoption Guide | Help use; not substitute for Norms |
| Informative narrative | Whitepaper; README | Orientation; non-authoritative landing |
| Repository construction governance | FAIS; allocation log; M2 Declaration | Stewardship; not adopter Runtime |
| Research / investigation | `docs/research/*` | Evolution reasoning; not offering |
| Evolution backlog | [FRAMEWORK-EVOLUTION-BACKLOG.md](../FRAMEWORK-EVOLUTION-BACKLOG.md) | Candidates; not commitment |
| Reference Implementation material | Fitness Challenge Platform (external / cited) | Validates Framework; not Framework law |

### What consumers are told today

- README: **Published consumer Baseline | Not yet**
- README / M2 / whitepaper: 1.0 *means* (among other things) a published
  consumer Baseline — **not declared**
- Alpha Adoption Guide: use FA-004 construction pin; no public consumer Baseline
- FA-001: force labels exist, but consumers must still know *which files* are
  in vs out of the pin

### Objectives — findings

| Objective | Finding |
| --------- | ------- |
| Do consumers need a clearly defined baseline? | **Yes** for pinning (ADR-002). **Yes** for surface clarity as research/docs proliferate. These are related but not identical needs. |
| Does current documentation provide sufficient clarity? | **Sufficient** that no published consumer Baseline exists. **Insufficient** as a single map of “official offering vs research history,” especially for new adopters who land in `docs/research/` or the backlog. |
| Would an explicit baseline improve onboarding? | **Yes** if it clarifies pin-set and exclusions. **No** if it falsely declares a published Baseline identity at Alpha. |
| Does defining a baseline risk unnecessary governance? | **High** if “Published Consumer Baseline” becomes certification, compliance, or a new Normative catalogue. **Low** if limited to Informative surface mapping + future ADR-002-conformant publication. |
| Should baseline distinguish normative, informative, and research? | **Yes.** ADR-002 already requires Normative vs Informative distinguishability in distribution. Research/stewardship material must be explicitly **out** of consumer pin expectations. |

### Critical distinction (this investigation’s hinge)

```text
Published Consumer Baseline (ADR-002 product act)
  = immutable Baseline identity + resolvable pin content
  = NOT yet available (honest Alpha claim)

Consumer surface clarity (Informative orientation)
  = what adopters should treat as offering / pin material vs not
  = needed now; must not be misnamed as if the Baseline were published
```

Answering “should we explicitly define PCB?” without this split leads either to
false publication claims or to ignoring real adopter confusion.

---

## Alternatives

### Option A — No change

Rely on README maturity wording, FA-004 construction-pin note, FA-001 labels,
and adopter diligence.

### Option B — Create an Informative Published Consumer Baseline

Publish a dedicated Informative document titled (or functioning as) the
Published Consumer Baseline, listing what consumers get.

**Risk in naming:** at Alpha this would either (1) falsely imply a published
Baseline identity exists, or (2) redefine “Published Consumer Baseline” away
from ADR-002 meaning — both harmful.

### Option C — Represent the baseline through existing documentation only

Strengthen README, FA-004, Alpha Adoption Guide, and documentation map so the
construction-pin normative set and explicit exclusions (research, backlog,
RI-as-law, README-as-law) are obvious — without a new artefact and without
declaring a published Baseline identity.

### Option D — Split: surface clarity now; Baseline identity later (identified here)

1. **Now (Informative):** explicitly communicate the **consumer surface** —
   Normative pin expectations under construction pins; Informative aids;
   research/stewardship exclusions — via Option C-style integration, optionally
   plus one thin Informative page that is **not** named as the published
   Baseline.
2. **Not now:** do not publish or simulate a consumer Baseline identity.
3. **Later:** when claim-defensible, perform a real ADR-002 Baseline
   publication (product act aligned with 1.0 positioning).

---

## Trade-off Analysis

Ratings: **H** favourable / **M** mixed / **L** unfavourable.

### Consumer clarity

| Option | Rating | Notes |
| ------ | ------ | ----- |
| A | L | “Not yet” is clear; *what to pin vs ignore* is not |
| B | M | Clarity of a list, confusion if titled as published Baseline while none exists |
| C | H | Can state pin-set and exclusions where adopters already look |
| D | **H** | Same near-term clarity as C; preserves honest meaning of “published Baseline” for later |

### Discoverability

| Option | Rating | Notes |
| ------ | ------ | ----- |
| A | L | Rules scattered; research docs compete for attention |
| B | H | One artefact — if correctly discovered and correctly named |
| C | H | README + FA-004 + Adoption Guide are the natural paths |
| D | **H** | Uses C paths; optional thin page only if integration proves insufficient |

### Maintenance effort

| Option | Rating | Notes |
| ------ | ------ | ----- |
| A | H | Zero new maintenance; rising confusion cost |
| B | L–M | Dual-maintain a “baseline” doc against Assets/ADRs; naming debt at publication time |
| C | M | Localized Informative edits when Assets change |
| D | M | C-like now; real Baseline publication cost deferred until justified |

### Risk of governance

| Option | Rating | Notes |
| ------ | ------ | ----- |
| A | H | No new governance; ambiguity remains |
| B | L | High risk of certification reading; Normative creep; false maturity signal |
| C | H | Informative clarification of existing rules |
| D | **H** | Explicitly forbids premature Baseline declaration and compliance framing |

### Alignment with Framework philosophy

| Principle | A | B | C | D |
| --------- | - | - | - | - |
| Minimal governance | H | L | H | **H** |
| Evidence-first / claim honesty | M | L at Alpha | H | **H** |
| Progressive Commitment | M | L if premature publish | H | **H** |
| Examples Are Not Norms | M | M | H | **H** |
| ADR-002 fidelity | M | L if rename/conflate | H | **H** |

### Compatibility with future releases

| Option | Rating | Notes |
| ------ | ------ | ----- |
| A | M | Delays debt into 1.0 packaging |
| B | L | Hard to migrate an Informative “PCB” doc into a real Baseline identity without confusion |
| C | H | Construction-pin clarity becomes input to later Baseline manifests |
| D | **H** | Clean handoff: surface map informs what a future Baseline *contains*; publication remains a separate act |

### Summary matrix

| Criterion | A | B | C | D |
| --------- | - | - | - | - |
| Consumer clarity | L | M | H | **H** |
| Discoverability | L | H | H | **H** |
| Maintenance effort (favourable = low) | H | L–M | M | **M** |
| Governance-risk resistance | H | L | H | **H** |
| Philosophy alignment | M | L | H | **H** |
| Future-release compatibility | M | L | H | **H** |

---

## Recommendation

**Prefer Option D.**

| Do | Do not |
| -- | ------ |
| Explicitly communicate Normative vs Informative vs research/stewardship for consumers | Declare a published consumer Baseline identity at Alpha |
| Strengthen existing adopter-facing docs (README / FA-004 / Alpha Adoption Guide / doc map) | Create certification or compliance requirements |
| Keep construction-pin discipline per FA-004 / ADR-002 | Redefine Framework Assets or reopen ADR-002 casually |
| Treat real PCB publication as a later claim-gated product act | Equate `docs/research/` or the Evolution Backlog with the consumer offering |
| Distinguish force using FA-001 | Introduce new mandatory documentation classes beyond Informative clarification |

**Why not A:** repository growth (research, backlog, multiple Informative guides)
makes “figure it out from labels alone” inadequate for new adopters.

**Why not B as named:** an Informative document called Published Consumer
Baseline would either lie about publication status or damage ADR-002 vocabulary.

**Why not C alone:** correct near-term mechanism, but without the split a later
author may treat “documented surface” as “Baseline published.” Option D keeps
that boundary explicit.

---

## Risks

| Risk | If unmitigated | Mitigation direction (non-design) |
| ---- | -------------- | --------------------------------- |
| **False publication claim** | Adopters believe a PCB exists | Keep README/M2 “Not yet”; never title Alpha clarity docs as the PCB |
| **Vocabulary collision** | “Consumer baseline” used for both surface map and ADR-002 Baseline | Prefer “consumer surface” / “construction pin set” language until real publication |
| **Research as offering** | Investigations/backlog read as product | Explicit exclusions in adopter-facing map |
| **Certification creep** | Surface list becomes compliance checklist | Informative orientation only; no conformity scheme |
| **Pin-set drift** | Clarity doc disagrees with FA-001–024 / ADRs | Surface map points to Assets/ADRs; does not duplicate Normative bodies |
| **Premature 1.0 signal** | Publishing language implies production readiness | Tie real Baseline identity publication to claim defensibility (existing 1.0 positioning) |

---

## Open Questions

1. Is README + FA-004 + Alpha Adoption Guide enough for surface clarity, or is a
   thin Informative “Consumer Surface (Alpha)” page needed (still **not** named
   Published Consumer Baseline)?
2. Exact membership of the Alpha construction-pin normative set — confirm against
   ADR-002 minimum pin-content kinds (metadata declaration still incomplete for
   a formal Baseline identity).
3. Which Informative docs MAY accompany a pin (Invocation Guide?) vs MUST remain
   optional remote (whitepaper, research)?
4. What evidence gate makes a first published consumer Baseline identity
   defensible (ties to Validation Strategy backlog item)?
5. How should Release Communication announce Baseline identities without a
   release board (ties to Release Communication backlog item)?

---

## Final Recommendation

### Option D — Explicit consumer-surface clarity now; published Baseline identity later

**Yes, the Framework should explicitly define what consumers may treat as the
official offering — and should eventually publish a consumer Baseline identity —
but these are sequenced acts.**

1. **Answer to the Research Question (nuanced):**
   - Explicitly **communicate** the consumer surface and pin expectations:
     **Yes (now, Informative).**
   - Explicitly **publish** a consumer Baseline identity: **Yes (later),** when
     claim-defensible — already implied by 1.0 positioning; **not now.**
2. **Distinguish** Normative pin material, Informative aids, and
   research/stewardship/backlog material in that communication.
3. **Preserve minimal governance:** no new mandatory documentation class, no
   Asset redefinition, no release-procedure change, no certification.
4. **Reject** Option B’s premature “Informative Published Consumer Baseline”
   artefact-as-Baseline.
5. **Use** Option C techniques as the near-term delivery vehicle inside Option D.

### Explicit non-actions (this investigation)

- No Baseline published
- No Framework Assets redefined
- No release procedures changed
- No certification or compliance requirements
- No mandatory new documentation introduced
- No consumer-surface page authored here

---

## Success criteria check

| Criterion | Result |
| --------- | ------ |
| Determine whether to explicitly communicate published consumer baseline | **Yes — communicate surface now; publish Baseline identity later (Option D)** |
| Preserve minimal governance and evidence-based evolution | **Satisfied** — Informative clarity only; no false publication; claim-gated identity later |

---

## End of Design Investigation
