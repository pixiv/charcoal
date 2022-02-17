# `@pixiv-elements/icons`

Icon library for PIXIV products, written as a [custom element](https://developer.mozilla.org/ja/docs/Web/Web_Components/Using_custom_elements).

### Install

```
$ yarn add @pixiv-elements/icons
```

### How to use

Import once in the entrypoint of your project. For Storybook, `preview.(js|ts)` would be the place.

```ts
import '@pixiv-elements/icons'
```

Then you can write `<pixiv-icon>` tag in your markup.
TypeScript types are globally installed once you `import`ed ( So you can use `<pixiv-icon>` in your `.tsx` file! ).

### Attributes

```html
<pixiv-icon name="16/Add" scale="1"></pixiv-icon>
```

| Attribute | Type                 | Description                                                                                              |
| --------- | -------------------- | -------------------------------------------------------------------------------------------------------- |
| **name**  | String               | The name of icon. Formatted as `${size}/${filename}`. You can see the full list in `packages/icons/svg`. |
| **scale** | Number `1 or 2 or 3` | Ratio for scaling icon. Only supported for the icons named `24/〇〇`.                                    |

### Register your own icons

You can add your own .svg file as a variant of `<pixiv-icon name="...">`.

You need to name the new icon like `${size}/${name}`.

And if you like to use `<pixiv-icon>` in TypeScript environment, you need to extend `KnownIconType` in your d.ts!

```ts
import PixivIcon from '@pixiv-elements/icons'
import NewFeature from './NewFeature.svg'

PixivIcon.extend({
  '16/NewFeature': require('./icons/16/NewFeature.svg'),
  '24/NewFeature': 'https://example.com/hoge.svg',
  '32/NewFeature': NewFeature,
})

declare module '@pixiv-elements/icons' {
  export interface KnownIconType {
    '16/NewFeature': unknown
    '24/NewFeature': unknown
    '32/NewFeature': unknown
  }
}
```

### Using with React

Normally, custom element **does not accept `className` props by default**.

https://ja.reactjs.org/docs/web-components.html#using-web-components-in-react

If you like to pass `className` (e.g. you are using `styled-components`), you need to create a wrapper component to forward `className`.

```tsx
import { Props as IconProps } from '@pixiv-elements/icons'

interface Props extends Omit<IconProps, 'class'> {
  className?: string
}

export const Icon: React.FC<Props> = ({ className, ...props }) => (
  <pixiv-icon class={className} {...props} />
)
```
