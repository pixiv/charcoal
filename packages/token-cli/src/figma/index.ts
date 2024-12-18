import axios from 'axios'

const api = (pat: string) =>
  axios.create({
    headers: {
      'Content-Type': 'application/json',
      'X-Figma-Token': pat,
    },
    baseURL: 'https://api.figma.com',
  })

// https://www.figma.com/developers/api#variables-types
type VariableAlias = {
  type: 'VARIABLE_ALIAS'
  id: string
}

type VariableCodeSyntax = {
  WEB: string
  ANDROID: string
  iOS: string
}

type Color = {
  r: number
  g: number
  b: number
  a: number
}

type Scope =
  | 'ALL_SCOPES'
  | 'CORNER_RADIUS'
  | 'TEXT_CONTENT'
  | 'WIDTH_HEIGHT'
  | 'GAP'
  | 'STROKE_FLOAT'
  | 'OPACITY'
  | 'EFFECT_FLOAT'
  | 'ALL_FILLS'
  | 'FRAME_FILL'
  | 'SHAPE_FILL'
  | 'TEXT_FILL'
  | 'STROKE_COLOR'
  | 'EFFECT_COLOR'

type ResolveType = 'BOOLEAN' | 'FLOAT' | 'STRING' | 'COLOR'

export type VariableCollection = {
  defaultModeId: string
  id: string
  name: string
  remote: boolean
  modes: { modeId: string; name: string }[]
  key: string
  hiddenFromPublishing: boolean
  variableIds: string[]
}

export type Variable = {
  id: string
  name: string
  remote: boolean
  key: string
  variableCollectionId: string
  resolvedType: ResolveType
  description: string
  hiddenFromPublishing: false
  valuesByMode: {
    [key: string]: VariableAlias | Color | boolean | number | string
  }
  scopes: Scope[]
  codeSyntax: VariableCodeSyntax
}

export type FigmaResponse = {
  status: number
  error: boolean
  meta: {
    variableCollections: {
      [key: string]: VariableCollection
    }
    variables: {
      [key: string]: Variable
    }
  }
}

const colorToRgba = ({ r, g, b, a }: Color) =>
  `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(
    b * 255
  )}, ${Math.round(a * 1000) / 1000})`

export const getDesignToken = (pat: string, nodeId: string) =>
  api(pat).get(`/v1/files/${nodeId}/variables/local`)

export const resolveValue = (
  variableCollectionMap: Map<string, VariableCollection>,
  variableMap: Map<string, Variable>,
  resolvedType: ResolveType,
  variable: Variable,
  modeId: string
): string => {
  const value = variable.valuesByMode[modeId]

  // if alias, look at it recursively.
  if (typeof value === 'object' && 'type' in value && 'id' in value) {
    const v = variableMap.get(value.id)
    if (!v)
      throw new Error(
        `can't find variable alias "${variable.name}:${value.id}"`
      )

    const variableCollection = variableCollectionMap.get(v.variableCollectionId)

    if (!variableCollection)
      throw new Error(
        `can't find variable collection "${variable.name}:${v.variableCollectionId}"`
      )

    return `{${variableCollection.name}.${v.name}}`
  }

  switch (resolvedType) {
    case 'COLOR':
      return resolveColor(value as Color)
    case 'FLOAT':
      if (variable.name.includes('font-weight')) {
        return resolveFloat(value as number)
      }
      return resolveFloatPx(value as number)
    case 'STRING':
      return resolveString(value as string)

    default:
      throw new Error('unsupport resolvedType')
  }
}

export const resolveColor = (value: Color) => colorToRgba(value)

export const resolveFloat = (value: number) => `${value}`
export const resolveFloatPx = (value: number) => `${value}px`

export const resolveString = (value: string) => value
