# FA-016 — Approval Decision Template

| Attribute | Value |
| --------- | ----- |
| Asset ID | FA-016 |
| Title | Approval Decision Template |
| Kind | template |
| Classification | Normative Framework (template shape; mixed sections labelled) |
| Lifecycle Status | Accepted |
| Related | [FA-015 (Approval Guide)](./FA-015-APPROVAL-GUIDE.md); [FA-011 (Review Guide)](./FA-011-REVIEW-GUIDE.md); [FA-013 (Verification Guide)](./FA-013-VERIFICATION-GUIDE.md); [FA-009 (Change Classification Guide)](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md); [ADR-001](./adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md); [ADR-004](./adr/ADR-004-AGENT-INTERACTION-MODEL.md) |

---

## How to use this template

*Informative.*

1. Copy into the consuming project at a stable path.
2. Replace placeholders in `<angle-brackets>`.
3. Complete per [FA-015 (Approval Guide)](./FA-015-APPROVAL-GUIDE.md).
4. A completed instance is a **project work product**, not Framework law.

This template does **not** perform Review or Verification. It records an
**Approval Decision** only.

---

## Normative Framework — record rules

*Normative Framework.*

1. Required declaration slots below must be knowable when an Approval Decision
   is claimed for Framework-governed work.
2. Decision vocabulary MUST be `accepted` / `rejected` / `deferred`.
3. When Review is bound, a Review Outcome reference with consumable `pass` is
   required for `accepted`.
4. When Verification is bound, a Verification Outcome reference with
   `bar-met` is required for `accepted`.
5. Filling this template without Decision Owner authority does not create valid
   material acceptance.
6. This record MUST NOT claim to be a Review Outcome or Verification Outcome.

---

## Normative Framework — template shape

*Normative Framework.*

```markdown
# Approval Decision

## Identity

| Field | Value |
| ----- | ----- |
| Approval decision identity | <id> |
| Change reference | <ticket-pr-or-local-id> |
| Effective Classification reference | <classification-id + revision> |
| Bound Approval depth | <minimal \| standard \| elevated \| project-mapped> |

## Authority

| Field | Value |
| ----- | ----- |
| Human Decision Owner | <name-or-role> |
| Project Policy reference | <path> |
| Automation used (if any) | <none \| description within policy bounds> |

## Consumed outcomes

| Field | Value |
| ----- | ----- |
| Review bound? | yes \| no |
| Review Outcome reference | <id-or-n/a> |
| Review Outcome value | pass \| fail \| conditional \| n/a |
| Verification bound? | yes \| no |
| Verification Outcome reference | <id-or-n/a> |
| Verification Outcome value | bar-met \| bar-not-met \| n/a |
| Residual risks acknowledged | <list-or-none> |

## Scope

| Field | Value |
| ----- | ----- |
| Scope accepted / considered | <what is in / out> |
| Acceptance conditions | <list-or-none> |
| Explicit exclusions | <list-or-none> |

## Approval Decision

| Field | Value |
| ----- | ----- |
| Approval Decision | accepted \| rejected \| deferred |
| Decided by | <Decision Owner> |
| When | <ISO-date-or-timestamp> |

## Explicit non-claims

- This record is NOT a Review Outcome.
- This record is NOT a Verification Outcome.
```

---

## Recommended — sample wording

*Recommended.*

`Approval Decision: accepted — DO Jane Doe; Review Outcome R-12 pass; Verification Outcome V-12 bar-met; Effective Classification C-7 rev 2.`

`Approval Decision: rejected — Verification Outcome bar-not-met; rework required.`

Avoid recording `accepted` when a bound outcome is missing or failed.

---

## Informative — filling tips

*Informative.*

- For justified trivial depth, still record a referenceable acceptance act.
- If Effective Classification changes before decision, consume outcomes valid
  under the new Effective Classification only.
- Agents may draft this record; Decision Owner must make material decisions.

---

## End of FA-016
