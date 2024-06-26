#!/usr/bin/env node

import yargs from 'yargs'
import { GithubClient } from './GitHubClient'
import { mustBeDefined } from './utils'

const TARGET_DIR = process.env.TARGET_DIR

/**
 * GitHub
 */
const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN
const GITHUB_REPO_OWNER = process.env.GITHUB_REPO_OWNER
const GITHUB_REPO_NAME = process.env.GITHUB_REPO_NAME
const GITHUB_DEFAULT_BRANCH = process.env.GITHUB_DEFAULT_BRANCH

void yargs
  .scriptName('pullrequest-cli')
  .command(
    'github:pr',
    'Create a pull request in the name of pullrequest-cli',
    {
      category: {
        type: 'string',
        alias: 'c',
        default: 'CI',
      },
      title: {
        type: 'string',
        alias: 't',
        default: 'Pull request from CI',
      },
    },
    async ({ title, category }) => {
      mustBeDefined(GITHUB_ACCESS_TOKEN, 'GITHUB_ACCESS_TOKEN')
      mustBeDefined(TARGET_DIR, 'TARGET_DIR')

      await GithubClient.runFromCli(
        GITHUB_REPO_OWNER ?? 'pixiv',
        GITHUB_REPO_NAME ?? 'charcoal',
        GITHUB_ACCESS_TOKEN,
        GITHUB_DEFAULT_BRANCH ?? 'main',
        TARGET_DIR,
        category,
        title
      )
    }
  )
  .demandCommand()
  .strict()
  .help()
  .parse()
