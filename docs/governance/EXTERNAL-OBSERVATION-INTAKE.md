# External Observation Intake (repository stewardship)

| Attribute | Value |
| --------- | ----- |
| Document | External Observation Intake |
| Classification | Informative / Reference (repository stewardship) |
| Status | Published — repository stewardship |
| Framework baseline | Framework v0.2.1; Runtime Foundation M2 |
| Related | [Issue #14](https://github.com/tr1skow/AI-Software-Development-Framework/issues/14); [GOVERNANCE.md](./GOVERNANCE.md); [Evolution Backlog](../FRAMEWORK-EVOLUTION-BACKLOG.md) item 11; [GD-001](./GOVERNANCE_DECISIONS/GD-001-Design-Review.md); README Contributing |
| Kind | Official Framework repository stewardship note — **not** a Framework Asset, ADR, Governance Decision, Method amendment, or Runtime requirement |

**This document is Informative only.** It records a **repository-local**
contribution / stewardship intake for *this* public Framework repository. It
does **not** amend Normative Method, Accepted ADRs, Framework Assets, Runtime
semantics, or Project Integration rules. It does **not** make GitHub Issues
(or any vendor feature) part of Framework law.

If this document and an Accepted ADR or labelled Framework Asset appear to
disagree, the Accepted ADRs and labelled Framework Assets are authoritative.

---

## 1. Stewardship decision

**Recommended contributor-facing intake:** open a GitHub Issue on this
repository, optionally using the **Framework observation** Issue form.

**Boundary:**

| Surface | Role |
| ------- | ---- |
| GitHub Issue (raw observation) | Low-friction intake and triage ticket. **Not** Framework authority. Submission does **not** create Norms, backlog items, or approved changes. |
| Evolution Backlog | Evidence-backed **evolution candidates** only — not a raw-observation inbox ([FRAMEWORK-EVOLUTION-BACKLOG.md](../FRAMEWORK-EVOLUTION-BACKLOG.md)). |
| Framework Evolution Assessment / GD / ADR / Asset change | Existing [governance lifecycle](./GOVERNANCE.md#governance-lifecycle) — only when stewards promote with durable evidence. |
| Observation Catalogue (backlog item 11) | Remains **Deferred**. This lightweight intake is intentional informal capture; do not create a catalogue unless item 11 maturity triggers fire. |

Tool Neutrality (FA-002) is preserved: normative Framework concepts remain
vendor-independent. Choosing GitHub Issues for *this repository's* contribution
workflow is stewardship packaging, not Method law.

---

## 2. Design Review (GD-001) — this change package

| Output | Result |
| ------ | ------ |
| Confirmed scope | README Contributing pointer; optional GitHub Issue form; this Informative stewardship note; optional Evolution Backlog item 11 Notes pointer. **Out of scope:** Normative ADR/Asset/Runtime edits; Observation Catalogue; automatic promotion; mandatory forms for all Issues; Releases/deploy. |
| Confirmed acceptance criteria | External contributors can submit without branch/commit/PR; stewards can close/defer/duplicate without Framework change; observations remain non-authoritative; Tool Neutrality preserved; item 11 stays Deferred. |
| Implementation recommendation | **Proceed** |
| Architecture Review decision | **Not required** — no Capability Semantics, Baseline, Project Integration, or Method change; repository contribution workflow only |
| Documented rationale | Issue #14 authorises investigation of repository-local intake. Alternatives assessed in §4. Preferred Issues path minimises contributor friction while keeping durable, searchable provenance inside the public repo. Matches recent practice (external Reddit feedback → Informative PR #25 + open assessment Issue #26) without inventing Norms. |

Human Decision Owner for acceptance of this stewardship packaging: repository
maintainer / Framework steward (`tr1skow`).

**Classification (FA-009):** justified `trivial` — documentation and repository
contribution workflow only; no behaviour, Method, ADR, Asset, or Runtime change.
Triviality rationale: Informative surfaces + optional GitHub configuration;
existing governance authorities are referenced, not restated or amended.

---

## 3. Provenance requirements (intake → durable record)

When an observation is later cited in Framework-owned records (backlog,
research, governance evidence):

1. Prefer **stable public references** (merged PR URLs, tagged releases, public
   commit/tree links, public Issues).
2. Distinguish **immutable provenance** (exact SHA/tag) from **public
   verifiability** (anyone can open the link). Private RI commit pins may serve
   stewards with access but are **not** a public evidence surface by themselves
   (Issue #14 comment on RI-001 privacy).
3. Do **not** import external forum posts, chat text, or Issue bodies as
   Framework authority. Quote or paraphrase under steward judgment; link as
   origin evidence only.
4. Do **not** treat a submitted observation as Normative because it was filed.

---

## 4. Alternatives assessment (summary)

| Option | Friction | Provenance / durability | Duplicates | Steward load | Tool neutrality | Notes |
| ------ | -------- | ----------------------- | ---------- | ------------ | --------------- | ----- |
| **GitHub Issues + optional form** (recommended) | Low — no write/merge | Durable, searchable, public; SHA not needed for intake | Labels + search + close as duplicate | Moderate triage; close/defer cheap | Repo-local only; not Method law | Fits #14; matches #26 pattern |
| GitHub Discussions | Low | Weaker as closed triage tickets | Harder structured close | Conversation-heavy | Same vendor locality | Better for chat than evidence tickets |
| Repository-file observations (PR) | High — branch/commit/PR/merge | Strong once merged | Diff-visible | High for raw intake | Tool-neutral files | Appropriate for owner-controlled RI; poor external default |
| External forms / surveys | Low–medium | Off-repo; weaker long-term linkability | Weak | Import/copy burden | Extra vendor | Splits evidence from repo |
| Do nothing | N/A | Ad-hoc (mail, Reddit, DMs) | Accidental rework | Hidden | Neutral by absence | Reddit → #25/#26 worked via owner initiative; not discoverable for new contributors |

**Recommendation:** adopt GitHub Issues with an **optional** structured form;
keep backlog item 11 Deferred; do not require PRs for raw observations.

---

## 5. Steward triage guidance (minimal)

Use existing governance; do not invent parallel ledgers.

1. **Acknowledge class** — observation / question / duplicate / out of scope.
2. **Search** — existing Issues, Evolution Backlog, `docs/research/`, related
   PRs (example: whitepaper clarification [#25](https://github.com/tr1skow/AI-Software-Development-Framework/pull/25),
   capability extensibility [#26](https://github.com/tr1skow/AI-Software-Development-Framework/issues/26)).
3. **Disposition without Framework change is normal:**
   - **Close** — insufficient evidence, not actionable, or resolved by pointer
     to existing authority
   - **Duplicate** — link canonical Issue/PR/backlog item
   - **Defer** — leave open or close with “not now”; no backlog row required
   - **Promote (optional)** — only with evidence: Evolution Backlog candidate,
     research note, or bounded change Issue; then follow
     [GOVERNANCE.md](./GOVERNANCE.md) / [GD-001](./GOVERNANCE_DECISIONS/GD-001-Design-Review.md)
     as applicable
4. **Never** treat filing an observation as Approval, Norm creation, or
   automatic Evolution Backlog admission.

---

## 6. Illustrative case (Reddit → #25 / #26)

External architecture feedback (r/softwarearchitecture, October 2026) was
stewarded without an Observation Catalogue:

| Step | Outcome |
| ---- | ------- |
| External criticism | Referenced as origin context; not imported as law |
| Informative clarification | Merged whitepaper PR [#25](https://github.com/tr1skow/AI-Software-Development-Framework/pull/25) — no Normative ADR/Asset change |
| Open assessment | Issue [#26](https://github.com/tr1skow/AI-Software-Development-Framework/issues/26) — investigation tracker; may close with “no change” |
| Lesson for intake | A public Issue (or PR) can hold the signal; stewards decide Informative fix vs open question vs no Framework change |

Under this intake, the same feedback could have been filed first as an
observation Issue, then triaged to Informative docs and/or an assessment Issue.

---

## 7. Explicit non-claims

This stewardship packaging does **not**:

- create an Observation Catalogue or mandatory observation IDs
- make observations Normative or auto-promote them to Evolution Candidates
- amend FA-002 Tool Neutrality, GOVERNANCE.md, GD-001, or Accepted ADRs
- require GitHub Issues for consuming projects or Reference Implementations
- authorise release, deploy, or closing Issue #14 without Human acceptance
