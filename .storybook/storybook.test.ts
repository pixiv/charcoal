import path from 'node:path'
import * as glob from 'glob'
import { vi } from 'vitest'

import { composeStories } from '@storybook/react'
import { render, cleanup } from '@testing-library/react'
import { addSerializer } from 'jest-specific-snapshot'
import { styleSheetSerializer } from 'jest-styled-components'

import type { Meta, StoryFn } from '@storybook/react'

// Mock the custom useId utility
vi.mock('../packages/react/src/_lib/useId', () => ({
  useId: vi.fn((id?: string) => id ?? 'test-id'),
}))

addSerializer(styleSheetSerializer)

type StoryFile = {
  default: Meta
  [name: string]: StoryFn | Meta
}

const compose = (
  entry: StoryFile
): ReturnType<typeof composeStories<StoryFile>> => {
  try {
    return composeStories(entry)
  } catch (e) {
    throw new Error(
      `There was an issue composing stories for the module: ${JSON.stringify(
        entry
      )}, ${e}`
    )
  }
}

function getAllStoryFiles() {
  // Place the glob you want to match your stories files
  const globPatterns = '../packages/**/*.{stories,story}.{js,jsx,mjs,ts,tsx}'
  const ignorePatterns = /node_modules|react-sandbox/
  const storyFiles = glob
    .sync(path.join(__dirname, globPatterns))
    .filter((filePath) => !ignorePatterns.test(filePath))

  return Promise.all(
    storyFiles.map(async (filePath) => {
      const storyFile = await import(filePath)

      return { filePath, storyFile }
    })
  )
}

// Recreate similar options to Storyshots. Place your configuration below
const options = {
  suite: 'Storybook Tests',
  storyKindRegex: /^.*?DontTest$/,
  storyNameRegex: /UNSET/,
  snapshotsDirName: '__snapshots__',
  snapshotExtension: 'storyshot',
}

describe(options.suite, async () => {
  const files = await getAllStoryFiles()

  afterEach(() => {
    cleanup()
  })

  files.forEach(({ storyFile, filePath }) => {
    const meta = storyFile.default
    const title = meta.title || filePath
    const dir = path.join(path.dirname(filePath), options.snapshotsDirName)
    const filename = [
      path.basename(filePath, '.tsx'),
      options.snapshotExtension,
    ].join('.')
    const snapshotPath = path.join(dir, filename)

    if (
      options.storyKindRegex.test(title) ||
      meta.parameters?.storyshots?.disable
    ) {
      return
    }

    describe(title, () => {
      const stories = Object.entries(compose(storyFile))
        .map(([name, story]) => ({ name, story }))
        .filter(({ name, story }) => {
          return (
            !options.storyNameRegex.test(name) &&
            !story.parameters.storyshots?.disable
          )
        })

      if (stories.length <= 0) {
        throw new Error(
          `No stories found for this module: ${title}. Make sure there is at least one valid story for this module, without a disable parameter, or add parameters.storyshots.disable in the default export of this file.`
        )
      }

      for (const { name, story } of stories) {
        const testFn = story.parameters.storyshots?.skip ? test.skip : test

        testFn(name, async () => {
          const mounted = render(story())
          expect(mounted.container).toMatchSpecificSnapshot(snapshotPath)
        })
      }
    })
  })
})
