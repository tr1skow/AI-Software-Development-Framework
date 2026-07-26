# FA-020 — Decision Support Outcome Template

| Attribute | Value |
| --------- | ----- |
| Asset ID | FA-020 |
| Title | Decision Support Outcome Template |
| Kind | template |
| Classification | Normative Framework (template shape; mixed sections labelled) |
| Lifecycle Status | Accepted |
| Related | [FA-019 (Decision Support Guide)](./FA-019-DECISION-SUPPORT-GUIDE.md); [FA-009 (Change Classification Guide)](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md); [FA-017 (Implementation Support Guide)](./FA-017-IMPLEMENTATION-SUPPORT-GUIDE.md); [FA-021 (Planning Guide)](./FA-021-PLANNING-GUIDE.md); [ADR-001](./adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md) |

---

## How to use this template

*Informative.*

1. Copy into the consuming project at a stable path.
2. Replace placeholders in `<angle-brackets>`.
3. Complete per [FA-019 (Decision Support Guide)](./FA-019-DECISION-SUPPORT-GUIDE.md).
4. A completed instance is a **project work product**, not Framework law.

This template records a **Decision Support Outcome** only. It does not approve
a change, plan work, or materialise artefacts.

---

## Normative Framework — record rules

*Normative Framework.*

1. Required slots below must be knowable when Decision Support is bound and a
   `recorded` outcome is claimed.
2. Outcome vocabulary MUST use Decision Support statuses — not “approved.”
3. Filling this template does not create a Planning Outcome, Approval Decision,
   or Implementation readiness claim.

---

## Normative Framework — template shape

*Normative Framework.*

```markdown
# Decision Support Outcome

## Identity

| Field | Value |
| ----- | ----- |
| Decision Support outcome identity | <id> |
| Change reference | <ticket-pr-or-local-id> |
| Effective Classification reference | <classification-id + revision> |
| Bound Decision Support depth | <minimal \| standard \| elevated \| project-mapped> |

## Authority

| Field | Value |
| ----- | ----- |
| Human Decision Owner / bind authority | <name-or-role> |
| Agent participation | none \| assisted \| drafted — <notes> |

## Material / irreversible bind(s)

| Field | Value |
| ----- | ----- |
| Bind statement(s) | <what is locked in> |
| Why material / irreversible | <brief> |
| Alternatives considered (if required by depth) | <list-or-n/a> |
| Constraints and exclusions | <list-or-none> |
| Residual uncertainty | <list-or-none> |

## Decision Support Outcome

| Field | Value |
| ----- | ----- |
| Outcome status | recorded \| blocked |
| Recorded by | <name-or-role> |
| When | <ISO-date-or-timestamp> |

## Explicit non-claims

- This record is NOT an Approval Decision.
- This record is NOT a Planning Outcome.
- This record is NOT a Review or Verification Outcome.
- This record does NOT materialise change artefacts.
```

---

## Recommended — sample wording

*Recommended.*

`Outcome status: recorded — public API v2 will break pagination defaults; DO Alice; Classification C-9 rev 1.`

`Outcome status: blocked — architectural target unclear; Stop pending Human Authority.`

Avoid: “Approved for merge,” “Plan complete,” “Implemented.”

---

## Informative — filling tips

*Informative.*

- Keep bind statements short and testable against later artefacts.
- If Planning is also bound, reference this outcome from the Planning Outcome
  rather than re-owning the bind there.
- Agents may draft; humans record material binds.

---

## End of FA-020
