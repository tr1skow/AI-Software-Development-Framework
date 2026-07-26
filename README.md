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
| **Maturity** | Construction has begun; the importable Framework MVP is **not** complete yet |
| **Usability** | Architecture and core assets are available for review — **not** a complete importable kit or production-ready published Baseline |

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

## Framework Core Assets

Published Framework Core Assets (E2):

| Asset | Role |
| --- | --- |
| [FA-001 (Normative Labelling Convention)](docs/FA-001-NORMATIVE-LABELLING-CONVENTION.md) | Document force labels |
| [FA-002 (Method Spine)](docs/FA-002-METHOD-SPINE.md) | Normative Method principles |
| [FA-003 (Framework Overview)](docs/FA-003-FRAMEWORK-OVERVIEW.md) | Framework map |

This README does not duplicate their contents.

---

## Current work

**Active phase:** Framework Construction.

**Next construction area (not started):** **E3 — Project Integration Assets** —
pinning and Baseline guidance, plus Local Project Entry guidance and template.

**Not complete yet:** importable MVP kit, published consumer Framework Baseline,
Getting Started adoption paths, Agent Pack, and tool adapters.

---

## When you can use it

| You can | You should not yet |
| --- | --- |
| Review the Architecture Foundation and core assets | Treat this repo as a complete importable Framework kit |
| Read Method, Overview, and Accepted ADRs | Expect a production-ready published Framework Baseline |
| Track construction progress | Claim full Framework adoption for a product |

A consuming project will later pin an immutable **Framework Baseline** and use
a **Local Project Entry** as its integration gateway. Those Project Integration
and adoption assets are not published yet.

---

## Where to start

1. Read [FA-003 (Framework Overview)](docs/FA-003-FRAMEWORK-OVERVIEW.md).
2. Read [FA-002 (Method Spine)](docs/FA-002-METHOD-SPINE.md).
3. Consult [ADR-001](docs/adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md) through
   [ADR-004](docs/adr/ADR-004-AGENT-INTERACTION-MODEL.md) for architectural
   authority.
4. Follow repository development until Project Integration and adoption assets
   are published.

This is not a Getting Started import procedure. No fake adoption steps are
provided here.

---

## Documentation

| Location | Role |
| --- | --- |
| [docs/adr/](docs/adr/) | Authoritative architectural decisions (`ADR-###`) |
| [FA-001 (Normative Labelling Convention)](docs/FA-001-NORMATIVE-LABELLING-CONVENTION.md) | Document force labels |
| [FA-002 (Method Spine)](docs/FA-002-METHOD-SPINE.md) | Normative Method principles |
| [FA-003 (Framework Overview)](docs/FA-003-FRAMEWORK-OVERVIEW.md) | Framework map |
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
