# FA-003 — Framework Overview

| Attribute | Value |
| --------- | ----- |
| Asset ID | FA-003 |
| Title | Framework Overview |
| Kind | overview |
| Classification | Normative Framework |
| Lifecycle Status | Accepted |
| Phase | C1 Framework Core Assets (E2) |
| Related | [FA-002 (Method Spine)](./FA-002-METHOD-SPINE.md); [FA-001 (Normative Labelling Convention)](./FA-001-NORMATIVE-LABELLING-CONVENTION.md); [ADR-001](./adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md); [ADR-002](./adr/ADR-002-BASELINE-PINNING-AND-VERSIONING.md); [ADR-003](./adr/ADR-003-PROJECT-INTEGRATION-AND-PRECEDENCE.md); [ADR-004](./adr/ADR-004-AGENT-INTERACTION-MODEL.md) |

---

## Purpose

*Informative orientation.*

This Overview is a human-first map of the AI Software Development Framework.
It explains how the pieces fit so you can navigate Method, ADRs, and later
assets without treating this page as a substitute for them.

**Normative Framework.** Where this Overview restates Accepted architectural
decisions, it must not contradict those ADRs. If a conflict appears, the
**Accepted ADR wins** and this Overview must be corrected.

This document is **not** a Local Project Entry, **not** an agent instruction
root, and **not** a pin procedure.

---

## What this Framework is

*Normative Framework.*

The Framework is a vendor-neutral, importable system for disciplined
collaboration between humans and AI agents on software work. It combines:

- a thin **Method Spine** — [FA-002 (Method Spine)](./FA-002-METHOD-SPINE.md)
- **Framework Core** semantics (capabilities, Runtime, classification) —
  [ADR-001](./adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md)
- **Baseline pinning and versioning** —
  [ADR-002](./adr/ADR-002-BASELINE-PINNING-AND-VERSIONING.md)
- **Project Integration and precedence** —
  [ADR-003](./adr/ADR-003-PROJECT-INTEGRATION-AND-PRECEDENCE.md)
- an **Agent Interaction Model** —
  [ADR-004](./adr/ADR-004-AGENT-INTERACTION-MODEL.md)

*Informative.* The product goal is that a project can pin an immutable
Framework Baseline, bind through a Local Project Entry, and run proportionate
engineering capabilities with clear human authority — including offline and
without a specific AI vendor.

---

## Method and Framework

*Normative Framework.*

| Layer | Role | Authority |
| ----- | ---- | --------- |
| **Method Spine** | AI-optional methodological principles | Normative Method |
| **Framework Core & ADRs** | How the Framework operationalises Method for software + agents | Normative Framework / Reference ADRs |
| **Project Policy & Entry** | How one repo specialises and discovers rules | Project-normative (ADR-003) |
| **Adapters & examples** | Tool-specific or illustrative help | Informative |

Read document force using
[FA-001 (Normative Labelling Convention)](./FA-001-NORMATIVE-LABELLING-CONVENTION.md).

---

## Core ideas (map only)

### Capabilities and Runtime

*Normative Framework (summary — detail in ADR-001).*

Framework Core is capability-oriented. A **capability** is an engineering
behaviour (for example Change Classification, Review, Verification), not a
filename. Documents and templates **implement** capabilities.

**Runtime** is the behavioural model for how capabilities are invoked,
composed, skipped, interrupted, and completed during a **change**. Ordered
“waypoint” diagrams, if shown elsewhere, are informative — not a mandatory
linear lifecycle.

**Change Classification** is the capability binding mechanism: it determines
which capabilities bind and at what depth for a change.

### Identity, Baseline, and pin

*Normative Framework (summary — detail in ADR-002).*

**Framework Identity** is the enduring product. A **Framework Baseline** is one
immutable published baseline of that product. Consuming projects **pin a
Baseline identity**, never Identity alone. Runtime behaviour for a project is
**baseline-relative** and must not depend on unpinned upstream content.

### Project Integration

*Normative Framework (summary — detail in ADR-003).*

**Project Integration** is how a consuming project binds to the Framework.
The **Local Project Entry** is the canonical gateway: a thin, tool-neutral
root that records the pin, points to Project Policy and context, and makes
shared precedence knowable. It must not duplicate the Framework.

Humans and agents use the **same precedence model**. Unresolved precedence
requires Stop/Escalation — not invented resolution. The repository README is
not the agent-authoritative root.

### Agents

*Normative Framework (summary — detail in ADR-004).*

An **AI agent** is a non-human **actor** that may participate in Framework
capabilities. Agents **consume** Runtime; they do not define it. Multi-agent
collaboration is **native-optional**. Material **Approval** and Decision Owner
**accountability** remain human by default. Discovery follows the Local
Project Entry and pinned Baseline.

---

## How to read this repository

*Informative.*

1. Skim this Overview for the map.
2. Read [FA-002 (Method Spine)](./FA-002-METHOD-SPINE.md) for methodological
   principles.
3. Use [Accepted ADRs](./adr/) when you need architectural decision detail.
4. Apply [FA-001 (Normative Labelling Convention)](./FA-001-NORMATIVE-LABELLING-CONVENTION.md)
   when reading or writing Framework assets.
5. Treat the [README](../README.md) as landing status and navigation — not law.
6. Use the README Documentation map to distinguish Framework Assets / ADRs from
   Informative stewardship surfaces such as the Evolution Backlog and
   `docs/research/` (not pin content by default).

Import procedures (Entry template, pinning how-to, Agent Pack, Getting
Started) are construction phases after E2 and are not defined here.

---

## Architectural authority

*Normative Framework.*

| Need | Go to |
| ---- | ----- |
| Method principles | [FA-002 (Method Spine)](./FA-002-METHOD-SPINE.md) |
| Capabilities, Runtime, classification | [ADR-001](./adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md) |
| Baseline, pin, version domains | [ADR-002](./adr/ADR-002-BASELINE-PINNING-AND-VERSIONING.md) |
| Entry, precedence, Project Policy boundary | [ADR-003](./adr/ADR-003-PROJECT-INTEGRATION-AND-PRECEDENCE.md) |
| Human/agent participation and authority | [ADR-004](./adr/ADR-004-AGENT-INTERACTION-MODEL.md) |
| Document force labels | [FA-001 (Normative Labelling Convention)](./FA-001-NORMATIVE-LABELLING-CONVENTION.md) |

---

## End of FA-003
