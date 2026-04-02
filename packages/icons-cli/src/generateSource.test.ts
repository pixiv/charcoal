import { mkdtemp, readFile, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import vm from 'node:vm'
import fs from 'fs-extra'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { generateIconSource } from './generateSource'

async function importEsmFromSource(source: string) {
  return import(`data:text/javascript;charset=utf-8,${encodeURIComponent(source)}`)
}

describe('generateSource regression', () => {
  let workDir: string

  beforeEach(async () => {
    workDir = await mkdtemp(path.join(tmpdir(), 'icons-cli-generate-source-'))
  })

  afterEach(async () => {
    await fs.remove(workDir)
  })

  it('クォートやバックスラッシュを含むSVGでも埋め込みモジュールが壊れない', async () => {
    const outputDir = path.join(workDir, 'icons')
    const svgRoot = path.join(outputDir, 'svg', '16')
    const svgContent = `<svg><text>'"\\"</text></svg>\n`

    await fs.ensureDir(svgRoot)
    await writeFile(path.join(svgRoot, 'Add.svg'), svgContent)

    await generateIconSource(outputDir)

    const generatedModule = await readFile(
      path.join(outputDir, 'src', '16', 'Add.js'),
      'utf8',
    )
    const imported = await importEsmFromSource(generatedModule)

    expect(imported.default).toBe(`<svg><text>'"\\"</text></svg>`)
  })

  it('危険なキー名を含んでもCJSエントリポイントが壊れない', async () => {
    const outputDir = path.join(workDir, 'icons')
    const svgRoot = path.join(outputDir, 'svg', '16')
    const iconName = String.raw`Bad'"Name\Icon`

    await fs.ensureDir(svgRoot)
    await writeFile(path.join(svgRoot, `${iconName}.svg`), '<svg />')

    await generateIconSource(outputDir)

    const entrypoint = await readFile(
      path.join(outputDir, 'src', 'index.cjs'),
      'utf8',
    )
    const context = {
      module: { exports: {} as Record<string, unknown> },
    }

    const script = new vm.Script(entrypoint)
    script.runInNewContext(context)

    expect(Object.keys(context.module.exports)).toEqual([`16/${iconName}`])
  })
})
