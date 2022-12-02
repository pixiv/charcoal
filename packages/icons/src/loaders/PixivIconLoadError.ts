export class PixivIconLoadError extends Error {
  constructor(name: string, cause: unknown) {
    const message = formatMessage(name, cause)

    // TODO: TypeScript 4.6+ になるとここに `{ cause }` が渡せる
    super(message)
    Object.setPrototypeOf(this, new.target)
  }
}

function formatMessage(name: string, cause: unknown) {
  const message = `Failed to fetch <pixiv-icon name="${name}">`
  if (cause == null) {
    return message
  }

  if (cause instanceof Error) {
    return `${message}: ${cause.toString()})`
  }

  return `${message}: ${JSON.stringify(cause)})`
}
