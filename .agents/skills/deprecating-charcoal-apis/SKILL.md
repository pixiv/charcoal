---
name: deprecating-charcoal-apis
description: Use in the pixiv/charcoal repository before adding an @deprecated tag, before deleting or renaming anything exported from packages/* (a component, prop, type, hook, CSS class, Tailwind utility, token, CLI command, package.json exports entry, or a whole package), and before writing a deprecation banner or migration note. charcoal has no runtime deprecation warnings; a deprecation that is not also added to skills/avoiding-deprecated-charcoal-apis never reaches users' coding agents.
metadata:
  internal: true
---

# Deprecating charcoal APIs

A deprecation only exists if consumers — and their coding agents — can see it. charcoal has no runtime deprecation warnings, so the signal is whatever you write in the places below. Past deprecations that were announced in one place only are still being used (see "Past gaps").

Change only what you are deprecating now. If you notice older gaps, list them in the PR description; do not fix them in the same change.

## Deprecating (minor release)

Do all that apply:

1. **`@deprecated` JSDoc naming the successor** on the exported symbol or prop: `@deprecated \`fixedSize\` を利用してください。`
   - If the prop is inherited from another package's type, redeclare it in the consuming package so the tag lands on the API consumers actually use, and `Omit` the inherited one.
   - CSS classes, Tailwind utilities, and tokens get no IDE signal from a comment — the consumer skill (step 3) is their only channel.
2. **Whole package:** a banner at the top of `packages/<name>/README.md` (this is the npm page). Also flag it in `pages/` if it describes the package.
3. **The consumer skill `avoiding-deprecated-charcoal-apis`** (`skills/avoiding-deprecated-charcoal-apis/`), which ships to users' agents through the plugin marketplace and `npx skills`:
   - add `deprecated → successor` under "Deprecated APIs" (or the package section)
   - add an `rg` line under "Detecting them", then **run it** against a file containing the deprecated usage and a file containing only the successor; it must hit the first and not the second
   - whole package: move its row into the "Deprecated or frozen" table in `references/packages.md`
   - if agents are likely to write the API from memory, add its name to the skill's `description` so the skill triggers
4. **PR title says it**, e.g. `feat(react): アイコンの scale を非推奨にし fixedSize へ誘導`, with the `minor` label (`enforce-semver.yml` requires one of major / minor / patch / beta). GitHub Release notes are the auto-generated "What's Changed" list of PR titles; nothing else announces a minor release. Start commit subjects with Japanese, not `Icon`: commitlint's `subject-case` (run on commit messages by the husky `commit-msg` hook) rejects a capitalised first word; use the same style for the PR title.
5. **Stop using it inside the repo** — `rg` the deprecated name across `packages/`, `.storybook/`, and `pages/`; stories and examples should show the successor. Tests that cover the old behaviour stay, with `(deprecated)` in their names.

Do **not** announce minor-release deprecations in Storybook docs, and never edit an already-released `.storybook/src/vN.0.0.mdx`.

## Removing (major release only)

1. Delete the export, then `rg` the name across `packages/`, `.storybook/`, `pages/`, and README files — remove or rewrite every example that still uses it.
2. Add it to that major's migration page `.storybook/src/vN.0.0.mdx` with the replacement. The page for an unreleased major may not exist yet — create it, following the structure of the latest one.
3. Remove it from the consumer skill (entry and `rg` line), or change the entry to "removed in vN → use X" if agents are likely to keep writing it from memory.
4. Only claim "removed" after confirming it is gone from every entry the package's `package.json` `exports` points to (subpaths such as `./css/*` and `./tokens/*` included), and for CSS classes / tokens, from the generated CSS.

## Past gaps (do not repeat)

| What happened                                                                                                                                    | Missing step               |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| `react-sandbox` deprecated only in `.storybook/src/v6.0.0.mdx`; README still says "試験的", almost no `@deprecated` tags. Agents still import it | 1, 2, 3                    |
| `tailwind-diff` "廃止予定" only in `.storybook/src/v5.0.0.mdx`                                                                                   | 2, 3                       |
| `v4.0.0.mdx` says `ClickableElement` was removed; it is still exported                                                                           | Removing 4                 |
| `packages/react/src/README.mdx` still shows `CharcoalProvider themeMap`, removed in v4                                                           | Removing 1                 |
| `packages/theme/cli/theme-json.ts` filters `deprecatedColor = ['callToAction']` from the wrong object, so it never applies                       | Verify the mechanism works |
