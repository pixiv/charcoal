export async function concurrently(tasks: (() => Promise<unknown>)[]) {
  let nextTaskIndex = 0

  async function worker() {
    while (nextTaskIndex < tasks.length) {
      const task = tasks[nextTaskIndex]
      nextTaskIndex += 1
      await task()
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(3, tasks.length) }, () => worker()),
  )
}
