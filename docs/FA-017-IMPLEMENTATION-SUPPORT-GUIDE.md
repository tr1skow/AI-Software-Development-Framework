# FA-017 — Implementation Support Guide

| Attribute | Value |
| --------- | ----- |
| Asset ID | FA-017 |
| Title | Implementation Support Guide |
| Kind | guide |
| Classification | Normative Framework (mixed sections labelled) |
| Lifecycle Status | Accepted |
| Related | [FA-018 (Artefact Fitness Readiness Template)](./FA-018-ARTEFACT-FITNESS-READINESS-TEMPLATE.md); [FA-009 (Change Classification Guide)](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md); [FA-011 (Review Guide)](./FA-011-REVIEW-GUIDE.md); [FA-013 (Verification Guide)](./FA-013-VERIFICATION-GUIDE.md); [FA-015 (Approval Guide)](./FA-015-APPROVAL-GUIDE.md); [FA-005 (Local Project Entry Guide)](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md); [FA-007 (Minimal Project Policy Starter)](./FA-007-MINIMAL-PROJECT-POLICY-STARTER.md); [FA-002 (Method Spine)](./FA-002-METHOD-SPINE.md); [ADR-001](./adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md); [ADR-004](./adr/ADR-004-AGENT-INTERACTION-MODEL.md) |

---

## Purpose

*Informative.*

**Implementation Support** owns exactly one Runtime responsibility:

> materialising approved intent into reviewable change artefacts that satisfy
> the Runtime definition of the Artefact Fitness Contract.

Nothing more. Nothing less.

It closes the ownership gap in which [FA-011 (Review)](./FA-011-REVIEW-GUIDE.md)
and [FA-013 (Verification)](./FA-013-VERIFICATION-GUIDE.md) consume reviewable
artefacts, and [FA-015 (Approval)](./FA-015-APPROVAL-GUIDE.md) consumes their
outcomes, while no capability owned artefact materialisation.

Catalogue membership is defined in
[ADR-001](./adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md). This guide does not
restate that ADR’s decision body.

Use [FA-018 (Artefact Fitness Readiness Template)](./FA-018-ARTEFACT-FITNESS-READINESS-TEMPLATE.md)
to record readiness against the Artefact Fitness Contract.

---

## Normative Framework — single ownership

*Normative Framework.*

### Owns

1. The **Runtime definition** of the **Artefact Fitness Contract** (when
   artefacts are sufficiently fit for downstream Review and Verification at
   the depth bound by the Effective Classification).
2. **Materialising approved intent** into reviewable change artefacts under
   that Contract, Effective Classification, Human Authority, and Project
   Policy.

### Does not own

- The artefacts themselves (projects own their change artefacts as project
  work products).
- Review challenge or **Review Outcomes**.
- Verification bars or **Verification Outcomes**.
- **Approval Decisions**.
- Change Classification or Effective Classification identity.
- Stop policy redesign (Stop interrupts; Implementation Support does not own
  Stop).
- Engineering style, coding standards, or technology practice corpora.

### MUST NOT

1. MUST NOT infer, extend, or invent **approved intent** beyond what has been
   established under Framework governance.
2. MUST NOT infer missing business, architectural, product, or governance
   intent in order to satisfy the Artefact Fitness Contract.
3. MUST NOT produce a Review Outcome, Verification Outcome, or Approval
   Decision.
4. MUST NOT change, replace, or invent an Effective Classification.
5. MUST NOT become a repository of preferred engineering practices (including
   coding standards, Clean Code, SOLID, language style guides, branching
   strategies, or framework-/technology-specific “best practices”). Projects
   MAY reference such practices; Implementation Support does not own them.
6. MUST NOT treat tool success, CI green, or “LGTM” as Acceptance Chain
   outcomes.
7. MUST NOT self-approve material work or waive Stop
   ([FA-002](./FA-002-METHOD-SPINE.md),
   [ADR-004](./adr/ADR-004-AGENT-INTERACTION-MODEL.md)).

---

## Normative Framework — Approved Intent

*Normative Framework.*

**Approved intent** is intent established for the change under Framework
governance: the **Effective Classification**, and Planning or Decision Support
outcomes when those capabilities were bound and completed—not agent
preference, chat history, or undocumented assumption.

Where approved intent is **insufficient** to satisfy the Artefact Fitness
Contract:

1. Runtime must **Stop/Escalate**.
2. Missing intent must be resolved under existing **Human Authority**.
3. Implementation Support must **never** compensate by creating new business,
   architectural, or product intent.
4. Implementation Support **resumes only** under clarified approved intent.

---

## Normative Framework — Artefact Fitness Contract

*Normative Framework.*

The **Artefact Fitness Contract** is the Runtime definition of when change
artefacts are sufficiently fit for:

- [FA-011 (Review)](./FA-011-REVIEW-GUIDE.md) to challenge them, and
- [FA-013 (Verification)](./FA-013-VERIFICATION-GUIDE.md) to evidence them,

at the Implementation (and related) depths bound by the Effective
Classification ([FA-009](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md)).

**Fitness** means, at minimum, that artefacts:

1. Are attributable to the change and Effective Classification in force.
2. Materialise approved intent without silent scope extension.
3. Are challengeable (Review can engage them at bound depth).
4. Are evidencable (Verification can apply the bound bar).
5. Surface known gaps, exclusions, and unknowns rather than hiding them.
6. Do not claim Review, Verification, or Approval outcomes.

Change artefacts include, as applicable: source code, documentation,
configuration, infrastructure, migrations, specifications, models, and other
work products. This capability is not source-code-centred.

Projects own artefact content and custody. Implementation Support owns only
the Runtime fitness definition and the materialisation behaviour under it.

---

## Normative Framework — inputs and preconditions

*Normative Framework.*

Before Implementation Support proceeds for Framework-governed work:

1. An **Effective Classification** must exist and **Implementation Support**
   must be bound (or this capability is not invoked).
2. Depth and actor constraints must be knowable from that classification.
3. **Approved intent** must be sufficient for the Artefact Fitness Contract;
   otherwise Stop.
4. Entry, pin, and Project Policy must remain resolvable
   ([FA-005](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md),
   [FA-007](./FA-007-MINIMAL-PROJECT-POLICY-STARTER.md)).
5. When Planning or Decision Support were bound, their required outcomes must
   be available before materialising irreversible or multi-step work those
   capabilities were meant to structure—or Stop / complete them first.

---

## Normative Framework — outputs for downstream Runtime

*Normative Framework.*

Implementation Support produces:

1. Reviewable change artefacts (project-owned) intended to satisfy the
   Artefact Fitness Contract.
2. Knowable readiness against that Contract (see
   [FA-018](./FA-018-ARTEFACT-FITNESS-READINESS-TEMPLATE.md)).
3. Explicit unknowns, exclusions, and reclassification triggers discovered
   during materialisation.

It does **not** produce Review Outcomes, Verification Outcomes, or Approval
Decisions.

Artefacts that fail the Artefact Fitness Contract are **not** ready for
Review or Verification under Framework governance.

---

## Normative Framework — Runtime interactions

*Normative Framework.*

```text
Effective Classification
        │
        ▼
Planning / Decision Support (when bound)
        │
        ▼
Implementation Support ──► reviewable artefacts (Artefact Fitness Contract)
        │
        ├──────────────► Review
        └──────────────► Verification
                              │
                              ▼
                           Approval
```

1. Review and Verification **consume** fit artefacts; they do not own
   materialisation.
2. Incremental implement ↔ verify loops are allowed as composition; they do
   not merge ownership.
3. Failed Review or Verification returns rework to Implementation Support
   (artefact fix) and/or reclassification—not to Approval inventing success.
4. If Effective Classification is superseded mid-implementation: interrupt;
   do not continue under superseded bindings; resume only under the new
   Effective Classification.
5. Stop may interrupt at any time.

---

## Normative Framework — failure and Stop

*Normative Framework.*

| Condition | Required behaviour |
| --------- | ------------------ |
| Approved intent insufficient | Stop; Human Authority clarifies; do not invent intent |
| Scope drift vs Effective Classification | Stop and/or reclassify; do not silently extend |
| Materialisation would invent requirements, architecture, or contracts | Stop/Escalate |
| Artefacts not fit for bound Review/Verification | Not ready for Acceptance Chain; remediate under Implementation Support |
| Agent asked to self-approve material acceptance | Forbidden; Stop |
| Missing Effective Classification while claiming Framework-governed implementation | Invalid; Stop |

---

## Human and agent participation

*Normative Framework* (authority) *with Recommended cues.*

| Action | Allowed |
| ------ | ------- |
| Materialise artefacts within Policy and actor constraints | Humans and agents as classified |
| Draft readiness records | Agents MAY |
| Infer or invent approved intent | **Forbidden** |
| Expand scope silently | **Forbidden** |
| Produce Review / Verification / Approval outcomes | **Forbidden** |
| Self-approve material acceptance | **Forbidden** |

Discover via Local Project Entry first
([FA-005](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md)). Cite the Effective
Classification. Obey Project Policy automation bounds.

---

## Recommended — depth cues

*Recommended.*

Depth-band names follow [FA-009](./FA-009-CHANGE-CLASSIFICATION-GUIDE.md) and
are not immutable Framework law.

| Depth band | Artefact Fitness emphasis |
| ---------- | ------------------------- |
| `minimal` | Small, intent-aligned artefact set; obvious blast radius respected; gaps explicit |
| `standard` | Clear change set attributable to classification; sufficient for standard Review/Verification |
| `elevated` | Stronger reconstructibility, safer increments, explicit risk-sensitive care and exclusions |

Projects MAY specialise cues within Method/Core invariants. Specialisation must
not weaken the Artefact Fitness Contract or Human Authority.

---

## Informative — architectural motivation

*Informative.*

Runtime Foundation M1 delivered binding and acceptance. Review and Verification
consume reviewable artefacts; Approval consumes their outcomes. Implementation
Support supplies the missing ownership of materialising approved intent under a
defined fitness contract—without owning engineering style or Acceptance Chain
behaviour.

---

## Non-goals

*Informative.*

This guide does not provide: coding standards; Clean Code / SOLID corpora;
language or framework handbooks; branching strategies; CI/CD product design;
full test catalogues (Verification); design methodology (Decision Support);
Discovery methods; Agent Pack content; tool adapters; or persistence design.

---

## End of FA-017
