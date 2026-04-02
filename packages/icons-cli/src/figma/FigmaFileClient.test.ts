import path from 'node:path'
import { readFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import fs from 'fs-extra'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { FigmaFileClient } from './FigmaFileClient'

const { mockFile, mockFileImages, mockGotGet } = vi.hoisted(() => {
  return {
    mockFile: vi.fn(),
    mockFileImages: vi.fn(),
    mockGotGet: vi.fn(),
  }
})

vi.mock('figma-js', () => {
  return {
    Client: vi.fn(() => ({
      file: mockFile,
      fileImages: mockFileImages,
    })),
  }
})

vi.mock('got', () => {
  return {
    default: {
      get: mockGotGet,
    },
  }
})

function createV2FileResponse({
  setName,
  componentName,
}: {
  setName: string
  componentName: string
}) {
  return {
    data: {
      document: {
        children: [
          {
            type: 'CANVAS',
            name: 'Icons 一覧',
            children: [
              {
                type: 'FRAME',
                name: 'Frame',
                children: [
                  {
                    type: 'COMPONENT_SET',
                    id: 'set-1',
                    name: setName,
                    children: [
                      {
                        type: 'COMPONENT',
                        id: 'component-1',
                        name: componentName,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  }
}

describe('FigmaFileClient path traversal regression', () => {
  let workDir: string
  let consoleLogSpy: ReturnType<typeof vi.spyOn>

  beforeEach(async () => {
    workDir = await fs.mkdtemp(path.join(tmpdir(), 'icons-cli-'))
    consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => undefined)
    await fs.remove(path.join(tmpdir(), 'escaped'))

    mockGotGet.mockResolvedValue({
      body: '<svg><path /></svg>',
    })
  })

  afterEach(async () => {
    consoleLogSpy.mockRestore()
    vi.clearAllMocks()
    await fs.remove(path.join(tmpdir(), 'escaped'))
    await fs.remove(workDir)
  })

  it('v2 variant に ../ を含んでも OUTPUT_ROOT_DIR の外へ書き込まない', async () => {
    mockFile.mockResolvedValue(
      createV2FileResponse({
        setName: 'alert',
        componentName: 'size=../../escaped,color=default',
      }),
    )
    mockFileImages.mockResolvedValue({
      data: {
        images: {
          'component-1': 'https://example.com/icon.svg',
        },
      },
    })

    const outputRootDir = path.join(workDir, 'out')
    const outsidePath = path.join(tmpdir(), 'escaped', 'default', 'alert.svg')

    const client = new FigmaFileClient(
      'https://www.figma.com/file/FILE_ID/Test',
      'token',
      'svg',
      'v2',
    )

    await client.loadSvg(outputRootDir).catch((error) => error)

    await expect(fs.pathExists(outsidePath)).resolves.toBe(false)
  })

  it('component set name に ../ を含んでも OUTPUT_ROOT_DIR の外へ書き込まない', async () => {
    mockFile.mockResolvedValue(
      createV2FileResponse({
        setName: '../../pwned',
        componentName: 'size=16',
      }),
    )
    mockFileImages.mockResolvedValue({
      data: {
        images: {
          'component-1': 'https://example.com/icon.svg',
        },
      },
    })

    const outputRootDir = path.join(workDir, 'out')
    const outsidePath = path.join(workDir, 'pwned.svg')

    const client = new FigmaFileClient(
      'https://www.figma.com/file/FILE_ID/Test',
      'token',
      'svg',
      'v2',
    )

    await client.loadSvg(outputRootDir).catch((error) => error)

    await expect(fs.pathExists(outsidePath)).resolves.toBe(false)
  })

  it('正常な v2 名称なら想定ディレクトリに export される', async () => {
    mockFile.mockResolvedValue(
      createV2FileResponse({
        setName: 'alert',
        componentName: 'size=16,color=default',
      }),
    )
    mockFileImages.mockResolvedValue({
      data: {
        images: {
          'component-1': 'https://example.com/icon.svg',
        },
      },
    })

    const outputRootDir = path.join(workDir, 'out')
    const outputFile = path.join(outputRootDir, '16', 'default', 'alert.svg')

    const client = new FigmaFileClient(
      'https://www.figma.com/file/FILE_ID/Test',
      'token',
      'svg',
      'v2',
    )

    await client.loadSvg(outputRootDir)

    await expect(fs.pathExists(outputFile)).resolves.toBe(true)
    await expect(readFile(outputFile, 'utf8')).resolves.toBe(
      '<svg><path /></svg>',
    )
  })

  it('/design から始まる URL でも fileId を取得できる', async () => {
    mockFile.mockResolvedValue(
      createV2FileResponse({
        setName: 'alert',
        componentName: 'size=16,color=default',
      }),
    )
    mockFileImages.mockResolvedValue({
      data: {
        images: {
          'component-1': 'https://example.com/icon.svg',
        },
      },
    })

    const outputRootDir = path.join(workDir, 'out')
    const outputFile = path.join(outputRootDir, '16', 'default', 'alert.svg')

    const client = new FigmaFileClient(
      'https://www.figma.com/design/FILE_ID/Test?node-id=1-2',
      'token',
      'svg',
      'v2',
    )

    await client.loadSvg(outputRootDir)

    expect(mockFile).toHaveBeenCalledWith('FILE_ID')
    await expect(fs.pathExists(outputFile)).resolves.toBe(true)
  })
})
