#!/usr/bin/env node
import { runCli } from './cli-core'

const exitCode = await runCli(process.argv.slice(2), {
  async readStdin() {
    let input = ''
    for await (const chunk of process.stdin) {
      input += chunk
    }
    return input
  },
  writeStdout(value) {
    process.stdout.write(value)
  },
  writeStderr(value) {
    process.stderr.write(value)
  },
})

process.exitCode = exitCode
