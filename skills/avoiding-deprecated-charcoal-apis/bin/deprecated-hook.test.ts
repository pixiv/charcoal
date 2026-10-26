import { expect, test } from 'vitest'
import { mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'
import {
  deprecatedImports,
  GATE_REASON,
  note,
  respond,
  writesCode,
} from './deprecated-hook.mjs'

const stateDir = () => mkdtempSync(join(tmpdir(), 'charcoal-hook-'))
const SANDBOX_FILE = {
  file: { content: 'import { Pager } from "@charcoal-ui/react-sandbox"\n' },
}
const write = {
  hook_event_name: 'PreToolUse',
  tool_name: 'Write',
  tool_input: { file_path: '/app/src/Screen.tsx' },
}
const read = {
  hook_event_name: 'PostToolUse',
  tool_name: 'Read',
  tool_response: SANDBOX_FILE,
}

test('finds imports of deprecated packages, not mentions of them', () => {
  expect(deprecatedImports(JSON.stringify(SANDBOX_FILE))).toEqual([
    '@charcoal-ui/react-sandbox',
  ])
  expect(
    deprecatedImports(`const t = require('@charcoal-ui/tailwind-diff')`),
  ).toEqual(['@charcoal-ui/tailwind-diff'])
  expect(
    deprecatedImports(`export * from '@charcoal-ui/react-sandbox/dist/x'`),
  ).toEqual(['@charcoal-ui/react-sandbox'])
  expect(deprecatedImports(`"@charcoal-ui/react-sandbox": "^6.0.0"`)).toEqual(
    [],
  )
  expect(
    deprecatedImports(`import { Button } from '@charcoal-ui/react'`),
  ).toEqual([])
})

test('notes a deprecated import once per session', () => {
  const dir = stateDir()
  const out = JSON.parse(
    respond({ ...read, session_id: 's' }, { stateDir: dir }) ?? '{}',
  )
  expect(out.hookSpecificOutput).toEqual({
    hookEventName: 'PostToolUse',
    additionalContext: note(['@charcoal-ui/react-sandbox']),
  })
  expect(
    respond({ ...read, session_id: 's' }, { stateDir: dir }),
  ).toBeUndefined()
  expect(
    respond(
      { ...read, session_id: 's', tool_response: 'nothing here' },
      { stateDir: stateDir() },
    ),
  ).toBeUndefined()
})

test('denies code writes after a deprecated import is seen, until the user is asked', () => {
  const dir = stateDir()
  const s = { session_id: 's' }
  expect(respond({ ...s, ...write }, { stateDir: dir })).toBeUndefined()
  respond({ ...s, ...read }, { stateDir: dir })

  expect(
    JSON.parse(respond({ ...s, ...write }, { stateDir: dir }) ?? '{}')
      .hookSpecificOutput,
  ).toEqual({
    hookEventName: 'PreToolUse',
    permissionDecision: 'deny',
    permissionDecisionReason: GATE_REASON,
  })
  const build = {
    ...s,
    hook_event_name: 'PreToolUse',
    tool_name: 'Bash',
    tool_input: { command: 'npm run build' },
  }
  expect(respond(build, { stateDir: dir })).toBeUndefined()

  respond(
    {
      ...s,
      hook_event_name: 'PreToolUse',
      tool_name: 'AskUserQuestion',
      tool_input: {},
    },
    { stateDir: dir },
  )
  expect(respond({ ...s, ...write }, { stateDir: dir })).toBeUndefined()
})

test('counts new code that imports a deprecated package as seeing it', () => {
  const input = {
    ...write,
    session_id: 'n',
    tool_input: { ...write.tool_input, content: SANDBOX_FILE.file.content },
  }
  expect(
    JSON.parse(respond(input, { stateDir: stateDir() }) ?? '{}')
      .hookSpecificOutput.permissionDecision,
  ).toBe('deny')
})

test('leaves the gate off when asked to, and still notes', () => {
  const dir = stateDir()
  expect(
    respond({ ...read, session_id: 'g' }, { stateDir: dir, gate: false }),
  ).toBeDefined()
  expect(
    respond({ ...write, session_id: 'g' }, { stateDir: dir, gate: false }),
  ).toBeUndefined()
})

test('counts code-file writes only', () => {
  const bash = (command: string) =>
    writesCode({ tool_name: 'Bash', tool_input: { command } })
  expect(bash("cat > src/Screen.tsx <<'EOF'")).toBe(true)
  expect(bash('sed -i "" s/a/b/ src/app/SearchPager.tsx')).toBe(true)
  expect(bash('cat src/app/SearchPager.tsx')).toBe(false)
  expect(bash('npm run build > build.log')).toBe(false)
  expect(
    writesCode({ tool_name: 'Edit', tool_input: { file_path: 'README.md' } }),
  ).toBe(false)
})

test('runs as a hook command, and stays silent on input it cannot parse', () => {
  const script = fileURLToPath(
    new URL('./deprecated-hook.mjs', import.meta.url),
  )
  const run = (stdin: string) =>
    spawnSync(process.execPath, [script], { input: stdin, encoding: 'utf8' })
  const hit = run(
    JSON.stringify({ ...read, session_id: `cli-${process.pid}-${Date.now()}` }),
  )
  expect(hit.status).toBe(0)
  expect(JSON.parse(hit.stdout).hookSpecificOutput.hookEventName).toBe(
    'PostToolUse',
  )
  const broken = run('not json')
  expect(broken.status).toBe(0)
  expect(broken.stdout).toBe('')
})
