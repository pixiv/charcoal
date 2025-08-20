import { glob } from 'fast-glob'
import { ensureDir, readFile, writeFile } from 'fs-extra'
import path from 'path'
import { mustBeDefined } from '../utils'
import { escape } from 'querystring'

async function main() {
  mustBeDefined(process.env.SOURCE_ROOT_DIR, 'SOURCE_ROOT_DIR')
  const sourceDir = process.env.SOURCE_ROOT_DIR
  const inputDir = path.join(__dirname, sourceDir)

  mustBeDefined(process.env.OUTPUT_ROOT_DIR, 'OUTPUT_ROOT_DIR')
  const outDir = process.env.OUTPUT_ROOT_DIR

  await ensureDir(outDir)
  const fileNames = await glob('**/*.svg', { cwd: inputDir })
  const dataUris = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(inputDir, fileName)
      const content = await readFile(filePath, 'utf-8')

      return {
        iconName: fileName.replace('.svg', ''),
        uri: `data:image/svg+xml;utf8,${escape(content).replace("'", "\\'")}`,
        isSetCurrentcolor: !content.includes('<def'),
      }
    })
  )

  const js = `/** This file is auto generated. DO NOT EDIT BY HAND. */
  
export default {
${dataUris
  .map(
    (it) =>
      `'${it.iconName}': {uri: '${it.uri}', isSetCurrentcolor: ${
        it.isSetCurrentcolor ? 'true' : 'false'
      }}`
  )
  .join(',\n')}
}`
  await writeFile(path.join(outDir, 'index.mjs'), js)

  const cjs = `/** This file is auto generated. DO NOT EDIT BY HAND. */
  
module.exports = {
${dataUris
  .map(
    (it) =>
      `'${it.iconName}': {uri: '${it.uri}', isSetCurrentcolor: ${
        it.isSetCurrentcolor ? 'true' : 'false'
      }}`
  )
  .join(',\n')}
}`
  await writeFile(path.join(outDir, 'index.cjs'), cjs)

  const dts = `/** This file is auto generated. DO NOT EDIT BY HAND. */
  
declare var _default: {
${dataUris
  .map((it) => `'${it.iconName}': { uri: string, isSetCurrentcolor: boolean }`)
  .join(';\n')}}
export default _default;
`

  await writeFile(path.join(outDir, 'index.d.ts'), dts)
}
void main()
