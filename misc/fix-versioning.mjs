#!/usr/bin/env node
import { glob, readFile, writeFile } from 'node:fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

process.chdir(path.join(__dirname, '..'))

const packages = await Array.fromAsync(glob('packages/*/package.json'))

const packagesJson = Object.fromEntries(
  await Promise.all(
    packages.map(async (packagePath) => [
      packagePath,
      JSON.parse(await readFile(packagePath, 'utf8')),
    ]),
  ),
)

for (const path of packages) {
  const json = packagesJson[path]
  for (const { name, version } of Object.values(packagesJson)) {
    if (
      json.dependencies &&
      json.dependencies[name] &&
      !json.dependencies[name].startsWith('workspace:')
    ) {
      json.dependencies[name] = `^${version}`
    }
    if (
      json.devDependencies &&
      json.devDependencies[name] &&
      !json.devDependencies[name].startsWith('workspace:')
    ) {
      json.devDependencies[name] = `^${version}`
    }
  }
  await writeFile(path, `${JSON.stringify(json, null, 2)}\n`)
}
