---
name: understanding-charcoal-packages
description: Use in the pixiv/charcoal repository before editing files under packages/theme/src/json, packages/theme/src/css, packages/icon-files, packages/icons/src/react, packages/icons/css, or any __snapshots__ directory, before changing a package's @charcoal-ui/* dependencies, and whenever pnpm test or typecheck reports unresolved @charcoal-ui/* imports. Tests read packages/*/dist, so pnpm build must run first, and several of those files are generated or overwritten by the Figma sync workflows.
metadata:
  internal: true
---

# charcoal packages, from the inside

pnpm monorepo, 12 packages under `packages/`, all published in lockstep by lerna. This is the build-and-generate view; what each package means to consumers is in `skills/avoiding-deprecated-charcoal-apis/references/packages.md`.

## Dependency graph (workspace `@charcoal-ui/*` only)

```
foundation
└─ utils
   └─ theme ──────────────┐
icon-files                │
└─ icons                  │
   └─ react ◀─(dev) theme │
tailwind-config ◀─ foundation, utils, theme, icon-files
styled ◀─ foundation, utils, theme   (peer + dev: @charcoal-ui/react)
react-sandbox ◀─ foundation, utils, theme, react, styled
icons-cli, token-cli, tailwind-diff: standalone CLIs
```

## Build before test

`dist/` is gitignored and several test paths read it, not `src/`:

- `vitest.setup.ts` → `.storybook/preview` → `.storybook/theme-decorator.tsx` imports `packages/react/dist/index.css`
- `tailwind-config/src/tokenV2.ts` imports `@charcoal-ui/theme/tokens/css-variables.json` → `theme/dist/tokens/`, written by theme's build
- `.storybook/tailwind.config.mjs` resolves `@charcoal-ui/theme` and `@charcoal-ui/tailwind-config` through their `dist`

So after a fresh clone or a change in an upstream package: `pnpm build` (`pnpm -r --sort`, dependency order) and then `pnpm test`. Dozens of test files failing on unresolved `@charcoal-ui/*` imports means a missing build, not broken code. After one full `pnpm build`, rebuild a changed package and its dependencies with `pnpm --filter @charcoal-ui/<name>... build`. That alone is not enough on a fresh clone: most packages' tests load the root `vitest.setup.ts`, which needs `packages/react/dist/index.css`.

## Generated files — edit the source, not the output

| Output                                                                                         | Source                                                                             | Regenerate                                                                                                                                       |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `theme/src/json/{base,pixiv-light,pixiv-dark}.json`                                            | Figma Variables                                                                    | `tokens.yml` workflow (token-cli). It deletes `src/json/*.json` first — add the variable in Figma too, or the next sync drops a hand-added token |
| `theme/src/css/v2/{light,dark}.css`                                                            | token-cli output, then **hand-edited** (`.ch-token-v2` selectors, `.ch-text-dn-*`) | Edit by hand. `tokens.yml` still copies CSS to the old `src/unstable-css/` path, so it does not update these                                     |
| `theme/dist/tokens/*.json`, `theme/theme.json` (committed)                                     | `theme/src/json/*`, `theme/src/default.ts`                                         | theme build (`tsdown` `onSuccess` → `cli/token-object.ts`, `cli/theme-json.ts`)                                                                  |
| `icon-files/svg/`, `icon-files/v2/svg/`, `icon-files/src/`, `icon-files/v2/src/`, `*/datauri/` | Figma                                                                              | `icons.yml` workflow (`icons-cli figma:export`, `svg:optimize`, `files:generate`, `build:uri*`)                                                  |
| `icons/src/react/v1,v2/`, `icons/css/v1,v2/`                                                   | `icon-files` SVGs                                                                  | `pnpm --filter @charcoal-ui/icons-cli build:react`, `build:css` (and `-v1` variants)                                                             |
| `**/__snapshots__/*.snap`, `.storybook/__snapshots__/*`                                        | the code under test                                                                | `pnpm exec vitest run -u <path>`, then check the diff contains only your change                                                                  |

A new token therefore touches `theme/src/json/pixiv-{light,dark}.json` **and** `theme/src/css/v2/{light,dark}.css` (`token-object.test.ts` checks every JSON key has a CSS variable), then snapshots in `theme` and `tailwind-config`.

## Docs and tests

- Docs: Storybook — `.storybook/src/*.mdx` (styling guide, per-major migration pages `vN.0.0.mdx`) and `*.mdx` / `*.story.tsx` next to the code. `pages/` is the older docsify site; it gets occasional updates, but parts predate v4 — prefer Storybook as the source of truth.
- Tests: `pnpm test` (unit, excludes `*.browser.test.*`), `pnpm test:browser` (Playwright Chromium), `pnpm test:image-snapshot` and `pnpm test:a11y` (against a built Storybook).
- Agent skills: `skills/` ships to consumers; `.agents/skills/` is for working on this repo.
