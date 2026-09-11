import { describe, expect, it } from 'vitest'
import { concurrently } from './concurrently.ts'

describe('concurrently', () => {
  it('runs at most three tasks concurrently', async () => {
    let activeTasks = 0
    let maxActiveTasks = 0
    let releaseTasks: () => void = () => undefined
    const tasksCanFinish = new Promise<void>((resolve) => {
      releaseTasks = resolve
    })

    const tasks = Array.from({ length: 6 }, () => async () => {
      activeTasks += 1
      maxActiveTasks = Math.max(maxActiveTasks, activeTasks)
      await tasksCanFinish
      activeTasks -= 1
    })

    const completion = concurrently(tasks)
    expect(activeTasks).toBe(3)

    releaseTasks()
    await completion

    expect(maxActiveTasks).toBe(3)
    expect(activeTasks).toBe(0)
  })

  it('accepts an empty task list', async () => {
    await expect(concurrently([])).resolves.toBeUndefined()
  })
})
