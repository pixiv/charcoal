import { composeStories } from '@storybook/react-vite'
import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'
import { page } from 'vitest/browser'

import type { Meta, StoryFn } from '@storybook/react-vite'

type StoryFile = {
  default: Meta
  [name: string]: StoryFn | Meta
}

type Viewport = {
  width: number
  height: number
}

const defaultViewport: Viewport = {
  width: 1280,
  height: 720,
}

const storyFiles = import.meta.glob<StoryFile>('../packages/**/*.story.tsx', {
  eager: true,
})

afterEach(async () => {
  cleanup()
  await page.viewport(defaultViewport.width, defaultViewport.height)
})

for (const [filePath, storyFile] of Object.entries(storyFiles)) {
  const title = storyFile.default.title ?? filePath

  describe(title, () => {
    for (const [name, story] of Object.entries(composeStories(storyFile))) {
      const testFn = story.tags.includes('skip-test') ? test.skip : test

      testFn(name, async () => {
        const viewport =
          (story.parameters.vrt?.viewport as Viewport | undefined) ??
          defaultViewport

        await page.viewport(viewport.width, viewport.height)
        render(story())
        await document.fonts.ready
        await new Promise((resolve) => setTimeout(resolve, 200))

        const masks = Array.from(document.images, (image) =>
          page.elementLocator(image),
        )

        await expect
          .element(page.elementLocator(document.body))
          .toMatchScreenshot(story.id, {
            comparatorOptions: {
              allowedMismatchedPixelRatio: 0.0002,
            },
            screenshotOptions: {
              animations: 'disabled',
              mask: masks,
            },
          })
      })
    }
  })
}
