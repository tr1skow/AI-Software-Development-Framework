# FA-014 — Verification Outcome Template

| Attribute | Value |
| --------- | ----- |
| Asset ID | FA-014 |
| Title | Verification Outcome Template |
| Kind | template |
| Classification | Normative Framework (template shape; mixed sections labelled) |
| Lifecycle Status | Accepted |
| Related | [FA-013 (Verification Guide)](./FA-013-VERIFICATION-GUIDE.md); [FA-009 (Change Classification Guide)](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md); [FA-015 (Approval Guide)](./FA-015-APPROVAL-GUIDE.md); [ADR-001](./adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md) |

---

## How to use this template

*Informative.*

1. Copy into the consuming project at a stable path.
2. Replace placeholders in `<angle-brackets>`.
3. Complete per [FA-013 (Verification Guide)](./FA-013-VERIFICATION-GUIDE.md).
4. A completed instance is a **project work product**, not Framework law.

This template does **not** perform Review or Approval. It records a
**Verification Outcome** only.

---

## Normative Framework — record rules

*Normative Framework.*

1. Required declaration slots below must be knowable when Verification is bound
   and a Verification Outcome is claimed.
2. Outcome vocabulary MUST be `bar-met` / `bar-not-met`.
3. Filling this template does not create a Review Outcome or Approval Decision.
4. Unbounded deferred checks are incompatible with `bar-met`.

---

## Normative Framework — template shape

*Normative Framework.*

```markdown
# Verification Outcome

## Identity

| Field | Value |
| ----- | ----- |
| Verification outcome identity | <id> |
| Change reference | <ticket-pr-or-local-id> |
| Effective Classification reference | <classification-id + revision> |
| Bound Verification depth | <minimal \| standard \| elevated \| project-mapped> |

## Bar and evidence

| Field | Value |
| ----- | ----- |
| Verification bar applied | <summary-or-policy-ref> |
| Evidence summary | <checks-run, results, refs> |
| Gaps | <list-or-none> |
| Deferred checks (with bounds) | <item + bounds, or none> |
| Executed / assisted by | <human \| agent \| both — notes> |

## Verification Outcome

| Field | Value |
| ----- | ----- |
| Verification Outcome | bar-met \| bar-not-met |
| Outcome recorded by | <name-or-role> |
| When | <ISO-date-or-timestamp> |

## Explicit non-claims

- This record is NOT a Review Outcome.
- This record is NOT an Approval Decision.
```

---

## Recommended — sample wording

*Recommended.*

`Verification Outcome: bar-met — standard depth; unit+integration checks green; no deferred items.`

`Verification Outcome: bar-not-met — migration rollback drill failed.`

Avoid: “Approved,” “Review complete,” “Ship it.”

---

## Informative — filling tips

*Informative.*

- Attach or point to logs/reports rather than pasting large outputs.
- If Classification depth rises after reclassification, re-verify as needed.
- Agents may run checks; humans remain accountable for material bar claims per
  Policy.

---

## End of FA-014
