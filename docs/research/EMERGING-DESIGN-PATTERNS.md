# Emerging Design Patterns

| Attribute | Value |
| --------- | ----- |
| Document | Emerging Design Patterns |
| Classification | Informative / Research (observational) |
| Status | Living observations — not Framework Principles |
| Framework baseline | Framework 0.7 Alpha; Runtime Foundation M2 |
| Kind | Research note — **not** a Framework Asset, ADR, Method amendment, or governance rule |

**This document is observational and Informative only.** It does **not** define
Framework Principles. It does **not** introduce governance. It collects
recurring behaviours seen across independent Design Investigations until
enough evidence exists to consider whether a future principle is justified.

Patterns must emerge from evidence. Do not add a pattern supported by only one
investigation.

If this document and an Accepted ADR or labelled Framework Asset appear to
disagree, the Accepted ADRs and labelled Framework Assets are authoritative.

---

## Purpose

Capture design patterns that **repeatedly** emerge across independent Design
Investigations (and closely related Engineering / Architecture Decision
Investigations in the same tracks).

Confidence grows with corroboration and shrinks when counterexamples appear.

---

## Confidence and status values

| Confidence | Meaning |
| ---------- | ------- |
| **Early** | Seen in two investigations; still fragile |
| **Growing** | Seen across several tracks; wording may still shift |
| **Strong** | Repeated with consistent recommendations |
| **Established** | Stable observation ready to be *considered* for principle review — still not a principle |

| Status | Meaning |
| ------ | ------- |
| **Observed** | Pattern recorded; keep watching |
| **Continue observing** | Active; seek more independent tracks or sharper counterexamples |
| **Ready for Engineering Review** | Enough evidence to review whether a candidate principle should be investigated — not approval of a principle |
| **Rejected** | Pattern failed under counterevidence |

---

## Patterns

### 1. Strengthen existing authoritative surfaces before introducing new ones

| Field | Content |
| ----- | ------- |
| **Pattern Name** | Strengthen existing authoritative surfaces before introducing new ones |
| **Observation** | When consumer or contributor clarity is missing, investigations prefer improving README maturity/Contributing, FA-004 construction-pin guidance, Alpha Adoption Guide, ADR-002 migration guidance, and similar **already-authoritative or already-adopter-facing** surfaces before creating new logs, process manuals, or “baseline” artefacts. |
| **Supporting Investigations** | [Framework Evolution Process](./DESIGN-INVESTIGATION-FRAMEWORK-EVOLUTION-PROCESS.md) (Option D — integrate product-evolution pointers into existing surfaces; defer dedicated process overview); [Published Consumer Baseline](./DESIGN-INVESTIGATION-PUBLISHED-CONSUMER-BASELINE.md) (Option D/C — near-term clarity via README / FA-004 / Adoption Guide); [Release Communication](./DESIGN-INVESTIGATION-RELEASE-COMMUNICATION.md) (Option D — README maturity + existing migration guidance first; defer CHANGELOG). |
| **Counterexamples** | [Ecosystem Representation](./ARCHITECTURE-DECISION-INVESTIGATION-ECOSYSTEM-REPRESENTATION.md) rejected amending FA-003 as the *primary* home (Option A) because FA-003 is Normative Framework — preferring a **new thin Informative** page (Option B) to avoid Normative-surface expansion. This does not reverse the pattern; it qualifies it: strengthen existing surfaces **unless** doing so would expand or confuse Normative force. |
| **Confidence** | Growing |
| **Candidate Principle** | *(Speculative only.)* Prefer repairing discoverability of existing authority over inventing parallel artefacts. |
| **Status** | Continue observing |

---

### 2. Prefer thin representation over institutional artefacts

| Field | Content |
| ----- | ------- |
| **Pattern Name** | Prefer thin representation over institutional artefacts |
| **Observation** | Investigations repeatedly choose thin maps, class tables, or boundary language over named institutions (governance models, validation programs, release boards, process manuals, fake “published baselines”). When a new page is justified, it is constrained to Informative, non-`FA-###`, non-ADR, and non-institutional naming. |
| **Supporting Investigations** | [Ecosystem & Governance Model](./DESIGN-INVESTIGATION-ECOSYSTEM-AND-GOVERNANCE-MODEL.md) (thin boundary model justified; heavy Community OS rejected); [Ecosystem Representation](./ARCHITECTURE-DECISION-INVESTIGATION-ECOSYSTEM-REPRESENTATION.md) (Option B thin overview; Option C dedicated Ecosystem Architecture / Governance Model rejected); [Evolution Process](./DESIGN-INVESTIGATION-FRAMEWORK-EVOLUTION-PROCESS.md) (defer dedicated evolution-process overview); [Published Consumer Baseline](./DESIGN-INVESTIGATION-PUBLISHED-CONSUMER-BASELINE.md) (reject Informative doc that pretends to be the published Baseline); [Release Communication](./DESIGN-INVESTIGATION-RELEASE-COMMUNICATION.md) (class-gated pattern; no release board). |
| **Counterexamples** | None yet that recommend standing up institutions from a first investigation alone. Engineering Review warned that naming gravity (for example “Research Program”) can institutionalise prematurely even inside thin models — a caution, not a counter-pattern. |
| **Confidence** | Strong |
| **Candidate Principle** | *(Speculative only.)* Represent boundaries Informatively before creating organisational or process institutions. |
| **Status** | Continue observing |

---

### 3. Do not expand the Normative surface to solve orientation problems

| Field | Content |
| ----- | ------- |
| **Pattern Name** | Do not expand the Normative surface to solve orientation problems |
| **Observation** | Orientation, ecosystem maps, evolution discoverability, consumer-surface clarity, and release-note practice are consistently kept **Informative** (or non-Asset). Investigations refuse new `FA-###` / ADR / Method amendments for these concerns and avoid parking them inside Normative Assets where force-inheritance would make orientation read as law. |
| **Supporting Investigations** | [Ecosystem Representation](./ARCHITECTURE-DECISION-INVESTIGATION-ECOSYSTEM-REPRESENTATION.md) (reject FA-003 as primary home for Normative-contact reasons); [Ecosystem & Governance Model](./DESIGN-INVESTIGATION-ECOSYSTEM-AND-GOVERNANCE-MODEL.md) plus [Engineering Review](./ENGINEERING-REVIEW-ECOSYSTEM-AND-GOVERNANCE-MODEL.md) (no Assets/ADRs from justification); [Evolution Process](./DESIGN-INVESTIGATION-FRAMEWORK-EVOLUTION-PROCESS.md); [Published Consumer Baseline](./DESIGN-INVESTIGATION-PUBLISHED-CONSUMER-BASELINE.md); [Release Communication](./DESIGN-INVESTIGATION-RELEASE-COMMUNICATION.md) (force labelling in any consumer note). |
| **Counterexamples** | None observed. FA-001 already supplies force labels; investigations rely on that rather than inventing Normative orientation Assets. |
| **Confidence** | Strong |
| **Candidate Principle** | *(Speculative only.)* Orientation and stewardship maps must not become Normative Method or Normative Framework by placement or labelling accident. |
| **Status** | Continue observing |

---

### 4. Separate research and stewardship memory from the consumer offering

| Field | Content |
| ----- | ------- |
| **Pattern Name** | Separate research and stewardship memory from the consumer offering |
| **Observation** | Investigations treat `docs/research/`, Evolution Backlog, FAIS/allocation bookkeeping, and similar stewardship/research artefacts as **out of** what adopters should pin or treat as Framework law. Consumer communication and consumer-surface clarity exclude research serialisation. |
| **Supporting Investigations** | [Ecosystem & Governance Model](./DESIGN-INVESTIGATION-ECOSYSTEM-AND-GOVERNANCE-MODEL.md) (domain separation); [Published Consumer Baseline](./DESIGN-INVESTIGATION-PUBLISHED-CONSUMER-BASELINE.md) (research/stewardship exclusions); [Release Communication](./DESIGN-INVESTIGATION-RELEASE-COMMUNICATION.md) (research generally omitted from release notes); [Evolution Process](./DESIGN-INVESTIGATION-FRAMEWORK-EVOLUTION-PROCESS.md) (investigative chain ≠ product-evolution rules for contributors/adopters). |
| **Counterexamples** | None recommending research docs as pin content. Temporary Alpha Adoption Guide remains Informative evaluation packaging, not research-as-law. |
| **Confidence** | Strong |
| **Candidate Principle** | *(Speculative only.)* Framework evolution memory and Framework consumer Baseline content are different publishable concerns. |
| **Status** | Continue observing |

---

### 5. Split conflated concerns by maturity instead of forcing one artefact

| Field | Content |
| ----- | ------- |
| **Pattern Name** | Split conflated concerns by maturity instead of forcing one artefact |
| **Observation** | When a research question packs a “now” clarity need with a “later” publication or institution need, investigations **split** them (Option D patterns): communicate or discover now; publish identity / freeze process / add CHANGELOG only when claim- or evidence-gated. |
| **Supporting Investigations** | [Published Consumer Baseline](./DESIGN-INVESTIGATION-PUBLISHED-CONSUMER-BASELINE.md) (consumer surface now vs Baseline identity later); [Evolution Process](./DESIGN-INVESTIGATION-FRAMEWORK-EVOLUTION-PROCESS.md) (product-evolution discoverability now vs dedicated process overview later); [Release Communication](./DESIGN-INVESTIGATION-RELEASE-COMMUNICATION.md) (class-gated practice now vs CHANGELOG later); [Ecosystem Representation](./ARCHITECTURE-DECISION-INVESTIGATION-ECOSYSTEM-REPRESENTATION.md) (D2 sequencing pointers → thin page allowed). |
| **Counterexamples** | Single-artefact Options B/C were often evaluated and rejected when they would falsely declare maturity (for example an Informative “Published Consumer Baseline” at Alpha). |
| **Confidence** | Growing |
| **Candidate Principle** | *(Speculative only.)* Progressive Commitment applies to Framework documentation itself: do not bind hard-to-reverse publication forms until the uncertainty they claim to settle is reduced. |
| **Status** | Continue observing |

---

### 6. Justification is not implementation authority

| Field | Content |
| ----- | ------- |
| **Pattern Name** | Justification is not implementation authority |
| **Observation** | Design Investigations repeatedly record recommendations such as “justified,” “Option D,” or “Ready for Investigation” while listing explicit **non-actions** (no Assets, no ADR, no page authored, no Baseline published, no CHANGELOG created). Engineering Review reinforced that accepting justification must not be read as a mandate to build. |
| **Supporting Investigations** | [Ecosystem & Governance Model](./DESIGN-INVESTIGATION-ECOSYSTEM-AND-GOVERNANCE-MODEL.md); [Engineering Review](./ENGINEERING-REVIEW-ECOSYSTEM-AND-GOVERNANCE-MODEL.md) (Ready after refinement; do not implement from justification alone); [Ecosystem Representation](./ARCHITECTURE-DECISION-INVESTIGATION-ECOSYSTEM-REPRESENTATION.md) (no Option B page authored); [Evolution Process](./DESIGN-INVESTIGATION-FRAMEWORK-EVOLUTION-PROCESS.md); [Published Consumer Baseline](./DESIGN-INVESTIGATION-PUBLISHED-CONSUMER-BASELINE.md); [Release Communication](./DESIGN-INVESTIGATION-RELEASE-COMMUNICATION.md). |
| **Counterexamples** | None in completed investigations. Backlog Maturity Triggers further separate “pattern defined” from “artefact timely.” |
| **Confidence** | Strong |
| **Candidate Principle** | *(Speculative only.)* Evidence that a concern exists authorises further proportionate investigation, not immediate artefact creation. |
| **Status** | Continue observing |

---

### 7. Defer new consumer-facing logs and manuals until observable need

| Field | Content |
| ----- | ------- |
| **Pattern Name** | Defer new consumer-facing logs and manuals until observable need |
| **Observation** | CHANGELOG, dedicated evolution-process overview, Observation Catalogue, Validation Program, and premature Baseline-identity publication are deferred pending concrete triggers (repeated confusion, claim pressure, second RI, lost observations, etc.), not created because the topic was named. |
| **Supporting Investigations** | [Release Communication](./DESIGN-INVESTIGATION-RELEASE-COMMUNICATION.md) (defer CHANGELOG); [Evolution Process](./DESIGN-INVESTIGATION-FRAMEWORK-EVOLUTION-PROCESS.md) (defer dedicated overview; Observation Catalogue deferred in backlog from ecosystem open questions); [Published Consumer Baseline](./DESIGN-INVESTIGATION-PUBLISHED-CONSUMER-BASELINE.md) (defer Baseline identity); [Ecosystem & Governance Model](./DESIGN-INVESTIGATION-ECOSYSTEM-AND-GOVERNANCE-MODEL.md) / [Engineering Review](./ENGINEERING-REVIEW-ECOSYSTEM-AND-GOVERNANCE-MODEL.md) (no Validation Program / Observation Catalogue from justification alone). |
| **Counterexamples** | Items already marked Ready for Investigation where evidence is **already met** (ecosystem representation authoring; evolution discoverability; PCB surface clarity) show the converse: when triggers are met, deferral ends. That supports the pattern rather than contradicting it. |
| **Confidence** | Strong |
| **Candidate Principle** | *(Speculative only.)* New consumer-facing documentation products require observable need, not thematic completeness. |
| **Status** | Continue observing |

---

## Patterns not listed yet

Observations seen in only one completed investigation track (or only as architecture citation without multi-investigation corroboration) stay out until a second independent investigation supports them. Examples withheld for now:

| Observation | Why withheld |
| ----------- | ------------ |
| No separate AI release / context channel (agents follow pins) | Primary Design Investigation support is Release Communication; AI Context Communication remains a backlog candidate without a completed multi-investigation set |
| Adoption must stay decoupled from Community participation | Strong in Ecosystem Design Investigation; not yet independently re-derived as the main recommendation of a second investigation |
| “Prefer representation over new artefacts” as an absolute | Too absolute — Representation Investigation sometimes requires a *new thin* Informative page to protect Normative surfaces (see Pattern 1 counterexample) |

---

## Change log (Informative)

| Date | Change |
| ---- | ------ |
| 2026-07-29 | Initial observational patterns extracted from completed ecosystem, evolution, consumer-baseline, and release-communication investigations |

---

## End of Emerging Design Patterns
