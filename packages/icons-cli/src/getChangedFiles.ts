import { promises as fs } from 'fs'
import path from 'path'
import { execp } from './utils'

export const targetDir = path.resolve(process.cwd(), 'packages', 'icons', 'svg')

/**
 * dir 内で変更があったファイル情報を for await で回せるようにするやつ
 */
export async function* getChangedFiles(dir = targetDir) {
  const directories = await fs.readdir(dir)
  const gitStatus = await collectGitStatus()

  for (const dir of directories) {
    const directory = path.resolve(targetDir, dir)

    // eslint-disable-next-line no-await-in-loop
    const stat = await fs.stat(directory)
    if (!stat.isDirectory()) {
      continue
    }

    // eslint-disable-next-line no-await-in-loop
    const files = await fs.readdir(directory)

    for (const file of files) {
      const fullpath = path.resolve(targetDir, dir, file)
      const relativePath = path.relative(process.cwd(), fullpath)

      const status = gitStatus[relativePath]
      if (status == null) {
        // Already up-to-date
        continue
      }

      // eslint-disable-next-line no-await-in-loop
      const content = await fs.readFile(fullpath, { encoding: 'utf-8' })

      yield { relativePath, content, status }
    }
  }
}

async function collectGitStatus() {
  return Object.fromEntries(
    /**
     * @see https://git-scm.com/docs/git-status#_porcelain_format_version_1
     */
    (await execp(`git status --porcelain`))
      .split('\n')
      .map(
        (s) =>
          [
            s.slice(3),
            s.startsWith(' M')
              ? 'modified'
              : s.startsWith('??')
              ? 'untracked'
              : null,
          ] as const
      )
  )
}
