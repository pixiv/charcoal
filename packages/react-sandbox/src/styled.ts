import { createTheme } from '@charcoal-ui/styled'
import type { ThemeProp } from '@charcoal-ui/styled'
import type createO from '@charcoal-ui/styled/src/builders/o'
import type { ArrayOrSingle } from '@charcoal-ui/styled/src/util'
import type { CharcoalTheme } from '@charcoal-ui/theme'

type Builder = ReturnType<typeof createO<CharcoalTheme>>
// 内部的に使っているだけで外部には公開しないので dts コンパイルのために any にして型計算を省略
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SpecFn = (o: Builder) => ArrayOrSingle<any>

type Theme = (specFn: SpecFn) => ThemeProp<CharcoalTheme>

export const theme: Theme = createTheme<CharcoalTheme>()
