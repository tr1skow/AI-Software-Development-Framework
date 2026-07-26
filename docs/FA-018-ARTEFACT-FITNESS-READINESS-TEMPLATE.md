# FA-018 — Artefact Fitness Readiness Template

| Attribute | Value |
| --------- | ----- |
| Asset ID | FA-018 |
| Title | Artefact Fitness Readiness Template |
| Kind | template |
| Classification | Normative Framework (template shape; mixed sections labelled) |
| Lifecycle Status | Accepted |
| Related | [FA-017 (Implementation Support Guide)](./FA-017-IMPLEMENTATION-SUPPORT-GUIDE.md); [FA-009 (Change Classification Guide)](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md); [FA-011 (Review Guide)](./FA-011-REVIEW-GUIDE.md); [FA-013 (Verification Guide)](./FA-013-VERIFICATION-GUIDE.md); [FA-015 (Approval Guide)](./FA-015-APPROVAL-GUIDE.md); [ADR-001](./adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md) |

---

## How to use this template

*Informative.*

1. Copy into the consuming project at a stable path.
2. Replace placeholders in `<angle-brackets>`.
3. Complete per [FA-017 (Implementation Support Guide)](./FA-017-IMPLEMENTATION-SUPPORT-GUIDE.md).
4. A completed instance is a **project work product**, not Framework law.

This template does **not** own project artefacts. It records whether artefacts
are claimed to satisfy the **Runtime definition** of the Artefact Fitness
Contract. It does **not** create a Review Outcome, Verification Outcome, or
Approval Decision.

---

## Normative Framework — record rules

*Normative Framework.*

1. Required declaration slots below must be knowable when Implementation
   Support is bound and readiness for Review/Verification is claimed.
2. Readiness claims MUST reference the Effective Classification in force.
3. Filling this template does not approve intent, classify the change, or
   accept the change.
4. If approved intent is insufficient, do not claim fitness—Stop instead
   ([FA-017](./FA-017-IMPLEMENTATION-SUPPORT-GUIDE.md)).

---

## Normative Framework — template shape

*Normative Framework.*

```markdown
# Artefact Fitness Readiness

## Identity

| Field | Value |
| ----- | ----- |
| Readiness record identity | <id> |
| Change reference | <ticket-pr-or-local-id> |
| Effective Classification reference | <classification-id + revision> |
| Bound Implementation Support depth | <minimal \| standard \| elevated \| project-mapped> |

## Approved intent

| Field | Value |
| ----- | ----- |
| Approved intent summary | <from Effective Classification / bound Planning or Decision Support> |
| Intent sources referenced | <classification-id, plan-id, decision-id, or equivalent> |
| Intent sufficiency | sufficient \| insufficient — if insufficient, Stop (do not claim fitness) |

## Artefacts (project-owned)

| Field | Value |
| ----- | ----- |
| Artefact references | <paths, PRs, specs, configs, migrations, docs, models, …> |
| Artefact kinds | <code \| docs \| config \| infra \| migration \| spec \| model \| other> |

## Artefact Fitness Contract checklist

Mark only when true at the bound depth:

- [ ] Artefacts are attributable to this change and Effective Classification
- [ ] Artefacts materialise approved intent without silent scope extension
- [ ] Artefacts are challengeable by Review at bound depth
- [ ] Artefacts are evidencable by Verification at bound depth
- [ ] Gaps, exclusions, and unknowns are explicit (not hidden)
- [ ] This record does not claim Review, Verification, or Approval outcomes

## Readiness claim

| Field | Value |
| ----- | ----- |
| Fitness claim | fit \| not-fit |
| Recorded by | <name-or-role> |
| Agent participation | none \| assisted \| drafted — <notes> |
| When | <ISO-date-or-timestamp> |
| Unknowns / exclusions | <list-or-none> |
| Reclassification triggers noticed | <list-or-none> |

## Explicit non-claims

- This record is NOT a Review Outcome.
- This record is NOT a Verification Outcome.
- This record is NOT an Approval Decision.
- This record does NOT transfer artefact ownership to the Framework.
```

---

## Recommended — sample wording

*Recommended.*

`Fitness claim: fit — standard depth; artefacts PR#42 + migration notes; intent from Classification C-7 rev 2; no silent scope extension.`

`Fitness claim: not-fit — approved intent insufficient for auth edge cases; Stop pending Human Authority.`

Avoid: “Approved,” “Verified,” “Done,” “LGTM.”

---

## Informative — filling tips

*Informative.*

- Prefer links to artefact locations over pasting large bodies.
- After reclassification, re-assess fitness under the new Effective
  Classification.
- Agents may draft; humans remain accountable for material fitness claims per
  Project Policy and actor constraints.
- Project engineering standards may be cited in project context; they are not
  part of this Framework template’s Normative shape.

---

## End of FA-018
