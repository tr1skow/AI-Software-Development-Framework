# Runtime Foundation M2 Declaration

| Attribute | Value |
| --------- | ----- |
| Document | Runtime Foundation M2 Declaration |
| Type | Repository / construction governance milestone |
| Classification | Governance (not a Framework Asset; not an ADR) |
| Status | Declared |
| Basis | Approved Runtime Foundation Review; Discovery FA-023–FA-024 active |
| Related | ADR-001–004; FA-001–024; FAIS |

This document is **repository and construction governance**. It is **not** a
Framework Asset and **must not** receive an `FA-###` identifier. It is **not**
an Architecture Decision Record. It makes **no new architectural decisions**
and introduces **no new Runtime semantics**.

It is suitable for later citation from README, whitepaper history, and release
notes.

---

## Declaration

**Runtime Foundation M2 is declared.**

Discovery ([FA-023 (Discovery Guide)](../FA-023-DISCOVERY-GUIDE.md) and
[FA-024 (Discovery Outcome Template)](../FA-024-DISCOVERY-OUTCOME-TEMPLATE.md))
has been published and activated. No **Runtime-essential** ownership gaps
remain under the approved Runtime Foundation Review.

---

## Informative concept — Runtime Execution Spine

*Informative architectural view only — not a capability, semantic, or lifecycle.*

The **Runtime Execution Spine** is the minimal set of Runtime capabilities
required to govern the normal execution of Framework-governed software changes
from project entry through approval.

At M2, the spine remains:

Project Integration · Change Classification · Decision Support · Planning ·
Implementation Support · Review · Verification · Approval

Discovery sits **outside** the spine and **feeds** it.

---

## Why Runtime Execution Spine Complete was insufficient alone

**Runtime Execution Spine Complete** was previously achieved when FA-001–022
owned the spine and all consumer-without-producer gaps **on that spine** were
closed.

That milestone was major. It was **not** Runtime Foundation M2:

```text
Runtime Execution Spine Complete  ≠  Runtime Foundation M2
```

The approved Runtime Foundation Review classified **Discovery** as
**Runtime-essential when bound**. While Discovery remained unowned, a
Runtime-essential catalogue member could still be Classification-bound without
a Framework owner. M2 therefore waited on Discovery publication.

---

## Why Discovery closed the final Runtime-essential gap

Discovery owns exactly one Runtime responsibility:

> Establishing sufficient understanding of the problem and relevant system
> context for the change's risk.

Publishing Discovery closed the last Runtime-essential consumer-without-producer
situation: Classification, Decision Support, Planning, and Implementation
Support can consume a **Discovery Outcome** when understanding must be
established, instead of inventing intent or facts.

Stop consolidation, Agent Collaboration packaging, standalone Risk packaging,
adoption assets, Getting Started, Baseline publication, examples, and tooling
remain valuable. They are **not** Runtime-essential blockers for M2 under the
approved review.

---

## Ownership posture at M2

| Claim | Status at M2 |
| ----- | ------------ |
| Runtime Execution Spine owned and coherent | Yes |
| Spine consumer-without-producer gaps closed | Yes |
| Discovery owned (feeds the spine) | Yes |
| Runtime-essential ownership gaps remaining | **None** |
| Complete Runtime / all enhancing work done | **No** — not claimed |
| Production-ready Framework / Framework 1.0 | **No** — not claimed |

---

## Framework 0.7 Alpha — development baseline

**Framework 0.7 Alpha** is the **official development baseline** for continued
Framework evolution and for the Fitness Challenge Platform.

It means the Runtime Execution Spine (and, as of M2, Discovery) is sufficiently
complete to evolve the Framework and to run the first official reference
implementation under honest constraints.

It does **not** mean:

- production-ready Framework;
- complete Runtime (all enhancing/adoption surfaces finished);
- Framework 0.7 Beta;
- Framework 1.0;
- a published public consumer Baseline.

---

## Fitness Challenge Platform — first official reference implementation

The **Fitness Challenge Platform** is the **first official reference
implementation** of the AI Software Development Framework.

| Role | Statement |
| ---- | --------- |
| Governance | The Framework governs the project |
| Validation | The project validates and matures the Framework |
| Feedback | Lessons feed back into the Framework before Beta and later v1.0 |

The reference implementation is **Informative / Reference** relative to
Framework Normative content. It must not redefine Runtime, become a rival
project root, or be treated as Framework law. It pins a Baseline and uses a
Local Project Entry like any consuming project.

---

## Milestone distinctions

| Milestone | Meaning |
| --------- | ------- |
| **Runtime Execution Spine Complete** | Spine capabilities published; spine CWP gaps closed (achieved before Discovery) |
| **Runtime Foundation M2** | Spine complete **and** Discovery published/active; **no Runtime-essential ownership gaps remain** (**this declaration**) |
| **Framework 0.7 Alpha** | Official **development baseline** for Framework evolution and the Fitness Challenge reference implementation |
| **Framework 0.7 Beta** | Broader trial maturity (e.g. Stop consolidation and stronger agent surface as preferred); not declared here |
| **Framework 1.0** | Published consumer Baseline; importable kit / Getting Started; Agent Pack; stated adoption claims defensible; not declared here |

No new milestones are invented beyond those already established in the approved
Runtime Foundation Review.

---

## Non-claims

This declaration does **not**:

- amend ADR-001–004;
- add Runtime capabilities, semantics, mechanisms, or lifecycle states;
- change the Runtime Execution Spine membership;
- claim Framework completeness or production readiness;
- allocate or alter Framework Asset IDs (see the allocation log for FA-023–024).

---

## End of declaration
