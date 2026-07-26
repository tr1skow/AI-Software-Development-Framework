# ADR-003 — Project Integration and Precedence

## Document Information

| Attribute | Value |
| --------- | ----- |
| ADR | ADR-003 |
| Title | Project Integration and Precedence |
| Status | Accepted |
| Classification | Core Architecture |
| Product | AI Software Development Framework |
| Phase | Pre-authoring architecture |
| Related | [ADR-001](./ADR-001-FRAMEWORK-CORE-SEMANTICS.md); [ADR-002](./ADR-002-BASELINE-PINNING-AND-VERSIONING.md); [FA-002 (Method Spine)](../FA-002-METHOD-SPINE.md) (frozen); Stage 1A Framework Architecture (frozen); Stage 1A.1 Architecture Refinement (frozen); Stage 1B ADR Roadmap (frozen) |

---

## Status

Accepted

---

## Purpose

Decide how a consuming software project establishes one authoritative,
discoverable, and tool-neutral integration with the Framework: binding the
pinned Framework Baseline, project policy, project context, adoption
dimensions, Decision Owner, review and automation authority, local paths,
and shared precedence — without duplicating the Framework, silently
modifying the Method Spine, depending on one AI tool, allowing invented
precedence, treating README as the sole machine-facing surface, or
requiring live upstream Framework access.

This ADR does not choose Local Project Entry filename, schema, field names,
Markdown vs structured format, Agent Pack packaging, repository layout, or
tooling.

---

## Context

ADR-001 defines Framework Core Semantics. ADR-002 defines Framework Identity,
Framework Baseline, pinning, version domains, and baseline-relative Runtime.

Stage 1A places Project Integration as the layer that binds a consuming
project to the Framework. Without a shared integration and precedence
architecture, projects invent divergent roots, agents invent conflict
resolution, and local rules either duplicate the Framework or silently
weaken Method and Core invariants.

Approved Stage 1B sequence:

| Order | ADR | Title |
| ----- | --- | ----- |
| 1 | ADR-001 | Framework Core Semantics (Accepted) |
| 2 | ADR-002 | Baseline Pinning and Versioning (Accepted) |
| 3 | ADR-003 | Project Integration and Precedence (this ADR) |
| 4 | ADR-004 | Agent Interaction Model |

---

## Problem

The architecture must answer:

1. What is Project Integration?
2. What is the Local Project Entry’s role relative to that concern?
3. Which declaration categories must be knowable?
4. What precedence and conflict rules apply?
5. What may a project specialise, and what is an invalid contradiction?
6. What is Project Policy?
7. How do humans and agents discover applicable instructions?
8. How does the project relate to the pinned Baseline?
9. When must work stop or escalate?

---

## Decision

Adopt the Project Integration and Precedence model below.

**Core principle:** **Project Integration** is the broader architectural
concern for binding a consuming project to a pinned Framework Baseline.
The **Local Project Entry** is the **canonical gateway** into that
architecture — one thin, tool-neutral root that records the pin, points to
project policy and context, and makes the shared precedence model
knowable.

### 1. Project Integration

**Project Integration** is the architectural concern that defines how a
consuming software project establishes an authoritative bind between itself
and a pinned Framework Baseline, including local policy, context discovery,
precedence, specialisation boundaries, and stop conditions.

| Concept | Meaning |
| ------- | ------- |
| **Framework Project Integration architecture** | Normative Framework rules (this ADR) for how integration must work |
| **Project-local integration instance** | The concrete Local Project Entry and linked project artefacts in a consuming repository |
| **Project Policy** | Project-normative specialisations and local rules |
| **Project work products** | Change artefacts produced under Runtime (plans, decisions, reviews, code, verification evidence) |
| **Framework Baseline content** | Immutable pinned Framework meaning and normative implementations (ADR-002) |

The integration gateway **owns** knowability of pin, dimensions, Decision
Owner, pointers, precedence applicability, and stop-relevant facts.

It **references** Baseline content, Project Policy, context locations,
review/automation policies, agent instructions, and optional adapters.

It does **not** define Baseline meaning, Capability Semantics, Runtime
verbs, or Method Spine text.

### 2. Local Project Entry — canonical gateway

The **Local Project Entry** is the single authoritative, tool-neutral
**project-side root** and the **canonical gateway** into Project
Integration for humans and agents.

#### 2.1 Architecture direction

Adopt a **hybrid** shape:

- one small **human- and agent-readable** entry document
- plus a **compact canonical path list** (inline section or linked
  manifest)
- referencing local policy and project context
- **without duplicating** the Framework

Rejected as sole architecture: separate human and agent entry roots;
generated-only indexes as the authoritative root; README-only agent
authority; search without a declared root; embedding all Project Policy
inside the Entry so it becomes a Framework duplicate.

Filename, syntax, and schema remain out of scope.

#### 2.2 Thin-entry rule

The Local Project Entry MUST remain thin. Policy bodies, long architecture
narratives, and Framework text belong in referenced locations — not pasted
into the Entry as a second Framework.

### 3. Required declaration categories

Field names are not decided here. The project-local integration instance
MUST make the following **categories** knowable:

| Category | Kind |
| -------- | ---- |
| Framework Identity | Mandatory (knowable; not the pin — ADR-002) |
| Pinned Framework Baseline identity | **Mandatory** |
| Local project identity | Mandatory |
| Active delivery context | Mandatory |
| Default control posture | Mandatory |
| Human Decision Owner | **Mandatory** for Framework-governed material work |
| Product-context location | Mandatory pointer |
| Architecture-context location | Mandatory pointer |
| Testing/verification-context location | Mandatory pointer |
| Project Policy location | **Mandatory** pointer |
| Review policy location | Conditionally mandatory when Review can bind |
| Fallback-review policy location | Conditionally mandatory when independence may be unavailable |
| Automation authority / policy location | Conditionally mandatory when agents or automation execute under policy |
| Agent instruction location | Conditionally mandatory when agents are used |
| Local precedence / override declarations | Mandatory (explicit specialisations or explicit “defaults apply”) |
| Optional adapter pins | Optional |
| Project Integration identity or change-history | Mandatory *concept* — local normative surface evolution must be attributable; syntax deferred |

**Derived via pin (not duplicated as Entry bodies):** Capability Semantics,
Capability Catalogue, Runtime verb definitions, and other Baseline
normative meaning.

**Absent-pointer rule:** A mandatory pointer may declare explicit absence
only if Project Policy states how Discovery and Stop handle that absence.
Silently missing paths required for a bound change → Stop/Escalation.

### 4. Precedence model

Humans and agents use the **same** precedence model.

#### 4.1 Layers (highest first)

| Priority | Layer |
| -------- | ----- |
| 1 | Applicable **legal** constraints |
| 2 | Applicable **organisational** constraints / mandated organisational policy |
| 3 | Approved **project-specific policy** and **project architecture** (project-normative) |
| 4 | Pinned Framework **normative** Method and Framework guidance (Baseline) |
| 5 | Framework **recommended** practices (pinned Baseline) |
| 6 | Tool **adapters** |
| 7 | **Examples** and reference implementations |

Legal and organisational constraints are separate layers. Within layer 3, if
project policy and project architecture conflict without a declared
resolution, treat as unresolved local conflict → Stop/Escalation.

#### 4.2 Conflict rules

| Conflict | Resolution |
| -------- | ---------- |
| Project policy vs Framework default or recommended practice | Project policy wins if Method Spine, ADR-001, and ADR-002 invariants hold and the specialisation is explicit |
| Project policy vs Framework normative rule | Specialisation only where Framework allows; otherwise invalid or Baseline-compatible interpretation — not silent ignore |
| Project policy vs Method Spine | **Invalid** → Stop/Escalation |
| Project architecture vs Framework example | Project architecture wins |
| Adapter vs Framework Core or Project Policy | Core and Project Policy win |
| Local agent instruction vs pinned Agent Interaction rules | Pinned Agent Interaction rules and Project Policy win |
| Organisational policy vs project policy | Organisational layer wins when applicable |
| Two local project documents conflict | Stop/Escalation — unresolved local precedence |
| Agent cannot determine precedence | **Stop/Escalation** — no invented resolution |

### 5. Override and specialisation model

| Term | Meaning |
| ---- | ------- |
| **Specialisation** | Explicit project narrowing or interpretation of an allowed Framework default within invariants |
| **Override** | Project rule that displaces a Framework default where specialisation is permitted |
| **Exception** | Time-bounded explicit deviation with scope, intended lifetime, and path to reassessment |
| **Invalid contradiction** | Attempt to weaken or replace Method Spine, ADR-001 Capability Semantics or Runtime invariants, ADR-002 Baseline identity or immutability, baseline-relative Runtime, Human Authority, prohibition on unchecked material self-approval, or prohibition on silent invention |
| **Temporary project decision** | Exception-like; must be explicit; must not rewrite Baseline identity |
| **Local default** | Project Policy default applied until Change Classification escalates |
| **Change-specific escalation** | Classification tightens requirements for one change beyond project default (ADR-001) |

#### 5.1 Permitted project actions

- Choose **stricter** controls than Framework defaults
- Choose **lighter** controls only within Method and Core invariants and
  Framework-allowed specialisation
- Rename change-class labels if binding semantics are preserved (ADR-001)
- Define local materiality thresholds
- Define local review fallback policy
- Define automation permissions under Human Authority
- Omit optional capability implementations not required by minimum pin
  kinds or bound work
- Substitute a human for an agent-held capability participation
- Use tool adapters (informative; cannot outrank Core or Project Policy)
- Carry project policy across an explicit Baseline upgrade when compatible

#### 5.2 Forbidden

- Silently changing protected Method Spine or Core/Baseline invariants
- Claiming Baseline A while applying Baseline B’s normative Core semantics
  (ADR-002)
- Adopting newer Core semantics while retaining an older Baseline pin claim
- Weakening frozen Method invariants under the guise of “lightweight” policy

### 6. Project Policy boundary

**Project Policy** is the project-normative rule set that specialises
Framework defaults and states local review, automation, materiality, and
related controls for this project.

| Owns | Does not own |
| ---- | ------------ |
| Local thresholds, fallback review, automation allow-list, class-label mapping, posture defaults, explicit specialisations and exceptions | Method Spine, Capability Semantics, Baseline definition, Framework Normative Content identity |
| Evolution of local rules under project governance | Authority to mutate pinned Baseline content |

Project Policy:

- is linked from the Local Project Entry
- is normative **within the project** for Framework-governed work
- is subordinate to applicable legal and organisational layers
- may escalate per change via Change Classification
- may evolve **independently** of Baseline identity
- MUST remain distinguishable from pinned Framework content

No Project Policy template is defined here.

### 7. Discoverability — project-side contract

ADR-004 consumes this contract; ADR-003 does not define agent packaging.

1. One canonical Local Project Entry per consuming project is the
   authoritative project-side root and gateway into Project Integration.
2. Authority is local and offline via the Baseline pin and Entry pointers.
3. The canonical path list makes normative references discoverable.
4. Multiple conflicting roots are forbidden; tool-specific files are not
   higher law than the Entry.
5. Live upstream Framework access MUST NOT be assumed.
6. README is not the sole or primary agent-authoritative source (it MAY
   point humans to the Entry).
7. The Entry MUST be human-readable and agent-readable (format deferred).
8. If the canonical Entry cannot be found, Framework-governed work Stops
   until the gateway is established.
9. If a referenced path required for a bound change is missing or not
   offline-resolvable, Stop/Escalation.

### 8. Relationship to pinned Baseline

| Rule | Statement |
| ---- | --------- |
| Record ≠ define | The Entry records Baseline identity; the Baseline is defined by Framework publication (ADR-002) |
| Separation | Project Policy is not pinned Framework content |
| Immutability | Pinned Baseline content remains immutable |
| Attribution | Local specialisations are clearly project-attributable |
| No masquerade | Project changes must not be presented as Framework Baseline changes |
| Upgrade | Baseline replacement is explicit (ADR-002) |
| Policy evolution | Allowed without changing Baseline identity |
| False claim | Claiming one Baseline while applying another’s Core semantics is invalid → Stop/Escalation |

#### 8.1 Project Integration identity or change-history

Long-term architectural intent: evolution of the project’s normative
integration surface (Entry declarations, Project Policy, and related
normative pointers) MUST be **attributable** over time.

This ADR names that requirement the **Project Integration identity or
change-history concept**. It is a project-local accountability concept — not
a Framework version domain (ADR-002) and not a second Baseline.

Exact version syntax and storage form are deferred.

### 9. Normative and informative boundaries

| Kind | Force |
| ---- | ----- |
| Framework normative (pinned Baseline) | Governs subject to allowed specialisation and protected invariants |
| Framework recommended | Displaced by explicit Project Policy |
| Project Policy | Normative within the project (precedence layer 3) |
| Local non-policy guidance | Informative |
| Adapter guidance | Informative; cannot outrank Framework Core or Project Policy |
| Examples and reference implementations | Informative |
| Project work products | Evidence and outcomes; not Framework law |

Project-local guidance MAY be informative while Project Policy remains
normative. The distinction MUST be knowable (labelling convention deferred
to authoring).

### 10. Failure and stop conditions

Stop/Escalation (format deferred) when:

1. No Baseline pin is knowable
2. Multiple conflicting Baseline pins exist
3. Decision Owner is missing for material work or material acceptance
4. Local policy conflicts with Method Spine
5. Local policy conflicts internally, or policy conflicts with project
   architecture, without declared resolution
6. Referenced normative content required for the change is missing or not
   offline-resolvable
7. Agent instructions conflict with Project Policy or pinned Agent
   Interaction rules without resolvable precedence
8. An adapter is treated as outranking Framework Core or Project Policy
9. The project claims one Baseline while using another Baseline’s Core
   semantics
10. Precedence cannot be determined
11. Required review fallback is unavailable or undefined when material
    Review binds and independence may be unavailable
12. The canonical Local Project Entry cannot be found for
    Framework-governed work

---

## Alternatives Considered

### Local Entry architecture

| Option | Description | Outcome |
| ------ | ----------- | ------- |
| A | Single combined human-and-agent document only | Acceptable only if kept thin; prefer hybrid |
| B | Manifest plus linked documents only | Rejected as sole form |
| C | Separate human and agent entry points | **Rejected** — dual-root drift |
| D | Generated-only index as authoritative root | **Rejected** — tool coupling |
| E | Hybrid small entry plus canonical path list | **Accepted** |

### Precedence architecture

| Option | Description | Outcome |
| ------ | ----------- | ------- |
| A | Framework always wins | **Rejected** — blocks legitimate specialisation |
| B | Project always wins | **Rejected** — destroys Method/Core |
| C | Layered precedence with protected Method/Core/Baseline invariants | **Accepted** |
| D | Free-form conflict resolution per agent | **Rejected** |

### Project Policy model

| Option | Description | Outcome |
| ------ | ----------- | ------- |
| A | Project policy copied into the Framework pin | **Rejected** |
| B | Project policy separate but linked from Local Project Entry | **Accepted** |
| C | Project policy entirely implicit in repository files | **Rejected** |
| D | One monolithic Local Project Entry containing all policy | **Rejected** |

### Discoverability

| Option | Description | Outcome |
| ------ | ----------- | ------- |
| A | README-first only | **Rejected** for agent authority |
| B | Tool-specific root files as law | **Rejected** |
| C | One canonical tool-neutral Local Project Entry | **Accepted** |
| D | Search-based discovery without a declared root | **Rejected** |

---

## Responsibilities

### ADR-003 owns

- Project Integration semantics
- Local Project Entry as canonical gateway architecture (not filename/schema)
- Mandatory, conditionally mandatory, and optional declaration categories
- Project Policy boundary
- Precedence model and conflict rules
- Override and specialisation model
- Project-side discovery contract
- Relationship between project policy and pinned Baseline
- Project Integration identity or change-history concept (syntax deferred)
- Integration conflict and stop invariants

### ADR-003 does not own

- Final Local Project Entry filename
- Exact schema or field names
- Markdown or structured-data format choice
- Agent Pack content or packaging (ADR-004)
- Multi-agent handoff formats (ADR-004)
- Tool-adapter details
- Repository folder layout
- Final README structure
- Concrete change-class names or review checklist text
- Project Policy template wording
- Organisation-specific legal or compliance rule content
- Exclusive import mechanism or Framework version syntax (ADR-002)
- Code, CLI, or validation tooling

---

## Consequences

### Positive

- One discoverable bind for humans and agents
- Clear separation of Baseline, Project Policy, and work products
- Protected Method/Core/Baseline invariants with room for stricter local
  control
- Stable discovery contract for ADR-004

### Negative

- Projects must maintain a thin Entry and attributable policy evolution
- Conflicting legacy documentation forces explicit resolution or Stop

### Neutral

- Entry/manifest file layout remains an authoring choice under hybrid
  architecture
- Label syntax for normative vs informative local docs remains authoring

---

## Invariants

1. Project Integration is the broader bind concern; the Local Project Entry
   is its canonical gateway.
2. One consuming project has one authoritative Local Project Entry.
3. The Local Project Entry references the pinned Baseline; it does not
   redefine it.
4. Framework Baseline content and Project Policy remain distinguishable.
5. Project Policy may specialise Framework defaults only within Method and
   Core invariants.
6. Conflicts with Method Spine are invalid.
7. Baseline identity is not changed implicitly by local policy evolution.
8. Project rules and required references must be locally and offline
   resolvable when needed for bound work.
9. Agents and humans use the same precedence model.
10. Unresolved precedence requires Stop/Escalation; resolution must not be
    invented.
11. README is not the sole agent-authoritative source.
12. Adapters and examples cannot outrank Framework Core or Project Policy.
13. Local policy may be stricter than Framework defaults.
14. Local policy must not weaken frozen Method invariants or protected
    ADR-001 / ADR-002 rules.
15. A project must not claim one Baseline while applying another Baseline’s
    normative Core semantics.
16. The Local Project Entry must remain thin and must not duplicate the
    Framework.
17. Decision Owner must be knowable for material acceptance.
18. Fallback-review policy must be knowable when material Review binds and
    independence may be unavailable.
19. Tool-specific roots are not higher law than the canonical Local Project
    Entry.
20. Evolution of the project’s normative integration surface must be
    attributable via the Project Integration identity or change-history
    concept (syntax deferred).
21. ADR-003 does not choose Entry filename, schema, or Agent Pack format.

---

## Risks

| Risk | Mitigation |
| ---- | ---------- |
| Entry grows into a second Framework | Thin-entry rule; policy separation |
| Dual human/agent roots via tool files | Tool roots are not higher law |
| Stricter policy becomes unusable ceremony | Change Classification still scales binding (ADR-001) |
| Policy evolves invisibly | Project Integration identity or change-history concept |
| ADR-004 invents a second discovery root | Hard split: ADR-003 owns project-side contract |

---

## Deferred Decisions

| ID | Item | Defer to |
| -- | ---- | -------- |
| D-01 | Local Project Entry filename | Authoring |
| D-02 | Schema, field names, Markdown vs structured data | Authoring |
| D-03 | Project Integration identity or change-history syntax | Authoring |
| D-04 | Path list inline vs separate manifest file | Authoring under hybrid architecture |
| D-05 | Agent Pack structure | ADR-004 |
| D-06 | Normative/informative labelling convention in-repo | Authoring |
| D-07 | Stop/escalation message or workflow format | Authoring / capability implementations |

---

## Out of Scope

- Concrete Entry templates and field schemas
- Agent instruction packaging and multi-agent protocols
- Repository cosmetics and README information architecture details
- Change-class nicknames and verification checklist items
- Exclusive Baseline distribution technology
- Any Fitness Challenge Platform or SafeHouse content as norms

---

## Dependencies

| Dependency | Relationship |
| ---------- | ------------ |
| Method Spine (frozen) | Protected; local contradiction invalid |
| Stage 1A / 1A.1 (frozen) | Project Integration layer; Adoption Entry distinct from Local Project Entry; precedence sketch refined here |
| ADR-001 (Accepted) | Delivery context and control posture kinds; Classification escalation; Approval, Review, Stop; Agent Collaboration participation boundary |
| ADR-002 (Accepted) | Baseline pin record; immutability; no false Baseline claim; offline resolution; Identity vs Baseline |
| Approved ADR-003 Engineering Review | Decision basis; editorial gateway and identity wording applied |

---

## Future ADR Dependencies

| ADR / work | Expectation |
| ---------- | ----------- |
| **ADR-004** | Consumes the project-side discovery contract and shared precedence model; must not invent a second authoritative project root |
| Local Project Entry guide and template | Implements declaration categories under hybrid architecture |
| Project-policy guidance | Implements Project Policy boundary |
| Pinning and adoption guides | Direct humans to establish Entry + pin |
| Agent instruction pack | Located via Entry; governed by precedence |

---

## Revisit When

- Evidence shows a single hybrid gateway cannot serve both humans and agents
  without a second authoritative root
- A new precedence layer is required for interoperability (not convenience)
- Project Integration attribution cannot be expressed without a Framework
  version domain (would require ADR-002 coordination)

---

## End of ADR-003
