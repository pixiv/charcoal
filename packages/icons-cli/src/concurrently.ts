import PQueue from 'p-queue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function concurrently(tasks: (() => Promise<any>)[]) {
  const queue = new PQueue({ concurrency: 3 })
  for (const task of tasks) {
    void queue.add(task)
  }
  queue.start()
  return queue.onIdle()
}
