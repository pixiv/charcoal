import { setProjectAnnotations } from '@storybook/react'

import * as projectAnnotations from './preview'

setProjectAnnotations(projectAnnotations)

globalThis.location = {
  ...globalThis.location,
  search: '',
}
window.location = {
  ...window.location,
  search: '',
}

global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe() {
    return null
  },
  disconnect() {
    return null
  },
}))

global.matchMedia = jest.fn().mockImplementation(() => ({
  matches: true,
  media: '(max-width: 600px)',
  addEventListener() {
    // Do Nothing
  },
  removeEventListener() {
    // Do Nothing
  },
}))
