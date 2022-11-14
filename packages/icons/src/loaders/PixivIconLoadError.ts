export class PixivIconLoadError extends Error {
  constructor(name: string) {
    super(`Failed to fetch <pixiv-icon name="${name}">`)
    Object.setPrototypeOf(this, new.target)
  }
}
