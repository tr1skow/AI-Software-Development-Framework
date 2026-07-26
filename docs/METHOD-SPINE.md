# Method Spine

| Attribute | Value |
| --------- | ----- |
| Document | Method Spine |
| Status | Normative Method |
| Phase | C1 Framework Core Assets (E2) |
| Related | [Normative Labelling Convention](./NORMATIVE-LABELLING-CONVENTION.md); [Framework Overview](./FRAMEWORK-OVERVIEW.md); Accepted ADRs under [docs/adr/](./adr/) |

---

## Purpose

This document publishes the **Method Spine**: the stable, AI-optional
methodological principles of the AI Software Development Framework.

The Framework operationalises these principles through Framework Core,
Baselines, Project Integration, and Agent Interaction (see Accepted ADRs).
This document does not replace those ADRs.

---

## Status and force

- Overall document force: **Normative Method**
- Numbered principle statements below are **Normative Method** and MUST be
  preserved exactly as written
- Plain-language glosses are **Informative** and MUST NOT be read as amending
  principle meaning

---

## Principles

### 1. Human Authority

**Normative Method.**

Humans remain accountable for material product, architecture, risk, merge and
release decisions; agents and automation may execute only within
human-approved policy.

*Informative.* Tools and agents may perform work. Humans own consequential
decisions and the policies that allow automation. Accountability is not the
same as typing every keystroke.

### 2. Progressive Commitment

**Normative Method.**

Do not bind increasingly hard-to-reverse commitments until uncertainty is
reduced enough for that step’s risk and reversibility; reversible learning and
urgent response remain allowed when their scope, intended lifetime and path to
reassessment are explicit.

*Informative.* This is commitment discipline, not a mandatory linear
lifecycle. Learn early when the work stays reversible or explicitly bounded.
In incidents, act with constrained blast radius and reassess.

### 3. Proportionate Ceremony

**Normative Method.**

Process depth and safeguards must scale with risk, impact, reversibility,
uncertainty and blast radius.

*Informative.* Serious changes get more process. Small, safe changes stay
light. How a project names change classes is a Framework concern; this
principle only requires scaling.

### 4. Explicit Uncertainty and Safe Stopping

**Normative Method.**

Material unknowns and blocking assumptions must be surfaced; when they would
force silent invention of requirements, architecture or contracts, work stops
or escalates instead.

*Informative.* Say what you do not know when it matters. Do not invent missing
product or contract facts. Routine micro-assumptions in local coding need not
stop all work.

### 5. Independent Review for Material Change

**Normative Method.**

Material changes must not be finally accepted through unchecked self-approval.
Review independence must be proportionate to risk and project policy, while a
human Decision Owner remains accountable for final acceptance. Where true
independence is unavailable, the limitation and resulting risk must be
explicit, and the project must apply its approved fallback review policy.

*Informative.* Material work needs challenge before final acceptance. Solo
work uses an explicit fallback policy, not pretend independence. Another
agent’s analysis is not automatic human approval.

### 6. Tool Neutrality

**Normative Method.**

Normative Method and Framework concepts must not depend on a specific AI
vendor, IDE, language, cloud, host or architecture style; tool-specific
guidance belongs in optional adapters or labelled examples.

*Informative.* The rules travel. Vendor-specific tips are extras, not the law.

### 7. Examples Are Not Norms

**Normative Method.**

Examples and reference implementations are informative; where they conflict
with normative Method or Framework guidance, the normative guidance wins.

*Informative.* Examples should be concrete and useful. They never outrank
Method or Framework norms. One project’s history is not the standard.

---

## What this document does not define

This Method Spine does not define:

- change-class taxonomies or nicknames
- Local Project Entry filename or schema
- Agent Pack format or prompts
- pin distribution technology
- verification checklist items
- architecture styles or programming languages

Those belong in Framework assets and Project Policy under Accepted ADRs.

---

## Amendment

Changes to Normative Method statements require an explicit, versioned Method
and Baseline process with human approval and migration guidance where
consuming projects are affected. Informative glosses may be clarified without
changing normative statements.

See [ADR-002 — Baseline Pinning and Versioning](./adr/ADR-002-BASELINE-PINNING-AND-VERSIONING.md)
for Baseline immutability and evolution philosophy.

---

## End of Method Spine
