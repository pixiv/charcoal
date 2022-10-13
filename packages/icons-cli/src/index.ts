#!/usr/bin/env node

import { readFile, writeFile } from 'fs-extra'
import yargs from 'yargs'
import { FigmaFileClient } from './figma/FigmaFileClient'
import { GithubClient } from './GitHubClient'
import { GitlabClient } from './GitlabClient'
import { DEFAULT_CURRENT_COLOR_TARGET, optimizeSvg } from './optimizeSvg'
import { mustBeDefined } from './utils'

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

void yargs
  .scriptName('icons-cli')
  .command(
    'figma:export',
    'Load all icons from Figma and save to files',
    () => yargs.option('format', { default: 'svg', choices: ['svg', 'pdf'] }),
    ({ format }) => {
      mustBeDefined(FIGMA_FILE_URL, 'FIGMA_FILE_URL')
      mustBeDefined(FIGMA_TOKEN, 'FIGMA_TOKEN')
      mustBeDefined(OUTPUT_ROOT_DIR, 'OUTPUT_ROOT_DIR')

      void FigmaFileClient.runFromCli(
        FIGMA_FILE_URL,
        FIGMA_TOKEN,
        OUTPUT_ROOT_DIR,
        format as 'svg' | 'pdf'
      ).catch((e) => {
        // eslint-disable-next-line no-console
        console.error(e)
        process.exit(1)
      })
    }
  )
  .command(
    'svg:optimize',
    'Optimize given .svg files and overwrite it',
    () =>
      yargs
        .option('file', { demandOption: true, type: 'string' })
        .option('color', {
          default: DEFAULT_CURRENT_COLOR_TARGET,
          type: 'string',
          defaultDescription:
            'Color code that should be converted into `currentColor`',
        }),
    ({ file, color }) => {
      void readFile(file, { encoding: 'utf-8' })
        .then((content) => optimizeSvg(content, color))
        .then((optimized) => writeFile(file, optimized))
        .catch((e) => {
          // eslint-disable-next-line no-console
          console.error(e)
          process.exit(1)
        })
    }
  )
  .command(
    'gitlab:mr',
    'Create a merge request in the name of icons-cli',
    {},
    () => {
      mustBeDefined(GITLAB_PROJECT_ID, 'GITLAB_PROJECT_ID')
      mustBeDefined(GITLAB_ACCESS_TOKEN, 'GITLAB_ACCESS_TOKEN')

      void GitlabClient.runFromCli(
        GITLAB_HOST ?? 'https://gitlab.com',
        Number(GITLAB_PROJECT_ID),
        GITLAB_ACCESS_TOKEN,
        GITLAB_DEFAULT_BRANCH ?? 'main'
      ).catch((e) => {
        // eslint-disable-next-line no-console
        console.error(e)
        process.exit(1)
      })
    }
  )
  .command(
    'github:pr',
    'Create a pull request in the name of icons-cli',
    {},
    () => {
      mustBeDefined(GITHUB_ACCESS_TOKEN, 'GITHUB_ACCESS_TOKEN')

      void GithubClient.runFromCli(
        GITHUB_REPO_OWNER ?? 'pixiv',
        GITHUB_REPO_NAME ?? 'charcoal',
        GITHUB_ACCESS_TOKEN,
        GITHUB_DEFAULT_BRANCH ?? 'main'
      ).catch((e) => {
        // eslint-disable-next-line no-console
        console.error(e)
        process.exit(1)
      })
    }
  )
  .demandCommand()
  .help()
  .parse()
