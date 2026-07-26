# FA-012 — Review Outcome Template

| Attribute | Value |
| --------- | ----- |
| Asset ID | FA-012 |
| Title | Review Outcome Template |
| Kind | template |
| Classification | Normative Framework (template shape; mixed sections labelled) |
| Lifecycle Status | Accepted |
| Related | [FA-011 (Review Guide)](./FA-011-REVIEW-GUIDE.md); [FA-009 (Change Classification Guide)](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md); [FA-015 (Approval Guide)](./FA-015-APPROVAL-GUIDE.md); [ADR-001](./adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md) |

---

## How to use this template

*Informative.*

1. Copy into the consuming project at a stable path.
2. Replace placeholders in `<angle-brackets>`.
3. Complete per [FA-011 (Review Guide)](./FA-011-REVIEW-GUIDE.md).
4. A completed instance is a **project work product**, not Framework law.

This template does **not** verify a change or approve a change. It records a
**Review Outcome** only.

---

## Normative Framework — record rules

*Normative Framework.*

1. Required declaration slots below must be knowable when Review is bound and a
   Review Outcome is claimed (field labels are Recommended samples).
2. Outcome vocabulary MUST be `pass` / `fail` / `conditional` — not “approved.”
3. Filling this template does not create a Verification Outcome or Approval
   Decision.
4. Actor coincidence does not merge capabilities.

---

## Normative Framework — template shape

*Normative Framework.*

```markdown
# Review Outcome

## Identity

| Field | Value |
| ----- | ----- |
| Review outcome identity | <id> |
| Change reference | <ticket-pr-or-local-id> |
| Effective Classification reference | <classification-id + revision> |
| Bound Review depth | <minimal \| standard \| elevated \| project-mapped> |

## Review mode

| Field | Value |
| ----- | ----- |
| Independence mode | independent \| fallback-review |
| Fallback-review policy reference | <path-or-n/a> |
| Reviewer(s) | <name-or-role> |
| Agent participation | none \| assisted \| drafted — <notes> |

## Challenge summary

| Field | Value |
| ----- | ----- |
| Artefacts reviewed | <paths-or-refs> |
| Challenge scope | <what was challenged> |
| Findings | <list-or-none> |
| Residual risks for Approval | <list-or-none> |
| Required actions (if conditional) | <list-or-n/a> |

## Review Outcome

| Field | Value |
| ----- | ----- |
| Review Outcome | pass \| fail \| conditional |
| Outcome recorded by | <name-or-role> |
| When | <ISO-date-or-timestamp> |

## Explicit non-claims

- This record is NOT a Verification Outcome.
- This record is NOT an Approval Decision.
```

---

## Recommended — sample wording

*Recommended.*

`Review Outcome: pass — independent challenge complete at standard depth; residual risks listed for Approval.`

`Review Outcome: conditional — address findings F1–F2 before pass.`

Avoid: “Approved,” “LGTM as acceptance,” “Tests passed so review done.”

---

## Informative — filling tips

*Informative.*

- Cite the Effective Classification revision in force during Review.
- If Classification is superseded before Approval, this outcome may need
  re-validation under FA-011.
- Agents may draft; humans finalise material Review Outcomes per Policy.

---

## End of FA-012
