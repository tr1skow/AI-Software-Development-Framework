# AI Software Development Framework

A vendor-neutral, importable framework for disciplined collaboration between
humans and AI agents on real software projects — greenfield, brownfield, and
modernisation alike.

This repository is the public home of that Framework. This README is a
**human landing page**. It summarises status and points to authoritative
documents. It is **not** Framework law, not a Local Project Entry, and not
an agent instruction root.

---

## Why this exists

AI coding tools accelerate implementation faster than they improve shared
understanding. Without a clear collaboration model, teams get premature code,
hidden architecture, weak review, invented contracts, and either too much
ceremony or none at all — often locked to one vendor’s workflow.

This Framework exists so humans and agents can plan, decide, implement, verify,
and accept software changes with **explicit human authority**, **proportionate
process**, and **reproducible baselines**, without turning engineering into a
prompt pack or a single project’s diary.

---

## Who it is for

- Solo developers and small teams using AI assistants day to day
- Software engineers, technical leads, and architects
- Engineering managers and CTOs evaluating disciplined AI-assisted delivery
- Contributors interested in vendor-neutral methodology and architecture

It is meant to work **with or without** a particular AI product, and across
stacks and domains.

---

## Current status

| | |
| --- | --- |
| **Phase** | **Framework Construction** |
| **Architecture Foundation** | **Complete** |
| **Project Integration Assets** | **Complete** (FA-004–FA-008) |
| **Change Classification** | **Operationalised** (FA-009–FA-010) |
| **Further Execution Assets** | Under construction (not yet selected or started) |
| **Maturity** | Construction in progress; the full importable Framework MVP is **not** complete yet |
| **Usability** | Greenfield Project Integration and Change Classification are usable for review and early trial — **not** a complete production-ready Framework kit or published consumer Baseline |

---

## Architecture Foundation

The Architecture Foundation is complete. It consists of:

- frozen Stage 1A / Stage 1A.1 architecture
- [ADR-001 — Framework Core Semantics](docs/adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md) (Accepted)
- [ADR-002 — Baseline Pinning and Versioning](docs/adr/ADR-002-BASELINE-PINNING-AND-VERSIONING.md) (Accepted)
- [ADR-003 — Project Integration and Precedence](docs/adr/ADR-003-PROJECT-INTEGRATION-AND-PRECEDENCE.md) (Accepted)
- [ADR-004 — Agent Interaction Model](docs/adr/ADR-004-AGENT-INTERACTION-MODEL.md) (Accepted)

Decision detail lives in those ADRs. This README does not restate their rules.

---

## Framework Assets

### Framework Core Assets

| Asset | Role |
| --- | --- |
| [FA-001 (Normative Labelling Convention)](docs/FA-001-NORMATIVE-LABELLING-CONVENTION.md) | Document force labels |
| [FA-002 (Method Spine)](docs/FA-002-METHOD-SPINE.md) | Normative Method principles |
| [FA-003 (Framework Overview)](docs/FA-003-FRAMEWORK-OVERVIEW.md) | Framework map |

### Project Integration Assets

| Asset | Role |
| --- | --- |
| [FA-004 (Pinning and Baseline Guide)](docs/FA-004-PINNING-AND-BASELINE-GUIDE.md) | Pin a reproducible Baseline |
| [FA-005 (Local Project Entry Guide)](docs/FA-005-LOCAL-PROJECT-ENTRY-GUIDE.md) | Canonical project gateway (incl. agent discovery) |
| [FA-006 (Local Project Entry Template)](docs/FA-006-LOCAL-PROJECT-ENTRY-TEMPLATE.md) | Entry declaration template |
| [FA-007 (Minimal Project Policy Starter)](docs/FA-007-MINIMAL-PROJECT-POLICY-STARTER.md) | Minimal Project Policy starter |
| [FA-008 (Greenfield Initialisation Checklist)](docs/FA-008-GREENFIELD-INITIALISATION-CHECKLIST.md) | Day-0 greenfield gate |

### Change Classification Assets

| Asset | Role |
| --- | --- |
| [FA-009 (Change Classification Guide)](docs/FA-009-CHANGE-CLASSIFICATION-GUIDE.md) | Capability binding mechanism |
| [FA-010 (Classification Record Template)](docs/FA-010-CLASSIFICATION-RECORD-TEMPLATE.md) | Classification record shape |

This README does not duplicate asset contents.

---

## Current work

**Active phase:** Framework Construction.

**Complete:** E3 — Project Integration Assets; first Execution capability —
Change Classification (FA-009, FA-010).

**Not started:** the next Execution capability set (not yet selected).

**Not complete yet:** remaining Runtime capability assets, importable MVP kit,
published consumer Framework Baseline, Getting Started adoption paths, Agent
Pack, and tool adapters.

---

## When you can use it

| You can | You should not yet |
| --- | --- |
| Establish a greenfield Project Integration (pin, Entry, Policy, checklist) | Treat this repo as a complete importable Framework kit |
| Classify a change with FA-009 / FA-010 | Expect a complete Runtime capability set or production-ready published Baseline |
| Review Architecture Foundation, Method, and Accepted ADRs | Claim full Framework adoption for a product |

A consuming project pins a Framework Baseline and uses a Local Project Entry as
its integration gateway. Change Classification produces the binding set for
Framework-governed work. Further Execution capabilities remain under
construction.

---

## Where to start

1. Read [FA-003 (Framework Overview)](docs/FA-003-FRAMEWORK-OVERVIEW.md).
2. Read [FA-002 (Method Spine)](docs/FA-002-METHOD-SPINE.md).
3. Use [FA-004](docs/FA-004-PINNING-AND-BASELINE-GUIDE.md) through
   [FA-008](docs/FA-008-GREENFIELD-INITIALISATION-CHECKLIST.md) for project
   initialisation.
4. Use [FA-009](docs/FA-009-CHANGE-CLASSIFICATION-GUIDE.md) and
   [FA-010](docs/FA-010-CLASSIFICATION-RECORD-TEMPLATE.md) for the first
   classified change.
5. Consult [ADR-001](docs/adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md) through
   [ADR-004](docs/adr/ADR-004-AGENT-INTERACTION-MODEL.md) for architectural
   authority.

This is not a Getting Started import procedure. No fake complete-adoption steps
are provided here.

---

## Documentation

| Location | Role |
| --- | --- |
| [docs/adr/](docs/adr/) | Authoritative architectural decisions (`ADR-###`) |
| Framework Assets above | Published `FA-###` by construction area |
| [FAIS](docs/governance/FRAMEWORK-ASSET-IDENTIFICATION-STANDARD.md) | Repository asset identification governance |

Further guides, templates, and examples will appear here as construction
continues. They will be linked from this README without being inlined here.

---

## Contributing

Architecture is decided through reviewed ADRs. Framework product content is
published as Framework Assets (`FA-###`). Please do not treat informal README
wording as normative.

Contribution process will expand as construction continues. Until then, useful
contribution is informed review of proposed assets and ADRs against the frozen
Architecture Foundation.

---

## License

[MIT](LICENSE) © 2026 tr1skow
