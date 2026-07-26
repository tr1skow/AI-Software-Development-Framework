# FA-006 — Local Project Entry Template

| Attribute | Value |
| --------- | ----- |
| Asset ID | FA-006 |
| Title | Local Project Entry Template |
| Kind | template |
| Classification | Normative Framework (template shape; mixed sections labelled) |
| Lifecycle Status | Accepted |
| Related | [FA-005 (Local Project Entry Guide)](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md); [FA-004 (Pinning and Baseline Guide)](./FA-004-PINNING-AND-BASELINE-GUIDE.md); [FA-007 (Minimal Project Policy Starter)](./FA-007-MINIMAL-PROJECT-POLICY-STARTER.md); [ADR-003](./adr/ADR-003-PROJECT-INTEGRATION-AND-PRECEDENCE.md) |

---

## How to use this template

*Informative.*

1. Copy this file into the consuming project (choose a stable path).
2. Replace placeholders in `<angle-brackets>`.
3. Keep the Entry thin — do not paste Framework Method, ADR, or guide bodies.
4. Link Project Policy (start from [FA-007](./FA-007-MINIMAL-PROJECT-POLICY-STARTER.md)).
5. A **completed** Entry in a consuming project is a **project work product**,
   not Framework normative content.

Agent discovery rules live in [FA-005](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md).
Do not duplicate that guide here.

---

## Normative Framework — template shape

*Normative Framework.*

The Entry instance MUST make the following declaration categories knowable
(field labels below are Recommended samples; categories are required).

---

```markdown
# Local Project Entry

## Identities and pin

| Field | Value |
| ----- | ----- |
| Local project identity | <name-or-repo-id> |
| Framework Identity | AI Software Development Framework |
| Pinned Framework Baseline identity | <baseline-id-or-interim-commit-snapshot-id> |
| Baseline local path(s) | <path(s)-to-offline-baseline-content> |

## Adoption dimensions

| Field | Value |
| ----- | ----- |
| Delivery context | greenfield \| brownfield \| modernisation |
| Default control posture | lightweight/solo \| normal \| high-risk/org-controlled |

## Decision Owner

| Field | Value |
| ----- | ----- |
| Human Decision Owner | <name-or-role> |

## Canonical path list

| Category | Path or explicit absence |
| -------- | ------------------------ |
| Project Policy | <path> |
| Product context | <path> |
| Architecture context | <path> |
| Testing / verification context | <path> |
| Review policy | <path-or-n/a-per-policy> |
| Fallback-review policy | <path-or-n/a-per-policy> |
| Automation authority / policy | <path-or-n/a-if-no-automation> |
| Agent instruction location | <path-or-n/a-if-no-agents> |

## Precedence and overrides

- [ ] Framework defaults apply with no local specialisations, or
- Local specialisations (must not weaken Method Spine or Core invariants):

<list-or-none>

## Optional adapter pins

| Adapter | Pin / version | Notes |
| ------- | ------------- | ----- |
| <none> | | |

## Project Integration identity / change-history

| Field | Value |
| ----- | ----- |
| Local integration revision note | <date-or-id-of-this-Entry/Policy-surface> |
```

---

## Recommended — sample names

*Recommended.*

| Suggestion | Example |
| ---------- | ------- |
| Entry path | `docs/LOCAL-PROJECT-ENTRY.md` or `.framework/ENTRY.md` |
| Policy path | `docs/PROJECT-POLICY.md` |
| Context dirs | `docs/product/`, `docs/architecture/`, `docs/testing/` |

---

## Informative — tips

*Informative.*

- Prefer explicit paths over silence.
- If a mandatory pointer is absent, Project Policy must say how Discovery/Stop
  handles that absence ([ADR-003](./adr/ADR-003-PROJECT-INTEGRATION-AND-PRECEDENCE.md)).
- When agents are used, set **Agent instruction location** and ensure
  automation policy is addressed.
- Confirm initialisation with
  [FA-008 (Greenfield Initialisation Checklist)](./FA-008-GREENFIELD-INITIALISATION-CHECKLIST.md).

---

## End of FA-006
