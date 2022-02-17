# `@pixiv-elements/tailwind-config`

Provides tailwind.css config based on PIXIV Design System.

## Usage

When you just use default config,

```js:tailwind.config.js
module.exports = require('@pixiv-elements/tailwind-config').default;
```

or if you prefer

```js:tailwind.config.js
const { createTailwindConfig } = require('@pixiv-elements/tailwind-config')

// pass color theme
module.exports = createTailwindConfig({ theme: yourColorTheme });

// or merge with your tailored config (using something like lodash/merge)
module.exports = merge(createTailwindConfig({ theme: yourColorTheme }), yourConfig);
```
