---
name: avoiding-deprecated-charcoal-apis
description: Use before writing or editing any code that imports @charcoal-ui (components, icons, styled-components themes, or Tailwind classes from the charcoal preset), and before adding an @charcoal-ui package to package.json. Several APIs look current but are deprecated with no runtime warning: all of @charcoal-ui/react-sandbox (Layout, LeftMenu, MenuListItem, Pager…), @charcoal-ui/styled in a project not already on styled-components, @charcoal-ui/tailwind-diff, Icon unsafeNonGuidelineScale / pixiv-icon unsafe-non-guideline-scale, createTheme, Tailwind black/white, and ClickableElement.
---

# Avoiding deprecated charcoal APIs

Nothing in charcoal warns at runtime when you use a deprecated API. Some APIs are tagged `@deprecated` in source, but most of `@charcoal-ui/react-sandbox` — notably `Layout`, `LeftMenu`, `MenuListItem` — carries no tag at all; its deprecation is stated only in the Storybook migration pages. Agents also write the tagged ones from memory. This skill is the list.

For what each of the 12 `@charcoal-ui/*` packages is for, see `references/packages.md`.

## Deprecated or frozen packages

**`@charcoal-ui/react-sandbox` is deprecated since v6; removal is being considered for the next major.** Its README still only says "試験的" (experimental) — that is not the current status. Do not add new imports from it, even when `@charcoal-ui/react` has no equivalent, lacks a sandbox prop, or the request says to "use as much charcoal as possible".

- `Pager`, `LinkPager` → `Pagination` from `@charcoal-ui/react` (`makeUrl` → links, `onChange` → buttons)
- `HintText`, `TextEllipsis` → same names from `@charcoal-ui/react`
- `useMedia` → `useMedia` from `@charcoal-ui/react` (returns `undefined` until mounted; sandbox's returned `boolean` synchronously)
- `Carousel` → `Carousel` from `@charcoal-ui/react`. `scrollAmountCoef` → `scrollStep`; `fadeInGradient`, `buttonOffset`, `buttonPadding`, `bottomOffset`, `centerItems` were removed on purpose
- `SwitchCheckbox` → `Switch` from `@charcoal-ui/react` (`onChange` receives `boolean`, not an event)
- `ComponentAbstraction`, `useComponentAbstraction`, `LinkProps` → the `component` prop on `@charcoal-ui/react` components
- Everything else — `*Layout*`, `LeftMenu*`, `MenuList*`, `Filter*`, `WithIcon`, `useElementSize`, `useMediaScreen1`, layout constants → **no replacement**. Build it in the app with plain markup, charcoal tokens (CSS variables or Tailwind), and `@charcoal-ui/react` parts such as `Switch`, `Clickable`, `Icon`

"No replacement" means app code, not sandbox. A hand-rolled `<nav>` with tokens is the intended outcome, not a failure to reuse charcoal.

**`@charcoal-ui/styled` is frozen at Design Token 1.0** (not formally deprecated; only `createTheme` is). Do not adopt it unless the codebase is already built on styled-components — then follow the `setting-up-charcoal-styled` skill. Existing use is fine; do not tell the user to remove it.

**`@charcoal-ui/tailwind-diff` is scheduled for discontinuation (廃止予定).** Do not add it.

## Deprecated APIs

- **`Icon` prop `unsafeNonGuidelineScale`** (`@charcoal-ui/react`) → `fixedSize={20}` — pixels, not a ratio.
- **`<pixiv-icon unsafe-non-guideline-scale>`** → `fixed-size="20"` plus `style="--charcoal-icon-size: 20px"`, with `@charcoal-ui/icons/css/icon.css` loaded, so the pre-upgrade box is already 20px.
- **`createTheme` / `theme(o => [...])`** (`@charcoal-ui/styled`) → styled-components theming, `${({ theme }) => theme.color.text1}`. Do this even when surrounding files use `createTheme`: matching an existing deprecated pattern adds migration work. `theme.utils` (`addThemeUtils`) exists only if the `ThemeProvider` was given `addThemeUtils(light)` — see `setting-up-charcoal-styled`.
- **Tailwind `black` / `white`** (`bg-black`, `text-white`, `bg-black/50`, …) → a semantic token for the role. Token 1.0 preset (the default): `bg-surface4` (32% black) / `bg-surface8` (88% black), `text-text5` — dark in both themes. Token 2.0 (only with `unstableTokenV2` and `.ch-token-v2`; see `setting-up-charcoal-tailwind`): `bg-background-overlay` or `bg-container-on-img` + `text-text-on-on-img` stay dark-with-light-text in both themes. `bg-container-hud` + `text-text-on-hud` is an _inverted_ surface — it turns light in the dark theme, so it is not a substitute for black.
- **`ClickableElement` type** (`@charcoal-ui/react`) → the element you actually render: `HTMLButtonElement`, or `HTMLAnchorElement` with `component="a"`.

## Detecting them

Run from the app root. Remove hits that come from code you are introducing. Pre-existing hits are migration backlog, not part of your change — in particular, a styled-components codebase keeps its existing `@charcoal-ui/styled` imports and `createTheme` helper (see above).

```bash
rg -n "['\"]@charcoal-ui/react-sandbox"
rg -n "@charcoal-ui/tailwind-diff|\btailwind-diff\b"
rg -n "['\"]@charcoal-ui/styled"
rg -nU "createTheme\s*<|createTheme\(\s*(styled\s*)?\)|\btheme\(\s*\(?\s*\w+\s*\)?\s*=>"
rg -nU "import\s*\{[^}]*\bcreateTheme\b[^}]*\}\s*from\s*['\"]@charcoal-ui/styled"
rg -n "unsafeNonGuidelineScale|unsafe-non-guideline-scale"
rg -n "(^|[\s\"'\`:!])(bg|text|border(-[tblrxyse])?|divide|ring(-offset)?|outline|fill|stroke|from|via|to|shadow|accent|caret|decoration|placeholder)-(black|white)\b"
rg -n "\bClickableElement\b"
```

## Red flags

- "react has no layout / menu component, so sandbox is the charcoal option" → sandbox is deprecated; build it in the app.
- "the react version lacks a prop the sandbox one has" → the prop was dropped on purpose; use the react version.
- "sandbox is just experimental, breaking changes are acceptable" → it is deprecated, not experimental.
- "the existing files use `createTheme`, so I'll match them" → new code uses styled-components theming.
- "guideline-external icon sizes use the `unsafe-` attribute" → that was the old API; use `fixed-size`.
