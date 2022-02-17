import type { CommitAction } from '@gitbeaker/core/dist/types/services/Commits'
import { Gitlab } from '@gitbeaker/node'
import { getChangedFiles } from './getChangedFiles'

type GitlabApi = InstanceType<typeof Gitlab>

export class GitlabClient {
  private readonly api: GitlabApi
  private readonly now: Date

  static async runFromCli(
    host: string,
    projectId: number,
    privateToken: string,
    defaultBranch: string
  ) {
    const client = new this(host, projectId, privateToken, defaultBranch)

    const diff = await client.createActionsFromDiff()
    console.log(`${diff.length} files are changed`)
    if (diff.length === 0) {
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

  async createActionsFromDiff(): Promise<CommitAction[]> {
    const actions: CommitAction[] = []

    for await (const file of getChangedFiles()) {
      actions.push({
        action: file.status === 'untracked' ? 'create' : 'update',
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
