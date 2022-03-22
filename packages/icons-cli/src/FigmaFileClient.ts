import path from 'path'
import camelCase from 'camelcase'
import Figma from 'figma-js'
import { ensureDir, ensureFile, remove, writeFile } from 'fs-extra'
import got from 'got'
import { match } from 'path-to-regexp'
import { concurrently } from './concurrently'

const extracter = match<{ file: string; name: string }>('/file/:file/:name')

function extractFileId(url: string) {
  const result = extracter(new URL(url).pathname)
  if (result === false) {
    throw new Error('no :file in url')
  }

  return result.params.file
}

function extractNodeId(url: string) {
  if (!url.includes('?')) {
    return undefined
  }

  const [, query] = url.split('?')
  const params = new URLSearchParams(query)
  const nodeId = params.get('node-id')
  if (nodeId === null) {
    return undefined
  }

  return decodeURIComponent(nodeId)
}

function filenamify(name: string) {
  return camelCase(name, { pascalCase: true }).replace(' ', '')
}

// eslint-disable-next-line prefer-named-capture-group
const iconName = /^(\d|Inline)+\s*\/\s*/u

function isIconNode(node: Figma.Node) {
  return iconName.test(node.name)
}

type ExportFormat = 'svg' | 'pdf'

function getContentType(exportFormat: ExportFormat) {
  switch (exportFormat) {
    case 'svg':
      return 'image/svg+xml'
    case 'pdf':
      return 'application/pdf'
  }
}

interface Component {
  id: string
  name: string
  image?: string
}

export class FigmaFileClient {
  private readonly fileId: string
  private readonly nodeId?: string
  private readonly exportFormat: ExportFormat
  private readonly client: Figma.ClientInterface

  private components: Record<string, Component> = {}
  private targets: Figma.Node[] = []

  static async runFromCli(
    url: string,
    token: string,
    outputRootDir: string,
    exportFormat: ExportFormat
  ) {
    const client = new this(url, token, exportFormat)

    const root = process.cwd()

    const outputDir = path.join(root, outputRootDir, exportFormat)

    console.log(`Exporting ${url} components`)
    await client.loadSvg(outputDir)

    console.log(`Exporting components type`)
    const typedefDir = path.join(root, outputRootDir, 'src')
    await client.writeTypeDef(typedefDir)

    console.log('success!')
  }

  constructor(
    url: string,
    personalAccessToken: string,
    exportFormat: ExportFormat
  ) {
    this.client = Figma.Client({
      personalAccessToken,
    })

    this.fileId = extractFileId(url)
    this.nodeId = extractNodeId(url)
    this.exportFormat = exportFormat
  }

  async loadSvg(outputDir: string) {
    await remove(outputDir)
    await ensureDir(outputDir)

    await this.loadComponents()
    await this.loadImageUrls()
    await this.downloadImages(outputDir)
  }

  /**
   * Generate union of file names for typing
   */
  async writeTypeDef(outputDir: string) {
    const fullname = path.resolve(outputDir, 'filenames.ts')
    const KNOWN_ICON_FILES = Object.values(this.components).map(({ name }) =>
      filenamify(name)
    )

    console.log(`writing to ${outputDir}`)

    await ensureFile(fullname)
    await writeFile(
      fullname,
      `/** This file is auto generated. DO NOT EDIT BY HAND. */

/* eslint-disable */

// prettier-ignore
export const KNOWN_ICON_FILES = ${JSON.stringify(KNOWN_ICON_FILES)} as const;

export type KnownIconFile = typeof KNOWN_ICON_FILES[number];

/* eslint-enable */
`,
      { encoding: 'utf8' }
    )
  }

  private async loadComponents() {
    const { document } = await this.getFile()

    this.targets = document.children.filter((node) => {
      if (this.nodeId !== undefined) {
        return node.id === this.nodeId
      }

      return false
    })

    this.targets.forEach((child) => this.findComponentsRecursively(child))

    if (Object.values(this.targets).length === 0) {
      throw new Error('No components found!')
    }
  }

  private async loadImageUrls() {
    console.log('Getting export urls')

    const { data } = await this.client.fileImages(this.fileId, {
      format: this.exportFormat,
      ids: Object.keys(this.components),
      scale: 1,
    })

    for (const [id, image] of Object.entries(data.images)) {
      this.components[id].image = image
    }
  }

  private async downloadImages(outputDir: string) {
    return concurrently(
      Object.values(this.components).map((component) => async () => {
        if (component.image === undefined) {
          return
        }

        const response = await got.get(component.image, {
          headers: {
            'Content-Type': getContentType(this.exportFormat),
          },
          encoding: 'utf8',
        })

        const filename = `${filenamify(component.name)}.${this.exportFormat}`
        const fullname = path.join(outputDir, filename)
        const dirname = path.dirname(fullname)

        await ensureDir(dirname)

        console.log(`found: ${filename} => ✅ writing...`)
        await writeFile(fullname, response.body, 'utf8')
      })
    )
  }

  private async getFile() {
    console.log('Processing response')

    const { data } = await this.client.file(this.fileId.toString())

    return data
  }

  private findComponentsRecursively(child: Figma.Node) {
    if (child.type === 'COMPONENT') {
      const { name, id } = child

      if (isIconNode(child)) {
        this.components[id] = {
          name,
          id,
        }
      }
    } else if ('children' in child) {
      child.children.forEach((grandChild) =>
        this.findComponentsRecursively(grandChild)
      )
    }
  }
}
