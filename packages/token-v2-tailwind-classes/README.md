# `@charcoal-ui/token-v2-tailwind-classes`

Charcoal token v2 と Figma MCP 向け推奨 Tailwind class の対応表を出力します。

```sh
charcoal-token-v2-classes --format json
charcoal-token-v2-classes --format markdown --category color
charcoal-token-v2-classes --format table --utility backgroundColor
charcoal-token-v2-classes --token color.container.primary.default --include-css-variable
```

`--category`、`--utility`、`--token` は複数回指定できます。値を含む出力が必要な場合は `--include-theme-value`、CSS variable 名が必要な場合は `--include-css-variable` を指定します。

JSON出力のschemaは [`schema.json`](./schema.json) です。初期段階では独立した長期安定仕様ではなく、このパッケージのversionとsnapshot testで変更を管理します。
