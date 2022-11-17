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

const generateIconSvgEmbededSource = (
  svgString: string
) => `/** This file is auto generated. DO NOT EDIT BY HAND. */
export default '${svgString}'
`

const generateMjsEntrypoint = (
  icons: string[]
) => `/** This file is auto generated. DO NOT EDIT BY HAND. */

export default {
${icons
  .map((it) => `  '${it}': () => import('./${it}.js').then(m => m.default)`)
  .join(',\n')}
}
`

const generateCjsEntrypoint = (
  icons: string[]
) => `/** This file is auto generated. DO NOT EDIT BY HAND. */

export default {
${icons
  .map((it) => `  '${it}': () => import('./${it}.js').then(m => m.default)`)
  .join(',\n')}
}
`

const generateTypeDefinitionEntrypoint = (
  icons: string[]
) => `/** This file is auto generated. DO NOt EDIT BY HAND. */

declare var _default: {
${icons.map((it) => `  '${it}': () => Promise<string>`).join(';\n')}
};
export default _default;
`

export const generateEntrypoint = async (
  outputDir: string,
  icons: string[]
) => {
  const srcRoot = path.join(outputDir, 'src')
  const mjsPath = path.join(srcRoot, 'index.js')
  await fs.ensureFile(mjsPath)
  await fs.writeFile(mjsPath, generateMjsEntrypoint(icons))

  const cjsPath = path.join(srcRoot, 'index.cjs')
  await fs.ensureFile(cjsPath)
  await fs.writeFile(cjsPath, generateCjsEntrypoint(icons))

  const dtsPath = path.join(srcRoot, 'index.d.ts')
  await fs.ensureFile(dtsPath)
  await fs.writeFile(dtsPath, generateTypeDefinitionEntrypoint(icons))
}

export const generateIconSource = async (outputDir: string) => {
  const svgRoot = path.join(outputDir, 'svg')
  const srcRoot = path.join(outputDir, 'src')
  const icons = (await glob('**/*.svg', { cwd: svgRoot }))
    .map(
      (path) => path.slice(0, -4) // e.g. '16/Add.svg' -> '16/Add'
    )
    .sort()

  for (const it of icons) {
    const data = await fs.readFile(path.join(svgRoot, `${it}.svg`))
    const outputPath = path.join(srcRoot, `${it}.js`)
    await fs.ensureFile(outputPath)
    await fs.writeFile(
      outputPath,
      generateIconSvgEmbededSource(data.toString())
    )
  }

  await generateEntrypoint(outputDir, icons)
}
