# FA-019 — Decision Support Guide

| Attribute | Value |
| --------- | ----- |
| Asset ID | FA-019 |
| Title | Decision Support Guide |
| Kind | guide |
| Classification | Normative Framework (mixed sections labelled) |
| Lifecycle Status | Accepted |
| Related | [FA-020 (Decision Support Outcome Template)](./FA-020-DECISION-SUPPORT-OUTCOME-TEMPLATE.md); [FA-021 (Planning Guide)](./FA-021-PLANNING-GUIDE.md); [FA-017 (Implementation Support Guide)](./FA-017-IMPLEMENTATION-SUPPORT-GUIDE.md); [FA-009 (Change Classification Guide)](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md); [FA-015 (Approval Guide)](./FA-015-APPROVAL-GUIDE.md); [FA-005 (Local Project Entry Guide)](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md); [FA-002 (Method Spine)](./FA-002-METHOD-SPINE.md); [ADR-001](./adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md); [ADR-004](./adr/ADR-004-AGENT-INTERACTION-MODEL.md) |

---

## Purpose

*Informative.*

**Decision Support** owns exactly one Runtime responsibility:

> making **material / irreversible binds explicit** when required by the
> Effective Classification — without approving merge or release.

Nothing more. Nothing less.

It produces a **Decision Support Outcome**. It does not own work structuring
([FA-021 (Planning)](./FA-021-PLANNING-GUIDE.md)), artefact materialisation
([FA-017](./FA-017-IMPLEMENTATION-SUPPORT-GUIDE.md)), or Acceptance Chain
outcomes.

Catalogue membership is defined in
[ADR-001](./adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md).

Record outcomes with
[FA-020 (Decision Support Outcome Template)](./FA-020-DECISION-SUPPORT-OUTCOME-TEMPLATE.md).

---

## Normative Framework — ownership

*Normative Framework.*

### Owns

1. Making material or irreversible binds **explicit** at the depth bound by
   the Effective Classification.
2. Production of a **Decision Support Outcome** recording the bind(s),
   authority, and residual uncertainty as required.
3. Ensuring such binds are knowable before work that depends on them proceeds
   under Framework governance.

### MUST NOT

1. MUST NOT produce an **Approval Decision** or replace
   [FA-015 (Approval)](./FA-015-APPROVAL-GUIDE.md).
2. MUST NOT produce a **Planning Outcome** or own multi-step work structuring.
3. MUST NOT materialise change artefacts or define the Artefact Fitness
   Contract ([FA-017](./FA-017-IMPLEMENTATION-SUPPORT-GUIDE.md)).
4. MUST NOT produce Review or Verification Outcomes.
5. MUST NOT change, replace, or invent an Effective Classification.
6. MUST NOT infer, extend, or invent approved intent, business, architectural,
   product, or governance intent beyond Framework governance — **Stop** instead
   ([FA-002](./FA-002-METHOD-SPINE.md)).
7. MUST NOT treat everyday “we decided” chat as a Decision Support Outcome
   unless explicitly recorded under this capability.

---

## Normative Framework — Decision Support Outcome

*Normative Framework.*

A Decision Support Outcome MUST make knowable, when Decision Support is bound:

- the material / irreversible bind(s) made explicit;
- who holds human accountability for the bind (Decision Owner or delegated
  human authority per Policy);
- residual uncertainty and exclusions;
- that the outcome is **not** an Approval Decision, Planning Outcome, or
  Implementation artefact set.

Outcome status vocabulary:

| Status | Meaning |
| ------ | ------- |
| `recorded` | Required binds are explicit at bound depth |
| `blocked` | Binds cannot be made explicit without Stop / further Human Authority |
| `not-required` | Used only when Classification did not bind Decision Support (normally omit the capability) |

When Decision Support is bound, Implementation Support MUST NOT materialise
work that depends on those binds until a consumable `recorded` outcome exists
([FA-017](./FA-017-IMPLEMENTATION-SUPPORT-GUIDE.md)) — or Stop.

---

## Normative Framework — inputs and preconditions

*Normative Framework.*

1. An **Effective Classification** must exist and **Decision Support** must be
   bound (or this capability is not invoked).
2. Depth and actor constraints must be knowable
   ([FA-009](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md)).
3. Sufficient context for the bind must exist; if understanding is missing →
   Stop (Discovery may be required when bound; do not invent).
4. Entry / Policy / Decision Owner must be resolvable
   ([FA-005](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md)).

---

## Normative Framework — interactions

*Normative Framework.*

1. Decision Support and Planning are **separately owned** and **independently
   bindable**.
2. **Recommended** compose order: record material binds (**Decision Support**)
   before structuring work that must respect those binds (**Planning**). This
   order is not a mandatory universal serial rule when they do not depend on
   each other.
3. Planning MUST NOT encode a new material / irreversible bind that Decision
   Support was bound to make explicit — that bind belongs here.
4. Approval consumes Review and Verification Outcomes, not Decision Support
   Outcomes as a substitute for Acceptance.
5. Reclassification that changes required binds interrupts; re-validate Decision
   Support under the new Effective Classification.
6. Stop may interrupt at any time.

---

## Human and agent participation

*Normative Framework.*

| Action | Allowed |
| ------ | ------- |
| Draft bind options / outcome text | Agents MAY |
| Recommend a bind | Agents MAY (non-authoritative) |
| Record material / irreversible bind | Human Decision Owner (or Policy-defined human authority) |
| Invent missing intent to “finish” the record | **Forbidden** — Stop |
| Self-approve material product acceptance | **Forbidden** |

---

## Recommended — depth cues

*Recommended.*

| Depth band (FA-009) | Emphasis |
| ------------------- | -------- |
| `minimal` | Short explicit bind statement + owner |
| `standard` | Bind, rationale summary, exclusions, residual uncertainty |
| `elevated` | Stronger alternatives/constraints record; clearer irreversibility acknowledgment |

---

## Informative — examples

*Informative.*

- Choosing a public API break strategy → Decision Support; rollout steps → Planning.
- Picking a schema migration direction → Decision Support; ordered migration
  tasks → Planning.
- “Add a checkbox in the UI” with no irreversibility → often neither.

---

## Non-goals

*Informative.*

This guide is not an ADR methodology handbook, product strategy framework,
Planning guide, Implementation guide, or Approval guide.

---

## End of FA-019
