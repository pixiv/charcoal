import { ensureDir, readFileSync, writeFile } from 'fs-extra'
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
  .command('fetch:primitive', 'Fetch Figma variables', {}, async () => {
    mustBeDefined(FIGMA_TOKEN, 'FIGMA_TOKEN')
    mustBeDefined(FIGMA_NODE_ID, 'FIGMA_NODE_ID')

    const res = await getDesignToken(FIGMA_TOKEN, FIGMA_NODE_ID)

    await ensureDir(path.join(__dirname, '..', 'out'))
    await writeFile(
      path.join(__dirname, '..', 'out', 'raw_primitives.json'),
      JSON.stringify(res.data),
      'utf8'
    )
  })
  .command('fetch:applied', 'Fetch Figma variables', {}, async () => {
    mustBeDefined(FIGMA_TOKEN, 'FIGMA_TOKEN')
    mustBeDefined(FIGMA_NODE_ID, 'FIGMA_NODE_ID')

    const res = await getDesignToken(FIGMA_TOKEN, FIGMA_NODE_ID)

    await ensureDir(path.join(__dirname, '..', 'out'))
    await writeFile(
      path.join(__dirname, '..', 'out', 'raw_applieds.json'),
      JSON.stringify(res.data),
      'utf8'
    )
  })
  .command('transform', 'Transform Fetched variables', {}, async () => {
    const buffer = readFileSync(
      path.join(__dirname, '..', 'out', 'raw_primitives.json')
    )
    const tokens = JSON.parse(buffer.toString()) as FigmaResponse

    const variableMap = new Map<string, Variable>()
    Object.entries(tokens.meta.variables).forEach(([key, it]) => {
      variableMap.set(key, it)
    })

    const variableCollectionMap = new Map<string, VariableCollection>()
    Object.entries(tokens.meta.variableCollections).forEach(([key, it]) =>
      variableCollectionMap.set(key, it)
    )

    const primitives = Object.entries(tokens.meta.variableCollections)
      .filter(([_, it]) => !it.remote)
      .map(([_, collection]) => {
        const variables = collection.variableIds
          .filter((it) => variableMap.get(it))
          .map((it) => {
            const v = variableMap.get(it)

            if (!v) throw new Error(`can't find variable: ${it}`)

            return {
              [v.name]: {
                value: resolveValue(
                  variableCollectionMap,
                  variableMap,
                  v.resolvedType,
                  v,
                  collection.defaultModeId
                ),
              },
            }
          })
          .reduce((prev, current) => ({ ...prev, ...current }))
        return { [collection.name]: variables }
      })
      .reduce((prev, current) => ({ ...prev, ...current }))

    await ensureDir(path.join(__dirname, '..', 'out'))
    await writeFile(
      path.join(__dirname, '..', 'out', 'transformed.json'),
      JSON.stringify(primitives),
      'utf8'
    )
  })
  .command('transform:applied', 'Transform Fetched variables', {}, async () => {
    const buffer = readFileSync(
      path.join(__dirname, '..', 'out', 'raw_applieds.json')
    )
    const tokens = JSON.parse(buffer.toString()) as FigmaResponse

    const variableMap = new Map<string, Variable>()
    Object.entries(tokens.meta.variables).forEach(([key, it]) => {
      variableMap.set(key, it)
    })

    const variableCollectionMap = new Map<string, VariableCollection>()
    Object.entries(tokens.meta.variableCollections).forEach(([key, it]) =>
      variableCollectionMap.set(key, it)
    )

    const primitives = Object.entries(tokens.meta.variableCollections)
      .filter(([_, it]) => !it.remote)
      .map(([_, collection]) => {
        const variables = collection.variableIds
          .filter((it) => variableMap.get(it))
          .map((it) => {
            const v = variableMap.get(it)

            if (!v) throw new Error(`can't find variable: ${it}`)

            return {
              [v.name]: {
                value: resolveValue(
                  variableCollectionMap,
                  variableMap,
                  v.resolvedType,
                  v,
                  collection.defaultModeId
                ),
              },
            }
          })
          .reduce((prev, current) => ({ ...prev, ...current }))
        return { [collection.name]: variables }
      })
      .reduce((prev, current) => ({ ...prev, ...current }))

    await ensureDir(path.join(__dirname, '..', 'out'))
    await writeFile(
      path.join(__dirname, '..', 'out', 'transformed.json'),
      JSON.stringify(primitives),
      'utf8'
    )
  })
  .demandCommand()
  .strict()
  .help()
  .parse()
