import path from 'path'
import camelCase from 'camelcase'
import Figma from 'figma-js'
import { ensureDir, remove, writeFile } from 'fs-extra'
import got from 'got'
import { match } from 'path-to-regexp'
import { concurrently } from '../concurrently'

const extractor = match<{ file: string; name: string }>('/file/:file/:name')

function extractFileId(url: string) {
  const result = extractor(new URL(url).pathname)
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

const iconName = /^(?:\d+|Inline)\s*\//u

function isIconNode(node: Figma.Node) {
  return iconName.test(node.name)
}

type ExportFormat = 'svg' | 'pdf'

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

  static async runFromCli(
    url: string,
    token: string,
    outputRootDir: string,
    exportFormat: ExportFormat
  ) {
    const client = new this(url, token, exportFormat)

    const outputDir = path.join(process.cwd(), outputRootDir, exportFormat)

    // eslint-disable-next-line no-console
    console.log(`Exporting components from ${url}`)
    await client.loadSvg(outputDir)

    // eslint-disable-next-line no-console
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

  private async loadComponents() {
    const { document } = await this.getFile()

    // nodeIdが指定されている場合は、IDが一致するノードのみを探索対象にする
    // 指定されていない場合はドキュメント全体が探索対象
    const targets =
      this.nodeId !== undefined
        ? document.children.filter((node) => node.id === this.nodeId)
        : document.children

    // 対象ノードの子孫を探索してアイコンのコンポーネントを見つける
    targets.forEach((child) => this.findComponentsRecursively(child))

    if (Object.keys(this.components).length === 0) {
      throw new Error('No components found!')
    }
  }

  private async loadImageUrls() {
    // eslint-disable-next-line no-console
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

        const svg = await got(component.image).text()

        const filename = `${filenamify(component.name)}.${this.exportFormat}`
        const fullname = path.join(outputDir, filename)
        const dirname = path.dirname(fullname)

        await ensureDir(dirname)

        // eslint-disable-next-line no-console
        console.log(`found: ${filename} => ✅ writing...`)
        await writeFile(fullname, svg, 'utf8')
      })
    )
  }

  private async getFile() {
    // eslint-disable-next-line no-console
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
