# Framework Invocation Guide

| Attribute | Value |
| --------- | ----- |
| Document | Framework Invocation Guide |
| Classification | Informative / Reference |
| Status | Draft — awaiting publication approval |
| Framework baseline | Framework 0.7 Alpha; Runtime Foundation M2 |
| Kind | Official Framework document (not a Framework Asset; not an ADR) |

**This document is Informative / Reference.** It includes a **Recommended**
operational sequence. It is not Normative Method, not Normative Framework law,
not an Architecture Decision Record, and not a Framework Asset (`FA-###`).

**If this document and an Accepted ADR or labelled Framework Asset appear to
disagree, the Accepted ADRs and labelled Framework Assets are authoritative.**

---

## 1. Purpose

**Framework Invocation** owns the **operational discipline** for entering,
conducting, and completing Framework-governed work within an **already
integrated** project.

Invocation governs **operational session discipline**.

It does **not** define Runtime behaviour.

It does **not** define capabilities.

It does **not** redefine Method.

It establishes how Framework-governed work is entered and conducted once Project
Integration already exists.

### Canonical invariant

> Every Framework-governed work session begins by discovering the project's
> governance roots before any implementation activity begins.

This applies equally to humans and to AI assistants (including ChatGPT, Cursor,
Claude, Copilot, and future tools). The Framework is tool-neutral; the
invariant is not.

### Golden Rule

> **Golden Rule**
>
> Never begin Framework-governed implementation before the project's governance
> roots have been discovered.

---

## 2. Audience

This guide is intended for:

- developers
- technical leads
- architects
- AI assistants operating within an already integrated project

**Project Integration must already exist** before this guide applies. If the
project has not yet established pin, Local Project Entry, and Project Policy,
complete Project Integration (and any Alpha Adoption packaging) first — then
return here.

---

## 3. When to use this guide

**Precondition:** Project Integration already exists for the consuming project
— pinned Framework Baseline, Local Project Entry, and Project Policy are in
place (see [ADR-003](./adr/ADR-003-PROJECT-INTEGRATION-AND-PRECEDENCE.md);
[FA-004](./FA-004-PINNING-AND-BASELINE-GUIDE.md)–[FA-008](./FA-008-GREENFIELD-INITIALISATION-CHECKLIST.md)).

Use this guide when starting or continuing **Framework-governed work** on a
change.

Do **not** use this guide as Alpha Adoption, greenfield initialisation, or a
substitute for establishing Project Integration. Those concerns belong to
adoption packaging and the Project Integration assets — not here.

---

## 4. Operational session discipline

*Recommended.*

This is **session discipline**. It is **not** a Runtime workflow and **not** a
mandatory lifecycle. **Effective Classification** still determines what
executes.

### Discover the project's governance roots

Before any implementation activity, discover the project's governance roots.

Read:

1. **Local Project Entry** — The Local Project Entry is the authoritative
   discovery root for Framework-governed work within a consuming project
   ([FA-005](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md);
   [FA-006](./FA-006-LOCAL-PROJECT-ENTRY-TEMPLATE.md)).
2. **Project Policy** — linked from the Entry
   ([FA-007](./FA-007-MINIMAL-PROJECT-POLICY-STARTER.md)).
3. **Pinned Framework Baseline** — resolve through **locally available**
   content recorded by the Entry ([FA-004](./FA-004-PINNING-AND-BASELINE-GUIDE.md);
   [ADR-002](./adr/ADR-002-BASELINE-PINNING-AND-VERSIONING.md)).

### Determine

4. Locate the **Effective Classification** for the change — or **classify
   first**, then obtain Decision Owner acceptance so a revision becomes
   Effective ([FA-009](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md);
   [FA-010](./FA-010-CLASSIFICATION-RECORD-TEMPLATE.md)).

Draft classification is not Effective. Do not invent Decision Owner,
precedence winners, or material binds.

If new understanding changes how the work should be governed, obtain a new
Effective Classification before continuing ([FA-009](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md)).

### Execute

5. Invoke **only** Runtime capabilities that are **bound** (at the bound
   depth). Open the corresponding capability guides and templates as needed.
   Do not run unbound capabilities as if they were required.

### Apply

6. **Stop** when material understanding, intent, facts, or precedence cannot
   be resolved without invention ([FA-002](./FA-002-METHOD-SPINE.md)).
7. **Human Authority** — **responsibility cannot be automated, even when
   execution can.** Propose is not accept. Agents do not self-approve material
   outcomes ([ADR-004](./adr/ADR-004-AGENT-INTERACTION-MODEL.md)).

Stop and Human Authority are **cross-cutting operational constraints**. They
apply throughout the session — not only as a late step.

### Record the outcomes required by the bound capabilities

8. **Record the outcomes required by the bound capabilities** (Discovery,
   Decision Support, Planning, Implementation Support, Review, Verification,
   Approval, and related templates as bound).

---

## 5. Relationship to Runtime

**Invocation** starts and maintains Framework-governed work for an operational
session.

**Runtime** defines behavioural composition for a change — invoke, compose,
skip, interrupt, complete — under the Effective Classification
([ADR-001](./adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md)).

Invocation does **not** redefine Runtime. The Runtime Execution Spine remains
an Informative teaching view, not law
([Runtime Foundation M2 Declaration](./governance/RUNTIME-FOUNDATION-M2-DECLARATION.md)).

---

## 6. Relationship to capability guides

Invocation **points** to capability guides. It never reproduces them.

| Need | Where |
| ---- | ----- |
| Discovery | [FA-023](./FA-023-DISCOVERY-GUIDE.md) / [FA-024](./FA-024-DISCOVERY-OUTCOME-TEMPLATE.md) |
| Decision Support | [FA-019](./FA-019-DECISION-SUPPORT-GUIDE.md) / [FA-020](./FA-020-DECISION-SUPPORT-OUTCOME-TEMPLATE.md) |
| Planning | [FA-021](./FA-021-PLANNING-GUIDE.md) / [FA-022](./FA-022-PLANNING-OUTCOME-TEMPLATE.md) |
| Implementation Support | [FA-017](./FA-017-IMPLEMENTATION-SUPPORT-GUIDE.md) / [FA-018](./FA-018-ARTEFACT-FITNESS-READINESS-TEMPLATE.md) |
| Review | [FA-011](./FA-011-REVIEW-GUIDE.md) / [FA-012](./FA-012-REVIEW-OUTCOME-TEMPLATE.md) |
| Verification | [FA-013](./FA-013-VERIFICATION-GUIDE.md) / [FA-014](./FA-014-VERIFICATION-OUTCOME-TEMPLATE.md) |
| Approval | [FA-015](./FA-015-APPROVAL-GUIDE.md) / [FA-016](./FA-016-APPROVAL-DECISION-TEMPLATE.md) |

Use only those that the Effective Classification binds.

---

## 7. Relationship to projects

Consuming projects should **reference** this guide from the Local Project Entry
and from project AI / agent instruction locations.

Projects should **not** copy Framework operational instructions into prompts,
README lore, or tool-specific files in a way that creates a rival root of
truth.

The Local Project Entry is the authoritative discovery root for
Framework-governed work within a consuming project
([FA-005](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md)). This guide is the shared
operational discipline that Entry and instructions may point to.

---

## 8. Relationship to AI assistants

This guide is **tool-neutral**.

It has no vendor-specific sections, no product walkthroughs, no prompt
libraries, and no assistant-branded examples.

Any assistant participating in Framework-governed work follows the same
discovery and session discipline: governance roots first, then Effective
Classification, then bound capabilities only — with Stop and Human Authority
intact ([FA-005](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md) agent discovery
contract; [ADR-004](./adr/ADR-004-AGENT-INTERACTION-MODEL.md)).

---

## 9. Relationship to future Agent Pack

Future Agent Packs should **consume** this document.

They should **not** duplicate or replace it.

Framework Invocation remains the single operational reference for session
discipline. An Agent Pack may package discovery aids and tool adapters; it
must not become a second Method or a rival invocation root.

---

## 10. Lifecycle

Framework Invocation is:

- **permanent**
- **version-independent in purpose** (how work is entered and conducted)
- expected to **evolve incrementally** as guidance clarity improves
- **not** tied to Alpha packaging
- **not** replaced by Beta
- **not** replaced by Framework 1.0

Pinned Baseline *content* versions with the Framework. Invocation *purpose*
does not expire when release labels advance.

---

## 11. Conceptual relationships

*Informative. Conceptual only. Not execution order. Not a Runtime workflow.
Effective Classification still determines what executes.*

### Document map

```text
README
  ├── Whitepaper
  ├── Alpha Adoption Guide (when published)
  │         │
  │         ▼
  │   Framework Invocation Guide
  │
  └──► Framework Invocation Guide
```

### Operational session (conceptual)

```text
Framework Invocation
        │
        ▼
Discover governance roots
        │
        ▼
Local Project Entry
        │
        ▼
Project Policy
        │
        ▼
Pinned Framework Baseline
        │
        ▼
Effective Classification
        │
        ▼
Bound Runtime capabilities

   ┌─────────────────────────────────────────┐
   │  Cross-cutting operational constraints  │
   │  • Stop                                 │
   │  • Human Authority                      │
   └─────────────────────────────────────────┘
```

Unbound capabilities are skipped. Stop and Human Authority apply across the
session, not as a terminal pipeline stage.

---

## 12. Non-claims

This document is **not**:

- an Alpha Adoption Guide
- Runtime (definition or law)
- Method Spine / Normative Method
- Framework law
- an Architecture Decision Record
- a Framework Asset (`FA-###`)
- an Agent Pack
- a prompt library
- a coding standard
- a general engineering / style guide
- a Getting Started importable kit
- proof of production readiness or Framework 1.0

For orientation, see [FA-003 (Framework Overview)](./FA-003-FRAMEWORK-OVERVIEW.md)
and the [whitepaper](./whitepaper/AI-SOFTWARE-DEVELOPMENT-FRAMEWORK-WHITEPAPER.md).

---

## 13. Operational Mindset

*Informative reminders — not Framework law.*

- Discover before acting.
- Follow the current Effective Classification.
- Use only the capabilities that are bound.
- Stop instead of guessing.
- Record outcomes, not assumptions.

---

## End of Framework Invocation Guide
