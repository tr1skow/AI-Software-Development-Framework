# Design Investigation — Framework Evolution Process

| Attribute | Value |
| --------- | ----- |
| Document | Design Investigation — Framework Evolution Process |
| Classification | Informative / Research (investigation only) |
| Status | Complete — recommendation recorded |
| Framework baseline | Framework v0.2.0; Runtime Foundation M2 |
| Related | [Ecosystem Design Investigation](./DESIGN-INVESTIGATION-ECOSYSTEM-AND-GOVERNANCE-MODEL.md); [Engineering Review](./ENGINEERING-REVIEW-ECOSYSTEM-AND-GOVERNANCE-MODEL.md); [Ecosystem Representation Investigation](./ARCHITECTURE-DECISION-INVESTIGATION-ECOSYSTEM-REPRESENTATION.md) |
| Kind | Design investigation — **not** a Framework Asset, ADR, Method amendment, governance rule, or process definition |

**This investigation answers whether to document Framework evolution practice.**
It does not create mandatory processes, governance rules, approval stages,
contributor permissions, or redesign research activities. It does not author
the documentation it may recommend.

If this document and an Accepted ADR or labelled Framework Asset appear to
disagree, the Accepted ADRs and labelled Framework Assets are authoritative.

---

## Executive Summary

The Framework already has **two different evolution concerns** that are easy to
conflate:

| Concern | Stability today | Documentation today |
| ------- | --------------- | ------------------- |
| **Product evolution** — how Method, ADRs, Assets, and Baselines change | Relatively stable | Partial (FA-002 Amendment, ADR-002, FAIS, thin README Contributing) |
| **Investigative evolution practice** — Observation → Research Question → Design Investigation → Engineering Review → Architecture Decision Investigation → Implementation → Release Communication | Emergent; demonstrated mainly on the recent ecosystem track | Implicit only |

**Research question answer:** the Framework should **explicitly improve
Informative discoverability of product evolution rules**, but should **not**
yet freeze the investigative activity chain as “the” Framework Evolution
Process.

**Final Recommendation: Option D** — selective / split Informative
representation:

1. **Integrate** (Option C style) pointers and a short contributor-facing
   summary of *existing* product-evolution rules into current Informative
   surfaces (especially README Contributing).
2. **Keep** the investigative activity chain **implicit for now** (Option A
   for that chain), or at most list activity *kinds* as non-ordered examples
   later — only after the pattern repeats beyond a single research track.
3. **Defer** a dedicated Informative “Evolution Process” overview (Option B)
   until product-evolution discoverability is fixed and investigative practice
   shows repeatable stability without becoming a gate ladder.

This preserves **minimal governance**: document what already binds product
change; do not invent a mandatory research pipeline.

---

## Research Question

Should the Framework explicitly document its own evolution process?

---

## Current State Analysis

### What already exists (product evolution)

These are **stable enough to cite** and already carry real force or repository
governance force:

| Source | What it already says |
| ------ | -------------------- |
| [FA-002 Amendment](../FA-002-METHOD-SPINE.md) | Normative Method changes need explicit, versioned Method/Baseline process with human approval and migration guidance where consumers are affected; Informative glosses may clarify without changing Normative statements |
| [ADR-002](../adr/ADR-002-BASELINE-PINNING-AND-VERSIONING.md) | Baseline immutability; compatibility classes; upgrade philosophy; breaking changes require new Baseline + migration guidance |
| [FAIS](../governance/FRAMEWORK-ASSET-IDENTIFICATION-STANDARD.md) | Asset identity lifecycle (create, deprecate, retire, etc.); governance boundaries among ADR / FA / repository construction docs |
| [README Contributing](../../README.md) | Architecture via reviewed ADRs; product content as `FA-###`; README is not normative — **very thin** as contributor guidance |
| M2 Declaration / allocation log | Milestone and ID stewardship as repository construction governance |

**Gap:** a contributor must assemble product-evolution understanding from
multiple documents. README Contributing does not point to FA-002 Amendment,
ADR-002 upgrade philosophy, or FAIS lifecycle. Discoverability is weak;
substance is not absent.

### What has emerged (investigative practice)

Recent Framework work has used activities such as:

```text
Observation
    → Research Question
    → Design Investigation
    → Engineering Review
    → Architecture Decision Investigation
    → Implementation
    → Release Communication
```

**Observed properties:**

- Emerged **incrementally** from real work, not from a designed process asset.
- Useful as a **discipline pattern** (evidence before design; review before
  architecture representation; investigation before implementation).
- **Not** Normative Method, **not** Runtime, **not** required for Project
  Integration or adopter use of the Framework.
- Demonstrated depth mainly on **one** concern track (ecosystem / governance
  representation). That is insufficient evidence to declare a stable,
  Framework-wide evolution process.

### Objectives — findings

| Objective | Finding |
| --------- | ------- |
| Is the current evolution process sufficiently stable? | **Split answer.** Product evolution rules: yes, enough to document discoverability. Investigative activity chain: **not yet** — too new and too singly evidenced to freeze. |
| Does documenting improve contributor understanding? | **Yes** for product-evolution pointers. **Maybe** for investigative activities — helps only if clearly non-mandatory and non-linear. |
| Does documentation risk becoming overly prescriptive? | **High** if the activity chain is published as an ordered process with implied gates. **Low** if limited to Informative maps of existing ADR/Baseline/FAIS rules. |
| Is an Informative description sufficient? | **Yes** for any documentation of evolution practice. Normative process documentation would violate minimal governance and the constraints of this investigation. |
| Do existing docs already provide adequate guidance? | **Adequate substance, inadequate map** for product evolution. **No guidance** for investigative activities — which may be correct while they remain experimental. |

### Important separation

Documenting **how the Framework product changes under ADR-002 / FA-002 / FAIS**
is not the same as documenting **how maintainers explore uncertain design
questions**.

Conflating them would either:

- under-specify Baseline/Method evolution (bad for pins and claim honesty), or
- over-specify research ceremony as if it were Framework law (bad for minimal
  governance).

---

## Alternatives

### Option A — Keep the evolution process implicit

Leave both product-evolution discoverability and investigative practice as
they are. Rely on reading ADRs, FAIS, FA-002, and tribal knowledge of recent
research habits.

### Option B — Document the process as an Informative overview

Publish a dedicated Informative overview describing Framework evolution,
likely including the investigative activity chain and pointers to
ADR/Baseline/Asset rules.

### Option C — Integrate into existing documentation

No new evolution-process artefact. Expand README Contributing and/or add short
Informative cross-links from FA-003 / whitepaper maturity narrative to FA-002
Amendment, ADR-002, and FAIS. Optionally mention research docs folder as
exploratory only.

### Option D — Selective / split representation (identified here)

Treat evolution documentation as **two decisions**:

1. **Product evolution discoverability** → improve via integration into
   existing Informative surfaces (C-like).
2. **Investigative activity chain** → keep implicit (A-like) until repeated
   use shows stability; defer a dedicated overview (B) rather than freeze an
   emergent pipeline.

Optional later micro-step: a short non-ordered list of *activity kinds* used
in research, explicitly labelled “examples, not stages” — still not a process
manual.

---

## Trade-off Analysis

Ratings: **H** favourable / **M** mixed / **L** unfavourable for the criterion.

### Clarity

| Option | Rating | Notes |
| ------ | ------ | ----- |
| A | L | Product rules remain scattered; investigative practice remains tribal |
| B | H | One place to read — highest clarity *if* it carefully separates product rules from optional research habits |
| C | M–H | Clearer discoverability for product rules; little room for full research-pattern explanation |
| D | H | Clearest *decision*: document what is stable; leave unstable practice unnamed as process |

### Discoverability

| Option | Rating | Notes |
| ------ | ------ | ----- |
| A | L | Status quo |
| B | H | Dedicated page + README link |
| C | H | README Contributing is the natural human entry for contributors |
| D | H | Uses C for the part contributors need most; avoids false discoverability of an unstable pipeline |

### Contributor onboarding

| Option | Rating | Notes |
| ------ | ------ | ----- |
| A | L | New contributors must reverse-engineer evolution |
| B | M–H | Helps onboarding; can mis-train people into believing all seven activities are required |
| C | H | Directly improves the Contributing entry without inventing ceremony |
| D | H | Onboards to real gates (ADR, Baseline, Asset lifecycle); does not onboard to fictional gates |

### Maintenance effort

| Option | Rating | Notes |
| ------ | ------ | ----- |
| A | H | Zero new maintenance |
| B | L–M | Must track every change in research habit or become stale/wrong |
| C | M | Small, localized edits to existing Informative surfaces |
| D | M | Same as C near-term; avoids maintaining a process doc for an unstable pattern |

### Risk of unnecessary governance

| Option | Rating | Notes |
| ------ | ------ | ----- |
| A | H | Lowest new governance risk; retains ambiguity cost |
| B | L | Highest risk the overview is read as mandatory stages / approval ladder |
| C | H | Low — mostly pointers to rules that already exist |
| D | H | Intentionally refuses to promote emergent research habits into process |

### Alignment with Framework philosophy

| Principle | A | B | C | D |
| --------- | - | - | - | - |
| Minimal / proportionate governance | H | M–L | H | **H** |
| Evidence-first evolution | M | L if freezing one track | H | **H** |
| Progressive Commitment | H | L if linear pipeline | H | **H** |
| Human Authority | H | H if Informative only | H | **H** |
| Examples Are Not Norms | H | M (process examples tempt Norms) | H | **H** |

### Summary matrix

| Criterion | A | B | C | D |
| --------- | - | - | - | - |
| Clarity | L | H | M–H | **H** |
| Discoverability | L | H | H | **H** |
| Contributor onboarding | L | M–H | H | **H** |
| Maintenance effort (favourable = low) | H | L–M | M | **M** |
| Unnecessary-governance resistance | H | L | H | **H** |
| Philosophy alignment | M | M–L | H | **H** |

---

## Recommendation

**Prefer Option D** over A, B, or C alone.

| Do now (Informative only) | Do not do from this investigation |
| ------------------------- | --------------------------------- |
| Improve discoverability of **existing** product-evolution rules via README Contributing (and light cross-links) | Create a mandatory evolution process |
| State that exploratory research docs are non-Normative and non-adopter obligations | Freeze Observation → … → Release Communication as required stages |
| Keep investigative activity chain implicit until repeated across concerns | Add approval stages, permissions, or governance rules |
| Revisit Option B later if contributors still cannot find how Framework product changes, *or* if investigative patterns stabilize | Redesign research activities |

**Why not A alone:** leaves a real discoverability defect for ADR/Baseline/FAIS
evolution that already exists and is stable.

**Why not B now:** the listed investigative chain is not evidenced as stable
Framework-wide practice; publishing it as “the evolution process” would be
premature prescription dressed as Informative.

**Why not C alone:** correct direction for product rules, but without the
explicit split a future author may “integrate” the full research pipeline into
README Contributing and accidentally create lightweight governance.

---

## Risks

| Risk | If unmitigated | Mitigation direction (non-design) |
| ---- | -------------- | --------------------------------- |
| **Process freeze** | Emergent research habits become implied gates | Keep chain implicit; any future list must say non-ordered / optional |
| **False completeness** | Contributors think README Contributing is the full law | Point to FA-002 / ADR-002 / FAIS as authorities |
| **Normative creep** | Informative evolution overview gains Method/Framework force | Never `FA-###` for evolution-process narrative; never ADR for research habits |
| **Under-documentation** | Product evolution remains hard to find | Do the C-like discoverability work (Option D part 1) |
| **Scope conflation** | Adopters think evolution process is part of Project Integration | State explicitly: evolution docs are steward/contributor Informative; not Runtime |
| **Premature Option B** | Dedicated overview written before pattern repeats | Gate B on evidence of repeated use or persistent contributor confusion |

---

## Open Questions

1. Is README Contributing the sole integration surface, or should FA-003 /
   whitepaper also carry a one-line pointer?
2. After how many independent investigation tracks is the activity-kind pattern
   stable enough to describe Informatively without ordering?
3. Should `docs/research/` remain the only home for investigative artefacts,
   with a one-line README note, and no process page?
4. How should Release Communication relate to Baseline publication claims
   under ADR-002 without inventing a release board?
5. When (if ever) should Option B be reconsidered — contributor confusion
   metric, second/third successful research track, or pre-1.0 packaging need?

---

## Final Recommendation

### Option D — Selective Informative documentation

**Yes, partially document Framework evolution — but only the stable product
evolution path, and only as Informative discoverability.**

1. **Explicitly describe** (by integrating into existing Informative
   documentation) how Framework **product** evolution already works:
   ADRs for architecture, Assets for product content, FA-002 Amendment for
   Method changes, ADR-002 for Baseline/compatibility/upgrade, FAIS for asset
   lifecycle.
2. **Do not** explicitly prescribe the investigative activity chain as the
   Framework Evolution Process.
3. **Preserve minimal governance:** Informative pointers only; no new
   mandatory processes, approval stages, permissions, or redesigned research
   activities.
4. **Defer** a dedicated Informative evolution-process overview (Option B)
   until either product-evolution discoverability proves insufficient *or*
   investigative practice is evidenced as stable across multiple concerns.

### Answer to the Research Question

| Question | Answer |
| -------- | ------ |
| Should the Framework explicitly document its own evolution process? | **Partially yes** — document discoverability of existing product-evolution rules; **not yet** as a full investigative process manual |

### Explicit non-actions (this investigation)

- No mandatory process created
- No governance rules or approval stages
- No contributor permissions defined
- No redesign of research activities
- No evolution-process document authored
- No Framework Assets or ADRs created

---

## Success criteria check

| Criterion | Result |
| --------- | ------ |
| Identify whether to explicitly describe Framework evolution process | **Yes — selectively (Option D)** |
| Preserve minimal governance | **Satisfied** — Informative discoverability only; no process law; research chain not frozen |

---

## End of Design Investigation
