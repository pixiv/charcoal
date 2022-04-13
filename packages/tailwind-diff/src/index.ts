import yargs from 'yargs'
import { check } from './commands/check'
import { dump } from './commands/dump'

void yargs
  .scriptName('tailwind-diff')
  .command(
    'check',
    'checks diffs due to package updates',
    () =>
      yargs
        .option('config', {
          type: 'string',
          description: 'tailwind config file',
        })
        .alias('c', 'config')
        .option('before-config', {
          type: 'string',
          description: 'tailwind config used in first build',
        })
        .option('after-config', {
          type: 'string',
          description: 'tailwind config used in second build',
        })
        .option('packages', {
          type: 'array',
          description: 'packages to be update',
        })
        .option('json', {
          type: 'boolean',
          description: 'print result as JSON format',
        }),
    ({
      config,
      'after-config': afterConfig,
      'before-config': beforeConfig,
      packages,
      json = false,
    }) => {
      void check({
        format: json ? 'json' : 'default',
        beforeConfig: beforeConfig != null ? beforeConfig : config,
        afterConfig: afterConfig != null ? afterConfig : config,
        packages: packages != null ? packages.map((v) => `${v}`) : undefined,
      })
    }
  )
  .command(
    'dump',
    'dump Tailwind CSS with config',
    () =>
      yargs
        .option('output', { type: 'string', description: 'output file' })
        .alias('o', 'output')
        .option('config', {
          type: 'string',
          description: 'tailwind config file',
        })
        .alias('c', 'config'),
    ({ output, config }) => {
      void dump({
        output,
        config,
      })
    }
  )
  .demandCommand()
  .help()
  .parse()
