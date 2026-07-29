# Design Investigation — Framework Ecosystem & Governance Model

| Attribute | Value |
| --------- | ----- |
| Document | Design Investigation — Framework Ecosystem & Governance Model |
| Classification | Informative / Research (investigation only) |
| Status | Complete — recommendation recorded |
| Framework baseline | Framework 0.7 Alpha; Runtime Foundation M2 |
| Branch | `research/framework-ecosystem-architecture` (investigation lineage) |
| Kind | Design investigation — **not** a Framework Asset, ADR, Method amendment, or governance rule |

**This document is investigation only.** It does not create Framework Assets,
governance rules, Community documentation, onboarding flows, role definitions,
implementation plans, ADRs, or Research Questions. It does not amend Accepted
ADRs, the Method Spine, or Runtime semantics.

If this document and an Accepted ADR or labelled Framework Asset appear to
disagree, the Accepted ADRs and labelled Framework Assets are authoritative.

---

## Executive Summary

The Framework has reached a maturity point where **ecosystem relationships are
already operating implicitly** — Reference Implementation feedback, Alpha
evaluation, repository construction governance, and informal maintainer /
adopter distinctions — while remaining **outside** the Framework Method and
Runtime Core.

Those relationships are **genuinely different domains** from Framework product
content (Method, Core, Assets, Project Integration). Conflating them with
Framework Assets would violate existing boundaries (Examples Are Not Norms;
Core MUST NOT depend on reference projects; Alpha adoption is temporary
evaluation packaging).

An explicit **Ecosystem & Governance Model** is therefore **justified as a
future architectural concern**, separate from the Framework Method — but only
as a **thin, boundary-setting model** that:

- separates Framework product from Community, Research Program, and steward
  responsibilities;
- keeps adoption free of participation obligations;
- preserves voluntary, opt-in evaluation;
- places Reference Implementations in the Research / validation domain, not in
  Normative Framework content.

**Recommendation: Ecosystem Model justified.**

Justification here means *permission to treat ecosystem boundaries as a
distinct architectural concern in future work*. It does **not** mean design,
publication, or implementation of that model in this investigation.

---

## Problem Statement

### What has changed

Through Framework 0.7 Alpha and Runtime Foundation M2, the product has
stabilised enough that adjacent concepts now appear repeatedly in discussion
and documentation:

| Concept | Where it already surfaces (implicitly) |
| ------- | -------------------------------------- |
| **Framework** | Method Spine, ADRs, FA-001–024, Invocation Guide |
| **Community** | Contributors, external organisations, informal feedback |
| **Reference Implementations** | Fitness Challenge Platform; whitepaper Ch. 10; M2 Declaration |
| **Research / validation activity** | Alpha evaluation; RI feedback into evolution; non-claims discipline |
| **Beta Candidates / maturity gates** | README / M2 roadmap (Alpha → Beta → 1.0) as *positioning*, not process |
| **Observation / feedback capture** | Alpha Adoption Guide §6 feedback questions |
| **Maintainers** | Repository construction governance (FAIS, allocation, ADR process) |
| **External organisations** | Intended adopters under Alpha / future consumer Baseline |

### The actual problem

These concepts are **already load-bearing**, but their **domain boundaries are
not explicit**. Without boundary clarity:

1. **Category error risk** — Community participation, Research Program
   artefacts, or maintainer stewardship may be mistaken for Framework Assets or
   Runtime capabilities.
2. **Adoption friction risk** — organisations evaluating the Framework may be
   pulled into Community or Research obligations that the Method does not
   require.
3. **Authority confusion** — Reference Implementation practice, Alpha feedback,
   or informal maintainer judgment may be over-read as Normative Framework law
   (contradicting FA-002 Principle 7 and ADR-001 Informative Layer rules).
4. **Governance overhead risk** — premature role ladders, participation
   programs, or community process could expand ceremony beyond Proportionate
   Ceremony and Progressive Commitment.

### What this investigation must decide

Whether the Framework’s **ecosystem itself** has become an architectural
concern — separate from the Framework Method — such that a future Ecosystem &
Governance Model is justified **without designing that model now**.

---

## Current implicit model

The repository already encodes an **implicit multi-domain model**. It is
coherent enough to operate at Alpha, but undocumented as ecosystem architecture.

### Domain A — Framework product (normative + labelled assets)

Owns the engineering method for human–agent software work:

- **Method Spine** ([FA-002](../FA-002-METHOD-SPINE.md)) — Human Authority,
  Progressive Commitment, Proportionate Ceremony, Tool Neutrality, Examples Are
  Not Norms, etc.
- **Framework Core** ([ADR-001](../adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md) and
  related ADRs) — capabilities, Runtime, Classification, pinning, Project
  Integration, Agent Interaction.
- **Framework Assets** (FA-001–024) — labelled implementations of those
  concerns.
- **Operational packaging** — Invocation Guide (permanent Informative /
  Reference after Project Integration).

**Unit of concern:** the *change* under a pinned Baseline in a consuming
project.

**Adoption act:** pin Baseline → Local Project Entry → Project Policy →
Decision Owner → classify and invoke bound capabilities.

### Domain B — Repository / construction governance (stewardship of the product)

Already explicit as *non-Asset* governance documents:

- FAIS and Allocation Log
- Runtime Foundation M2 Declaration
- ADR process as architectural authority path

This is **product stewardship inside the Framework repository**, not Community
law and not Runtime. FAIS itself states it is repository / construction
governance — not a Framework Asset and not an ADR.

### Domain C — Reference Implementation / validation exercise

Already documented as Informative:

- Fitness Challenge Platform as first official Reference Implementation
- Relationship: *Framework governs RI; RI informs Framework evolution*
- Explicit non-claim: RI is not proof of correctness; not Framework law
  ([whitepaper Ch. 10](../whitepaper/AI-SOFTWARE-DEVELOPMENT-FRAMEWORK-WHITEPAPER.md);
  [M2 Declaration](../governance/RUNTIME-FOUNDATION-M2-DECLARATION.md))

### Domain D — Alpha evaluation / external adoption trial

Already documented as temporary Informative packaging:

- [Framework 0.7 Alpha Adoption Guide](../adoption/FRAMEWORK-0.7-ALPHA-ADOPTION-GUIDE.md)
- Purpose stops at: establish governance + first Framework-governed change +
  capture feedback
- Explicitly **not** permanent Getting Started, not production onboarding, not
  Framework law
- Feedback is requested; participation in Framework *evolution* is not required
  for Project Integration to succeed

### Domain E — Informal Community (largely undescribed)

Exists socially (contributors, interested organisations, README “Who it is for”)
but has **no** Framework-owned role model, membership rules, or participation
ladder.

### What the implicit model already asserts (without naming an “ecosystem”)

1. **Adoption ≠ Community membership.** Project Integration is sufficient to use
   the Framework.
2. **Examples / RIs ≠ Norms.** Informative content cannot outrank Method/Core.
3. **Evaluation feedback is valuable and optional.** Alpha Guide asks for
   structured feedback; it does not gate adoption on Community roles.
4. **Stewardship exists.** Someone maintains IDs, ADRs, baselines, and maturity
   claims — currently as repository construction practice, not as a published
   Community role system.
5. **Maturity labels are positioning, not a Validation Program.** Alpha / Beta /
   1.0 are declared as readiness claims, not as a research protocol.

### Gap in the implicit model

The gap is **not** missing Framework Assets. The gap is **missing boundary
language** among Domains A–E so future work does not:

- smuggle Community process into Method;
- treat Research artefacts as Runtime;
- treat maintainer stewardship as Decision Owner semantics inside consuming
  projects;
- or force adopters through participation ladders.

That gap is exactly what an Ecosystem & Governance Model would address — if
justified.

---

## Investigation findings (Objectives 1–8)

### 1. Ecosystem boundaries

#### What belongs where

| Domain | Belongs | Does not belong |
| ------ | ------- | --------------- |
| **Framework itself** | Method, Core semantics, labelled Assets, pinning/Entry/Policy model, Invocation after adoption, document-force labelling | Community membership, research protocols, RI product backlogs, social roles, marketing programs |
| **Community** | People and organisations who use, discuss, critique, or contribute around the Framework; social collaboration norms (if any are later defined) | Normative Method/Core meaning; Decision Owner accountability inside a consuming project; Baseline identity |
| **Governance model (stewardship)** | Responsibility domains for evolving and publishing the Framework product (releases, maturity claims, quality of Assets/ADRs, conflict with Informative content) | Day-to-day Runtime of a consuming change; Project Policy of adopters; forcing Community participation |
| **Research Program** | Deliberate evidence-gathering about Framework fitness (Alpha evaluation, RI exercise, observation of friction, candidate maturity evidence) | Framework law; mandatory adopter duties; Normative catalogue membership |

#### Are these genuinely different domains?

**Yes.** They differ by *authority object* and *unit of work*:

| Domain | Authority object | Unit of work |
| ------ | ---------------- | ------------ |
| Framework | Method/Core/Assets under a Baseline | A *change* in a consuming project |
| Community | Social participation (optional) | Contribution, discussion, feedback relationship |
| Governance / stewardship | Framework product evolution | Release, ADR, Asset publication, claim honesty |
| Research Program | Evidence about Framework fitness | Observation, trial, validation episode |

#### Should they remain separated? Why?

**Yes — separation is required by existing philosophy:**

- **Examples Are Not Norms** (FA-002) already separates Informative exercise from
  Normative product.
- **ADR-001** states Core MUST NOT depend on adapters, examples, vendors, or a
  reference project.
- **Alpha Adoption Guide** separates temporary evaluation packaging from
  permanent Invocation and from Framework law.
- **Human Authority / Decision Owner** are *project-local* accountability
  concepts; Community roles must not redefine them.

Keeping domains separated protects low adoption overhead and prevents Research
or Community ceremony from becoming Method.

---

### 2. Community roles

#### Do distinct roles naturally emerge?

**Yes, as observational distinctions** — already visible without being
Framework concepts:

| Observed distinction | What differentiates it | Natural home |
| -------------------- | ---------------------- | ------------ |
| **Consumer / Adopter** | Pins/uses Framework for project work; Decision Owner remains local | Community *and* Framework adoption surface (adoption is Framework; identity as “consumer” is Community/descriptive) |
| **Feedback Partner** | Voluntarily reports friction/experience (Alpha Guide §6 pattern) | Community / Research interface |
| **Research Participant** | Opts into structured evaluation or RI-linked evidence work | Research Program |
| **Maintainer / Steward** | Evolves Framework product, publishes Assets/ADRs, guards claim honesty | Governance / stewardship (repository construction today) |

#### Are these meaningful distinctions?

**Meaningful as responsibility postures**, because they differ in:

- **obligation** (none vs voluntary feedback vs research commitment vs steward
  accountability);
- **authority** (none over Framework law vs stewardship over product evolution);
- **evidence role** (use vs report vs systematically observe vs decide product
  change).

They are **not** meaningful as Runtime capabilities, Method principles, or
`FA-###` Assets.

#### Framework concepts or Community concepts?

| Distinction | Placement |
| ----------- | --------- |
| Consumer adoption mechanics (pin, Entry, Policy) | **Framework** (already owned) |
| Labels such as Feedback Partner / Research Participant | **Community / Research** concepts if ever named — not Framework Core |
| Maintainer stewardship duties | **Governance model** domain — adjacent to existing repository governance, not Method |

**Investigation conclusion:** role *distinctions* emerge naturally; encoding them
as Framework Assets would be a category error. If named later, they belong to
Community / Governance / Research domains — and must remain non-normative for
Runtime.

---

### 3. Participation

#### Should Framework evaluation participation be voluntary, opt-in, and separated from adoption?

**Yes — strongly indicated by existing posture.**

| Lens | Finding |
| ---- | ------- |
| **Adoption friction** | Project Integration is already the adoption gate. Coupling Community or Research entry to adoption would raise ceremony without improving Runtime behaviour. |
| **Governance overhead** | Mandatory participation creates process that Method does not require and that Proportionate Ceremony would reject for low-risk adopters. |
| **Evidence quality** | Voluntary, motivated feedback tends to surface real friction; coerced participation produces compliance theatre and weak evidence. |
| **Scalability** | A Framework intended for many organisations cannot scale if every adopter is a research subject by default. |

Alpha materials already treat evaluation as **opt-in packaging** for teams that
choose to evaluate under 0.7 Alpha. Success criteria include feedback
submission for *Alpha evaluation completeness*, not for *Framework adoption
validity*. A project can adopt Project Integration without joining any program.

**Investigation conclusion:** participation in Framework *evaluation / research*
should remain voluntary, opt-in, and separated from Framework *adoption*. This
is not a new rule — it is the implicit model made explicit as a boundary.

---

### 4. Reference Implementation positioning

#### Where do Reference Implementations belong?

**Primary home: Research Program / validation domain**, with a **defined
Informative relationship** to the Framework product.

| Candidate home | Fit | Reason |
| -------------- | --- | ------ |
| Framework (Normative) | **No** | Would freeze local product choices into law; contradicts FA-002 / ADR-001 |
| Framework (Informative packaging only) | Partial | RI is Informative relative to Norms, but “packaging” understates its validation purpose |
| Governance model | Secondary | Stewards may *designate* official RIs and receive feedback; they do not *compose* RI code into Core |
| Research Program | **Yes (primary)** | RI exists to exercise, expose incompleteness, and inform evolution under honest non-claims |
| Community alone | Insufficient | Official RI designation and feedback-into-evolution are stewardship/research acts, not merely social |

#### Justification

Existing documents already place RIs as:

- Informative / Reference (not Normative);
- consuming projects (pin + Entry like any adopter);
- validation and feedback instruments for Alpha → Beta → 1.0 evolution;
- non-proof of correctness.

That is the behaviour of a **Research / validation instrument**, stewarded under
product governance, not a Framework Asset and not Community membership.

**Investigation conclusion:** Reference Implementations belong primarily to the
**Research Program** domain, with stewardship touchpoints in the Governance
model and Informative citation from Framework documentation. They do not belong
inside Normative Framework content.

---

### 5. Governance responsibilities (domains only — no processes)

Maintainers / stewards naturally own **product stewardship domains**, distinct
from Decision Owner duties inside consuming projects:

| Responsibility domain | In maintainer / steward scope? | Notes (boundary only) |
| --------------------- | ------------------------------ | --------------------- |
| **Releases / Baseline publication** | Yes | Product evolution and claim honesty (ADR-002 posture) |
| **Beta / maturity decisions** | Yes (steward claim authority) | Deciding when Beta/1.0 claims are defensible — not a Runtime capability |
| **Framework evolution** | Yes | ADR path; Asset publication; Method amendment discipline |
| **Quality assurance of Framework product** | Yes | Coherence of Assets/ADRs; Informative vs Normative hygiene |
| **Community management** | Only partially / optionally | Social facilitation is Community-domain; must not become Method. Stewardship may set boundaries for official channels without owning social life |
| **Consuming-project Decision Owner duties** | **No** | Remains project-local Human Authority |
| **RI product delivery** | **No** (as Framework law) | RI teams own their product; Framework stewards own how RI feedback affects Framework evolution |

**Investigation conclusion:** maintainer responsibilities cluster around
**Framework product stewardship and claim honesty**, not around adopting
organisations’ internal Decision Owner accountability, and not around designing
Community bureaucracy.

---

### 6. Adoption experience

#### What should a new organisation experience?

Evaluated against Framework principles (Human Authority, Proportionate Ceremony,
Progressive Commitment, Tool Neutrality, Examples Are Not Norms, low overhead):

| Option | Evaluation |
| ------ | ---------- |
| **A. Simply adopt the Framework** (pin, Entry, Policy, Decision Owner, invoke) | **Primary path.** Matches existing Overview, ADRs, Invocation Guide. Lowest friction. Preserves Human Authority locally. |
| **B. Immediately introduce Community opportunities** at first contact | **Weak fit** as a required experience. Risks ceremony inflation and confuses social participation with Project Integration. Optional awareness may be Informative only. |
| **C. Participation opportunities emerge later** | **Best fit for Research/Community.** After (or independently of) adoption, organisations may opt into feedback, RI observation, or research — Progressive Commitment applied to *ecosystem* engagement. |

**Investigation conclusion:** the first experience should be **Framework
adoption alone**. Community and Research opportunities should remain **visible
but non-blocking**, emerging by opt-in rather than as an adoption prerequisite.

---

### 7. Optional participation (progression vs independence)

#### Does participation naturally form progressive levels?

A linear ladder such as:

Consumer → Feedback Partner → Research Participant → Maintainer

is **observationally common** in open ecosystems, but **not architecturally
required** here.

| Model | Fit to Framework philosophy |
| ----- | --------------------------- |
| **Strict linear progression** | Weak — invents ceremony; implies status gates; conflicts with voluntary participation and low overhead |
| **Independent, combinable postures** | Strong — an organisation may be Consumer only; a person may give feedback without research duties; a steward may not run an RI; an RI participant need not be a Community “member” |
| **Soft progressive invitation (non-normative)** | Acceptable as Community narrative later — must not become Framework law or adoption gate |

**Investigation conclusion:** treat potential roles as **independent opt-in
postures**, not as a prescribed ladder. Progression may happen socially; the
Framework should not require it. This investigation does not prescribe role
definitions.

---

### 8. Framework philosophy alignment

| Principle | Effect of a thin Ecosystem & Governance Model | Effect of no model / conflated model |
| --------- | ----------------------------------------------- | ------------------------------------ |
| **Proportionate governance** | Supports — keeps Community/Research ceremony out of Method; scales participation with voluntary depth | Weakens if Community process leaks into adoption |
| **Evidence-first evolution** | Supports — clarifies Research Program as the evidence path (RI, Alpha feedback) without claiming proof | Weakens if RI success is over-read as Normative proof, or if evidence channels remain unnamed and ad hoc at scale |
| **Human Authority** | Supports — Decision Owner stays project-local; stewards do not replace it | Weakens if “maintainer” or “community role” is confused with Decision Owner |
| **Decision Owner responsibility** | Supports — boundary keeps DO inside Project Integration | Weakens under role conflation |
| **Minimal process** | Supports **only if** the model stays thin (boundaries + domains). A heavy Community operating system would violate this | Status quo works at small scale; scale without boundaries invites ad hoc process sprawl |
| **Technology neutrality** | Supports — ecosystem domains are tool-agnostic if kept conceptual | Weakens if Community/Research bind to one vendor forum or tooling stack as Normative |

**Net alignment:** a **boundary-first** Ecosystem & Governance Model supports
existing principles. A **process-heavy** or **Framework-embedded** community
system would weaken them.

---

## Alternative ecosystem models

### Alternative 0 — Status quo (implicit only)

Continue with Domains A–E operating without an named Ecosystem model.

- **Advantage:** zero new conceptual surface; no premature ceremony.
- **Disadvantage:** boundary errors become more likely as Alpha participation
  grows; Research vs Framework vs Community keep being re-litigated.

### Alternative 1 — Thin Ecosystem & Governance Model (boundary model)

Publish (later) a thin Informative architectural map that names domains,
places RI/Research/Community/Stewardship, and states non-goals — without roles
process, onboarding flows, or Assets.

- **Advantage:** prevents category errors; protects adoption path; aligns with
  Progressive Commitment.
- **Disadvantage:** still adds a document surface that must be kept from
  becoming law-creep.

### Alternative 2 — Framework-embedded Community layer

Treat Community roles, participation ladders, and research protocols as
Framework Assets / Core-adjacent content.

- **Advantage:** single catalogue for “everything.”
- **Disadvantage:** high — violates Examples Are Not Norms spirit, raises
  adoption overhead, risks Normative contamination, conflicts with ADR-001
  Informative Layer independence.

### Alternative 3 — Research-only model (no Community domain)

Model only Research Program + stewardship; leave Community entirely undescribed.

- **Advantage:** minimal; focuses evidence path.
- **Disadvantage:** external organisations and informal contributors still
  exist; unnamed Community pressure may re-enter through Research language.

### Alternative 4 — Full governance operating system

Committees, membership tiers, release boards, community codes as first-class
Framework concerns.

- **Advantage:** clarity for large multi-org stewardship *if ever needed*.
- **Disadvantage:** severe ceremony inflation; premature for 0.7 Alpha; conflicts
  with minimal process and voluntary participation.

**Investigation preference (not an implementation decision):** Alternative 1 is
the only option that both **acknowledges the architectural concern** and
**preserves Framework philosophy**. Alternatives 2 and 4 are misaligned.
Alternative 0 remains viable only while participant count and conceptual
collision stay low — which is already under pressure given RI + Alpha +
maturity roadmap coexistence. Alternative 3 is incomplete.

---

## Advantages

Of recognising a future thin Ecosystem & Governance Model as justified:

1. **Boundary clarity** among Framework, Community, Research, and stewardship.
2. **Adoption protection** — organisations can adopt without joining programs.
3. **Authority hygiene** — RI and feedback cannot silently become Norms.
4. **Evidence channel clarity** — Research Program becomes the named home for
   validation activity without inventing Runtime capabilities.
5. **Stewardship honesty** — maintainer responsibility domains can be discussed
   without redesigning Decision Owner semantics.
6. **Philosophy continuity** — Progressive Commitment applied to ecosystem
   engagement (opt-in depth).

---

## Disadvantages

1. **Additional conceptual surface** — another map readers must not confuse with
   Method/Runtime.
2. **Temptation to over-design** — once named, ecosystems attract role ladders,
   portals, and process packs.
3. **Documentation dual-maintenance** — ecosystem map must stay Informative and
   synchronized with Alpha/RI wording.
4. **Premature formality risk** — naming domains can feel like creating
   institutions even when content is thin.

---

## Risks

| Risk | Description | Mitigation direction (non-design) |
| ---- | ----------- | --------------------------------- |
| **Law creep** | Ecosystem text becomes treated as Normative Framework | Keep future model Informative / Research; never `FA-###` for Community roles |
| **Adoption coupling** | Community onboarding attached to Project Integration | Preserve adoption-only first experience |
| **RI norm contamination** | Official RI practice copied as Framework law | Maintain FA-002 Principle 7 and ADR-001 independence |
| **Ceremony inflation** | Linear role ladders and mandatory feedback | Prefer independent opt-in postures |
| **Steward / Decision Owner confusion** | Maintainers mistaken for project Decision Owners | Keep responsibility domains explicitly separated |
| **Doing nothing** | Implicit model fails under multi-org Alpha participation | Treat ecosystem as architectural concern before process design |

---

## Relationship to existing Framework Assets

| Existing artefact | Relationship to a future Ecosystem model |
| ----------------- | ---------------------------------------- |
| **FA-001–024 / ADRs / Method Spine** | Remain Framework product authority. Ecosystem model must not amend them. |
| **FA-002 Examples Are Not Norms** | Primary normative constraint on RI/Community Informative status. |
| **ADR-001 Informative Layer + Core independence from reference projects** | Primary architectural constraint: ecosystem concerns stay outside Core. |
| **ADR-002 Baseline evolution / claim honesty** | Stewardship domain touchpoint for releases and maturity claims. |
| **ADR-003 Project Integration** | Defines adoption; must remain sufficient without Community membership. |
| **ADR-004 Human Authority / agent participation** | Project-local; not replaced by Community roles. |
| **Alpha Adoption Guide** | Existing evaluation packaging; sits at Framework↔Research interface. |
| **Invocation Guide** | Post-adoption Framework operations; not Community onboarding. |
| **FAIS / Allocation Log / M2 Declaration** | Existing *repository construction governance* — precursor stewardship artefacts, not Community law. |
| **Whitepaper Ch. 10 (Reference Implementation)** | Already states RI validation/feedback posture; ecosystem model would *locate* that posture without redesigning it. |

**No Asset changes are proposed by this investigation.**

---

## Relationship to Alpha Research

Framework 0.7 Alpha is already a **research-shaped development baseline**:

- honest non-claims;
- RI as living exercise;
- temporary Adoption Guide with structured feedback;
- maturity roadmap (Beta / 1.0) as future claim gates.

An Ecosystem & Governance Model would not replace Alpha Research. It would
**name the domain** in which Alpha Research sits (Research Program), and keep
that domain from collapsing into Framework Normative content or mandatory
Community membership.

Alpha activities should remain:

- voluntary;
- evidence-oriented;
- separable from “we pinned the Framework and use it.”

This investigation creates **no** Research Questions, Observation Catalogue, or
Validation Program. It only notes that such concepts — if introduced later —
belong in Research Program space, not as Runtime Assets.

---

## Open Questions

These remain open **after** justifying the concern; they are not answered here
and must not be treated as tasks created by this document:

1. What **minimum** published artefact (if any) should carry a future thin
   Ecosystem map — and under what document force?
2. How should **official** vs **unofficial** Reference Implementations be
   distinguished without creating Normative dependency?
3. What evidence threshold should inform **Beta** claim defensibility — without
   inventing a Validation Program prematurely?
4. How should steward succession / multi-maintainer collaboration work when the
   project is no longer single-steward — still without Community bureaucracy?
5. Should “Observation Catalogue” remain an informal research notebook concept,
   or eventually become a Research Program artefact (still non-Asset)?
6. How visible should Community opt-in paths be on the human landing page without
   dominating adoption?
7. When (if ever) does Alternative 0 become unsafe — what observable trigger
   (participant volume, conflicting RI practices, claim disputes)?

---

## Recommendation

### Ecosystem Model justified

The Framework has reached a maturity level where its **ecosystem is an
architectural concern separate from the Framework Method**.

**Justification summary:**

1. Multiple adjacent domains already operate (Framework product, repository
   stewardship, RI validation, Alpha evaluation, informal Community).
2. Those domains are **genuinely distinct** and **should remain separated**.
3. Without explicit boundary language, the main failure modes are adoption
   friction, Normative contamination, and stewardship/Decision Owner confusion.
4. A **thin** Ecosystem & Governance Model aligns with proportional governance,
   evidence-first evolution, Human Authority, Decision Owner locality, minimal
   process, and technology neutrality.
5. Heavy Community systems, Framework-embedded roles, or immediate
   implementation would **weaken** those principles.

### What “justified” means — and does not mean

| Means | Does not mean |
| ----- | ------------- |
| Future work may treat ecosystem boundaries as a first-class architectural concern | Create Assets, ADRs, or governance rules now |
| Prefer Alternative 1 (thin boundary model) over embedding Community in Framework | Design roles, ladders, onboarding, or processes |
| Keep adoption separated from voluntary Research/Community participation | Launch a Validation Program or Observation Catalogue |
| Place Reference Implementations primarily in Research Program | Change RI Informative status or Fitness Challenge Platform governance statements |

### Explicit non-actions (this investigation)

- No new Framework Assets
- No governance rules
- No Community documentation
- No onboarding flows
- No role definitions
- No implementation plans
- No ADRs
- No Research Questions

---

## Success criteria check

| Criterion | Result |
| --------- | ------ |
| Determine whether ecosystem has become an architectural concern separate from Framework Method | **Yes — it has** |
| Determine whether a future Framework Ecosystem & Governance Model is justified | **Yes — thin boundary model justified** |
| Avoid designing or implementing the model | **Satisfied** |

---

## End of Design Investigation
