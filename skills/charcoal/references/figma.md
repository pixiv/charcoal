# Figma MCP

Figma MCP は変数名と、しばしば **現在モードの resolved hex** を返す。hex は捨てる。

## Procedure

1. fill の **bound variable** を取る。resolved paint の hex は使わない
2. collection が Color Space / primitive なら `search` または `recommendedSemantic`
3. 変数名を `resolve` に渡す

   ```text
   node skills/charcoal/scripts/resolve.mjs resolve <variable-name>
   ```

4. 返ってきた CSS または Tailwind だけを書く
5. hover / press は `family`

```text
node skills/charcoal/scripts/resolve.mjs family <token>
```

collection 名（`Color Space`）や mode 名（`pixiv/light`）がクエリに混ざってもよい。スクリプトがトークン名だけ取る。
