# Framework Evolution Backlog

| Attribute | Value |
| --------- | ----- |
| Document | Framework Evolution Backlog |
| Classification | Informative / Reference |
| Status | Living backlog — not a roadmap |
| Framework baseline | Framework 0.7 Alpha; Runtime Foundation M2 |
| Kind | Official Framework document (not a Framework Asset; not an ADR) |

**This document is Informative only.** It is not Normative Method, not
Normative Framework law, not an Architecture Decision Record, and not a
Framework Asset (`FA-###`).

**This is not a roadmap.** Listing an item does **not** approve work, commit
schedule, create governance, or impose mandatory tasks. Absence from this list
does not forbid future evidence-backed candidates.

If this document and an Accepted ADR or labelled Framework Asset appear to
disagree, the Accepted ADRs and labelled Framework Assets are authoritative.

---

## Purpose

Record **evolution candidates** that have already emerged through observations,
Design Investigations, Engineering Reviews, repository governance milestones,
or implementation experience.

Only **evidence-backed** candidates belong here. Do not invent topics to fill
the list.

For each item, **Maturity Trigger** records observable evidence that would make
further investigation timely. Triggers are **not** dates, milestones to force,
or commitments to act when evidence appears.

---

## Status values

| Status | Meaning |
| ------ | ------- |
| **Candidate** | Evidenced concern; not yet selected for active investigation |
| **Ready for Investigation** | Prior work cleared enough ambiguity that a focused investigation or Informative authoring step can start without inventing scope |
| **Under Investigation** | An investigation or review is actively in progress |
| **Deferred** | Evidenced, but deliberately postponed (often to preserve minimal governance) |
| **Completed** | The candidate’s intended investigative or Informative outcome is done |
| **Rejected** | Investigated or considered and not pursued |

---

## How to use

1. Add items only when origin evidence exists (link it in Notes).
2. Prefer updating status over duplicating items.
3. Keep Problem Statement and Expected Value about **uncertainty**, not delivery
   promises.
4. Never treat priority as a commitment.
5. Write **Maturity Trigger** as concrete, observable evidence (documents that
   exist, behaviours seen, conflicts reported) — not “when appropriate” and not
   calendar targets.
6. When status is **Ready for Investigation**, the trigger should state what
   evidence **already** made the item timely (and any remaining evidence needed
   for a later phase, if split).

---

## Backlog items

### 1. Framework Ecosystem Architecture Representation

| Field | Value |
| ----- | ----- |
| **Title** | Framework Ecosystem Architecture Representation |
| **Status** | Ready for Investigation |
| **Origin** | Implicit multi-domain practice (Framework product, stewardship, RI validation, Alpha evaluation, informal Community) surfaced during Framework 0.7 Alpha / M2 maturity work; investigated on the ecosystem research track. |
| **Problem Statement** | Adjacent domains operate without a single thin Informative boundary map. Category-error risk remains (Community/Research mistaken for Assets; RI mistaken for Norms; steward mistaken for Decision Owner). |
| **Expected Investigation Type** | Informative authoring follow-through after Architecture Decision Investigation (Option B: single thin Informative non-Asset overview page). Not an ADR; not an `FA-###`. |
| **Expected Value** | Reduce ambiguity about what is Framework product vs adjacent domains, without expanding Normative surface or creating governance/roles. |
| **Current Priority** | High |
| **Maturity Trigger** | **Already met.** Repository now holds coexisting Framework Assets, ADRs, Informative guides, `docs/research/` investigations, Evolution Backlog, and RI citations; three completed investigations recommend Option B. Further authoring is timely while readers can still confuse research/stewardship material with Normative product. Revisit scope only if a published consumer Baseline identity later changes what “product surface” means. |
| **Notes** | [Design Investigation](./research/DESIGN-INVESTIGATION-ECOSYSTEM-AND-GOVERNANCE-MODEL.md) (justified); [Engineering Review](./research/ENGINEERING-REVIEW-ECOSYSTEM-AND-GOVERNANCE-MODEL.md) (ready after refinement); [Representation Investigation](./research/ARCHITECTURE-DECISION-INVESTIGATION-ECOSYSTEM-REPRESENTATION.md) (**Option B**). Page not authored yet. |

---

### 2. Framework Evolution Process Discoverability

| Field | Value |
| ----- | ----- |
| **Title** | Framework Evolution Process Discoverability |
| **Status** | Ready for Investigation |
| **Origin** | Observation that product-evolution rules already exist (FA-002 Amendment, ADR-002, FAIS) but README Contributing does not point to them; investigated in the Framework Evolution Process Design Investigation. |
| **Problem Statement** | Contributors must reverse-engineer how Method, ADRs, Assets, and Baselines change. Substance exists; the Informative map is thin. |
| **Expected Investigation Type** | Lightweight Informative integration into existing surfaces (especially README Contributing), per Option D — not a new mandatory process. |
| **Expected Value** | Reduce contributor uncertainty about *existing* product-evolution authorities without inventing approval stages or freezing research habits. |
| **Current Priority** | High |
| **Maturity Trigger** | **Already met.** README Contributing still lacks pointers to FA-002 Amendment, ADR-002, and FAIS while `docs/research/` and this backlog exist as parallel evolution surfaces; Design Investigation Option D recorded the discoverability gap as the stable part to fix first. |
| **Notes** | [Design Investigation — Framework Evolution Process](./research/DESIGN-INVESTIGATION-FRAMEWORK-EVOLUTION-PROCESS.md) (**Option D**). Explicitly separates this from prescribing the investigative activity chain. |

---

### 3. Framework Validation Strategy

| Field | Value |
| ----- | ----- |
| **Title** | Framework Validation Strategy |
| **Status** | Candidate |
| **Origin** | Alpha evaluation packaging, RI “validation” role (M2 Declaration / whitepaper Ch. 10), and ecosystem investigation open questions on Beta claim defensibility and whether a Validation Program should exist. |
| **Problem Statement** | Maturity labels (Alpha / Beta / 1.0) are positioning, not an evidence protocol. Unclear what evidence would make Beta/1.0 claims defensible without inventing heavy research bureaucracy. |
| **Expected Investigation Type** | Design Investigation (possibly followed by Engineering Review). |
| **Expected Value** | Reduce uncertainty about evidence thresholds and validation posture while keeping evaluation voluntary and separated from adoption. |
| **Current Priority** | Medium |
| **Maturity Trigger** | Timely when **any** of these are observed: (a) two or more independent Alpha evaluation feedback reports disagree on what would count as “validated”; (b) maintainers face a concrete proposal to declare Beta/1.0 and cannot point to shared evidence criteria; (c) RI success is cited as proof of Framework correctness in conflict with published non-claims. |
| **Notes** | See ecosystem Design Investigation Open Questions 3 and 5; Engineering Review warns against launching a Validation Program from justification alone. Related: [Alpha Adoption Guide](./adoption/FRAMEWORK-0.7-ALPHA-ADOPTION-GUIDE.md); [M2 Declaration](./governance/RUNTIME-FOUNDATION-M2-DECLARATION.md). |

---

### 4. Reference Implementation Strategy

| Field | Value |
| ----- | ----- |
| **Title** | Reference Implementation Strategy |
| **Status** | Candidate |
| **Origin** | Fitness Challenge Platform established as first official RI; whitepaper Ch. 10 and M2 state govern/inform relationship; ecosystem investigation left official vs unofficial RI distinction open. |
| **Problem Statement** | RI Informative posture is clear; strategy for additional RIs, designation honesty, and feedback-into-evolution without Normative contamination is not. |
| **Expected Investigation Type** | Design Investigation and/or Architecture Decision Investigation (representation/placement only — not RI product design). |
| **Expected Value** | Reduce uncertainty about how RIs scale beyond the first official project while preserving Examples Are Not Norms and Core independence from reference projects. |
| **Current Priority** | Medium |
| **Maturity Trigger** | Timely when **any** of these are observed: (a) a second project is proposed or treated as an official or de facto Reference Implementation; (b) an external project’s local practices are copied into Framework Normative proposals because “the RI does it that way”; (c) maintainers cannot classify incoming RI feedback as Framework gap vs product-local choice. |
| **Notes** | [Whitepaper Ch. 10](./whitepaper/AI-SOFTWARE-DEVELOPMENT-FRAMEWORK-WHITEPAPER.md); [M2 Declaration](./governance/RUNTIME-FOUNDATION-M2-DECLARATION.md); ecosystem Design Investigation §4 and Open Question 2. |

---

### 5. Adoption Experience

| Field | Value |
| ----- | ----- |
| **Title** | Adoption Experience |
| **Status** | Candidate |
| **Origin** | Temporary Alpha Adoption Guide; explicit non-claim that Getting Started / consumer kit is not ready; ecosystem investigation on first-org experience (adopt first vs Community-first); 1.0 roadmap lists Getting Started. |
| **Problem Statement** | Alpha evaluation path exists; permanent adoption experience for broader consumers does not. Risk of coupling Community/Research participation to adoption remains a design hazard. |
| **Expected Investigation Type** | Design Investigation (experience and packaging boundaries); later Informative authoring only if justified. |
| **Expected Value** | Reduce uncertainty about what a new organisation should experience at Alpha vs Beta vs 1.0 without raising adoption ceremony. |
| **Current Priority** | Medium |
| **Maturity Trigger** | Timely when **any** of these are observed: (a) two or more organisations complete (or attempt) the Alpha Adoption Guide and report the same onboarding confusion; (b) newcomers repeatedly treat the Alpha Adoption Guide as permanent Getting Started despite its temporary banner; (c) consumer-surface clarity work (item 7) exposes unresolved adoption-path gaps that construction-pin docs cannot answer. |
| **Notes** | [Alpha Adoption Guide](./adoption/FRAMEWORK-0.7-ALPHA-ADOPTION-GUIDE.md); [Invocation Guide](./FRAMEWORK-INVOCATION-GUIDE.md); ecosystem Design Investigation §6; README maturity / 1.0 positioning. |

---

### 6. AI Context Communication

| Field | Value |
| ----- | ----- |
| **Title** | AI Context Communication |
| **Status** | Candidate |
| **Origin** | ADR-004 deliberately omits Agent Pack/prompts; Invocation Guide defines session discipline and states future Agent Packs should consume it; M2 lists Agent Collaboration packaging as enhancing (not M2-blocking); 1.0 roadmap includes Agent Pack. |
| **Problem Statement** | Humans and agents share Project Integration discovery, but packaging of Framework context for AI assistants (beyond Invocation) remains incomplete. Risk of rival prompt roots or vendor-shaped packs. |
| **Expected Investigation Type** | Design Investigation; possibly Architecture Decision Investigation if Core/ADR boundaries are affected (unlikely if kept as Informative packaging). |
| **Expected Value** | Reduce uncertainty about how agents receive Framework context without violating tool neutrality or creating a prompt-pack Framework. |
| **Current Priority** | Medium |
| **Maturity Trigger** | Timely when **any** of these are observed: (a) repeated AI-agent sessions invent a rival instruction root despite Local Project Entry + Invocation Guide; (b) two or more independent tool/prompt packs package conflicting Framework context; (c) multiple Alpha/RI reports show agents skipping governance-root discovery as a recurring failure mode. |
| **Notes** | [ADR-004](./adr/ADR-004-AGENT-INTERACTION-MODEL.md); [Invocation Guide §9](./FRAMEWORK-INVOCATION-GUIDE.md); [M2 Declaration](./governance/RUNTIME-FOUNDATION-M2-DECLARATION.md) (Agent Collaboration packaging); README 1.0 Agent Pack positioning. |

---

### 7. Published Consumer Baseline (Versioning Strategy)

| Field | Value |
| ----- | ----- |
| **Title** | Published Consumer Baseline (Versioning Strategy) |
| **Status** | Ready for Investigation |
| **Origin** | ADR-002 defines Baseline pinning/versioning architecture; README / M2 / whitepaper repeatedly record that a published public consumer Baseline does not yet exist; Alpha uses construction pins. |
| **Problem Statement** | Architectural versioning rules exist; the publication and consumer-facing Baseline surface for non-construction adopters does not. Claim honesty for 1.0 depends on this gap closing defensibly. Consumer surface clarity (what is offering vs research) is also insufficient as research docs proliferate. |
| **Expected Investigation Type** | Near term: Informative consumer-surface clarity via existing docs (Option D). Later: claim-gated ADR-002 Baseline identity publication. Engineering Review before any publication claim. |
| **Expected Value** | Reduce uncertainty about what adopters should pin/ignore now, and when/how a public consumer Baseline can be published without silent upstream drift or false 1.0 claims. |
| **Current Priority** | High |
| **Maturity Trigger** | **Near-term surface clarity — already met:** research investigations, Evolution Backlog, and Informative guides now sit beside Assets/ADRs while README still says no published consumer Baseline; Design Investigation Option D recorded adopter confusion risk. **Baseline identity publication — not yet met;** timely when (a) two or more adopters pin different construction commits and disagree about Normative membership; (b) a concrete proposal claims a public consumer Baseline identity without ADR-002 metadata/pin-content completeness; or (c) maturity-claim discussion requires a knowable Baseline identity to remain honest. |
| **Notes** | [Design Investigation](./research/DESIGN-INVESTIGATION-PUBLISHED-CONSUMER-BASELINE.md) (**Option D**: surface clarity now; Baseline identity later — do not title Alpha docs as the PCB). [ADR-002](./adr/ADR-002-BASELINE-PINNING-AND-VERSIONING.md); [FA-004](./FA-004-PINNING-AND-BASELINE-GUIDE.md); README maturity table; M2 non-claims. |

---

### 8. Release Communication

| Field | Value |
| ----- | ----- |
| **Title** | Release Communication |
| **Status** | Ready for Investigation |
| **Origin** | Named as a terminal activity in the emergent investigative evolution practice; Evolution Process Design Investigation Open Question 4 asks how Release Communication relates to Baseline publication claims under ADR-002 without inventing a release board. |
| **Problem Statement** | Framework changes and maturity claims need honest external communication, but no Informative pattern exists for what “release communication” means relative to Baseline identity and non-claims discipline. |
| **Expected Investigation Type** | Near term: apply Option D pattern via existing surfaces (README maturity, ADR-002 migration guidance). Later: CHANGELOG only if Maturity Trigger evidence for a log artefact appears. |
| **Expected Value** | Reduce uncertainty about communicating Framework changes without creating release bureaucracy or overselling maturity. |
| **Current Priority** | Medium |
| **Maturity Trigger** | **Pattern definition — met** by Design Investigation (Option D). **CHANGELOG artefact — not yet met;** timely when (a) README/maturity wording and a Baseline-identity or Asset publication announcement disagree about what changed; (b) the first published consumer Baseline identity (item 7 later phase) needs an external announcement and no shared non-claims checklist exists; or (c) two consecutive Framework updates produce conflicting “what adopters must do” messages. **Immediate practice** (no new artefact): use class-gated notes on existing surfaces when Normative/claim/Baseline events occur. |
| **Notes** | [Design Investigation — Release Communication](./research/DESIGN-INVESTIGATION-RELEASE-COMMUNICATION.md) (**Option D**: force/compatibility-class communication; no CHANGELOG exists today; defer CHANGELOG; no AI release channel). Related: [Evolution Process Investigation](./research/DESIGN-INVESTIGATION-FRAMEWORK-EVOLUTION-PROCESS.md) Open Question 4; [Published Consumer Baseline Investigation](./research/DESIGN-INVESTIGATION-PUBLISHED-CONSUMER-BASELINE.md). |

---

### 9. Stop Consolidation

| Field | Value |
| ----- | ----- |
| **Title** | Stop Consolidation |
| **Status** | Candidate |
| **Origin** | Explicit preferred enhancing work toward Beta in README, M2 Declaration, and whitepaper maturity chapter; Stop cues exist across Runtime assets but consolidation is not claimed done. |
| **Problem Statement** | Stop/Escalation is architecturally required; consolidated Stop guidance/packaging preferred for broader trial maturity is not yet delivered. |
| **Expected Investigation Type** | Design Investigation and/or Engineering Review of existing Stop surfaces before any Asset churn. |
| **Expected Value** | Reduce uncertainty about whether Stop behaviour is coherent enough for Beta-scale trial without expanding ceremony. |
| **Current Priority** | Medium |
| **Maturity Trigger** | Timely when **any** of these are observed: (a) two or more independent Alpha/RI sessions miss or invent Stop behaviour when material unknowns appear; (b) reviewers cite inconsistent Stop instructions across capability Assets as a recurring defect; (c) a Beta-claim discussion treats fragmented Stop packaging as blocking evidence for broader trial. |
| **Notes** | README 0.7 Beta positioning; [M2 Declaration](./governance/RUNTIME-FOUNDATION-M2-DECLARATION.md); whitepaper planned expansion / Beta notes. |

---

### 10. Dedicated Framework Evolution Process Overview

| Field | Value |
| ----- | ----- |
| **Title** | Dedicated Framework Evolution Process Overview |
| **Status** | Deferred |
| **Origin** | Option B in the Framework Evolution Process Design Investigation — a dedicated Informative evolution-process overview including the investigative activity chain. |
| **Problem Statement** | A full process overview could help onboarding but risks freezing an emergent, singly evidenced research habit into implied gates. |
| **Expected Investigation Type** | Revisit via Design Investigation only after product-evolution discoverability is improved and/or investigative patterns repeat across multiple concerns. |
| **Expected Value** | Would reduce uncertainty about exploratory research habits — but only once those habits are evidenced as stable. |
| **Current Priority** | Low |
| **Maturity Trigger** | Timely only when **all** of these hold: (a) item 2 discoverability pointers exist in README Contributing (or equivalent); (b) at least two additional investigation tracks outside the ecosystem series reuse the same activity kinds (for example Design Investigation → Engineering Review) without being forced to; (c) contributors still ask where the evolution “process” lives after those pointers exist. Until then, keep deferred. |
| **Notes** | Explicitly **deferred** by [Design Investigation — Framework Evolution Process](./research/DESIGN-INVESTIGATION-FRAMEWORK-EVOLUTION-PROCESS.md) (Option D now; Option B later). |

---

### 11. Observation Catalogue

| Field | Value |
| ----- | ----- |
| **Title** | Observation Catalogue |
| **Status** | Deferred |
| **Origin** | Named in ecosystem Design Investigation as a possible Research-domain artefact; explicitly not created; open question whether it should remain an informal notebook concept. |
| **Problem Statement** | Observations fuel evolution candidates, but a formal catalogue could become ceremony or a false Validation Program surface. |
| **Expected Investigation Type** | Design Investigation (only if informal capture fails at scale). |
| **Expected Value** | Would reduce loss of observations — at the cost of new structure; deferred to preserve minimal governance. |
| **Current Priority** | Low |
| **Maturity Trigger** | Timely when **any** of these are observed: (a) the same observation reappears as a new investigation because prior notes could not be found; (b) two stewards independently cannot locate prior Alpha/RI feedback that affected a Framework change; (c) this Evolution Backlog repeatedly fails as a sufficient home for candidate-level memory and raw observations are being lost. Until informal capture (issues, research docs, backlog) demonstrably fails, keep deferred. |
| **Notes** | Ecosystem Design Investigation Open Question 5; Engineering Review warns against creating Observation Catalogues from justification alone. This backlog itself is a lighter Informative alternative for *evolution candidates*, not raw observations. |

---

### 12. Framework Case Studies

| Field | Value |
| ----- | ----- |
| **Title** | Framework Case Studies |
| **Status** | Deferred |
| **Origin** | Gap between RI “informs Framework evolution” posture and lack of Framework-owned learning narrative; investigated in Framework Case Studies Design Investigation. |
| **Problem Statement** | RIs exercise the Framework but do not automatically leave a durable Framework research record of application learning distinct from product diaries and Normative law. |
| **Expected Investigation Type** | Optional Informative Case Study authoring only after Option D intake (backlog / investigations) demonstrably fails to preserve narrative learning — or when multi-RI comparison is needed. |
| **Expected Value** | Would reduce loss of application narrative — without making Case Studies mandatory RI outputs. |
| **Current Priority** | Low |
| **Maturity Trigger** | Timely when **any** of these are observed: (a) Framework-relevant lessons from an official RI are re-discovered because backlog/issues lacked durable narrative context; (b) a second RI exists and comparison of application learning is needed; (c) maintainers cannot separate Framework gaps from product-local choices without a citable learning note. Until then, use Evolution Backlog origins + proportionate investigations (Option D). |
| **Notes** | [Design Investigation — Framework Case Studies](./research/DESIGN-INVESTIGATION-FRAMEWORK-CASE-STUDIES.md) (**Option D**). Related: backlog items 3–4, 11; whitepaper Ch. 10 feedback role. |

---

## Intentionally not listed

The following were considered and **not** added for lack of sufficient distinct
evidence as evolution candidates (beyond what is already covered above or already
Accepted architecture):

| Topic | Why omitted |
| ----- | ----------- |
| **Framework Metrics** | No evidence-backed metrics programme emerged; only hypothetical “confusion metrics” in open questions. Revisit if real measurement need appears. |
| **Reopening ADR-002 Core versioning semantics** | Versioning *architecture* is Accepted; remaining work is consumer Baseline publication (item 7), not a new versioning ADR by default. |
| **Community role system / Research Program institution** | Ecosystem investigations justified boundaries and warned against institutionalising these from thin evidence. |

---

## Change log (Informative)

| Date | Change |
| ---- | ------ |
| 2026-07-29 | Initial backlog created from Alpha/M2 documentation and the ecosystem / evolution research track |
| 2026-07-29 | Item 7 updated after Design Investigation (Option D); status → Ready for Investigation; priority → High |
| 2026-07-29 | Added Maturity Trigger to all items (observable evidence only; no dates or commitments) |
| 2026-07-29 | Item 8 updated after Release Communication Design Investigation (Option D); status → Ready for Investigation |
| 2026-07-29 | Item 12 added (Framework Case Studies) after Design Investigation (Option D); status Deferred |

---

## End of Framework Evolution Backlog
