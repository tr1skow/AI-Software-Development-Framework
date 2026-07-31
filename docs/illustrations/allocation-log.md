# Illustration Allocation Log

| Attribute | Value |
| --------- | ----- |
| Document | AIS illustration allocation log |
| Type | Repository / documentation governance |
| Classification | Informative / Reference (governance) |
| Related | [AIS-000](./AIS-000-ARCHITECTURE-ILLUSTRATION-SYSTEM.md) |

This log records **AIS-###** illustration identifiers. It is **not** a
Framework Asset allocation log and does **not** use `FA-###`.

Status values follow the AIS-000 **illustration status model**: Draft,
Approved, Published, Deprecated (publication status of the illustration —
separate from the Sketch → … → Referenced production flow).

**Hero** (optional): `Yes` if the illustration is intended as a primary hero
figure (for example README); otherwise leave blank or `No`.

---

## Allocation table

| AIS ID | Title | Status | Path (SVG) | Referenced by | Hero | Notes |
| ------ | ----- | ------ | ---------- | ------------- | ---- | ----- |
| AIS-000 | Architecture Illustration System | Published (standard) | — | — | — | Illustration system standard; not a figure |
| AIS-001 | Framework Documentation Map | Published | [svg/AIS-001-framework-documentation-map.svg](./svg/AIS-001-framework-documentation-map.svg) | README | Yes | v1.0; [metadata](./svg/AIS-001-framework-documentation-map.metadata.md) |
| AIS-002 | Governance Lifecycle | Published | [svg/AIS-002-governance-lifecycle.svg](./svg/AIS-002-governance-lifecycle.svg) | GOVERNANCE.md | No | v1.1; iteration transitions + evidence-by-use; [metadata](./svg/AIS-002-governance-lifecycle.metadata.md) |
| AIS-003+ | — | Unallocated | — | — | — | Next free illustration ID |

**Referenced by** lists primary documentation citations for maintainers (for
example: `README`, `Whitepaper §4`). Update when links are added or removed.
This is documentation maintenance only.

---

## Rules

1. Allocate the next free `AIS-###` before publishing a new illustration.
2. Do not reuse an ID for a different semantic subject.
3. Update **Status** using Draft → Approved → Published → Deprecated as
   applicable.
4. Keep **Referenced by** current when documentation cites or drops the figure.
5. Canonical files live under `svg/`; derived PNG under `png/`.
6. Optionally record an illustration **Changes** log by version (see AIS-000);
   this does not replace Git history.
7. Set **Hero** when an illustration is designated as a primary hero figure.

---

## End of allocation log
