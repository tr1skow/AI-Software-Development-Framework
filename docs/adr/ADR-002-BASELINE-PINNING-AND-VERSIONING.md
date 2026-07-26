# ADR-002 — Baseline Pinning and Versioning

## Document Information

| Attribute | Value |
| --------- | ----- |
| ADR | ADR-002 |
| Title | Baseline Pinning and Versioning |
| Status | Accepted |
| Classification | Core Architecture |
| Product | AI Software Development Framework |
| Phase | Pre-authoring architecture |
| Related | [ADR-001](./ADR-001-FRAMEWORK-CORE-SEMANTICS.md); [FA-002 (Method Spine)](../FA-002-METHOD-SPINE.md) (frozen); Stage 1A Framework Architecture (frozen); Stage 1A.1 Architecture Refinement (frozen); Stage 1B ADR Roadmap (frozen) |

---

## Status

Accepted

---

## Purpose

Decide how consuming projects depend on a **known, immutable Framework
Baseline** so Framework behaviour is deterministic and reproducible over
time, including offline and without live upstream access.

This ADR defines Framework Identity vs Framework Baseline, pinning
semantics, version domains, compatibility and upgrade principles,
baseline-relative Runtime consequences, distribution mechanism *classes*,
and minimum pin-content *kinds*.

It does not choose Git mechanisms, numbering syntax, file manifests, Local
Project Entry fields, Agent Pack structure, or CLI/package tooling.

---

## Context

ADR-001 defines Framework Core Semantics: Capability Semantics, Baseline
Capability Catalogue, Runtime as behavioural invocation model, Change
Classification as capability binding mechanism, and Traceability as a
cross-cutting concern.

The Framework is importable into arbitrary software projects. Without a
shared pinning and versioning architecture, projects cannot reproduce
Framework behaviour, cannot work offline safely, and may silently track
upstream change.

Approved Stage 1B sequence:

| Order | ADR | Title |
| ----- | --- | ----- |
| 1 | ADR-001 | Framework Core Semantics (Accepted) |
| 2 | ADR-002 | Baseline Pinning and Versioning (this ADR) |
| 3 | ADR-003 | Project Integration and Precedence |
| 4 | ADR-004 | Agent Interaction Model |

Approved Engineering Review refinements (binding for this ADR):

- Framework Identity and Framework Baseline are distinct
- Projects pin a Framework Baseline identity, never Framework Identity alone
- Framework Identity is not a version domain and not a valid sole dependency
- A Framework Baseline declares the accepted Architecture ADR Set governing
  that Baseline
- A Baseline is not semantically composed of ADR documents
- Materialised distributions may include ADR documents as offline carriers
  of declared architectural law
- Version domains, compatibility classes, upgrade principles, and
  baseline-relative Runtime remain as approved in the Engineering Review

---

## Problem

The architecture must answer:

1. What is a Framework Baseline, semantically?
2. How does Framework Identity differ from a Baseline?
3. What do consuming projects pin?
4. Which version domains exist, and what does each own?
5. How does a Baseline declare a compatible domain tuple and governing ADR set?
6. How do compatibility, deprecation, and upgrades work?
7. Does Runtime behaviour depend on Baseline selection?
8. What must a pin make offline-resolvable?

---

## Decision

Adopt the Baseline Pinning and Versioning model below.

**Core principle:** Consuming projects depend on an immutable **Framework
Baseline**. The enduring **Framework Identity** may publish many Baselines
over time. Runtime behaviour for a project is **baseline-relative** and MUST
NOT depend on unpinned remote Framework content.

### 1. Framework Identity

**Framework Identity** is the enduring Framework *product* — the named
methodology/framework that evolves over time.

Framework Identity:

- provides product continuity across published Baselines
- MAY be referenced for discovery and documentation
- is **not** a version domain
- is **not** a valid sole dependency or pin target for a consuming project

Pinning Framework Identity alone is invalid.

### 2. Framework Baseline

A **Framework Baseline** is an immutable, uniquely identifiable set of
normative Framework meaning and the normative capability implementations
required for interoperable use, published under a Framework Identity and
selected by a consuming project as its governing Framework behaviour for as
long as that pin remains in force.

A Baseline **is**:

- the semantic dependency unit projects pin
- reproducible
- offline-resolvable once obtained
- the authority for which Core semantics, catalogue, governing ADRs, and
  normative implementations apply

A Baseline **is not**:

- a Git commit, tag, branch, or remote URL (those may *materialise* a Baseline)
- a floating pointer to upstream `main`
- Framework Identity itself
- project policy, product application code, or adapters as normative Core
- semantically a bundle or composition of ADR markdown files

A Framework Identity MAY publish multiple immutable Framework Baselines over
time. Each published Baseline’s normative meaning is immutable. Evolution
occurs by publishing new Baselines, not by mutating published ones in place.

### 3. Pinning semantics

**Primary pin target:** Framework Baseline identity.

The consuming project’s pin record (shape in ADR-003) MUST:

1. Make the Baseline identity knowable
2. Resolve to local/offline content for that identity
3. Prevent silent retargeting to newer upstream content

Projects MUST NOT freely mix incompatible version-domain values under one
claimed Baseline. Domain versions are **declared by** the Baseline as a
compatible tuple; they are not independently selected as the project’s
primary pin set.

**Adapters**, if used, may be pinned separately as optional informative
adjuncts. Adapter pins MUST NOT redefine Baseline normative meaning.

### 4. Version domains

Each version domain owns **exactly one concern**. Avoid a single generic
version for all concerns.

| Domain | Owns | Does not own |
| ------ | ---- | ------------ |
| **Method Spine Version** | Method principle set identity | Framework practices, catalogue membership, adapters |
| **Capability Semantics Version** | Meaning of capability, composition meta-rules, Runtime semantic law (ADR-001 lineage) | Which capabilities appear in a catalogue |
| **Capability Catalogue Version** | Catalogue membership and binding-kind defaults | Redefinition of capability meaning |
| **Framework Normative Content Version** | Normative implementations realising catalogue capabilities | Informative examples/adapters; project policy |
| **Architecture ADR Set Identity** | Which Accepted ADRs **govern** this Baseline | ADR files as compositional Baseline parts; template prose |
| **Adapter Version** | Tool-specific informative mapping | Normative Core / Baseline meaning |
| **Project Pin Record** | Which Baseline (and optional adapter pins) the project has selected | Authority to invent Baseline definition |

**Framework Identity is not a version domain.**

**Framework Baseline identity** is the consumer-facing handle that binds a
**compatible tuple** of the normative domains above (Method Spine,
Capability Semantics, Capability Catalogue, Framework Normative Content,
Architecture ADR Set). Adapter Version and Project Pin Record are not part
of Baseline *definition*; adapters are optional adjuncts; the pin record is
the project’s pointer.

Numbering syntax (SemVer, calver, opaque labels) is out of scope of this
ADR’s decision payload; domains and rules are in scope.

### 5. Baseline declaration

A Framework Baseline MUST declare:

1. A **compatible domain tuple** for the normative domains listed in §4
   (excluding Adapter Version and Project Pin Record)
2. The **accepted Architecture ADR Set governing that Baseline**

#### 5.1 Architecture ADR Set — governance, not composition

A Framework Baseline **declares** the accepted Architecture ADR Set
**governing** that Baseline.

The Baseline is **not** semantically composed of ADR documents. ADR
documents are decisions that identify architectural law. Materialised
Baseline distributions MAY include ADR documents as **offline carriers** of
that declared governing law. Including those files is packaging evidence,
not ontological composition.

### 6. Compatibility and migration

| Class | Meaning |
| ----- | ------- |
| **Compatible additive** | New optional implementations, informative content, or non-normative clarification; existing pins remain valid and behaviour-equivalent for previously governed work |
| **Catalogue additive** | New catalogue membership or optional binding; requires catalogue version change; existing Baselines unchanged until upgrade |
| **Deprecation** | Normative element discouraged but still defined for Baselines that include it; migration guidance SHOULD be provided; removal only via later breaking Baseline |
| **Breaking** | Changes Capability Semantics, removes or redefines catalogue meaning, changes Runtime invariants, or changes Method Spine; requires a new Baseline (or new declared domain versions composing one) and migration guidance |
| **Forward compatibility** | Older Baselines NEED NOT understand newer Baselines |
| **Backward compatibility (project view)** | A project pinned to Baseline B remains governed by B until it explicitly upgrades |

Incompatible evolution at the product level is allowed only by publishing a
**new Baseline** (or new domain versions composing a new Baseline)—never by
mutating a published Baseline’s meaning in place.

### 7. Upgrade philosophy

1. **Reproducibility first** — the pin remains until the project explicitly
   upgrades.
2. **Explicit upgrade** — a human/project-controlled act. Automation and
   agents MUST NOT silently retarget upstream.
3. **Baseline replacement** — upgrade means selecting a new Baseline
   identity and obtaining its content for offline resolution.
4. **Migration guidance** — required for breaking changes and for
   deprecations that affect bound capabilities.
5. **No false claims** — a project MUST NOT claim an old Baseline identity
   while applying newer Core semantics from another Baseline.
6. **Same rules for this repository** — the Framework product repository
   pins Baselines as consumers do (entry mechanics in ADR-003).

Upgrade is not: auto-tracking `main`; floating remotes; “always latest
package” without an explicit Baseline identity.

### 8. Baseline-relative Runtime

Runtime behaviour for a consuming project **depends on the selected
Framework Baseline**. That dependence is required for reproducibility.

| Rule | Requirement |
| ---- | ----------- |
| Baseline-relative behaviour | Classification bindings, catalogue membership, normative rules, and Capability Semantics in force are those of the pinned Baseline |
| No live upstream Runtime | Runtime MUST NOT depend on unpinned remote Framework content |
| ADR-001 continuity | Within a pin, Runtime verbs and capability meaning follow that Baseline’s declared Capability Semantics version (ADR-001 lineage) |
| Cross-project difference | Two projects with different pins MAY behave differently under the Framework; that is expected |

“Framework Runtime” is not a global shared service. It is behavioural
governance evaluated under the project’s pin.

### 9. Distribution mechanism classes

Any supported distribution mechanism MUST be able to materialise a Framework
Baseline such that:

- Baseline identity is knowable
- Content is pin-able and offline-resolvable
- Silent upstream drift is prevented
- Upgrades are explicit
- Normative content is distinguishable from informative content

**Allowed mechanism classes** (non-exclusive; not an exclusive choice):

- Vendored snapshot
- Release archive
- Git submodule
- Git subtree
- Hybrid (normative content local; informative content optionally remote)

CLI or package installers MAY exist later if they emit a Baseline identity
and satisfy the same requirements. This ADR does not select an exclusive
mechanism or implement tooling.

### 10. Minimum pin-content kinds

A pin is architecturally incomplete unless the project can offline-resolve
at least these **kinds** of content for the pinned Baseline:

1. Baseline identity metadata, including the declared domain tuple and
   governing Architecture ADR Set identity
2. Method Spine text for the declared Method Spine Version
3. Capability Semantics and Capability Catalogue for the declared versions
   (ADR-001 lineage)
4. Normative implementations required to exercise the catalogue for
   Framework-governed work
5. When agents are used: normative Agent Collaboration rules marked
   mandatory for agent use (detail in ADR-004)

Informative examples and adapters MAY be omitted from the minimum pin.
Exact file manifests are out of scope.

---

## Alternatives Considered

| Option | Description | Outcome |
| ------ | ----------- | ------- |
| A | No Baseline concept; pin Git SHA only | Rejected as sole model — mechanism without semantics |
| B | Float upstream latest | Rejected — non-reproducible |
| C | Project freely mixes Method/Catalogue/Framework domain versions | Rejected — incompatible tuples |
| D | Single monolithic version number for all concerns | Rejected — collapses domain ownership |
| E | Framework Baseline identity declaring a compatible domain tuple; projects pin Baseline | **Accepted** |
| F | Framework Identity as pin target or version domain | Rejected — refinement pass |
| G | Baseline semantically composed of ADR documents | Rejected — ADRs govern via declaration |
| H | Runtime identical regardless of pin | Rejected — denies reproducible evolution |
| I | Runtime follows live upstream | Rejected — offline/pin violation |
| J | Adapters part of Baseline normative identity | Rejected — Tool Neutrality / Examples Are Not Norms |
| K | Mandatory single distribution technology | Rejected — Tool Neutrality |

---

## Responsibilities

### ADR-002 owns

- Framework Identity vs Framework Baseline distinction
- Framework Baseline semantics and immutability
- Pinning semantics (Baseline as pin target)
- Version domain set and one-concern ownership
- Baseline declaration of compatible domain tuple
- Declaration of governing Architecture ADR Set
- Compatibility classes and migration philosophy
- Explicit project-controlled upgrade principles
- Baseline-relative Runtime consequences
- Distribution mechanism *class* requirements
- Minimum pin-content *kinds*
- Related invariants

### ADR-002 does not own

- Capability Semantics, catalogue membership list, Runtime verbs (ADR-001)
- Local Project Entry shape, field names, precedence procedures (ADR-003)
- Agent instruction packaging, discovery path layout, handoff formats
  (ADR-004)
- SemVer or other numbering syntax
- Exclusive Git/archive/package mechanism
- Final file manifests
- Template contents, README structure, examples
- Adapter contents
- Organisational legal/compliance versioning schemes

---

## Consequences

### Positive

- Reproducible, offline-capable Framework dependency
- Clear product vs pin-target distinction
- Evolving Framework without mutating historical governance
- Stable contract for ADR-003 pin records and ADR-004 agent authority paths

### Negative

- Discipline required so authors never mutate a published Baseline in place
- Multiple domain versions need careful Baseline packaging

### Neutral

- Mechanism choice remains open within allowed classes
- Numbering syntax remains a later convention

---

## Invariants

1. A published Framework Baseline’s normative meaning is immutable.
2. Framework Identity is the enduring product; it is not a version domain
   and not a valid sole pin target.
3. Consuming projects pin a Framework Baseline identity.
4. A Framework Identity MAY publish multiple Baselines; projects select one
   Baseline pin at a time as governing.
5. Pin resolution MUST be possible offline once Baseline content is obtained.
6. Upstream changes MUST NOT silently alter a pinned Baseline.
7. Upgrades are explicit project acts.
8. Each version domain owns exactly one concern.
9. Projects MUST NOT mix incompatible domain versions under one claimed
   Baseline.
10. A Baseline declares a compatible normative domain tuple.
11. A Baseline declares the accepted Architecture ADR Set governing that
    Baseline; it is not semantically composed of ADR documents.
12. Materialised distributions MAY carry ADR documents as offline evidence of
    declared architectural law without changing Baseline ontology.
13. Capability Semantics version changes are distinct from Capability
    Catalogue version changes (ADR-001).
14. Adapters NEVER redefine Baseline normative meaning.
15. Runtime behaviour for a project is baseline-relative and MUST NOT depend
    on unpinned remote Framework content.
16. Breaking changes require a new Baseline (or new declared domain versions
    composing one) plus migration guidance.
17. Older project pins remain valid descriptions of past governance after
    newer Baselines exist.
18. ADR-002 does not redefine ADR-001 capability or Runtime verb semantics.
19. Minimum pin content MUST include the kinds listed in §10; informative
    content MAY be omitted.
20. ADR-002 does not select exclusive distribution technology, numbering
    syntax, entry fields, or agent pack structure.

---

## Risks

| Risk | Mitigation |
| ---- | ---------- |
| Baseline identity treated as “just a Git tag” | Keep semantic Baseline primary; mechanisms secondary |
| Too many domains confuse adopters | Daily consumer concept is Baseline pin; domains are declaration/evolution tools |
| Catalogue vs Normative Content confusion | Catalogue = membership; Normative Content = implementations |
| In-place mutation under same Baseline id | Invariants 1 and 6; release discipline in pinning guidance (authoring) |
| Agents reading live upstream | ADR-004 must require pinned local authority paths |
| Identity used as floating latest | Invariant 2 — Identity alone is not a pin |

---

## Deferred Decisions

| ID | Item | Defer to |
| -- | ---- | -------- |
| D-01 | Exact Baseline identity string format | Authoring / convention under this ADR |
| D-02 | Exclusive distribution technology | Not chosen; classes only |
| D-03 | Exact minimum file manifest | Authoring after ADR-004 agent must-haves known |
| D-04 | SemVer or other numbering policy details | Optional later convention |
| D-05 | Local Project Entry pin fields | ADR-003 |
| D-06 | Dual-run / side-by-side Baseline tooling | Future; not required for semantics |
| D-07 | Hosting/registry of published Baselines | Distribution authoring |
| D-08 | Agent pack structure | ADR-004 |

---

## Out of Scope

- Specific Git submodule, subtree, vendor, or archive procedures as exclusive
  law
- SemVer / calver / hash label syntax choice
- Final repository file layout and manifests
- Local Project Entry schema (ADR-003)
- Agent Pack structure (ADR-004)
- CLI or package implementation
- Framework asset/template authoring
- Any Fitness Challenge Platform or SafeHouse content as norms

---

## Dependencies

| Dependency | Relationship |
| ---------- | ------------ |
| ADR-001 (Accepted) | Defines Core semantics, catalogue distinction, Runtime verbs; this ADR pins and versions Baselines that carry that law |
| Stage 1A / 1A.1 (frozen) | Import/pin layer; Tool Neutrality; offline requirement |
| Stage 1B roadmap (frozen) | This is the second pre-authoring ADR |
| Approved ADR-002 Engineering Review + refinement | Decision basis |

---

## Future ADR Dependencies

| ADR | Expectation |
| --- | ----------- |
| **ADR-003** | Local Project Entry records Baseline pin identity (and optional adapter pins); precedence must not float upstream |
| **ADR-004** | Agents treat pinned local Baseline content as authoritative; discovery MUST NOT depend on unpinned remote Framework content |
| Authoring | Pinning guide; Baseline publication discipline; mechanism how-tos within allowed classes |

---

## Revisit When

- A distribution mechanism class cannot satisfy immutability or offline
  resolution
- Baseline declaration needs an additional normative domain for
  interoperability (not mere convenience)
- Evidence shows Identity-alone pinning is being used to bypass Baseline
  immutability despite invariants

---

## End of ADR-002
