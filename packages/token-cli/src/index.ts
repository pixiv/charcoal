import { ensureFile, readFileSync, writeFile, existsSync } from 'fs-extra'
import path from 'path'
import yargs from 'yargs'
import { createToken } from './createToken'
import { FigmaResponse, getDesignToken } from './figma'
import { mustBeDefined } from './utils'

/**
 * Figma
 */
const FIGMA_TOKEN = process.env.FIGMA_TOKEN
const FIGMA_FILE_ID = process.env.FIGMA_FILE_ID

void yargs
  .scriptName('token-cli')
  .command(
    'fetch',
    'Fetch Figma variables',
    {
      output: {
        type: 'string',
        demandOption: true,
        alias: 'o',
      },
    },
    async (args) => {
      mustBeDefined(FIGMA_TOKEN, 'FIGMA_TOKEN')
      mustBeDefined(FIGMA_FILE_ID, 'FIGMA_FILE_ID')

      const res = await getDesignToken(FIGMA_TOKEN, FIGMA_FILE_ID)

      await ensureFile(path.join(__dirname, '..', args.output))
      await writeFile(
        path.join(__dirname, '..', args.output),
        JSON.stringify(res.data),
        'utf8'
      )
    }
  )
  .command(
    'transform',
    'Transform tokens from source file',
    {
      'mode-name': {
        type: 'string',
        default: undefined,
      },
      'variable-collection-names': {
        type: 'array',
        default: [] as string[],
      },
      source: {
        type: 'string',
        demandOption: true,
      },
      output: {
        type: 'string',
        demandOption: true,
        alias: 'o',
      },
    },
    async (args) => {
      if (!existsSync(path.join(__dirname, '..', args.source))) {
        throw new Error(
          `${path.join(__dirname, '..', args.source)} not exists.`
        )
      }

      const buffer = readFileSync(path.join(__dirname, '..', args.source))
      const raw = JSON.parse(buffer.toString()) as FigmaResponse

      const tokens = createToken(
        raw,
        args['variable-collection-names'],
        args['mode-name']
      )

      await ensureFile(path.join(__dirname, '..', args.output))
      await writeFile(
        path.join(__dirname, '..', args.output),
        JSON.stringify(tokens),
        'utf8'
      )
    }
  )
  .demandCommand()
  .strict()
  .help()
  .parse()
