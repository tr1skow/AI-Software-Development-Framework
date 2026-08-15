#!/usr/bin/env node
/**
 * Framework Documentation Assurance — deterministic validator.
 * Repository-owned rules; CI/Jenkins is an executor only.
 *
 * Checks:
 * 1. Required top-level paths (README.md, CHANGELOG.md, docs/)
 * 2. Duplicate FA-### file prefixes / identifiers under docs/
 * 3. Internal relative Markdown file references (where reliably resolvable)
 * 4. Markdown lint (markdownlint-cli2)
 *
 * Exit 0 = PASS, non-zero = FAIL (blocking).
 */

import { spawnSync } from "node:child_process";
import {
  existsSync,
  readdirSync,
  readFileSync,
  statSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "../..");

/** @type {{ code: string, message: string }[]} */
const failures = [];

function fail(code, message) {
  failures.push({ code, message });
}

function checkRequiredPaths() {
  const requiredFiles = ["README.md", "CHANGELOG.md"];
  for (const rel of requiredFiles) {
    const abs = path.join(REPO_ROOT, rel);
    if (!existsSync(abs) || !statSync(abs).isFile()) {
      fail("REQUIRED_PATH", `Missing required file: ${rel}`);
    }
  }
  const docsDir = path.join(REPO_ROOT, "docs");
  if (!existsSync(docsDir) || !statSync(docsDir).isDirectory()) {
    fail("REQUIRED_PATH", "Missing required directory: docs/");
  }
}

/**
 * @param {string} dir
 * @param {(abs: string, rel: string) => void} visit
 */
function walkMarkdown(dir, visit) {
  if (!existsSync(dir)) return;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".git") continue;
    const abs = path.join(dir, entry.name);
    const rel = path.relative(REPO_ROOT, abs).split(path.sep).join("/");
    if (entry.isDirectory()) {
      walkMarkdown(abs, visit);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      visit(abs, rel);
    }
  }
}

function checkFaDuplicates() {
  /** @type {Map<string, string[]>} */
  const byId = new Map();
  const docsRoot = path.join(REPO_ROOT, "docs");

  walkMarkdown(docsRoot, (abs, rel) => {
    const base = path.basename(abs);
    const fileMatch = base.match(/^FA-(\d+)\b/i);
    if (fileMatch) {
      const id = `FA-${fileMatch[1].padStart(3, "0")}`;
      const list = byId.get(id) ?? [];
      list.push(`file:${rel}`);
      byId.set(id, list);
    }

    const text = readFileSync(abs, "utf8");
    const headerMatch = text.match(
      /^\|\s*Asset\s+ID\s*\|\s*(FA-\d+)\s*\|/im,
    );
    if (headerMatch) {
      const raw = headerMatch[1].toUpperCase();
      const num = raw.replace(/^FA-/i, "");
      const id = `FA-${num.padStart(3, "0")}`;
      const list = byId.get(id) ?? [];
      list.push(`header:${rel}`);
      byId.set(id, list);
    }
  });

  for (const [id, refs] of [...byId.entries()].sort()) {
    const fileRefs = refs.filter((r) => r.startsWith("file:"));
    const uniqueFiles = [...new Set(fileRefs.map((r) => r.slice(5)))];
    if (uniqueFiles.length > 1) {
      fail(
        "FA_DUPLICATE",
        `Duplicate FA document prefix ${id} across files: ${uniqueFiles.join(", ")}`,
      );
    }
  }
}

/**
 * Strip fenced code blocks so example links are not validated as live refs.
 * @param {string} markdown
 */
function stripFencedCode(markdown) {
  return markdown.replace(/```[\s\S]*?```/g, "\n");
}

/**
 * @param {string} fromFileAbs
 * @param {string} targetRaw
 */
function resolveRelativeTarget(fromFileAbs, targetRaw) {
  let target = targetRaw.trim();
  if (!target) return null;
  if (/^[a-z][a-z0-9+.-]*:/i.test(target)) return null; // scheme URLs
  if (target.startsWith("//")) return null;
  if (target.startsWith("#")) return null; // same-file anchor only

  const hashIndex = target.indexOf("#");
  if (hashIndex >= 0) {
    target = target.slice(0, hashIndex);
  }
  if (!target) return null;

  // Root-relative from repo root (common in some docs)
  if (target.startsWith("/")) {
    return path.join(REPO_ROOT, target.slice(1));
  }

  return path.resolve(path.dirname(fromFileAbs), target);
}

function checkRelativeLinks() {
  const roots = [path.join(REPO_ROOT, "docs"), REPO_ROOT];
  const visited = new Set();

  for (const root of roots) {
    const files =
      root === REPO_ROOT
        ? ["README.md", "CHANGELOG.md"]
            .map((f) => path.join(REPO_ROOT, f))
            .filter((abs) => existsSync(abs))
        : (() => {
            /** @type {string[]} */
            const list = [];
            walkMarkdown(root, (abs) => list.push(abs));
            return list;
          })();

    for (const abs of files) {
      if (visited.has(abs)) continue;
      visited.add(abs);
      const rel = path.relative(REPO_ROOT, abs).split(path.sep).join("/");
      const body = stripFencedCode(readFileSync(abs, "utf8"));

      // Inline links and images: ](target) — skip empty / scheme / anchor-only
      const linkRe = /!\[[^\]]*]\(\s*<?([^)\s>]+)>?\s*\)|\[[^\]]*]\(\s*<?([^)\s>]+)>?\s*\)/g;
      let match;
      while ((match = linkRe.exec(body)) !== null) {
        const targetRaw = match[1] ?? match[2];
        const resolved = resolveRelativeTarget(abs, targetRaw);
        if (resolved === null) continue;
        if (!existsSync(resolved)) {
          fail(
            "RELATIVE_LINK",
            `${rel}: missing target "${targetRaw}" (resolved: ${path
              .relative(REPO_ROOT, resolved)
              .split(path.sep)
              .join("/")})`,
          );
        }
      }
    }
  }
}

function runMarkdownlint() {
  const cli = path.join(
    __dirname,
    "node_modules",
    "markdownlint-cli2",
    "markdownlint-cli2-bin.mjs",
  );
  if (!existsSync(cli)) {
    fail(
      "MARKDOWNLINT",
      "markdownlint-cli2 not installed. Run: npm ci (in tools/framework-docs)",
    );
    return;
  }

  const result = spawnSync(process.execPath, [cli], {
    cwd: __dirname,
    encoding: "utf8",
    env: process.env,
  });

  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);

  if (result.status !== 0) {
    fail(
      "MARKDOWNLINT",
      `markdownlint-cli2 reported findings (exit ${result.status ?? "null"})`,
    );
  }
}

function main() {
  console.log("Framework Documentation Assurance");
  console.log(`Repository root: ${REPO_ROOT}`);
  console.log("");

  checkRequiredPaths();
  checkFaDuplicates();
  checkRelativeLinks();
  runMarkdownlint();

  console.log("");
  if (failures.length === 0) {
    console.log("RESULT: PASS");
    process.exit(0);
  }

  console.log(`RESULT: FAIL (${failures.length} finding(s))`);
  for (const f of failures) {
    console.log(`- [${f.code}] ${f.message}`);
  }
  process.exit(1);
}

main();
