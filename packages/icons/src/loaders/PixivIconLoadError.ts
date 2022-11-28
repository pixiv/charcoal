export class PixivIconLoadError extends Error {
  constructor(name: string, cause: unknown) {
    const message = formatMessage(name, cause)

    super(message, { cause })
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
