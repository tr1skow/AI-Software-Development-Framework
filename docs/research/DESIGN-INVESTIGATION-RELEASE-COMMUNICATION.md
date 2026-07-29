# Design Investigation — Release Communication

| Attribute | Value |
| --------- | ----- |
| Document | Design Investigation — Release Communication |
| Classification | Informative / Research (investigation only) |
| Status | Complete — recommendation recorded |
| Framework baseline | Framework 0.7 Alpha; Runtime Foundation M2 |
| Related | [Evolution Backlog item 8](../FRAMEWORK-EVOLUTION-BACKLOG.md); [Published Consumer Baseline Investigation](./DESIGN-INVESTIGATION-PUBLISHED-CONSUMER-BASELINE.md); [Evolution Process Investigation](./DESIGN-INVESTIGATION-FRAMEWORK-EVOLUTION-PROCESS.md); [ADR-002](../adr/ADR-002-BASELINE-PINNING-AND-VERSIONING.md) |
| Kind | Design investigation — **not** a Framework Asset, ADR, release procedure, or CHANGELOG |

**This investigation answers how Framework changes should be communicated to
consumers.** It does not introduce mandatory release documentation, create
governance, invent a release board, or author a CHANGELOG. Prefer improving
existing communication over new artefacts.

If this document and an Accepted ADR or labelled Framework Asset appear to
disagree, the Accepted ADRs and labelled Framework Assets are authoritative.

---

## Executive Summary

There is **no** `CHANGELOG.md` (or equivalent) in the repository today.
Consumer-facing change signals are scattered across README maturity wording,
git history, milestone declarations (for example M2), and ADR-002’s
requirement for **migration guidance** on breaking/deprecation changes.

**Research question answer:** Communicate to consumers by **change class and
document force**, not by publishing every repository commit as a “release.”

**Final Recommendation: Option D** — a minimal, force-aware communication
pattern that:

1. Uses **existing surfaces** first (README maturity / non-claims; ADR-002
   migration guidance; honest Baseline-identity announcements when they exist).
2. Treats **research, backlog, and stewardship bookkeeping as internal** unless
   they change what consumers must pin or claim.
3. Distinguishes **Normative vs Informative** in any consumer-facing note.
4. Does **not** create a separate AI release channel — agents follow the pinned
   Baseline and Local Project Entry, not live release feeds.
5. **Defers** introducing a CHANGELOG until observable need (aligned with
   backlog Maturity Trigger), rather than mandating one now.

This is the smallest model that preserves claim honesty and ADR-002 upgrade
discipline without unnecessary governance.

---

## Research Question

How should Framework changes be communicated to Framework consumers?

---

## Current State

### What exists

| Surface | Role today |
| ------- | ---------- |
| **Git commits / history** | Primary record of all changes; not consumer-oriented |
| **README maturity section** | Human landing for Alpha/Beta/1.0 positioning and “Published consumer Baseline: Not yet” |
| **M2 Declaration / FAIS / allocation log** | Stewardship and milestone honesty; not a release-notes channel |
| **FA-001 force labels** | Distinguishes Normative / Informative / Reference in documents |
| **ADR-002 compatibility + migration** | Normative requirement: breaking and relevant deprecations need migration guidance; pins do not auto-track upstream |
| **Alpha Adoption / Invocation Guides** | Informative operational packaging; not release notes |
| **`docs/research/` + Evolution Backlog** | Evolution reasoning and candidates; explicitly not the consumer offering |
| **CHANGELOG / release notes artefact** | **Does not exist** |

### Implication for Option A

Option A (“Existing CHANGELOG is sufficient”) is **not available as stated**.
The closest status-quo reading is “git history + README maturity are
sufficient.” That is evaluated below as **A′ (status quo without CHANGELOG)**.

### Objectives — findings

| Objective | Finding |
| --------- | ------- |
| Which changes deserve explicit release communication? | Those that change **consumer obligations or claims**: Normative Method/Framework text, Accepted ADR law that governs pins, Baseline identity publication/replacement, maturity-claim changes, and deprecation/breaking events that require migration guidance (ADR-002 / FA-002). |
| Which changes should remain internal? | Research investigations, Engineering Reviews, backlog edits, allocation-log bookkeeping, illustration metadata, and most Informative clarifications that do not alter pin membership or claimed maturity. |
| Distinguish normative vs informative? | **Yes.** Consumer notes that blur force recreate the consumer-surface problem already investigated. |
| Should research appear in release notes? | **Generally no.** At most a one-line exclusion (“research/backlog are not pin content”) when clarifying consumer surface — not a changelog of investigations. |
| Different communication for AI vs humans? | **No separate channel.** Humans may read README/CHANGELOG; AI consumers must discover governance via Entry + pinned Baseline (ADR-003/004). Agents MUST NOT silently retarget upstream (ADR-002). A parallel “AI release feed” would fight pin discipline. |

### Tie to Published Consumer Baseline

Until a published consumer Baseline identity exists, “release” mostly means
**construction-branch evolution** under Alpha honesty. Over-communicating every
commit as a consumer release would imply a productisation level README
explicitly refuses. Under-communicating Normative churn still hurts anyone on a
construction pin. The middle path is **class-gated** communication.

---

## Alternatives

### Option A — Existing CHANGELOG is sufficient

**As stated:** not applicable (no CHANGELOG).

**A′ reinterpretation:** Status quo — git history + README maturity updates +
occasional milestone declarations; no dedicated release-notes practice.

### Option B — CHANGELOG plus lightweight release summary

Create `CHANGELOG.md` (or similar) and additionally publish short release
summaries (for example per tag or Baseline identity).

### Option C — Different communication for different audiences

Separate tracks for adopters, contributors, and AI agents (for example human
release notes + machine-readable release manifest + contributor research digest).

### Option D — Force- and compatibility-class pattern (identified here)

Define **what** must be communicated by force/compatibility class, prefer
**existing surfaces**, keep research internal, defer CHANGELOG until evidence of
need, never create an AI-specific live release channel.

---

## Trade-offs

Ratings: **H** favourable / **M** mixed / **L** unfavourable.

### Consumer clarity

| Option | Rating | Notes |
| ------ | ------ | ----- |
| A′ | L–M | “Not yet” maturity is clear; Normative delta for construction-pin adopters is hard to see |
| B | H | Clear history — if force-labelled and not flooded with research |
| C | M | Clarity per audience; confusion about which track is authoritative |
| D | **H** | Clear *rules* for what deserves a consumer note; avoids noise |

### AI discoverability

| Option | Rating | Notes |
| ------ | ------ | ----- |
| A′ | M | Agents should use pin/Entry anyway; no release feed to misuse |
| B | M | CHANGELOG helps humans more; agents may over-weight unpinned notes if discovered live |
| C | L | Dedicated AI channel risks silent upstream retargeting behaviour |
| D | **H** | Explicitly keeps AI on pinned Baseline; humans get force-aware notes |

### Maintenance effort

| Option | Rating | Notes |
| ------ | ------ | ----- |
| A′ | H | Lowest writing cost; hidden consumer cost |
| B | L–M | Dual upkeep (CHANGELOG + summaries) unless summaries are rare |
| C | L | Highest dual-maintenance |
| D | **H–M** | Pattern first; CHANGELOG only when triggered |

### Governance impact

| Option | Rating | Notes |
| ------ | ------ | ----- |
| A′ | H | No new process; claim drift risk remains |
| B | M | Artefact alone is fine; becomes governance if every merge requires notes |
| C | L | Audience matrices and release boards emerge easily |
| D | **H** | No release board; uses ADR-002 classes already Accepted |

### Scalability

| Option | Rating | Notes |
| ------ | ------ | ----- |
| A′ | L | Breaks down as Normative surface and adopter count grow |
| B | H | Scales as a log if entries stay consumer-meaningful |
| C | M | Scales organisationally, not philosophically |
| D | **H** | Class gates scale; CHANGELOG can be added later without redesign |

### Alignment with Framework philosophy

| Principle | A′ | B | C | D |
| --------- | -- | - | - | - |
| Minimal governance | H | M | L | **H** |
| Evidence-first / claim honesty | M | M | M | **H** |
| Progressive Commitment | H | M | L | **H** |
| Tool neutrality / no silent agent upgrade | H | M | L | **H** |
| Prefer improve existing over new artefacts | H | L | L | **H** |

### Summary matrix

| Criterion | A′ | B | C | D |
| --------- | -- | - | - | - |
| Consumer clarity | L–M | H | M | **H** |
| AI discoverability | M | M | L | **H** |
| Maintenance effort (favourable = low) | H | L–M | L | **H–M** |
| Governance impact (favourable = low) | H | M | L | **H** |
| Scalability | L | H | M | **H** |
| Philosophy alignment | M | M | L | **H** |

---

## Recommendation

**Prefer Option D.**

### Communication classes (Informative pattern — not a mandatory procedure)

| Change class | Consumer communication? | Primary surface |
| ------------ | ----------------------- | --------------- |
| **Breaking** Normative / Method / Core semantics | **Yes** — plus migration guidance (ADR-002 / FA-002 already require) | Migration guidance with Baseline replacement; README maturity if claims change |
| **Deprecation** affecting bound capabilities | **Yes** — migration guidance SHOULD exist (ADR-002) | Same |
| **Catalogue additive** / new Normative Asset binding behaviour | **Yes** — what changed for pins that upgrade | Consumer note when a Baseline identity exists; during Alpha construction pins, state Normative membership impact honestly if adopters are expected to move commits |
| **Compatible additive Informative** only | **Optional / usually no** | Git history sufficient unless it changes recommended adopter entry paths |
| **Maturity claim change** (Alpha/Beta/1.0, PCB status) | **Yes** | README maturity + non-claims; must not contradict M2/ADR posture |
| **Baseline identity publication or replacement** | **Yes** | Explicit identity announcement + pin/upgrade instructions; never silent |
| **Research / backlog / allocation bookkeeping** | **No** (internal) | Remain in `docs/research/`, backlog, FAIS log |
| **Repository construction governance** | **Only if** it changes consumer pin rules or claims | Otherwise internal |

### Normative vs Informative in notes

Any consumer-facing communication SHOULD state force, for example:

- Normative change (affects pinned behaviour on upgrade)
- Informative change (helps; does not redefine Norms)
- Claim/positioning change (maturity honesty)

### Research in release notes

**Default: omit.** Research documents evolution; it is not a consumer deliverable.
Do not serialise Design Investigations into adopter release notes.

### AI consumers

- **No** separate release-communication product.
- Agents continue to discover Local Project Entry + pinned Baseline.
- Release notes, if any, are Informative orientation for humans (and for agents
  only insofar as they appear inside a pinned Baseline’s Informative set).
- Never instruct agents to float on upstream release feeds.

### CHANGELOG disposition

| Now | Later |
| --- | ----- |
| Do **not** mandate creating `CHANGELOG.md` from this investigation alone | Introduce a CHANGELOG when backlog Maturity Trigger evidence appears — especially first published consumer Baseline identity, or repeated adopter confusion about Normative deltas between construction pins |
| Improve README maturity honesty and attach migration guidance where ADR-002 already requires it | Keep CHANGELOG consumer-filtered (force-aware); exclude research noise |

### Why not the other options

| Option | Why not as target |
| ------ | ----------------- |
| A (as stated) | No CHANGELOG exists |
| A′ | Insufficient as Normative surface and adopter count grow; weak force signalling |
| B now | Creates artefact before demonstrated need; risks turning every merge into release ceremony |
| C | Over-builds audience channels; AI channel conflicts with pin discipline |

---

## Risks

| Risk | If unmitigated | Mitigation direction (non-design) |
| ---- | -------------- | --------------------------------- |
| **Release ceremony** | Every PR demands notes | Class gates; research stays internal |
| **False productisation** | Frequent “releases” imply published PCB | Keep Alpha “Not yet” honest; reserve Baseline-identity announcements for real identities |
| **Force blur** | Notes mix Normative and Informative | Require force labelling in consumer notes |
| **Research leakage** | Investigations fill CHANGELOG | Explicit exclusion rule |
| **Agent upstream chase** | AI release feed retargets pins | No AI channel; ADR-002 explicit upgrade only |
| **Silent Normative churn** | Construction-pin adopters miss breaking edits | When Normative behaviour changes on `main`, say so on the human landing/maturity surface or in migration notes — without inventing a board |

---

## Open Questions

1. When a CHANGELOG is eventually justified, should entries be keyed by
   **Baseline identity**, git tag, or both?
2. Should Alpha construction-pin Normative bumps get a lightweight README
   “Normative set tip” line before any CHANGELOG exists?
3. Who drafts migration guidance for breaking changes — still a steward
   responsibility without a release board?
4. After consumer-surface clarity (item 7 near-term) ships, does that page
   absorb “what changed for consumers” pointers, reducing need for early
   CHANGELOG?
5. Are GitHub Releases useful as a mirror of Baseline-identity announcements,
   or redundant with README + CHANGELOG?

---

## Final Recommendation

### Option D — Force- and compatibility-class release communication

**Communicate Framework changes to consumers by what the change does to pins,
claims, and Normative meaning — not by mirroring the entire repository.**

1. **Deserve explicit consumer communication:** Normative/Method/ADR law
   changes, Baseline identity events, maturity-claim changes, and
   breaking/deprecation events (with migration guidance per ADR-002/FA-002).
2. **Remain internal:** research, backlog, allocation bookkeeping, most
   Informative-only edits.
3. **Distinguish Normative vs Informative** in any consumer-facing note.
4. **Research:** do not appear as release-note content (exclusion note only if
   needed for surface clarity).
5. **AI vs human:** same authority model; **no** separate AI release channel;
   pins remain explicit and human/project-controlled.
6. **Artefacts:** prefer improving README maturity + required migration
   guidance; **defer CHANGELOG** until observable need; do not create
   mandatory release documentation beyond that demonstrated need.

### Explicit non-actions (this investigation)

- No CHANGELOG authored
- No release procedure or release board created
- No new governance rules
- No mandatory release documentation introduced
- No AI-specific release feed designed

---

## Success criteria check

| Criterion | Result |
| --------- | ------ |
| Minimal release communication model for meaningful consumer changes | **Option D — class-gated, existing surfaces first** |
| Without unnecessary governance | **Satisfied** — no board, no mandatory CHANGELOG now, research excluded |

---

## End of Design Investigation
