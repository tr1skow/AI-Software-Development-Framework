# FA-009 — Change Classification Guide

| Attribute | Value |
| --------- | ----- |
| Asset ID | FA-009 |
| Title | Change Classification Guide |
| Kind | guide |
| Classification | Normative Framework (mixed sections labelled) |
| Lifecycle Status | Accepted |
| Related | [FA-010 (Classification Record Template)](./FA-010-CLASSIFICATION-RECORD-TEMPLATE.md); [FA-008 (Greenfield Initialisation Checklist)](./FA-008-GREENFIELD-INITIALISATION-CHECKLIST.md); [FA-005 (Local Project Entry Guide)](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md); [FA-007 (Minimal Project Policy Starter)](./FA-007-MINIMAL-PROJECT-POLICY-STARTER.md); [FA-004 (Pinning and Baseline Guide)](./FA-004-PINNING-AND-BASELINE-GUIDE.md); [FA-002 (Method Spine)](./FA-002-METHOD-SPINE.md); [FA-001 (Normative Labelling Convention)](./FA-001-NORMATIVE-LABELLING-CONVENTION.md); [ADR-001](./adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md); [ADR-003](./adr/ADR-003-PROJECT-INTEGRATION-AND-PRECEDENCE.md); [ADR-004](./adr/ADR-004-AGENT-INTERACTION-MODEL.md) |

---

## Purpose

*Informative.*

Change Classification is the Framework’s **Capability Binding Mechanism**. For
each change, it produces a binding-complete project work product: which
catalogue capabilities apply, at what depth, with knowable Review,
Verification, and Approval expectations, and with clear Stop/Escalate
conditions.

Classification is **not** merely a risk label, project-management status,
estimate, approval, or a substitute for Discovery or Decision Support.
Architectural ownership of the mechanism is defined in
[ADR-001](./adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md). This guide does not
restate that ADR’s full decision body.

Use [FA-010 (Classification Record Template)](./FA-010-CLASSIFICATION-RECORD-TEMPLATE.md)
to record the result.

---

## Informative — E3 handoff

*Informative.*

After [FA-008 (Greenfield Initialisation Checklist)](./FA-008-GREENFIELD-INITIALISATION-CHECKLIST.md)
passes, the project is **ready for Change Classification** on the first real
change. E3 does not author the Classification procedure; this guide does.

Day-0 path into Classification:

1. Local Project Entry is authoritative
   ([FA-005](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md) /
   [FA-006](./FA-006-LOCAL-PROJECT-ENTRY-TEMPLATE.md)).
2. Baseline is pinned and offline-resolvable
   ([FA-004](./FA-004-PINNING-AND-BASELINE-GUIDE.md)).
3. Project Policy is linked and human-accepted
   ([FA-007](./FA-007-MINIMAL-PROJECT-POLICY-STARTER.md)).
4. Classify the first change **before** unstructured implementation.

---

## Normative Framework — Classification rules

*Normative Framework.*

1. For Framework-governed work, Change Classification **must** produce a
   **binding-complete** classification record. A label alone is **insufficient**.
2. Classification **binds** catalogue capabilities and **depth requirements**.
   Other capabilities own their behaviour once bound (ADR-001).
3. Classification is driven by **materiality** and **uncertainty** (and related
   impact factors), **not** by diff size alone.
4. **Unknown material factors** must **not** be treated as low risk. When such
   factors are unknown and not explicitly deferred under Progressive Commitment
   bounds, the actor **must** Stop/Escalate.
5. Humans and agents use the **same** Classification semantics and the same
   ADR-003 precedence model.
6. Projects **may** specialise labels and thresholds through Project Policy.
   Specialisation **must not** weaken Method Spine or protected Core / Baseline
   invariants ([FA-002](./FA-002-METHOD-SPINE.md), ADR-003).
7. Classification **may tighten** project defaults for one change. Loosening
   below Method / Core invariants is **invalid**.
8. **Approval** is always **conceptually bound** at an explicit depth. Trivial
   work does **not** mean absence of human acceptance authority.
9. Agents **may** draft classifications and reclassifications. Agents **must
   not** silently accept material classifications or authorise material
   bindings. Human Decision Owner acceptance governs material classification
   authority ([ADR-004](./adr/ADR-004-AGENT-INTERACTION-MODEL.md)).
10. A completed classification record is a **project work product**, not
    Framework law.
11. The record **must** reference the Project Policy mapping used, or
    explicitly the Framework Recommended default map in this guide when Policy
    has not yet specialised labels.
12. **Triviality must be justified**, not assumed.

---

## Normative Framework — inputs

*Normative Framework.*

### Mandatory inputs

| Input | Obligation |
| ----- | ---------- |
| Change intent | Knowable requested outcome |
| Local Project Entry | Resolved; Decision Owner, pin, Policy pointer, posture, context pointers |
| Pinned Baseline | Offline-resolvable; normative rules in force |
| Project Policy | Thresholds, label map (or explicit use of Framework Recommended defaults), fallback-review, automation bounds |
| Delivery context and control posture | From Entry / Policy |
| Materiality and uncertainty statements | Including “unknown → Stop” or explicitly deferred items with bounds |

### Conditionally mandatory inputs

| Input | When required |
| ----- | ------------- |
| Affected product / architecture area | Change may touch product behaviour or structure |
| Architecture impact | Structure, contracts, or hard-to-reverse design may change |
| Security / privacy impact | Auth, trust boundaries, secrets, or personal data may be affected |
| Data / migration / compatibility impact | Persistence, schemas, APIs, or clients may break |
| Operational / release impact | Deploy, rollback, or runtime behaviour may change |
| Regulatory / organisational constraints | Legal or organisational precedence layers apply |
| Evidence / context artefacts | Entry points to relevant context, or Discovery is already bound |
| Independence availability | Review may bind and fallback-review Policy must apply |

### Unknown and deferred

- Material factors that would change bindings if true **must not** be silently
  assumed absent.
- If unknown and not explicitly deferred under Progressive Commitment bounds
  → **Stop/Escalate**.
- Explicit deferral requires stated bounds (scope, lifetime, non-production
  constraint, and reassessment path as applicable).

---

## Normative Framework — output obligations

*Normative Framework.*

A classification record **must** make the following knowable (shape:
[FA-010](./FA-010-CLASSIFICATION-RECORD-TEMPLATE.md)):

- record identity, change reference, revision, status
- Decision Owner and acceptance / effectiveness record (when Accepted)
- Entry, pinned Baseline identity, Project Policy mapping used
- delivery context, control posture, change intent, affected areas
- materiality assessment, uncertainty statement, known unknowns / deferred items
- classification label **and** complete bound-capability set with depths
- actor constraints
- Review requirement (including independence or fallback-review)
- Verification requirement
- Approval authority and depth
- Stop/Escalate conditions
- explicit exclusions
- reclassification triggers
- prior revision reference when applicable
- relevant context / evidence references

**Binding completeness:** every catalogue capability listed in the binding model
below must be marked required, not required, or interrupt-available (Stop), with
depth stated for each required capability.

---

## Normative Framework — materiality and uncertainty

*Normative Framework.*

**Materiality** is consequence if the change is wrong or incomplete: product
behaviour, architecture, security / privacy, data, compatibility, operations,
organisational or legal exposure. Materiality is **not** measured by lines of
code or diff size alone. A small diff may be highly material.

**Uncertainty** is incomplete knowledge that could change bindings. Higher
uncertainty typically increases Discovery, Decision Support, Planning, Review,
and/or Verification depth, or requires Stop / Progressive Commitment bounds.

**Risk and Materiality Assessment** (ADR-001 catalogue) informs Classification.
For justified trivial work it may be compact within the classification record;
when impact is unclear it expands and may bind further Discovery.

Classification **must** be revised when material scope or knowledge changes
(see Reclassification).

---

## Recommended — default taxonomy

*Recommended.*

These label names are **Recommended defaults**, not immutable Framework law.
Projects MAY rename or remap them in Project Policy if **binding semantics**
are preserved.

| Label | Intended use |
| ----- | ------------ |
| `trivial` | Justified non-material, low-uncertainty change with explicit triviality rationale |
| `standard` | Ordinary product work with moderate materiality and manageable uncertainty |
| `material` | Material product, architecture, data, API, or operational impact |
| `controlled` | High impact, high uncertainty, security/privacy/regulatory sensitivity, or posture tighten |

Normative force attaches to **dimensions and bindings**, not to these strings.

### Recommended — prompt questions

*Recommended.*

Before selecting a label, answer:

1. Could this affect authentication, authorisation, secrets, or trust boundaries?
2. Could this affect personal data or privacy obligations?
3. Could this break a public or cross-team API / schema / client?
4. Could this be hard to reverse in production?
5. Is rollback / verification clear?
6. Are requirements or blast radius still unknown?

Any “unknown” on 1–4 without explicit Progressive Commitment bounds → Stop.

---

## Normative Framework — binding semantics

*Normative Framework.*

1. Labels communicate intent; **bindings govern execution**.
2. Project Policy local defaults apply until Classification **escalates**
   (tightens) for the change.
3. The binding set in force is that of the **Effective Classification**
   (below), under the pinned Baseline plus valid Policy specialisation.
4. Stop and Escalation remains available at every stage and may interrupt any
   bound capability.
5. Missing bindings, contradictory bindings, or a label with an empty /
   incomplete binding set → classification is **not** ready to execute.

---

## Recommended — depth bands

*Recommended.*

Depth-band names are **Recommended**, not immutable Framework law. Projects MAY
add or rename bands if outcome semantics are preserved.

| Band | Meaning |
| ---- | ------- |
| `minimal` | Lightest outcome that still satisfies the capability’s bound purpose |
| `standard` | Normal proportionate outcome for ordinary materiality / uncertainty |
| `elevated` | Stronger evidence, independence, planning, or verification bar |

### Normative Framework — depth outcomes

*Normative Framework.*

Whatever names a project uses, each bound capability **must** state a depth
whose **required outcome** is knowable before execution. Depth must not be a
bare number without meaning. False numeric precision is prohibited as a
substitute for outcome requirements.

---

## Normative Framework — capability binding model

*Normative Framework.*

| Capability | Binding stance |
| ---------- | -------------- |
| Change Classification | Always for Framework-governed work |
| Stop and Escalation | Always available; interrupts when conditions met |
| Discovery | Conditional — brownfield, modernisation, material, or high uncertainty |
| Risk and Materiality Assessment | With Classification (compact or expanded as needed) |
| Decision Support | Conditional — irreversible or material binds |
| Planning | Conditional — multi-step, material, or high uncertainty |
| Implementation Support | When implementing |
| Review | When material (or Policy requires); independence or fallback-review |
| Verification | When acceptance of the change will be proposed |
| Approval | Always conceptually bound at explicit depth; material acceptance remains human Decision Owner |
| Agent Collaboration | When agents participate; constrained by Policy and classification actor rules |

### Actor constraints

*Normative Framework.*

For each bound capability, actor posture must be knowable as one of:

- **human-required**
- **actor-flexible** (human or agent within Policy)
- **agent-permitted** (subject to Policy; never implies material Approval)

Project Policy may further constrain agents (for example forbid agent
Implementation on `controlled` changes) but must not loosen below Method /
Core invariants.

### Review, Verification, and Approval expectations

*Normative Framework.*

Before Framework-governed execution under a binding set:

- **Review** expectation must be knowable (including independence or
  fallback-review when independence may be unavailable).
- **Verification** expectation must be knowable (bar before proposing
  acceptance).
- **Approval** authority and depth must be knowable (Decision Owner for
  material acceptance; trivial depth still records human acceptance authority).

This guide does **not** author full Review, Verification, or Approval
capability guides. Those capabilities own their detailed behaviour once bound.

---

## Recommended — default binding profiles

*Recommended.*

Sample default mappings (projects MAY specialise):

| Label | Typical binds (beyond Classification + Stop) | Typical depths |
| ----- | -------------------------------------------- | -------------- |
| `trivial` | Risk/Materiality (compact), Implementation, Verification, Approval | mostly `minimal` |
| `standard` | Risk/Materiality, Planning (as needed), Implementation, Review, Verification, Approval; Discovery if context thin | mostly `standard` |
| `material` | Discovery (as needed), Risk/Materiality, Decision Support (as needed), Planning, Implementation, Review, Verification, Approval | `standard`–`elevated` |
| `controlled` | Discovery, Risk/Materiality, Decision Support, Planning, Implementation, Review, Verification, Approval; often posture tighten; Agent Collaboration constrained | mostly `elevated` |

Agent Collaboration binds whenever agents participate, at Policy-constrained
depth.

These profiles are **Recommended** starting points. Binding completeness and
Normative rules override profile convenience.

---

## Normative Framework — Effective Classification

*Normative Framework.*

**Effective Classification** is the currently authoritative **accepted**
classification revision whose binding set governs Runtime execution for the
change.

Rules:

1. **Accepted Classification** and **Effective Classification** are
   intentionally the **same** authority state.
2. Decision Owner acceptance of a revision makes it Effective **immediately**.
3. There is **no** separate activation or promotion stage.
4. Runtime executes against **exactly one** Effective Classification at a time
   for a Framework-governed change in progress.
5. **Draft** classifications are **never** Effective.
6. **No** Framework-governed execution may proceed without an Effective
   Classification.
7. Acceptance of a **reclassification** revision immediately **supersedes** the
   prior Effective Classification.
8. Work **must not** continue under the superseded binding set.
9. Product-change Review, Verification, and Approval are **governed by** the
   Effective Classification; they do **not** make a classification draft
   Effective.
10. Agents **must** cite and obey the Effective Classification. A draft proposal
    does **not** alter the binding set in force.
11. Revision history remains auditable project evidence.

Conceptual lifecycle:

```text
Draft  →  Accepted (= Effective)
              ↓
        (reclassification)
              ↓
        Draft′ → Accepted′ (= new Effective; prior Accepted superseded)
```

---

## Normative Framework — reclassification

*Normative Framework.*

Reclassification creates a **new revision**. Prior revisions remain historical
evidence.

Reclassify when material scope or knowledge changes, including at least:

- scope increases
- architecture, security, privacy, data, or compatibility impact discovered
- requirements change
- verification fails materially
- new uncertainty appears
- implementation diverges from plan
- release or operational context changes
- organisational or legal constraint appears

Rules:

1. A newly **accepted** revision becomes the new Effective Classification.
2. **Material binding changes** require renewed human Decision Owner acceptance.
3. Scope or knowledge changes that affect bindings **interrupt** execution until
   reclassification is accepted.
4. Agents may draft reclassification revisions; they must not self-accept
   material ones.

---

## Normative Framework — ready-to-execute gate

*Normative Framework.*

A change is **ready to execute** under Framework governance only when all are
true:

1. An Effective Classification exists for the change.
2. The binding set is complete and non-contradictory.
3. Review, Verification, and Approval expectations are knowable.
4. Actor constraints are knowable.
5. No open Stop/Escalate condition blocks continuation.
6. Entry, pin, Policy, and Decision Owner remain resolvable and non-conflicting.
7. Explicit exclusions are stated (what this classification does not authorise).

---

## Normative Framework — project specialisation boundary

*Normative Framework.*

Projects MAY, via Project Policy:

- rename or remap Recommended labels
- set local materiality thresholds
- adjust Recommended depth-band names and default profiles
- constrain agent participation further

Projects MUST NOT:

- treat a label as a substitute for bindings
- weaken Method Spine or Core / Baseline invariants under “lightweight” guise
- allow agents to self-accept material classification or material product
  Approval
- execute Framework-governed work without an Effective Classification
- silently treat unknowns as low risk

Classification reads:

- **Entry** — Decision Owner, posture, pointers
  ([FA-005](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md))
- **Project Policy** — thresholds, label map, fallback-review, automation
  ([FA-007](./FA-007-MINIMAL-PROJECT-POLICY-STARTER.md))
- **Pinned Baseline** — Method, catalogue, normative rules in force
  ([FA-004](./FA-004-PINNING-AND-BASELINE-GUIDE.md))

---

## Human journey

*Recommended.*

1. Start from Entry → Policy → pinned Baseline.
2. State change intent and answer materiality / uncertainty prompts.
3. Stop if material unknowns are unresolved.
4. Select a Recommended (or Policy-mapped) label **and** complete the binding
   set ([FA-010](./FA-010-CLASSIFICATION-RECORD-TEMPLATE.md)).
5. Justify triviality when claiming `trivial`.
6. Decision Owner accepts → record becomes Effective.
7. Execute only under that Effective Classification.
8. Reclassify when facts change; do not continue under a superseded set.

What must stay easy: justified trivial path with short rationale.  
What must stay explicit: Owner, bindings, depths, Approval authority, Stop
conditions.  
Architecture expertise is not required to answer the Recommended prompts;
agents may assist drafting.

---

## Agent journey

*Normative Framework* (authority rules) *with Recommended operational cues.*

Agents MUST:

1. Discover via Entry first ([FA-005](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md)).
2. Cite Entry, Policy, Baseline, and evidence used.
3. Propose draft classification / reclassification records; complete bindings.
4. Obey the Effective Classification when one exists.
5. Stop/Escalate when mandatory inputs are missing or conflicting, or when
   material factors are unknown without valid deferral.
6. Never infer Decision Owner, pin, precedence winners, or material facts.
7. Never self-accept material classification or authorise material bindings.
8. Never choose the lowest label for convenience when bindings require higher
   ceremony.

Agents MAY assist humans with prompts, rationale, and profile suggestions.
A draft proposal does not alter the binding set in force.

---

## Normative Framework — failure and under-classification prevention

*Normative Framework.*

| Failure mode | Required response |
| ------------ | ----------------- |
| Trivial-by-diff / assumed triviality | Reject; require justification or reclassify |
| Missing security / privacy consideration when relevant | Stop or elevate bindings |
| Unknown treated as low | Stop/Escalate |
| Agent or human chooses lowest class to avoid ceremony | Incomplete / invalid until bindings match materiality |
| Classification not updated after scope change | Interrupt; reclassify; no work under superseded set |
| Conflicting human/agent drafts | Stop until one revision is Decision Owner–accepted |
| No Policy mapping and no explicit Framework default map reference | Stop |
| Label present but binding set missing / incomplete | Not ready to execute |
| “Low” label while skipping required Review / Verification / Approval | Invalid |
| Approval authority missing | Stop |
| Draft treated as Effective | Invalid; Draft is never Effective |

---

## Informative — examples

*Informative.*

| Scenario | Likely label (Recommended) | Notes |
| -------- | -------------------------- | ----- |
| Typo / docs-only with no behaviour change | `trivial` | Justify; light Verification + Approval depth |
| Dependency update | `standard` or `material` | Supply-chain / breaking risk may elevate |
| Database migration | `material` or `controlled` | Rollback and data risk dominate |
| Authentication change | `controlled` | Security impact; elevated Review / Verification |
| Unclear requirements | — | Stop or Discovery-first; no Implementation yet |
| Solo developer, material change | per materiality | Fallback-review from Policy; Approval still human |
| Urgent production hotfix | `material` / `controlled` with Progressive Commitment bounds | Time-boxed; reclassify for permanent unbounded fix |

---

## Non-goals

*Informative.*

This asset does not provide: full Review / Verification / Approval guides; an
Agent Pack; tool-specific automation; persistence design; executable schema;
code; or one mandatory universal project taxonomy.

---

## End of FA-009
