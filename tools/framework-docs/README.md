# Framework Documentation Assurance

Deterministic documentation validation for the AI Software Development
Framework repository.

**Authority:** validation rules live in this directory (and are invoked from
the repository). Jenkins (or any CI) is an **executor only**.

## What it checks

1. Required top-level paths: `README.md`, `CHANGELOG.md`, `docs/`
2. Duplicate `FA-###` document file prefixes under `docs/`
3. Internal relative Markdown file/link targets (skips URLs, mailto, same-file anchors, and fenced code samples)
4. Markdown lint via `markdownlint-cli2` using `.markdownlint-cli2.jsonc`

## Local usage

From this directory:

```bash
npm ci
npm run validate
```

Exit status: `0` = PASS, non-zero = FAIL (blocking).

## Lint policy notes

`.markdownlint-cli2.jsonc` disables or relaxes rules that conflict with the
existing Framework documentation corpus (for example long lines in Normative
Assets and repeated section headings in `CHANGELOG.md`). The first slice
establishes a deterministic gate without rewriting Framework semantics.

## Jenkins

See [`ci/jenkins/Jenkinsfile.docs`](../../ci/jenkins/Jenkinsfile.docs). The
pipeline runs the same `npm ci` + `npm run validate` entrypoint on agent
`synology-agent-01`.
