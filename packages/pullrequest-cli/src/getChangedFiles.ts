import { promises as fs, existsSync } from 'fs'
import path from 'path'
import { execp } from './utils'

/**
 * dir 内で変更があったファイル情報を for await で回せるようにするやつ
 */
export async function* getChangedFiles(dir: string) {
  if (!existsSync(dir))
    throw new Error(`pullrequest-cli: target directory not found (${dir})`)
  const gitStatus = await collectGitStatus()
  for (const [relativePath, status] of gitStatus) {
    const fullpath = path.resolve(process.cwd(), relativePath)
    if (!fullpath.startsWith(`${dir}/`)) {
      continue
    }
    if (!existsSync(fullpath))
      throw new Error(`pullrequest-cli: could not load svg (${fullpath})`)
    const content = await fs.readFile(fullpath, { encoding: 'utf-8' })
    yield { relativePath, content, status }
  }
}

async function collectGitStatus() {
  return new Map(
    /**
     * @see https://git-scm.com/docs/git-status#_porcelain_format_version_1
     */
    (await execp(`git status --porcelain -u`)).split('\n').map((s) => {
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
