import { glob, readFile, writeFile } from 'fs/promises'
import { ensureDir } from 'fs-extra'
import path from 'path'
import { createSvgDataUri, serializeJavaScriptValue } from '../codegen'
import { mustBeDefined } from '../utils'

async function main() {
  mustBeDefined(process.env.SOURCE_ROOT_DIR, 'SOURCE_ROOT_DIR')
  const sourceDir = process.env.SOURCE_ROOT_DIR
  const inputDir = path.join(import.meta.dirname, sourceDir)

  mustBeDefined(process.env.OUTPUT_ROOT_DIR, 'OUTPUT_ROOT_DIR')
  const outDir = process.env.OUTPUT_ROOT_DIR

  await ensureDir(outDir)
  const fileNames = await Array.fromAsync(glob('**/*.svg', { cwd: inputDir }))
  const dataUris = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(inputDir, fileName)
      const content = await readFile(filePath, 'utf-8')

      return {
        iconName: fileName.replace('.svg', ''),
        uri: createSvgDataUri(content),
        isSetCurrentcolor: !content.includes('<def'),
      }
    }),
  )

  const dataUriMap = Object.fromEntries(
    dataUris.map(({ iconName, uri, isSetCurrentcolor }) => [
      iconName,
      { uri, isSetCurrentcolor },
    ]),
  )

  const js = `/** This file is auto generated. DO NOT EDIT BY HAND. */

export default ${serializeJavaScriptValue(dataUriMap)}
`
  await writeFile(path.join(outDir, 'index.mjs'), js)

  const cjs = `/** This file is auto generated. DO NOT EDIT BY HAND. */

module.exports = ${serializeJavaScriptValue(dataUriMap)}
`
  await writeFile(path.join(outDir, 'index.cjs'), cjs)

  const dts = `/** This file is auto generated. DO NOT EDIT BY HAND. */
  
declare var _default: {
${dataUris
  .map(
    (it) =>
      `${serializeJavaScriptValue(it.iconName)}: { uri: string, isSetCurrentcolor: boolean }`,
  )
  .join(';\n')}}
export default _default;
`

  await writeFile(path.join(outDir, 'index.d.ts'), dts)
}
void main()
