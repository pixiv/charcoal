export class PixivIconLoadError extends Error {
  constructor(name: string, cause: unknown) {
    let message = `Failed to fetch <pixiv-icon name="${name}">`
    if (cause instanceof Error) {
      message += `: ${cause.toString()})`
    } else if (cause != null) {
      message += `: ${JSON.stringify(cause)})`
    }

    super(message, { cause })
    Object.setPrototypeOf(this, new.target)
  }
}
