# FA-004 — Pinning and Baseline Guide

| Attribute | Value |
| --------- | ----- |
| Asset ID | FA-004 |
| Title | Pinning and Baseline Guide |
| Kind | guide |
| Classification | Normative Framework (mixed sections labelled) |
| Lifecycle Status | Accepted |
| Related | [FA-003 (Framework Overview)](./FA-003-FRAMEWORK-OVERVIEW.md); [FA-005 (Local Project Entry Guide)](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md); [FA-006 (Local Project Entry Template)](./FA-006-LOCAL-PROJECT-ENTRY-TEMPLATE.md); [ADR-002](./adr/ADR-002-BASELINE-PINNING-AND-VERSIONING.md); [FAIS](./governance/FRAMEWORK-ASSET-IDENTIFICATION-STANDARD.md) |

---

## Purpose

*Informative.*

This guide explains how a consuming project obtains and pins a Framework
Baseline so Framework behaviour is reproducible and offline-capable.

Architectural detail lives in [ADR-002](./adr/ADR-002-BASELINE-PINNING-AND-VERSIONING.md).
This guide does not restate that ADR’s full decision body.

---

## Normative Framework — pinning rules

*Normative Framework.*

1. A Framework Baseline **must** be pinned before Framework-governed work
   begins.
2. The pinned Baseline identity **must** be recorded in the Local Project
   Entry (see [FA-005](./FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md) and
   [FA-006](./FA-006-LOCAL-PROJECT-ENTRY-TEMPLATE.md)).
3. Pin content **must** be locally / offline resolvable once obtained.
4. Silent upstream drift is **prohibited**. Floating “latest main” is not a
   pin.
5. Upgrades are **explicit** project acts (new Baseline identity + local
   content).
6. False Baseline claims are **invalid**: a project must not claim Baseline A
   while applying Baseline B’s normative Core semantics.
7. The chosen distribution mechanism **must** satisfy ADR-002 mechanism-class
   requirements (knowable identity, pin-able, offline-resolvable, no silent
   drift, explicit upgrade, normative distinguishable from informative).

Framework Identity alone is **not** a valid pin target (ADR-002).

---

## Recommended — preferred walkthrough

*Recommended.*

**Preferred default for many teams:** vendored snapshot of the Baseline
content into the consuming repository (or a dedicated vendor directory), with
the Baseline identity recorded in the Local Project Entry.

Suggested operational defaults:

1. Choose the Baseline identity you intend to govern the project.
2. Copy or extract that Baseline’s normative content into a local path the
   project controls.
3. Record the Baseline identity and local path(s) in the Local Project Entry.
4. Confirm the content resolves without network access to upstream.
5. Treat any later Baseline change as an explicit upgrade.

This walkthrough is **Recommended**, not an exclusive normative technology.
Other ADR-002 mechanism classes (release archive, submodule, subtree, hybrid)
remain allowed when they meet the Normative Framework rules above.

---

## Informative — mechanism comparison and construction pin

*Informative.*

| Mechanism class | Typical fit |
| --------------- | ----------- |
| Vendored snapshot | Simple offline; manual updates |
| Release archive | Immutable unpack; clear hash/tag |
| Git submodule / subtree | Linked history; more operational care |
| Hybrid | Normative local; informative optional remote |

**During Framework Construction** (before a separately published consumer
Baseline identity exists), a project may pin a known commit or snapshot of
*this* Framework repository’s normative set (Method, Overview, labelling,
Accepted ADRs, and Project Integration assets once published), recording that
identity explicitly in the Entry. That interim pin must still obey the
Normative Framework rules above. It is not a substitute for later published
Baseline discipline.

*Informative.* Construction pins cover the **normative set** described above.
They do **not** include `docs/research/`, the
[Evolution Backlog](./FRAMEWORK-EVOLUTION-BACKLOG.md), or other stewardship /
investigation material, unless a future published Baseline explicitly includes
them. Those documents are Informative research/stewardship surfaces — not
consumer pin content by default.

---

## Day 0 placement

*Informative.*

Pinning is Day 0 step for obtain + pin, immediately before or together with
creating the Local Project Entry. See
[FA-008 (Greenfield Initialisation Checklist)](./FA-008-GREENFIELD-INITIALISATION-CHECKLIST.md).

---

## End of FA-004
