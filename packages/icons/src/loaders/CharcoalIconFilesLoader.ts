import { PixivIconLoadError } from './PixivIconLoadError'
import { Loadable } from './Loadable'
import { KnownIconFile } from '../charcoalIconFiles'

/**
 * `@charcoal-ui/icon-files` に収録されているアイコンを取ってくる
 */
export class CharcoalIconFilesLoader implements Loadable {
  private _name: KnownIconFile
  private _resultSvg: string | undefined = undefined
  private _promise: Promise<string> | undefined = undefined

  constructor(name: KnownIconFile) {
    this._name = name
  }

  get importIconFile() {
    const [size, name] = this._name.split('/')

    return () =>
      import(`@charcoal-ui/icon-files/src/${size}/${name}.js`).then(
        (res: { default: string }) => res.default
      )
  }

  async fetch(): Promise<string> {
    if (this._resultSvg !== undefined) {
      return this._resultSvg
    }

    if (this._promise) {
      return this._promise
    }

    this._promise = this.importIconFile()
      .then((svg) => {
        this._resultSvg = svg
        return this._resultSvg
      })
      .catch((e) => {
        throw new PixivIconLoadError(this._name, e)
      })
      .finally(() => {
        this._promise = undefined
      })

    return this._promise
  }
}
