import path from 'path'
import glob from 'fast-glob'
import fs from 'fs-extra'

export const generateSource = async (outputDir: string) => {
  const svgRoot = path.join(outputDir, 'svg')
  const tsPath = path.join(outputDir, 'src/icons.ts')

  const icons = (await glob('**/*.svg', { cwd: svgRoot }))
    .map(
      (path) => path.slice(0, -4) // e.g. '16/Add.svg' -> '16/Add'
    )
    .sort()

  await fs.ensureFile(tsPath)
  await fs.writeFile(tsPath, generateTypeDefinition(icons))
}

const generateTypeDefinition = (
  icons: string[]
) => `/** This file is auto generated. DO NOT EDIT BY HAND. */

const icons = {
${icons.map((name) => `  '${name}': require('../svg/${name}.svg'),`).join('\n')}
} as const;

export default icons;
export type KnownIconFile = keyof typeof icons;
export const KNOWN_ICON_FILES = Object.keys(icons) as KnownIconFile[];
`
