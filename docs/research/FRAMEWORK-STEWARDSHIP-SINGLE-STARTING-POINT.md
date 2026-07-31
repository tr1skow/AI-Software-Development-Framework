# Framework Stewardship — Single Official Starting Point

| Attribute | Value |
| --------- | ----- |
| Document | Framework Stewardship — Single Official Starting Point |
| Classification | Informative / Research (stewardship) |
| Status | Complete — recommendations recorded; editorial updates applied on this branch |
| Framework baseline | Framework v0.2.0; Runtime Foundation M2 |
| Kind | Stewardship review — **not** a Design Investigation mandate, Asset, ADR, or governance change |

**This review improves discoverability and onboarding navigation.** It does not
create Framework Assets, introduce governance, redesign architecture, or change
Runtime, Ownership, ADRs, or Framework Assets’ Normative bodies.

If this document and an Accepted ADR or labelled Framework Asset appear to
disagree, the Accepted ADRs and labelled Framework Assets are authoritative.

---

## Review scope

Evaluated onboarding surfaces:

| Surface | Role today |
| ------- | ---------- |
| [README.md](../../README.md) | Human landing; documentation map hub |
| [Alpha Adoption Guide](../adoption/FRAMEWORK-0.7-ALPHA-ADOPTION-GUIDE.md) | Temporary Alpha evaluation path |
| [FA-005 Local Project Entry](../FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md) | Canonical project-side gateway (humans + agents) |
| [FA-003 Framework Overview](../FA-003-FRAMEWORK-OVERVIEW.md) | Framework map / orientation |
| [Framework Invocation Guide](../FRAMEWORK-INVOCATION-GUIDE.md) | Permanent post-Integration session discipline |
| Integration path (FA-004–FA-008 + ADR-003) | How Project Integration is established |
| CONTRIBUTING.md | **Does not exist** — README Contributing is the intentional surface |

Prior evidence: [First-Time Application Review](./FRAMEWORK-APPLICATION-REVIEW-FIRST-TIME-PROJECT.md)
(dual start paths = high first-hour friction).

---

## Intended navigation journey

### 1. Recommended navigation model

```text
Framework repository discovery
        │
        ▼
┌───────────────────────┐
│  README.md            │  ← single official Framework starting point
│  (human landing hub)  │
└───────────┬───────────┘
            │
            ├─ orientation (optional depth)
            │     Whitepaper · FA-003 · FA-002 · ADRs
            │
            ▼
┌───────────────────────┐
│  Alpha Adoption Guide │  ← singular practical path for first-time evaluation
└───────────┬───────────┘
            │  establish Project Integration
            │  + first Framework-governed change
            ▼
┌───────────────────────┐
│  Invocation Guide     │  ← permanent day-to-day operational reference
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│  Local Project Entry  │  ← authoritative root on the consuming project
│  (FA-005 / FA-006)    │     for humans and AI agents
└───────────────────────┘
```

**Roles (one job each):**

| Document | Job |
| -------- | --- |
| **README** | Official Framework starting point — status, map, and pointers only |
| **Alpha Adoption Guide** | First-time evaluation: Integration + first change |
| **Invocation Guide** | Session discipline after Integration exists |
| **Local Project Entry** | Project-side discovery root (not the Framework repo README) |
| **FA-003 / Whitepaper / FA-002** | Orientation depth — not alternate start paths |
| **ADRs / FA Assets** | Authority and working guidance — opened when needed |
| **README Contributing** | Contributor surface (no separate CONTRIBUTING.md) |

### Human engineers

1. Open the repository → **README**.
2. Follow **Alpha Adoption Guide** (not a parallel FA-003→FA-008 checklist on the README).
3. Use FA-003 / whitepaper / FA-002 only for orientation depth.
4. After the first change → **Invocation Guide**.
5. On the consuming project → work through the **Local Project Entry**.

### AI agents

| Context | Start here |
| ------- | ---------- |
| Consuming project already integrated | **Local Project Entry** first (FA-005 agent discovery contract) |
| Session discipline after Entry | **Invocation Guide** (pointed from Entry / agent instructions) |
| Framework repository exploration (no project Entry yet) | **README** → same map as humans; do **not** treat README as project root |
| Greenfield before Integration | **Cannot** self-bootstrap — Human Authority / Decision Owner required |

Agents and humans share one precedence model. Agents must never treat README,
chat history, or tool memory as the authoritative project root.

---

## 2. Documentation update plan

| File | Reason | Exact edits |
| ---- | ------ | ----------- |
| [README.md](../../README.md) | Remove dual start path; make Adoption the singular practical next step | Rewrite **Where to start**: lead with Alpha Adoption Guide; demote FA-003/FA-002/M2/ADRs to orientation/authority depth; state post-adoption → Invocation; state consuming-project root → Local Project Entry; keep “not Getting Started kit” honesty |
| [README.md](../../README.md) | Make landing role explicit without competing with Adoption | Strengthen opening: README = official Framework starting point / landing hub; practical evaluation path = Adoption Guide |
| [FA-003](../FA-003-FRAMEWORK-OVERVIEW.md) | Stop competing as an alternate “start here” | Update **How to read this repository**: README = landing; Adoption Guide = practical Alpha evaluation path; FA-003 remains orientation map |
| [Alpha Adoption Guide](../adoption/FRAMEWORK-0.7-ALPHA-ADOPTION-GUIDE.md) | Confirm it is the practical start after README; reduce draft friction | Add “where you are in the journey” pointer (README → here → Invocation); set Status to **Published (Alpha packaging)** |
| [Invocation Guide](../FRAMEWORK-INVOCATION-GUIDE.md) | Clarify not a first-time start; reduce draft friction | Strengthen audience/precondition: if not integrated, start at README → Adoption; set Status to **Published (Alpha packaging)**; keep document map aligned |
| [FA-005](../FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md) | Distinguish Framework-repo start vs project root | Informative Day-0 narrative only: Framework discovery starts at README/Adoption; once integrated, Entry is the project root |
| CONTRIBUTING.md | Avoid inventing a second contributor surface | **No file created** — README Contributing remains authoritative per Alpha merge readiness |
| AIS-001 illustration | Already shows README as primary entry + Adoption → Invocation | **No change this turn** — map already matches the model; refresh remains low-urgency stewardship |

**Out of scope (constraints):** new Assets, Getting Started kit, Agent Pack,
published consumer Baseline, Runtime/ADR/Ownership edits, new governance.

---

## 3. Duplication review

| Topic | Duplicated where | Authoritative home | Supporting surfaces should… |
| ----- | ---------------- | ------------------ | --------------------------- |
| Framework landing / status | README maturity; Adoption §2; whitepaper maturity | **README** (status); assets/ADRs (law) | Link; do not invent rival maturity claims |
| First-time evaluation sequence | README “Where to start” (old); Adoption §3–4; FA-003 Day-0 narrative | **Alpha Adoption Guide** | README points once; FA-003/FA-005 Day-0 link to Adoption |
| Orientation / architecture map | README principles; FA-003; whitepaper | **FA-003** (map); **ADRs** (decisions); whitepaper (narrative) | README keeps one-line principles + links |
| Project Integration how-to | Adoption §3; FA-004–008 | **FA-004–FA-008** (Normative/Recommended detail) | Adoption remains ID-first sequence only |
| Session discipline | Adoption §4.2 hints; Invocation full body; FA-005 agent contract | **Invocation Guide** (ops); **FA-005** (Entry/agent contract) | Adoption hands off; projects point to Invocation |
| Agent discovery root | FA-005; ADR-003/004; Invocation §4/§8 | **FA-005** (+ ADR-003) | Invocation/Adoption link; never paste into prompts |
| Contributor evolution rules | README Contributing; FA-002 Amendment; ADR-002; FAIS | Those cited authorities | README Contributing points only — no CONTRIBUTING.md |
| Capability invocation tables | Adoption §4.2; Invocation §6 | Either may list IDs; **capability Assets** are law | Keep thin ID tables; do not restate Runtime |

**Duplication to remove (editorial):** the README numbered path that restated
Integration + classification without sending readers to the Adoption Guide.

---

## 4. Final recommendation

### Official Framework starting point

**`README.md` is the single official starting point** for the Framework
repository — for human engineers discovering the product and for AI agents
exploring this repository before a consuming-project Entry exists.

### Why this yields the lowest cognitive load

1. **One door** — newcomers always open the README; they are not asked to
   choose among FA-003, whitepaper, Adoption, and Invocation as equals.
2. **One practical path** — README sends first-time evaluators to the Alpha
   Adoption Guide only; orientation docs become optional depth.
3. **One handoff** — Adoption finishes; Invocation owns day-to-day work.
4. **One project root** — after Integration, Local Project Entry is
   authoritative for humans and agents alike (unchanged Alpha architecture).
5. **No new Assets or governance** — stewardship uses existing surfaces;
   architecture, Runtime, Ownership, and ADRs remain stable.

### What is *not* the Framework starting point

| Document | Why not |
| -------- | ------- |
| Alpha Adoption Guide | Practical evaluation path — reached *from* README |
| FA-003 | Orientation map — depth, not the door |
| Whitepaper | Narrative — optional |
| Invocation Guide | Requires Project Integration already |
| Local Project Entry | Consuming-project root — not Framework-repo discovery |
| CONTRIBUTING.md | Intentionally absent |

---

## Implementation note

Editorial updates listed in §2 are applied on the Framework Stewardship branch
alongside this review. Normative Asset decision bodies and ADRs are untouched.

---

## End of Framework Stewardship — Single Official Starting Point
