# GD-001 — Mandatory Design Review Before Implementation

| Attribute | Value |
| --------- | ----- |
| Governance Decision | GD-001 |
| Title | Mandatory Design Review Before Implementation |
| Status | Accepted |
| Classification | Governance Decision |
| Product | AI Software Development Framework |
| Related | [GOVERNANCE.md](../GOVERNANCE.md); [FA-002 (Method Spine)](../../FA-002-METHOD-SPINE.md); [FA-011 (Review Guide)](../../FA-011-REVIEW-GUIDE.md); [ADR-001](../../adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md)–[ADR-004](../../adr/ADR-004-AGENT-INTERACTION-MODEL.md); Whitepaper Ch. 10; Reference Implementation RI-001 (Fitness Challenge Platform) |

---

## Status

Accepted

---

## Purpose

Design Review exists to validate planned implementation **before code is
written**.

It is a **Design Governance** activity. It is distinct from:

- **Architecture Governance** (Architecture Review; Architecture Decision
  Records)
- **Implementation Governance** (Implementation Review, Merge Review, and the
  Runtime Review capability described in [FA-011](../../FA-011-REVIEW-GUIDE.md))

Design Review strengthens implementation quality by confirming scope and
acceptance criteria, challenging the planned design, and determining whether
Architecture Review is required — without treating every change as an
architectural decision.

---

## Origin evidence

This Governance Decision is the first formal governance improvement generated
from documented evidence produced by a Reference Implementation.

During the implementation of **RI-001 (Fitness Challenge Platform)**, a
structured Design Review was performed before Runtime Metric Foundation
Phase 6. That Design Review:

- validated implementation scope
- challenged the planned design
- confirmed no Architecture Review was required
- improved acceptance criteria
- identified governance improvements
- strengthened implementation quality before any code was written

Under the [Framework First Principle](../GOVERNANCE.md#framework-first-principle),
that evidence informs Framework evolution here; RI-001 does not redefine
Framework governance directly.

---

## When

A Design Review **shall** be performed **before every implementation phase**.

“Implementation phase” means a bounded unit of planned delivery work that is
about to produce product or Framework changes (for example a named phase,
increment, or material change package). Design Review is not waived by the
existence of prior Architecture Reviews, ADRs, or Runtime Review outcomes for
earlier phases.

---

## Goals

Design Review shall validate:

1. **Implementation scope** — what is in and out of the phase
2. **Acceptance criteria** — what “done” means and how it will be judged
3. **Dependencies** — upstream decisions, assets, systems, and blockers
4. **Design quality** — whether the planned approach is proportionate and
   coherent for the confirmed scope
5. **Documentation completeness** — whether humans and agents can discover the
   plan, constraints, and success conditions

Design Review shall determine whether:

- **implementation may begin**, or
- **an Architecture Review is required**

before implementation proceeds.

---

## Outputs

Each Design Review shall produce:

| Output | Meaning |
| ------ | ------- |
| **Confirmed scope** | Agreed in/out boundaries for the implementation phase |
| **Confirmed acceptance criteria** | Agreed completion conditions |
| **Implementation recommendation** | Proceed, revise plan, or stop/escalate |
| **Architecture Review decision** | Required or not required, with enough specificity to act |
| **Documented rationale** | Why the recommendation and Architecture Review decision follow from the review |

These outputs are **Governance Evidence**. They do not by themselves amend
Accepted ADRs or Normative Framework Assets.

---

## Relationship to Architecture Review

Architecture Review is **not** a default stage before every implementation
phase.

Architecture Review is performed **only when required** — typically when Design
Review finds that the planned work:

- exceeds or conflicts with Accepted ADR authority,
- introduces architectural commitments not covered by current Baseline /
  Framework Core meaning, or
- otherwise cannot proceed safely under Progressive Commitment without
  architectural decision.

When Architecture Review is required, implementation of the affected scope
shall not begin until that review (and any resulting ADR work it mandates) has
resolved the blocking architectural questions.

---

## Relationship to Runtime Review

[FA-011 (Review Guide)](../../FA-011-REVIEW-GUIDE.md) owns proportionate
independent challenge of a **proposed or delivered change** under Runtime
bindings (Implementation Review in the
[governance lifecycle](../GOVERNANCE.md#governance-lifecycle)).

GD-001 does **not** replace FA-011. Design Review occurs **before**
implementation; Runtime Review challenges the change under its Effective
Classification during/after delivery as bound.

---

## Cross references

| Topic | Reference |
| ----- | --------- |
| Governance lifecycle and evidence categories | [GOVERNANCE.md](../GOVERNANCE.md) |
| Framework First Principle | [GOVERNANCE.md](../GOVERNANCE.md#framework-first-principle) |
| Architectural authority | [docs/adr/](../../adr/) |
| Runtime Review capability | [FA-011](../../FA-011-REVIEW-GUIDE.md) |
| Examples / RI Informative posture | [FA-002](../../FA-002-METHOD-SPINE.md) Principle 7 |
| Reference Implementation role | Whitepaper Ch. 10 |
| Identity namespace | [FAIS](../FRAMEWORK-ASSET-IDENTIFICATION-STANDARD.md) (`GD-###`) |

---

## Non-goals

This Governance Decision does **not**:

- modify Runtime semantics or the Runtime Execution Spine
- amend Accepted ADRs
- introduce new coding patterns or prompts
- change any Reference Implementation repository
- require Architecture Review before every phase

---

## End of GD-001
