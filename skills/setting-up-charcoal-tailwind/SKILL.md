---
name: setting-up-charcoal-tailwind
description: Use when adding pixiv's charcoal (@charcoal-ui) design tokens to a Tailwind CSS project, when charcoal Tailwind classes are missing or resolve to the wrong generation of tokens, or when Tailwind's own color and spacing utilities stop working after adding the charcoal preset.
---

# Setting up charcoal with Tailwind

`@charcoal-ui/tailwind-config` turns charcoal tokens into a Tailwind preset. This is the actively developed utility route — new Design Token 2.0 features land here first.

## Install

```bash
npm install --save-dev @charcoal-ui/tailwind-config @charcoal-ui/theme
```

Peer dependencies: `tailwindcss >=1.4.6`, `postcss >=7.0.32`, `csstype >=3.0.0`. Tailwind v4 support is WIP — v4 works only by pointing `@config` at a v3-shaped config.

## Configure

```js
// tailwind.config.js
const { light, dark } = require('@charcoal-ui/theme')
const { createTailwindConfig } = require('@charcoal-ui/tailwind-config')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  presets: [
    createTailwindConfig({
      version: 'v3',
      theme: {
        ':root': light,
        '@media (prefers-color-scheme: dark)': dark,
      },
      unstableTokenV2: true, // Design Token 2.0 — omit and you get 1.0
      iconsV2: true,
    }),
  ],
}
```

`createTailwindConfig()` options: `version` (`'v1' | 'v2' | 'v3'`, Tailwind's version — unrelated to charcoal's), `theme`, `cssVariablesV1`, `unstableTokenV2`, `iconsV1`, `iconsV2`. A bare default preset is also exported as `config`.

## `unstableTokenV2: true` needs the theme CSS too

The preset does **not** define Design Token 2.0 variables. `unstable_createTailwindConfigTokenV2()` contains no plugin and no `addBase()` — it only emits class values that _reference_ `var(--charcoal-color-*)`. Something else has to define them.

Two disjoint namespaces are in play:

| Defined by                                        | Names                         | Example                                      |
| ------------------------------------------------- | ----------------------------- | -------------------------------------------- |
| The preset, when `cssVariablesV1` is on (default) | `--charcoal-<v1 token>`       | `--charcoal-background1`, `--charcoal-text1` |
| `@charcoal-ui/theme/css/v2/*.css`                 | `--charcoal-color-<v2 token>` | `--charcoal-color-container-default`         |

`customPropertyToken()` produces `--charcoal-${id}`, so the v1 variables never satisfy a v2 reference. Turning on `unstableTokenV2` without loading the theme CSS gives you classes that resolve to nothing — colors silently disappear.

So with `unstableTokenV2: true`, do all three:

```css
/* globals.css */
@import '@charcoal-ui/theme/css/v2/light.css';
@import '@charcoal-ui/theme/css/v2/dark.css';

@tailwind base;
@tailwind components;
@tailwind utilities;
```

```html
<html lang="ja" class="ch-token-v2">
  <body>
    <div id="root"></div>
  </body>
</html>
```

`.ch-token-v2` gates the light-theme rules in `light.css`. Without it, no light rule matches and every v2 variable is undefined — the same failure described in setting-up-charcoal-css-variables.

If you stay on Design Token 1.0 (`unstableTokenV2` omitted), the preset's own `addBase()` supplies everything and the three `@tailwind` lines are all you need.

## The preset replaces Tailwind's defaults

`createTailwindConfig()` writes `colors`, `spacing`, `width`, `gap`, `borderRadius`, `screens`, and `transitionDuration` at the **top level of `theme`**, not under `extend`. Tailwind's preset merge therefore _replaces_ the stock scales:

- `bg-red-500`, `text-blue-600` and the rest of the default palette stop existing. Only `transparent`, `current`, `black`, `white`, and charcoal tokens remain.
- `p-4` no longer means 1rem. Spacing keys are charcoal's px values: `0, 4, 8, 16, 24, 40, 64, 104, 168, 272, 440` — so `p-16` is 16px.
- `corePlugins: { lineHeight: false }` disables every `leading-*` utility.

If existing markup relies on stock Tailwind classes, add them back explicitly:

```js
const colors = require('tailwindcss/colors')
module.exports = {
  presets: [createTailwindConfig({/* … */})],
  theme: { extend: { colors: { red: colors.red } } },
}
```

## Classes you get

```tsx
<div className="bg-background1 text-text1 rounded-8 p-16">
  <h2 className="typography-20">タイトル</h2>
  <button className="ch-focus-ring bg-brand hover:bg-brand-hover active:bg-brand-press">
    送信
  </button>
</div>
```

- Colors carry `DEFAULT` / `hover` / `press` / `disabled` variants — `bg-brand`, `bg-brand-hover`, …
- `typography-{12|14|16|20|32}` sets font-size and line-height together.
- `.ch-focus-ring` reproduces the focus ring used by `@charcoal-ui/react`.
- `w-col-span-{n}` and `w-{n}/12` come from the grid system.

Those names are Design Token 1.0. They keep working when `unstableTokenV2` is on, because the preset merges v2 entries on top of v1 rather than replacing them.

Design Token 2.0 adds five color groups — `background`, `border`, `container`, `icon`, `text` — folded so that a `default` key becomes the bare class:

```
color.container.default      → bg-container
color.container.hover        → bg-container-hover
color.text.default           → text-text
color.text.info.default      → text-text-info
color.text.negative.hover    → text-text-negative-hover
color.background.secondary   → bg-background-secondary
```

Spacing splits into `component-*` and `layout-*` (`p-component-20`, `gap-layout-40`), radius becomes `rounded-{xs|s|m|l|xl|xxl|oval}`, and border colors take a `ch` prefix (`border-ch-secondary`).

To see exactly what your config produces, resolve it rather than guessing:

```js
console.log(
  require('tailwindcss/resolveConfig')(require('./tailwind.config.js')).theme
    .colors,
)
```

## Dark theme

Tailwind's `dark:` variant is **not supported**. A charcoal token keeps its name across themes while its value changes, so `dark:bg-background1` is meaningless. Pass a theme map instead and the generated `var()` switches for you.

```js
// follow the OS
theme: { ':root': light, '@media (prefers-color-scheme: dark)': dark }

// or switch from JS
theme: { ':root': light, 'html[data-theme="dark"]': dark }
```

```js
document.documentElement.dataset.theme = 'dark'
```

Do not nest `:root` under the `@media` key — the build inserts it for you.

**The `theme` map only drives Design Token 1.0.** It feeds `cssVariablesV1`, which defines `--charcoal-<v1 token>`. Token 2.0 variables come from `@charcoal-ui/theme/css/v2/*.css`, and that CSS defines dark only at `:root[data-theme='dark']` — it has no `prefers-color-scheme` block. So on `unstableTokenV2: true`, `'@media (prefers-color-scheme: dark)': dark` does **not** make v2 tokens follow the OS.

Either write `data-theme` explicitly from JS, or add the bridge described in setting-up-charcoal-css-variables:

```css
@media (prefers-color-scheme: dark) {
  :root:not([data-theme='light']).ch-token-v2,
  :root:not([data-theme='light']) .ch-token-v2 {
    /* copy the declarations from @charcoal-ui/theme/css/v2/dark.css */
  }
}
```

## Common mistakes

| Mistake                                                       | Fix                                                                                                                        |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `unstableTokenV2` omitted                                     | You silently get Design Token 1.0. Set it to `true`.                                                                       |
| `unstableTokenV2: true` but no theme CSS                      | The preset never defines `--charcoal-color-*`. Import `@charcoal-ui/theme/css/v2/{light,dark}.css` and add `.ch-token-v2`. |
| Assuming `.ch-token-v2` is a CSS-variables-route-only concern | It gates the v2 variables themselves, so the Tailwind v2 route needs it too.                                               |
| Confusing `version: 'v3'` with charcoal v3                    | It means Tailwind v3.                                                                                                      |
| `dark:bg-*`                                                   | Unsupported. Use the `theme` map.                                                                                          |
| Stock Tailwind classes vanished                               | The preset replaces the default scales — add them back under `theme.extend`.                                               |
| `leading-*` has no effect                                     | `corePlugins.lineHeight` is off. Use `typography-*`.                                                                       |
| Nesting `':root'` inside the `@media` key                     | Pass the theme object directly.                                                                                            |

## Using charcoal React components too

`@charcoal-ui/react` is independent of this preset. It needs its own CSS and the `.ch-token-v2` opt-in — see setting-up-charcoal-css-variables. Set `corePlugins: { preflight: false }` if Tailwind's reset interferes with charcoal component styles.
