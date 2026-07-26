# ADR-004 — Agent Interaction Model

## Document Information

| Attribute | Value |
| --------- | ----- |
| ADR | ADR-004 |
| Title | Agent Interaction Model |
| Status | Accepted |
| Classification | Core Architecture |
| Product | AI Software Development Framework |
| Phase | Pre-authoring architecture |
| Related | [ADR-001](./ADR-001-FRAMEWORK-CORE-SEMANTICS.md); [ADR-002](./ADR-002-BASELINE-PINNING-AND-VERSIONING.md); [ADR-003](./ADR-003-PROJECT-INTEGRATION-AND-PRECEDENCE.md); Method Spine (frozen); Stage 1A Framework Architecture (frozen); Stage 1A.1 Architecture Refinement (frozen); Stage 1B ADR Roadmap (frozen) |

---

## Status

Accepted

---

## Purpose

Decide how the Framework defines collaboration among humans, AI agents, and
Framework capabilities while remaining independent of AI vendors, models,
IDEs, orchestration systems, MCP, prompt formats, and APIs.

This ADR establishes a durable Agent Interaction Model: agent abstraction,
human/agent participation and authority boundaries, capability execution
rules, collaboration topologies the Framework must support, Runtime
consumption, discovery via Project Integration, failure responses, and
tool neutrality.

It does not define prompts, Agent Packs, schemas, adapters, tooling, or
vendor integrations.

---

## Context

ADR-001 defines Capability Semantics, the Baseline Capability Catalogue
(including Agent Collaboration), Runtime as the behavioural invocation
model, Change Classification as the capability binding mechanism, and
human-accountable Approval.

ADR-002 requires baseline-relative behaviour and pinned local authority.

ADR-003 defines Project Integration, the Local Project Entry as canonical
gateway, shared human/agent precedence, and the project-side discovery
contract.

Without an Agent Interaction Model, teams invent vendor-shaped agent roles,
treat agents as Decision Owners, redefine Runtime inside tools, or make
multi-agent topologies mandatory law.

Approved Stage 1B sequence:

| Order | ADR | Title |
| ----- | --- | ----- |
| 1 | ADR-001 | Framework Core Semantics (Accepted) |
| 2 | ADR-002 | Baseline Pinning and Versioning (Accepted) |
| 3 | ADR-003 | Project Integration and Precedence (Accepted) |
| 4 | ADR-004 | Agent Interaction Model (this ADR) |

---

## Problem

The architecture must answer:

1. What is an AI agent within this Framework?
2. What is identical and different between humans and agents?
3. What authority may be delegated, and what must not?
4. How do actors execute bound capabilities?
5. Which collaboration topologies must the Framework support?
6. How do agents relate to Runtime and discovery?
7. What happens under agent-related failure?
8. How does the model stay vendor-neutral?

---

## Decision

Adopt the Agent Interaction Model below.

**Core principle:** An **AI agent** is a **non-human actor** that may be
assigned to **participate in** one or more Framework capabilities for a
change, subject to Project Policy, the pinned Framework Baseline, and Human
Authority. Agents **consume** Runtime; they do not define it. Multi-agent
collaboration is **native-optional**. Material Approval and Decision Owner
accountability remain human.

### 1. Agent abstraction

Within this Framework, an **AI agent** is an actor capable of participating
in Framework capabilities — not an LLM, not a prompt, not a software process
definition, and not a Runtime implementation.

| Term | Meaning |
| ---- | ------- |
| **Human** | Human actor; may hold Decision Owner and Approval authority |
| **Actor** | Human or agent participant in a capability |
| **Participation** | Performing or assisting a bound capability under policy |
| **Agent Pack** (future asset) | Instruction packaging that implements this model — not the agent itself |

“AI” names the product context; the architectural type is **actor**.

### 2. Human and agent — sameness and difference

#### 2.1 Identical

- Both are actors that may participate in bound capabilities
- Both obey the same precedence model (ADR-003)
- Both must honour Stop/Escalation rather than silent invention
- Both produce reviewable outcomes where bound capabilities require them
- Either may be unavailable; the failure model applies

#### 2.2 Different

| Dimension | Human | Agent |
| --------- | ----- | ----- |
| Decision Owner | May hold | Must not hold by default; must not silently become Owner |
| Material Approval | May perform final acceptance | Must not perform unchecked final acceptance |
| Accountability | Remains with humans for material product, architecture, risk, merge, and release | Execution assistance does not transfer accountability |
| Authority source | Project Integration declarations and Project Policy | Derived only from policy and Baseline; never self-granted |

#### 2.3 Substitution

| Direction | Rule |
| --------- | ---- |
| Human replaces agent participation | **Always allowed** |
| Agent replaces human **execution** | Allowed only where capability binding and Project Policy permit |
| Agent replaces human **Approval** or **Decision Owner** | **Never** as implicit default; material Approval remains human (ADR-001) |

Human-only projects are first-class (Agent Collaboration may be unbound).
Agent execution of eligible capabilities is allowed; agent-only material
acceptance is not.

### 3. Authority model

| Concern | Meaning | Delegable to agents? |
| ------- | ------- | -------------------- |
| **Capability execution** | Doing the work of a bound capability | Yes, when binding and policy permit |
| **Decision authority** | Making material product, architecture, or risk binds | Agents may draft; humans own final material binds |
| **Approval authority** | Final acceptance of material change | No unchecked agent self-approval |
| **Ownership** | Project governance ownership of artefacts | Agents do not acquire ownership by generating content |
| **Responsibility** | Duty to perform assigned participation | Assignable to actors |
| **Accountability** | Answerability for material outcomes | Remains human |
| **Escalation** | Stop/Escalate when blocked | Any actor must escalate; humans resolve authority conflicts |

**May be delegated (execution):** participation in capabilities such as
Discovery, Planning, Implementation Support, Review analysis, Verification
assistance, and similar actor-flexible work per binding.

**Must never be delegated implicitly:** Method Spine compliance, Baseline pin
authority, Decision Owner role, material Approval, inventing precedence, or
waiving Stop.

### 4. Capability execution model

```text
Change (Runtime unit — ADR-001)
  → Classification binds capabilities and depths
  → Project Policy may constrain permitted actor kinds
  → Actor(s) participate (human, agent, or both)
  → Human Approval completes material acceptance
```

| Pattern | Execution path |
| ------- | -------------- |
| Human → Capability | Allowed |
| Agent → Capability | Allowed when binding and policy permit |
| Multiple agents → Capability | Allowed when binding and policy permit |
| Human + Agent → Capability | Allowed (composed participation) |

These paths are equivalent as **execution** patterns only where the
capability is actor-flexible. They are **not** equivalent for **Approval**
or for holding Decision Owner.

**Review:** an agent may provide independent analysis; another agent’s
analysis is not Approval; final material acceptance remains human
(ADR-001).

Capability participation may be:

- **Human-required** (for example material Approval)
- **Actor-flexible** (human or agent)
- **Agent-permitted** subject to Project Policy

Projects may further **constrain** agent participation (for example forbid
agent Implementation on high-risk classes). Projects must not **loosen**
below Framework invariants (ADR-003).

Agents do not own capabilities. They participate in them. Change
Classification and policy produce bindings — not agent preference.

### 5. Collaboration model

The Framework **MUST support**, without preferring an implementation:

| Mode | Support |
| ---- | ------- |
| Single agent | Yes |
| Multiple specialised agents | Yes |
| Peer agents | Yes |
| Human-led collaboration | Yes (default governance stance) |
| Mixed human and agent | Yes |
| Human-only | Yes |

The Framework **MUST NOT require**:

| Mode | Stance |
| ---- | ------ |
| Hierarchical agent governance as law | Not required |
| Agent-led organisational authority | Not a Framework governance model |
| Multi-agent as mandatory for compliance | No |

**Multi-agent stance:** **native-optional** — first-class in the model,
never mandatory.

No topology is normative Framework law. Project Policy may describe preferred
topologies as local guidance.

### 6. Runtime relationship

| Rule | Statement |
| ---- | --------- |
| Ownership | Runtime is owned by Framework Core (ADR-001) |
| Consumption | Agents consume Runtime: invoke, compose, skip, interrupt, complete |
| Binding | Capability binding comes from Classification and policy, not agents |
| Baseline | Agent behaviour is baseline-relative (ADR-002) |

Agents must not redefine Runtime verbs, the change as Runtime unit, or
Capability Semantics.

### 7. Discovery

Agents discover applicable instructions through the **same project-side
contract as humans** (ADR-003):

1. Locate the canonical Local Project Entry
2. Read the pinned Framework Baseline identity and resolve offline Baseline
   content
3. Follow pointers to Project Policy, context, review/fallback/automation
   policy, and agent instruction location
4. Apply shared precedence — no invented resolution

Transport mechanisms (files, APIs, IDE context windows) are out of scope.
README is not the agent-authoritative root (ADR-003).

### 8. Communication

The Framework defines **responsibilities and outcomes**, not wire formats.

| In scope | Out of scope |
| -------- | ------------ |
| Produce reviewable artefacts for bound capabilities | Prompt text or chat transcripts as law |
| Surface material unknowns and blocking assumptions | Message schemas, MCP, API envelopes |
| Hand off intent via change artefacts and open uncertainties | Vendor conversation protocols |
| Cite policy and Baseline when proposing acceptance | Required JSON/YAML Agent Contract schemas |

Intent is expressed as change request, classification, and artefacts — not as
a prompt dialect.

### 9. Failure model

| Failure | Architectural response |
| ------- | ---------------------- |
| Agent unavailable | Human substitutes, or Stop if required participation cannot be met and no substitute exists |
| Human Decision Owner unavailable for material Approval | Stop — no agent self-approval |
| Conflicting agent outputs | Unresolved input; human authority path resolves; agents must not silently pick a winner |
| Agent exceeds authority | Invalid; Stop/Escalate; outcomes not accepted |
| Agent contradicts Project Policy or Framework Core | Policy and Core win; Stop if the agent continues in contradiction |
| Agent cannot resolve ambiguity or precedence | Stop/Escalate — no silent invention |
| Multiple agents disagree | Escalate to human authority path |
| Human disagrees with agent | Human Decision Owner prevails within precedence layers |

### 10. Agent identity, context, and lifecycle

| Concept | Placement |
| ------- | --------- |
| Product process identity of an agent | Outside Framework |
| Participation assignment for a change | Framework and Project Policy |
| Capability eligibility | ADR-001 binding, this ADR’s participation rules, and Project Policy |
| Authority ceiling | ADR-001, ADR-003, and this ADR — not agent self-description |
| Memory | Outside Core; must not override pin or Project Policy |
| Context for a change | Discovered via Entry, Baseline, and pointers (ADR-003) |
| Registered / Available / Assigned / Executing / Completed / Failed / Retired product lifecycle | Outside Framework Core |

The Framework recognises whether required participation for a change is
**fulfilled**, **human-substituted**, or **blocked** — not a product agent
registry.

### 11. Tool neutrality

Normative Agent Interaction MUST NOT depend on any specific AI vendor, model,
IDE, orchestration system, MCP, prompt format, or API — including but not
limited to present or future systems such as Cursor, Claude Code, Codex,
GitHub Copilot, Gemini, or OpenHands.

Informative adapters and future Agent Packs MAY map generic obligations onto
a tool. They MUST NOT redefine this model or outrank Framework Core or
Project Policy.

Model replacement and multi-vendor use MUST leave this architecture intact.

### 12. Relationship to Agent Collaboration (ADR-001)

ADR-001’s **Agent Collaboration** catalogue capability constrains agent
participation in other capabilities. This ADR defines the participation
architecture those constraints operate within.

Agent Collaboration does not replace Approval. This ADR does not amend the
Baseline Capability Catalogue membership list.

---

## Alternatives Considered

| Option | Description | Outcome |
| ------ | ----------- | ------- |
| A | Agent is an LLM | Rejected — not durable |
| B | Agent is a prompt | Rejected — implementation artefact |
| C | Agent is a software process definition | Rejected as Framework abstraction |
| D | Agent is an actor capable of capability participation | **Accepted** |
| E | Agent is a Runtime implementation | Rejected — Runtime is ADR-001 |
| F | Agent as capability owner | Rejected — capabilities are Framework semantic |
| G | Agent as tool only | Rejected as sole model — understates authority boundaries |
| H | Multi-agent mandatory | Rejected |
| I | Agent-led organisational governance as Framework stance | Rejected |
| J | Vendor-shaped agent roles as normative law | Rejected |
| K | Framework-managed agent product lifecycle registry | Rejected |

---

## Responsibilities

### ADR-004 owns

- Agent as capability-participating actor abstraction
- Human/agent sameness and difference for participation versus authority
- Authority delegation boundaries for agent use
- Capability participation rules interacting with ADR-001 binding
- Collaboration topologies the Framework must support (native-optional
  multi-agent)
- Agent consumption of Runtime (not ownership)
- Agent use of the ADR-003 discovery contract
- Communication as responsibilities and outcomes (not formats)
- Failure and Stop responses for agent-related cases
- Tool-neutrality invariants for agent interaction
- Relationship of future Agent Packs as implementations of this model

### ADR-004 does not own

- Prompts or prompt libraries
- Agent Pack file layout (authoring under this model)
- YAML/JSON schemas or required Agent Contracts
- MCP, APIs, IDE bindings, or orchestrators
- Model selection, evaluation, or vendor rankings
- Agent process registry or product lifecycle
- Local Project Entry schema (ADR-003)
- Baseline pin mechanics (ADR-002)
- Capability Semantics or Runtime verbs (ADR-001)
- Multi-agent message-bus design

---

## Consequences

### Positive

- Durable human–agent collaboration rules across vendors and models
- Clear authority ceiling preserving Human Authority and Review invariants
- Multi-agent supported without mandating topology
- Stable contract for future Agent Packs and adapters

### Negative

- Abstract actor model requires later authoring to become operational for
  practitioners
- Projects must maintain explicit participation constraints in policy

### Neutral

- Role nicknames (planner, implementer, reviewer-analysis) remain optional
  informative authoring unless a future ADR elevates them

---

## Invariants

1. An agent is an actor that may participate in Framework capabilities — not
   an LLM, prompt, or vendor runtime.
2. Agents consume Runtime; they do not define it. Runtime ownership remains
   ADR-001.
3. Humans and agents share precedence and Stop duties; they do not share
   material Approval authority by default.
4. Material Approval and Decision Owner accountability remain human; agents
   must not unchecked self-approve.
5. Human substitution for agent participation is always allowed.
6. Capability binding comes from Classification and policy, not agent
   preference.
7. Multi-agent collaboration is native-optional, never mandatory.
8. Agent discovery uses the Local Project Entry and pinned Baseline; not
   README-as-root; not live unpinned upstream.
9. Agents must not invent precedence or silently invent material
   requirements, architecture, or contracts.
10. Adapters and tool-specific packs cannot outrank Framework Core or Project
    Policy.
11. Framework Agent Interaction is tool-, model-, IDE-, MCP-, and API-neutral.
12. Conflicting agent outputs do not self-resolve into acceptance.
13. Agent Collaboration constrains participation; it does not replace
    Approval (ADR-001).
14. ADR-004 does not define prompts, schemas, or orchestrators.
15. Memory or tool context must not override the pinned Baseline or Project
    Policy.
16. ADR-004 does not amend ADR-001 Capability Semantics, catalogue membership,
    or Runtime verbs.

---

## Risks

| Risk | Mitigation |
| ---- | ---------- |
| ADR becomes a prompt standard | Hard non-responsibilities |
| Actor abstraction too thin for adopters | Later Agent Packs implement; ADR stays semantic |
| Single-agent dogma despite native-optional multi-agent | Explicit native-optional stance |
| Agents treated as Decision Owners in practice | Invariants 3–4; failure model |
| Tool adapters redefine the model | Invariants 10–11 |

---

## Deferred Decisions

| ID | Item | Defer to |
| -- | ---- | -------- |
| D-01 | Agent Pack file format | Authoring |
| D-02 | Role-name catalogues | Informative authoring unless a future ADR |
| D-03 | Machine-readable Agent Contracts | Future optional ADR or asset |
| D-04 | Orchestration, bus, or MCP design | Outside Framework |
| D-05 | Exact participation matrix per catalogue capability | Authoring under ADR-001 and this ADR |
| D-06 | Handoff artefact templates | Authoring |

---

## Out of Scope

- Prompt engineering standards
- Vendor product configuration
- Repository agent config filenames
- Concrete Agent Pack contents
- Any Fitness Challenge Platform or SafeHouse content as norms

---

## Dependencies

| Dependency | Relationship |
| ---------- | ------------ |
| ADR-001 (Accepted) | Capabilities, Runtime ownership, Classification binding, Approval, Stop, Agent Collaboration catalogue member |
| ADR-002 (Accepted) | Baseline-relative behaviour; pinned local authority |
| ADR-003 (Accepted) | Discovery gateway; shared precedence; Entry not redefined here |
| Method Spine / Stage 1A / 1A.1 (frozen) | Human Authority, Tool Neutrality, Agent Interaction layer |
| Approved ADR-004 Engineering Review | Decision basis |

---

## Future Dependencies

| Work | Expectation |
| ---- | ----------- |
| Agent Packs | Implement participation obligations under this model |
| Adapters | Informative mappings; cannot redefine this ADR |
| Guides and templates | May illustrate topologies; remain non-law unless Baseline-normative |
| Authoring of participation matrices | Must honour human-required Approval and actor-flexible rules |

---

## Revisit When

- Evidence shows a required additional actor kind beyond human and agent for
  interoperability
- A future machine-readable contract requires elevating schema to an ADR
  without becoming vendor-specific
- Native-optional multi-agent proves insufficient and a mandatory topology is
  evidenced (would require strong justification)

---

## End of ADR-004
