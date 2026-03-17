import autoprefixer from 'autoprefixer'
import postcssNested from 'postcss-nested'

export default {
  plugins: [postcssNested(), autoprefixer()],
}
