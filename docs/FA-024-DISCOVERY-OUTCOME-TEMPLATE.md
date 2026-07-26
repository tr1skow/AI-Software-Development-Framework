# FA-024 — Discovery Outcome Template

| Attribute | Value |
| --------- | ----- |
| Asset ID | FA-024 |
| Title | Discovery Outcome Template |
| Kind | template |
| Classification | Normative Framework (template shape; mixed sections labelled) |
| Lifecycle Status | Accepted |
| Related | [FA-023 (Discovery Guide)](./FA-023-DISCOVERY-GUIDE.md); [FA-009 (Change Classification Guide)](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md); [FA-019 (Decision Support Guide)](./FA-019-DECISION-SUPPORT-GUIDE.md); [FA-021 (Planning Guide)](./FA-021-PLANNING-GUIDE.md); [FA-017 (Implementation Support Guide)](./FA-017-IMPLEMENTATION-SUPPORT-GUIDE.md); [ADR-001](./adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md) |

---

## How to use this template

*Informative.*

1. Copy into the consuming project at a stable path.
2. Replace placeholders in `<angle-brackets>`.
3. Complete per [FA-023 (Discovery Guide)](./FA-023-DISCOVERY-GUIDE.md).
4. A completed instance is a **project work product**, not Framework law.

This template records a **Discovery Outcome** only. It establishes a claim about
understanding of the problem and relevant system context. It does not create
plans, bindings, artefacts, or Acceptance Chain outcomes.

---

## Normative Framework — record rules

*Normative Framework.*

1. Required slots below must be knowable when Discovery is bound or required and
   a Discovery Outcome is claimed.
2. Outcome vocabulary MUST be `sufficient` / `insufficient` / `blocked`.
3. Filling this template does not invent requirements, architecture, or intent.
4. If status is `insufficient` or `blocked`, dependent Runtime work must **Stop**
   until Human Authority clarifies understanding and/or reclassification occurs
   ([FA-023](./FA-023-DISCOVERY-GUIDE.md)).

---

## Normative Framework — template shape

*Normative Framework.*

```markdown
# Discovery Outcome

## Identity

| Field | Value |
| ----- | ----- |
| Discovery outcome identity | <id> |
| Change reference | <ticket-pr-or-local-id> |
| Effective Classification reference | <classification-id + revision, or pending-reclassification> |
| Bound Discovery depth | <minimal \| standard \| elevated \| project-mapped \| n/a-if-stop-driven> |

## Established understanding

| Field | Value |
| ----- | ----- |
| Problem understanding | <what is established about the problem> |
| Relevant system context | <what is established about system context for this change> |

## Remaining unknowns

| Field | Value |
| ----- | ----- |
| Unknowns | <list> |
| Impact if unresolved | <why these block or do not block at this depth> |

## Consulted evidence / references

| Field | Value |
| ----- | ----- |
| Evidence / references | <repos, docs, runtime observations, tickets, Entry context paths, …> |
| Evidence gaps | <list-or-none> |

## Discovery Outcome

| Field | Value |
| ----- | ----- |
| Outcome status | sufficient \| insufficient \| blocked |
| Recorded by | <name-or-role> |
| Agent participation | none \| assisted \| drafted — <notes> |
| When | <ISO-date-or-timestamp> |

## Explicit non-claims

- This record is NOT a Decision Support Outcome.
- This record is NOT a Planning Outcome.
- This record is NOT an Implementation artefact set or Artefact Fitness claim.
- This record is NOT a Review Outcome, Verification Outcome, or Approval Decision.
- This record does NOT invent requirements, architecture, business intent,
  product intent, or governance intent.
```

---

## Recommended — sample wording

*Recommended.*

`Outcome status: sufficient — current auth middleware path established from code+logs; unknowns listed; Classification C-12 rev 1.`

`Outcome status: insufficient — production config source unknown; Stop pending Human Authority.`

`Outcome status: blocked — no access to legacy service; Stop.`

Avoid: “Approved,” “Decided,” “Planned,” “Implemented,” “Verified.”

---

## Informative — filling tips

*Informative.*

- Prefer links to evidence over pasting large extracts.
- After reclassification, issue a new Discovery Outcome as needed.
- Agents may draft; humans accept material sufficiency claims per Policy.
- Discovery feeds Classification, Decision Support, Planning, and Implementation
  Support — it does not replace them.

---

## End of FA-024
