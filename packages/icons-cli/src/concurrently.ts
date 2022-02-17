import PQueue from 'p-queue'

export function concurrently(tasks: (() => Promise<any>)[]) {
  const queue = new PQueue({ concurrency: 3 })
  for (const task of tasks) {
    void queue.add(task)
  }
  queue.start()
  return queue.onIdle()
}
