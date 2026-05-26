const processed = new WeakSet<object>()

const REACT_ARIA_ID_PATTERN = /react-aria-:[^"'`\s<>]+/gu

function isElement(value: unknown): value is HTMLElement {
  return typeof HTMLElement !== 'undefined' && value instanceof HTMLElement
}

function isTestingLibraryContainer(value: unknown): value is HTMLElement {
  return (
    isElement(value) &&
    !processed.has(value) &&
    value.parentElement === document.body &&
    value.tagName === 'DIV' &&
    (value.innerHTML.includes('react-aria-:') || hasModalPortal(value))
  )
}

function hasModalPortal(source: HTMLElement) {
  return Array.from(document.body.children).some((child) => {
    return (
      child !== source &&
      !source.contains(child) &&
      child.classList.contains('charcoal-modal-background')
    )
  })
}

function normalizeReactAriaIds(root: HTMLElement) {
  const elements = [root, ...Array.from(root.querySelectorAll('*'))]

  for (const element of elements) {
    for (const attr of Array.from(element.attributes)) {
      if (REACT_ARIA_ID_PATTERN.test(attr.value)) {
        element.setAttribute(
          attr.name,
          attr.value.replace(REACT_ARIA_ID_PATTERN, 'test-id'),
        )
      }
      REACT_ARIA_ID_PATTERN.lastIndex = 0
    }
  }
}

function appendPortalContent(source: HTMLElement, target: HTMLElement) {
  const portalNodes = Array.from(document.body.children).filter((child) => {
    return (
      child !== source &&
      !source.contains(child) &&
      child.classList.contains('charcoal-modal-background')
    )
  })

  if (portalNodes.length === 0) {
    return
  }

  const overlayContainer =
    target.querySelector('[data-overlay-container="true"]') ?? target

  target.removeAttribute('aria-hidden')

  for (const child of Array.from(overlayContainer.children)) {
    if (child.classList.contains('charcoal-modal-background')) {
      break
    }
    child.setAttribute('aria-hidden', 'true')
  }

  for (const portalNode of portalNodes) {
    overlayContainer.appendChild(portalNode.cloneNode(true))
  }
}

export default {
  test: isTestingLibraryContainer,
  serialize(
    value: HTMLElement,
    config: unknown,
    indentation: string,
    depth: number,
    refs: unknown[],
    printer: (
      value: unknown,
      config: unknown,
      indentation: string,
      depth: number,
      refs: unknown[],
    ) => string,
  ) {
    const clone = value.cloneNode(true) as HTMLElement

    processed.add(clone)
    appendPortalContent(value, clone)
    normalizeReactAriaIds(clone)

    try {
      return printer(clone, config, indentation, depth, refs)
    } finally {
      processed.delete(clone)
    }
  },
}
