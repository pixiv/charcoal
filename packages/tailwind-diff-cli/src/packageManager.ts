import fs from 'fs'
import os from 'os'
import path from 'path'

type PackageManagerType = 'npm' | 'yarn' | 'pnpm'

export interface PackageManagerInfo {
  type: PackageManagerType
  packageJSONPath: string
  lockfilePath: string | undefined
}

export function detectPackageManager(base: string): PackageManagerInfo {
  const upperbounds = [os.homedir(), path.resolve('/')]
  let dir = fs.statSync(base).isDirectory() ? base : path.dirname(base)

  while (!fs.existsSync(path.join(dir, 'package.json'))) {
    const parent = path.dirname(dir)
    if (upperbounds.includes(parent)) {
      throw new Error('No node project found.')
    }
    dir = parent
  }
  const packageJSONPath = path.join(dir, 'package.json')

  let type: PackageManagerType = 'npm'
  let lockfilePath: string | undefined
  do {
    let lockfile: string

    lockfile = path.join(dir, 'package-lock.json')
    if (fs.existsSync(lockfile)) {
      lockfilePath = lockfile
      type = 'npm'
      break
    }

    lockfile = path.join(dir, 'yarn.lock')
    if (fs.existsSync(lockfile)) {
      lockfilePath = lockfile
      type = 'yarn'
      break
    }

    lockfile = path.join(dir, 'pnpm-lock.yaml')
    if (fs.existsSync(lockfile)) {
      lockfilePath = lockfile
      type = 'pnpm'
      break
    }

    dir = path.dirname(dir)
  } while (!upperbounds.includes(dir))

  return {
    type,
    packageJSONPath,
    lockfilePath,
  }
}
