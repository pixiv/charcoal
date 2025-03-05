#!/usr/bin/env zx
import { $, cd, glob } from 'zx'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

cd(`${__dirname}/..`)

const packages = await glob('packages/*/package.json')

const packagesJson = Object.fromEntries(
  await Promise.all(
    packages.map(async (path) => [
      path,
      JSON.parse(await fs.readFile(path, 'utf-8')),
    ])
  )
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
  await fs.writeFile(path, JSON.stringify(json, null, 2))
}
