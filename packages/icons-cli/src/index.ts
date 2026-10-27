#!/usr/bin/env node

import { parseArgs } from 'node:util'
import { FigmaFileClient } from './figma/FigmaFileClient.ts'
import { GithubClient } from './GitHubClient.ts'
import { GitlabClient } from './GitlabClient.ts'
import { DEFAULT_CURRENT_COLOR_TARGET } from './svg/optimizeSvg.ts'
import { optimizeSvgInDirectory } from './svg/optimizeSvgInDirectory.ts'
import { generateIconSource } from './generateSource.ts'
import { mustBeDefined } from './utils.ts'

/**
 * Figma
 */
const FIGMA_TOKEN = process.env.FIGMA_TOKEN
const FIGMA_FILE_URL = process.env.FIGMA_FILE_URL
const OUTPUT_ROOT_DIR = process.env.OUTPUT_ROOT_DIR

/**
 * GitLab
 */
const GITLAB_ACCESS_TOKEN = process.env.GITLAB_ACCESS_TOKEN
const GITLAB_DEFAULT_BRANCH = process.env.GITLAB_DEFAULT_BRANCH
const GITLAB_HOST = process.env.GITLAB_HOST
const GITLAB_PROJECT_ID = process.env.GITLAB_PROJECT_ID

/**
 * GitHub
 */
const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN
const GITHUB_REPO_OWNER = process.env.GITHUB_REPO_OWNER
const GITHUB_REPO_NAME = process.env.GITHUB_REPO_NAME
const GITHUB_DEFAULT_BRANCH = process.env.GITHUB_DEFAULT_BRANCH

const usage = `icons-cli <command>

Commands:
  icons-cli figma:export    Load all icons from Figma and save to files
  icons-cli svg:optimize    Optimize svg files in output directory
  icons-cli files:generate  Enumerate svg files in output directory and generate icon files
  icons-cli gitlab:mr       Create a merge request in the name of icons-cli
  icons-cli github:pr       Create a pull request in the name of icons-cli`

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

  switch (command) {
    case 'figma:export': {
      const { values } = parseArgs({
        args,
        options: {
          format: { type: 'string', default: 'svg' },
          layout: { type: 'string', default: 'v1' },
          sleepMs: { type: 'string' },
        },
      })
      const format = values.format ?? 'svg'

      if (format !== 'svg' && format !== 'pdf') {
        throw new TypeError('format must be svg or pdf.')
      }

      const sleepMs =
        values.sleepMs === undefined ? undefined : Number(values.sleepMs)

      if (sleepMs !== undefined && (!Number.isFinite(sleepMs) || sleepMs < 0)) {
        throw new TypeError('sleepMs must be 0 or greater.')
      }

      mustBeDefined(FIGMA_FILE_URL, 'FIGMA_FILE_URL')
      mustBeDefined(FIGMA_TOKEN, 'FIGMA_TOKEN')
      mustBeDefined(OUTPUT_ROOT_DIR, 'OUTPUT_ROOT_DIR')
      await FigmaFileClient.runFromCli(
        FIGMA_FILE_URL,
        FIGMA_TOKEN,
        OUTPUT_ROOT_DIR,
        format,
        (values.layout ?? 'v1') as 'v1' | 'v2',
        sleepMs,
      )
      return
    }
    case 'svg:optimize': {
      const { values } = parseArgs({
        args,
        options: {
          color: { type: 'string', default: DEFAULT_CURRENT_COLOR_TARGET },
          ignoreFile: { type: 'string' },
        },
      })

      mustBeDefined(OUTPUT_ROOT_DIR, 'OUTPUT_ROOT_DIR')
      await optimizeSvgInDirectory(
        OUTPUT_ROOT_DIR,
        values.color ?? DEFAULT_CURRENT_COLOR_TARGET,
        values.ignoreFile,
      )
      return
    }
    case 'files:generate':
      parseArgs({ args, options: {} })
      mustBeDefined(OUTPUT_ROOT_DIR, 'OUTPUT_ROOT_DIR')
      await generateIconSource(OUTPUT_ROOT_DIR)
      return
    case 'gitlab:mr':
      parseArgs({ args, options: {} })
      mustBeDefined(GITLAB_PROJECT_ID, 'GITLAB_PROJECT_ID')
      mustBeDefined(GITLAB_ACCESS_TOKEN, 'GITLAB_ACCESS_TOKEN')
      mustBeDefined(OUTPUT_ROOT_DIR, 'OUTPUT_ROOT_DIR')
      await GitlabClient.runFromCli(
        GITLAB_HOST ?? 'https://gitlab.com',
        Number(GITLAB_PROJECT_ID),
        GITLAB_ACCESS_TOKEN,
        GITLAB_DEFAULT_BRANCH ?? 'main',
        OUTPUT_ROOT_DIR,
      )
      return
    case 'github:pr':
      parseArgs({ args, options: {} })
      mustBeDefined(GITHUB_ACCESS_TOKEN, 'GITHUB_ACCESS_TOKEN')
      mustBeDefined(OUTPUT_ROOT_DIR, 'OUTPUT_ROOT_DIR')
      await GithubClient.runFromCli(
        GITHUB_REPO_OWNER ?? 'pixiv',
        GITHUB_REPO_NAME ?? 'charcoal',
        GITHUB_ACCESS_TOKEN,
        GITHUB_DEFAULT_BRANCH ?? 'main',
        OUTPUT_ROOT_DIR,
      )
      return
    default:
      throw new Error(`Unknown command: ${command}`)
  }
}

void main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})
