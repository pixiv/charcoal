import child_process from 'child_process'
import type { ChildProcess } from 'child_process'
import fs from 'fs'
import os from 'os'
import path from 'path'
import postcss from 'postcss'
import { createDefer } from '../defer'
import { detectPackageManager } from '../packageManager'
import { collectClassNamesAndStyles, diffsBetweenStyles } from '../style'
import { withPackages } from '../withPackages'

function processDone(child: ChildProcess) {
  return new Promise<void>((resolve, reject) => {
    child
      .once('error', (err) => {
        reject(err)
      })
      .once('exit', (code, signal) => {
        if (code == null) {
          return
        }
        if (code === 0) {
          resolve()
        } else if (signal != null) {
          reject(
            new Error(`Subprocess failed with code: ${code}, signal: ${signal}`)
          )
        } else {
          reject(new Error(`Subprocess failed with code: ${code}`))
        }
      })
  })
}

export interface CheckConfig {
  format: 'default' | 'json'
  beforeConfig?: string
  afterConfig?: string
  packages?: readonly string[]
}

export async function check({
  format,
  beforeConfig,
  afterConfig,
  packages = [],
}: CheckConfig) {
  const packageManager = detectPackageManager(process.cwd())

  const selfPath = path.resolve(__dirname, '../index.js')

  const deferer = createDefer()
  const { defer, dispose } = deferer
  process.on('SIGINT', dispose)
  try {
    const tmpdir = fs.mkdtempSync(
      path.resolve(os.tmpdir(), 'tailwind-diff-css')
    )
    defer(() => {
      const files = fs.readdirSync(tmpdir)
      for (const file of files) {
        fs.unlinkSync(path.resolve(tmpdir, file))
      }
      fs.rmdirSync(tmpdir)
    })

    const beforeCSSPath = path.resolve(tmpdir, 'before.css')
    defer(() => {
      if (fs.existsSync(beforeCSSPath)) {
        fs.unlinkSync(beforeCSSPath)
      }
    })

    await processDone(
      child_process.fork(selfPath, [
        'dump',
        '--output',
        beforeCSSPath,
        ...(beforeConfig != null ? ['--config', beforeConfig] : []),
      ])
    )

    const afterCSSPath = path.resolve(tmpdir, 'after.css')
    defer(() => {
      if (fs.existsSync(afterCSSPath)) {
        fs.unlinkSync(afterCSSPath)
      }
    })

    await withPackages(packageManager, packages, async () => {
      await processDone(
        child_process.fork(selfPath, [
          'dump',
          '--output',
          afterCSSPath,
          ...(afterConfig != null ? ['--config', afterConfig] : []),
        ])
      )
    })

    const beforeStyles = collectClassNamesAndStyles(
      postcss
        .parse(fs.readFileSync(beforeCSSPath, { encoding: 'utf8' }))
        .toResult()
    )
    const afterStyles = collectClassNamesAndStyles(
      postcss
        .parse(fs.readFileSync(afterCSSPath, { encoding: 'utf8' }))
        .toResult()
    )

    const diffs = diffsBetweenStyles(beforeStyles, afterStyles)

    if (format === 'json') {
      const json = diffs.map((item) => ({
        ...item,
        css: item.css.map((rule) => rule.toString()),
      }))
      process.stdout.write(JSON.stringify(json))
    } else {
      let added = 0
      let removed = 0
      for (const item of diffs) {
        if (item.status === 'added') {
          added++
        } else {
          removed++
        }
      }
      // eslint-disable-next-line no-console
      console.log(`${added} classes added, ${removed} classes removed.`)
    }
  } finally {
    dispose()
    process.off('SIGINT', dispose)
  }
}
