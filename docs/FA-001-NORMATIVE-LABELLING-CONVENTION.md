# FA-001 — Normative Labelling Convention

| Attribute | Value |
| --------- | ----- |
| Asset ID | FA-001 |
| Title | Normative Labelling Convention |
| Kind | labelling-convention |
| Classification | Normative Framework |
| Lifecycle Status | Accepted |
| Phase | C1 Framework Core Assets (E2) |
| Related | [FA-002 (Method Spine)](./FA-002-METHOD-SPINE.md); [FA-003 (Framework Overview)](./FA-003-FRAMEWORK-OVERVIEW.md); [ADR-001](./adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md); [ADR-002](./adr/ADR-002-BASELINE-PINNING-AND-VERSIONING.md); [ADR-003](./adr/ADR-003-PROJECT-INTEGRATION-AND-PRECEDENCE.md); [ADR-004](./adr/ADR-004-AGENT-INTERACTION-MODEL.md); [FAIS](./governance/FRAMEWORK-ASSET-IDENTIFICATION-STANDARD.md) |

---

## Purpose

This convention defines how Framework documents and sections declare their
**force**: whether text is Method law, Framework law, recommended practice,
informative guidance, or reference material.

Every Framework asset authored from E2 onward SHOULD apply these labels so
humans and agents can tell what binds and what merely helps.

---

## Labels

| Label | Force |
| ----- | ----- |
| **Normative Method** | Method Spine law. Binding Method principles for this Framework Identity. |
| **Normative Framework** | Framework Core / Baseline normative guidance. Binding for Framework-governed work under a pinned Baseline, subject to allowed Project Policy specialisation (see ADR-003). |
| **Recommended** | Default practice. Projects MAY specialise within Method and Core invariants. |
| **Informative** | Guidance, narrative, examples, adapters, and orientation. Never outranks Normative Method or Normative Framework. |
| **Reference** | Citable frozen decisions or identity metadata (for example Accepted ADRs, Baseline identity declarations). Authority is the referenced artefact. |

---

## Application rules

1. Documents SHOULD declare an overall label near the top (for example in a
   header table as Classification).
2. Sections MAY carry a different label than the document when force differs
   (for example an Informative gloss inside a Normative Method document).
3. If a section is unlabelled inside a labelled document, readers MAY treat it
   as sharing the document’s overall label — authors SHOULD label mixed-force
   sections explicitly.
4. **Examples**, **adapters**, **tutorials**, and **reference implementations**
   are **Informative** unless promoted through an explicit Baseline publication
   process.
5. **Mislabeling is a defect.** Normative claims must not be marked Informative
   to avoid review, and Informative examples must not be marked Normative.
6. Where labelled Framework text conflicts with an Accepted ADR on an
   architectural decision, the **Accepted ADR wins**; the Framework document
   must be corrected.
7. Where labelled text conflicts with **Normative Method**, Method wins.
8. The repository **README** is a human landing page and remains
   **non-authoritative**. Treat README orientation as **Informative** unless a
   future Baseline explicitly states otherwise.
9. **Project Policy** is normative *within a consuming project* (ADR-003). It
   is not a Framework document label. Framework assets must not pretend to be
   a project’s Local Project Entry or Project Policy.
10. Framework Assets (`FA-###`) also expose Asset ID, Title, Kind, Classification,
    and Lifecycle Status per the repository
    [Framework Asset Identification Standard](./governance/FRAMEWORK-ASSET-IDENTIFICATION-STANDARD.md)
    (governance, not a Framework Asset).

---

## Suggested markup

**Recommended** (reversible authoring choice): state Classification in the
document header table, and prefix mixed sections with a short line such as
`*Informative.*` or `*Normative Framework.*`.

Exact Markdown syntax may evolve; the **meanings** in this document are
Normative Framework.

---

## Non-goals

This convention does not define prose style, template schemas, Agent Pack
format, or repository folder layout beyond what labels require for clarity.

---

## End of FA-001
