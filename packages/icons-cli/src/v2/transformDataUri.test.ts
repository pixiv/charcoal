import { mkdtemp, readFile, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import vm from 'node:vm'
import fs from 'fs-extra'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

async function waitForFile(filePath: string) {
  for (let i = 0; i < 100; i += 1) {
    if (await fs.pathExists(filePath)) {
      return
    }

    await new Promise((resolve) => setTimeout(resolve, 10))
  }

  throw new Error(`timed out waiting for ${filePath}`)
}

async function runTransformDataUri(sourceDir: string, outputDir: string) {
  const previousSourceRootDir = process.env.SOURCE_ROOT_DIR
  const previousOutputRootDir = process.env.OUTPUT_ROOT_DIR

  process.env.SOURCE_ROOT_DIR = path.relative(import.meta.dirname, sourceDir)
  process.env.OUTPUT_ROOT_DIR = outputDir

  try {
    vi.resetModules()
    await import(new URL('./transformDataUri.ts', import.meta.url).href)
    await waitForFile(path.join(outputDir, 'index.d.ts'))
  } finally {
    if (previousSourceRootDir === undefined) {
      delete process.env.SOURCE_ROOT_DIR
    } else {
      process.env.SOURCE_ROOT_DIR = previousSourceRootDir
    }

    if (previousOutputRootDir === undefined) {
      delete process.env.OUTPUT_ROOT_DIR
    } else {
      process.env.OUTPUT_ROOT_DIR = previousOutputRootDir
    }
  }
}

describe('transformDataUri regression', () => {
  let workDir: string

  beforeEach(async () => {
    workDir = await mkdtemp(
      path.join(tmpdir(), 'icons-cli-transform-data-uri-'),
    )
  })

  afterEach(async () => {
    await fs.remove(workDir)
  })

  it('危険なキー名を含んでもCJS出力が壊れない', async () => {
    const sourceDir = path.join(workDir, 'input')
    const outputDir = path.join(workDir, 'output')
    const iconName = String.raw`16/Bad'"Name\Icon`

    await fs.ensureDir(path.join(sourceDir, '16'))
    await writeFile(path.join(sourceDir, `${iconName}.svg`), '<svg />')

    await runTransformDataUri(sourceDir, outputDir)

    const cjs = await readFile(path.join(outputDir, 'index.cjs'), 'utf8')
    const context = {
      module: { exports: {} as Record<string, unknown> },
    }

    const script = new vm.Script(cjs)
    script.runInNewContext(context)

    expect(Object.keys(context.module.exports)).toEqual([iconName])
  })

  it('危険なSVG文字列でもdata URIを生で埋め込まない', async () => {
    const sourceDir = path.join(workDir, 'input')
    const outputDir = path.join(workDir, 'output')
    const svgContent =
      '<svg><text></style><script>alert("xss")</script></text></svg>'

    await fs.ensureDir(path.join(sourceDir, '16'))
    await writeFile(path.join(sourceDir, '16', 'Add.svg'), svgContent)

    await runTransformDataUri(sourceDir, outputDir)

    const mjs = await readFile(path.join(outputDir, 'index.mjs'), 'utf8')

    expect(mjs).not.toContain('</style>')
    expect(mjs).not.toContain('<script>')
    expect(mjs).toContain('%3Csvg%3E')
  })
})
