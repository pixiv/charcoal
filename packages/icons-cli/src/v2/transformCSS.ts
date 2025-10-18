import { mustBeDefined } from '../utils'
import glob from 'fast-glob'
import { readFile, writeFile, ensureDir } from 'fs-extra'
import path from 'path'
import { escape } from 'querystring'

async function transformV2(filePath: string, fileName: string) {
  const content = await readFile(filePath, 'utf-8')
  const [size, variant, name] = fileName.split('/')
  const cssName = [
    'charcoal-icon',
    name.toLowerCase().replace('.svg', '').replaceAll('.', '-'),
    ...(variant === 'regular' ? [] : [variant]),
    ...(size === '24' ? [] : [size]),
  ].join('-')
  const css = content.includes('<def')
    ? `
.${cssName} {
  display: inline-block;
  width: 1em;
  height: 1em;
  background: url('data:image/svg+xml;utf8,${escape(content).replace(
    "'",
    "\\'"
  )}');
  aspect-ratio: 1/1;
}`
    : `
.${cssName} {
  display: inline-block;
  width: 1em;
  height: 1em;
  mask-image: url('data:image/svg+xml;utf8,${escape(content).replace(
    "'",
    "\\'"
  )}');
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
  const cssName = [
    'charcoal-icon-v1',
    name.toLowerCase().replace('.svg', '').replaceAll('.', '-'),
    ...(size === '24' ? [] : [size]),
  ].join('-')
  const css = content.includes('<def')
    ? `
.${cssName} {
  display: inline-block;
  width: 1em;
  height: 1em;
  background: url('data:image/svg+xml;utf8,${escape(content).replace(
    "'",
    "\\'"
  )}');
  aspect-ratio: 1/1;
}`
    : `
.${cssName} {
  display: inline-block;
  width: 1em;
  height: 1em;
  mask-image: url('data:image/svg+xml;utf8,${escape(content).replace(
    "'",
    "\\'"
  )}');
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
  const inputDir = path.join(__dirname, sourceDir)

  mustBeDefined(process.env.OUTPUT_ROOT_DIR, 'OUTPUT_ROOT_DIR')
  const outDir = process.env.OUTPUT_ROOT_DIR

  await ensureDir(outDir)
  const fileNames = await glob('**/*.svg', { cwd: inputDir })

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
    })
  )

  const cssContent = filesWithContent
    .sort((a, b) => a.cssName.localeCompare(b.cssName))
    .map((icon) => icon.css)
    .join('\n')
  await writeFile(path.join(outDir, 'index.css'), cssContent)
  classNames = classNames.sort()
  const html = `
<div class="icons">
${classNames
  .map(
    (icon) => `
  <div>
    <div class="${icon}" aria-label=".${icon}" role="img" />
    <code>.${icon}</code>
  </div>
`
  )
  .join('\n')}
</div>`

  await writeFile(
    path.join(outDir, 'index.html'),
    `<link rel="stylesheet" href="./index.css"><style>
  :root {
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
  }
</style>${html}`
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
       <style>{\`${cssContent}\`}</style>
       <style>
  {\`:root {
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
  }\`}
</style>
       ${html.replaceAll('class', 'className')}
      </>
    )
  },
}
  
export const Default = {}
`
  )
}

void main()
