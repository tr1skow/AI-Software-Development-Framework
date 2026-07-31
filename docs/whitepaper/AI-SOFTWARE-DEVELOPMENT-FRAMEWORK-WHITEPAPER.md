# AI Software Development Framework — Whitepaper

| Attribute | Value |
| --------- | ----- |
| Document | AI Software Development Framework Whitepaper |
| Version | 0.7 Alpha |
| Classification | Informative / Reference |
| Status | Publication candidate — WP-A5 editorial complete |
| Framework baseline | Framework 0.7 Alpha; Runtime Foundation M2 |

**This whitepaper is Informative / Reference.** It is not Normative Method, not
Normative Framework, and not an Architecture Decision Record. Authoritative
rules live in Accepted ADRs and labelled Framework Assets under a pinned
Baseline.

**If this whitepaper and a Framework Asset appear to disagree, the Accepted
ADRs and labelled Framework Assets are authoritative.**

This whitepaper documents the AI Software Development Framework as of
**Framework 0.7 Alpha**.

---

## Abstract

AI is changing the speed of software development faster than software
governance is evolving. Throughput rises. Accountability, proportionate
ceremony, reproducible control, and Stop when knowledge is missing do not
automatically follow. That gap is a governance problem, amplified by AI
assistance — not solved by another tool or vendor workflow.

The **AI Software Development Framework** contributes a vendor-neutral
**stable governance architecture** for human–agent collaboration on real
software changes: Human Authority as an engineering invariant; Classification
and Runtime to bind and compose proportionate behaviour per change; and Project
Integration so projects adopt the Framework without forking its meaning.
Reference implementations exercise and inform the Framework; they do not define
it.

Current maturity is **Framework 0.7 Alpha** with **Runtime Foundation M2**
declared. The Framework intentionally communicates only demonstrated
architectural capability. This is a development baseline for evolution and the
first official reference implementation — not production readiness, not Beta or
1.0, and not a published public consumer Baseline.

Accountable engineering remains necessary even as assisting technologies
change. This Framework provides stable governance architecture for that
condition.

---

## Executive Summary

### The core message

Software development is accelerating faster than the governance models meant to
control it.

The **AI Software Development Framework** answers with a **stable governance
architecture** — Human Authority, proportionate Runtime behaviour, and project
adoption without forking Framework meaning — under honest maturity claims as of
**Framework 0.7 Alpha**.

This summary is Informative / Reference only. It is not Framework law.

### The problem

Coding tools and agents raise throughput. They do not, by themselves, answer who
is accountable for material outcomes, how much process is enough for a given
change, what must be true before implementation, when to Stop instead of invent,
or how later teams reproduce the rules that governed the work.

That gap is a **governance** shortage, amplified by AI speed — not solved by
another vendor workflow.

### The architectural approach

The Framework is vendor-neutral and capability-based. Consuming projects
**adopt** it through Project Integration (Baseline pin, Local Project Entry,
Project Policy) so humans and agents share one discovery root and precedence
model. They specialise within invariants; they do not rewrite Framework law per
repository.

For a *change*, **Classification** produces an **Effective Classification** —
the accepted binding set in force. **Runtime** composes the bound capabilities
(and skips what is unbound). Discovery, when bound, establishes sufficient
understanding of problem and system context and feeds the **Runtime Execution
Spine**; it does not replace Human Authority.

Authoritative definitions live in Accepted ADRs and labelled Framework Assets
under the project’s pin — not in this whitepaper.

### Human Authority

**Human Authority** is an architectural invariant: **responsibility cannot be
automated, even when execution can.** It is a property of accountable
engineering, not a limitation of AI. Agents may draft, assist, and execute
within Policy; material acceptance remains with knowable human Decision Owners.
Authority is determined by accountability rather than capability.

### Maturity and current status

The Framework intentionally communicates only **demonstrated architectural
capability**. Maturity is not created by version numbering. Confidence is earned
through demonstrated behaviour, not declared intent.

As of this whitepaper:

| Status | Meaning |
| ------ | ------- |
| **Architecture Foundation** | ADR-001–004 Accepted |
| **Runtime Foundation M2** | Declared — Runtime-essential ownership gaps closed (Runtime Execution Spine + Discovery) |
| **Framework 0.7 Alpha** | Official **development baseline** for evolution and the first official reference implementation |

**Runtime Execution Spine Complete ≠ Runtime Foundation M2.** Spine Complete
closed spine ownership; M2 additionally required Discovery as Runtime-essential
when bound.

### Reference Implementation

The **Fitness Challenge Platform** is the first official **reference
implementation**. The Framework governs it; it informs Framework evolution. It
is Informative — not Framework law, not proof of correctness, and not a
substitute for a consuming project’s own adoption.

### What this does not claim

Framework 0.7 Alpha / Runtime Foundation M2 does **not** mean:

- production-ready Framework;
- complete Runtime (all enhancing and adoption surfaces finished);
- Framework 0.7 Beta or Framework 1.0;
- a published public consumer Baseline;
- assured outcomes for every adopter.

### Why it matters

The **AI Software Development Framework** provides a stable governance
architecture for software engineering in an era of rapidly evolving AI
capabilities.

Detail, rationale, and pointers into normative documents follow in the chapters
below.

---

## Reading Guide

This whitepaper is intentionally organised from problem to architecture.

Readers unfamiliar with the Framework are encouraged to read it sequentially.

Readers already familiar with the Framework may use individual chapters as
reference.

Throughout the document, each architectural concept is introduced by
explaining:

- why it exists,
- what it is,
- and where its normative definition lives.

This Reading Guide is an Informative aid only. It does not define Framework
behaviour.

---

## 1. Introduction

### Why a whitepaper

Organisations evaluating AI-assisted software development need more than a
repository landing page and more than a library of procedures. They need a
coherent explanation of the problem being solved, the design philosophy behind
the response, and an honest account of what is mature enough to build on.

This whitepaper provides that explanation for the **AI Software Development
Framework**: a vendor-neutral framework for disciplined collaboration between
humans and AI agents on real software projects.

It exists so a technical decision-maker can understand the Framework’s
architecture and posture **without first memorising asset IDs** — while still
knowing exactly where binding definitions live when decisions must be made.

### What this document is — and is not

| This whitepaper is | This whitepaper is not |
| ------------------ | ---------------------- |
| An Informative / Reference architectural narrative | Framework law |
| A guide for evaluating the Framework | A Local Project Entry or agent instruction root |
| A map into ADRs and Framework Assets | A substitute for those documents |
| Versioned with the Framework development baseline | A daily living operations manual |

Day-to-day application of the Framework uses the published Framework Assets
(for example [FA-003 (Framework Overview)](../FA-003-FRAMEWORK-OVERVIEW.md)
and the capability guides) under a pinned Baseline. Architectural decisions
remain in Accepted ADRs under [`docs/adr/`](../adr/).

### Who should read it

**Primary audience:** software architects, technical leads, engineering
managers, and CTOs evaluating AI-assisted delivery models.

**Secondary audience:** AI governance and risk stakeholders; researchers and
conference readers interested in human–agent engineering governance.

**Practitioners** implementing changes day to day should treat this document as
orientation, then follow the Framework Assets and project Local Project Entry —
not this whitepaper — as working guidance.

### How the Framework is organised (preview only)

At a high level — detailed in later chapters:

- **Architecture Decision Records (ADRs)** record frozen architectural
  decisions.
- **Framework Assets (`FA-###`)** implement Method, integration, and Runtime
  capabilities as labelled Normative or Recommended content.
- **Runtime** describes how capabilities are invoked and composed for a
  *change*.
- **Human Authority** — **responsibility cannot be automated, even when
  execution can**; material product and acceptance decisions remain with
  accountable humans.

Normative detail is not restated here. Later chapters follow the Reading
Guide pattern: why, what, then where the normative definition lives.

### What comes next

Before describing the Framework itself, it is necessary to understand the
engineering problem it was designed to solve.

---

## 2. Problem

### The core message

AI coding tools accelerate *implementation* faster than organisations improve
*shared understanding*, *accountability*, and *reproducible control* of
software change.

That gap is not primarily a tooling shortage. It is a **governance** shortage.

AI did not fundamentally change the need for engineering governance. Instead,
it amplified existing problems by dramatically increasing development speed,
reducing the cost of change, and making autonomous contribution practical.

### What goes wrong in practice

When generation becomes cheap and fast, long-standing engineering failure modes
intensify:

- **Premature code** — solutions appear before the problem, constraints, or
  blast radius are established.
- **Hidden architecture** — structural choices land in diffs and chat threads
  without an explicit, accountable record.
- **Invented contracts** — interfaces, data shapes, and behavioural assumptions
  are filled in silently when evidence is missing.
- **Weak review and acceptance** — speed outruns independent challenge,
  verification against a known bar, and human acceptance of material outcomes.
- **Ceremony extremes** — either everything becomes heavyweight process, or
  material risk is treated as “just a small PR.”
- **Vendor-shaped workflow** — collaboration rules collapse into one IDE,
  assistant, or prompt pack, so the “method” cannot travel with the product.

None of these failures require malicious intent. They emerge when acceleration
is unbounded by a shared model of authority, proportion, and stop conditions.

### Why more tools do not solve it

New models, agents, and IDE features can raise throughput. They do not, by
themselves, answer:

- Who is accountable when a change is material?
- How much process is enough for *this* change — and how do we know?
- What must be true before implementation begins?
- What happens when required knowledge is missing — invent, or stop?
- How does a later team reproduce the Framework rules that governed the work?

Those are **governance** questions. Answering them with another prompt template
or another vendor workflow relocates the problem; it does not close it.

### Governance properties the situation demands

An adequate response makes several properties explicit — not as slogans,
but as engineering constraints:

**Human Authority.** **Responsibility cannot be automated, even when execution
can.** Material product, architecture, risk, merge, and release accountability
remain with humans. Acceleration is compatible with human accountability;
silent self-approval is not.

**Proportionate ceremony.** Process depth scales with the change — with risk,
impact, reversibility, uncertainty, and blast radius. Treating diff size as
risk is a category error: a small change can be highly material.

**Reproducibility.** Framework behaviour that governed a change is pin-able and
offline-resolvable. Floating “whatever the assistant used today” is not a
Baseline for serious products.

**Stop.** When material facts, requirements, or architectural intent are
unknown, the correct engineering move is to surface the unknown and Stop —
not to invent a plausible continuation.

**Shared semantics for humans and agents.** If humans and agents follow
different precedence, different roots of truth, or different ideas of
“done,” governance fractures under exactly the load AI assistance creates.

### Architectural motivation (problem framing only)

The required response is therefore architectural, not merely procedural
theatre and not merely better autocomplete:

- a clear unit of governed work (a *change*);
- a way to bind *which* engineering behaviours apply to that change;
- explicit ownership of those behaviours (understanding, deciding, planning,
  implementing, reviewing, verifying, accepting);
- a project gateway and precedence model that both humans and agents can
  discover without inventing;
- room for tools to vary without rewriting the method.

### Where related normative ideas live

The Framework’s Method and Core answers are defined elsewhere. Readers seeking
binding principles should consult, in particular,
[FA-002 (Method Spine)](../FA-002-METHOD-SPINE.md) and
[ADR-001 (Framework Core Semantics)](../adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md).
This chapter intentionally does not restate them.

### What this implies

The question is therefore no longer whether AI should participate in software
development.

The question is how software development can remain governed while AI
participation continues to increase.

The following chapter turns from problem to **design principles**: the
philosophical commitments that shape a durable answer.

---

## 3. Design Principles

### The core message

A durable answer to AI-amplified engineering risk is not a larger prompt library.
It is a small set of **design principles** that keep authority, proportion,
ownership, and tool choice explicit — so governance can survive speed.

Every design principle reflects an **engineering trade-off**. The Framework
intentionally balances governance, flexibility, Human Authority, AI
participation, and proportionate ceremony rather than maximising any single
concern. These are conscious design choices, not absolute truths.

This chapter explains those principles as philosophy. It does not define Runtime
mechanics, catalogue capabilities, or implementation procedures. Binding
wording lives in Accepted ADRs and labelled Framework Assets.

### Human Authority

**Why.** If accountability dissolves into the tool, organisations cannot govern
material outcomes no matter how fast code appears.

**What.** Humans remain accountable for material product, architecture, risk,
merge, and release decisions: **responsibility cannot be automated, even when
execution can.** Agents may accelerate work only within human-approved bounds;
they do not silently own material acceptance.

**Where.** Normative Method:
[FA-002 (Method Spine)](../FA-002-METHOD-SPINE.md). Agent participation
constraints:
[ADR-004 (Agent Interaction Model)](../adr/ADR-004-AGENT-INTERACTION-MODEL.md).

### Capability-first architecture

**Why.** Document piles and vendor workflows do not compose cleanly under
change pressure. Teams need named engineering *behaviours* with clear meaning.

**What.** The Framework is organised around capabilities — distinct
responsibilities such as understanding, deciding, implementing, reviewing, and
accepting — rather than around a single tool’s happy path. Documents implement
capabilities; they are not themselves the Core model.

**Where.** Architectural decision:
[ADR-001 (Framework Core Semantics)](../adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md).

### Classification before execution

**Why.** Without an explicit binding step, ceremony is either guessed, skipped,
or applied uniformly — all of which fail under mixed risk.

**What.** Before Framework-governed execution proceeds, a change is classified
so the applicable behaviours and depths are knowable. Labels alone are not
enough; binding is the point.

**Where.** Concept and rules:
[FA-009 (Change Classification Guide)](../FA-009-CHANGE-CLASSIFICATION-GUIDE.md);
architecture in ADR-001.

### Progressive / proportionate ceremony

**Why.** Fixed heavyweight process rejects legitimate trivial work; fixed
lightweight process under-protects material work.

**What.** Process depth scales with the change — with risk, impact,
reversibility, uncertainty, and blast radius. Progressive commitment keeps
hard-to-reverse binds from outrunning reduced uncertainty.

**Where.** Normative Method in FA-002; Classification operationalises proportion
in FA-009.

### Explicit ownership

**Why.** When every artefact “kind of” reviews, verifies, and approves, nothing
is accountable and agents fill gaps by invention.

**What.** Each major Runtime responsibility has a singular owner: one
capability establishes understanding; another records material binds; another
structures work; another materialises artefacts; others challenge, evidence,
and accept. Overlap is treated as a design defect.

**Where.** Capability ownership is defined across the published Runtime assets
and summarised architecturally in ADR-001. Later chapters map relationships
without restating guides.

### Stop over invention

**Why.** Plausible invention is cheap under AI assistance and expensive in
production.

**What.** When material knowledge is missing or conflicting, the correct move
is to Stop and escalate — not to invent requirements, architecture, contracts,
or precedence winners.

**Where.** Normative Method in FA-002; Stop/escalation appears throughout Runtime
assets and agent rules in ADR-004 / FA-005.

### Tool neutrality

**Why.** A method that only works inside one vendor’s assistant is not a
product-governing framework; it is a plugin narrative. AI tools also evolve
faster than engineering governance. By remaining tool-neutral, the Framework
aims to outlive individual AI systems and remain applicable as the technology
landscape changes.

**What.** Normative Framework concepts do not depend on a specific AI vendor,
IDE, or chat product. Adapters and examples may be tool-specific; Normative
content does not.

**Where.** Normative Method in FA-002; project integration and precedence in
[ADR-003](../adr/ADR-003-PROJECT-INTEGRATION-AND-PRECEDENCE.md).

### Examples are not norms

**Why.** Teams confuse sample paths, starter wording, and reference
implementations with binding rules — then “customise” by weakening invariants.

**What.** Examples, starters, and reference implementations explain and
validate. They do not outrank Normative Method or Normative Framework content.
On conflict, labelled normative sources win.

**Where.** Normative Method in FA-002; labelling force in
[FA-001 (Normative Labelling Convention)](../FA-001-NORMATIVE-LABELLING-CONVENTION.md).

### What these principles demand next

Principles alone do not govern software development.

They require an architecture that turns those principles into operational
behaviour.

The next chapter outlines that **architecture** at ADR altitude — still without
turning this whitepaper into a procedures manual.

---

## 4. Architecture Overview

### The core message

The Framework turns design principles into operational behaviour through a
small number of **architectural layers**: Method and Core semantics, a Runtime
for composing capabilities on a change, Classification as the binding step,
Project Integration as the shared gateway into a consuming project, and Human
Authority preserved as an architectural invariant — not a courtesy checklist.

This chapter is a map. It does not catalogue every capability or reproduce
ADR decision bodies.

### Why the Framework is capability-first

**Why.** Governance fails when “the process” is an undifferentiated document
set or a vendor script. Teams need composable responsibilities with explicit
meaning.

**What.** The Framework is organised around **responsibilities** rather than
phases, roles, or tools. Framework Core defines capabilities as named
engineering behaviours. Assets implement those behaviours. The Core is
semantic; files are not the model.

**Where.** [ADR-001 (Framework Core Semantics)](../adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md).

### Why Runtime exists

**Why.** Listing capabilities is not enough. Teams need rules for how
capabilities are invoked, composed, skipped, interrupted, and completed for a
unit of work — without forcing a mandatory waterfall lifecycle.

**What.** **Runtime** is the behavioural model for capability execution on a
**change**. Informative teaching views (such as the Runtime Execution Spine)
may describe a normal path; they are not themselves Runtime law.

**Where.** ADR-001 (Runtime Model). Spine wording also appears in the
[Runtime Foundation M2 Declaration](../governance/RUNTIME-FOUNDATION-M2-DECLARATION.md)
as an Informative view.

### Why Project Integration precedes Runtime

**Why.** Runtime behaviour is meaningless if humans and agents disagree on
where truth starts, which Baseline applies, or who the Decision Owner is.

**What.** **Project Integration** establishes the consuming project’s gateway:
pinned Baseline, Local Project Entry, Project Policy, and shared precedence.
Only then can Framework-governed work on a change proceed coherently.

**Where.** [ADR-003 (Project Integration and Precedence)](../adr/ADR-003-PROJECT-INTEGRATION-AND-PRECEDENCE.md);
guides [FA-004](../FA-004-PINNING-AND-BASELINE-GUIDE.md)–[FA-008](../FA-008-GREENFIELD-INITIALISATION-CHECKLIST.md).
Pinning mechanics:
[ADR-002 (Baseline Pinning and Versioning)](../adr/ADR-002-BASELINE-PINNING-AND-VERSIONING.md).

### Why Classification binds behaviour

**Why.** Fixed scripts either over-fit one delivery style or under-serve mixed
risk. Binding scales; scripts do not.

**What.** **Change Classification** selects which capabilities apply and at
what depth for a change. It produces a binding set consumed by Runtime. It
does not redefine how Review, Verification, or Approval behave once bound, and
it is not a project-management status field. (Binding versus workflow is
developed in the Classification chapter.)

**Where.** ADR-001; [FA-009](../FA-009-CHANGE-CLASSIFICATION-GUIDE.md) /
[FA-010](../FA-010-CLASSIFICATION-RECORD-TEMPLATE.md).

### Why Human Authority is architectural

**Why.** If Human Authority were only a policy slogan, agents could still
self-approve material outcomes “because the process allowed it.”

**What.** Human Authority is embedded in Method, agent interaction rules, and
Acceptance behaviour: **responsibility cannot be automated, even when execution
can.** Material acceptance remains with a human Decision Owner; agents
participate in capabilities subject to Policy and Classification — they do not
replace Approval.

**Where.** FA-002; ADR-004; Acceptance Chain (Review, Verification, Approval)
assets (for example [FA-015](../FA-015-APPROVAL-GUIDE.md)).

### Why ADRs and Framework Assets are separated

**Why.** Mixing frozen architectural decisions with evolving product guidance
either freezes the wrong things or lets “docs drift” silently rewrite
architecture.

**What.**

| Layer | Role |
| ----- | ---- |
| **ADRs** | Accepted architectural decisions (why the system is shaped this way) |
| **Framework Assets (`FA-###`)** | Product content that implements Method/Core under labelling force |
| **Project work products** | Entry, Policy, classification records, outcomes — normative *in* a project, not Framework law |
| **This whitepaper** | Informative / Reference narrative |

**Where.** Labelling and force:
[FA-001](../FA-001-NORMATIVE-LABELLING-CONVENTION.md). Asset identity:
[FAIS](../governance/FRAMEWORK-ASSET-IDENTIFICATION-STANDARD.md).

### Stable vs evolvable architecture

*Informative.*

The Framework intentionally separates **stable architectural concepts** from
**evolvable implementation guidance**.

Architectural invariants — Method principles, Core semantics, Runtime verbs,
Classification as binding, Project Integration, Human Authority — are expected
to remain durable across Framework versions. Runtime capability guidance,
templates, reference implementations, and adoption surfaces may evolve as
experience grows.

That separation is why ADRs and Framework Assets are not the same kind of
document.

### How the major layers relate

At Informative altitude, the following diagram illustrates **architectural
relationships**. It is **not** execution order, **not** a Runtime workflow, and
**not** mandatory sequencing.

Runtime behaviour for a change is governed by the **Effective Classification**
(the accepted binding set in force) — not by the visual order of layers below.

```text
Method Spine (Normative Method)
        │
        ▼
Framework Core Semantics (capabilities, Runtime, Classification)     ← ADRs
        │
        ▼
Pinned Baseline (reproducible Framework content)                     ← ADR-002
        │
        ▼
Project Integration (Entry, Policy, precedence)                      ← ADR-003 / FA-004–008
        │
        ▼
Change → Classification binds capabilities/depths                    ← FA-009
        │
        ▼
Runtime composes bound capabilities (agents under ADR-004)
        │
        ▼
Human Authority closes material acceptance
```

Later chapters deepen Runtime, Classification, and capability relationships.
They still will not replace the ADRs or capability guides.

### What comes next

Architecture explains structure.

Runtime explains behaviour.

The next chapter develops **Runtime** as the behavioural model for composing
bound capabilities on a change — without turning the diagram above into a
mandated process.

---

## 5. Runtime

### The core message

**Runtime** is how the Framework turns bound capabilities into **operational
behaviour** on a change: invoke, compose, skip, interrupt, and complete —
without depending on a particular AI tool. Binding decides what runs; Runtime
does not invent a mandatory workflow in place of Classification.

Runtime is not a document.

Runtime is the Framework behaving while work is being performed.

The same architectural structure may produce **different Runtime behaviour**
depending on the **Effective Classification** that governs the change.

This chapter explains Runtime as an architectural concept. It does not
reproduce [ADR-001](../adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md), catalogue
every capability, or provide implementation procedures.

### Why Runtime exists

**Why.** A catalogue of responsibilities is inert until there are rules for
using them under real change pressure: what runs, what may be skipped, what
may interrupt, and when work is complete at the bound depth.

**What.** Runtime is the behavioural invocation model for capabilities during
a change. The **change** is the unit of Framework Runtime — a bounded unit of
intended work — not a release train, sprint ceremony, or chat session.

**Where.** ADR-001 (Runtime Model).

### Why Runtime is capability-based

**Why.** Phase-based or role-based runtimes reintroduce fixed scripts and
blur ownership (“everyone reviews a little”).

**What.** Runtime operates on **capabilities** — named responsibilities with
explicit ownership. Composition is about which capabilities are bound and how
they interact, not about advancing a universal stage machine.

**Where.** ADR-001 (Capability Semantics and catalogue membership).

### Runtime as operational behaviour

**Why.** Readers otherwise treat Runtime as “the process diagram.”

**What.** For a Framework-governed change, Runtime concerns behavioural verbs
such as:

- **Invoke** — a bound capability is brought into play;
- **Compose** — capabilities combine (for example challenge and evidence
  before acceptance);
- **Skip** — an unbound capability is not required for this change;
- **Interrupt** — progress halts when continuation would require silent
  invention or unresolved conflict;
- **Complete** — a capability’s required outcome is satisfied at the bound
  depth.

These verbs describe behaviour. They are not a checklist of project-management
gates.

**Where.** ADR-001 (Normative Runtime behaviour).

### Effective Classification as behavioural binding

**Why.** Without a knowable binding set, Runtime cannot tell which behaviours
apply, and agents invent ceremony or skip it.

**What.** **Change Classification** produces the binding set and depths for a
change. The **Effective Classification** is the currently authoritative
accepted classification revision whose binding set governs Runtime execution
for that change. Draft classifications are not Effective. Runtime executes
against exactly one Effective Classification at a time for a Framework-governed
change in progress.

**Where.** Concept in ADR-001; operational rules in
[FA-009 (Change Classification Guide)](../FA-009-CHANGE-CLASSIFICATION-GUIDE.md).

### Runtime Execution Spine (Informative view)

**Why.** External readers need a teachable picture of “normal” execution
without mistaking it for mandatory law.

**What.** The **Runtime Execution Spine** is an Informative architectural view:
the minimal set of Runtime capabilities required to govern normal execution
from project entry through approval (Project Integration, Classification,
Decision Support, Planning, Implementation Support, Review, Verification,
Approval). **Discovery** sits outside the Runtime Execution Spine and feeds it
when bound.

The Runtime Execution Spine is **not** a new capability, **not** a new Runtime
semantic, and **not** a lifecycle. Skip, compose, and interrupt still apply.
Classification binding — not the spine picture — decides what runs.

**Where.** [Runtime Foundation M2 Declaration](../governance/RUNTIME-FOUNDATION-M2-DECLARATION.md);
capability guides under FA-004–024.

### Why Runtime avoids treating teaching views as mandatory paths

**Why.** Reading an Informative path as a mandatory sequence either rejects
legitimate variation (hotfix, spike, trivial docs) or becomes fiction that
teams route around.

**What.** Runtime allows different delivery situations to compose the same
capability model under different bindings and Progressive Commitment bounds.
Informative waypoints and the Runtime Execution Spine may teach a common path;
they are not “always do these steps in this order.” Classification binding —
developed in the next chapter — decides what runs.

**Where.** ADR-001 (waypoints Informative; Runtime variants).

### Why Stop interrupts rather than advances Runtime

**Why.** A “next step” culture rewards invention when knowledge is missing.

**What.** **Stop and Escalation** is always available. It interrupts unsafe
continuation — including when material unknowns would force silent invention
or precedence cannot be resolved. Stop does not advance the change toward
acceptance; it prevents false progress.

**Where.** ADR-001; Method in FA-002; Stop cues across Runtime assets.

### Why Runtime remains tool-neutral

**Why.** If Runtime were defined as a vendor agent loop, the Framework would
expire with that vendor’s product surface.

**What.** Runtime concepts (change, bind, invoke, compose, interrupt, complete)
remain expressible across tools. Tool adapters may automate participation;
they do not redefine Runtime.

**Where.** FA-002; ADR-004.

### What comes next

Runtime therefore requires a mechanism that determines which behaviours apply
to a particular change.

That mechanism is **Change Classification**.

---

## 6. Change Classification and Effective Classification

### The core message

**Change Classification** is the Framework’s **behavioural binding** step: it
makes knowable which capabilities apply to a change, and at what depth, so
Runtime can behave without prescribing a fixed workflow and without treating a
label as governance by itself.

**Effective Classification** is the accepted binding set actually in force
while work proceeds.

This chapter explains why binding exists. It does not reproduce
[FA-009 (Change Classification Guide)](../FA-009-CHANGE-CLASSIFICATION-GUIDE.md),
walk through templates, or state Framework law.

### Why Classification exists

**Why.** After Project Integration, humans and agents still need a change-scoped
answer to: *what engineering behaviours are required for this work, and how
deep must they go?* Without that answer, teams guess, skip, or over-apply
ceremony.

**What.** Classification produces a **binding-complete** result for a change:
not merely a nickname, but the set of bound capabilities and depth expectations
Runtime will use.

**Where.** Architectural role in
[ADR-001](../adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md); operational guide
FA-009; record shape [FA-010](../FA-010-CLASSIFICATION-RECORD-TEMPLATE.md).

### Why bind behaviour instead of prescribe workflow

**Why.** Prescriptive workflows encode one delivery story. Real portfolios
contain trivial edits, migrations, incidents, spikes, and architecture shifts
under one product. Binding is how the Framework stays proportionate without
freezing a single path — the point restated briefly in earlier chapters.

**What.** Classification **binds** behaviours and depths. Runtime then
invokes, composes, skips, or interrupts those behaviours. The Framework does
not replace binding with a universal stage checklist.

**Where.** ADR-001; FA-009.

### Effective Classification as authoritative binding

**Why.** Multiple drafts, chat summaries, or stale tickets do not compete as
“the rules for this change.”

**What.** **Effective Classification** is the currently authoritative
**accepted** classification revision whose binding set governs Runtime
execution for the change.

Intuitively: Effective Classification represents the Framework’s **current
understanding of how a specific change should be governed** — while that
understanding remains accepted and in force.

Formally:

- **Accepted** and **Effective** are intentionally the same authority state.
- Decision Owner acceptance makes a revision Effective immediately.
- There is no separate activation stage.
- **Draft** classifications are never Effective.
- Framework-governed execution does not proceed without an Effective
  Classification.
- Exactly **one** Effective Classification governs a Framework-governed change
  at a time.

**Where.** FA-009 (Effective Classification rules).

### Why reclassification exists

**Why.** Knowledge and scope change during real work. Continuing under a
superseded binding set is silent under-governance.

**What.** When material scope or knowledge changes, Classification is revised.
Acceptance of a new revision **supersedes** the prior Effective Classification
immediately. Work does not continue under the superseded binding set.
Historical revisions remain evidence; they do not remain in force.

Reclassification is **not** an exception or a sign that governance failed.

It is the mechanism that allows governance to **evolve as understanding
evolves** — including when Discovery establishes new system context, or when
implementation reveals material impact that the prior binding set did not
cover.

**Where.** FA-009 (reclassification).

### Why Classification enables proportionate governance

**Why.** Uniform ceremony is either wasteful or unsafe. Diff size is a poor
proxy for materiality.

**What.** Classification is driven by materiality and uncertainty (and related
impact factors). It may tighten beyond project defaults for one change. It does
not weaken Method or Core invariants. Unknown material factors are not treated
as low risk — Stop instead. Triviality is justified, not assumed.

Recommended labels and depth-band names may help communication; **bindings**
govern. Projects may specialise labels through Project Policy without renaming
away the binding semantics.

**Where.** FA-009; Method proportion in FA-002; Policy specialisation in
ADR-003 / FA-007.

### What Classification does not own

Classification does not redefine Review, Verification, or Approval behaviour
once those capabilities are bound. It does not materialise artefacts, record
irreversible product binds, or approve merge. Those responsibilities belong to
other capabilities — mapped in the Capability Architecture chapter.

### What comes next

Classification determines which behaviours apply.

The next chapter explains how those behaviours are organised into
**capabilities**.

---

## 7. Capability Architecture

### The core message

The Framework is built from **capabilities** — reusable, independently owned
engineering responsibilities — so governance can **compose** behaviour for a
change under Effective Classification rather than encode one fixed delivery
script.

This chapter explains the *architecture of capabilities*. It does not
reproduce capability guides or describe each catalogue member in depth.

### Why capabilities are the building blocks

**Why.** Fixed delivery scripts freeze one story. Phases invite waterfall
misreading. Roles scatter accountability (“the reviewer also verifies and
approves”). Tools change faster than governance.

**What.** A **capability** is a named responsibility with explicit meaning and
ownership. Framework Assets implement capabilities; they are not substitutes
for the capability model itself.

**Where.** [ADR-001 (Framework Core Semantics)](../adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md).

### Ownership over sequence

**Why.** If every step “owns a little of everything,” nothing is accountable
and agents invent the missing pieces.

**What.** Capability architecture prefers **clear ownership** over mandated
sequence. A capability owns one Runtime responsibility (for example:
establishing understanding; recording material binds; structuring multi-step
work; materialising artefacts under a fitness contract; challenge; evidence;
acceptance). Sequence, when it matters, emerges from composition rules and
Effective Classification — not from blurring owners.

**Where.** Ownership boundaries are stated in the published capability guides
(FA-011–024 and related). This whitepaper does not restate those guides.

### Composition over process

**Why.** Process manuals prescribe paths. Composition asks which
responsibilities interact for *this* binding set.

**What.** Runtime **composes** bound capabilities (for example, Acceptance
consumes challenge and evidence outcomes). Unbound capabilities are skipped.
Stop may interrupt any composition. That is governance by composition, not by
a universal playbook.

**Where.** ADR-001 Runtime composition; FA-009 binding.

### Independence between capabilities

**Why.** Coupled mega-procedures cannot evolve, specialise, or fail safely in
parts.

**What.** Capabilities remain **independently meaningful**. Classification may
bind one without another when proportionate. Sibling capabilities (for example
challenge and evidence) may proceed in parallel when both are bound. One
capability does not silently absorb another’s outcome vocabulary.

**Where.** Acceptance Chain and mid-loop guides encode non-overlap; architecture
in ADR-001.

### Why capabilities remain reusable

**Why.** Greenfield, brownfield, hotfix, and spike work should not need
different Core models.

**What.** The same capability catalogue is reused under different Effective
Classifications, delivery contexts, and control postures. Variation lives in
**binding and depth**, not in reinventing the responsibility set for each
situation.

**Where.** ADR-001 (adoption dimensions; Runtime variants); FA-009.

### Runtime composition (relationship view)

**Why.** Readers need to see how capabilities relate without opening every
guide.

**What.** At Informative altitude — not as a mandated path:

- **Discovery** (when bound) establishes understanding and **feeds** the
  Runtime Execution Spine; it is outside the spine’s minimal normal set.
- **Decision Support** and **Planning** are independently bindable: binds
  versus work structure.
- **Implementation Support** materialises approved intent under the Artefact
  Fitness Contract definition.
- **Review**, **Verification**, and **Approval** form the Acceptance Chain:
  challenge, evidence, and acceptance — with Approval consuming the others
  when bound.
- **Stop** interrupts; it does not advance acceptance.

**Where.** Capability guides FA-011–024; spine definition in the
[Runtime Foundation M2 Declaration](../governance/RUNTIME-FOUNDATION-M2-DECLARATION.md).

### Capabilities, Framework Assets, and ADRs

| Concern | Home |
| ------- | ---- |
| What a capability *is*; catalogue membership; Runtime verbs | ADRs (esp. ADR-001) |
| How a capability behaves at product depth | Framework Assets (`FA-###`) |
| What ran for a specific change | Project work products (classification records, outcomes) |
| Narrative for external readers | This whitepaper (Informative / Reference) |

**Framework Assets describe capabilities.**

**Runtime composes and executes them.**

Documentation is not behaviour. Confusing these layers recreates “docs as law”
and “chat as Root.”

### Why this architecture improves long-term evolution

**Why.** AI tools, org shapes, and delivery styles will keep changing.

**What.** Capability-based architecture allows the Framework to evolve by
**extending or refining individual capabilities** without redesigning the
architecture as a whole.

Concretely, the Framework can:

- deepen or refine individual guides without rewriting Core semantics;
- add adoption surfaces without inventing a new Runtime;
- keep Human Authority and ownership boundaries stable while examples and
  reference implementations evolve.

That is the Stable vs Evolvable separation from Architecture Overview, applied
at the capability layer: durable concepts in ADRs and Method; evolvable
guidance in Assets.

### What comes next

Capabilities define responsibilities.

**Human Authority** determines who ultimately carries them.

---

## 8. Human Authority and Agent Participation

### The core message

**Human Authority** is an architectural invariant: **responsibility cannot be
automated, even when execution can.**

Human Authority is not a limitation of AI.

It is a property of **accountable engineering**.

Agents may contribute extensively. They do not become the authority for
material product, architecture, risk, merge, or release outcomes.

This chapter explains that invariant. It does not reproduce
[ADR-004 (Agent Interaction Model)](../adr/ADR-004-AGENT-INTERACTION-MODEL.md),
list Project Policy clauses, or state Framework law.

### Why responsibility cannot be delegated away

**Why.** When material accountability is treated as optional, speed produces
orphaned decisions: changes ship with no human owner for consequences.

**What.** Material responsibility remains with accountable humans: **responsibility
cannot be automated, even when execution can.** Delegation of *tasks* is
normal. Delegation of *accountability for material outcomes* is not the
Framework’s default, and is not implied by tool convenience.

**Where.** Normative Method:
[FA-002 (Method Spine)](../FA-002-METHOD-SPINE.md).

### Authority differs from execution

**Why.** Collapsing “who did the work” with “who owns the outcome” is how
organisations accidentally automate responsibility.

**What.**

| | |
|--|--|
| **Execution** | Performing work: drafting, searching, implementing, running checks, summarising |
| **Authority** | Accountability for material binds and acceptance of material outcomes |

AI participation primarily expands **execution**. Human Authority preserves
**authority**. The Framework is designed so those two can diverge safely.

### Authority versus capability

**Why.** Highly capable systems are easy to mistake for authorised systems.
Competence does not create accountability.

**What.** **Authority is determined by accountability rather than capability.**
An agent (or a human contributor) may be highly competent at execution and
still lack Decision Owner authority for material outcomes. Capability answers
“can this work be performed?” Authority answers “who is accountable if it is
wrong?”

**Where.** FA-002; ADR-004; Decision Owner declarations in Project Integration.

### AI participation versus human accountability

**Why.** “Humans must do everything” is neither realistic nor the point.
Blocking all agent execution would reject the value of assistance. Allowing
agents to self-approve material work would reject governance.

**What.** Agents may draft, assist, recommend, and — within Project Policy and
actor constraints — execute bound work. Humans retain accountability for
material classification acceptance, material binds, and material Approval.
Propose is not accept. Green checks are not acceptance.

**Where.** ADR-004; Acceptance and Classification guides (for example
[FA-015](../FA-015-APPROVAL-GUIDE.md), [FA-009](../FA-009-CHANGE-CLASSIFICATION-GUIDE.md)).

### Decision Owner

**Why.** Shared “the team decided” without a knowable owner recreates hidden
authority — especially under multi-agent drafting.

**What.** Framework-governed material work requires a knowable **human Decision
Owner** (declared through Project Integration). The Decision Owner is the
human authority locus for material acceptance and related accountability — not
a claim that the Owner personally performs every execution task.

**Where.** ADR-003 / [FA-005](../FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md) /
[FA-006](../FA-006-LOCAL-PROJECT-ENTRY-TEMPLATE.md); Approval in FA-015.

### Invariant under tooling change

**Why.** If Human Authority depended on a vendor’s “human in the loop” feature
flag, governance would expire with that product.

**What.** Human Authority remains invariant regardless of which IDE, model, or
agent orchestrator is used. Tools may change how execution is assisted; they
do not redefine who carries material responsibility.

**Where.** FA-002; tool neutrality; ADR-004.

### Agents contribute without becoming authorities

**Why.** High-quality agent output is easy to mistake for authorised outcome.

**What.** Contribution is welcome; authority is not inferred from fluency,
confidence, or volume. Agents do not invent Decision Owner, precedence winners,
or material facts when missing, and Stop rather than silently self-authorise
material bindings or acceptance.

**Where.** ADR-004; agent discovery contract in FA-005; Stop/escalation cues
across Runtime assets.

### Proportionate human involvement

**Why.** Requiring identical human ceremony for every change either burns trust
or trains people to rubber-stamp.

**What.** Human involvement scales with materiality and uncertainty through
**Effective Classification** and Policy: trivial justified work still needs
knowable acceptance authority at a stated depth; material work requires
stronger human challenge and acceptance paths (including fallback-review when
independence is unavailable — without waiving Review).

Human Authority is constant. **Depth of human engagement** is proportionate.

**Where.** FA-009; FA-002; FA-011 / FA-015.

### Relationship with Effective Classification

**Why.** Authority without binding becomes theatre; binding without authority
becomes automated process theatre.

**What.** Effective Classification determines which behaviours apply and how
deep. Human Authority determines who may accept material classification
revisions and material product outcomes under those behaviours. Agents may
draft classification or implementation artefacts; they do not replace Decision
Owner acceptance where material authority is required.

**Where.** FA-009; FA-015; ADR-004.

### What comes next

Human Authority defines who remains accountable.

**Project Integration** defines how that accountability is introduced into each
consuming project.

---

## 9. Project Integration

### The core message

Projects **adopt** the Framework.

**Project Integration** describes how that adoption is established: a local
gateway — pin, Entry, and Policy — so humans and agents share one root of
discovery and one precedence model, **without rewriting Framework law** for
each repository.

Adoption is the consumer relationship. Integration is the mechanism. The
Framework remains Framework-owned; projects do not make it project-specific by
forking its meaning.

This chapter is a sketch of that adoption architecture. It does not reproduce
[FA-004](../FA-004-PINNING-AND-BASELINE-GUIDE.md)–[FA-008](../FA-008-GREENFIELD-INITIALISATION-CHECKLIST.md),
walk through setup, or paste templates.

### Why every consuming project needs a Local Project Entry

**Why.** Without a canonical project-side root, humans follow README lore while
agents follow chat memory, tool defaults, or a second “agent-only” file —
and governance splits.

**What.** Each consuming project establishes **one** authoritative **Local
Project Entry**: a thin declaration-and-pointer gateway into Project
Integration. It is not the repository README and not an agent instruction root
that outranks the Entry.

**Where.** [ADR-003](../adr/ADR-003-PROJECT-INTEGRATION-AND-PRECEDENCE.md);
[FA-005 (Local Project Entry Guide)](../FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md);
[FA-006 (Local Project Entry Template)](../FA-006-LOCAL-PROJECT-ENTRY-TEMPLATE.md).

### Baseline pinning

**Why.** Floating “latest Framework advice” makes yesterday’s governed change
irreproducible and invites silent upstream drift.

**What.** The project **pins** a Framework Baseline identity and keeps that
content locally/offline resolvable. Framework Identity alone is not a pin.
Upgrades are explicit project acts.

**Where.** [ADR-002](../adr/ADR-002-BASELINE-PINNING-AND-VERSIONING.md); FA-004.

### Project Policy

**Why.** Projects need local thresholds, automation bounds, fallback-review,
and label mappings — without claiming the right to weaken Method or Core
invariants.

**What.** **Project Policy** specialises Framework defaults within invariants
and becomes project-normative after human acceptance. It is linked from the
Entry. It does not redefine the pinned Baseline by side effect.

**Where.** ADR-003; [FA-007 (Minimal Project Policy Starter)](../FA-007-MINIMAL-PROJECT-POLICY-STARTER.md).

### Framework governance versus project governance

**Why.** Collapsing the two either freezes every project into identical
ceremony or lets every project silently fork Framework law.

**What.**

| Layer | Governs |
| ----- | ------- |
| **Framework** (ADRs + labelled Assets under the pin) | Method, Core semantics, capability meaning, normative Framework guidance |
| **Project** (Entry, Policy, architecture, classification records, outcomes) | Local specialisation, thresholds, Decision Owner, project work products |

The whitepaper, README, and examples remain Informative relative to both.

### Specialise rather than modify

**Why.** “We patched the Framework docs in our fork” destroys shared meaning
across products and breaks pin reproducibility.

**What.** **Projects evolve by specialising the Framework rather than changing
it.** Specialisation happens through Policy and project architecture within
allowed bounds — not by editing Method Spine or Core invariants under a
“lightweight” exception. Classification may tighten for one change; it does
not loosen below Method/Core.

**Where.** ADR-003; FA-002; FA-009.

### Consistency across different projects

**Why.** A Framework that means something different in every repository is not
a framework.

**What.** Project Integration preserves consistency by requiring the same
gateway pattern everywhere: discover Entry → resolve pin offline → follow
Policy/context pointers → apply shared precedence → Stop when required
information is missing. Different projects may choose different postures and
thresholds; they share the same integration architecture and the same Human
Authority invariant.

**Where.** ADR-003; FA-005 agent discovery contract; FA-008 greenfield gate as
one adoption path.

### What comes next

Once adopted by a project, the Framework can be exercised through real software
development. Day-to-day operational use — how humans and AI assistants enter and
conduct Framework-governed work after Project Integration — is documented
separately in the
[Framework Invocation Guide](../FRAMEWORK-INVOCATION-GUIDE.md).

The next chapter explains the role of a **Reference Implementation**.

---

## 10. Reference Implementation

### The core message

A **reference implementation** exercises the Framework under real project
pressure so assumptions can be validated, incompleteness exposed, and evolution
informed — **without becoming Framework law**.

Mature engineering frameworks benefit from reference implementations because
architecture gains confidence through **application** rather than theory alone.
They increase architectural confidence; they do not prove the Framework
correct.

This chapter explains that role. It does not walk through a product, backlog,
or implementation surface.

### Why reference implementations exist

**Why.** Architecture stated only in documents can look complete while remaining
untested against real change, real agents, and real organisational friction.
Mature practice treats living application as part of architectural credibility —
not as an optional demo.

**What.** A reference implementation is a consuming project that adopts the
Framework deliberately — pin, Entry, Policy, Human Authority — and uses it to
ship work. Its purpose is to *exercise* the Framework, not to redefine it.

**Where.** Informative posture: [FA-001 (Normative Labelling
Convention)](../FA-001-NORMATIVE-LABELLING-CONVENTION.md); examples and
reference implementations as Informative in Accepted ADRs.

### Informative, not normative

**Why.** If a reference codebase became Normative, every local product choice
would freeze into Framework law — or every Framework change would wait on that
codebase’s convenience.

**What.** Reference implementations are **Informative / Reference** relative to
Framework Normative content. They do not rival Local Project Entry, redefine
Runtime or Method, or substitute for a consuming project’s own pin and
adoption. Framework Assets and Accepted ADRs remain the authority.

**Where.** FA-001; FA-002 (examples and reference implementations Informative
on conflict); ADR-001–004 non-claims regarding project content as norms.

### Fitness Challenge Platform as first official reference implementation

**Why.** The Framework needs a first living exercise under honest Alpha
constraints — governed by the Framework, not used as a marketing substitute for
maturity claims.

**What.** The **Fitness Challenge Platform** is the **first official reference
implementation**. The relationship is deliberate and memorable:

> The Framework governs the Reference Implementation.
>
> The Reference Implementation informs the evolution of the Framework.

| Role | Statement |
| ---- | --------- |
| Governance | The Framework governs the project |
| Validation | The project validates and matures the Framework |
| Feedback | Lessons feed back into Framework evolution |

It adopts like any consuming project. It does not become a second source of
Framework truth.

**Where.** [Runtime Foundation M2 Declaration](../governance/RUNTIME-FOUNDATION-M2-DECLARATION.md);
README Fitness Challenge section (Informative landing).

### Feedback into Framework evolution

**Why.** Without a feedback path, friction in the reference project becomes
tribal workaround instead of Framework improvement — and other adopters inherit
the same gaps silently.

**What.** Experience from the reference implementation — missing guidance,
awkward ownership boundaries, Stop/escalation gaps, Policy pressure — feeds
back through normal Framework change: ADRs where architecture must move,
labelled Framework Assets where guidance must improve, and Governance
Decisions (`GD-###`) where stewardship rules must improve. Authority stays
with the Framework; feedback informs evolution without transferring
law-making to the project. The **Framework First Principle** requires that
governance, methodology, or process improvements be incorporated into the
Framework before any Reference Implementation adopts them
([GOVERNANCE.md](../governance/GOVERNANCE.md)).

**Where.** [GOVERNANCE.md](../governance/GOVERNANCE.md); [GD-001](../governance/GOVERNANCE_DECISIONS/GD-001-Design-Review.md);
M2 Declaration feedback role; FAIS / ADR process — not this whitepaper.

### Not proof of correctness

**Why.** “It worked on the reference project” is easy to over-read as
certification.

**What.** A reference implementation is **not proof of correctness**. Success
on one product does not prove the Framework complete, production-ready, or
universally fit. Failure modes and incompleteness exposed by the reference
project are often *more* valuable than smooth paths — they show where
architecture or guidance must still improve.

**Where.** Non-claims in the M2 Declaration; Framework 0.7 Alpha as development
baseline, not consumer 1.0.

### Architectural confidence

**Why.** Decision-makers need more than aspirational diagrams, but less than a
false guarantee.

**What.** Reference implementations improve **architectural confidence** by
showing that:

- adoption (Project Integration) is workable under real repository conditions;
- Runtime capabilities can be composed for real changes;
- Human Authority remains enforceable when agents accelerate execution;
- gaps surface early enough to fix under Alpha evolution.

Confidence here means *informed trust in the architecture’s fitness to evolve*
— not a claim that every future adopter’s outcome is assured.

**Where.** This chapter’s Informative stance; later Maturity and Roadmap for
honest baseline claims.

### What comes next

Exercising the Framework in practice builds confidence.

**Maturity** defines what that confidence honestly allows the Framework to
claim.

---

## 11. Maturity and Roadmap

### The core message

Framework maturity is demonstrated through **validated architectural
capability** rather than version numbering.

Version labels communicate positioning. They do not create capability.
Architectural confidence from exercise is not the same as production readiness.

This chapter positions current maturity honestly. It does not redefine
milestones, invent roadmap commitments, or state Framework law.

### Why maturity must be demonstrated

**Why.** Labelling a Framework “ready” because the narrative is complete — or
because a version number advanced — is how organisations import unfinished
systems under false certainty.

**What.** Maturity claims track what has been **owned, published, and
exercisable** — Accepted architecture, labelled Framework Assets under a
development baseline, closed Runtime-essential ownership gaps, and a reference
implementation under Framework governance. Aspiration may describe *direction*;
it does not inflate *status*. **Confidence is earned through demonstrated
behaviour, not declared intent.**

**Where.** [Runtime Foundation M2 Declaration](../governance/RUNTIME-FOUNDATION-M2-DECLARATION.md);
README current maturity section (Informative landing).

### Runtime Foundation milestones

**Why.** Collapsing distinct milestones into one “Runtime done” slogan either
understates remaining work or overstates readiness.

**What.** Two Runtime milestones stay distinct:

| Milestone | Meaning (as declared) |
| --------- | --------------------- |
| **Runtime Execution Spine Complete** | Spine capabilities published; consumer-without-producer gaps *on the spine* closed |
| **Runtime Foundation M2** | Spine complete **and** Discovery published/active; **no Runtime-essential ownership gaps remain** |

```text
Runtime Execution Spine Complete  ≠  Runtime Foundation M2
```

The Runtime Execution Spine remains an **Informative** view of minimal
capabilities from project entry through approval — not a capability, semantic,
or lifecycle. Discovery sits outside the spine and feeds it. M2 does **not**
claim complete Runtime, full enhancing/adoption surfaces, or Framework 1.0.

**Where.** M2 Declaration (authoritative for this milestone distinction).

### Framework 0.7 Alpha, Beta, and 1.0

**Why.** Release labels without shared meaning become marketing noise —
especially when AI tooling culture rewards premature “1.0”.

**What.** Positioning only (not a commitment schedule):

| Baseline | Positioning |
| -------- | ------------ |
| **Framework 0.7 Alpha** (current official development baseline) | Runtime Foundation M2; suitable to evolve the Framework and run the first official reference implementation under honest constraints |
| **Framework 0.7 Beta** | Broader trial maturity (for example preferred strengthening of Stop consolidation and agent participation surfaces) — **not declared** |
| **Framework 1.0** | Published consumer Baseline; importable kit / Getting Started; Agent Pack; stated adoption claims defensible — **not declared** |

Alpha means a serious development baseline. It does **not** mean
production-ready Framework, complete Runtime, Beta, 1.0, or a published public
consumer Baseline. Advancing a version label later will still require
demonstrated capability — not the label alone.

**Where.** M2 Declaration; README roadmap (positioning only).

### Stable versus evolving areas

**Why.** Readers need to know what they can build mental models on versus what
will continue to change as experience accumulates.

**What.** *Informative stability bands:*

| Band | Examples of posture |
| ---- | ------------------- |
| **Stable architectural decisions** | Accepted ADR-001–004; Method/Core invariants; Human Authority; Project Integration pattern; Classification as binding; Runtime verbs and capability composition model |
| **Evolving guidance** | Runtime capability guides and templates; Policy starters; agent participation surfaces; examples; reference-implementation lessons folded back into Assets |
| **Planned expansion (not claimed done)** | Broader adoption/kit surfaces, Stop consolidation preferences, and other enhancing work that may support Beta/1.0 — without treating them as current completeness |
| **Known limitations at Alpha** | No published public consumer Baseline; no production-ready kit claim; complete Runtime (all enhancing work) not claimed |

Stable does not mean “never revisable by ADR.” It means durable enough that
maturity communication should not treat it as experimental scaffolding.

**Where.** Architecture Overview (stable vs evolvable); M2 ownership posture
and non-claims.

### Honest claim discipline

**Why.** Over-claiming destroys trust faster than under-documenting — especially
for a Framework that teaches Stop and Human Authority.

**What.** At Framework 0.7 Alpha / Runtime Foundation M2, honest claims include
architecture foundation completeness (ADR-001–004 Accepted), Runtime-essential
ownership closed (FA-001–024 active under the declared posture), and fitness to
evolve under a reference implementation. Honest **non-claims** include
production readiness, Framework 1.0, published consumer Baseline, and “complete
Runtime” in the enhancing sense.

This whitepaper does not outrun those governance statements.

**Where.** M2 Declaration non-claims; README “When you can use it”.

### Architectural confidence versus production readiness

**Why.** Confidence from architecture and exercise is easy to misread as “ship
this as an enterprise kit tomorrow.”

**What.**

| | Means | Does not mean |
| - | ----- | ------------- |
| **Architectural confidence** | Core decisions are coherent; Runtime-essential ownership is closed; adoption and exercise are possible under Alpha constraints | Every adopter outcome is assured; production kit is ready |
| **Production readiness / 1.0 posture** | Defensible published consumer Baseline and stated adoption claims (when declared) | Automatically true because M2 or a reference implementation exists |

Confidence is earned through demonstrated behaviour — architecture accepted,
ownership closed, adoption exercised — not through declared intent alone.
Maturity communication still states what that confidence does — and does not
— allow the Framework to claim.

**Where.** M2 Declaration; Reference Implementation chapter; README maturity
table.

### What comes next

Maturity describes what the Framework can honestly claim today.

The **conclusion** returns to why those claims matter.

---

## 12. Conclusion

### The core message

The acceleration problem is a **governance** problem. The Framework’s answer is
architectural: bind proportionate behaviour to each change, keep material
authority human, and let projects adopt without forking Framework meaning —
while saying honestly what is mature today.

This chapter closes the narrative. It introduces no new architecture and does
not state Framework law.

### Return to the problem

AI coding tools accelerate implementation faster than organisations improve
shared understanding, accountability, and reproducible control of software
change. That gap is not primarily a tooling shortage. More models and assistants
raise throughput; they do not, by themselves, answer who is accountable, how
much process is enough, what must be true before implementation, when to Stop,
or how later teams reproduce the rules that governed the work.

Those remain governance questions. The Framework exists because answering them
requires architecture, not another vendor-shaped workflow.

### The architectural journey

This whitepaper traced one coherent path:

- **Problem** — acceleration amplifies existing governance failures.
- **Design principles** — Human Authority, proportion, reproducibility, Stop,
  tool neutrality.
- **Architecture** — Method, Core, pin, Project Integration, and Human Authority
  as durable structure.
- **Runtime** — behaviour for a *change*, composed under Effective
  Classification.
- **Classification** — binding that makes ceremony proportionate and explicit.
- **Capability architecture** — owned behaviours that can evolve without
  collapsing into one mega-procedure.
- **Human Authority** — **responsibility cannot be automated, even when
  execution can.**
- **Project Integration** — projects adopt; integration establishes that
  adoption without rewriting Framework law.
- **Reference Implementation** — application builds confidence; it does not
  define the Framework.
- **Maturity** — claims follow demonstrated capability, not aspiration or
  version numbering alone.

Normative detail lives in Accepted ADRs and labelled Framework Assets under a
pinned Baseline — for orientation, start with
[FA-003 (Framework Overview)](../FA-003-FRAMEWORK-OVERVIEW.md) and
[FA-002 (Method Spine)](../FA-002-METHOD-SPINE.md).

### Human Authority endures

Human Authority is not a temporary safeguard for weak models. It is a property
of accountable engineering: **responsibility cannot be automated, even when
execution can.** Agents may contribute extensively. They do not become the
authority for material product, architecture, risk, merge, or release outcomes.

### Capability-based governance

Governance that scales with AI participation binds *which* behaviours apply to
*this* change — Discovery, Decision Support, Planning, Implementation Support,
Review, Verification, Approval — at stated depth, under knowable ownership.
Capability-based architecture keeps those behaviours composable, skippable when
unbound, and evolvable without rewriting the Method for every tool change.

### Evolution is expected

A Framework that cannot evolve under real project pressure is brittle. Guidance,
templates, adoption surfaces, and lessons from reference implementations are
expected to change. That is not a confession of failure; it is how durable
architecture stays honest while remaining useful. Stable decisions (Accepted
ADRs, Core invariants, Human Authority, integration pattern) provide continuity;
evolvable Assets carry improvement.

### Honest claims strengthen trust

Confidence is earned through demonstrated behaviour, not declared intent.
Saying what Framework 0.7 Alpha and Runtime Foundation M2 do — and do not —
allow the Framework to claim is part of the same discipline the Framework asks
of consuming projects: Stop rather than invent certainty. Over-claiming would
contradict the architecture this whitepaper describes.

### Closing

The technologies that assist software engineering will continue to evolve.

The need for accountable engineering will remain.

The **AI Software Development Framework** provides a **stable governance
architecture** within a rapidly changing technological landscape: discoverable,
proportionate, and reproducible — with Human Authority intact — so humans and
agents can collaborate on real changes without orphaning accountability or
forking meaning per repository.

This whitepaper is Informative / Reference. Authority remains in Accepted ADRs
and labelled Framework Assets under the project’s pinned Baseline. Day-to-day
operational use after adoption is documented separately in the
[Framework Invocation Guide](../FRAMEWORK-INVOCATION-GUIDE.md).

Responsible software engineering is ultimately built on trust, and trust begins
with governance.

---

<!-- WP-A5 editorial polish complete. Publication candidate pending human approval. -->
