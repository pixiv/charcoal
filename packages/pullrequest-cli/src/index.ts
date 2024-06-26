#!/usr/bin/env node

import yargs from 'yargs'
import { GithubClient } from './GitHubClient'
import { GitlabClient } from './GitlabClient'
import { mustBeDefined } from './utils'

const TARGET_DIR = process.env.TARGET_DIR

/**
 * GitHub
 */
const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN
const GITHUB_REPO_OWNER = process.env.GITHUB_REPO_OWNER
const GITHUB_REPO_NAME = process.env.GITHUB_REPO_NAME
const GITHUB_DEFAULT_BRANCH = process.env.GITHUB_DEFAULT_BRANCH

/**
 * GitLab
 */
const GITLAB_ACCESS_TOKEN = process.env.GITLAB_ACCESS_TOKEN
const GITLAB_DEFAULT_BRANCH = process.env.GITLAB_DEFAULT_BRANCH
const GITLAB_HOST = process.env.GITLAB_HOST
const GITLAB_PROJECT_ID = process.env.GITLAB_PROJECT_ID

void yargs
  .scriptName('pullrequest-cli')
  .command(
    'gitlab:mr',
    'Create a merge request in the name of pullrequest-cli',
    {},
    async () => {
      mustBeDefined(GITLAB_PROJECT_ID, 'GITLAB_PROJECT_ID')
      mustBeDefined(GITLAB_ACCESS_TOKEN, 'GITLAB_ACCESS_TOKEN')
      mustBeDefined(TARGET_DIR, 'TARGET_DIR')

      await GitlabClient.runFromCli(
        GITLAB_HOST ?? 'https://gitlab.com',
        Number(GITLAB_PROJECT_ID),
        GITLAB_ACCESS_TOKEN,
        GITLAB_DEFAULT_BRANCH ?? 'main',
        TARGET_DIR
      )
    }
  )
  .command(
    'github:pr',
    'Create a pull request in the name of pullrequest-cli',
    {
      category: {
        type: "string",
        alias: "c",
        default: "CI",
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
