import { exec } from 'child_process'
import { escape } from 'querystring'

/**
 * FIXME: util.promisify を使うと node-libs-browser に入っている方が使われてしまい、壊れる
 */
export const execp = (command: string) =>
  new Promise<string>((resolve, reject) => {
    exec(command, (err, stdout) => {
      if (err) {
        return reject(err)
      }

      return resolve(stdout)
    })
  })

export function mustBeDefined<T>(
  value: T,
  name: string,
): asserts value is NonNullable<T> {
  if (typeof value === 'undefined') {
    throw new TypeError(`${name} must be defined.`)
  }
}

/**
 * escapeだけでは ( ) が残るので、それも追加でエスケープする
 * @param svg SVG string
 * @returns SVG string encoded as data URI
 */
export function encodeSvgAsDataUri(svg: string): string {
  return escape(svg).replaceAll('(', '%28').replaceAll(')', '%29')
}
