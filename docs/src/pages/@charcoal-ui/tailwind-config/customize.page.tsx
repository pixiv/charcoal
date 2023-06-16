import { ContentRoot } from "../../../components/ContentRoot";
import { InlineCode } from "../../../components/InlineCode";
import { SSRHighlight } from "../../../components/SSRHighlight";
import { Table } from "../../../components/Table";
import { dedent } from "../../../utils/string";

export default function CustomizeTailwindConfig() {
    return (<ContentRoot>
        <h1>カスタマイズする</h1>
        <p>
            <InlineCode>createTailwindConfig()</InlineCode> を利用することでお使いの環境、色などに適応させることができます。
        </p>

        <SSRHighlight code={dedent`
            const { light, dark } = require('@charcoal-ui/theme')
            const { createTailwindConfig } = require('@charcoal-ui/tailwind-config')
            
            /**
             * @type {import('tailwindcss/tailwind-config').TailwindConfig}
                */
            module.exports = {
                darkMode: false,
                content: ['./src/**/*.tsx', './src/**/*.html'],
                presets: [
                createTailwindConfig({
                    version: 'v3',
                    theme: {
                    ':root': light,
                    '@media (prefers-color-scheme: dark)': dark,
                    },
                }),
                ],
            }
        `} lang="javascript" />
        <p>
            <InlineCode>createTailwindConfig</InlineCode> には以下のオプションを渡すことができます。
        </p>
        <Table data={options} />

        <h2>ThemaMap について</h2>
        <p>
            charcoal は Tailwind.css の通常のダークモード（ <InlineCode>dark:〇〇</InlineCode> 系のクラス ）をサポートしません。<br />
            なぜなら charcoal における「色」は、同じ名前でも light テーマと dark テーマで違うカラーコードであり得るからです。<br />
            これを表現するために <InlineCode>@charcoal-ui/tailwind-config</InlineCode> では <InlineCode>theme</InlineCode> というオプションを受け取ります。<br />
        </p>
        <p>
            以下の例は <InlineCode>:root</InlineCode>（つまり通常ケース）では light テーマを、システムの設定がダークモードである場合は dark テーマを使用するものです。 <br />
        </p>
        <SSRHighlight code={dedent`
            createTailwindConfig({
                version: 'v3',
                theme: {
                    ':root': light,
                    '@media (prefers-color-scheme: dark)': dark,
                },
            })
            `} lang="javascript" />
        <p>
            <InlineCode>theme</InlineCode> オプションを設定する場合、ダークテーマ対応を行わないサービスであっても  <InlineCode>:root</InlineCode> に必ず自身のプロダクトのカラーテーマを渡す必要があります。
        </p>
        <p>
            <InlineCode>theme</InlineCode> をこのように書くと、 このような CSS Variables を生成します。
        </p>
        <SSRHighlight lang="css" code={dedent`
            /* 以下はイメージです */

            :root {
              --tailwind-color-background1: #fff;
              --tailwind-color-background2: #f5f5f5;
              /* ... */
            }
            
            @media (prefers-color-scheme: dark) {
              :root {
                --tailwind-color-background1: #1f1f1f;
                --tailwind-color-background2: #000000;
                /* ... */
              }
            }
        `} />
        <p>
            このとき、以下のように書く必要はありません。<br />
            キーが <InlineCode>@media</InlineCode> で始まる場合はビルド時に <InlineCode>:root</InlineCode> が補われます。
        </p>
        <SSRHighlight lang="javascript" code={dedent`
                {
                    theme: {
                        // これは間違い！！
                        '@media (prefers-color-scheme: dark)': {
                            ':root': dark
                        },
                
                        // 正しくはこう
                        '@media (prefers-color-scheme: dark)': dark
                    }
                }
            `} />
        <p>
            <InlineCode>theme</InlineCode> のキーとして通常のセレクタを指定することもできます。<br />
            これによりダークモードの切り替えがDOMの状態に依存するケースにも対応します。 <InlineCode>localStorage</InlineCode> などで JS での切り替えを実装しているアプリケーションはこのような手法が好ましいでしょう。
        </p>
        <SSRHighlight lang="javascript" code={dedent`
            createTailwindConfig({
                version: 'v3',
                theme: {
                    ':root': light,
                    'html[data-theme="dark"]': dark,
                },
            })
        `} />
        <SSRHighlight lang="css" code={dedent`
            /* 以下はイメージです */

            :root {
              --tailwind-color-background1: #fff;
              --tailwind-color-background2: #f5f5f5;
              /* ... */
            }
            
            html[data-theme='dark'] {
              --tailwind-color-background1: #1f1f1f;
              --tailwind-color-background2: #000000;
              /* ... */
            }
        `} />
    </ContentRoot>)
}
const options = {
    version: {
        type: 'v1 | v2 | v3',
        description: 'Tailwind.cssのバージョン系統を指定します。色のキー名に使われる DEFAULT と default などの違いを内部で吸収します。'
    },
    theme: {
        type: 'Record<string, Theme>',
        description: '条件ごとの色の値のマッピングを渡します。 :root は必須のキーです。'
    }
}