var passiveEventsResult: boolean | undefined // eslint-disable-line no-var
export function passiveEvents(): boolean {
  if (passiveEventsResult !== undefined) {
    return passiveEventsResult
  }

  passiveEventsResult = false
  try {
    const options = Object.defineProperty({}, 'passive', {
      get() {
        return (passiveEventsResult = true)
      },
    })

    window.addEventListener('test', test, options)
    window.removeEventListener('test', test)
  } catch {
    // test fail
  }

  return passiveEventsResult

  function test() {
    /* empty */
  }
}

export const isEdge = () => navigator.userAgent.includes('Edge/')
