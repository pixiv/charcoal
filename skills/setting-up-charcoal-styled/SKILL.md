---
name: setting-up-charcoal-styled
description: Use when an app already uses styled-components and needs pixiv's charcoal (@charcoal-ui) tokens, when working with @charcoal-ui/styled, TokenInjector, createTheme, or addThemeUtils, or when deciding whether to keep styled-components with charcoal.
---

# Setting up charcoal with styled-components

`@charcoal-ui/styled` exists for codebases already written in styled-components. Read the next section before wiring it in.

## Choose this only for existing code

`@charcoal-ui/styled` is **frozen at Design Token 1.0**. Its source contains no reference to Token 2.0, and it receives only maintenance commits while `@charcoal-ui/tailwind-config` keeps gaining v2 features.

The package is not formally deprecated — only `createTheme` carries `@deprecated`. The problem is not that it is forbidden; it is that it cannot reach the current token generation.

It also drags in the component library: `@charcoal-ui/styled` peer-depends on `@charcoal-ui/react`, because `useTheme`, `useThemeSetter`, `themeSelector`, and `SetThemeScript` are re-exports whose implementations live there. You get that dependency even if you never render a charcoal component.

For a new project, or when you only want tokens, use setting-up-charcoal-css-variables instead.

## Install

```bash
npm install @charcoal-ui/styled@^6 @charcoal-ui/theme@^6 @charcoal-ui/react@^6
```

Pin the major and keep every `@charcoal-ui/*` package on the same one. `styled-components >=5.1.1` and `react >=17.0.0` are peers.

## Provider

Two independent mechanisms, both usually needed:

- `ThemeProvider` (styled-components) supplies the **JS theme object** so `${({ theme }) => theme.color.text1}` resolves. The values are literal hex strings, not `var()`.
- `TokenInjector` (`@charcoal-ui/styled`) emits `--charcoal-color-*` **CSS variables** at runtime via `createGlobalStyle`, for anything not going through styled-components.

```tsx
import { ThemeProvider } from 'styled-components'
import {
  TokenInjector,
  addThemeUtils,
  useTheme,
  useThemeSetter,
  themeSelector,
} from '@charcoal-ui/styled'
import { light, dark } from '@charcoal-ui/theme'

const lightTheme = addThemeUtils(light)
const darkTheme = addThemeUtils(dark)

export function ThemeRoot({ children }: { children: React.ReactNode }) {
  const [mode] = useTheme()
  useThemeSetter()

  return (
    <ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
      <TokenInjector
        theme={{ ':root': light, [themeSelector('dark')]: dark }}
        background="background1"
      />
      {children}
    </ThemeProvider>
  )
}
```

`TokenInjector`'s optional `background` prop takes any key of `theme.color` (`background1`, `background2`, `surface1`…) and paints it as the page background on each selector.

Because the JS objects hold literal colors, switching themes requires swapping `ThemeProvider`'s `theme` prop. Rewriting CSS variables alone does not change `${({ theme }) => …}` output. The two systems must be kept in sync — that is what `useTheme` plus `useThemeSetter` do here.

## Types

```ts
// styled.d.ts
import 'styled-components'
import type { CharcoalTheme } from '@charcoal-ui/theme'
import type { CharcoalThemeUtils } from '@charcoal-ui/styled'

declare module 'styled-components' {
  export interface DefaultTheme extends CharcoalTheme, CharcoalThemeUtils {}
}
```

## Writing components

Use styled-components' own theming. Do **not** use `createTheme` / `theme(o => [...])` — it is `@deprecated` for runtime performance ([PR #377](https://github.com/pixiv/charcoal/pull/377)).

```tsx
const Card = styled.div`
  background-color: ${({ theme }) => theme.color.background1};
  color: ${({ theme }) => theme.color.text1};
  border-radius: ${({ theme }) => theme.borderRadius[8]}px;
  ${({ theme }) => theme.utils.padding(16)}
  ${({ theme }) => theme.utils.typography(16)}
`
```

`addThemeUtils()` adds `theme.utils`: `margin*`, `padding*`, `gap`, `typography`, `focusVisibleFocusRingCss`, `assertiveRingCss`, `disabledCss`.

Constraints worth knowing before you hit them:

- `theme.utils.typography(size)` accepts only `12 | 14 | 16 | 20`. **32 is not supported** — expand it by hand. `theme.typography.size[n]` is `{ fontSize: number; lineHeight: number }` in px, keyed by `12 | 14 | 16 | 20 | 32`:

  ```tsx
  font-size: ${({ theme }) => theme.typography.size[32].fontSize}px;
  line-height: ${({ theme }) => theme.typography.size[32].lineHeight}px;
  ```

- `theme.utils.margin` / `padding` accept only the spacing scale (`0, 4, 8, 16, 24, 40, 64, 104, 168, 272, 440`) or `'auto'`. Arbitrary px values are rejected by the type.
- `theme.spacing` and `theme.typography` are identical in light and dark.

## Theme switching and SSR

```tsx
import { makeSetThemeScriptCode } from '@charcoal-ui/styled'

;<script dangerouslySetInnerHTML={{ __html: makeSetThemeScriptCode() }} />
```

Prefer `makeSetThemeScriptCode()` over `<SetThemeScript />`; the component's props type requires both `localStorageKey` and `rootAttribute`.

## Migrating off, in dependency order

You do not have to leave in one step.

1. **Drop `createTheme`.** The only `@deprecated` API here. Move to plain `${({ theme }) => theme.color.*}` or `addThemeUtils`.
2. **Drop `TokenInjector`.** Import `@charcoal-ui/theme/css/v2/{light,dark}.css` instead — static CSS supplies the same variables with no runtime `createGlobalStyle`. This is also the step that unlocks Design Token 2.0.
3. **Drop `ThemeProvider`.** Replace `theme.color.text1` reads with `var(--charcoal-color-text-default)`.
4. **Drop styled-components** if you want. By this point charcoal no longer cares.

If you only render `@charcoal-ui/react` components, steps 1–3 are already unnecessary — since v4 it does not depend on styled-components at all.

## Common mistakes

| Mistake                                         | Fix                                                                               |
| ----------------------------------------------- | --------------------------------------------------------------------------------- |
| Reaching for `createTheme` because docs show it | It is `@deprecated`. Use styled-components theming.                               |
| Expecting Design Token 2.0 here                 | Not supported. Move to CSS variables or Tailwind.                                 |
| Swapping CSS variables to change theme          | JS theme objects hold literal colors — swap `ThemeProvider`'s `theme` too.        |
| `theme.utils.typography(32)`                    | Type error. Expand `theme.typography.size[32]` manually.                          |
| Following `pages/` docs in the repo             | Last updated 2023-03-22, pre-v4. Its `@charcoal-ui/react` instructions are wrong. |
