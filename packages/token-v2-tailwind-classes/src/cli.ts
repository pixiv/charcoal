#!/usr/bin/env node

import { run } from './run'

try {
  process.stdout.write(`${run(process.argv.slice(2))}\n`)
} catch (error) {
  const message = error instanceof Error ? error.message : String(error)
  process.stderr.write(`${message}\n`)
  process.exitCode = 1
}
