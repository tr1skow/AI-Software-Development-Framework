# Design Investigation — Framework Case Studies

| Attribute | Value |
| --------- | ----- |
| Document | Design Investigation — Framework Case Studies |
| Classification | Informative / Research (investigation only) |
| Status | Complete — recommendation recorded |
| Framework baseline | Framework 0.7 Alpha; Runtime Foundation M2 |
| Related | [Whitepaper Ch. 10](../whitepaper/AI-SOFTWARE-DEVELOPMENT-FRAMEWORK-WHITEPAPER.md); [M2 Declaration](../governance/RUNTIME-FOUNDATION-M2-DECLARATION.md); [Evolution Backlog](../FRAMEWORK-EVOLUTION-BACKLOG.md); [Emerging Design Patterns](./EMERGING-DESIGN-PATTERNS.md); [Ecosystem Design Investigation](./DESIGN-INVESTIGATION-ECOSYSTEM-AND-GOVERNANCE-MODEL.md) |
| Kind | Design investigation — **not** a Framework Asset, ADR, mandatory RI deliverable, or Case Study template |

**This investigation answers whether Framework Case Studies should become an
Informative research artefact.** It does not introduce mandatory documentation,
require every Reference Implementation (RI) to produce a Case Study, or author
a Case Study. Prefer extending existing artefacts when equivalent value is
available.

If this document and an Accepted ADR or labelled Framework Asset appear to
disagree, the Accepted ADRs and labelled Framework Assets are authoritative.

---

## Executive Summary

Reference Implementations already **exercise** the Framework and are intended to
**inform** evolution. They do **not**, by themselves, leave a durable,
Framework-owned record of *what the Framework learned* versus what was a
product-local choice.

**Research question answer:** Capture learning from completed RI application —
**yes** — but **not** by mandating a new Case Study genre yet.

**Final Recommendation: Option D** — route Framework-relevant lessons primarily
through **existing evolution surfaces** (Evolution Backlog origins, optional
issues/feedback, Design Investigations when warranted; Emerging Design Patterns
only when a lesson becomes a recurring *design* observation). Treat a
**lightweight Informative Case Study** as an **optional**, trigger-gated
artefact when narrative learning is demonstrably lost or must compare multiple
RIs — never as a required RI output.

This is the minimal systematic learning path aligned with evidence-first
evolution and emerging patterns (strengthen existing surfaces; defer new
consumer/research manuals until observable need).

---

## Research Question

Should the Framework capture learning from completed Reference Implementations
through Framework Case Studies?

---

## Current State

### What RIs already provide

| Source | What it captures |
| ------ | ---------------- |
| RI as consuming project | Living application under pin, Entry, Policy, Human Authority |
| Whitepaper / M2 feedback role | Lessons *should* feed Framework evolution via ADR/Asset change |
| RI product artefacts | Product decisions, code, project docs — Informative relative to Framework law |
| Non-claim | RI success is **not** proof of Framework correctness |

### What already exists for Framework learning (without Case Studies)

| Surface | Role |
| ------- | ---- |
| [Evolution Backlog](../FRAMEWORK-EVOLUTION-BACKLOG.md) | Evidence-backed evolution **candidates** with origin and maturity triggers |
| [Emerging Design Patterns](./EMERGING-DESIGN-PATTERNS.md) | Recurring observations across **investigations** (not yet RI application narratives) |
| Alpha Adoption Guide §6 feedback prompts | Structured evaluation questions for Alpha trials |
| `docs/research/` Design Investigations | Deep dives when uncertainty warrants |
| Observation Catalogue | **Deferred** — avoid ceremony / false Validation Program |

### The gap

```text
RI applies Framework
        │
        ├── product learns (stays in RI)     ← naturally captured in RI repo
        │
        └── Framework should learn
                │
                ├── intended: feedback → ADR / Asset / backlog
                └── missing: durable Framework-owned narrative of
                    “what application taught the Framework”
                    distinct from product diary and from Normative law
```

RIs demonstrate *that* application is possible. They do not automatically
produce a Framework research record of *what* was learned.

### Objectives — findings

| Objective | Finding |
| --------- | ------- |
| Are RIs already sufficient learning? | **Sufficient for exercise and confidence; insufficient as systematic Framework learning memory.** Feedback path is asserted, not instrumented. |
| Would Case Studies improve evolution? | **Possibly** — as optional narrative packaging of Framework-relevant lessons. **Not** if they become mandatory RI ceremony or consumer pin content. |
| Belong in the RI itself? | **Product learning yes; Framework learning no as sole home.** Lessons left only in the RI stay product-local, hard for Framework stewards to find, and risk Normative contamination if copied as “the RI does X.” |
| Directly into Evolution Backlog? | **Yes for actionable candidates.** Backlog is the right home for evolution topics with origin = RI observation. It is a weak home for long narrative “what happened” unless linked from somewhere. |
| Unnecessary process overhead? | **High** if every RI must ship a Case Study. **Low** if learning routes to backlog/issues by default and Case Studies stay optional/trigger-gated. |

---

## Alternatives

### Option A — No change; RIs are sufficient

Rely on RI existence, informal feedback, and eventual Asset/ADR edits. No
Framework Case Study practice.

### Option B — Add a lightweight Informative Framework Case Study

Introduce an optional research artefact (for example under `docs/research/`)
that records Framework-relevant lessons from a completed RI exercise: what was
tried, what hurt, what informed evolution — explicitly non-Normative.

### Option C — Extend Reference Implementations instead

Require or encourage RI repositories to contain Framework-learning sections
(retrospective, “Framework feedback” doc) rather than a Framework-repo Case
Study.

### Option D — Existing evolution surfaces first; optional Case Study later (identified here)

1. **Default learning path:** Framework-relevant observations from RI/Alpha
   application → Evolution Backlog candidates (with origin) and/or issues;
   escalate to Design Investigation when uncertainty is large; promote to
   Emerging Design Patterns only when a *recurring design* observation appears
   across independent evidence.
2. **Do not** require Case Studies.
3. **Do not** treat RI product docs as the Framework’s learning system of
   record.
4. **Optional** lightweight Case Study only when maturity evidence shows
   narrative loss, multi-RI comparison need, or Validation Strategy demand for
   citable application learning — still Informative, still non-mandatory.

---

## Trade-offs

Ratings: **H** favourable / **M** mixed / **L** unfavourable.

### Evidence quality

| Option | Rating | Notes |
| ------ | ------ | ----- |
| A | L–M | Application happens; evidence stays tribal or product-local |
| B | H | Narrative + pointers can be high quality if force-labelled and scoped to Framework lessons |
| C | M | Evidence exists but lives off-repo; Framework stewards may miss it; product/Framework blur |
| D | **H** | Backlog keeps actionable evidence; Case Study added only when narrative evidence is needed |

### Maintenance effort

| Option | Rating | Notes |
| ------ | ------ | ----- |
| A | H | Zero new docs; re-discovery cost |
| B | M | New artefact class to maintain if used often |
| C | M | Pushes maintenance into every RI; Framework still needs intake |
| D | **H** | Extends backlog first; Case Study rare |

### Consumer value

| Option | Rating | Notes |
| ------ | ------ | ----- |
| A | M | Consumers benefit indirectly when Assets improve |
| B | M | Case Studies help researchers/stewards more than pin adopters; must stay out of consumer Baseline |
| C | L–M | Consumers may over-read RI retrospectives as Norms |
| D | **H** | Consumers gain from better evolution without new pin content; research stays research |

### Framework learning

| Option | Rating | Notes |
| ------ | ------ | ----- |
| A | L | Weak systematic learning |
| B | H | Strong if optional and honest |
| C | M | Learning captured away from Framework memory |
| D | **H** | Systematic via backlog + investigations; narrative when needed |

### Governance impact

| Option | Rating | Notes |
| ------ | ------ | ----- |
| A | H | No new process |
| B | M | Low if optional; high if becomes implied RI gate |
| C | L | Easy to become mandatory RI documentation |
| D | **H** | No mandatory docs; aligns with deferred Observation Catalogue spirit |

### Alignment with evidence-first evolution

| Option | Rating | Notes |
| ------ | ------ | ----- |
| A | L | Asserts feedback without capture |
| B | M | Good evidence form; premature as default genre |
| C | M | Application-first but wrong system of record |
| D | **H** | Application-driven candidates now; new artefact only on observed need |

### Alignment with emerging patterns

| Pattern | A | B | C | D |
| ------- | - | - | - | - |
| Strengthen existing surfaces first | — | L | L | **H** |
| Thin representation over institutions | H | M | M | **H** |
| Research ≠ consumer offering | H | H if labelled | L | **H** |
| Defer manuals until observable need | H | L if created now | M | **H** |
| Prefer extend existing over new | H | L | M | **H** |

### Summary matrix

| Criterion | A | B | C | D |
| --------- | - | - | - | - |
| Evidence quality | L–M | H | M | **H** |
| Maintenance effort (favourable = low) | H | M | M | **H** |
| Consumer value | M | M | L–M | **H** |
| Framework learning | L | H | M | **H** |
| Governance impact (favourable = low) | H | M | L | **H** |
| Evidence-first alignment | L | M | M | **H** |

---

## Recommendation

**Prefer Option D.**

### Default mechanism (no new artefact)

When an RI (or serious Alpha application) surfaces Framework-relevant friction:

1. Record an **Evolution Backlog** candidate (or update an existing one) with
   **Origin** pointing at the RI observation — if it is an evolution topic.
2. Use ordinary issues/feedback for raw notes if needed (still not an
   Observation Catalogue).
3. Open a **Design Investigation** when the uncertainty is architectural or
   packaging-deep — not for every lesson.
4. Feed **Emerging Design Patterns** only when the lesson is a recurring
   *design* behaviour corroborated beyond a single RI anecdote.

### What does *not* belong in the RI as the Framework’s record

- Sole copy of Framework evolution lessons
- Anything that could be mistaken for Normative Framework content
- Mandatory “Case Study” sections as an RI completion gate

RI repos MAY keep product retrospectives; those do not replace Framework-owned
intake.

### Optional Case Study (B deferred, not rejected)

A lightweight Informative Framework Case Study may later be justified when
**any** of these are observed:

- Framework-relevant lessons from the official RI are being **re-discovered**
  because backlog/issues lacked durable narrative context;
- a **second** RI exists and comparison of application learning is needed for
  Validation Strategy or RI Strategy;
- maintainers cannot separate Framework gaps from product-local choices without
  a citable learning note.

Even then: **optional**, not required of every RI; lives in research space; not
pin content; not proof of correctness.

### Why not A / B now / C

| Option | Why not as target |
| ------ | ----------------- |
| A | Leaves the stated feedback role un-instrumented |
| B now | New artefact class before observable failure of existing surfaces |
| C | Wrong system of record; Normative-contamination and discoverability risks |

---

## Risks

| Risk | If unmitigated | Mitigation direction (non-design) |
| ---- | -------------- | --------------------------------- |
| **Mandatory Case Study creep** | Every RI blocked on a study | Keep optional; never an RI designation requirement from this investigation |
| **RI-as-law** | Case Study or RI retrospective copied into Norms | FA-002 Examples Are Not Norms; research labelling; consumer-surface exclusions |
| **Duplicate Observation Catalogue** | Case Studies become raw observation dumps | Point Case Studies (if any) at Framework lessons + backlog links; keep Observation Catalogue deferred |
| **Consumer pin pollution** | Case Studies enter Baseline informative set by habit | Treat as research; omit from minimum pin |
| **Learning loss under D** | Backlog-only capture too terse | Use maturity triggers to allow optional Case Study when loss is observed |
| **Validation theatre** | Case Studies used to claim Framework proven | Preserve non-claims; Case Study ≠ proof |

---

## Open Questions

1. If an optional Case Study appears, should it live only under `docs/research/`
   with a naming pattern, without a template Asset?
2. How should official RI Case Studies (if any) cite the RI without importing
   RI product docs into the Framework repo?
3. Does Validation Strategy later need Case Studies as evidence objects, or are
   backlog origins + investigations enough?
4. Should Alpha Adoption Guide feedback occasionally graduate into backlog
   items under the same intake path as RI lessons?
5. When does Emerging Design Patterns accept RI-derived observations — only
   after two RIs, or after one RI plus one investigation corroboration?

---

## Final Recommendation

### Option D — Capture RI learning via existing evolution surfaces; Case Studies optional and trigger-gated

**Yes, the Framework should capture learning from completed Reference
Implementations — primarily through the Evolution Backlog and proportionate
investigations, not by introducing Case Studies as a default artefact.**

1. **RIs are not sufficient alone** as Framework learning memory.
2. **Case Studies can help** as optional Informative narrative — **not now as a
   required genre.**
3. **Learning does not belong only in the RI.**
4. **Actionable recurring/candidates go to the Evolution Backlog** (and
   investigations as needed).
5. **No mandatory documentation; no requirement that every RI produce a Case
   Study.**
6. **Prefer extending existing artefacts** (backlog, research investigations,
   feedback) over creating Case Studies until observable need appears.

### Explicit non-actions (this investigation)

- No Case Study authored
- No Case Study template or Asset created
- No mandatory RI documentation requirement
- No Observation Catalogue created
- No change to RI Informative / non-proof posture

---

## Success criteria check

| Criterion | Result |
| --------- | ------ |
| Minimal mechanism for systematic learning from application | **Option D — backlog/investigation intake first** |
| Without unnecessary governance | **Satisfied** — Case Studies optional/trigger-gated only |

---

## End of Design Investigation
