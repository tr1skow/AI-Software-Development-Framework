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
| **Phase** | Architecture Phase |
| **Maturity** | Pre-authoring — architectural decisions are being frozen; importable guides and templates are **not** published yet |
| **Usability** | Suitable for following and reviewing architecture work — **not** a production-ready adoption kit |

---

## Architecture Baseline

The current Framework Architecture Baseline includes:

- Stage 1A Framework Architecture (frozen)
- Stage 1A.1 Architecture Refinement (accepted)
- Stage 1B ADR roadmap (approved)

**Accepted ADRs** (authoritative decision records):

| ADR | Title |
| --- | --- |
| [ADR-001](docs/adr/ADR-001-FRAMEWORK-CORE-SEMANTICS.md) | Framework Core Semantics |
| [ADR-002](docs/adr/ADR-002-BASELINE-PINNING-AND-VERSIONING.md) | Baseline Pinning and Versioning |
| [ADR-003](docs/adr/ADR-003-PROJECT-INTEGRATION-AND-PRECEDENCE.md) | Project Integration and Precedence |

Decision detail lives in those ADRs. This README does not restate their rules.

---

## Current work

**In progress:** remaining pre-authoring architecture (next: ADR-004 — Agent Interaction Model).

**Not started yet:** Framework asset authoring (guides, templates, adoption
paths), published Framework Baselines for project import, and tool adapters.

---

## When you can use it

| You can | You should not yet |
| --- | --- |
| Read the vision and Accepted ADRs | Treat this repo as a drop-in project kit |
| Track architectural progress | Expect pin-ready guides, Entry templates, or agent packs |
| Plan future adoption against the emerging baseline | Assume production readiness or stable Baseline identity |

A consuming project will later pin an immutable **Framework Baseline** and use
a **Local Project Entry** as its integration gateway. Those adoption assets are
not authored in this phase.

---

## Where to start

1. Read this page for orientation.
2. Skim the [Accepted ADRs](docs/adr/) in order (001 → 002 → 003).
3. Watch for ADR-004 and the later authoring phase if you intend to adopt.

If you are evaluating adoption for a real product: treat the Architecture
Baseline as the current contract of intent, and wait for published baselines
and Getting Started materials before importing into a project.

---

## Documentation

| Location | Role |
| --- | --- |
| [docs/adr/](docs/adr/) | Authoritative architectural decisions |

Further guides, templates, and examples will appear here when the authoring
phase begins. They will be linked from this README without being inlined here.

---

## Contributing

Architecture is decided through reviewed ADRs. Please do not treat informal
README wording as normative.

Contribution process and coding standards will be expanded when the project
moves beyond the Architecture Phase. Until then, the useful contribution is
informed review of proposed ADRs against the frozen baseline.

---

## License

[MIT](LICENSE) © 2026 tr1skow
