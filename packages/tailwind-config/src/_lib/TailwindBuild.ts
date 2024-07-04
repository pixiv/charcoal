import postcss, { Result } from 'postcss'
import postcssSelectorParser from 'postcss-selector-parser'
import tailwindcss from 'tailwindcss'
import type { TailwindConfig } from 'tailwindcss/tailwind-config'

const selectorParser = postcssSelectorParser()

/**
 * テスト用に tailwind.css のビルドを走らせる
 *
 * クラス一覧を得たりするたびにビルドが走らないことを保証するために、new した時点でビルドが完了するように作っている
 */
export class TailwindBuild {
  private readonly parsedCss: Record<string, string[]>

  private constructor(private result: Result) {
    const parsedCss: Record<string, string[]> = {}

    result.root.walkRules((rule) => {
      // たとえば `h1, .hoge, .fuga::before { ... }` みたいな rule があるとする
      // これをパースして ['h1', '.hoge', '.fuga::before'] のような配列（実際にはそれを表すオブジェクトの配列）を得たい
      const { nodes } = selectorParser.astSync(rule.selector)

      // クラス一覧を得たいのでクラスだけ絞り込んで配列にマージ
      const classes = nodes.flatMap(({ nodes }) =>
        nodes.flatMap((node) => {
          if (node.type === 'class') {
            return [[node.value.trim(), rule.toString()] as const]
          } else {
            return []
          }
        })
      )

      // 1 個のクラスは複数のルールを持つ場合がある（ ::before など ）ので配列で突っ込む
      classes.forEach(([className, css]) => {
        if (className in parsedCss) {
          parsedCss[className].push(css)
        } else {
          parsedCss[className] = [css]
        }
      })
    })

    this.parsedCss = parsedCss
  }

  static async run(config: TailwindConfig, css: string) {
    const plugin = tailwindcss({
      ...config,

      // @ts-expect-error safelist が @types/tailwindcss に生えてない
      safelist: [
        {
          // 一切 purge しない
          pattern: /./u,
          variants: [],
        },
      ],
    })

    const result = await postcss([plugin]).process(css, {
      // ビルド元のファイルなし
      from: undefined,

      // ビルド先のファイルなし
      to: undefined,

      // sourcemap なし
      map: false,
    })

    return new this(result)
  }

  get css() {
    return this.result.css
  }

  get classNames() {
    return Object.keys(this.parsedCss)
  }

  getStylesByClassName(className: string): string[] | undefined {
    return this.parsedCss[className]
  }

  getCssVariables() {
    const cssVariables = new Set<string>()

    /**
     * 独自に生成する CSS 変数は必ず --tailwind で始まるはず
     */
    this.result.root.walkDecls(/^--tailwind/u, (decl) => {
      cssVariables.add(decl.prop)
    })

    return Array.from(cssVariables)
  }

  getCssVariable(varName: `--${string}`) {
    const values: string[] = []

    this.result.root.walkDecls(/^--tailwind/u, (decl) => {
      if (decl.prop === varName) {
        values.push(decl.value)
      }
    })

    return values
  }
}
