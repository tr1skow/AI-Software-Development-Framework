# FA-010 — Classification Record Template

| Attribute | Value |
| --------- | ----- |
| Asset ID | FA-010 |
| Title | Classification Record Template |
| Kind | template |
| Classification | Normative Framework (template shape; mixed sections labelled) |
| Lifecycle Status | Accepted |
| Related | [FA-009 (Change Classification Guide)](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md); [FA-005 (Local Project Entry Guide)](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md); [FA-007 (Minimal Project Policy Starter)](./FA-007-MINIMAL-PROJECT-POLICY-STARTER.md); [FA-004 (Pinning and Baseline Guide)](./FA-004-PINNING-AND-BASELINE-GUIDE.md); [ADR-001](./adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md); [ADR-003](./adr/ADR-003-PROJECT-INTEGRATION-AND-PRECEDENCE.md); [ADR-004](./adr/ADR-004-AGENT-INTERACTION-MODEL.md) |

---

## How to use this template

*Informative.*

1. Copy into the consuming project at a stable path of the project’s choosing.
2. Replace placeholders in `<angle-brackets>`.
3. Complete bindings per [FA-009 (Change Classification Guide)](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md).
4. Keep status accurate: **Draft** until Decision Owner acceptance.
5. A **completed** record in a consuming project is a **project work product**,
   not Framework normative content.

This template **does not** itself approve or classify a change. Humans and
agents fill it; Decision Owner acceptance makes an Accepted revision
**Effective**.

---

## Normative Framework — record rules

*Normative Framework.*

1. Required declaration slots below **must** be knowable on a completed record
   used for Framework-governed work (field labels are Recommended samples;
   categories are required).
2. The binding set **must** be complete: each catalogue capability marked
   required / not required / interrupt-available, with depth for each required
   capability.
3. **Draft** is **never** Effective.
4. **Accepted** and **Effective** are the **same** authority state for a
   revision.
5. **Exactly one** revision of a change’s classification may be Effective at a
   time.
6. A **Superseded** revision remains historical evidence; it must not govern
   further execution.
7. Filling this template does **not** constitute Decision Owner acceptance.

---

## Normative Framework — template shape

*Normative Framework.*

```markdown
# Classification Record

## Record identity

| Field | Value |
| ----- | ----- |
| Classification record identity | <id> |
| Change reference | <ticket-pr-or-local-id> |
| Revision | <n> |
| Status | Draft \| Accepted / Effective \| Superseded |
| Prior revision reference | <id-or-none> |

## Authority and acceptance

| Field | Value |
| ----- | ----- |
| Human Decision Owner | <name-or-role> |
| Acceptance / effectiveness record | <who-accepted, when, or "Draft — not accepted"> |
| Local Project Entry reference | <path-or-id> |
| Pinned Framework Baseline identity | <baseline-id> |
| Project Policy mapping used | <policy-path + map name, OR "FA-009 Recommended defaults"> |
| Delivery context | greenfield \| brownfield \| modernisation |
| Control posture | lightweight/solo \| normal \| high-risk/org-controlled |
| Posture tighten for this change? | yes \| no — <note> |

## Change description

| Field | Value |
| ----- | ----- |
| Change intent | <what is requested / claimed outcome> |
| Affected areas | <product / architecture / ops areas> |

## Materiality and uncertainty

| Field | Value |
| ----- | ----- |
| Materiality assessment | <what is/is not material and why> |
| Uncertainty statement | <known certainty level and why> |
| Known unknowns | <list-or-none> |
| Explicitly deferred items (with bounds) | <item + bounds, or none> |
| Progressive Commitment bounds (if any) | <scope/lifetime/reassess path, or none> |

## Classification label and rationale

| Field | Value |
| ----- | ----- |
| Classification label | <trivial \| standard \| material \| controlled \| project-mapped-label> |
| Rationale | <why this label and binding set> |
| Triviality justification (if label claims trivial) | <required when claiming trivial, else n/a> |

## Bound capabilities and depths

Mark each capability. Depth is required when status is Required.
Recommended depth bands: minimal \| standard \| elevated (or project-mapped).

| Capability | Bind | Depth | Actor constraint | Notes |
| ---------- | ---- | ----- | ---------------- | ----- |
| Change Classification | Required | <depth> | <human-required \| actor-flexible \| agent-permitted> | |
| Stop and Escalation | Interrupt-available | n/a | <constraint> | Always available |
| Discovery | Required \| Not required | <depth-or-n/a> | <constraint> | |
| Risk and Materiality Assessment | Required \| Not required | <depth-or-n/a> | <constraint> | |
| Decision Support | Required \| Not required | <depth-or-n/a> | <constraint> | |
| Planning | Required \| Not required | <depth-or-n/a> | <constraint> | |
| Implementation Support | Required \| Not required | <depth-or-n/a> | <constraint> | |
| Review | Required \| Not required | <depth-or-n/a> | <constraint> | |
| Verification | Required \| Not required | <depth-or-n/a> | <constraint> | |
| Approval | Required | <depth> | human-required (material) or <policy-allowed trivial depth> | Always conceptually bound |
| Agent Collaboration | Required \| Not required | <depth-or-n/a> | <constraint> | Required when agents participate |

## Review, Verification, Approval

| Field | Value |
| ----- | ----- |
| Review requirement | <what must be reviewed; independence expectation> |
| Fallback-review requirement | <policy fallback when independence unavailable, or n/a> |
| Verification requirement | <bar before proposing acceptance> |
| Approval authority | <Decision Owner / policy reference> |
| Approval depth | <minimal \| standard \| elevated \| project-mapped> |

## Stop, exclusions, reclassification

| Field | Value |
| ----- | ----- |
| Stop / Escalate conditions | <what invalidates continuation under this binding set> |
| Explicit exclusions | <what this classification does not authorise> |
| Reclassification triggers | <scope/knowledge changes that require a new revision> |

## Context and evidence

| Field | Value |
| ----- | ----- |
| Relevant context / evidence references | <paths, ADRs, designs, tickets, or none> |
```

---

## Recommended — sample wording and compact formats

*Recommended.*

Status values (use exactly one per revision):

- `Draft` — proposal only; not Effective
- `Accepted / Effective` — Decision Owner accepted; governs Runtime
- `Superseded` — replaced by a later Accepted / Effective revision

Suggested compact Acceptance / effectiveness record:

`<Decision-Owner-name> accepted revision <n> on <ISO-date>; Effective immediately.`

Suggested Policy mapping line when using Framework defaults:

`FA-009 Recommended defaults (no project label remap)`

Suggested trivial Approval depth line:

`minimal — Decision Owner recorded acceptance of classified trivial change <id>`

Projects MAY store records as Markdown, tickets, or other project-chosen forms
if all Normative declaration categories remain knowable. This template’s
Markdown layout is a Recommended sample, not an exclusive technology.

---

## Informative — filling guidance

*Informative.*

- Start status as `Draft`. Do not execute Framework-governed work until
  `Accepted / Effective`.
- When reclassifying: create revision `n+1` as `Draft`; on acceptance set it to
  `Accepted / Effective` and mark prior revision `Superseded`.
- Prefer citing Entry and Policy paths rather than pasting their bodies.
- If any of security, privacy, data migration, public API, or irreversible
  architecture impact is **unknown**, do not mark `trivial` — Stop or defer
  with explicit Progressive Commitment bounds per FA-009.
- Agents may pre-fill drafts; leave Acceptance / effectiveness blank until a
  human Decision Owner accepts material classifications.
- After instantiation and use, the filled record is project evidence under
  ADR-003 precedence as a project work product — it is not Framework law.

---

## Non-goals

*Informative.*

This template does not define persistence storage, executable schema, tooling,
or full Review / Verification / Approval procedures.

---

## End of FA-010
