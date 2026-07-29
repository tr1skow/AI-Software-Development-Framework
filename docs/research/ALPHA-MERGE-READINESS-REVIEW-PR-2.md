# Alpha Merge Readiness Review — PR #2

| Attribute | Value |
| --------- | ----- |
| Document | Alpha Merge Readiness Review — PR #2 |
| Classification | Informative / Research (documentation readiness) |
| Status | Complete — checklist and required edits recorded; must-complete README/FA-004 edits applied in the same change set where noted |
| Target | Merge `cursor/ecosystem-governance-investigation-663a` (PR #2) into `main` |
| Kind | Documentation readiness review — **not** an architecture review, Design Investigation, Asset, or ADR |

**Assumptions:** Alpha architecture is complete (M2 + ADR Foundation + FA-001–024). No additional ADRs or Framework Assets. No new governance. Prefer updating existing documentation over creating new documents.

---

## Executive finding

PR #2 adds a large **research / stewardship** corpus (`docs/research/`, Evolution Backlog, reviews, patterns) that is **internally linked** (0 broken relative links found in a full-repo markdown link check) but **invisible from consumer entry points**.

Without README (and light FA-004) updates, merging would leave `main` architecturally Alpha-complete but **navigationally inconsistent**: newcomers would encounter research artefacts without an authoritative statement that they are **not** the consumer offering, **not** Normative, and **not** pin content.

**Must-complete work is limited to existing-document updates.** No new Framework Assets. No Getting Started / Agent Pack / CONTRIBUTING.md / ecosystem architecture page required for Alpha merge coherence.

---

## Inventory (post–PR #2)

| Area | Present? | Merge relevance |
| ---- | -------- | --------------- |
| README | Yes | Must reflect research/backlog and contributing authorities |
| CONTRIBUTING.md | **No** | Not required — README Contributing is the surface (Evolution Process Option D) |
| Getting Started | **No** | Correct for Alpha — must not invent |
| Agent Pack | **No** | Correct for Alpha — must not invent |
| FA-003 Overview | Yes | Still product map; optional pointer later |
| Documentation map (README table + AIS-001) | Partial | Table must update; AIS-001 illustration can wait |
| Consumer entry points | Adoption + Invocation + FA-003 | Intact; need exclusion of research |
| Baseline references | FA-004 construction pin; “PCB Not yet” | Must exclude research from pin expectations |
| ADR / Asset indexes | README | Intact |
| Research index | **No dedicated index** | Prefer README documentation map rows over new index file |
| Evolution Backlog | `docs/FRAMEWORK-EVOLUTION-BACKLOG.md` | Must be discoverable + labelled non-roadmap |

---

## Identify

### 1. Missing documentation previously agreed but never created

| Item | Agreed where | Required for Alpha merge? |
| ---- | ------------ | ------------------------- |
| Thin ecosystem Informative overview (Option B) | Representation investigation; backlog Ready | **No** — Informative stewardship; Alpha Completion Assessment: not architectural gate |
| Dedicated consumer-surface page | PCB investigation optional | **No** — achieve via README + FA-004 |
| CHANGELOG | Release Communication deferred | **No** |
| CONTRIBUTING.md | Never agreed as separate file | **No** |
| Research folder README/index | Not agreed as mandatory | **No** if README map lists research |
| Case Studies | Deferred | **No** |

### 2. Existing documentation now outdated

| File | Issue |
| ---- | ----- |
| README Documentation map table | Omits Evolution Backlog and `docs/research/` |
| README Contributing | Omits FA-002 Amendment, ADR-002, FAIS, backlog pointers (Evolution Process Option D) |
| README maturity | Does not reflect Alpha Completion Assessment posture (architecture complete; application next) |
| AIS-001 Framework Documentation Map (illustration) | Does not show research/backlog; caption/alt omit them |
| FA-004 construction-pin Informative text | Does not explicitly exclude `docs/research/` and Evolution Backlog from pin expectations |

### 3. Broken links or incorrect references

Full-repo relative markdown link check: **0 broken links** among 50 markdown files at review time.

### 4. Duplicate explanations

| Topic | Guidance |
| ----- | -------- |
| How architecture evolves | Point Contributing → FA-002 Amendment, ADR-002, FAIS; do not restate ADR bodies in README |
| What Alpha means | Keep README maturity as single landing claim surface; research reviews cite it |
| RI role | Keep README Fitness Challenge + whitepaper Ch. 10; do not duplicate in research landing |

### 5. Reflect investigations through existing docs (not new docs)

| Investigation outcome | Reflect via |
| --------------------- | ----------- |
| Evolution Process Option D | README Contributing pointers |
| PCB Option D (surface now) | README documentation map + FA-004 pin exclusions |
| Release Communication Option D | No CHANGELOG; maturity remains claim surface |
| Alpha Completion Option A | README maturity one-line next-phase posture |
| Ecosystem Representation Option B | **Defer page**; discoverability via README research row until authored |

---

## Merge Checklist

### Must complete before merge

- [x] README Documentation map: add Evolution Backlog + research roles (non-Normative / non-pin)
- [x] README Contributing: point to FA-002 Amendment, ADR-002, FAIS, Evolution Backlog; state research ≠ law
- [x] README maturity: note Alpha architecture complete per M2; primary next focus is application (not Beta/1.0 claim)
- [x] FA-004 construction-pin Informative text: explicitly exclude research and Evolution Backlog from normative pin set
- [x] Record this Merge Readiness Review under `docs/research/`

### Recommended before merge

- [x] Alpha Adoption Guide §6: one sentence that Framework-relevant lessons may become Evolution Backlog candidates (optional intake path)
- [x] FA-003 “How to read this repository”: one Informative bullet that README lists research/stewardship separately from Assets
- [ ] PR description / merge commit message: state research is Informative stewardship, not consumer Baseline

### Can wait until Beta

- [ ] AIS-001 illustration regeneration to include research/backlog
- [ ] Ecosystem architecture Informative overview page (Option B)
- [ ] Dedicated consumer-surface page (if still needed after README/FA-004)
- [ ] CHANGELOG (await Release Communication triggers)
- [ ] CONTRIBUTING.md file (only if README Contributing proves insufficient)
- [ ] Getting Started / Agent Pack / published consumer Baseline (explicitly not Alpha)

---

## Required edits

### Edit 1 — README Documentation map

| Field | Value |
| ----- | ----- |
| **File** | `README.md` |
| **Reason** | After PR #2, stewardship/research artefacts exist on the branch but are absent from the human documentation map — merge would hide or mis-frame them. |
| **Exact change** | In section **Documentation map**, add rows for Evolution Backlog and `docs/research/`, stating Informative stewardship / investigation roles and that they are not Normative Framework law and not a published consumer Baseline. |

### Edit 2 — README Contributing

| Field | Value |
| ----- | ----- |
| **File** | `README.md` |
| **Reason** | Evolution Process investigation Option D: product-evolution rules exist but Contributing does not point to them; required for contributor coherence on `main`. |
| **Exact change** | Expand **Contributing** to cite FA-002 Amendment, ADR-002 (Baseline evolution / migration), FAIS, and the Evolution Backlog; state that `docs/research/` is Informative investigation material, not Framework law. |

### Edit 3 — README maturity posture

| Field | Value |
| ----- | ----- |
| **File** | `README.md` |
| **Reason** | Alpha Completion Assessment Option A should be visible on the landing page without inventing Beta/1.0. |
| **Exact change** | After the maturity table (or within Current maturity), add a short Informative note: Runtime Foundation M2 / Architecture Foundation / FA-001–024 mean Alpha architecture is complete for Alpha’s declared meaning; primary next focus is application and feedback (not a production-ready or 1.0 claim). |

### Edit 4 — FA-004 construction pin exclusions

| Field | Value |
| ----- | ----- |
| **File** | `docs/FA-004-PINNING-AND-BASELINE-GUIDE.md` |
| **Reason** | PCB / consumer-surface coherence: construction pins must not be read as including research or backlog after those land on `main`. |
| **Exact change** | In the Informative construction-pin subsection, state that `docs/research/`, the Evolution Backlog, and similar stewardship/investigation material are **not** part of the normative pin set unless a future published Baseline explicitly includes them. |

### Edit 5 — Merge readiness review on branch

| Field | Value |
| ----- | ----- |
| **File** | `docs/research/ALPHA-MERGE-READINESS-REVIEW-PR-2.md` (this document) |
| **Reason** | Record checklist and required edits for merge auditability. |
| **Exact change** | Add this review file. |

---

## Missing files

**None required for Alpha merge consistency.**

Do **not** create for merge:

- Framework Assets
- ADRs
- Getting Started
- Agent Pack
- CONTRIBUTING.md
- CHANGELOG
- Ecosystem architecture page
- Speculative governance docs

---

## Link check

| Check | Result |
| ----- | ------ |
| Relative markdown links (repo-wide) | **0 broken** at review time |

---

## End of Alpha Merge Readiness Review
