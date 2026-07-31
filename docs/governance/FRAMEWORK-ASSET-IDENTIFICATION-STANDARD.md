# Framework Asset Identification Standard (FAIS)

| Attribute | Value |
| --------- | ----- |
| Document | Framework Asset Identification Standard |
| Type | Repository / construction governance |
| Classification | Governance (not a Framework Asset; not an ADR) |
| Status | Approved |

This document is **repository and construction governance**. It is **not** a
Framework Asset and **must not** receive an `FA-###` identifier. It is **not**
an Architecture Decision Record.

---

## Purpose

FAIS defines a stable identification scheme for Framework artefacts so humans
and AI agents can cite assets across renames, path moves, and long-term
evolution.

---

## Namespaces

| Prefix | Scope |
| ------ | ----- |
| `ADR-###` | Architecture Decision Records |
| `FA-###` | All non-ADR Framework product assets |
| `GD-###` | Governance Decisions (repository / Framework governance rules) |

Asset type is represented by **Kind** metadata, not separate ID prefixes.

Do **not** introduce typed ID namespaces such as GP, TP, AP, EX, or RI.

Repository-governance documents other than Governance Decisions (including this
standard and the allocation log) use neither `FA-###`, `ADR-###`, nor `GD-###`
as their identity scheme. Governance Decisions are recorded under
[GOVERNANCE.md](./GOVERNANCE.md) and `GOVERNANCE_DECISIONS/`.

---

## Global FA numbering

- `FA-###` uses a single global monotonic sequence (three-digit zero-padding
  until overflow requires more digits).
- Kind values (for example `method`, `guide`, `template`) describe type; they
  do not create separate number ranges.
- Sparse numbering is acceptable.
- Permanent traceability takes precedence over gap-free numbering.

---

## Permanent identity

| Element | Rule |
| ------- | ---- |
| **Asset ID** | Permanent identity |
| Title | May change under governance |
| Filename / path | May change under governance |
| Kind | May change under governance (rare; document reason) |

The Asset ID in the document **header** is the identity **source of truth**.

---

## Allocation timing

1. An ID becomes **permanent** at the asset’s **first merge to `main`**.
2. Before merge, an ID may be **reserved** or marked **provisional**.
3. An abandoned **pre-merge** reservation may be **released**; that number may
   be reused only if it never appeared on `main`.
4. An ID that has appeared on `main` must **never** be reused.
5. After permanence, retirement uses deprecate/retire rules — not reuse.

---

## Header convention (Framework Assets)

Each Framework Asset (`FA-###`) must expose:

| Field | Meaning |
| ----- | ------- |
| Asset ID | Permanent `FA-###` |
| Title | Human title |
| Kind | Type metadata |
| Classification | Force per Normative Labelling Convention |
| Lifecycle Status | For example Draft, Accepted, Deprecated, Retired |

ADRs continue to use their established ADR header fields and `ADR-###`
identity. They are not required to use FA Kind fields.

---

## Reference convention

- Use **ID-first** references.
- On first mention, prefer ID plus title (for example `FA-002 (Method Spine)`).
- Do not use filenames alone as permanent identities.
- Prefer link text that includes the ID.

---

## Filename preference

Prefer filenames containing the permanent Asset ID and a concise title slug,
for example `FA-002-METHOD-SPINE.md`.

Filename changes do not change Asset ID.

---

## Lifecycle governance

| Action | Rule |
| ------ | ---- |
| **Create** | Allocate next free `FA-###` (or soft-reserve after approved review); record in the allocation log; set header before merge to `main` |
| **Rename title** | Allowed; ID unchanged; update allocation log title |
| **Move / rename file** | Allowed; keep ID in filename when practical; update links; ID unchanged |
| **Split** | Children receive **new** IDs; parent is retired or reduced to an index pointing to children |
| **Merge** | One surviving ID; other IDs retired with replacement pointers |
| **Deprecate** | Mark Deprecated in header and log; ID retained; point to replacement when known |
| **Retire** | Mark Retired; ID never reused; stub or log entry points to replacement ID(s) |

---

## Governance boundaries

| Artefact class | Identity | Authority |
| -------------- | -------- | --------- |
| Architecture Decision Records | `ADR-###` | Architectural decisions |
| Framework Assets | `FA-###` | Method / Framework product content under labelling rules |
| Governance Decisions | `GD-###` | Framework stewardship / governance rules (see [GOVERNANCE.md](./GOVERNANCE.md)) |
| Repository / construction governance | No `FA-###` / not an ADR by default | How this repository identifies and maintains assets |

Governance Decision status values (Draft, Under Review, Accepted, Superseded,
Deprecated) are defined in [GOVERNANCE.md](./GOVERNANCE.md#status-model). FAIS
does not invent a separate GD workflow.

FAIS does not amend Method Spine principles, ADR decisions, or Framework
capability semantics. Governance Decisions must not silently redefine
architecture or Runtime; architectural change remains ADR-owned.

---

## Related governance metadata

Allocation state is recorded in
[FRAMEWORK-ASSET-ALLOCATION-LOG.md](./FRAMEWORK-ASSET-ALLOCATION-LOG.md).

---

## End of FAIS
