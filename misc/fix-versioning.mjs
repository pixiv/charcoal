#!/usr/bin/env zx
import 'zx/globals'

cd(`${__dirname}/..`)

const packages = await glob('packages/*/package.json')

const packagesJson = Object.fromEntries(
  await Promise.all(
    packages.map((path) => (async () => [path, await fs.readJson(path)])())
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
  await fs.writeJson(path, json, { spaces: 2 })
}
