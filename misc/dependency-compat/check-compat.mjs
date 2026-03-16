#!/usr/bin/env node

/**
 * Dependency compatibility checker for charcoal-ui.
 *
 * Outputs:
 * - React peerDependency requirements across all packages
 * - Browser targets from .browserslistrc
 * - Key dependency versions
 *
 * Usage:
 *   node misc/dependency-compat/check-compat.mjs
 *   node misc/dependency-compat/check-compat.mjs --ci   # outputs to $GITHUB_STEP_SUMMARY
 */

import { readFileSync, readdirSync, existsSync, appendFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { execSync } from "node:child_process";

const ROOT = resolve(import.meta.dirname, "../..");
const isCI = process.argv.includes("--ci");

const KEY_DEPS = [
  "react",
  "react-dom",
  "@react-aria/overlays",
  "@react-aria/utils",
  "react-stately",
  "storybook",
  "tailwindcss",
  "typescript",
  "vite",
  "vitest",
  "tsdown",
  "eslint",
  "prettier",
];

function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, "utf-8"));
}

function getPackageDirs() {
  const packagesDir = join(ROOT, "packages");
  return readdirSync(packagesDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => join(packagesDir, d.name));
}

function collectReactPeerDeps() {
  const results = [];
  for (const dir of getPackageDirs()) {
    const pkgPath = join(dir, "package.json");
    if (!existsSync(pkgPath)) continue;
    const pkg = readJson(pkgPath);
    const peerDeps = pkg.peerDependencies || {};
    const reactReq = peerDeps.react;
    if (reactReq) {
      results.push({ name: pkg.name, react: reactReq });
    }
  }
  return results;
}

function getBrowserTargets() {
  const browserslistrc = join(ROOT, ".browserslistrc");
  if (!existsSync(browserslistrc)) {
    return ["(no .browserslistrc found)"];
  }
  return readFileSync(browserslistrc, "utf-8")
    .split("\n")
    .filter((line) => line.trim() && !line.startsWith("#"));
}

function getResolvedBrowsers() {
  try {
    const output = execSync("npx browserslist", { cwd: ROOT, encoding: "utf-8" });
    return output.trim().split("\n");
  } catch {
    return ["(browserslist command failed)"];
  }
}

function getKeyDepVersions() {
  const rootPkg = readJson(join(ROOT, "package.json"));
  const allDeps = {
    ...rootPkg.dependencies,
    ...rootPkg.devDependencies,
  };
  const results = [];
  for (const dep of KEY_DEPS) {
    const version = allDeps[dep];
    if (version) {
      results.push({ name: dep, version });
    }
  }
  return results;
}

function formatMarkdown() {
  const lines = [];

  lines.push("# Dependency Compatibility Report");
  lines.push("");

  // React peerDependencies
  lines.push("## React peerDependency Requirements");
  lines.push("");
  const reactPeers = collectReactPeerDeps();
  if (reactPeers.length === 0) {
    lines.push("No packages with React peerDependency found.");
  } else {
    lines.push("| Package | React Requirement |");
    lines.push("|---------|-------------------|");
    for (const { name, react } of reactPeers) {
      lines.push(`| ${name} | \`${react}\` |`);
    }
  }
  lines.push("");

  // Browser targets
  lines.push("## Browser Targets (.browserslistrc)");
  lines.push("");
  const targets = getBrowserTargets();
  for (const t of targets) {
    lines.push(`- ${t}`);
  }
  lines.push("");

  lines.push("### Resolved Browsers");
  lines.push("");
  lines.push("```");
  const resolved = getResolvedBrowsers();
  for (const b of resolved) {
    lines.push(b);
  }
  lines.push("```");
  lines.push("");

  // Key dependency versions
  lines.push("## Key Dependency Versions");
  lines.push("");
  lines.push("| Dependency | Version |");
  lines.push("|------------|---------|");
  const depVersions = getKeyDepVersions();
  for (const { name, version } of depVersions) {
    lines.push(`| ${name} | \`${version}\` |`);
  }
  lines.push("");

  return lines.join("\n");
}

const output = formatMarkdown();

if (isCI && process.env.GITHUB_STEP_SUMMARY) {
  appendFileSync(process.env.GITHUB_STEP_SUMMARY, output);
  console.log("Written to $GITHUB_STEP_SUMMARY");
} else {
  console.log(output);
}
