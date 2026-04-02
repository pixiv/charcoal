/* eslint-disable no-console */
import path from 'path'
import camelCase from 'camelcase'
import * as Figma from 'figma-js'
import { ensureDir, remove, writeFile } from 'fs-extra'
import got from 'got'
import { match } from 'path-to-regexp'
import { concurrently } from '../concurrently'

const DRY_RUN = Boolean(process.env.DRY_RUN)

const matchPath = match<{ fileId: string; name: string }>('/file/:fileId/:name')

function extractParams(url: string): { fileId: string; nodeId?: string } {
  const { pathname, searchParams } = new URL(url)

  const result = matchPath(pathname)
  if (result === false) {
    throw new Error('No fileId found in url')
  }

  return {
    fileId: result.params.fileId,
    nodeId: searchParams.get('node-id') ?? undefined,
  }
}

function filenamify(name: string) {
  return camelCase(name, { pascalCase: true }).replace(' ', '')
}

const iconName = /^(?:\d+|Inline)\s*\//u

function isIconNode(node: Figma.Node) {
  return iconName.test(node.name)
}

function parseV2IconName(name: string) {
  return name
    .split(',')
    .map((f) => f.split('=').map((s) => s.trim())[1])
    .join('/')
    .toLowerCase()
}

function resolveOutputPath(outputDir: string, filename: string) {
  const normalizedOutputDir = path.resolve(outputDir)
  const fullname = path.resolve(normalizedOutputDir, filename)
  const relativePath = path.relative(normalizedOutputDir, fullname)

  if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) {
    return null
  }

  return fullname
}

type ExportFormat = 'svg' | 'pdf'

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

interface Component {
  id: string
  name: string
  image?: string
  variant?: string
}

type FigmaIconFileLayoutVersion = 'v1' | 'v2'

export class FigmaFileClient {
  private readonly fileId: string
  private readonly nodeId?: string
  private readonly exportFormat: ExportFormat
  private readonly client: Figma.ClientInterface
  private readonly layoutVersion: FigmaIconFileLayoutVersion
  private readonly requestSleepMs?: number

  private components: Record<string, Component> = {}
  private hasRequested = false

  static async runFromCli(
    url: string,
    token: string,
    outputRootDir: string,
    exportFormat: ExportFormat,
    layoutVersion: FigmaIconFileLayoutVersion = 'v1',
    requestSleepMs?: number,
  ) {
    const client = new this(
      url,
      token,
      exportFormat,
      layoutVersion,
      requestSleepMs,
    )

    const outputDir = path.join(process.cwd(), outputRootDir, exportFormat)

    console.log(
      `Exporting components from ${url} using layout ${layoutVersion}`,
    )
    await client.loadSvg(outputDir)

    console.log('success!')
  }

  constructor(
    url: string,
    personalAccessToken: string,
    exportFormat: ExportFormat,
    layoutVersion: FigmaIconFileLayoutVersion,
    requestSleepMs?: number,
  ) {
    this.client = Figma.Client({
      personalAccessToken,
    })

    const { fileId, nodeId } = extractParams(url)
    this.fileId = fileId
    this.nodeId = nodeId

    this.exportFormat = exportFormat
    this.layoutVersion = layoutVersion
    this.requestSleepMs = requestSleepMs
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
    // const { document } = (
    // await import('../../../../blob-report/scripts/doc.json')
    // ).default as Figma.FileResponse

    if (this.layoutVersion === 'v2') {
      this.findComponentsV2(document)
    } else {
      // nodeIdが指定されている場合は、IDが一致するノードのみを探索対象にする
      // 指定されていない場合はドキュメント全体が探索対象
      const targets =
        this.nodeId !== undefined
          ? document.children.filter((node) => node.id === this.nodeId)
          : document.children

      // 対象ノードの子孫を探索してアイコンのコンポーネントを見つける
      targets.forEach((child) => this.findComponentsRecursively(child))
    }

    const len = Object.keys(this.components).length
    if (len === 0) {
      throw new Error('No components found!')
    } else {
      console.log(`found ${len} icons`)
    }
  }

  private async loadImageUrls() {
    console.log('Getting export urls')

    await this.sleepBeforeRequest()
    const { data } = await this.client.fileImages(this.fileId, {
      format: this.exportFormat,
      ids: Object.keys(this.components),
      scale: 1,
      ...(this.exportFormat == 'pdf' ? { use_absolute_bounds: true } : {}),
    })

    for (const [id, image] of Object.entries(data.images)) {
      this.components[id].image = image
    }
  }

  private async downloadImages(outputDir: string) {
    const components = Object.values(this.components)
    const shouldSleepBetweenRequests = (this.requestSleepMs ?? 0) > 0

    const downloadImage = async (component: Component) => {
      if (component.image === undefined) {
        return
      }

      const filename = component.variant
        ? `${parseV2IconName(component.variant)}/${component.name}.${this.exportFormat}`
        : `${filenamify(component.name)}.${this.exportFormat}`
      const fullname = resolveOutputPath(outputDir, filename)

      if (fullname === null) {
        console.log(`skip invalid output path: ${filename}`)
        return
      }

      const dirname = path.dirname(fullname)

      if (DRY_RUN) {
        console.log(`[DRY_RUN] skip: ${filename} => ✅ writing...`)
        return
      }

      await this.sleepBeforeRequest()
      const response = await got.get(
        component.image,
        this.exportFormat == 'pdf' ? { responseType: 'buffer' } : {},
      )

      await ensureDir(dirname)

      console.log(`found: ${filename} => ✅ writing...`)
      await writeFile(fullname, response.body, 'utf8')
    }

    // sleep指定時は直列実行
    if (shouldSleepBetweenRequests) {
      for (const component of components) {
        await downloadImage(component)
      }

      return
    }

    // sleep未指定時は並列実行
    return concurrently(
      components.map((component) => async () => downloadImage(component)),
    )
  }

  private async getFile() {
    console.log('Processing response')

    await this.sleepBeforeRequest()
    const { data } = await this.client.file(this.fileId.toString())

    return data
  }

  private async sleepBeforeRequest() {
    const requestSleepMs = this.requestSleepMs ?? 0

    if (requestSleepMs <= 0) {
      return
    }

    if (this.hasRequested) {
      console.log(`Sleeping ${requestSleepMs}ms before next export request`)
      await sleep(requestSleepMs)
    }

    this.hasRequested = true
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
        this.findComponentsRecursively(grandChild),
      )
    }
  }

  private findComponentsV2(document: Figma.Document) {
    const iconsPage = document.children.find(
      (child): child is Figma.Canvas =>
        child.name === 'Icons 一覧' && child.type === 'CANVAS',
    )
    const iconComponentSets = iconsPage?.children.flatMap((c) => {
      if (c.type !== 'FRAME') return []
      return c.children.filter(
        (c): c is Figma.ComponentSet => c.type === 'COMPONENT_SET',
      )
    })
    iconComponentSets?.forEach((set) => {
      set.children.forEach((i) => {
        if (i.type !== 'COMPONENT') return null
        this.components[i.id] = {
          name: set.name,
          variant: i.name,
          id: i.id,
        }
      })
    })
  }
}
