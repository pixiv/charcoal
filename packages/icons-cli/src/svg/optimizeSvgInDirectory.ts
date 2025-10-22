import path from 'path'
import glob from 'fast-glob'
import fs from 'fs-extra'
import { concurrently } from '../concurrently'
import { optimizeSvg } from './optimizeSvg'

/* eslint-disable no-console */

export const optimizeSvgInDirectory = async (
  outputDir: string,
  replaceColor: string,
  ignoreFile?: string,
) => {
  const rootDir = path.join(outputDir, 'svg')

  const ignorePatterns =
    ignoreFile !== undefined
      ? (await fs.readFile(ignoreFile, 'utf8')).trim().split(/\r?\n/u)
      : []

  const files = await glob('**/*.svg', {
    cwd: rootDir,
  })

  await concurrently(
    files.map((file) => async () => {
      console.log(`Optimizing ${file}...`)
      const fullPath = path.join(rootDir, file)

      const originalSvg = await fs.readFile(fullPath, 'utf8')
      const optimizedSvg = await optimizeSvg(originalSvg, {
        convertedColor: replaceColor,
        withoutOptimizeBySVGO: ignorePatterns.includes(file),
      })
      await fs.writeFile(fullPath, optimizedSvg)
    }),
  )
}
