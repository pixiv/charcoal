# `@charcoal-ui/token-v2-tailwind-classes`

Charcoal token v2 と Figma MCP 向け推奨 Tailwind class の対応表を出力します。

```sh
charcoal-token-v2-classes --format json
charcoal-token-v2-classes --format markdown --category color
charcoal-token-v2-classes --format table --utility backgroundColor
charcoal-token-v2-classes --token color.container.primary.default --include-css-variable
charcoal-token-v2-classes --token text/secondary/default
```

`--category`、`--utility`、`--token` は複数回指定できます。`--token` は canonical token path（`color.text.default`）、collection を含む Figma path（`color/text/default`）、collection を省いた Figma variable 名（`text/default`）を指定できます。bare な Figma variable 名が複数の collection に一致する場合は、collection を含む path を指定してください。値を含む出力が必要な場合は `--include-theme-value`、CSS variable 名が必要な場合は `--include-css-variable` を指定します。

JSON出力のschemaは [`schema.json`](./schema.json) です。初期段階では独立した長期安定仕様ではなく、このパッケージのversionとsnapshot testで変更を管理します。
