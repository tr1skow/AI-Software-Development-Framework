# AI Software Development Framework

A vendor-neutral, importable framework for disciplined collaboration between
humans and AI agents on real software projects — greenfield, brownfield, and
modernisation alike.

This repository is the public home of that Framework. This README is a
**human landing page**. It summarises status and points to authoritative
documents. It is **not** Framework law, not a Local Project Entry, not an
agent instruction root, and not a substitute for the Framework Assets or the
[whitepaper](docs/whitepaper/AI-SOFTWARE-DEVELOPMENT-FRAMEWORK-WHITEPAPER.md).

---

## Why this exists

AI coding tools accelerate implementation faster than they improve shared
understanding. Without a clear collaboration model, teams get premature code,
hidden architecture, weak review, invented contracts, and either too much
ceremony or none at all — often locked to one vendor’s workflow.

This Framework exists so humans and agents can discover, classify, decide,
plan, implement, review, verify, and accept software changes with **explicit
human authority**, **proportionate process**, and **reproducible baselines**,
without turning engineering into a prompt pack or a single project’s diary.

---

## Who it is for

- Solo developers and small teams using AI assistants day to day
- Software engineers, technical leads, and architects
- Engineering managers and CTOs evaluating disciplined AI-assisted delivery
- Contributors interested in vendor-neutral methodology and architecture

It is meant to work **with or without** a particular AI product, and across
stacks and domains.

---

## Core architectural principles

At a high level (detail lives in ADRs and Framework Assets):

- **Capability-oriented Core** — Framework behaviour is organised as named
  engineering capabilities, not as a vendor workflow or document pile
  ([ADR-001](docs/adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md)).
- **Runtime** — behavioural rules for invoking and composing capabilities on a
  **change** (not a mandatory waterfall lifecycle).
- **Change Classification** — the capability binding mechanism that selects
  which capabilities apply and at what depth
  ([FA-009](docs/FA-009-CHANGE-CLASSIFICATION-GUIDE.md)).
- **Pinned Baseline** — reproducible, offline-resolvable Framework content
  ([ADR-002](docs/adr/ADR-002-BASELINE-PINNING-AND-VERSIONING.md),
  [FA-004](docs/FA-004-PINNING-AND-BASELINE-GUIDE.md)).
- **Local Project Entry** — the canonical project-side gateway for humans and
  agents ([FA-005](docs/FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md)).
- **Shared precedence** — humans and agents use the same precedence model
  ([ADR-003](docs/adr/ADR-003-PROJECT-INTEGRATION-AND-PRECEDENCE.md)).
- **Tool neutrality** — normative concepts must not depend on a specific AI
  vendor or IDE ([FA-002](docs/FA-002-METHOD-SPINE.md)).

---

## Human Authority

**Human Authority** is a Normative Method principle
([FA-002 (Method Spine)](docs/FA-002-METHOD-SPINE.md)):

Humans remain accountable for material product, architecture, risk, merge, and
release decisions. Agents and automation may participate only within
human-approved Project Policy. Agents must not self-approve material work
([ADR-004](docs/adr/ADR-004-AGENT-INTERACTION-MODEL.md)).

Material Approval and material classification / bind recording remain human
Decision Owner responsibilities under the published Runtime assets.

---

## Runtime Execution Spine

*Informative architectural view only — not a capability, not a new Runtime
semantic, and not a mandatory lifecycle.*

The **Runtime Execution Spine** is the minimal set of Runtime capabilities
required to govern the **normal** execution of Framework-governed software
changes from project entry through approval:

**Project Integration → Change Classification → Decision Support → Planning →
Implementation Support → Review → Verification → Approval**

**Discovery** sits **outside** the spine and **feeds** it when bound (especially
brownfield, modernisation, material, or high-uncertainty work).

Authoritative milestone wording:
[Runtime Foundation M2 Declaration](docs/governance/RUNTIME-FOUNDATION-M2-DECLARATION.md).

---

## Runtime Foundation M2

**Runtime Foundation M2 is declared.**

That means:

- the Runtime Execution Spine is complete and coherent;
- Discovery ([FA-023](docs/FA-023-DISCOVERY-GUIDE.md) /
  [FA-024](docs/FA-024-DISCOVERY-OUTCOME-TEMPLATE.md)) is published and active;
- **no Runtime-essential ownership gaps remain** under the approved assessment.

```text
Runtime Execution Spine Complete  ≠  Runtime Foundation M2
```

Spine completeness alone was insufficient while Discovery could still be bound
without an owner. Discovery closed that final Runtime-essential gap.

M2 does **not** mean complete Framework productisation, production readiness,
or Framework 1.0.

---

## Current maturity and release positioning

| | |
| --- | --- |
| **Development baseline** | **Framework 0.7 Alpha** (official) |
| **Runtime milestone** | **Runtime Foundation M2** declared |
| **Architecture Foundation** | Complete (ADR-001–004 Accepted) |
| **Runtime-essential ownership** | Closed (FA-001–024 active) |
| **Published consumer Baseline** | Not yet |
| **Production-ready kit claim** | **Must not** be claimed yet |

### Roadmap (positioning only)

| Milestone | Meaning |
| --- | --- |
| **0.7 Alpha** (now) | Official development baseline; Runtime Foundation M2; suitable to evolve the Framework and run the first official reference implementation under honest constraints |
| **0.7 Beta** | Broader trial maturity (for example Stop consolidation and stronger agent participation surfaces) — **not** declared yet |
| **1.0** | Published consumer Baseline; importable kit / Getting Started; Agent Pack; stated adoption claims defensible — **not** declared yet |

---

## When you can use it

| You can | You should not yet |
| --- | --- |
| Establish Project Integration (pin, Entry, Policy, checklist) | Treat this repo as a complete production-ready importable kit |
| Run Framework-governed changes along the Runtime Execution Spine | Expect a published public consumer Baseline |
| Bind Discovery when understanding must be established | Claim Framework 1.0 or full product adoption |
| Use the Fitness Challenge Platform as the reference implementation under Framework governance | Treat README wording as Normative Method or Core law |

---

## Where to start

1. Read [FA-003 (Framework Overview)](docs/FA-003-FRAMEWORK-OVERVIEW.md).
2. Read [FA-002 (Method Spine)](docs/FA-002-METHOD-SPINE.md).
3. Skim [Runtime Foundation M2 Declaration](docs/governance/RUNTIME-FOUNDATION-M2-DECLARATION.md).
4. Initialise with [FA-004](docs/FA-004-PINNING-AND-BASELINE-GUIDE.md) through
   [FA-008](docs/FA-008-GREENFIELD-INITIALISATION-CHECKLIST.md).
5. Classify with [FA-009](docs/FA-009-CHANGE-CLASSIFICATION-GUIDE.md) /
   [FA-010](docs/FA-010-CLASSIFICATION-RECORD-TEMPLATE.md); use Discovery,
   Decision Support, Planning, Implementation, and the Acceptance Chain as
   bound.
6. Consult [ADR-001](docs/adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md) through
   [ADR-004](docs/adr/ADR-004-AGENT-INTERACTION-MODEL.md) for architectural
   authority.

This is not a complete Getting Started import procedure.

---

## Architecture Decision Records

| ADR | Title | Status |
| --- | --- | --- |
| [ADR-001](docs/adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md) | Framework Core Semantics | Accepted |
| [ADR-002](docs/adr/ADR-002-BASELINE-PINNING-AND-VERSIONING.md) | Baseline Pinning and Versioning | Accepted |
| [ADR-003](docs/adr/ADR-003-PROJECT-INTEGRATION-AND-PRECEDENCE.md) | Project Integration and Precedence | Accepted |
| [ADR-004](docs/adr/ADR-004-AGENT-INTERACTION-MODEL.md) | Agent Interaction Model | Accepted |

ADRs are architectural authority. This README does not restate their decision
bodies.

---

## Framework Assets

Published assets (`FA-001`–`FA-024`). This README does not duplicate their
contents.

### Framework Core

| Asset | Role |
| --- | --- |
| [FA-001 (Normative Labelling Convention)](docs/FA-001-NORMATIVE-LABELLING-CONVENTION.md) | Document force labels |
| [FA-002 (Method Spine)](docs/FA-002-METHOD-SPINE.md) | Normative Method principles |
| [FA-003 (Framework Overview)](docs/FA-003-FRAMEWORK-OVERVIEW.md) | Framework map |

### Project Integration

| Asset | Role |
| --- | --- |
| [FA-004 (Pinning and Baseline Guide)](docs/FA-004-PINNING-AND-BASELINE-GUIDE.md) | Pin a reproducible Baseline |
| [FA-005 (Local Project Entry Guide)](docs/FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md) | Canonical project gateway |
| [FA-006 (Local Project Entry Template)](docs/FA-006-LOCAL-PROJECT-ENTRY-TEMPLATE.md) | Entry declaration template |
| [FA-007 (Minimal Project Policy Starter)](docs/FA-007-MINIMAL-PROJECT-POLICY-STARTER.md) | Minimal Project Policy starter |
| [FA-008 (Greenfield Initialisation Checklist)](docs/FA-008-GREENFIELD-INITIALISATION-CHECKLIST.md) | Day-0 greenfield gate |

### Change Classification

| Asset | Role |
| --- | --- |
| [FA-009 (Change Classification Guide)](docs/FA-009-CHANGE-CLASSIFICATION-GUIDE.md) | Capability binding mechanism |
| [FA-010 (Classification Record Template)](docs/FA-010-CLASSIFICATION-RECORD-TEMPLATE.md) | Classification record shape |

### Discovery (feeds the Runtime Execution Spine)

| Asset | Role |
| --- | --- |
| [FA-023 (Discovery Guide)](docs/FA-023-DISCOVERY-GUIDE.md) | Establish sufficient understanding of problem and system context |
| [FA-024 (Discovery Outcome Template)](docs/FA-024-DISCOVERY-OUTCOME-TEMPLATE.md) | Discovery Outcome shape |

### Decision Support and Planning

| Asset | Role |
| --- | --- |
| [FA-019 (Decision Support Guide)](docs/FA-019-DECISION-SUPPORT-GUIDE.md) | Make material / irreversible binds explicit |
| [FA-020 (Decision Support Outcome Template)](docs/FA-020-DECISION-SUPPORT-OUTCOME-TEMPLATE.md) | Decision Support Outcome shape |
| [FA-021 (Planning Guide)](docs/FA-021-PLANNING-GUIDE.md) | Structure multi-step work |
| [FA-022 (Planning Outcome Template)](docs/FA-022-PLANNING-OUTCOME-TEMPLATE.md) | Planning Outcome shape |

### Implementation Support

| Asset | Role |
| --- | --- |
| [FA-017 (Implementation Support Guide)](docs/FA-017-IMPLEMENTATION-SUPPORT-GUIDE.md) | Materialise approved intent under the Artefact Fitness Contract |
| [FA-018 (Artefact Fitness Readiness Template)](docs/FA-018-ARTEFACT-FITNESS-READINESS-TEMPLATE.md) | Fitness readiness record |

### Acceptance Chain

| Asset | Role |
| --- | --- |
| [FA-011 (Review Guide)](docs/FA-011-REVIEW-GUIDE.md) | Independent / fallback challenge |
| [FA-012 (Review Outcome Template)](docs/FA-012-REVIEW-OUTCOME-TEMPLATE.md) | Review Outcome shape |
| [FA-013 (Verification Guide)](docs/FA-013-VERIFICATION-GUIDE.md) | Meet the bound verification bar |
| [FA-014 (Verification Outcome Template)](docs/FA-014-VERIFICATION-OUTCOME-TEMPLATE.md) | Verification Outcome shape |
| [FA-015 (Approval Guide)](docs/FA-015-APPROVAL-GUIDE.md) | Human Decision Owner acceptance |
| [FA-016 (Approval Decision Template)](docs/FA-016-APPROVAL-DECISION-TEMPLATE.md) | Approval Decision shape |

Allocation state:
[Framework Asset Allocation Log](docs/governance/FRAMEWORK-ASSET-ALLOCATION-LOG.md).

---

## Fitness Challenge Platform

The **Fitness Challenge Platform** is the **first official reference
implementation** of this Framework.

| Role | Statement |
| --- | --- |
| Governance | The Framework governs the project |
| Validation | The project validates and matures the Framework |
| Feedback | Lessons feed back into the Framework before Beta and later v1.0 |

It is a reference implementation — **not** Framework Normative law, not a rival
Local Project Entry, and not a substitute for pinning a Baseline on a consuming
project.

---

## Framework Invocation

After a project has adopted the Framework (Project Integration in place), day-to-day
operational use is documented in the
[Framework Invocation Guide](docs/FRAMEWORK-INVOCATION-GUIDE.md).

It is the permanent **Informative / Reference** operational reference for humans
and AI assistants: discover governance roots, follow the Effective
Classification, invoke only bound capabilities, apply Stop and Human Authority,
and record required outcomes. It is not Framework law, not Runtime definition,
and not an Alpha Adoption Guide.

---

## Documentation map

| Location | Role |
| --- | --- |
| [docs/adr/](docs/adr/) | Authoritative architectural decisions (`ADR-###`) |
| Framework Assets above | Published product content (`FA-###`) |
| [Whitepaper](docs/whitepaper/AI-SOFTWARE-DEVELOPMENT-FRAMEWORK-WHITEPAPER.md) | Informative / Reference architectural narrative (Framework 0.7 Alpha) |
| [Framework Invocation Guide](docs/FRAMEWORK-INVOCATION-GUIDE.md) | Informative / Reference permanent operational reference (after Project Integration) |
| [Runtime Foundation M2 Declaration](docs/governance/RUNTIME-FOUNDATION-M2-DECLARATION.md) | Governance milestone declaration |
| [FAIS](docs/governance/FRAMEWORK-ASSET-IDENTIFICATION-STANDARD.md) | Asset identification governance |
| [Allocation log](docs/governance/FRAMEWORK-ASSET-ALLOCATION-LOG.md) | `FA-###` allocation state |

---

## Contributing

Architecture is decided through reviewed ADRs. Framework product content is
published as Framework Assets (`FA-###`). Please do not treat informal README
wording as normative.

Useful contribution includes informed review of assets and ADRs against the
frozen Architecture Foundation and the declared Runtime Foundation M2 posture.

---

## License

[MIT](LICENSE) © 2026 tr1skow
