---
name: setting-up-charcoal-css-variables
description: Use when wiring pixiv's charcoal (@charcoal-ui) into an app with plain CSS, CSS Modules, vanilla-extract, or any stack that is not Tailwind or styled-components, and when charcoal components show no colors or --charcoal-color-* resolves to nothing.
---

# Setting up charcoal with CSS variables

The lowest-dependency way to use charcoal: load two stylesheets, add one class, then write `var(--charcoal-*)` anywhere.

## Install

```bash
npm install @charcoal-ui/react@^6 @charcoal-ui/theme@^6 react-aria react-stately
```

Pin the major. Design Token 2.0 and the CSS layout below are v6; v5 and earlier differ. Keep every `@charcoal-ui/*` package on the same major.

Peer dependencies of `@charcoal-ui/react`: `react >=17.0.0`, `react-aria >=3.48.0`, `react-stately >=3.46.0`. The two react-aria packages are **not** installed for you. React 18 and 19 both satisfy the range.

Skip `@charcoal-ui/react` if you only want tokens — `@charcoal-ui/theme` alone is enough.

## Load the CSS

```ts
// Load once at the app root.
import '@charcoal-ui/react/dist/index.css' // component implementation CSS
import '@charcoal-ui/theme/css/v2/light.css' // Design Token 2.0 — light
import '@charcoal-ui/theme/css/v2/dark.css' // Design Token 2.0 — dark
```

`dist/index.css` only _consumes_ `var(--charcoal-color-*)`. It never defines them.

The failure this causes is lopsided in a way that misleads people: **colors go through `var()`, but layout does not.** Padding, radius, font-size, and line-height are written as literal values, so they keep working. Load `dist/index.css` alone and you get a correctly shaped, correctly sized button with a transparent background and default black text. Nothing errors — an undefined custom property just makes that one declaration invalid, and the property falls back to its initial value.

If a charcoal component looks _structurally_ right but _colorless_, this is why.

Prefer `@charcoal-ui/react/dist/layered.css` over `dist/index.css` when you need to override charcoal styles from your own CSS. Its contents are wrapped in `@layer charcoal`, so any unlayered rule of yours wins without a specificity fight. It requires iOS 15.4+.

## Opt in to Design Token 2.0 — required

Token 2.0 only applies inside `.ch-token-v2`.

```html
<html class="ch-token-v2" lang="ja"></html>
```

The shipped selectors are:

```css
/* light.css */
:root.ch-token-v2[data-theme='light'],
:root.ch-token-v2:not([data-theme]),
:root[data-theme='light'] .ch-token-v2,
:root:not([data-theme]) .ch-token-v2 {
  --charcoal-color-…: …;
}

/* dark.css */
:root[data-theme='dark'] {
  --charcoal-color-…: …;
}
```

Two consequences:

- Without `.ch-token-v2`, **no light-theme rule matches** and every token is undefined.
- Dark is scoped to `:root` only, so `data-theme="dark"` applies page-wide regardless of `.ch-token-v2`.

Put the class on `<html>`, or on an ancestor of the components you want themed. Variables inherit, so siblings are unaffected.

## Use the tokens

```css
.card {
  background-color: var(--charcoal-color-background-default);
  color: var(--charcoal-color-text-default);
  border: 1px solid var(--charcoal-color-border-secondary);
  border-radius: var(--charcoal-radius-s);
  padding: var(--charcoal-space-40);
}
```

Names follow `--charcoal-<category>-<semantic>-<state>`. Common ones: `color-text-default` / `-secondary-default` / `-tertiary-default`, `color-background-default` / `-secondary` / `-tertiary`, `color-border-default` / `-secondary`, `color-container-primary-default`, `radius-xs|s|m|l`, `space-*`. Read `node_modules/@charcoal-ui/theme/dist/css/v2/light.css` for the full list.

## Components need no provider

```tsx
import { Button } from '@charcoal-ui/react'

export const Save = () => <Button variant="Primary">保存</Button>
```

`Button` imports its own CSS and uses no context. Wrap in `CharcoalProvider` **only** when you use overlays (`Modal`, `DropdownSelector`) — it supplies react-aria's `SSRProvider` and `OverlayProvider`.

## Theme switching

```tsx
document.documentElement.dataset.theme = 'dark' // or 'light'
```

For SSR, run this before paint to avoid a flash:

```tsx
import { makeSetThemeScriptCode } from '@charcoal-ui/react'

;<script dangerouslySetInnerHTML={{ __html: makeSetThemeScriptCode() }} />
```

Use `makeSetThemeScriptCode()`, not `<SetThemeScript />`. The component's props type requires both `localStorageKey` and `rootAttribute`, so `<SetThemeScript />` is a type error; `makeSetThemeScriptCode()` accepts zero arguments.

## System theme does not follow the OS

`useThemeSetter()` **removes** `data-theme` when the user is on "system", by design — it expects CSS to handle `prefers-color-scheme`. Design Token 2.0's CSS has no `prefers-color-scheme` block, so with the attribute removed `:root:not([data-theme]) .ch-token-v2` matches and the page is **stuck on light** even on a dark OS.

Either always write an explicit `data-theme`, or add the missing bridge yourself:

```css
@media (prefers-color-scheme: dark) {
  :root:not([data-theme='light']).ch-token-v2,
  :root:not([data-theme='light']) .ch-token-v2 {
    /* copy the declarations from @charcoal-ui/theme/css/v2/dark.css */
  }
}
```

Mirror light.css's selector shape. Targeting bare `:root` fails when `.ch-token-v2` sits on a descendant: that descendant's own light values beat inherited dark values from an ancestor.

## Common mistakes

| Mistake                            | Fix                                              |
| ---------------------------------- | ------------------------------------------------ |
| Only `dist/index.css` loaded       | Add `@charcoal-ui/theme/css/v2/{light,dark}.css` |
| `.ch-token-v2` missing             | Add it to `<html>` or an ancestor                |
| `<SetThemeScript />` with no props | Use `makeSetThemeScriptCode()`                   |
| Own CSS loses to charcoal's        | Switch to `dist/layered.css`                     |
| Dark mode ignored on "system"      | Add the `prefers-color-scheme` bridge above      |
