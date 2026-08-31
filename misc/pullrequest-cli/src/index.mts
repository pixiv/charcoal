#!/usr/bin/env node

import { parseArgs } from 'node:util'
import { GithubClient } from './GitHubClient.ts'
import { mustBeDefined } from './utils.ts'

const TARGET_DIR = process.env.TARGET_DIR
const TARGET_DIRS = process.env.TARGET_DIRS

/**
 * GitHub
 */
const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN
const GITHUB_REPO_OWNER = process.env.GITHUB_REPO_OWNER
const GITHUB_REPO_NAME = process.env.GITHUB_REPO_NAME
const GITHUB_DEFAULT_BRANCH = process.env.GITHUB_DEFAULT_BRANCH

const usage = `pullrequest-cli <command>

Commands:
  pullrequest-cli github:pr  Create a pull request in the name of pullrequest-cli`

const main = async (): Promise<void> => {
  const [command, ...args] = process.argv.slice(2)

  if (
    command === undefined ||
    command === '--help' ||
    command === '-h' ||
    args.includes('--help') ||
    args.includes('-h')
  ) {
    console.log(usage)
    return
  }

  if (command !== 'github:pr') {
    throw new Error(`Unknown command: ${command}`)
  }

  const { values } = parseArgs({
    args,
    options: {
      category: { type: 'string', short: 'c', default: 'CI' },
      title: { type: 'string', short: 't', default: 'Pull request from CI' },
    },
  })

  mustBeDefined(GITHUB_ACCESS_TOKEN, 'GITHUB_ACCESS_TOKEN')
  const targetDirs =
    TARGET_DIRS?.split(',')
      .map((dir) => dir.trim())
      .filter(Boolean) ?? (TARGET_DIR ? [TARGET_DIR] : undefined)
  mustBeDefined(targetDirs, 'TARGET_DIR or TARGET_DIRS')

  await GithubClient.runFromCli(
    GITHUB_REPO_OWNER ?? 'pixiv',
    GITHUB_REPO_NAME ?? 'charcoal',
    GITHUB_ACCESS_TOKEN,
    GITHUB_DEFAULT_BRANCH ?? 'main',
    targetDirs,
    values.category ?? 'CI',
    values.title ?? 'Pull request from CI',
  )
}

void main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})
