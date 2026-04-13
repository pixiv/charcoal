import { mustBeDefined } from '../utils'
import { glob, readFile, writeFile } from 'fs/promises'
import { ensureDir } from 'fs-extra'
import path from 'path'
import {
  createCssClassNameSegment,
  createSvgDataUri,
  serializeJavaScriptValue,
} from '../codegen'

const previewStyles = `:root {
  font-size: 24px;
}
.icons {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(auto-fill, 300px);
}
.icons div {
  display: inline-flex;
  gap: 8px;
  align-items: center;
}
code {
  font-size: 14px;
}`

function createPreviewItems(
  classNames: string[],
  classAttributeName: 'class' | 'className',
) {
  return classNames
    .map(
      (icon) => `
  <div>
    <div ${classAttributeName}="${icon}" aria-label=".${icon}" role="img"></div>
    <code>.${icon}</code>
  </div>`,
    )
    .join('\n')
}

async function transformV2(filePath: string, fileName: string) {
  const content = await readFile(filePath, 'utf-8')
  const [size, variant, name] = fileName.split('/')
  const dataUri = createSvgDataUri(content)
  const cssName = [
    'charcoal-icon-v2',
    createCssClassNameSegment(name),
    ...(variant === 'regular' ? [] : [variant]),
    ...(size === '24' ? [] : [size]),
  ].join('-')
  const css = content.includes('<def')
    ? `
.${cssName} {
  display: inline-block;
  width: 1em;
  height: 1em;
  background: url("${dataUri}");
  aspect-ratio: 1/1;
}`
    : `
.${cssName} {
  display: inline-block;
  width: 1em;
  height: 1em;
  mask-image: url("${dataUri}");
  mask-size: 100% 100%;
  background: currentColor;
  aspect-ratio: 1/1;
}
`
  return {
    filePath,
    css,
    cssName,
  }
}

async function transformV1(filePath: string, fileName: string) {
  const content = await readFile(filePath, 'utf-8')
  const [size, name] = fileName.split('/')
  const dataUri = createSvgDataUri(content)
  const cssName = [
    'charcoal-icon-v1',
    createCssClassNameSegment(name),
    ...(size === '24' ? [] : [size]),
  ].join('-')
  const css = content.includes('<def')
    ? `
.${cssName} {
  display: inline-block;
  width: 1em;
  height: 1em;
  background: url("${dataUri}");
  aspect-ratio: 1/1;
}`
    : `
.${cssName} {
  display: inline-block;
  width: 1em;
  height: 1em;
  mask-image: url("${dataUri}");
  mask-size: 100% 100%;
  background: currentColor;
  aspect-ratio: 1/1;
}
`
  return {
    filePath,
    css,
    cssName,
  }
}

async function main() {
  mustBeDefined(process.env.VERSION, 'VERSION')
  const version = process.env.VERSION

  mustBeDefined(process.env.SOURCE_ROOT_DIR, 'SOURCE_ROOT_DIR')
  const sourceDir = process.env.SOURCE_ROOT_DIR
  const inputDir = path.join(import.meta.dirname, sourceDir)

  mustBeDefined(process.env.OUTPUT_ROOT_DIR, 'OUTPUT_ROOT_DIR')
  const outDir = process.env.OUTPUT_ROOT_DIR

  await ensureDir(outDir)
  const fileNames = await Array.fromAsync(glob('**/*.svg', { cwd: inputDir }))

  let classNames: string[] = []
  const filesWithContent = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(inputDir, fileName)
      if (version == 'v2') {
        const value = await transformV2(filePath, fileName)
        classNames.push(value.cssName)
        return value
      }

      if (version == 'v1') {
        const value = await transformV1(filePath, fileName)
        classNames.push(value.cssName)
        return value
      }

      throw new Error('VERSION received an unexpected value')
    }),
  )

  const cssContent = filesWithContent
    .sort((a, b) => a.cssName.localeCompare(b.cssName))
    .map((icon) => icon.css)
    .join('\n')
  await writeFile(path.join(outDir, 'index.css'), cssContent)
  classNames = classNames.sort()
  const html = `
<div class="icons">
${createPreviewItems(classNames, 'class')}
</div>`

  await writeFile(
    path.join(outDir, 'index.html'),
    `<link rel="stylesheet" href="./index.css"><style>${previewStyles}</style>${html}`,
  )
  await writeFile(
    path.join(outDir, 'index.story.tsx'),
    `/* eslint-disable */
// disable eslint for large genareted file

import { JSX } from "react"

export default {
  title: 'Icons/${version}/css',
  parameters: {
    storyshots: {
      disable: true,
    },
  },
  render(): JSX.Element {
    return (
      <>
       <style>{${serializeJavaScriptValue(cssContent)}}</style>
       <style>{${serializeJavaScriptValue(previewStyles)}}</style>
       <div className="icons">
${createPreviewItems(classNames, 'className')}
       </div>
      </>
    )
  },
}
  
export const Default = {
parameters: {
    vrt: {
      viewport: {
        width: 1280,
        height: 12000,
      },
    },
  },
}
`,
  )
}

void main()
