import '@testing-library/jest-dom/vitest'

// jsdom は Element.prototype.scrollTo を実装していない。
if (typeof Element.prototype.scrollTo !== 'function') {
  Element.prototype.scrollTo = function (
    this: Element,
    optionsOrX?: ScrollToOptions | number,
    y?: number,
  ) {
    if (typeof optionsOrX === 'object' && optionsOrX !== null) {
      if (optionsOrX.left !== undefined) this.scrollLeft = optionsOrX.left
      if (optionsOrX.top !== undefined) this.scrollTop = optionsOrX.top
    } else {
      if (optionsOrX !== undefined) this.scrollLeft = optionsOrX
      if (y !== undefined) this.scrollTop = y
    }
  }
}
