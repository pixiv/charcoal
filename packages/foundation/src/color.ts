export type Material = string

export type GradientMaterial = readonly {
  readonly color: Material
  readonly ratio: number
}[]
