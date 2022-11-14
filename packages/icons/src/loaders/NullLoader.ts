import { PixivIconLoadError } from './PixivIconLoadError'
import { Loadable } from './Loadable'

/**
 * アイコンが登録されていない場合に利用する Loader
 *
 * つねにエラーを返す
 */
export class NullLoader implements Loadable {
  constructor(private name: string) {}

  // eslint-disable-next-line @typescript-eslint/require-await
  async fetch(): Promise<string> {
    throw new PixivIconLoadError(this.name)
  }

  isLoading() {
    return false
  }
}
