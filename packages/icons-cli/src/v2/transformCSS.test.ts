import { mkdtemp, readFile, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
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

async function runTransformCss(
  sourceDir: string,
  outputDir: string,
  version: 'v1' | 'v2',
) {
  const previousVersion = process.env.VERSION
  const previousSourceRootDir = process.env.SOURCE_ROOT_DIR
  const previousOutputRootDir = process.env.OUTPUT_ROOT_DIR

  process.env.VERSION = version
  process.env.SOURCE_ROOT_DIR = path.relative(import.meta.dirname, sourceDir)
  process.env.OUTPUT_ROOT_DIR = outputDir

  try {
    vi.resetModules()
    await import(new URL('./transformCSS.ts', import.meta.url).href)
    await waitForFile(path.join(outputDir, 'index.story.tsx'))
  } finally {
    if (previousVersion === undefined) {
      delete process.env.VERSION
    } else {
      process.env.VERSION = previousVersion
    }

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

describe('transformCSS regression', () => {
  let workDir: string

  beforeEach(async () => {
    workDir = await mkdtemp(path.join(tmpdir(), 'icons-cli-transform-css-'))
  })

  afterEach(async () => {
    await fs.remove(workDir)
  })

  it('通常のv2アイコン名では既存のclass名を維持する', async () => {
    const sourceDir = path.join(workDir, 'input')
    const outputDir = path.join(workDir, 'output')

    await fs.ensureDir(path.join(sourceDir, '24', 'regular'))
    await writeFile(
      path.join(sourceDir, '24', 'regular', 'Add.Circle.svg'),
      '<svg />',
    )

    await runTransformCss(sourceDir, outputDir, 'v2')

    const css = await readFile(path.join(outputDir, 'index.css'), 'utf8')

    expect(css).toContain('.charcoal-icon-v2-add-circle')
  })

  it('危険な文字を含むv2ファイル名でも安全なclass名だけを生成する', async () => {
    const sourceDir = path.join(workDir, 'input')
    const outputDir = path.join(workDir, 'output')
    const safeClassName = 'charcoal-icon-v2-bad-name-16'

    await fs.ensureDir(path.join(sourceDir, '16', 'regular'))
    await writeFile(
      path.join(sourceDir, '16', 'regular', 'Bad "Name"..svg'),
      '<svg />',
    )

    await runTransformCss(sourceDir, outputDir, 'v2')

    const css = await readFile(path.join(outputDir, 'index.css'), 'utf8')
    const html = await readFile(path.join(outputDir, 'index.html'), 'utf8')
    const story = await readFile(
      path.join(outputDir, 'index.story.tsx'),
      'utf8',
    )

    expect(css).toContain(`.${safeClassName}`)
    expect(html).toContain(`class="${safeClassName}"`)
    expect(story).toContain(`className="${safeClassName}"`)

    expect(css).not.toContain('"')
    expect(html).not.toContain('Bad "Name"')
  })
})
