# Framework 0.7 Alpha Adoption Guide

| Attribute | Value |
| --------- | ----- |
| Document | Framework 0.7 Alpha Adoption Guide |
| Classification | Informative / Reference |
| Status | Draft — awaiting publication approval |
| Framework baseline | Framework 0.7 Alpha; Runtime Foundation M2 |
| Kind | Official Framework document (not a Framework Asset; not an ADR) |
| Lifecycle | Temporary — Alpha evaluation packaging; expected to evolve or be replaced before Framework 1.0 |

**This document is Informative / Reference.** It is not Normative Method, not
Normative Framework law, not an Architecture Decision Record, and not a
Framework Asset (`FA-###`).

**If this document and an Accepted ADR or labelled Framework Asset appear to
disagree, the Accepted ADRs and labelled Framework Assets are authoritative.**

---

## 1. Purpose

This guide helps an experienced software team **evaluate** the AI Software
Development Framework on a **real project** under **Framework 0.7 Alpha**.

**Core responsibility:**

> Help a project establish Framework governance and successfully complete its
> first Framework-governed change.

Nothing more.

It is an **Alpha evaluation** guide for feedback — not a permanent Getting
Started kit, not production onboarding, and not Framework law.

When that first change is complete (including an honest Stop, if that is what
the work required), this guide’s purpose is finished. Ongoing work belongs to
the [Framework Invocation Guide](../FRAMEWORK-INVOCATION-GUIDE.md).

---

## 2. Before you begin

### Maturity posture

| | |
| - | - |
| **Development baseline** | Framework 0.7 Alpha |
| **Runtime milestone** | Runtime Foundation M2 declared |

See the repository [README](../../README.md) and
[Runtime Foundation M2 Declaration](../governance/RUNTIME-FOUNDATION-M2-DECLARATION.md).

### Who this is for

Experienced software engineers, architects, and technical leads evaluating
whether the Framework works in practice. This guide does not teach basic
software engineering.

### Architectural orientation (optional depth)

For the problem, design principles, and architecture narrative:

- [Whitepaper](../whitepaper/AI-SOFTWARE-DEVELOPMENT-FRAMEWORK-WHITEPAPER.md)
- [FA-003 (Framework Overview)](../FA-003-FRAMEWORK-OVERVIEW.md)
- [FA-002 (Method Spine)](../FA-002-METHOD-SPINE.md)

### Honest non-claims

This guide — and Framework 0.7 Alpha / Runtime Foundation M2 — do **not** mean:

- production-ready Framework
- complete onboarding or an importable consumer kit
- a published public consumer Baseline
- Framework 0.7 Beta or Framework 1.0
- universal applicability to every organisation or product
- that a successful trial proves the Framework correct

Align expectations with the README maturity section and the whitepaper Maturity
chapter before you start.

---

## 3. Adopt the Framework

*Recommended sequence. ID-first only — do not treat this page as a substitute
for the assets.*

Establish **Project Integration** so humans and agents share one discovery root
and one precedence model ([ADR-003](../adr/ADR-003-PROJECT-INTEGRATION-AND-PRECEDENCE.md)).

### 3.1 Pin a Framework Baseline

Follow [FA-004 (Pinning and Baseline Guide)](../FA-004-PINNING-AND-BASELINE-GUIDE.md)
and [ADR-002](../adr/ADR-002-BASELINE-PINNING-AND-VERSIONING.md).

Under Alpha there is **no** published public consumer Baseline. Use FA-004’s
**construction pin**: a known commit or offline-resolvable snapshot of this
repository’s normative set, recorded explicitly in the Local Project Entry.
Do not float on upstream `main`.

### 3.2 Create a Local Project Entry

Follow [FA-005 (Local Project Entry Guide)](../FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md)
and [FA-006 (Local Project Entry Template)](../FA-006-LOCAL-PROJECT-ENTRY-TEMPLATE.md).

One authoritative Entry. Thin declarations and pointers — not pasted Framework
bodies. Prefer pointing agent instructions at the
[Framework Invocation Guide](../FRAMEWORK-INVOCATION-GUIDE.md) rather than
copying operational rules into prompts.

### 3.3 Create a Project Policy

Follow [FA-007 (Minimal Project Policy Starter)](../FA-007-MINIMAL-PROJECT-POLICY-STARTER.md).
Specialise within invariants. State Human Authority / automation bounds and
fallback-review as applicable. Policy does not redefine the pinned Baseline.

### 3.4 Complete greenfield initialisation (or note brownfield honestly)

For greenfield Day 0, pass
[FA-008 (Greenfield Initialisation Checklist)](../FA-008-GREENFIELD-INITIALISATION-CHECKLIST.md).

FA-008 is greenfield-scoped. For brownfield or modernisation, use the same
Project Integration outcomes (pin, Entry, Policy, Decision Owner, precedence)
and record any honest deviations — do not invent a second Framework.

### 3.5 Identify the Decision Owner

Declare a knowable **human Decision Owner** for material work through the Entry
/ Policy path (ADR-003 / FA-005). Authority is accountability, not who types
the most code.

**Adoption gate:** Project Integration is established and the project is ready
for Change Classification on the first real change.

---

## 4. Run your first Framework-governed change

*High-level only. Effective Classification determines what is actually bound.*

Do not skip straight to unstructured implementation.

### 4.1 Classify

Use [FA-009 (Change Classification Guide)](../FA-009-CHANGE-CLASSIFICATION-GUIDE.md)
and [FA-010 (Classification Record Template)](../FA-010-CLASSIFICATION-RECORD-TEMPLATE.md).

Obtain Decision Owner acceptance so a revision becomes the **Effective
Classification**. Draft is not Effective.

### 4.2 Invoke only what is bound

Open capability guides **as bound** — for example:

| If bound | Start here |
| -------- | ---------- |
| Discovery | [FA-023](../FA-023-DISCOVERY-GUIDE.md) / [FA-024](../FA-024-DISCOVERY-OUTCOME-TEMPLATE.md) |
| Decision Support | [FA-019](../FA-019-DECISION-SUPPORT-GUIDE.md) / [FA-020](../FA-020-DECISION-SUPPORT-OUTCOME-TEMPLATE.md) |
| Planning | [FA-021](../FA-021-PLANNING-GUIDE.md) / [FA-022](../FA-022-PLANNING-OUTCOME-TEMPLATE.md) |
| Implementation Support | [FA-017](../FA-017-IMPLEMENTATION-SUPPORT-GUIDE.md) / [FA-018](../FA-018-ARTEFACT-FITNESS-READINESS-TEMPLATE.md) |
| Review | [FA-011](../FA-011-REVIEW-GUIDE.md) / [FA-012](../FA-012-REVIEW-OUTCOME-TEMPLATE.md) |
| Verification | [FA-013](../FA-013-VERIFICATION-GUIDE.md) / [FA-014](../FA-014-VERIFICATION-OUTCOME-TEMPLATE.md) |
| Approval | [FA-015](../FA-015-APPROVAL-GUIDE.md) / [FA-016](../FA-016-APPROVAL-DECISION-TEMPLATE.md) |

This guide does **not** restate Runtime. Composition, skip, and interrupt remain
as defined in Accepted architecture and the capability assets.

Prefer session discipline from the
[Framework Invocation Guide](../FRAMEWORK-INVOCATION-GUIDE.md) even on the first
change: discover governance roots before implementation activity.

### 4.3 Record required outcomes

Record the outcomes required by the bound capabilities. Do not invent missing
Acceptance or Decision Owner acceptance.

**First-change success for Alpha evaluation:** Project Integration in place +
at least one change under an Effective Classification with required outcomes
recorded (or an honest Stop — see below) + feedback captured (§6).

---

## 5. Exercise Stop honestly

Discovering insufficient understanding, missing intent, unresolved precedence,
or material unknowns is a **successful** Alpha outcome when you **Stop** rather
than invent.

Do not “push through” to generate a plausible continuation. Stop / escalate,
surface the gap, and treat that experience as valuable Framework feedback
([FA-002](../FA-002-METHOD-SPINE.md); Stop cues across Runtime assets).

**Human Authority** remains: **responsibility cannot be automated, even when
execution can.** Propose is not accept.

---

## 6. Evaluate the experience

Capture structured feedback (for example a repository issue). Useful questions:

- What felt natural?
- What caused friction?
- Which Framework concepts were unclear?
- Which documents were difficult to find?
- Did AI assistants remain aligned with Entry, Policy, pin, and Effective
  Classification — without a rival instruction root?
- Was ceremony proportionate to the change?
- Where did the Framework prevent mistakes?
- Where did it create unnecessary work?

Feedback informs Framework evolution. It does not authorize forking Method or
Core meaning in the consuming project.

---

## 7. Next steps

From this point onward, follow the
[Framework Invocation Guide](../FRAMEWORK-INVOCATION-GUIDE.md) for all
Framework-governed work.

The Adoption Guide has completed its purpose: governance established, first
change exercised, evaluation notes captured.

Do not continue using this page as a daily operational root. Invocation owns
session discipline after adoption.

---

## Relationship summary

```text
Alpha Adoption Guide (temporary)
        │
        │  establish Project Integration
        │  + first Framework-governed change
        ▼
Framework Invocation Guide (permanent)
        │
        ▼
day-to-day Framework-governed work
```

---

## Non-claims (restated)

This guide is **not**:

- Framework law
- Runtime or Method
- a Framework Asset (`FA-###`)
- an Agent Pack or prompt library
- a permanent Getting Started / production onboarding kit
- a claim of production readiness, public consumer Baseline, or Framework 1.0
- universal fit for every project

---

## Success Criteria

*Informative guidance — not Framework law.*

Your Alpha evaluation is complete when:

- Project Integration has been established.
- At least one real change has been completed under an accepted Effective
  Classification.
- The outcomes required by the bound capabilities have been recorded.
- Any required Stops were handled honestly.
- Feedback has been submitted.

---

## End of Framework 0.7 Alpha Adoption Guide
