# RI Validation — AS-IS / TO-BE Scope Boundaries (Issue #19)

| Attribute | Value |
| --------- | ----- |
| Document | RI Validation — AS-IS / TO-BE Scope Boundaries |
| Classification | Informative / Research (RI validation assessment) |
| Status | Complete — observational findings and dispositions recorded |
| Framework baseline | Framework v0.2.1; Runtime Foundation M2 |
| Related | [Issue #19](https://github.com/tr1skow/AI-Software-Development-Framework/issues/19); SafeHouse Issue [#173](https://github.com/tr1skow/SH-vagtplan-app/issues/173), PRs [#267](https://github.com/tr1skow/SH-vagtplan-app/pull/267), [#272](https://github.com/tr1skow/SH-vagtplan-app/pull/272); SDOF siblings [#42](https://github.com/tr1skow/Software-Development-Operating-Framework/issues/42), [#50](https://github.com/tr1skow/Software-Development-Operating-Framework/issues/50) |
| Kind | RI validation assessment — **not** a Design Investigation selecting Norms, Engineering Review of a Normative change, Framework Asset, ADR, Governance Decision, or Runtime amendment |

**This assessment is investigation only.** It classifies RI learnings against
current Framework authority. It does **not** amend Normative ADRs, Framework
Assets, Governance Decisions, or Runtime semantics. It does **not** create
mandatory gates, templates, registers, or acceptance processes. It does **not**
import SafeHouse architecture, Issue numbers, or operating practices as
Framework law.

If this document and an Accepted ADR or labelled Framework Asset appear to
disagree, the Accepted ADRs and labelled Framework Assets are authoritative.

---

## 1. Design Review (GD-001) — this documentation package

| Output | Result |
| ------ | ------ |
| Confirmed scope | One Informative research report under `docs/research/` assessing Issue #19’s six primary observations against Framework `main` and SafeHouse evidence. Optional README/research discoverability is **out of scope** unless separately directed. |
| Confirmed acceptance criteria | Six-row evidence-and-disposition matrix; proportionality challenges; SDOF sibling identification without duplicate Issues; no Normative edits. |
| Implementation recommendation | **Proceed** (docs-only Informative report) |
| Architecture Review decision | **Not required** — no Capability Semantics, Baseline, Project Integration Norm, or Method change |
| Classification | Justified **`trivial`** — Informative research only; no behaviour or Normative surface change |

Human Decision Owner for acceptance of this assessment packaging: Framework
steward (`tr1skow`). Merge of the introducing PR is Human acceptance of the
**report as Informative evidence**, not of any Normative candidate.

---

## 2. Authority snapshot (Phase A)

### 2.1 Public Framework (current `main`)

| Concern | Existing coverage (summary) |
| ------- | --------------------------- |
| Proportionate ceremony / Progressive Commitment | [FA-002](../FA-002-METHOD-SPINE.md) P2–P3 |
| Stop on missing/conflicting authority or silent invention | FA-002 P4; [ADR-003](../adr/ADR-003-PROJECT-INTEGRATION-AND-PRECEDENCE.md); [FA-009](../FA-009-CHANGE-CLASSIFICATION-GUIDE.md) |
| Classification binds capability **depth**; reclassify on material scope change | FA-009 |
| Review = proportionate independent challenge at bound depth; findings recorded for Approval | [FA-011](../FA-011-REVIEW-GUIDE.md), [FA-012](../FA-012-REVIEW-OUTCOME-TEMPLATE.md) |
| Discovery sufficiency / Stop when facts missing | [FA-023](../FA-023-DISCOVERY-GUIDE.md) |
| Planning out-of-scope / no silent scope expansion | [FA-021](../FA-021-PLANNING-GUIDE.md) |
| Thin Local Project Entry; declare and point | [FA-005](../FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md); ADR-003 §2.2 |
| Design vs Architecture vs Implementation governance | [GOVERNANCE.md](../governance/GOVERNANCE.md); [GD-001](../governance/GOVERNANCE_DECISIONS/GD-001-Design-Review.md) |
| Framework First / RI evidence ≠ Norms | GOVERNANCE.md; Evolution Backlog items 3–4 |

**Gap relative to Issue #19 vocabulary:** the public Framework does **not**
define Normative artefact types named “AS-IS” or “TO-BE”, does **not** prescribe
universal architecture templates, and does **not** Normatively require a
finding-disposition register or substantive-head / provenance-head lifecycle.

### 2.2 SafeHouse evidence (primary RI source)

| Artefact | Evidence used |
| -------- | ------------- |
| Issue [#173](https://github.com/tr1skow/SH-vagtplan-app/issues/173) | Prospective design/ADR track; closed completed after AS-IS/TO-BE |
| PR [#267](https://github.com/tr1skow/SH-vagtplan-app/pull/267) | Canonical AS-IS; Human acceptance of substantive head `835270d2…`; later provenance/authority commits; explicit non-scope (no TO-BE/remediation/implementation) |
| PR [#272](https://github.com/tr1skow/SH-vagtplan-app/pull/272) | Rebuilt TO-BE under Rev 6; clean-sheet recovery after drift; WHAT-not-HOW ceiling; repeated Ready-review disposition; substantive vs provenance heads (see Issue #19 body + completion comments for exact SHA lineage including later `e00e4b36…` / `0358e86…` / `6ad35ed…`) |
| Accepted `docs/architecture/AS-IS.md` on SafeHouse `main` | Records defects/UNVERIFIED/residuals; does not select target remediation |
| Accepted `docs/architecture/TO-BE.md` on SafeHouse `main` | States “what the target architecture must guarantee”; does not prescribe later implementation HOW |

### 2.3 SDOF (operating layer) — sibling Issues (do not duplicate)

| Issue | State | Relevance |
| ----- | ----- | --------- |
| [SDOF #42](https://github.com/tr1skow/Software-Development-Operating-Framework/issues/42) | **Closed / completed** | Finding disposition before correction; stop/reassess on abstraction drift; authority-overclaim check; substantive vs provenance evidence semantics; mutable-status reference-over-sync — adopted in Operating Core via SDOF PR #45. Explicitly left public artefact-abstraction semantics to SDF #19. |
| [SDOF #50](https://github.com/tr1skow/Software-Development-Operating-Framework/issues/50) | **Closed / completed** | Narrower follow-up: explicit scope/abstraction ceiling in independent-review **handoffs** (not universal prompt schema). Cross-project project-local validations (SafeHouse #374, Fitness #358, Budget Buddy #38). |

**Follow-up recommendation:** do **not** open a new SDOF Issue for the six
primary #19 observations. Operating-layer controls already have completed
sibling disposition. Any residual SDOF question should cite #42/#50 rather than
re-open parallel trackers.

---

## 3. Six-row evidence-and-disposition matrix

Disposition vocabulary (per Issue #19):

- **Already adequately covered**
- **Informative clarification candidate**
- **Normative Framework change candidate** (requires separate approval — **not** adopted here)
- **Operating-layer concern for SDOF**
- **Project-specific or insufficient evidence**

| # | Observation | Concrete source evidence | Failure mechanism observed | Applicable existing authority | Guidance sufficient? | Cross-project generalizability | Owner | Recommended disposition |
| - | ----------- | ------------------------ | -------------------------- | ----------------------------- | -------------------- | ------------------------------ | ----- | ----------------------- |
| 1 | **AS-IS scope containment** | SafeHouse PR #267; accepted AS-IS records defects/gaps/UNVERIFIED without selecting TO-BE/remediation; explicit PR non-scope | Current-state work naturally surfaces defects; without a scope invariant, authors/reviewers may select remedies inside the AS-IS artefact | FA-023 Discovery sufficiency; FA-002 Progressive Commitment / Proportionate Ceremony; FA-021 out-of-scope; no Normative “AS-IS” type | **Partially** — Method proportionality exists; explicit AS-IS containment vocabulary does not | High as a *documentation practice* for brownfield characterisation; not proven as universal Norm need | **SDF Informative** (optional teaching); **project** owns concrete AS-IS artefacts | **Informative clarification candidate** — optional discoverable teaching that current-state characterisation may record defects without selecting target architecture/remediation. **Not** a Normative artefact type or mandatory template. |
| 2 | **TO-BE abstraction ceiling** | SafeHouse TO-BE: “what the target architecture must guarantee” / not HOW; Rev 6 clean-sheet rebuild after implementation drift (PR #272; Issue #19) | Iterative “fix every finding” pushed architecture docs into endpoints, DTOs, CI, migration sequencing | GOVERNANCE Architecture vs Implementation; GD-001 Design Review; FA-019 Decision Support vs Implementation; FA-021 Planning; no Normative “TO-BE” type | **Partially** — governance domains exist; explicit architecture-guarantee vs mechanism ceiling is not named in FA/ADR text | High for architecture/design artefacts; SafeHouse pattern is strong but template form is project-shaped | **SDF Informative**; **project** for concrete TO-BE; SDOF for review handoff (#50 done) | **Informative clarification candidate** — teaching that architecture-level artefacts may state guarantees, ownership, boundaries, and later gates without deciding downstream mechanisms unless the mechanism *is* the architectural decision. **Reject** universal TO-BE templates. |
| 3 | **Review finding disposition by artefact layer** | PR #272 Ready-review rounds; Issue #19 comments — technically valid findings that were downstream/implementation; disposition against Rev 6 ceiling stabilized work | Treating every valid technical finding as current-artefact-blocking expands scope | FA-011 Review at bound depth; FA-009 Classification/scope; FA-012 findings/residual risks; FA-002 Proportionate Ceremony | **Runtime Norms sufficient for depth/challenge**; **explicit disposition vocabulary is operating practice** | High — Human Decision Owner also reports Fitness pattern; review-downstream drift still only partly repository-verified outside SafeHouse | **SDOF** (adopted in #42); SDF may add light Informative pointer only | **Operating-layer concern for SDOF** (already completed via #42). For SDF: **Already adequately covered** at Normative Review/Classification level; optional **Informative clarification candidate** that findings should be material to the artefact/change under review — **not** a mandatory disposition register or new Review Outcome enum. |
| 4 | **Authority-overclaim during review/rewriting** | SafeHouse paraphrase broadened ADR-001 beyond accepted schedule/intro/capacity mutation scope (Issue #19); caught by comparing wording to ADR | Summaries/examples accidentally expand Normative authority | ADR-003 specialisation / invalid contradiction; FA-002 Human Authority & Stop; FA-001 Normative labelling; FA-011 challenge of rationale | **Yes for Normative prohibition**; **named review check is operating** | Medium–high — pattern is general whenever artefacts paraphrase Norms; one SafeHouse instance is enough for Informative teaching, thin for new Normative category | **SDOF** operating check (#42 adopted); **SDF Informative** example optional | **Operating-layer concern for SDOF** (done). SDF: **Already adequately covered** Normatively; optional **Informative clarification candidate** (example of paraphrase-overclaim) — **reject** new mandatory “authority-overclaim” Review category. |
| 5 | **Repeated correction loops and clean-sheet recovery** | Multiple TO-BE correction cycles → abstraction drift; recovery: stop loop, preserve inputs, rebuild clean-sheet, declare ceiling, consolidated review (Issue #19; PR #272) | Locally valid micro-patches aggregate into purpose/abstraction change | FA-009 reclassify on material scope change; FA-002 Stop; Evolution Backlog item 9 (Stop Consolidation) Candidate; SDOF DELIVERY-WORKFLOW stop/reassess (#42) | **Operating stop/reassess now covered in SDOF**; SDF Stop semantics not shown defective | High as operating heuristic; Normative new Runtime Stop trigger not evidenced as Framework defect | **SDOF** (adopted); SDF backlog item 9 remains separate Candidate if needed | **Operating-layer concern for SDOF** (done). SDF: **Already adequately covered** by existing Stop/reclassify *if applied*; do **not** add mandatory reset gates. Optional Informative pointer only. |
| 6 | **Substantive revision acceptance vs provenance-only updates** | Human acceptance bound to exact substantive heads (e.g. AS-IS `835270d2…`; TO-BE lineage including `7983943…` / later `e00e4b36…`); later provenance/status/navigation commits without substance change; mutable-status sync across many files (Issue #19 comments; PR #380/#381 cross-record contradiction evidence) | Acceptance/status copied into many discovery surfaces → churn and contradictory authority copies | FA-015 Approval (human acceptance of change); FA-005/ADR-003 thin Entry; Fitness Issue #222 thin-Entry corroboration | **Thin-entry Norms exist**; exact substantive-vs-provenance **evidence practice** is project/SDOF | High for authority hygiene; exact dual-head workflow is project/GitHub-shaped | **Project** + **SDOF** (#42 reference-over-sync); SDF Informative for thin Entry hygiene | **Operating-layer / project** primary. SDF: **Already adequately covered** by thin Entry + Approval semantics for *not inventing* dual ledgers as Norms; optional **Informative clarification candidate** (prefer one canonical owner for mutable status; bind material acceptance to an identified revision). **Reject** new Runtime acceptance/provenance process. |

---

## 4. Proportionality assessment (Phase C)

| Proposed improvement (challenged) | Assessment |
| --------------------------------- | ---------- |
| New mandatory Review gates | **Reject** — would increase ceremony; FA-011 + Classification already bind Review; SDOF already added operating disposition without new Human gates |
| Universal AS-IS / TO-BE templates | **Reject** — SafeHouse forms are project evidence, not Framework law; Framework First forbids RI-as-Norm |
| Mandatory finding-disposition registers in SDF | **Reject** — SDOF Operating Core already owns disposition-before-correction; FA-012 already records findings/residual risks without a Normative layer taxonomy |
| Additional acceptance / provenance processes as Runtime | **Reject** — dual-head practice is evidence semantics; elevating to Runtime would create parallel lifecycle without proving Method failure |
| New Runtime semantics (Stop triggers, Review Outcome enums, artefact-type Norms) | **Reject for now** — existing Stop/reclassify/Review depth cover the Normative need; residual gaps are discoverability and operating application |
| Informative clarification / teaching | **Prefer when needed** — light, optional, non-binding; only if stewards later choose a bounded editorial PR |
| Rely on existing controls + completed SDOF siblings | **Prefer** — primary recommendation |

**Composition note (Issue #19 2026-08-27 comment package OBS-A…J):** broad
brownfield refactor ceremony amplification is a related proportionality
hypothesis. It is **not** independently dispositioned as Normative Framework
change in this report. Treat as **needs corroboration / largely SDOF + project
application** unless a separate bounded investigation is authorised. Do not
silently fold that package into Framework law via this assessment.

---

## 5. Cross-project applicability

| Signal | Status |
| ------ | ------ |
| SafeHouse AS-IS/TO-BE (#173 / #267 / #272) | **Primary repository-verified** evidence for all six observations |
| Fitness thin Entry / status hygiene (#222) | **Repository-verified** for mutable-status / reference-not-copy (obs. 6 adjacent) |
| Fitness automated review downstream-drift | **Human Decision Owner corroboration**; not fully harvested as review-thread evidence here — do not overstate |
| Budget Buddy / Fitness review-handoff Issues (#37/#38, #357/#358) | Project-local validation tracked under SDOF #50; **not** SDF Norms |
| SDOF #42 / #50 | **Completed** operating dispositions; upstream SDF semantics left to #19 |

**Generalization rule used here:** reusable *hypotheses* may be Informative;
Normative change requires Framework defect evidence under Framework First — not
demonstrated for new gates/templates/Runtime.

---

## 6. Explicit recommendations (summary)

1. **Publish this Informative assessment** as the Issue #19 investigation
   deliverable.
2. **Do not** amend ADR/FA/GD/Runtime in this change set.
3. **Do not** create Observation Catalogue, mandatory AS-IS/TO-BE templates,
   finding-disposition registers, or new acceptance Runtime.
4. **Do not** open a new SDOF Issue — use completed
   [#42](https://github.com/tr1skow/Software-Development-Operating-Framework/issues/42)
   and [#50](https://github.com/tr1skow/Software-Development-Operating-Framework/issues/50).
5. Optional later (separate Human-directed trivial editorial PR only if desired):
   short Informative pointers in FA-011 / FA-005 teaching sections — still not
   Normative amendments of ownership rules.
6. Leave Framework Issue **#19 open** until Human Decision Owner accepts this
   assessment and decides any follow-up editorial work.

---

## 7. Explicit non-claims

This report does **not**:

- declare SafeHouse practices Framework Norms or mandatory for other projects
- assert that the public Framework caused SafeHouse process overhead
- close Issue #19
- authorise Framework release, repin, SafeHouse production change, or SDOF change
- select Evolution Backlog maturity triggers as met for Normative work
- convert OBS-A…J ceremony-budget hypotheses into Framework requirements

---

## 8. Remaining questions (for stewards — not decided here)

1. Is any Informative FA teaching pointer worth a separate trivial editorial PR,
   or is this research report sufficient discoverability for #19?
2. Should Evolution Backlog item 3 (Validation Strategy) / item 4 (RI Strategy)
   Notes merely cite this report, without status change?
3. Is Fitness review-thread harvest still desired before any Informative Review
   teaching that cites cross-project review-drift?
