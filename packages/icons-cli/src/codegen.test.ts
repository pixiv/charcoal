import vm from 'node:vm'
import { JSDOM } from 'jsdom'
import { describe, expect, it } from 'vitest'
import {
  createCssClassNameSegment,
  createSvgDataUri,
  serializeJavaScriptValue,
} from './codegen'
import {
  generateCjsEntrypoint,
  generateIconSvgEmbeddedSource,
} from './generateSource'

describe('serializeJavaScriptValue', () => {
  it.each([
    '',
    `O'Reilly said "hello" twice`,
    String.raw`C:\icons\multi\\slash`,
    `''''`,
    `</script><script>alert("xss")</script>`,
  ])('JS文字列として安全にシリアライズできる: %j', (value) => {
    const script = new vm.Script(`value = ${serializeJavaScriptValue(value)}`)
    const context = vm.createContext({ value: undefined as string | undefined })
    script.runInContext(context)

    expect(context.value).toBe(value)
  })
})

describe('createSvgDataUri', () => {
  it('通常のSVGでもdata URIを生成できる', () => {
    expect(
      createSvgDataUri('<svg xmlns="http://www.w3.org/2000/svg"></svg>'),
    ).toBe(
      'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E',
    )
  })

  it('複数クォートやバックスラッシュを含むSVGでもCSSに安全に埋め込める', () => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg"><text>"\\" '' ''' </style><script>alert(1)</script></text></svg>`
    const dataUri = createSvgDataUri(svg)

    expect(dataUri.startsWith('data:image/svg+xml;utf8,')).toBe(true)
    expect(dataUri).not.toContain('<svg')
    expect(dataUri).not.toContain('</style>')
    expect(dataUri).not.toContain('<script>')
    expect(dataUri).toContain('%22')
    expect(dataUri).toContain('%5C')

    const dom = new JSDOM('<!doctype html><html><head></head><body></body></html>')
    const style = dom.window.document.createElement('style')
    style.textContent = `.icon { background-image: url("${dataUri}"); }`
    dom.window.document.head.append(style)

    expect(style.sheet?.cssRules).toHaveLength(1)
  })
})

describe('createCssClassNameSegment', () => {
  it('既存の通常ケースを維持する', () => {
    expect(createCssClassNameSegment('Add.Circle.svg')).toBe('add-circle')
  })

  it('危険な文字をCSS class名から除去する', () => {
    expect(createCssClassNameSegment(`Bad "Name"..svg`)).toBe('bad-name')
  })
})

describe('generateSource', () => {
  it('空文字や連続クォートを含むSVGでも安全なモジュールソースを生成する', () => {
    const source = generateIconSvgEmbeddedSource(`''""\\\n`)

    expect(source).toContain(serializeJavaScriptValue(`''""\\`))
  })

  it('危険なキー名を含んでもCJSエントリポイントが壊れない', () => {
    const iconName = String.raw`16/Bad'"Name\Icon`
    const moduleContext = { module: { exports: {} as Record<string, unknown> } }
    const script = new vm.Script(generateCjsEntrypoint([iconName]))
    script.runInNewContext(moduleContext)

    expect(Object.keys(moduleContext.module.exports)).toEqual([iconName])
  })
})
