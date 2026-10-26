/**
 * Claude Code hook for the charcoal plugin: keeps an agent from silently building on
 * existing code that imports a deprecated `@charcoal-ui` package.
 *
 * - PostToolUse on Read / Bash / Grep: when the output shows such an import, record it and,
 *   once per session, tell the agent which package is deprecated and that migrating is the
 *   user's call.
 * - PreToolUse on AskUserQuestion: record that the user has been asked.
 * - PreToolUse on a code write: deny it while a deprecated import has been seen and the
 *   user has not been asked yet. `CHARCOAL_DEPRECATED_GATE=0` turns this part off, for a
 *   headless run where nobody can answer.
 *
 * A note in the skill's description alone did not make agents ask; this does. The texts
 * are written as facts on purpose: an imperative, system-style note can be taken for a
 * prompt injection and shown to the user instead of acted on. They also speak as the
 * project's own tooling: signed as a plugin's advice, the note was set aside until the
 * gate blocked a write.
 */
import { existsSync, readFileSync, realpathSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

/** Each deprecated package, and what replaces it. */
export const DEPRECATED = {
  '@charcoal-ui/react-sandbox':
    'its components (Pager, Layout and LeftMenu among them) have replacements in @charcoal-ui/react, mapped one by one in the avoiding-deprecated-charcoal-apis skill',
  '@charcoal-ui/tailwind-diff':
    'it is scheduled for discontinuation and has no replacement',
}

// An import, re-export or require of a deprecated package. Quotes may arrive escaped, since
// tool output is matched as JSON text.
const IMPORT =
  /(?:\bfrom\s*|\bimport\s*\(?\s*|\brequire\s*\(\s*)\\*["'](@charcoal-ui\/(?:react-sandbox|tailwind-diff))(?:\/[^"'\\]*)?\\*["']/g
const CODE_FILE = /\.(?:[cm]?[jt]sx?|css|vue|svelte)$/
// A shell command that writes a code file: a redirect, tee, or in-place sed/perl.
const BASH_CODE_WRITE =
  /(?:>|\btee\b|sed -i[^;|&]*|perl -pi[^;|&]*)\s*['"]?[^\s'";|&]*\.(?:[cm]?[jt]sx?|css|vue|svelte)\b/

/** @param {string[]} packages */
export function note(packages) {
  const lines = packages.map(
    (p) =>
      `${p} is deprecated in charcoal: ${DEPRECATED[/** @type {keyof typeof DEPRECATED} */ (p)]}.`,
  )
  return `Project tooling note (charcoal plugin): this output contains code that imports ${packages.join(' and ')}. ${lines.join(' ')} In this project, whether existing code that depends on a deprecated charcoal package is migrated first or kept as it is gets decided by the user, through AskUserQuestion, not by the assistant on its own.`
}

export const GATE_REASON =
  'Project tooling (charcoal plugin): this session has seen existing code that imports a deprecated @charcoal-ui package, and the user has not yet been asked whether to migrate that code first or keep it as it is. In this project that decision belongs to the user, through AskUserQuestion. Code writes stay blocked until the question has been asked.'

/**
 * @typedef {object} HookInput
 * @property {string} [session_id]
 * @property {string} [hook_event_name]
 * @property {string} [tool_name]
 * @property {{ file_path?: unknown, command?: unknown }} [tool_input]
 * @property {unknown} [tool_response]
 */

/** @param {string} text */
export function deprecatedImports(text) {
  return [
    ...new Set(
      [...text.matchAll(IMPORT)].map((m) => /** @type {string} */ (m[1])),
    ),
  ]
}

/** @param {HookInput} input */
export function writesCode(input) {
  const tool = input.tool_name ?? ''
  if (['Write', 'Edit', 'MultiEdit'].includes(tool)) {
    return CODE_FILE.test(String(input.tool_input?.file_path ?? ''))
  }
  if (tool === 'Bash') {
    return BASH_CODE_WRITE.test(String(input.tool_input?.command ?? ''))
  }
  return false
}

/**
 * The hook's stdout for one event, or undefined to stay silent.
 *
 * @param {HookInput} input
 * @param {{ stateDir?: string, gate?: boolean }} [options]
 */
export function respond(input, { stateDir = tmpdir(), gate = true } = {}) {
  const marker = (/** @type {string} */ kind) =>
    join(
      stateDir,
      `charcoal-deprecated-${kind}-${input.session_id ?? 'unknown'}`,
    )

  if (input.hook_event_name === 'PostToolUse') {
    const packages = deprecatedImports(
      JSON.stringify(input.tool_response ?? ''),
    )
    if (packages.length === 0) {
      return undefined
    }
    writeFileSync(marker('seen'), '')
    if (existsSync(marker('noted'))) {
      return undefined
    }
    writeFileSync(marker('noted'), '')
    return JSON.stringify({
      hookSpecificOutput: {
        hookEventName: 'PostToolUse',
        additionalContext: note(packages),
      },
    })
  }

  if (input.hook_event_name !== 'PreToolUse') {
    return undefined
  }
  if (input.tool_name === 'AskUserQuestion') {
    writeFileSync(marker('asked'), '')
    return undefined
  }
  // New code that itself imports a deprecated package counts as having seen it.
  if (deprecatedImports(JSON.stringify(input.tool_input ?? '')).length > 0) {
    writeFileSync(marker('seen'), '')
  }
  if (
    !gate ||
    !writesCode(input) ||
    !existsSync(marker('seen')) ||
    existsSync(marker('asked'))
  ) {
    return undefined
  }
  return JSON.stringify({
    hookSpecificOutput: {
      hookEventName: 'PreToolUse',
      permissionDecision: 'deny',
      permissionDecisionReason: GATE_REASON,
    },
  })
}

// Node realpaths the entry module, so the path in argv has to be resolved to match.
const mainUrl = (() => {
  try {
    return pathToFileURL(realpathSync(resolve(process.argv[1] ?? ''))).href
  } catch {
    return undefined
  }
})()

if (mainUrl !== undefined && import.meta.url === mainUrl) {
  // A broken hook must never block the agent's work, so any failure stays silent.
  try {
    const input = JSON.parse(readFileSync(0, 'utf8') || '{}')
    const out = respond(input, {
      gate: process.env.CHARCOAL_DEPRECATED_GATE !== '0',
    })
    if (out) {
      process.stdout.write(out)
    }
  } catch {
    // Nothing to report: the tool call goes ahead as if no hook were installed.
  }
}
