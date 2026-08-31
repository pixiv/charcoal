import { spawnSync } from 'node:child_process'

const packageName = '@charcoal-ui/tailwind-config/token-v2'

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: process.cwd(),
    encoding: 'utf8',
  })

  if (result.status !== 0) {
    process.stderr.write(result.stdout)
    process.stderr.write(result.stderr)
    process.exit(result.status ?? 1)
  }
}

function runExpectFailure(command, args) {
  const result = spawnSync(command, args, {
    cwd: process.cwd(),
    encoding: 'utf8',
  })

  if (result.status === 0) {
    process.exit(1)
  }
}

run('node', [
  '--input-type=module',
  '--eval',
  `const resolver = await import('${packageName}'); if (Object.keys(resolver).join() !== '_resolveTokenV2ClassNames') process.exit(1)`,
])
run('node', [
  '--eval',
  `const resolver = require('${packageName}'); if (Object.keys(resolver).join() !== '_resolveTokenV2ClassNames') process.exit(1)`,
])
runExpectFailure('node', ['--eval', `require('${packageName}/definition')`])
run('pnpm', [
  'exec',
  'tsc',
  '--project',
  'scripts/publish-smoke/tsconfig.nodenext.json',
])
run('pnpm', [
  'exec',
  'tsc',
  '--project',
  'scripts/publish-smoke/tsconfig.bundler.json',
])
