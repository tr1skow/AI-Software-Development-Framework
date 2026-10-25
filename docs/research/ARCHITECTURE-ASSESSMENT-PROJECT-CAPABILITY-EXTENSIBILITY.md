# Architecture Assessment — Project-Specific Capability Extensibility (Issue #26)

| Attribute | Value |
| --------- | ----- |
| Document | Architecture Assessment — Project-Specific Capability Extensibility |
| Classification | Informative / Research (architecture assessment) |
| Status | Complete — recommendation recorded |
| Framework baseline | Framework v0.2.1; Runtime Foundation M2 |
| Related | [Issue #26](https://github.com/tr1skow/AI-Software-Development-Framework/issues/26); whitepaper clarification [PR #25](https://github.com/tr1skow/AI-Software-Development-Framework/pull/25); [ADR-001](../adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md)–[ADR-004](../adr/ADR-004-AGENT-INTERACTION-MODEL.md); [FA-009](../FA-009-CHANGE-CLASSIFICATION-GUIDE.md) |
| Kind | Architecture assessment — **not** an ADR, Framework Asset, Governance Decision, Runtime amendment, plugin design, or catalogue change |

**This assessment is investigation only.** It answers whether SDF should
**ever** introduce a normative mechanism for project-declared **peer** Runtime
capabilities beyond the pinned Baseline Capability Catalogue. It does **not**
authorise a plugin API, extension registry, new Runtime semantics, or new
catalogue members.

If this document and an Accepted ADR or labelled Framework Asset appear to
disagree, the Accepted ADRs and labelled Framework Assets are authoritative.

---

## 1. Design Review (GD-001) — this documentation package

| Output | Result |
| ------ | ------ |
| Confirmed scope | One Informative research assessment under `docs/research/` for Issue #26. **Out of scope:** Normative ADR/FA/GD edits; consuming-repo changes; API/registry design; FEA/ADR drafting beyond recommendation. |
| Confirmed acceptance criteria | Normative vs Informative separated with citations; ≥2 RI use cases classified; alternatives A–C compared; adversarial scenarios tested; clear recommendation; #26 not closed by this PR. |
| Implementation recommendation | **Proceed** (docs-only Informative report) |
| Architecture Review decision | **Not required for this package** — investigation does not change architecture. A future Normative extension mechanism **would** require Architecture Review + ADR (explicitly deferred / not selected). |
| Classification | Justified **`trivial`** — Informative research only |

Human Decision Owner for acceptance of this assessment packaging: Framework
steward (`tr1skow`).

---

## 2. Current normative guarantees (Phase A)

### 2.1 Source-to-claim map

| Claim | Force | Authority |
| ----- | ----- | --------- |
| Capability Semantics ≠ Baseline Capability Catalogue | **Normative** | ADR-001 §1–§2; invariants 1, 17–18 |
| v1 catalogue is **closed**; open-ended catalogue rejected for interoperability | **Normative** | ADR-001 §2; Alternatives “Capability catalogue shape” Option C Accepted / Option A Rejected |
| New **first-class catalogue member** requires versioned ADR-governed Framework decision | **Normative** | ADR-001 §2.2; invariant 18 |
| New **implementation** of an existing catalogue member does not redefine Capability Semantics | **Normative** | ADR-001 §2.2 |
| Change Classification is the capability **binding mechanism**; binds **catalogue** capabilities with depths; binding completeness required | **Normative** | ADR-001 §4; FA-009 binding model / binding completeness |
| Project Policy may specialise within Method/Core invariants; must not weaken protected invariants or invent Core | **Normative** | ADR-003 §5–§6; FA-009 specialisation boundary |
| Adapters / examples are not Core; Core/Policy win over adapters | **Normative** | ADR-002; ADR-003 precedence |
| Agents are views over catalogue capabilities; no unchecked material self-approval; Stop on authority/precedence failures | **Normative** | ADR-004; FA-011/015 |
| Runtime behaviour is **baseline-relative**; pin immutable Baseline identity | **Normative** | ADR-002 |
| Standalone Documentation, Release Engineering handbook, Incident Command are **not** separate v1 catalogue capabilities | **Normative** (catalogue non-membership) | ADR-001 §2.1 |
| Project-specific engineering outside the catalogue is project-owned and **not** a first-class Framework Runtime capability | **Informative teaching** of Normative boundary | Whitepaper Ch.7 governance table (PR #25); does not invent new Norms |

### 2.2 Supported project flexibility (already)

Without peer-capability extensions, projects may:

1. **Specialise** Classification labels/thresholds, Review fallback, agent
   constraints, and depths via Project Policy (FA-009 / ADR-003).
2. **Implement** catalogue capabilities with project guides, templates, ADRs,
   and work products (ADR-001 §2.2).
3. **Compose** Review + Verification + Planning + Discovery + Stop for
   domain-specific concerns (security, deploy evidence, a11y, ops).
4. Use **SDOF** operating adapters/defaults and project-local coordination
   (explicitly non-redefining of SDF Runtime — RI Policies restate this).
5. Propose **shared** new first-class capabilities only via **Alternative B**
   (ADR-governed catalogue evolution) when Framework-wide evidence warrants.

### 2.3 Genuine limitations (intentional)

| Limitation | Implication |
| ---------- | ----------- |
| Classification cannot bind an unknown peer capability name | An unrecognised `project.*` capability is **not** a valid Runtime bind under FA-009 completeness |
| Projects cannot mint interoperability-grade peers locally | Prevents competing project-specific Framework laws (ADR-001 Alternative A rejection rationale) |
| No Normative “extension contract” exists today | Whitepaper PR #25 left this **OPEN**; Issue #26 asks whether it should ever exist |

These are **boundary properties**, not demonstrated defects, unless RI evidence
shows work that **cannot** be expressed as (1)–(4) above.

---

## 3. RI use-case assessment (Phase B)

Repositories inspected (Entries and/or Project Policies on each `main` via
repository-first reads). Hypotheses from Issue #26 were treated as **starting
questions**, not assumed gaps.

### 3.1 Accessibility verification

| Field | Assessment |
| ----- | ---------- |
| Evidence | Fitness `docs/implementation/GD-001-DESIGN-REVIEW-NATIVE-FIRST-SLICE.md` includes a “Security, accessibility, verification, and risks” section (repository code search hit). No RI Entry/Policy examined invents an `Accessibility` catalogue peer. |
| Mistaken reading | “Accessibility Review” as a first-class Runtime capability |
| Fits | **Existing capability implementation/composition** — Review and/or Verification at Policy-specialised depth; Design Review (GD-001) for RI/Framework-governed design slices; project acceptance criteria |
| Missing peer capability? | **No** — concern is a verification/review **dimension**, not a new Runtime peer |

### 3.2 Firebase security and data isolation

| Field | Assessment |
| ----- | ---------- |
| Evidence | Budget Buddy Policy: isolated Firebase projects for `dev`/`prod`, authorization/security debt acknowledged, CI as technical evidence only; project docs such as `AUTHORIZATION.md` / environment design (Entry pointers). SafeHouse Policy: Auth/Firestore/security as material Human-gated concerns; deploy/operator paths are project-owned. Vagtplan App Policy: Firebase Auth/Firestore/Cloud Run as accepted **direction** under project architecture — not a Framework capability. |
| Mistaken reading | `Security Gate` / `Firestore Isolation` as peer Runtime capabilities |
| Fits | **Project Policy + architecture/ADR work products** + **Verification/Review/Discovery/Stop** composition; SDOF environment defaults remain optional/non-implied |
| Missing peer capability? | **No** |

### 3.3 Deployment and operational verification

| Field | Assessment |
| ----- | ---------- |
| Evidence | SafeHouse: extensive deploy/operator documentation and Policy non-authorization of deploy by Issues alone. Budget Buddy: CI/`verify` evidence ≠ merge/deploy authority. Fitness Entry: deploy not authorised by Entry/SDOF adoption. ADR-001 already excludes standalone Release Engineering as a catalogue peer. |
| Mistaken reading | `Deploy Verification` as first-class Framework capability |
| Fits | **Verification + Approval + Planning** composition; project-owned ops runbooks; organisational constraints (ADR-003 layer 2) where applicable |
| Missing peer capability? | **No** — and elevating Release Engineering would fight ADR-001 §2.1 non-membership without new Framework-wide evidence |

### 3.4 Agent-based independent review and decision escalation

| Field | Assessment |
| ----- | ---------- |
| Evidence | All four RIs specialise Orchestrator / Review-agent / Human Decision Owner roles in Project Policy (e.g. Vagtplan App mandatory review orchestration gates A–D; Budget Buddy review-budget / abstraction ceiling; SafeHouse Review Scope + disposition; Fitness Review Scope / fallback). These explicitly state agents produce **evidence**, not Approval; Stop/Escalate on scope expansion. |
| Mistaken reading | `Agent Independent Review` or `Escalation Gate` as new catalogue peers beyond Review / Agent Collaboration / Stop |
| Fits | **Review + Agent Collaboration + Stop/Escalation** with **Project Policy** and **SDOF** operating coordination |
| Missing peer capability? | **No** |

### 3.5 Cross-case conclusion

Across official RIs, the examined “project-specific engineering activities”
are expressible as Policy specialisation, existing capability
implementation/composition, and/or SDOF/project-local practice. **No
repository-verified case in this assessment requires a project-declared peer
Runtime capability.**

Uncertainty flags: private Fitness/SafeHouse links may limit external
re-verification of some pinned evidence; that does not change the structural
fit against ADR-001/FA-009. No inaccessible repo blocked this assessment’s
Policy/Entry reads for the four named RIs.

---

## 4. Alternatives matrix (Phase C)

| Criterion | **A. Retain closed Baseline catalogue + specialisations** | **B. ADR-governed shared catalogue evolution** | **C. Future normative namespaced peer-extension contract** |
| --------- | -------------------------------------------------------- | ---------------------------------------------- | ---------------------------------------------------------- |
| Semantic ownership | Framework owns Semantics + Catalogue; projects own Policy/implementations | Framework owns new shared members via ADR | Split: Framework owns extension meta-law; projects own peer semantics — **high fragmentation risk** |
| Human Authority | Unchanged; Approval remains human | Unchanged for projects; Framework stewards own catalogue ADR | Risk that project “capabilities” blur Approval/Runtime without careful meta-rules |
| Interoperability | **Preserved** (ADR-001 reason for rejecting open catalogue) | Preserved if amendment is versioned and pinned | **Threatened** unless strict contract + conflict rules exist |
| Binding completeness | Closed set; FA-009 completeness decidable | Remains decidable per Baseline version | Must define binding of unknown namespaces; complex |
| Discoverability | Entry → Policy → pin catalogue | Same + release notes for new members | Requires registry/discovery of project peers |
| Unknown-extension / Stop | Unknown peer bind → not ready / Stop (incomplete or invented binding) | N/A for local peers | Must specify Stop vs fail-closed vs ignore — new Runtime surface |
| Backward compatibility | Strong | Managed via Baseline versions (ADR-002) | Local extensions across Baseline upgrades are a **hard** problem |
| Pinning / upgrades | Clear | Clear (new Baseline carries catalogue) | Project extension may silently diverge from new Baseline catalogue meaning |
| Competing project Framework laws | **Minimised** | Shared law only when Framework accepts | **Maximised** unless heavily constrained |
| Governance / implementation cost | **Lowest** | Medium (only when evidence justifies) | **Highest** (meta-ADR, conflict model, tooling, teaching) |
| Necessity given RI evidence | **Sufficient** | Not triggered by current RI cases | **Not necessary** on current evidence |

**Design restraint:** no API, registry schema, or extension syntax is designed
here. Alternative C remains speculative architecture until necessity is shown.

---

## 5. Adversarial scenarios (Phase D)

| # | Scenario | What current authority already determines | Unspecified / OPEN | Contradiction? |
| - | -------- | ----------------------------------------- | ------------------ | -------------- |
| 1 | Project performs accessibility verification under Review/Verification | FA-011/013 bind challenge and bars at Classification depth; Policy may elevate depth; outcomes remain Review/Verification — not Approval | Exact a11y techniques (project-owned) | **None** — fits composition |
| 2 | Project declares unrecognised `project.security-gate` as peer Runtime capability | FA-009 requires binding completeness over **catalogue** members; ADR-001 rejects open catalogue; ADR-003 invalidates Core-weakening Policy; silent invention → Stop | How a future extension contract would validate namespaced peers | **No contradiction** — declaration is **invalid** under current Norms, not a supported path |
| 3 | Two projects use same extension name with conflicting semantics | Under current Norms, neither peer is Framework-bound; local names are project practice only | C-style global name conflict resolution | **None today**; would be a **new** problem class if C were adopted |
| 4 | Project changes Baseline versions while retaining a local “extension” | ADR-002: Runtime is baseline-relative; pin must resolve offline; upgrade is explicit. Local practice may continue as Policy/implementation **if** still compatible with new Norms | Migration of hypothetical peer binds | **None** for A/B; C would need explicit upgrade rules |
| 5 | Agent encounters extension binding without authority/implementation info | ADR-004 / FA-009 / Stop: do not invent; unresolved precedence/bindings → Stop/Escalate; agent must not self-approve | N/A under A — agent should treat unknown peer bind as incomplete/invalid Classification | **None** — Stop is the determined behaviour |

---

## 6. Decision matrix and recommendation (Phase E)

| Dimension | Result |
| --------- | ------ |
| Current normative guarantees | Closed catalogue; Semantics≠Catalogue; Classification binds catalogue only; Policy specialises within invariants; adapters non-Core; baseline-relative Runtime |
| Supported flexibility | Policy, implementation, composition, SDOF operating layer, ADR-governed shared catalogue growth (B) |
| Genuine limitations | No local peer minting; intentional interoperability boundary |
| Speculative extension requirements | Namespaced peer contract (C) — **not evidenced as necessary** by RI use cases |
| Evidence maturity | Whitepaper OPEN question + Reddit origin context; RI Policies strongly exercise specialisation/composition; **no FEA-ready Framework defect** |
| **Recommended disposition** | **No Framework Normative change.** Retain **Alternative A**. Keep **Alternative B** as the only Normative growth path when Framework-wide evidence appears. Do **not** pursue Alternative C on present evidence. |

### Recommendation (normative posture)

1. **Prefer no change** to ADR-001–004 / FA-009 / Runtime for Issue #26.
2. Treat continued external “closed catalogue constrains projects” feedback as
   an **Informative discoverability** concern (already addressed in whitepaper
   PR #25), not as authorisation for peer extensions.
3. If a future RI shows a concern that **cannot** fit Policy / composition /
   SDOF / shared ADR catalogue amendment, open a **separately governed ADR
   investigation** — do not silently introduce architecture via research or
   Project Policy.
4. Leave Issue **#26 open** until Human Decision Owner accepts this assessment
   (and any optional Informative editorial follow-up).

### Consequences for Framework v0.2.1 and future consumer Baselines

| Surface | Consequence |
| ------- | ----------- |
| Framework v0.2.1 (current development baseline) | **No Normative delta** from this assessment |
| Future consumer Baselines | Remain free to add **shared** catalogue members only via versioned ADR-governed Baseline publication (Alternative B) |
| Consuming projects | Continue expressing domain gates as Policy + capability composition; do not encode peer Runtime capabilities in Classification |
| SDOF | Remains operating/coordination; must not redefine SDF catalogue binding |

---

## 7. Explicit non-claims

This assessment does **not**:

- introduce or design a plugin API, extension registry, or namespaced peer contract
- amend ADR-001–004, FA-009, or other Normative Assets
- claim RI practices are Framework Norms
- close Issue #26
- authorise release, repin, deploy, or consuming-repository edits
- assert that Alternative C can never be considered — only that it is
  **not justified now**

---

## 8. Unresolved questions (steward follow-ups — not decided here)

1. Is any further Informative teaching beyond PR #25’s whitepaper table needed
   in FA-003/Invocation, or is this research report enough for #26?
2. What **minimum multi-RI evidence** would reopen Alternative C vs simply
   triggering Alternative B for a named shared capability?
3. Should Evolution Backlog gain a Candidate noting “peer-extension contract
   deferred” — or is Issue #26 sufficient memory?
