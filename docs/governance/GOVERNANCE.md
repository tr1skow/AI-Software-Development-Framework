# Framework Governance

| Attribute | Value |
| --------- | ----- |
| Document | Framework Governance |
| Type | Repository / governance |
| Classification | Governance (not a Framework Asset; not an ADR) |
| Status | Accepted |
| Framework baseline | Framework 0.7 Alpha; Runtime Foundation M2 |
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
workflow and not a mandatory waterfall for consuming-project changes.*

```text
Backlog
  ↓
Design Review
  ↓
Architecture Review (only when required)
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
```

![AIS-002 Governance Lifecycle: Backlog → Design Review → Architecture Review (only when required) → Implementation → Implementation Review → Merge Review → Evidence Capture → Framework Evolution Assessment. Informative governance view; not a Runtime workflow.](../illustrations/png/AIS-002-governance-lifecycle.png)

*Governance Lifecycle — Design Review is a mandatory stage before
implementation. Architecture Review occurs only when required.
(AIS-002 · Informative / Reference ·
[SVG](../illustrations/svg/AIS-002-governance-lifecycle.svg))*

### Stage purposes

| Stage | Purpose |
| ----- | ------- |
| **Backlog** | Hold evidence-backed candidates and planned work items without treating the list as a roadmap or approval. See the [Evolution Backlog](../FRAMEWORK-EVOLUTION-BACKLOG.md) for Framework evolution candidates. |
| **Design Review** | Validate planned implementation **before code is written**: scope, acceptance criteria, dependencies, design quality, and documentation completeness; decide whether implementation may begin or an Architecture Review is required ([GD-001](./GOVERNANCE_DECISIONS/GD-001-Design-Review.md)). |
| **Architecture Review** | Challenge and decide architectural impact **only when Design Review (or equivalent authority) requires it**. May lead to ADR work. Does not routinely precede every implementation phase. |
| **Implementation** | Produce the change under the confirmed scope and acceptance criteria, within Human Authority and Project Policy (or Framework stewardship rules for Framework-repo work). |
| **Implementation Review** | Independently challenge the delivered change at proportionate depth (aligned with the Runtime **Review** capability for Framework-governed project changes — see [FA-011](../FA-011-REVIEW-GUIDE.md)). |
| **Merge Review** | Confirm merge readiness: required outcomes present, residual risks explicit, and Human Authority satisfied for integration. |
| **Evidence Capture** | Record Technical, Governance, and/or Framework Evolution Evidence produced by the work so learning is durable and citable. |
| **Framework Evolution Assessment** | Decide whether captured evidence justifies a Framework improvement (Governance Decision, ADR, Asset change, or Evolution Backlog candidate). Improvements require documented evidence. |

---

## Evidence categories

Framework stewardship recognises three evidence categories.

### Technical Evidence

Evidence validating technical architecture and behaviour.

Examples:

- automated tests
- architecture validation
- runtime behaviour observations

### Governance Evidence

Evidence validating governance effectiveness.

Examples:

- Design Reviews
- Architecture Reviews
- Implementation Reviews
- Merge Reviews
- Architecture Assessments

### Framework Evolution Evidence

Evidence justifying improvements to the Framework itself.

Examples:

- documented Reference Implementation lessons that expose a Framework gap
- Design Review outcomes that identify governance improvements
- Evolution Backlog candidates with linked origin evidence

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

| ID | Title | Status |
| -- | ----- | ------ |
| [GD-001](./GOVERNANCE_DECISIONS/GD-001-Design-Review.md) | Mandatory Design Review Before Implementation | Accepted |

See [FAIS](./FRAMEWORK-ASSET-IDENTIFICATION-STANDARD.md) for namespace
boundaries among `ADR-###`, `FA-###`, and `GD-###`.

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
