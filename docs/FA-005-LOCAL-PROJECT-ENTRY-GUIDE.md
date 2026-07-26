# FA-005 — Local Project Entry Guide

| Attribute | Value |
| --------- | ----- |
| Asset ID | FA-005 |
| Title | Local Project Entry Guide |
| Kind | guide |
| Classification | Normative Framework (mixed sections labelled) |
| Lifecycle Status | Accepted |
| Related | [FA-004 (Pinning and Baseline Guide)](./FA-004-PINNING-AND-BASELINE-GUIDE.md); [FA-006 (Local Project Entry Template)](./FA-006-LOCAL-PROJECT-ENTRY-TEMPLATE.md); [FA-007 (Minimal Project Policy Starter)](./FA-007-MINIMAL-PROJECT-POLICY-STARTER.md); [ADR-003](./adr/ADR-003-PROJECT-INTEGRATION-AND-PRECEDENCE.md); [ADR-004](./adr/ADR-004-AGENT-INTERACTION-MODEL.md) |

---

## Purpose

*Informative.*

This guide explains the Local Project Entry: the canonical gateway into
Project Integration for humans and AI agents.

Architectural detail lives in [ADR-003](./adr/ADR-003-PROJECT-INTEGRATION-AND-PRECEDENCE.md).
This guide does not duplicate that ADR’s decision body.

---

## Normative Framework — Entry rules

*Normative Framework.*

1. Each consuming project has **one** authoritative Local Project Entry.
2. The Entry is the **canonical project-side root** and gateway into Project
   Integration. It is not the repository README and not a second “agent-only”
   root.
3. The Entry **records** the pinned Framework Baseline identity; it does not
   redefine the Baseline ([FA-004](./FA-004-PINNING-AND-BASELINE-GUIDE.md),
   ADR-002).
4. The Entry remains **thin**: it declares and points; it does not paste
   Method, ADR, or Framework guide bodies.
5. Required declaration categories from ADR-003 must be knowable through the
   Entry (and linked Project Policy as applicable), including at least:
   Framework Identity (knowable), pinned Baseline identity, local project
   identity, delivery context, control posture, Decision Owner (for material
   work), product/architecture/testing context pointers, Project Policy
   location, precedence/override declaration, and conditionally agent
   instruction / automation / review / fallback-review locations.
6. Humans and agents use the **same** precedence model (ADR-003). Unresolved
   precedence requires Stop/Escalation — not invented resolution.
7. Tool-specific files are not higher law than the Entry.

### Agent discovery contract

*Normative Framework.*

Agents participating in Framework-governed work on a consuming project MUST:

1. Locate and read the Local Project Entry **first**.
2. Resolve the pinned Baseline through **locally available** content (no
   assumption of live upstream).
3. Follow Entry pointers to Project Policy, context locations, and agent
   instructions.
4. Use the **same precedence model** as humans.
5. **Never infer** Decision Owner, Baseline pin, precedence winners, or
   material product/architecture/contract facts when they are missing or
   conflicting.
6. **Stop/Escalate** when required information is missing or conflicting.
7. **Never** self-approve material work.
8. **Never** treat README, chat history, or tool memory as the authoritative
   project root.

A future C4 Agent Pack MUST consume and reference this contract. It MUST NOT
replace the Local Project Entry as the canonical project root.

---

## Recommended — field ordering and paths

*Recommended.*

Suggested Entry layout:

1. Identities and pin (project, Framework Identity, Baseline pin)
2. Delivery context and control posture
3. Decision Owner
4. Canonical path list (policy, contexts, review/fallback, automation, agent
   instructions)
5. Precedence / overrides (“defaults apply” or explicit specialisations)
6. Optional adapter pins
7. Project Integration identity or change-history note (syntax project-chosen)

Suggested path layout (examples only): keep Entry near repository root or under
a stable `docs/` / `.framework/` path declared once and not duplicated.

---

## Informative — Day 0 narrative

*Informative.*

After reading [FA-003 (Framework Overview)](./FA-003-FRAMEWORK-OVERVIEW.md)
and pinning via [FA-004](./FA-004-PINNING-AND-BASELINE-GUIDE.md), create the
Entry from [FA-006](./FA-006-LOCAL-PROJECT-ENTRY-TEMPLATE.md), link
[FA-007](./FA-007-MINIMAL-PROJECT-POLICY-STARTER.md), then confirm with
[FA-008](./FA-008-GREENFIELD-INITIALISATION-CHECKLIST.md).

Thin Entry keeps Framework law in the pin and project law in Project Policy.

---

## End of FA-005
