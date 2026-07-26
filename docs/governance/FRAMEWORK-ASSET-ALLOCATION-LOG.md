# Framework Asset Allocation Log

| Attribute | Value |
| --------- | ----- |
| Document | Framework Asset Allocation Log |
| Type | Repository / construction governance metadata |
| Classification | Governance (not a Framework Asset; not an ADR) |

This log records `FA-###` allocation state. It is **not** a Framework Asset
and must not receive an `FA-###` identifier.

States: `reserved` · `provisional` · `active` · `deprecated` · `retired`

Permanent lock occurs at first merge to `main`. See
[FRAMEWORK-ASSET-IDENTIFICATION-STANDARD.md](./FRAMEWORK-ASSET-IDENTIFICATION-STANDARD.md).

---

## Allocations

| Asset ID | Title | Kind | State | First main commit | Replacement ID | Notes |
| -------- | ----- | ---- | ----- | ----------------- | -------------- | ----- |
| FA-001 | Normative Labelling Convention | labelling-convention | active | `a412d53755871b8eae07acbf08d17f33d672befa` | | |
| FA-002 | Method Spine | method | active | `a412d53755871b8eae07acbf08d17f33d672befa` | | |
| FA-003 | Framework Overview | overview | active | `a412d53755871b8eae07acbf08d17f33d672befa` | | |
| FA-004 | Pinning and Baseline Guide | guide | active | `6e5a22c67e53669f27d416cb40afbee59f08aa3f` | | E3 Project Integration |
| FA-005 | Local Project Entry Guide | guide | active | `6e5a22c67e53669f27d416cb40afbee59f08aa3f` | | E3; owns agent discovery contract |
| FA-006 | Local Project Entry Template | template | active | `6e5a22c67e53669f27d416cb40afbee59f08aa3f` | | E3 Project Integration |
| FA-007 | Minimal Project Policy Starter | template | active | `6e5a22c67e53669f27d416cb40afbee59f08aa3f` | | E3 Project Integration |
| FA-008 | Greenfield Initialisation Checklist | checklist | active | `6e5a22c67e53669f27d416cb40afbee59f08aa3f` | | E3 Project Integration |

---

## Next free FA ID

`FA-009`

---

## End of allocation log
