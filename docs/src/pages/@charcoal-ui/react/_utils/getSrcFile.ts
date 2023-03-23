import { readFileSync } from 'fs'
import { cwd } from 'process'

export function getSrcFile(filepath: string) {
  const path = cwd() + `/src/pages/@charcoal-ui/react/${filepath}`
  const src = readFileSync(path).toString()
  return src
}
