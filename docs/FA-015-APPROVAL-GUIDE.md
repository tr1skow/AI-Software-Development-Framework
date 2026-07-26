# FA-015 — Approval Guide

| Attribute | Value |
| --------- | ----- |
| Asset ID | FA-015 |
| Title | Approval Guide |
| Kind | guide |
| Classification | Normative Framework (mixed sections labelled) |
| Lifecycle Status | Accepted |
| Related | [FA-016 (Approval Decision Template)](./FA-016-APPROVAL-DECISION-TEMPLATE.md); [FA-011 (Review Guide)](./FA-011-REVIEW-GUIDE.md); [FA-013 (Verification Guide)](./FA-013-VERIFICATION-GUIDE.md); [FA-009 (Change Classification Guide)](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md); [FA-005 (Local Project Entry Guide)](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md); [FA-007 (Minimal Project Policy Starter)](./FA-007-MINIMAL-PROJECT-POLICY-STARTER.md); [FA-002 (Method Spine)](./FA-002-METHOD-SPINE.md); [ADR-001](./adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md); [ADR-004](./adr/ADR-004-AGENT-INTERACTION-MODEL.md) |

---

## Purpose

*Informative.*

**Approval** owns the human Decision Owner’s **final acceptance decision** for
a change under Human Authority, within Project Policy automation bounds.

Approval produces an **Approval Decision**. It consumes **Review Outcomes** and
**Verification Outcomes** when those capabilities are bound. It does not perform
Review or Verification, and does not redefine Classification.

Record decisions with
[FA-016 (Approval Decision Template)](./FA-016-APPROVAL-DECISION-TEMPLATE.md).

---

## Normative Framework — ownership

*Normative Framework.*

### Owns

1. The **Approval Decision**: `accepted` / `rejected` / `deferred`.
2. Confirming Decision Owner authority and Approval depth from the **Effective
   Classification** and Project Policy.
3. Consuming required Acceptance Chain outcomes before material acceptance.
4. Recording what scope is accepted and any acceptance conditions.

### MUST NOT

1. MUST NOT create a **Review Outcome** or re-perform Review as a substitute for
   consuming it.
2. MUST NOT create a **Verification Outcome** or re-perform Verification as a
   substitute for consuming it.
3. MUST NOT accept a change when Review and/or Verification are bound but their
   outcomes are missing, `fail` / `bar-not-met`, or unresolved `conditional`.
4. MUST NOT change or invent an Effective Classification.
5. MUST NOT allow agents to self-approve **material** acceptance
   ([FA-002](./FA-002-METHOD-SPINE.md),
   [ADR-004](./adr/ADR-004-AGENT-INTERACTION-MODEL.md)).

---

## Normative Framework — inputs and preconditions

*Normative Framework.*

Before Approval proceeds for Framework-governed work:

1. An **Effective Classification** must exist and **Approval** must be bound at
   an explicit depth ([FA-009](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md)).
   Approval is always conceptually bound for Framework-governed work.
2. Human Decision Owner must be knowable (Entry / Policy).
3. When **Review** is bound: a consumable Review Outcome of `pass` (after any
   conditional actions closed) is required
   ([FA-011](./FA-011-REVIEW-GUIDE.md)).
4. When **Verification** is bound: a consumable Verification Outcome of
   `bar-met` is required ([FA-013](./FA-013-VERIFICATION-GUIDE.md)).
5. Residual risks and explicit exclusions from Classification / Review must be
   visible to the Decision Owner.
6. If outcomes are missing or authority conflicts → **Stop/Escalate**; do not
   invent success.

---

## Normative Framework — Approval Decision

*Normative Framework.*

An Approval Decision MUST be one of:

| Decision | Meaning |
| -------- | ------- |
| `accepted` | Decision Owner accepts the change scope under stated conditions |
| `rejected` | Decision Owner does not accept; change is not complete under Framework Acceptance |
| `deferred` | Acceptance postponed; not accepted |

Tool or CI “approve” labels are **not** an Approval Decision unless explicitly
recorded as one by the Decision Owner (or Policy-bounded automation for
non-material cases only).

Trivial work still requires a **referenceable acceptance act** at the bound
Approval depth — never “no human acceptance authority.”

---

## Normative Framework — consumption rule

*Normative Framework.*

1. When Review and Verification are **both** bound, Approval MUST consume
   **both** outcomes. Consuming only one is **invalid**.
2. Review and Verification MAY complete in **any order** or in **parallel**.
   Approval is **last** among the Acceptance Chain capabilities.
3. Approval MAY read residual risks from Review and evidence limitations from
   Verification; it MUST NOT absorb those capabilities’ ownership.
4. Classification binds whether Review/Verification are required; Approval does
   not silently skip bound capabilities.

---

## Normative Framework — failure, Stop, reclassification

*Normative Framework.*

| Condition | Required behaviour |
| --------- | ------------------ |
| `rejected` | No completed acceptance; Owner directs rework, abandon, or reclassify |
| `deferred` | Not accepted; continue only when a later Approval Decision is made |
| Bound outcome missing or failed | Approval MUST NOT yield `accepted` |
| Effective Classification superseded mid-Approval | Interrupt; do not accept under superseded bindings |
| Agent requested to self-accept material change | Forbidden; Stop |
| Unresolved precedence / missing Decision Owner | Stop/Escalate |

After rejection or failed upstream outcomes, continuation is rework under the
current Effective Classification and/or reclassification — not Approval
inventing success.

---

## Human and agent participation

*Normative Framework.*

| Action | Allowed |
| ------ | ------- |
| Draft recommendation packet / summarise outcomes | Agents MAY |
| Assist Decision Owner | Agents MAY |
| Recommend accepted/rejected/deferred | Agents MAY (non-authoritative) |
| Execute merge/release automation | Only within human-approved Project Policy bounds |
| Material Approval Decision | **Human Decision Owner only** |
| Self-approve material acceptance | **Forbidden** for agents |

Discover via Entry first ([FA-005](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md)).

---

## Recommended — depth cues

*Recommended.*

| Depth band (FA-009) | Typical Approval emphasis |
| ------------------- | ------------------------- |
| `minimal` | Referenceable Decision Owner acceptance of classified trivial/low scope |
| `standard` | Explicit consumption of Review and Verification outcomes; recorded decision |
| `elevated` | Stronger residual-risk acknowledgment; stricter Policy automation limits |

---

## Informative — closing the Runtime loop

*Informative.*

Effective Classification binds the work. Implementation produces artefacts.
Review challenges; Verification evidences. Approval applies Human Authority.
That closes the Runtime behavioural loop for the change — or Stop / reject /
reclassify when unsafe or incomplete.

---

## Non-goals

*Informative.*

This guide does not author Review or Verification procedures, release
engineering handbooks, Agent Pack content, tooling, or persistence design.

---

## End of FA-015
