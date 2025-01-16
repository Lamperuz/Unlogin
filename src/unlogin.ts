const events: string[] = ['mousemove', 'mousedown', 'resize', 'keydown', 'touchstart', 'wheel']

let timer: any

const reset = (delay: number, cb: () => void) => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    cb()
  }, delay)
}

const initIdle = (delay: number = 60000, cb: () => void) => {
  if (window) {
    const document = window.document
    const listenerOptions = { passive: true }

    for (const event of events) {
      window.addEventListener(
          event,
          () => {
            reset(delay, cb)
          },
          listenerOptions
      )
    }
  }
}


export default {
  initIdle
}