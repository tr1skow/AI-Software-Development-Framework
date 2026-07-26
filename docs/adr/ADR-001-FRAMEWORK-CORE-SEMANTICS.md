# ADR-001 — Framework Core Semantics

## Document Information

| Attribute | Value |
| --------- | ----- |
| ADR | ADR-001 |
| Title | Framework Core Semantics |
| Status | Accepted |
| Classification | Core Architecture |
| Product | AI Software Development Framework |
| Phase | Pre-authoring architecture |
| Related | [FA-002 (Method Spine)](../FA-002-METHOD-SPINE.md) (frozen); Stage 1A Framework Architecture (frozen); Stage 1A.1 Architecture Refinement (frozen); Stage 1B ADR Roadmap (frozen) |

---

## Status

Accepted

---

## Purpose

Decide the **semantic core** of the Framework: what a capability is, how
capabilities are catalogued for Framework v1, how Runtime governs capability
execution during a change, how Change Classification binds capabilities, and
how cross-cutting concerns such as traceability relate to Core.

This ADR enables interoperable Framework authoring. It does not author
guides, templates, pins, local project entry schemas, or agent instruction
packs.

---

## Context

The Framework Architecture is frozen as an eight-layer model with a
capability-oriented Framework Core, a Runtime Model concept, assets as
implementations of capabilities, and agent capabilities as views over Core
capabilities.

Stage 1B established that authoring cannot begin until four architectural
ADRs are decided. This is **ADR-01** in that sequence (document identity
**ADR-001**):

| Order | ADR | Title |
| ----- | --- | ----- |
| 1 | ADR-001 | Framework Core Semantics (this ADR) |
| 2 | ADR-002 | Baseline Pinning and Versioning |
| 3 | ADR-003 | Project Integration and Precedence |
| 4 | ADR-004 | Agent Interaction Model |

Without Core semantics, independent teams can claim Stage 1A compliance while
disagreeing on capability meaning, Runtime force, classification role, and
adoption-dimension binding.

Approved Engineering Review refinements (binding for this ADR):

- Capability Semantics and Baseline Capability Catalogue are distinct
- Runtime is the behavioural invocation model for capabilities on a change
- Waypoints are informative, not the Runtime definition
- Change Classification is the Capability Binding Mechanism
- Traceability is a cross-cutting concern, not a baseline capability

---

## Problem

The Framework must answer, at architectural level:

1. What is a Framework Capability?
2. How does the v1 baseline catalogue relate to capability semantics?
3. What is Runtime, normatively?
4. What does Change Classification decide?
5. How do delivery context and control posture bind to Core?
6. Where does reconstructibility / traceability live if not as a capability?

---

## Decision

Adopt the Core Semantics model below.

**Core principle:** Framework Core is the normative semantic system that
defines engineering capabilities, the behavioural rules for invoking them
during a change (Runtime), and the mechanism that binds which capabilities
apply (Change Classification). Documents and templates implement
capabilities; they are not the Core model.

### 1. Capability Semantics

A **Framework Capability** is a named engineering behaviour that the
Framework requires or conditionally requires for software changes.

Capability Semantics own:

- the meaning of “capability”
- composition and participation rules
- mandatory vs conditional binding *kinds*
- the meta-rule for extending semantics vs extending catalogue membership

Capability Semantics do **not** own:

- which concrete capabilities appear in Framework v1 (catalogue)
- file layouts, templates, or prompt text
- tool adapters or examples

**Rules:**

1. Capabilities are semantic, not files.
2. Implementations (guides, templates, checklists, agent instruction
   sections) realise capabilities.
3. Humans and agents may participate in capabilities; participation does not
   transfer Human Authority.
4. Amending Capability Semantics requires an ADR that changes this semantic
   model.
5. Adding or removing a catalogue member does not redefine what a capability
   is.

### 2. Baseline Capability Catalogue (v1)

The **Baseline Capability Catalogue** is the normative inventory of
first-class capabilities that Framework v1 must support for interoperability.

Catalogue membership is distinct from Capability Semantics. Future Framework
versions may amend the catalogue without redefining capability meaning,
unless semantic rules themselves must change.

#### 2.1 v1 baseline members

| Capability | Intent | Typical binding |
| ---------- | ------ | --------------- |
| **Change Classification** | Produce the capability binding set and depth requirements for a change | Always for Framework-governed work |
| **Discovery** | Understand problem and relevant system state enough for the change’s risk | Conditional (especially brownfield, modernisation, material work) |
| **Risk and Materiality Assessment** | Judge blast radius and materiality | With classification; informs Review and Approval |
| **Decision Support** | Make material binds explicit when required | Conditional on irreversible or material binds |
| **Planning** | Structure multi-step work before implementation | Conditional on binding/depth |
| **Implementation Support** | Produce reviewable change artefacts | When implementing |
| **Review** | Independent challenge proportionate to risk; fallback when independence is unavailable | Material changes per binding |
| **Verification** | Meet the applicable verification bar before acceptance is proposed | When proposing acceptance |
| **Approval** | Human Decision Owner final acceptance; automation may execute only within human-approved policy | Material acceptance |
| **Stop and Escalation** | Surface material unknowns and blocking assumptions; stop silent invention | Always available; triggers when conditions are met |
| **Agent Collaboration** | Rules for agent participation in other capabilities | When agents are used |

**Not a baseline catalogue capability:** Traceability (see §6).

**Not separate v1 baseline capabilities:** standalone Documentation,
Release Engineering handbook, or Incident Command (incident/maintenance is a
workflow composing catalogue capabilities).

#### 2.2 Catalogue amendment

- Adding a new first-class baseline capability requires a versioned
  Framework / catalogue decision (ADR-governed), not silent authoring.
- Adding a new *implementation* of an existing catalogue capability does not
  require amending Capability Semantics.
- Display synonyms in guides are allowed if semantics remain those of the
  catalogue member.

### 3. Runtime Model

The **Runtime Model** is the normative behavioural model governing how
Framework capabilities are **invoked, composed, skipped, interrupted, and
completed** during the lifecycle of a **change**.

#### 3.1 Unit of runtime

The **change** is the unit of Framework Runtime: a bounded unit of intended
engineering work subject to classification, capability binding, and
acceptance.

A change is not identical to a Git commit, an agent session, or an entire
project.

#### 3.2 Normative Runtime behaviour

Runtime SHALL define rules for:

| Verb | Meaning |
| ---- | ------- |
| **Invoke** | A bound capability is exercised for the change |
| **Compose** | Capabilities combine (for example Review and Verification before Approval) |
| **Skip** | An unbound or non-required capability is not exercised |
| **Interrupt** | Stop and Escalation may halt progress when material unknowns would force silent invention, or when precedence cannot be resolved |
| **Complete** | A capability’s required outcome for the change is satisfied at the bound depth |

Runtime invariants that always apply:

1. No silent invention of material requirements, architecture, or contracts.
2. No unchecked self-approval of material changes.
3. Humans remain accountable for material product, architecture, risk, merge,
   and release decisions.
4. Increasingly hard-to-reverse binds require sufficient uncertainty reduction,
   or an explicitly bounded exception under Progressive Commitment.

#### 3.3 Waypoints (informative only)

An ordered waypoint diagram (for example Classify → Discover → Decide →
Plan → Implement → Review → Verify → Approve) MAY be published as an
**informative** representation of common paths.

Waypoints are **not** the definition of Runtime and MUST NOT be read as a
mandatory linear lifecycle for every change.

#### 3.4 Runtime variants

Incident response, prototypes, and modernisation slices are **not** separate
runtimes. They compose the same Runtime under different classification
bindings and Progressive Commitment bounds.

### 4. Change Classification — Capability Binding Mechanism

**Change Classification** is the **capability binding mechanism** for a
change.

It determines, for that change:

- which catalogue capabilities bind (required or not)
- review depth
- verification depth
- approval requirements
- planning expectations
- Decision Support requirements
- whether stricter-than-project-default control posture applies

Proportionate Ceremony is the Method principle that classification serves.
Classification is not merely a vague “process size” label.

#### 4.1 Ownership boundary

- Classification **produces** the binding set and depth requirements.
- Other capabilities **own** their behaviour once bound.
- Classification does not redefine Review, Verification, or Approval
  semantics.

#### 4.2 Posture interaction

Project **control posture** sets defaults. Classification may tighten
requirements for one change. Loosening below Method Spine invariants is
invalid.

#### 4.3 Out of this ADR

Exact class nicknames, class counts, and checklist item text are authoring
under this architecture, not decisions of ADR-001.

### 5. Adoption dimension binding

Normative adoption **dimension kinds** for v1:

| Dimension kind | Role | Indicative values (labels authorable) |
| -------------- | ---- | ------------------------------------- |
| **Delivery context** | Relationship to system reality | greenfield · brownfield · modernisation |
| **Control posture** | Default assurance level | lightweight/solo · normal · high-risk / organisation-controlled |

Rules:

1. The two dimension kinds are independent and combinable.
2. Adoption Entry **intents** (start project, adopt existing, modernise,
   bounded change, review, introduce agents) are not dimension kinds.
3. Prototype / PoC is expressed via classification and Progressive Commitment
   bounds — not as a delivery context.
4. Incident / maintenance is a **workflow** composing capabilities — not a
   delivery context.
5. Local Project Entry records active dimension values (shape in ADR-003);
   this ADR only binds their meaning to Core.

### 6. Traceability (cross-cutting concern)

**Traceability** is a **cross-cutting architectural concern**, not a baseline
catalogue capability.

Material work MUST remain adequately reconstructible across decision,
change, and verification outcomes as required by the change’s classification
binding and depth.

Reconstructibility emerges from the exercise of Decision Support, Planning,
Implementation Support, Review, Verification, and Approval. It MUST NOT be
modelled as a peer Runtime capability or mandatory Traceability waypoint.

### 7. Composition rules

1. For Framework-governed work, Change Classification is invoked to produce
   the binding set used by Runtime.
2. Stop and Escalation may interrupt any capability invocation.
3. Approval consumes Review and Verification outcomes per binding; it does
   not replace them.
4. Agent Collaboration constrains participation in other capabilities; it
   does not replace Approval.
5. Decision Support records material binds; it does not itself approve merge
   or release.
6. Discovery feeds Classification and Decision Support; it is not endless
   analysis mandated for non-material low-risk work.

### 8. Relationship to Method Spine

This ADR operationalises Method Spine principles inside Framework Core. It
MUST NOT silently amend, weaken, or specialise the Method Spine. Conflicts
with the Method Spine are invalid.

### 9. Relationship to other layers

| Layer / concern | Relationship |
| --------------- | ------------ |
| Method Spine | Authorises Core; remains higher normative Method authority |
| Framework Core (this ADR) | Semantic system for capabilities, Runtime, classification, dimension binding |
| Project Assets | Implementations of catalogue capabilities; project work-product instances |
| Informative Layer | Examples and adapters depend on Core; Core MUST NOT depend on them |
| Agent Interaction (ADR-004) | Agents are views over catalogue capabilities under Runtime rules |
| Project Integration (ADR-003) | Records pin, dimensions, Decision Owner, policy pointers |
| Distribution / Pinning (ADR-002) | Delivers pinned baseline that includes Core semantics and required implementations |

---

## Alternatives Considered

### Capability catalogue shape

| Option | Description | Outcome |
| ------ | ----------- | ------- |
| A | Open-ended catalogue; authors add capabilities freely | Rejected — interoperability collapse |
| B | Closed fixed set forever | Rejected — blocks evolution |
| C | Closed v1 catalogue under stable Capability Semantics + amendment rules | **Accepted** |
| D | Capabilities equal document types | Rejected — document-centric regression |

### Semantics vs catalogue

| Option | Description | Outcome |
| ------ | ----------- | ------- |
| A | Single mixed “capability list is Core” | Rejected — conflates meaning and inventory |
| B | Explicit Capability Semantics distinct from Baseline Catalogue | **Accepted** |

### Runtime force

| Option | Description | Outcome |
| ------ | ----------- | ------- |
| A | Mandatory linear pipeline | Rejected — contradicts Method Spine |
| B | Purely explanatory diagram with no normative force | Rejected — insufficient for interoperability |
| C | Normative behavioural invocation model; waypoints informative | **Accepted** |
| D | Separate runtimes per adoption intent | Rejected — duplicates Core |

### Classification role

| Option | Description | Outcome |
| ------ | ----------- | ------- |
| A | Freeze named class enums in this ADR | Rejected — authoring concern |
| B | Projects invent scalers with no shared architecture | Rejected — breaks interoperability |
| C | Classification as capability binding mechanism; labels authorable | **Accepted** |
| D | Control posture replaces classification | Rejected — conflates defaults with per-change binding |

### Traceability

| Option | Description | Outcome |
| ------ | ----------- | ------- |
| A | Baseline catalogue capability | Rejected — false peer behaviour |
| B | Cross-cutting architectural concern | **Accepted** |

### Adoption dimensions

| Option | Description | Outcome |
| ------ | ----------- | ------- |
| A | Single combined profile enums | Rejected — combinatorial explosion |
| B | Two independent dimension kinds | **Accepted** |
| C | Third “AI intensity” dimension | Rejected — AI-optional Method; agent introduction is intent |
| D | Prototype or incident as delivery context | Rejected — classification/workflow placement |

---

## Responsibilities

### ADR-001 owns

- Capability Semantics
- Baseline Capability Catalogue (v1) membership and binding kinds
- Runtime Model as behavioural invocation rules
- Change Classification as Capability Binding Mechanism (architecture only)
- Adoption dimension binding rules
- Traceability as cross-cutting concern
- Core invariants and composition rules
- Extension / amendment meta-rules for semantics vs catalogue

### ADR-001 does not own

- Pin identity, distribution mechanisms, version domain mechanics (ADR-002)
- Local Project Entry shape, project precedence file procedures (ADR-003)
- Agent instruction packaging, discovery path details, multi-agent handoff
  formats (ADR-004)
- Class nicknames, counts, and checklist prose (authoring)
- Template fields, filenames, markdown layout (authoring)
- Verification item lists (authoring under Verification)
- Tool adapters, examples, reference implementations (informative)
- Agent Contract schema (future ADR, post-v1)
- Method Spine text amendments (Method amendment process)

---

## Consequences

### Positive

- Interoperable Core shared by humans, agents, and future assets
- Stable capability meaning while catalogue can evolve by version
- Runtime resists waterfall misreading
- Classification has a precise Core role
- Leaner catalogue without false Traceability capability

### Negative

- Authors must maintain semantics-vs-catalogue discipline
- Classification architecture still requires careful authoring of labels
  without smuggling new Core semantics

### Neutral

- Informative waypoint diagrams may still be published for onboarding
- Exact Framework version numbering remains ADR-002

---

## Invariants

1. Capability Semantics and Baseline Capability Catalogue are distinct.
2. Capabilities are behaviours; documents are implementations.
3. The change is the Runtime unit.
4. Runtime governs invoke, compose, skip, interrupt, and complete — not a
   mandatory linear lifecycle.
5. Waypoints are informative representations only.
6. Change Classification is the capability binding mechanism for a change.
7. Classification produces bindings and depths; other capabilities own their
   behaviour once bound.
8. Method Spine is not silently specialised by Core.
9. Approval of material change remains human-accountable under Human
   Authority.
10. Stop and Escalation interrupts silent invention of material requirements,
    architecture, or contracts.
11. Delivery context and control posture are the only normative adoption
    dimension kinds in v1.
12. Traceability is cross-cutting, not a baseline catalogue capability.
13. Material work must remain adequately reconstructible per classification
    binding and depth.
14. Core MUST NOT depend on adapters, examples, vendors, or a reference
    project.
15. Agent Collaboration never grants unchecked self-approval of material
    change.
16. ADR-001 does not define pin mechanisms, entry filenames, or agent pack
    formats.
17. New Capability Semantics require ADR amendment of this model; new
    catalogue members require versioned catalogue / Framework decision; new
    implementations of existing members do not redefine Core semantics.

---

## Out of Scope

- Distribution, pinning, and version domains (ADR-002)
- Local project entry architecture and precedence procedures (ADR-003)
- Agent packaging and cooperation protocols (ADR-004)
- Concrete change-class taxonomies and verification checklists
- Repository structure, README layout, and template contents
- Machine-readable Agent Contracts
- Any Fitness Challenge Platform or SafeHouse project content as norms

---

## Dependencies

| Dependency | Relationship |
| ---------- | ------------ |
| Method Spine (frozen) | Authorises and constrains Core |
| Stage 1A / 1A.1 Architecture (frozen) | Eight-layer model; capability-oriented Core; Runtime concept; assets as implementations |
| Stage 1B ADR Roadmap (frozen) | This is the first pre-authoring ADR |
| Approved ADR-001 Engineering Review + refinement | Decision basis |

---

## Future ADR Dependencies

| ADR | Expectation |
| --- | ----------- |
| **ADR-002** | Pin and version baselines that carry Core semantics and required capability implementations; minimum pin set derived from this catalogue |
| **ADR-003** | Local Project Entry records dimensions, Decision Owner, and policy pointers consistent with this binding model |
| **ADR-004** | Agents participate as views over catalogue capabilities under Runtime rules; no self-approval of material change |
| Authoring | Implementations of catalogue capabilities; informative waypoints; class labels under classification architecture |

---

## Revisit When

- A proposed behaviour cannot fit Capability Semantics without ambiguity
- Framework evolution requires catalogue members that break composition rules
- Runtime behavioural verbs prove insufficient for a documented class of work
- A third adoption dimension kind is evidenced as necessary for
  interoperability (not merely convenience)

---

## End of ADR-001
