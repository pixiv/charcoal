// for avoid ESM convert https://github.com/evanw/esbuild/issues/17
import * as pQueueForType from 'p-queue'
type RequirePQueueType = { default: typeof pQueueForType.default }
// eslint-disable-next-line @typescript-eslint/no-var-requires
const PQueue = (require('p-queue') as RequirePQueueType).default

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function concurrently(tasks: (() => Promise<any>)[]) {
  const queue = new PQueue({ concurrency: 3 })
  for (const task of tasks) {
    void queue.add(task)
  }
  queue.start()
  return queue.onIdle()
}
