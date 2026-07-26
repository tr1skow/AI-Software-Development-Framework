# FA-021 — Planning Guide

| Attribute | Value |
| --------- | ----- |
| Asset ID | FA-021 |
| Title | Planning Guide |
| Kind | guide |
| Classification | Normative Framework (mixed sections labelled) |
| Lifecycle Status | Accepted |
| Related | [FA-022 (Planning Outcome Template)](./FA-022-PLANNING-OUTCOME-TEMPLATE.md); [FA-019 (Decision Support Guide)](./FA-019-DECISION-SUPPORT-GUIDE.md); [FA-017 (Implementation Support Guide)](./FA-017-IMPLEMENTATION-SUPPORT-GUIDE.md); [FA-009 (Change Classification Guide)](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md); [FA-005 (Local Project Entry Guide)](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md); [FA-002 (Method Spine)](./FA-002-METHOD-SPINE.md); [ADR-001](./adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md); [ADR-004](./adr/ADR-004-AGENT-INTERACTION-MODEL.md) |

---

## Purpose

*Informative.*

**Planning** owns exactly one Runtime responsibility:

> **structuring multi-step work** before materialisation when required by the
> Effective Classification — without making irreversible material binds and
> without producing change artefacts.

Nothing more. Nothing less.

It produces a **Planning Outcome**. Material / irreversible binds belong to
[FA-019 (Decision Support)](./FA-019-DECISION-SUPPORT-GUIDE.md). Artefact
materialisation belongs to [FA-017 (Implementation Support)](./FA-017-IMPLEMENTATION-SUPPORT-GUIDE.md).

Catalogue membership is defined in
[ADR-001](./adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md).

Record outcomes with
[FA-022 (Planning Outcome Template)](./FA-022-PLANNING-OUTCOME-TEMPLATE.md).

---

## Normative Framework — ownership

*Normative Framework.*

### Owns

1. Structuring multi-step work at the depth bound by the Effective
   Classification.
2. Production of a **Planning Outcome**: ordered steps/slices, dependencies,
   checkpoints, and explicit out-of-scope.
3. Keeping the plan within approved intent and any **recorded** Decision
   Support binds that apply.

### MUST NOT

1. MUST NOT make or own material / irreversible binds (Decision Support).
2. MUST NOT materialise change artefacts or claim Artefact Fitness
   ([FA-017](./FA-017-IMPLEMENTATION-SUPPORT-GUIDE.md)).
3. MUST NOT produce Review, Verification, or Approval outcomes.
4. MUST NOT change, replace, or invent an Effective Classification.
5. MUST NOT expand scope beyond the Effective Classification and recorded
   binds.
6. MUST NOT infer missing business, architectural, product, or governance
   intent — **Stop** instead.
7. MUST NOT encode a new material bind inside the plan that Decision Support
   was bound to record explicitly.

---

## Normative Framework — Planning Outcome

*Normative Framework.*

A Planning Outcome MUST make knowable, when Planning is bound:

- structured steps or slices for the change;
- sequencing / dependencies as needed at bound depth;
- checkpoints where Review, Verification, reclassification, or Stop may apply;
- out-of-scope and exclusions;
- references to Decision Support Outcomes when binds constrain the plan;
- that the outcome is **not** Implementation, Approval, or Decision Support.

Outcome status vocabulary:

| Status | Meaning |
| ------ | ------- |
| `ready` | Structure sufficient at bound depth for Implementation Support to proceed |
| `blocked` | Structure cannot be completed without Stop / further Human Authority or missing Decision Support binds |
| `not-required` | Only when Classification did not bind Planning (normally omit) |

When Planning is bound, Implementation Support MUST NOT proceed with
multi-step materialisation that depended on that structure until a consumable
`ready` Planning Outcome exists ([FA-017](./FA-017-IMPLEMENTATION-SUPPORT-GUIDE.md))
— or Stop.

---

## Normative Framework — inputs and preconditions

*Normative Framework.*

1. An **Effective Classification** must exist and **Planning** must be bound
   (or this capability is not invoked).
2. Depth and actor constraints must be knowable
   ([FA-009](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md)).
3. Approved intent must be sufficient to structure work; otherwise Stop.
4. When Decision Support is also bound and the plan must respect material
   binds, a consumable Decision Support Outcome (`recorded`) MUST exist first
   — or Stop / complete Decision Support.
5. Entry / Policy must be resolvable
   ([FA-005](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md)).

---

## Normative Framework — interactions

*Normative Framework.*

1. Planning and Decision Support are **independently bindable** and separately
   owned.
2. **Recommended:** Decision Support before Planning when new material binds
   must lock before structuring. Parallel is allowed when they do not depend
   on each other.
3. Implementation Support consumes Planning Outcomes when Planning is bound.
4. Plans may note Verification/Review checkpoints; Planning does not perform
   those capabilities.
5. Reclassification that changes structure requirements interrupts; produce a
   new Planning Outcome under the new Effective Classification as required.
6. Stop may interrupt at any time.

---

## Human and agent participation

*Normative Framework.*

| Action | Allowed |
| ------ | ------- |
| Draft plans | Agents MAY |
| Recommend structure | Agents MAY (non-authoritative) |
| Finalise Planning Outcome when human-required | Per Policy / actor constraints |
| Invent binds or intent inside the plan | **Forbidden** — Stop |
| Treat plan completion as Approval | **Forbidden** |

---

## Recommended — depth cues

*Recommended.*

| Depth band (FA-009) | Emphasis |
| ------------------- | -------- |
| `minimal` | Short ordered step list; clear out-of-scope |
| `standard` | Steps, dependencies, checkpoints, exclusions |
| `elevated` | Stronger slicing, risk-sensitive checkpoints, explicit reclassification triggers |

Planning is not project-management methodology theatre. Depth stays
proportionate.

---

## Informative — examples

*Informative.*

- Multi-file refactor with clear binds already recorded → Planning without new
  Decision Support.
- “Decide auth approach” is Decision Support; “migrate sessions in three
  slices” is Planning.
- Single-line docs fix → usually neither.

---

## Non-goals

*Informative.*

This guide is not a PM framework, sprint system, Decision Support guide,
Implementation handbook, or Acceptance Chain guide.

---

## End of FA-021
