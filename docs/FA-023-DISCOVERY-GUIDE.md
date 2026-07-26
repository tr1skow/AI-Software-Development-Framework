# FA-023 — Discovery Guide

| Attribute | Value |
| --------- | ----- |
| Asset ID | FA-023 |
| Title | Discovery Guide |
| Kind | guide |
| Classification | Normative Framework (mixed sections labelled) |
| Lifecycle Status | Accepted |
| Related | [FA-024 (Discovery Outcome Template)](./FA-024-DISCOVERY-OUTCOME-TEMPLATE.md); [FA-009 (Change Classification Guide)](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md); [FA-019 (Decision Support Guide)](./FA-019-DECISION-SUPPORT-GUIDE.md); [FA-021 (Planning Guide)](./FA-021-PLANNING-GUIDE.md); [FA-017 (Implementation Support Guide)](./FA-017-IMPLEMENTATION-SUPPORT-GUIDE.md); [FA-005 (Local Project Entry Guide)](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md); [FA-002 (Method Spine)](./FA-002-METHOD-SPINE.md); [ADR-001](./adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md); [ADR-004](./adr/ADR-004-AGENT-INTERACTION-MODEL.md) |

---

## Purpose

*Informative.*

**Discovery** owns exactly one Runtime responsibility:

> Establishing sufficient understanding of the problem and relevant system
> context for the change's risk.

Nothing more. Nothing less.

Discovery **establishes** grounded understanding from available evidence. It
does not create understanding, invent intent, or own the Runtime Execution
Spine. It sits **outside** the Runtime Execution Spine and **feeds** it.

Catalogue membership is defined in
[ADR-001](./adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md). This guide does not
restate that ADR’s decision body.

Record outcomes with
[FA-024 (Discovery Outcome Template)](./FA-024-DISCOVERY-OUTCOME-TEMPLATE.md).

---

## Normative Framework — ownership

*Normative Framework.*

### Owns

1. **Establishing sufficient understanding** of the **problem and relevant
   system context** for the change’s risk, at the depth bound by the Effective
   Classification (or as required to unblock Stop / insufficient approved
   intent).
2. Production of a **Discovery Outcome** recording established understanding,
   remaining unknowns, consulted evidence/references, and explicit non-claims.

### MUST NOT

1. MUST NOT invent requirements, architecture, business intent, product intent,
   or governance intent.
2. MUST NOT create plans or produce a **Planning Outcome**
   ([FA-021](./FA-021-PLANNING-GUIDE.md)).
3. MUST NOT create bindings or produce a **Decision Support Outcome**
   ([FA-019](./FA-019-DECISION-SUPPORT-GUIDE.md)).
4. MUST NOT create implementation artefacts or claim Artefact Fitness
   ([FA-017](./FA-017-IMPLEMENTATION-SUPPORT-GUIDE.md)).
5. MUST NOT produce a **Review Outcome**, **Verification Outcome**, or
   **Approval Decision**.
6. MUST NOT change, replace, or invent an Effective Classification.
7. MUST NOT become business analysis methodology, product management,
   architecture design method, implementation guidance, Review, Planning, or a
   documentation repository.
8. MUST NOT claim “understanding is sufficient” by inventing missing facts —
   **Stop** instead ([FA-002](./FA-002-METHOD-SPINE.md)).

---

## Normative Framework — Discovery Outcome

*Normative Framework.*

A Discovery Outcome MUST make knowable, when Discovery is bound or required:

- **established understanding** of the problem and relevant system context;
- **remaining unknowns**;
- **consulted evidence / references**;
- **explicit non-claims** (not a plan, bind, artefact set, or Acceptance Chain
  outcome).

Outcome status vocabulary:

| Status | Meaning |
| ------ | ------- |
| `sufficient` | Understanding established at bound depth for dependent Runtime work to proceed without inventing intent or facts |
| `insufficient` | Understanding not yet enough; further Discovery and/or Human Authority required |
| `blocked` | Understanding cannot be established without Stop / further Human Authority (e.g. missing access or conflicting evidence) |

If understanding is **insufficient** or **blocked**:

1. Discovery Outcome reflects that status.
2. Runtime must **Stop**.
3. **Human Authority** resolves the uncertainty.
4. Work resumes only after clarified understanding and/or **reclassification**.

---

## Normative Framework — inputs and preconditions

*Normative Framework.*

1. An **Effective Classification** must exist, or Discovery is invoked because
   Stop / insufficient understanding requires it (then Classification should
   bind or reclassify Discovery explicitly — do not invent a binding set).
2. When Classification binds Discovery, depth and actor constraints must be
   knowable ([FA-009](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md)).
3. Entry context pointers and Policy must be resolvable
   ([FA-005](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md)).
4. Evidence sources must be consulted honestly; absence of evidence is an
   unknown, not a licence to invent.

Discovery is conditional — especially brownfield, modernisation, material work,
and high uncertainty — not endless analysis for justified non-material
low-risk work (ADR-001).

---

## Normative Framework — Runtime composition

*Normative Framework.*

Discovery is **outside** the Runtime Execution Spine and **feeds** it:

```text
Project Integration
        │
        ▼
Change Classification ──binds──► Discovery (when required)
        │                              │
        │◄──── Discovery Outcome may feed reclassification
        │                              │
        ├──────────────────────────────┼──► Decision Support
        ├──────────────────────────────┼──► Planning
        └──────────────────────────────┴──► Implementation Support
                                                    │
                                                    ▼
                                         Review ∥ Verification → Approval
```

### Feeds

Discovery Outcomes feed:

- [FA-009 (Change Classification)](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md) —
  may refine or reclassify when understanding changes materiality/uncertainty;
- [FA-019 (Decision Support)](./FA-019-DECISION-SUPPORT-GUIDE.md) — enough
  understanding to record binds without invention;
- [FA-021 (Planning)](./FA-021-PLANNING-GUIDE.md) — enough understanding to
  structure work without invention;
- [FA-017 (Implementation Support)](./FA-017-IMPLEMENTATION-SUPPORT-GUIDE.md) —
  approved intent grounded in established understanding; else Stop.

Review, Verification, and Approval do not consume Discovery Outcomes as
Acceptance Chain inputs.

Stop may interrupt any time and may demand Discovery before resume.

---

## Human and agent participation

*Normative Framework.*

| Action | Allowed |
| ------ | ------- |
| Search, read, summarise evidence | Agents MAY within Policy |
| Draft Discovery Outcomes / propose unknowns | Agents MAY |
| Accept material Discovery Outcome claims when required | Human (per Policy / depth) |
| Invent requirements, architecture, or intent | **Forbidden** — Stop |
| Treat Discovery as Approval or Implementation | **Forbidden** |

Discover project roots via Local Project Entry first
([FA-005](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md)). Cite the Effective
Classification when one is in force.

---

## Recommended — depth cues

*Recommended.*

Depth-band names follow [FA-009](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md) and
are not immutable Framework law.

| Depth band | Emphasis |
| ---------- | -------- |
| `minimal` | Short established facts + explicit unknowns for a narrow change |
| `standard` | Problem framing, relevant system context evidence, unknowns, refs |
| `elevated` | Broader system-context evidence, stronger unknown inventory, clearer reclassification triggers |

Not endless analysis. Proportionate to the change’s risk.

---

## Informative — examples

*Informative.*

- Brownfield behaviour change: establish how the current path works from code
  and runtime evidence; record unknowns; do not invent a new architecture bind.
- Unclear defect report: establish reproducible system context; if blocked on
  access → `blocked` + Stop.
- Justified trivial docs typo with clear scope: Discovery often unbound.

---

## Non-goals

*Informative.*

This guide is not a BA handbook, product-management method, architecture
design course, Implementation Support guide, Planning guide, or Acceptance
Chain guide.

---

## End of FA-023
