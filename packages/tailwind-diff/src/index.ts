import { parseArgs } from 'node:util'
import { check } from './commands/check'
import { dump } from './commands/dump'

const usage = `tailwind-diff <command>

Commands:
  tailwind-diff check  checks diffs due to package updates
  tailwind-diff dump   dump Tailwind CSS with config`

const normalizePackages = (args: string[]): string[] => {
  const normalized: string[] = []

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index]

    if (arg !== '--packages') {
      normalized.push(arg)
      continue
    }

    while (args[index + 1] !== undefined && !args[index + 1].startsWith('-')) {
      index += 1
      normalized.push(`--packages=${args[index]}`)
    }
  }

  return normalized
}

const main = async (): Promise<void> => {
  const [command, ...args] = process.argv.slice(2)

  if (
    command === undefined ||
    command === '--help' ||
    command === '-h' ||
    args.includes('--help') ||
    args.includes('-h')
  ) {
    console.log(usage)
    return
  }

  switch (command) {
    case 'check': {
      const { values } = parseArgs({
        args: normalizePackages(args),
        options: {
          config: { type: 'string', short: 'c' },
          'before-config': { type: 'string' },
          'after-config': { type: 'string' },
          packages: { type: 'string', multiple: true },
          json: { type: 'boolean' },
        },
      })

      await check({
        format: values.json ? 'json' : 'default',
        beforeConfig: values['before-config'] ?? values.config,
        afterConfig: values['after-config'] ?? values.config,
        packages: Array.isArray(values.packages) ? values.packages : undefined,
      })
      return
    }
    case 'dump': {
      const { values } = parseArgs({
        args,
        options: {
          output: { type: 'string', short: 'o' },
          config: { type: 'string', short: 'c' },
        },
      })

      await dump({ output: values.output, config: values.config })
      return
    }
    default:
      throw new Error(`Unknown command: ${command}`)
  }
}

void main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})
