# charcoal

pixiv's design system: a pnpm monorepo of 12 `@charcoal-ui/*` packages under `packages/`, published together by lerna. Docs live in Storybook (`.storybook/`, `*.mdx`, `*.story.tsx`).

## Commands

```bash
pnpm install
pnpm build        # pnpm -r --sort; required before tests — they read packages/*/dist
pnpm test         # unit tests (vitest, excludes *.browser.test.*)
pnpm test:browser # Playwright Chromium
pnpm typecheck
pnpm lint         # eslint + prettier + stylelint
pnpm storybook
```

## Two kinds of agent skills

- `skills/` — shipped to charcoal **users** through the plugin marketplace (`.claude-plugin/`) and `npx skills`. Editing them changes what users' agents are told.
- `.agents/skills/` — for working **on this repository**. `.claude/skills` is a symlink to it, and this file is also `CLAUDE.md`.

| Skill                             | Read it when                                                                                                                                        |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `deprecating-charcoal-apis`       | Before adding `@deprecated`, or deleting / renaming anything exported from `packages/*`                                                             |
| `understanding-charcoal-packages` | Before editing theme JSON / CSS, icon files, or snapshots, changing `@charcoal-ui/*` dependencies, or when `@charcoal-ui/*` imports fail to resolve |
