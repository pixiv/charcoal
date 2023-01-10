import type { CommitAction } from '@gitbeaker/core/dist/types/services/Commits'
import { Gitlab } from '@gitbeaker/node'
import path from 'path'
import { getChangedFiles } from './getChangedFiles'

type GitlabApi = InstanceType<typeof Gitlab>

export class GitlabClient {
  private readonly api: GitlabApi
  private readonly now: Date

  static async runFromCli(
    host: string,
    projectId: number,
    privateToken: string,
    defaultBranch: string,
    outputDir: string
  ) {
    const client = new this(host, projectId, privateToken, defaultBranch)
    const outputDirFullPath = path.resolve(process.cwd(), outputDir)
    const diff = await client.createActionsFromDiff(outputDirFullPath)
    // eslint-disable-next-line no-console
    console.log(`${diff.length} files are changed`)
    if (diff.length === 0) {
      // eslint-disable-next-line no-console
      console.log('no changes. aborting')
      return
    }

    await client.createCommit(diff)
    return client.createMergeRequest()
  }

  constructor(
    private readonly host: string,
    private readonly projectId: number,
    privateToken: string,
    private readonly defaultBranch: string,
    now = new Date()
  ) {
    this.api = new Gitlab({
      host: this.host,
      token: privateToken,
    })
    this.now = now
  }

  get branch() {
    return `icons/update/${this.now.getTime()}`
  }

  /**
   * both used for commit message or merge request title
   */
  get message() {
    return `[icons-cli] Update icons ${this.now.toDateString()}`
  }

  async createActionsFromDiff(outputDir: string): Promise<CommitAction[]> {
    const actions: CommitAction[] = []

    for await (const file of getChangedFiles(outputDir)) {
      actions.push({
        action:
          file.status === 'untracked'
            ? 'create'
            : file.status === 'deleted'
            ? 'delete'
            : 'update',
        filePath: file.relativePath,
        content: file.content,
      })
    }

    return actions
  }

  async createCommit(diff: CommitAction[]) {
    return this.api.Commits.create(
      this.projectId,
      this.branch,
      this.message,
      diff,
      {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        start_branch: this.defaultBranch,
      }
    )
  }

  createMergeRequest() {
    return this.api.MergeRequests.create(
      this.projectId,
      this.branch,
      this.defaultBranch,
      this.message
    )
  }
}
