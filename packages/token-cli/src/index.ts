import { ensureDir, writeFile } from 'fs-extra'
import path from 'path'
import yargs from 'yargs'
import { getDesignToken } from './figma'
import { mustBeDefined } from './utils'

/**
 * Figma
 */
const FIGMA_TOKEN = process.env.FIGMA_TOKEN
const FIGMA_NODE_ID = process.env.FIGMA_NODE_ID

/**
 * GitHub
 */
const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN
const GITHUB_REPO_OWNER = process.env.GITHUB_REPO_OWNER
const GITHUB_REPO_NAME = process.env.GITHUB_REPO_NAME
const GITHUB_DEFAULT_BRANCH = process.env.GITHUB_DEFAULT_BRANCH

void yargs
  .scriptName('token-cli')
  .command('test', 'test figma variables api', {}, async () => {
    mustBeDefined(FIGMA_TOKEN, 'FIGMA_TOKEN')
    mustBeDefined(FIGMA_NODE_ID, 'FIGMA_NODE_ID')

    const res = await getDesignToken(FIGMA_TOKEN, FIGMA_NODE_ID)

    await ensureDir(path.join(__dirname, '..', 'out'))
    await writeFile(
      path.join(__dirname, '..', 'out', 'tokens.json'),
      JSON.stringify(res.data),
      'utf8'
    )
  })
  .demandCommand()
  .strict()
  .help()
  .parse()
