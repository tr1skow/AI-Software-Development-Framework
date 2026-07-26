# FA-011 — Review Guide

| Attribute | Value |
| --------- | ----- |
| Asset ID | FA-011 |
| Title | Review Guide |
| Kind | guide |
| Classification | Normative Framework (mixed sections labelled) |
| Lifecycle Status | Accepted |
| Related | [FA-012 (Review Outcome Template)](./FA-012-REVIEW-OUTCOME-TEMPLATE.md); [FA-013 (Verification Guide)](./FA-013-VERIFICATION-GUIDE.md); [FA-015 (Approval Guide)](./FA-015-APPROVAL-GUIDE.md); [FA-009 (Change Classification Guide)](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md); [FA-007 (Minimal Project Policy Starter)](./FA-007-MINIMAL-PROJECT-POLICY-STARTER.md); [FA-005 (Local Project Entry Guide)](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md); [FA-002 (Method Spine)](./FA-002-METHOD-SPINE.md); [ADR-001](./adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md); [ADR-004](./adr/ADR-004-AGENT-INTERACTION-MODEL.md) |

---

## Purpose

*Informative.*

**Review** owns proportionate **independent challenge** of a proposed change
(and its rationale and artefacts), or **fallback-review** when independence is
unavailable under Project Policy.

Review produces a **Review Outcome**. It does not own verification bars, final
acceptance, or Classification bindings. Architectural catalogue membership is
defined in [ADR-001](./adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md).

Record outcomes with [FA-012 (Review Outcome Template)](./FA-012-REVIEW-OUTCOME-TEMPLATE.md).

---

## Normative Framework — ownership

*Normative Framework.*

### Owns

1. Independent challenge of the change at the depth bound by the **Effective
   Classification**.
2. Application of **fallback-review** when independence is unavailable and
   Project Policy declares a fallback
   ([FA-007](./FA-007-MINIMAL-PROJECT-POLICY-STARTER.md)).
3. Production of a **Review Outcome**: `pass` / `fail` / `conditional`.
4. Recording challenge findings and residual risks for Approval consumption.

### MUST NOT

1. MUST NOT declare the verification bar met or produce a **Verification
   Outcome**.
2. MUST NOT grant **Approval** or produce an **Approval Decision**.
3. MUST NOT change, replace, or invent an Effective Classification.
4. MUST NOT treat tool “approve” / “LGTM” labels as a Review Outcome unless the
   project explicitly records them as such under this capability.
5. MUST NOT waive Review when Review is bound by claiming that Verification
   passed.

---

## Normative Framework — inputs and preconditions

*Normative Framework.*

Before Review begins for Framework-governed work:

1. An **Effective Classification** must exist and **Review** must be bound (or
   Review is not invoked).
2. Review depth and actor constraints must be knowable from that classification
   ([FA-009](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md)).
3. Reviewable artefacts (or design artefacts if Review binds earlier) must be
   available.
4. Independence expectation or fallback-review path must be knowable from
   Project Policy when material Review binds.
5. If mandatory inputs conflict or material factors are unknown without valid
   deferral → **Stop/Escalate** (do not invent).

---

## Normative Framework — Review Outcome

*Normative Framework.*

A Review Outcome MUST be one of:

| Outcome | Meaning |
| ------- | ------- |
| `pass` | Challenge complete at bound depth; no open required actions |
| `fail` | Challenge not satisfied; material findings remain open |
| `conditional` | Required actions must complete before Review Outcome may become `pass` |

**Conditional** is not a partial Approval Decision.

When Review is bound, Approval MUST consume a Review Outcome
([FA-015](./FA-015-APPROVAL-GUIDE.md)). A missing Review Outcome blocks
Approval.

---

## Normative Framework — independence and fallback

*Normative Framework.*

1. Material Review requires independence proportionate to risk and Policy, per
   [FA-002 (Method Spine)](./FA-002-METHOD-SPINE.md).
2. When true independence is unavailable, fallback-review declared in Project
   Policy MUST apply. **Fallback-review does not waive Review.**
3. Agents MUST NOT fake independence.
4. Actor coincidence (same human participates in multiple capabilities) does
   not merge capabilities: Review still requires its own Review Outcome.

---

## Normative Framework — interaction with Verification and Approval

*Normative Framework.*

1. Review and Verification are **siblings**. They MAY proceed in **parallel**
   once suitable artefacts exist. Neither consumes the other.
2. Review MAY cite verification-relevant residual risks. Review MUST NOT own
   or close Verification.
3. Approval consumes the Review Outcome when Review is bound. Review MUST NOT
   perform Approval.
4. Informative teaching order may present Review before Verification; that
   order is **not** a mandatory serial Runtime rule between the siblings.

---

## Normative Framework — failure, Stop, reclassification

*Normative Framework.*

| Condition | Required behaviour |
| --------- | ------------------ |
| Review Outcome `fail` | Do not treat the change as Review-complete; rework and/or reclassify; re-run Review as needed |
| `conditional` actions incomplete | Review Outcome remains incomplete for Approval consumption |
| Effective Classification superseded mid-Review | Interrupt; do not continue under superseded bindings; re-validate under new Effective Classification |
| Missing Owner, Policy, or pin; unresolved precedence | Stop/Escalate |
| Asked to self-approve material acceptance under guise of Review | Forbidden; Stop |

Stop interrupts unsafe continuation; it does not produce a Review Outcome.

---

## Human and agent participation

*Normative Framework* (authority) *with Recommended cues.*

| Action | Allowed |
| ------ | ------- |
| Draft findings | Agents MAY |
| Assist challenge | Agents MAY within Policy |
| Recommend pass/fail/conditional | Agents MAY (non-authoritative) |
| Finalise Review Outcome when human-required | Human (or Policy-defined review authority); agents MUST NOT silently finalise material Review |
| Fake independence | Forbidden |
| Produce Approval Decision | Forbidden |

Discover via Local Project Entry first
([FA-005](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md)). Cite Effective Classification.

---

## Recommended — depth cues

*Recommended.*

| Depth band (FA-009) | Typical Review emphasis |
| ------------------- | ----------------------- |
| `minimal` | Focused challenge of stated intent and obvious blast radius |
| `standard` | Structured challenge of behaviour, rationale, and residual risk |
| `elevated` | Stronger independence (or explicit fallback), broader blast-radius challenge, explicit residual-risk record |

Projects MAY specialise cues within Method/Core invariants.

---

## Informative — examples

*Informative.*

- Docs-only justified trivial change: light Review at `minimal` depth if bound.
- Authentication change: elevated Review; independence or explicit fallback.
- CI green does not create a Review Outcome.

---

## Non-goals

*Informative.*

This guide does not author Verification bars, Approval procedures, Agent Pack
content, tooling, or persistence design.

---

## End of FA-011
