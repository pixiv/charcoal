import { ensureFile, readFileSync, writeFile, existsSync } from 'fs-extra'
import path from 'path'
import yargs from 'yargs'
import {
  FigmaResponse,
  getDesignToken,
  resolveValue,
  Variable,
  VariableCollection,
} from './figma'
import { mustBeDefined } from './utils'

/**
 * Figma
 */
const FIGMA_TOKEN = process.env.FIGMA_TOKEN
const FIGMA_NODE_ID = process.env.FIGMA_NODE_ID

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
      mustBeDefined(FIGMA_NODE_ID, 'FIGMA_NODE_ID')

      const res = await getDesignToken(FIGMA_TOKEN, FIGMA_NODE_ID)

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

      const variableMap = new Map<string, Variable>()
      Object.entries(raw.meta.variables).forEach(([key, it]) => {
        variableMap.set(key, it)
      })

      const variableCollectionMap = new Map<string, VariableCollection>()
      Object.entries(raw.meta.variableCollections).forEach(([key, it]) =>
        variableCollectionMap.set(key, it)
      )

      const tokens = Object.entries(raw.meta.variableCollections)
        .filter(([_, it]) => {
          // if specify "variable-collection-name", only filter that variable collection
          // if not specified, only filter not remotes
          if (args['variable-collection-names'].length != 0) {
            return (
              args['variable-collection-names'].includes(it.name) && !it.remote
            )
          }
          return !it.remote
        })
        .map(([_, collection]) => {
          const variables = collection.variableIds
            .filter((it) => variableMap.get(it))
            .map((it) => {
              const modeId = (() => {
                // if specify "mode-name", return that mode id
                // if not specified, return collection.defaultModeId
                if (args['mode-name'] != undefined) {
                  return (
                    collection.modes.find((it) => it.name == args['mode-name'])
                      ?.modeId ?? collection.defaultModeId
                  )
                }
                return collection.defaultModeId
              })()

              const v = variableMap.get(it)

              if (!v) throw new Error(`can't find variable: ${it}`)

              return {
                [v.name]: {
                  value: resolveValue(
                    variableCollectionMap,
                    variableMap,
                    v.resolvedType,
                    v,
                    modeId
                  ),
                },
              }
            })
            .reduce((prev, current) => ({ ...prev, ...current }))
          return { [collection.name]: variables }
        })
        .reduce((prev, current) => ({ ...prev, ...current }))

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
