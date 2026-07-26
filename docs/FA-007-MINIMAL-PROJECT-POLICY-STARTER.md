# FA-007 — Minimal Project Policy Starter

| Attribute | Value |
| --------- | ----- |
| Asset ID | FA-007 |
| Title | Minimal Project Policy Starter |
| Kind | template |
| Classification | Normative Framework (structure); Recommended starter prose |
| Lifecycle Status | Accepted |
| Related | [FA-005 (Local Project Entry Guide)](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md); [FA-006 (Local Project Entry Template)](./FA-006-LOCAL-PROJECT-ENTRY-TEMPLATE.md); [FA-009 (Change Classification Guide)](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md); [FA-010 (Classification Record Template)](./FA-010-CLASSIFICATION-RECORD-TEMPLATE.md); [FA-002 (Method Spine)](./FA-002-METHOD-SPINE.md); [ADR-003](./adr/ADR-003-PROJECT-INTEGRATION-AND-PRECEDENCE.md); [ADR-004](./adr/ADR-004-AGENT-INTERACTION-MODEL.md) |

---

## How to use this starter

*Informative.*

1. Copy into the consuming project at the path declared in the Local Project
   Entry.
2. Keep Day-0 policy **minimal**; deepen later as needed.
3. A human Decision Owner accepts the policy.
4. **After human acceptance**, the completed instance is **Project Policy** and
   is **project-normative** under [ADR-003](./adr/ADR-003-PROJECT-INTEGRATION-AND-PRECEDENCE.md).
   It is no longer merely Framework starter text.

---

## Normative Framework — required structure and constraints

*Normative Framework.*

1. Project Policy **must** exist and be **linked** from the Local Project
   Entry for Framework-governed work.
2. Policy must cover the declaration categories needed for this project’s use
   of agents/automation and review fallback when applicable.
3. **Human Authority** constraints apply: agents and automation may execute
   only within human-approved policy; material Approval and Decision Owner
   accountability remain human ([FA-002](./FA-002-METHOD-SPINE.md),
   [ADR-004](./adr/ADR-004-AGENT-INTERACTION-MODEL.md)).
4. When material Review may bind and true independence may be unavailable, a
   **fallback-review** declaration must be knowable.
5. Policy relates to the **pinned Baseline**: it may specialise Framework
   defaults within invariants; it must not change Baseline identity by side
   effect ([FA-004](./FA-004-PINNING-AND-BASELINE-GUIDE.md)).
6. Policy must **not** weaken Method Spine or protected Core / Baseline
   invariants ([ADR-003](./adr/ADR-003-PROJECT-INTEGRATION-AND-PRECEDENCE.md)).

---

## Recommended — starter wording

*Recommended.*

Projects MAY replace the following defaults when specialising within
invariants.

```markdown
# Project Policy

## Scope

This policy specialises Framework defaults for <project-identity> under pinned
Baseline <baseline-id>. Framework recommended practices apply unless this
document states an explicit specialisation.

## Control posture

Default control posture: <lightweight/solo | normal | high-risk/org-controlled>
(must match Local Project Entry unless an explicit temporary exception is
recorded).

## Human Authority and automation

- Decision Owner: <same-as-Entry-or-pointer>
- Agents and automation may execute only within this policy.
- Agents must not self-approve material changes.
- Material Approval remains with the human Decision Owner.

## Fallback review

When material Review binds and true independence is unavailable:
- Limitation: <e.g. solo developer; no second reviewer available>
- Fallback: <e.g. structured self-review checklist + deferred independent
  review when available>
- Risk acknowledgment: <explicit>

If independence is normally available, state that standard independent review
applies and point to the review policy location.

## Precedence

Local specialisations in this file and approved project architecture sit at
project-normative precedence (ADR-003). Conflicts with Method Spine are
invalid. Unresolved local conflicts require Stop/Escalation.

## Evolution

Policy may evolve without changing the pinned Baseline identity. Record
material policy changes in the Project Integration identity / change-history
note on the Local Project Entry.
```

Suggested Day-0 defaults many solo greenfield teams start with:

- posture: `lightweight/solo`
- automation: agents may draft and implement within classified changes;
  humans accept material work
- fallback review: structured self-review + deferred independent review for
  material changes
- classification: use [FA-009 (Change Classification Guide)](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md)
  Recommended default labels and mappings initially; specialise labels and
  thresholds here later if needed; record each change with
  [FA-010 (Classification Record Template)](./FA-010-CLASSIFICATION-RECORD-TEMPLATE.md)

---

## Informative — customisation

*Informative.*

- Prefer FA-009 Recommended defaults until a project needs local class-label
  mappings or materiality thresholds; specialise in this Policy without
  weakening Method or Core invariants.
- Raise posture for sensitive work without waiting for a Baseline upgrade.
- Keep policy short; put long architecture narratives in architecture-context
  paths, not here. Do not duplicate FA-009 Classification guidance in Policy.

---

## End of FA-007
