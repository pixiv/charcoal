import { promises as fs } from 'fs'
import path from 'path'
import { execp } from './utils'

export const targetDir = path.resolve(process.cwd(), 'packages', 'icons')

/**
 * dir 内で変更があったファイル情報を for await で回せるようにするやつ
 */
export async function* getChangedFiles(dir = targetDir) {
  const gitStatus = await collectGitStatus()
  const map = new Map(Object.entries(gitStatus))
  for (const [relativePath, status] of map) {
    const fullpath = path.resolve(process.cwd(), relativePath)
    if (!`${fullpath}`.startsWith(`${dir}/`)) {
      continue
    }
    const content = await fs.readFile(fullpath, { encoding: 'utf-8' })
    yield { relativePath, content, status }
  }
}

async function collectGitStatus() {
  return Object.fromEntries(
    /**
     * @see https://git-scm.com/docs/git-status#_porcelain_format_version_1
     */
    (await execp(`git status --porcelain`)).split('\n').map((s) => {
      return [
        s.slice(3),
        s.startsWith(' M')
          ? 'modified'
          : s.startsWith('??')
          ? 'untracked'
          : s.startsWith(' D')
          ? 'deleted'
          : null,
      ] as const
    })
  )
}
