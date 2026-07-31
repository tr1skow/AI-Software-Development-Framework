# Framework Governance

| Attribute | Value |
| --------- | ----- |
| Document | Framework Governance |
| Type | Repository / governance |
| Classification | Governance (not a Framework Asset; not an ADR) |
| Status | Accepted |
| Framework baseline | Framework v0.2.1; Runtime Foundation M2 |
| Related | [GD-001](./GOVERNANCE_DECISIONS/GD-001-Design-Review.md); [FAIS](./FRAMEWORK-ASSET-IDENTIFICATION-STANDARD.md); [FA-002 (Method Spine)](../FA-002-METHOD-SPINE.md); [ADR-001](../adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md)–[ADR-004](../adr/ADR-004-AGENT-INTERACTION-MODEL.md); [Evolution Backlog](../FRAMEWORK-EVOLUTION-BACKLOG.md); Whitepaper Ch. 10 |

This document is **repository and Framework governance**. It is **not** a
Framework Asset and **must not** receive an `FA-###` identifier. It is **not**
an Architecture Decision Record. It does **not** amend Runtime semantics,
Method Spine principles, or Accepted ADRs.

If this document and an Accepted ADR or labelled Framework Asset appear to
disagree on architectural or Method meaning, the Accepted ADRs and labelled
Framework Assets are authoritative.

---

## Purpose

Define how the Framework is governed as a product: the governance lifecycle,
evidence categories that justify evolution, the Framework First Principle, and
the relationship among Architecture Governance, Design Governance, and
Implementation Governance.

Governance Decisions (`GD-###`) record binding governance rules for how the
Framework and its evolution are steered. They do not replace ADRs
(architectural decisions) or Framework Assets (product guidance).

---

## Governance domains

The Framework distinguishes three governance domains:

| Domain | Concern | Typical artefacts |
| ------ | ------- | ----------------- |
| **Architecture Governance** | Whether architecture must change, and how architectural decisions are made | Architecture Reviews; Architecture Decision Records (`ADR-###`) |
| **Design Governance** | Whether a planned implementation is sound before code is written | Design Reviews ([GD-001](./GOVERNANCE_DECISIONS/GD-001-Design-Review.md)) |
| **Implementation Governance** | Whether delivered work meets bound Review, Verification, Approval, and merge expectations | Implementation Reviews; Merge Reviews; Runtime Review / Verification / Approval outcomes |

These domains are complementary. Design Review does **not** replace Architecture
Review. Architecture Review is invoked **only when required**, typically when
Design Review determines that planned work exceeds current architecture or
Accepted ADR authority.

---

## Governance lifecycle

*Informative teaching view of Framework stewardship stages — not a Runtime
workflow and not a mandatory waterfall for ordinary consuming-project changes.
GD-001 applicability is stated in
[GD-001](./GOVERNANCE_DECISIONS/GD-001-Design-Review.md).*

```text
Backlog
  ↓
Design Review ──→ Plan Revision (when required) ──→ Design Review
  ↓
  ├──→ Architecture Review (when required)
  │         ↓
  │    ADR work (when required)
  │         ↓
  │    return to Design Review or Implementation
  ↓
Implementation
  ↓
Implementation Review
  ↓
Merge Review
  ↓
Evidence Capture
  ↓
Framework Evolution Assessment
  ↓
Backlog (when evolution candidates remain or are created)
```

![AIS-002 Governance Lifecycle: iterative stewardship flow including Design Review, plan revision, conditional Architecture Review and ADR work, Implementation through Evidence Capture, and Framework Evolution Assessment returning to Backlog. Informative governance view; not a Runtime workflow.](../illustrations/png/AIS-002-governance-lifecycle.png)

*Governance Lifecycle — Design Review is mandatory before implementation within
GD-001 applicability. Architecture Review and ADR work occur only when
required. The lifecycle supports iteration.
(AIS-002 · Informative / Reference ·
[SVG](../illustrations/svg/AIS-002-governance-lifecycle.svg))*

### Stages — purpose, owner, expected outputs

| Stage | Purpose | Owner | Expected outputs |
| ----- | ------- | ----- | ---------------- |
| **Backlog** | Hold evidence-backed candidates and planned work items without treating the list as a roadmap or approval. See the [Evolution Backlog](../FRAMEWORK-EVOLUTION-BACKLOG.md) for Framework evolution candidates. | Framework stewards (repository maintainers for Framework-repo work) | Prioritised or deferred candidates with origin evidence links; no implied approval |
| **Design Review** | Validate planned implementation **before code is written**: scope, acceptance criteria, dependencies, design quality, and documentation completeness; decide whether implementation may begin, the plan must be revised, or an Architecture Review is required ([GD-001](./GOVERNANCE_DECISIONS/GD-001-Design-Review.md)). | Human Decision Owner for the phase (may be assisted; not agent-finalised for material work) | Confirmed scope; confirmed acceptance criteria; implementation recommendation (proceed / revise plan / stop/escalate); Architecture Review decision; documented rationale |
| **Architecture Review** | Challenge and decide architectural impact **only when Design Review (or equivalent authority) requires it**. May lead to ADR work. Does not routinely precede every implementation phase. | Human accountable for architectural acceptance (Decision Owner for architecture on that change) | Architecture Review outcome (proceed under current architecture / ADR work required / stop/escalate); documented rationale |
| **Implementation** | Produce the change under the confirmed scope and acceptance criteria, within Human Authority and Project Policy (or Framework stewardship rules for Framework-repo work). | Implementers under the Decision Owner’s authority | Delivered change artefacts within confirmed scope |
| **Implementation Review** | Independently challenge the delivered change at proportionate depth (aligned with the Runtime **Review** capability for Framework-governed project changes — see [FA-011](../FA-011-REVIEW-GUIDE.md)). | Review authority under Project Policy / Human Authority (FA-011 for Runtime-bound work) | Review Outcome (`pass` / `fail` / `conditional`) or equivalent recorded challenge result |
| **Merge Review** | Confirm merge readiness: required outcomes present, residual risks explicit, and Human Authority satisfied for integration. | Merge authority (Decision Owner or Policy-designated merge approver) | Merge readiness decision (merge / withhold); residual-risk record if material |
| **Evidence Capture** | Record Technical, Governance, and/or Framework Evolution Evidence produced by the work so learning is durable and citable. | Change participants with steward oversight | Citable evidence records classified by **use** (see Evidence categories) |
| **Framework Evolution Assessment** | Decide whether captured evidence justifies a Framework improvement (Governance Decision, ADR, Asset change, or Evolution Backlog candidate). Improvements require documented evidence. | Framework stewards | Evolution disposition (no Framework change / backlog candidate / GD or ADR/Asset change path); linked evidence |

### Lifecycle transitions

The lifecycle supports iteration. Material transitions:

| From | To | When |
| ---- | -- | ---- |
| Backlog | Design Review | A bounded implementation phase is ready to plan/validate |
| Design Review | **Plan Revision** | Implementation recommendation is revise plan |
| Plan Revision | Design Review | Revised plan is ready for re-validation |
| Design Review | **Architecture Review** | Architecture Review decision is required |
| Design Review | Implementation | Proceed; Architecture Review not required |
| Architecture Review | **ADR work** | Architectural decision/change is required |
| Architecture Review | Implementation | Proceed under current architecture; no ADR work required |
| Architecture Review | Design Review | Plan must be re-validated after architectural challenge |
| ADR work (completion) | **Design Review** or **Implementation** | Return path chosen by the Decision Owner: re-validate design when scope/criteria changed; otherwise proceed to implementation under resolved architecture |
| Implementation | Implementation Review | Delivery artefacts exist for challenge |
| Implementation Review | Merge Review | Review Outcome allows merge consideration |
| Merge Review | Evidence Capture | Merge decision recorded (merge or withhold still captures evidence) |
| Evidence Capture | Framework Evolution Assessment | Evidence is durable enough to assess |
| Framework Evolution Assessment | **Backlog** | Candidates remain, are created, or deferred for later evidence |

Stop/Escalate may exit any stage when mandatory inputs conflict or material
factors are unknown without valid deferral.

---

## Evidence categories

Framework stewardship recognises three evidence categories. Categories classify
**how evidence is used**, not which document or file contains it.

The **same artefact may contribute to more than one category** depending on the
question being asked.

### Technical Evidence

Evidence answering:

> Did the technical solution behave as expected?

Examples include runtime validation, architecture validation, and testing.

### Governance Evidence

Evidence answering:

> Did the governance activity produce the intended outputs?

Examples include:

- Design Reviews
- Architecture Reviews
- Merge Reviews

(Implementation Reviews likewise count when used to show that the governance
activity produced its intended Review Outcome.)

### Framework Evolution Evidence

Evidence answering:

> Does the collected evidence justify changing the Framework?

Examples include RI lessons used to justify a Framework gap, Design Review
outputs used to justify a Governance Decision, and Evolution Backlog candidates
with linked origin evidence — **when those artefacts are used for evolution
justification**, not merely because a review occurred.

**Framework improvements shall only be introduced when supported by documented
evidence.** Preference and anecdote alone are insufficient.

---

## Framework First Principle

**Governance principle.**

Reference Implementations exist to produce evidence.

The AI Software Development Framework remains the authoritative definition of
governance.

Improvements to governance, methodology, or process shall first be incorporated
into the Framework before being adopted by any Reference Implementation.

Reference Implementations shall never redefine the Framework directly.

*Informative gloss.* This principle extends the Method Spine posture that
examples and reference implementations are Informative ([FA-002](../FA-002-METHOD-SPINE.md)
Principle 7 — Examples Are Not Norms) and the whitepaper relationship that the
Framework governs the Reference Implementation while the Reference
Implementation informs Framework evolution. Local RI practice may *suggest*
improvement; it does not become Framework law until the Framework records it
here (or in ADRs / Assets as appropriate).

---

## Governance Decisions

Governance Decisions use the `GD-###` identity namespace.

See [FAIS](./FRAMEWORK-ASSET-IDENTIFICATION-STANDARD.md) for namespace
boundaries among `ADR-###`, `FA-###`, and `GD-###`.

### Status model

*Lightweight lifecycle for Governance Decisions — intentionally minimal.*

| Status | Meaning |
| ------ | ------- |
| **Draft** | Proposed; not ready for stewardship adoption |
| **Under Review** | Submitted for governance review; not yet binding |
| **Accepted** | Binding Governance Decision for its stated applicability |
| **Superseded** | Replaced by a later Governance Decision; retained for history |
| **Deprecated** | No longer to be applied for new work; retained for history |

Do not invent additional GD workflow stages beyond this status model.

### Decision index

| ID | Title | Status |
| -- | ----- | ------ |
| [GD-001](./GOVERNANCE_DECISIONS/GD-001-Design-Review.md) | Mandatory Design Review Before Implementation | Accepted |

---

## Cross references

| Concern | Authoritative home |
| ------- | ------------------ |
| Architectural decisions | [docs/adr/](../adr/) (`ADR-###`) |
| Design Review rule | [GD-001](./GOVERNANCE_DECISIONS/GD-001-Design-Review.md) |
| Runtime Review capability (project changes) | [FA-011](../FA-011-REVIEW-GUIDE.md) |
| Asset identity | [FAIS](./FRAMEWORK-ASSET-IDENTIFICATION-STANDARD.md) |
| Evolution candidates | [Evolution Backlog](../FRAMEWORK-EVOLUTION-BACKLOG.md) |
| Reference Implementation role | Whitepaper Ch. 10; [M2 Declaration](./RUNTIME-FOUNDATION-M2-DECLARATION.md) |
| Method principles | [FA-002](../FA-002-METHOD-SPINE.md) |

Terminology:

- **Design Review** — Design Governance activity before implementation (GD-001).
- **Architecture Review** — Architecture Governance activity when required.
- **Implementation Review** — challenge of delivered work (governance stage;
  for Framework-governed project changes, aligns with Runtime Review).
- **Review** (Runtime capability) — [FA-011](../FA-011-REVIEW-GUIDE.md); not a
  synonym that erases Design Review.

---

## Future consideration

*Mention only — not implemented by this document.*

Possible future governance indexes (separate from this overview):

- Architecture Decisions
- Governance Decisions
- Reference Implementations
- Evidence Reports

Do not invent those indexes until evidence shows discoverability failure that
existing surfaces cannot absorb.

---

## End of Framework Governance
