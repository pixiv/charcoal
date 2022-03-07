import { Octokit } from '@octokit/rest'
import { getChangedFiles } from './getChangedFiles'

type RefResponse = ReturnType<GithubClient['createBranch']> extends Promise<
  infer R
>
  ? R
  : never

interface TreeItem {
  path?: string
  mode?: '100644' | '100755' | '040000' | '160000' | '120000'
  type?: 'blob' | 'commit' | 'tree'
  sha?: string | null
  content?: string
}

export class GithubClient {
  private readonly api: Octokit
  private readonly now: Date

  static async runFromCli(
    repoOwner: string,
    repoName: string,
    token: string,
    defaultBranch: string
  ) {
    const client = new this(repoOwner, repoName, token, defaultBranch)

    const diff = await client.createTreeFromDiff()
    console.log(`${diff.length} files are changed`)
    if (diff.length === 0) {
      console.log('no changes. aborting')
      return
    }

    const newBranch = await client.createBranch()

    await client.createCommit(diff, newBranch)
    return client.createPullRequest(newBranch)
  }

  constructor(
    private readonly repoOwner: string,
    private readonly repoName: string,
    token: string,
    private readonly defaultBranch: string,
    now = new Date()
  ) {
    this.api = new Octokit({
      auth: token,
    })

    this.now = now
  }

  get branch() {
    return `icons/update/${this.now.getTime()}`
  }

  /**
   * both used for commit message or pull request title
   */
  get message() {
    return `[icons-cli] Update icons ${this.now.toDateString()}`
  }

  async createTreeFromDiff(): Promise<TreeItem[]> {
    const tree: TreeItem[] = []

    for await (const file of getChangedFiles()) {
      const item = {
        path: file.relativePath,
        // 100 はファイル 644 は実行不可なファイルであるという意味
        // @see https://octokit.github.io/rest.js/v18#git-create-tree
        mode: '100644' as const,
        content: file.content,
      }

      if (file.status === 'deleted') {
        // https://stackoverflow.com/questions/23637961/how-do-i-mark-a-file-as-deleted-in-a-tree-using-the-github-api
        tree.push({
          ...item,
          sha: null,
        })
      } else {
        tree.push(item)
      }
    }

    return tree
  }

  async createCommit(tree: TreeItem[], targetBranch: RefResponse) {
    const parentCommit = await this.api.git.getCommit({
      owner: this.repoOwner,
      repo: this.repoName,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      commit_sha: targetBranch.data.object.sha,
    })

    const newTree = await this.api.git.createTree({
      owner: this.repoOwner,
      repo: this.repoName,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      base_tree: parentCommit.data.tree.sha,
      tree,
    })

    const commit = await this.api.git.createCommit({
      owner: this.repoOwner,
      repo: this.repoName,
      message: this.message,
      tree: newTree.data.sha,
      parents: [parentCommit.data.sha],
    })

    console.log(commit.data)

    return commit
  }

  async createPullRequest(targetBranch: RefResponse) {
    const defaultBranch = await this.getDefaultBranchRef()

    return this.api.pulls.create({
      owner: this.repoOwner,
      repo: this.repoName,
      head: targetBranch.data.ref,
      base: defaultBranch.data.ref,
      title: this.message,
      body: '',
    })
  }

  private getDefaultBranchRef() {
    return this.api.git.getRef({
      owner: this.repoOwner,
      repo: this.repoName,
      ref: `heads/${this.defaultBranch}`,
    })
  }

  async createBranch() {
    const defaultBranch = await this.getDefaultBranchRef()

    return this.api.git.createRef({
      owner: this.repoOwner,
      repo: this.repoName,
      ref: `refs/heads/${this.branch}`,
      sha: defaultBranch.data.object.sha,
    })
  }
}
