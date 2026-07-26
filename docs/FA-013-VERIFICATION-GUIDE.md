# FA-013 — Verification Guide

| Attribute | Value |
| --------- | ----- |
| Asset ID | FA-013 |
| Title | Verification Guide |
| Kind | guide |
| Classification | Normative Framework (mixed sections labelled) |
| Lifecycle Status | Accepted |
| Related | [FA-014 (Verification Outcome Template)](./FA-014-VERIFICATION-OUTCOME-TEMPLATE.md); [FA-011 (Review Guide)](./FA-011-REVIEW-GUIDE.md); [FA-015 (Approval Guide)](./FA-015-APPROVAL-GUIDE.md); [FA-009 (Change Classification Guide)](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md); [FA-005 (Local Project Entry Guide)](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md); [FA-002 (Method Spine)](./FA-002-METHOD-SPINE.md); [ADR-001](./adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md); [ADR-004](./adr/ADR-004-AGENT-INTERACTION-MODEL.md) |

---

## Purpose

*Informative.*

**Verification** owns meeting the **applicable verification bar** bound by the
Effective Classification, and producing a **Verification Outcome** before
acceptance is proposed.

Verification does not own independent challenge, final acceptance, or
Classification. Catalogue membership is defined in
[ADR-001](./adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md).

Record outcomes with
[FA-014 (Verification Outcome Template)](./FA-014-VERIFICATION-OUTCOME-TEMPLATE.md).

---

## Normative Framework — ownership

*Normative Framework.*

### Owns

1. Interpreting the verification bar and depth from the **Effective
   Classification**.
2. Gathering or executing evidence against that bar within Project Policy.
3. Production of a **Verification Outcome**: `bar-met` / `bar-not-met`.
4. Recording evidence summary, gaps, and any explicitly bounded deferred checks.

### MUST NOT

1. MUST NOT substitute for Review or produce a **Review Outcome**.
2. MUST NOT grant **Approval** or produce an **Approval Decision**.
3. MUST NOT change or invent an Effective Classification.
4. MUST NOT weaken the bound bar below Classification / Method / Core
   invariants.
5. MUST NOT treat CI “pass” alone as Framework Approval or as a Review Outcome.

---

## Normative Framework — inputs and preconditions

*Normative Framework.*

Before Verification begins for Framework-governed work:

1. An **Effective Classification** must exist and **Verification** must be
   bound (or Verification is not invoked).
2. Verification depth and actor constraints must be knowable
   ([FA-009](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md)).
3. Artefacts to be verified must be available.
4. If the bar cannot be known, or material unknowns block honest verification
   → **Stop/Escalate** (do not invent a weaker bar).

Review findings MAY inform risk focus. Review does **not** own the bar.

---

## Normative Framework — Verification Outcome

*Normative Framework.*

A Verification Outcome MUST be one of:

| Outcome | Meaning |
| ------- | ------- |
| `bar-met` | Bound verification bar satisfied at stated depth; gaps none or explicitly bounded |
| `bar-not-met` | Bound bar not satisfied |

Do not label Verification Outcomes “approved” or “pass” in the Review Outcome
sense. Prefer `bar-met` / `bar-not-met` for boundary clarity.

When Verification is bound, Approval MUST consume a Verification Outcome
([FA-015](./FA-015-APPROVAL-GUIDE.md)). A missing Verification Outcome blocks
Approval.

Deferred checks are allowed only with **explicit bounds** consistent with
Progressive Commitment and the Effective Classification. Unbounded “verify
later” while claiming `bar-met` is invalid.

---

## Normative Framework — interaction with Review and Approval

*Normative Framework.*

1. Verification and Review are **siblings**. They MAY proceed in **parallel**.
2. Verification MAY note evidence limitations. Verification MUST NOT close
   Review or declare challenge complete.
3. Approval consumes the Verification Outcome when Verification is bound.
   Verification MUST NOT perform Approval.
4. Green checks do not create an Approval Decision.

---

## Normative Framework — failure, Stop, reclassification

*Normative Framework.*

| Condition | Required behaviour |
| --------- | ------------------ |
| `bar-not-met` | Do not propose Acceptance on Verification grounds; fix artefacts and/or reclassify; re-verify |
| Effective Classification superseded mid-Verification | Interrupt; re-validate under new Effective Classification |
| Cannot verify without inventing requirements or architecture | Stop/Escalate |
| Automation asked to accept material change because checks are green | Forbidden; Stop |

---

## Human and agent participation

*Normative Framework* (authority) *with Recommended cues.*

| Action | Allowed |
| ------ | ------- |
| Draft evidence plans / run checks | Agents MAY within Policy |
| Assist evidence collection | Agents MAY |
| Recommend bar-met / bar-not-met | Agents MAY (non-authoritative) |
| Finalise Verification Outcome when human-required | Per Policy / actor constraints; agents MUST NOT silently waive a failed bar |
| Produce Review Outcome or Approval Decision | Forbidden |

Discover via Entry first ([FA-005](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md)).
Cite Effective Classification.

---

## Recommended — depth cues

*Recommended.*

| Depth band (FA-009) | Typical Verification emphasis |
| ------------------- | ----------------------------- |
| `minimal` | Smoke / targeted checks aligned to stated intent |
| `standard` | Applicable automated and manual checks for the change type |
| `elevated` | Stronger regression, security, compatibility, or operational evidence |

Exact checklists are project- and stack-specific (Recommended / Informative in
project context). This guide owns the **bar outcome**, not a universal test
matrix.

---

## Informative — examples

*Informative.*

- Typo in docs: minimal verification that rendering/links still work if bound.
- Schema migration: elevated verification including rollback evidence.
- “All CI green” is evidence input, not an Approval Decision.

---

## Non-goals

*Informative.*

This guide does not author Review challenge procedures, Approval authority
rules, full test catalogues, tooling, or persistence design.

---

## End of FA-013
