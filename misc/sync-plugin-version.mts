#!/usr/bin/env node
// Copies the version in lerna.json into every plugins/*/.claude-plugin/plugin.json
// so plugins carry the same version as the published @charcoal-ui packages.
// The publish workflow runs it right after `lerna version`. `--check` only
// reports drift (used in CI, where node_modules is absent, so prettier is
// imported lazily).
import { glob, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

type PluginManifest = { version?: string } & Record<string, unknown>

const __dirname = path.dirname(fileURLToPath(import.meta.url))
process.chdir(path.join(__dirname, '..'))

const check = process.argv.includes('--check')
const { version } = JSON.parse(await readFile('lerna.json', 'utf8')) as {
  version: string
}
const manifests = await Array.fromAsync(
  glob('plugins/*/.claude-plugin/plugin.json'),
)

const drifted: string[] = []
for (const manifest of manifests) {
  const json = JSON.parse(await readFile(manifest, 'utf8')) as PluginManifest
  if (json.version === version) continue
  drifted.push(manifest)
  console.log(`${manifest}: ${json.version} -> ${version}`)
  if (check) continue
  const prettier = await import('prettier')
  const options = await prettier.resolveConfig(manifest)
  const formatted = await prettier.format(
    JSON.stringify({ ...json, version }),
    { ...options, filepath: manifest },
  )
  await writeFile(manifest, formatted)
}

if (check && drifted.length > 0) {
  console.error(
    `plugin.json version must match lerna.json (${version}). Run: node misc/sync-plugin-version.mts`,
  )
  process.exit(1)
}
