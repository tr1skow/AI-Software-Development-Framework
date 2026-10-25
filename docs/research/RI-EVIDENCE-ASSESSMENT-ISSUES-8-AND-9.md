# RI Evidence Assessment — Issues #8 and #9

| Attribute | Value |
| --------- | ----- |
| Document | RI Evidence Assessment — Interactive Human Decision Gate (#8) and Repository Authority Bootstrap (#9) |
| Classification | Informative / Research (RI evidence assessment) |
| Status | Complete — independent dispositions recorded |
| Framework baseline | Framework v0.2.1; Runtime Foundation M2 |
| Related | [Issue #8](https://github.com/tr1skow/AI-Software-Development-Framework/issues/8); [Issue #9](https://github.com/tr1skow/AI-Software-Development-Framework/issues/9); Evolution Backlog items [14](../FRAMEWORK-EVOLUTION-BACKLOG.md) and [15](../FRAMEWORK-EVOLUTION-BACKLOG.md); RI-001 `docs/reference-implementation/observations.md` |
| Kind | Coordinated RI evidence assessment with **two independent** dispositions — **not** an ADR, Framework Asset, FEA, Governance Decision, or Normative amendment |

**Investigation only.** This report does **not** assume either Candidate is a
Framework defect or FEA-ready. A Met maturity trigger may justify a bounded
Informative/operational Design Investigation; it does **not** automatically
justify FEA, new Norms, or Runtime changes. It does **not** merge #8 and #9,
close them, or amend Normative ADRs/Assets. Human acceptance of this report is
required before any Issue-status action.

If this document and an Accepted ADR or labelled Framework Asset appear to
disagree, the Accepted ADRs and labelled Framework Assets are authoritative.

---

## 1. Design Review (GD-001) — this documentation package

| Output | Result |
| ------ | ------ |
| Confirmed scope | One Informative `docs/research/` report assessing Issues #8 and #9 independently against Framework `main` and RI evidence. **Out of scope:** Normative edits; FEA; new Issues; consuming-repo changes; mandatory agent scripts/gates. |
| Confirmed acceptance criteria | Authority map; original RI-001 evidence; cross-project scan; six maturity-trigger results; SDF vs SDOF ownership; independent recommendations; #8/#9 left open. |
| Implementation recommendation | **Proceed** (docs-only) |
| Architecture Review decision | **Not required** |
| Classification | Justified **`trivial`** — Informative research only |

Human Decision Owner: Framework steward (`tr1skow`).

---

## 2. Shared authority mapping (Phase A)

| Topic | Normative today | Informative / packaging | Genuinely unspecified |
| ----- | --------------- | ----------------------- | --------------------- |
| Human owns material binds / Approval | FA-002; FA-015; ADR-004; FA-019 (Decision Support ≠ Approval) | Invocation Guide Human Authority cues | Chat UX scripts (“one question at a time”) |
| Stop on silent invention / missing authority | FA-002 P4; ADR-003; ADR-004 failure model; FA-009 | Invocation Stop cues | Vendor-specific wait/resume protocols |
| Entry-first agent discovery; repo > prompt/memory | FA-005 agent discovery contract (MUST locate Entry first; never treat README/chat/memory as root; Stop on conflict) | Invocation § Discover governance roots; FA-005 Day-0 narrative | Tool-specific bootstrap macros |
| Pin / Baseline local resolution | FA-004; ADR-002 | Invocation pin steps | Published consumer Baseline packaging (Backlog item 7 — distinct) |
| Classification / Decision Support / Discovery | FA-009; FA-019/020; FA-023 | Depth cues, templates | Interactive questionnaire ceremony |

**Cross-cutting Normative sequence already identifiable (without new Norms):**

1. Discover Entry → Policy → pin (FA-005 / Invocation).
2. Effective Classification (FA-009).
3. Bound capabilities only; Stop when blocked (FA-002 / ADR-004).
4. Material binds via Decision Support + Human Decision Owner (FA-019); Acceptance via Approval (FA-015).
5. Never self-approve; never invent precedence (ADR-004).

---

## 3. Assessment A — Issue #8 (Interactive Human Decision Gate)

### 3.1 Candidate question

Whether existing Human Authority, Decision Support, Approval, and Stop guidance
defines interactive **stop-and-resume** behaviour clearly enough (options,
recommendation, focused question, wait, record, bounded resume) — Backlog item 14.

### 3.2 Original RI-001 evidence

| ID | Class (RI catalog) | What it actually shows | Relevance to #8 |
| -- | ------------------- | ---------------------- | --------------- |
| **OBS-025** (VALIDATION-006) | **Positive validation** | Stop prevented semantic drift; Decision Owner required `acceptable` before Effective Classification | **Authority applied correctly** — Stop + Human Decision Owner worked |
| **OBS-027** (VALIDATION-007…018) | **Positive validation** | Early recommendations can conceal design choices; Decision Owner clarification or minimal Decision Support before Classification was proportionate | **Authority applied correctly** / successful Decision Support use — not a Normative defect |
| **VALIDATION-020** / **OBS-037** | **Documentation improvement** (OBS-037) | Non-blocking follow-up disposition needed Project Policy specialisation; per-change Review/Approval/Merge alone did not operationalise durable cross-change finding closure | **Weak / adjacent** — finding disposition lifecycle, not interactive decision-gate UX. Project-local Policy sufficiency without Framework baseline change |

Pinned public tip for related RI packaging notes historically cited `37a201ce…`;
current `main` observations catalog remains the living RI evidence surface
(immutable SHAs for specific validations live in RI validation records).

### 3.3 Later cross-project evidence (search themes)

| Theme | Evidence | Classification |
| ----- | -------- | -------------- |
| Agents inferring material decisions despite Stop | RI Policies in SafeHouse, Budget Buddy, Vagtplan App, Fitness explicitly forbid agent self-approval and require Stop/Escalate on scope/authority gaps; OBS-005/025/040 show Draft≠Effective and Stop under automation | **Insufficient evidence** of Normative failure pattern; observed practice is **authority applied correctly** |
| Proceeding without Decision Owner acceptance | OBS-005 reinforced across many validations: Human Acceptance / Ready/merge remain separate Human Direction | **Authority applied correctly** |
| Repeated project interactive stop-resume / HDQ / Orchestrator gates | Fitness HDQ records across many validations (e.g. OBS-005 Draft≠Effective / Human Direction; HDQ-CS / HDQ-CB patterns cited in OBS/VALIDATION narrative); SafeHouse and Budget Buddy Orchestrator disposition / Review Scope wait-for-Human patterns; Vagtplan App Policy review-orchestration gates A–D requiring Orchestrator disposition before Ready/merge continuation | **Recurring local interactive decision mechanisms** — Project Policy / operating specialisations of existing Norms. Demonstrates trigger-(b) *need*; does **not** by itself prove Normative insufficiency |
| Ambiguity of question/wait/record/resume | Normative “record Decision Support Outcome / Approval Decision” exists; conversational UX script does not | **Framework discoverability / Informative packaging** residual — not demonstrated Normative hole |

### 3.4 Maturity triggers (must not raise or lower threshold)

Trigger wording is taken **verbatim** from Evolution Backlog item 14 / Issue #8.
A Met trigger means the Candidate is timely for the backlog’s stated next step
(**Design Investigation of Informative/operational packaging**). It does **not**
require proof that local gates invent missing Normative Framework law, and it
does **not** by itself authorise FEA, new Norms, or Runtime changes.

| Trigger (Issue #8 / item 14) | Determination | Rationale |
| ---------------------------- | ------------- | --------- |
| (a) Two or more independent RI/Alpha sessions where agents infer material decisions **despite** existing Stop/Human Authority | **Not met** | Cited OBS-025/027 are Positive validations of Stop/Decision Owner, not inference failures. No second verified independent failure session established in this assessment. |
| (b) Repeated need for local ad-hoc interactive decision gates | **Met** | Exact trigger asks whether projects repeatedly needed **local interactive decision gates**, not whether those gates invent missing Framework law. Repository-traceable recurrence: (1) Fitness RI HDQ / Human Direction stop-and-wait patterns across multiple validations; (2) SafeHouse and Budget Buddy Orchestrator / Review Scope disposition gates that require Human Direction before material continuation; (3) Vagtplan App Policy mandatory review-orchestration gates (A–D) encoding interactive disposition before Ready/merge. These are intentional Project Policy specialisations of FA-019/015/Stop, yet they are still **local interactive decision gates** under the trigger’s actual wording. **Evidence strength:** medium–high (multi-repo, multi-validation Policy/HDQ practice). **Limitations:** “ad-hoc” is read as project-local/invented-for-the-repo rather than pejorative; gates are not a single shared UX script; chat-only episodes without repository traces were not counted. |
| (c) Stewards cannot identify one clear operational sequence covering question, wait, record, bounded resume | **Not met** | Stewards **can** identify Normative sequence: Stop → Decision Support (options/recommendation/record) → wait for Human Decision Owner → bound resume → Approval when acceptance required. “One focused question at a time” remains **Informative/UX packaging**, not a missing Normative capability. |

### 3.5 Ownership

| Potential gap | Owner |
| ------------- | ----- |
| Do not infer material binds; Stop; human Approval | **Existing SDF Normative** — already sufficient |
| Interactive conversational packaging of stop-resume (options → one focused question → wait → record → bounded resume) | **Informative SDF** (Invocation / Decision Support teaching) and/or **SDOF** agent packaging — **timely for bounded Design Investigation** after trigger (b) |
| Project HDQ / Orchestrator gates | **Project Policy** (observed recurrence; inputs to packaging investigation) |
| New Runtime capability / mandatory questionnaire / extra Human gate | **Not justified** by trigger (b) alone |

**SDOF overlap:** closed [SDOF #51](https://github.com/tr1skow/Software-Development-Operating-Framework/issues/51) (*Decision Support before mechanism commitment…*) addresses adjacent operating Decision Support timing — do **not** duplicate. No new SDOF tracker recommended from this assessment alone unless the Design Investigation later identifies a distinct operating-only residual.

### 3.6 Recommendation for #8

| Layer | Conclusion |
| ----- | ---------- |
| Normative SDF sufficiency | **Already sufficient** for Stop, Decision Support, Approval, Human Authority — unchanged by trigger (b) |
| Maturity | Trigger **(b) Met** → Candidate is timely for backlog-stated **Design Investigation of Informative/operational packaging** |
| FEA / Normative / Runtime | **Not justified** — Met packaging trigger ≠ Framework defect or FEA readiness |
| **Recommended Issue disposition** | **Promote to a bounded Informative/operational Design Investigation** (stop-and-resume packaging discoverability under existing FA-019/015/Stop/Invocation). Keep #8 open as tracker until that investigation is Human-accepted. **Do not** FEA; **do not** add Norms, Runtime peers, mandatory questionnaires, or extra Human gates. |

---

## 4. Assessment B — Issue #9 (Repository Authority Bootstrap)

### 4.1 Candidate question

Whether Entry-first, pin, baseline, and authority guidance fully defines the
agent’s **initial authority-discovery behaviour** (not only packaging) —
Backlog item 15. Distinct from item 7 (Published Consumer Baseline packaging).

### 4.2 Original RI-001 evidence

| ID | Class | What it shows | Relevance to #9 |
| -- | ----- | ------------- | --------------- |
| **OBS-001** (VALIDATION-001) | **Positive validation** | Entry-first discovery removed rival-root ambiguity (README / chat / FCDF) | **Authority applied correctly** — validates FA-005 direction |
| **OBS-010** (VALIDATION-001) | **Documentation improvement** | Dual project paths easy to mix without Entry-first discipline | **Discoverability** — discipline failure risk if Entry-first not followed; not proof Norms absent |
| **OBS-011** (VALIDATION-001) | **Candidate for Beta** | Construction pin via sibling checkout vs vendoring/published consumer Baseline caused Alpha portability friction | Primarily **packaging / item 7** adjacent — not bootstrap-behaviour Normative gap |
| **Pin-lag stewardship observation** (RI GD-001 Phase 6 Design Review; cited in backlog item 15 Notes) | Stewardship note | Framework pin lag observed in RI stewardship | Stewardship/packaging signal; **insufficient** alone as Normative bootstrap defect |

### 4.3 Later cross-project evidence

| Theme | Evidence | Classification |
| ----- | -------- | -------------- |
| Prompt/chat/memory over Entry/Policy/pin | FA-005 Normatively forbids; all four RI Entries declare Entry as discovery root; Policies restate repository-first / no chat-as-authority | **Insufficient evidence** of two verified independent Normative-failure sessions; observed design is Entry-first |
| Continuing despite missing/conflicting authority | OBS-025/040 Stop behaviour; RI Policies Stop/Escalate | **Authority applied correctly** in recorded cases |
| Custom bootstrap procedures | Project Entries list ordered discovery steps (SafeHouse/Budget/Vagtplan/Fitness) pointing at pin + Policy + Invocation | **Project Entry implementations** of FA-005/Invocation — expected specialisation, not Framework defect |
| Pin resolution mistakes | OBS-011 portability friction; construction-pin practice | **Packaging / discoverability** (item 7 / FA-004 teaching) more than missing bootstrap Norm |

### 4.4 Maturity triggers

| Trigger (Issue #9 / item 15) | Determination | Rationale |
| ---------------------------- | ------------- | --------- |
| (a) Two or more independent sessions treating prompt/chat/memory above Entry/Policy/pin | **Not met** | No two verified independent failure sessions documented here; OBS-001 is Positive validation of Entry-first. |
| (b) Agents continuing despite conflicting or missing authority instructions | **Not met** | Recorded RI evidence emphasises Stop under missing/conflicting authority; insufficient verified counterexamples as Framework defect. |
| (c) Stewards cannot identify one operational bootstrap sequence (entry, status, precedence, Stop) | **Not met** | **Identifiable today:** FA-005 agent discovery contract §§1–8 + Invocation Guide “Discover the project's governance roots” + ADR-003 precedence/Stop. |

### 4.5 Ownership

| Potential gap | Owner |
| ------------- | ----- |
| Entry-first; repo > memory; Stop on conflict/missing | **Existing SDF Normative (FA-005 / ADR-003 / ADR-004 / Invocation)** — **sufficient** |
| Construction-pin / published consumer Baseline portability | **Backlog item 7 / packaging** — keep distinct |
| Dual-path confusion (OBS-010) | **Informative discoverability** + project Entry hygiene |
| Tool-specific bootstrap macros | **SDOF / Agent Pack / Project Policy** — must consume FA-005, not replace Entry |
| New Normative bootstrap Runtime capability | **Not justified** |

**SDOF overlap:** no open SDOF Issue found that uniquely owns “Repository Authority Bootstrap” as a Normative SDF gap. Closed operating Issues (#42, #51, etc.) must not be reopened as duplicates of #9. Agent Pack / coordinator adapters (e.g. historical SDOF packaging Issues) remain operating-layer only.

### 4.6 Recommendation for #9

| Layer | Conclusion |
| ----- | ---------- |
| Normative SDF sufficiency | **Already sufficient** — FA-005 agent discovery contract + Invocation session discipline answer the Candidate’s behavioural question |
| Maturity / FEA / Design Investigation | **Not established** — all three triggers **Not met** |
| Residual | Informative discoverability (OBS-010) and packaging/portability (OBS-011 / item 7) |
| **Recommended Issue disposition** | **Close as sufficiently covered** regarding the Normative bootstrap-behaviour hypothesis (Human may close #9 after accepting this assessment). Optionally keep packaging concerns under **item 7** / Informative teaching — **do not** FEA #9; **do not** merge into #8. |

---

## 5. Combined maturity matrix (six triggers)

| Issue | Trigger | Result |
| ----- | ------- | ------ |
| #8 | (a) Multi-session material inference despite Stop/HA | **Not met** |
| #8 | (b) Repeated ad-hoc interactive decision gates | **Met** |
| #8 | (c) No identifiable question/wait/record/resume sequence | **Not met** |
| #9 | (a) Multi-session prompt/memory > Entry | **Not met** |
| #9 | (b) Continue despite missing/conflicting authority | **Not met** |
| #9 | (c) No identifiable bootstrap sequence | **Not met** |

**#8:** trigger (b) **Met** → timely for **Informative/operational Design Investigation** only (per item 14 Expected Investigation Type). **Not** FEA-ready; Normative sufficiency unchanged.  
**#9:** all triggers **Not met** → Normative bootstrap behaviour **sufficiently covered**; no Design Investigation required for #9 on this evidence.

---

## 6. Proportionality

| Proposal | Verdict |
| -------- | ------- |
| New Normative interactive questionnaire / Human gate | **Reject** |
| New Normative bootstrap Runtime capability | **Reject** |
| Mandatory prompt scripts / universal agent workflows | **Reject** |
| FEA for #8 or #9 now | **Reject** — Met packaging trigger ≠ FEA |
| Bounded Informative/operational Design Investigation for #8 stop-resume packaging | **Recommend** — authorised next step after trigger (b) |
| Bounded Informative clarification for #9 | **Not required** for Normative bootstrap; packaging/portability stays with item 7 |
| New Issues | **None** without distinct evidenced need |
| Duplicate SDOF trackers | **Avoid** — cite #51 (closed) adjacency for Decision Support operating timing only |

---

## 7. Independent recommendations (summary)

| Issue | Recommended disposition | Normative sufficiency | Next bar |
| ----- | ----------------------- | --------------------- | -------- |
| **#8** | **Promote to bounded Informative/operational Design Investigation** (packaging discoverability) | Sufficient | Design Investigation may recommend Informative teaching and/or SDOF packaging; **not** FEA/Norms unless later evidence appears |
| **#9** | **Close as sufficiently covered** (Normative bootstrap behaviour) | Sufficient | Packaging/portability → item 7 / Informative; do not FEA #9 |

Do **not** merge #8 and #9. Do **not** auto-close either Issue in this PR.

---

## 8. Explicit uncertainties and non-claims

**Uncertainties**

- Private RI validation bodies beyond `observations.md` / VALIDATION-020 title were not exhaustively re-read line-by-line; primary OBS classifications were taken from the RI observations catalog on Fitness `main`.
- Absence of harvested failure sessions is **not** proof failures never occur in chat — only that **repository-traceable** multi-session trigger-(a)/(#9) failure evidence was **not met**.
- Trigger (b) for #8 is assessed against **repeated local interactive decision-gate need**, separately from Normative sufficiency; chat-only episodes without repository traces were excluded.
- Pin-lag stewardship note remains stewardship-coloured; not independently re-litigated as a separate validation ID in this report.

**Non-claims**

- Does not declare Framework defects for #8/#9.
- Does not start FEA or Design Investigation.
- Does not amend Normative ADRs/Assets or add Human gates.
- Does not close #8 or #9 by itself.
- Does not modify consuming repositories, repin, release, or deploy.
- Does not treat Positive validations or successful Policy specialisations as maturity-trigger failures.
