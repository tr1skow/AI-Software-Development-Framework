# FA-008 — Greenfield Initialisation Checklist

| Attribute | Value |
| --------- | ----- |
| Asset ID | FA-008 |
| Title | Greenfield Initialisation Checklist |
| Kind | checklist |
| Classification | Normative Framework (gate; mixed sections labelled) |
| Lifecycle Status | Accepted |
| Related | [FA-004 (Pinning and Baseline Guide)](./FA-004-PINNING-AND-BASELINE-GUIDE.md); [FA-005 (Local Project Entry Guide)](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md); [FA-006 (Local Project Entry Template)](./FA-006-LOCAL-PROJECT-ENTRY-TEMPLATE.md); [FA-007 (Minimal Project Policy Starter)](./FA-007-MINIMAL-PROJECT-POLICY-STARTER.md); [FA-003 (Framework Overview)](./FA-003-FRAMEWORK-OVERVIEW.md) |

---

## Scope

*Informative.*

This checklist is for **greenfield** Day 0 initialisation: a new project
binding to the Framework. Brownfield and modernisation adoption checklists are
out of scope for E3.

Passing this checklist means the project is **correctly initialised** and
**ready for Change Classification** on the first change. It does **not** mean
the full importable Framework MVP is complete, and it is **not** a claim of
full Framework adoption for a finished product.

---

## Normative Framework — initialisation gate

*Normative Framework.*

Mark each item only when true:

### Pin

- [ ] A Framework Baseline identity is chosen and recorded in the Local Project
      Entry
- [ ] Baseline content is locally / offline resolvable
- [ ] The project does not rely on floating upstream as its pin
- [ ] No conflicting Baseline pins exist

### Local Project Entry

- [ ] Exactly one authoritative Local Project Entry exists
- [ ] Entry is thin (declares and points; does not paste Framework bodies)
- [ ] Local project identity is declared
- [ ] Framework Identity is knowable
- [ ] Delivery context is `greenfield` (or explicitly justified otherwise)
- [ ] Default control posture is declared
- [ ] Human Decision Owner is declared
- [ ] Product, architecture, and testing/verification context pointers are
      declared (paths may be nascent but must be explicit)
- [ ] Precedence / override stance is declared (“defaults apply” or explicit
      specialisations)
- [ ] Project Integration identity / change-history note is present

### Project Policy

- [ ] Project Policy exists and is linked from the Entry
- [ ] Human Authority / automation bounds are stated
- [ ] Fallback-review declaration is present when independence may be
      unavailable (including typical `lightweight/solo` greenfield)
- [ ] Policy does not claim to change the pinned Baseline identity

### Agents (when used)

- [ ] Agent instruction location is declared on the Entry
- [ ] Automation authority / policy location is declared (or explicitly covered
      inside Project Policy and pointed from Entry)
- [ ] Operators understand agents must follow the discovery contract in
      [FA-005 (Local Project Entry Guide)](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md)

### Ready for first Capability

- [ ] The above gates pass
- [ ] The team treats the **next Framework activity** as **Change
      Classification** for the first real change (not skipped in favour of
      unstructured implementation)

---

## Recommended — optional improvements

*Recommended.*

- [ ] README (project) points humans to the Local Project Entry
- [ ] Interim construction pin documented if no published Baseline id yet
      ([FA-004](./FA-004-PINNING-AND-BASELINE-GUIDE.md))
- [ ] Decision Owner backup contact recorded for incidents

---

## Informative — next activity

*Informative.*

When this checklist passes, proceed to **Change Classification** for the first
change (Execution Assets / C3). E3 does not author the Classification
procedure.

Primary human onboarding flow remains: repository README →
[FA-003 (Framework Overview)](./FA-003-FRAMEWORK-OVERVIEW.md) →
[FA-002 (Method Spine)](./FA-002-METHOD-SPINE.md) as needed → pin ([FA-004](./FA-004-PINNING-AND-BASELINE-GUIDE.md))
→ Entry ([FA-005](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md) /
[FA-006](./FA-006-LOCAL-PROJECT-ENTRY-TEMPLATE.md)) → Policy
([FA-007](./FA-007-MINIMAL-PROJECT-POLICY-STARTER.md)) → this checklist.

---

## End of FA-008
