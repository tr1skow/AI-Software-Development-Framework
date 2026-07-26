# FA-022 — Planning Outcome Template

| Attribute | Value |
| --------- | ----- |
| Asset ID | FA-022 |
| Title | Planning Outcome Template |
| Kind | template |
| Classification | Normative Framework (template shape; mixed sections labelled) |
| Lifecycle Status | Accepted |
| Related | [FA-021 (Planning Guide)](./FA-021-PLANNING-GUIDE.md); [FA-019 (Decision Support Guide)](./FA-019-DECISION-SUPPORT-GUIDE.md); [FA-020 (Decision Support Outcome Template)](./FA-020-DECISION-SUPPORT-OUTCOME-TEMPLATE.md); [FA-009 (Change Classification Guide)](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md); [FA-017 (Implementation Support Guide)](./FA-017-IMPLEMENTATION-SUPPORT-GUIDE.md); [ADR-001](./adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md) |

---

## How to use this template

*Informative.*

1. Copy into the consuming project at a stable path.
2. Replace placeholders in `<angle-brackets>`.
3. Complete per [FA-021 (Planning Guide)](./FA-021-PLANNING-GUIDE.md).
4. A completed instance is a **project work product**, not Framework law.

This template records a **Planning Outcome** only. It does not record material
binds, materialise artefacts, or approve a change.

---

## Normative Framework — record rules

*Normative Framework.*

1. Required slots below must be knowable when Planning is bound and a `ready`
   outcome is claimed.
2. Outcome vocabulary MUST use Planning statuses — not “approved.”
3. Material / irreversible binds MUST be referenced via Decision Support
   Outcomes when Decision Support was bound — not re-owned here.
4. Filling this template does not create Implementation readiness, Review,
   Verification, or Approval outcomes.

---

## Normative Framework — template shape

*Normative Framework.*

```markdown
# Planning Outcome

## Identity

| Field | Value |
| ----- | ----- |
| Planning outcome identity | <id> |
| Change reference | <ticket-pr-or-local-id> |
| Effective Classification reference | <classification-id + revision> |
| Bound Planning depth | <minimal \| standard \| elevated \| project-mapped> |

## Constraints from binds

| Field | Value |
| ----- | ----- |
| Decision Support bound? | yes \| no |
| Decision Support Outcome reference(s) | <id(s)-or-n/a> |
| Approved intent summary | <brief> |

## Work structure

| Field | Value |
| ----- | ----- |
| Steps / slices (ordered) | <list> |
| Dependencies | <list-or-none> |
| Checkpoints (Review / Verification / Stop / reclassify) | <list-or-none> |
| Out-of-scope / exclusions | <list-or-none> |

## Planning Outcome

| Field | Value |
| ----- | ----- |
| Outcome status | ready \| blocked |
| Recorded by | <name-or-role> |
| Agent participation | none \| assisted \| drafted — <notes> |
| When | <ISO-date-or-timestamp> |

## Explicit non-claims

- This record is NOT a Decision Support Outcome.
- This record is NOT an Approval Decision.
- This record is NOT a Review or Verification Outcome.
- This record does NOT materialise change artefacts or claim Artefact Fitness.
```

---

## Recommended — sample wording

*Recommended.*

`Outcome status: ready — three slices (schema, API, clients); checkpoint after schema; respects DS outcome DS-4.`

`Outcome status: blocked — Decision Support still bound and unrecorded; Stop.`

Avoid: “Approved,” “Implemented,” “Verified.”

---

## Informative — filling tips

*Informative.*

- Prefer short steps over narrative essays.
- After reclassification, issue a new Planning Outcome revision as needed.
- Agents may draft; humans finalise when Policy requires.

---

## End of FA-022
