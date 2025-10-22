import fs from 'fs'
import path from 'path'
import stream from 'stream'
import importFrom from 'import-from'
import type { TailwindConfig } from 'tailwindcss/tailwind-config'

const sourceCSS = `
@tailwind base;
@tailwind components;
@tailwind utilities;
`

export interface DumpConfig {
  output?: string
  config?: string
}

export async function dump({ output, config }: DumpConfig) {
  const targetDir = process.cwd()
  const postcss = importFrom(
    targetDir,
    'postcss',
  ) as typeof import('postcss').default
  const tailwindcss = importFrom(
    targetDir,
    'tailwindcss',
  ) as typeof import('tailwindcss')
  const tailwindConfig = importFrom.silent(
    targetDir,
    config != null ? config : 'tailwind.config.js',
  ) as TailwindConfig
  const result = await postcss([tailwindcss(tailwindConfig)]).process(
    sourceCSS,
    {
      from: undefined,
      to: undefined,
      map: false,
    },
  )
  const sink =
    output != null
      ? fs.createWriteStream(path.resolve(targetDir, output))
      : process.stdout
  stream.Readable.from(result.css).pipe(sink)
}
