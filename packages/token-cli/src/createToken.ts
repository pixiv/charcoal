import {
  FigmaResponse,
  resolveValue,
  Variable,
  VariableCollection,
} from './figma'

const createVariableMap = (res: FigmaResponse) => {
  const map = new Map<string, Variable>()
  Object.entries(res.meta.variables).forEach(([key, it]) => {
    map.set(key, it)
  })
  return map
}

const createVariableCollectionMap = (res: FigmaResponse) => {
  const map = new Map<string, VariableCollection>()
  Object.entries(res.meta.variableCollections).forEach(([key, it]) =>
    map.set(key, it),
  )
  return map
}

// if specify "mode-name", return that mode id
// if not specified, return collection.defaultModeId
const getModeId = (collection: VariableCollection, modeName?: string) =>
  modeName != undefined
    ? (collection.modes.find((it) => it.name == modeName)?.modeId ??
      collection.defaultModeId)
    : collection.defaultModeId

// if specify "variable-collection-name", only filter that variable collection
// if not specified, only filter not remotes
const isTargetCollection = (
  collection: VariableCollection,
  variableCollectionNames: string[] | (string | number)[],
) => {
  if (variableCollectionNames.length != 0) {
    return (
      variableCollectionNames.includes(collection.name) && !collection.remote
    )
  }
  return !collection.remote
}

export const createToken = (
  res: FigmaResponse,
  variableCollectionNames: string[] | (string | number)[],
  modeName?: string,
) => {
  const variableMap = createVariableMap(res)
  const variableCollectionMap = createVariableCollectionMap(res)

  return Object.entries(res.meta.variableCollections)
    .filter(([_, it]) => isTargetCollection(it, variableCollectionNames))
    .map(([_, collection]) => {
      const modeId = getModeId(collection, modeName)
      const variables = collection.variableIds
        .filter((it) => variableMap.get(it))
        .map((it) => {
          const v = variableMap.get(it)

          if (!v) throw new Error(`can't find variable: ${it}`)

          try {
            const value = resolveValue(
              variableCollectionMap,
              variableMap,
              v.resolvedType,
              v,
              modeId,
            )
            return {
              [v.name]: {
                value,
              },
            }
          } catch (e) {
            if (e instanceof Error) {
              // eslint-disable-next-line no-console
              console.warn(`[warn]: ${e.message}`)
            }
            return undefined
          }
        })
        .filter(
          (
            it,
          ): it is {
            [x: string]: {
              value: string
            }
          } => it !== undefined,
        )
        .reduce((prev, current) => ({
          ...prev,
          ...current,
        }))

      return { [collection.name]: variables }
    })
    .reduce<{ [key: string]: object }>(
      (prev, current) => ({
        ...prev,
        ...current,
      }),
      {},
    )
}
