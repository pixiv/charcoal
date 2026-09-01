import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { parseBatchInput, runCli } from './cli-core'

const execFileAsync = promisify(execFile)

function createIo(stdin = '') {
  let stdout = ''
  let stderr = ''
  return {
    io: {
      async readStdin() {
        return stdin
      },
      writeStdout(value: string) {
        stdout += value
      },
      writeStderr(value: string) {
        stderr += value
      },
    },
    output() {
      return { stdout, stderr }
    },
  }
}

describe('CLI input and output', () => {
  it('writes only JSON to stdout for valid single and batch requests', async () => {
    const single = createIo()
    expect(
      await runCli(
        ['resolve', 'container/primary/default', '--collection', 'color'],
        single.io,
      ),
    ).toBe(0)
    expect(JSON.parse(single.output().stdout)).toMatchObject({
      schemaVersion: 1,
      status: 'resolved',
    })
    expect(single.output().stderr).toBe('')

    const batch = createIo('{"queries":[{"name":"unknown"},{"name":"m"}]}')
    expect(await runCli(['resolve', '--input', '-'], batch.io)).toBe(0)
    expect(JSON.parse(batch.output().stdout)).toMatchObject({
      schemaVersion: 1,
      results: [{ status: 'not_found' }, { status: 'ambiguous' }],
    })
    expect(batch.output().stderr).toBe('')

    const equalsInput = createIo('{"queries":[{"name":"unknown"}]}')
    expect(await runCli(['resolve', '--input=-'], equalsInput.io)).toBe(0)
    expect(JSON.parse(equalsInput.output().stdout)).toMatchObject({
      results: [{ status: 'not_found' }],
    })
  })

  it('rejects invalid batch input without partial execution', async () => {
    expect(() => parseBatchInput('[]')).toThrow('object with a queries array')
    expect(() => parseBatchInput('{"queries":[{"name":""}]}')).toThrow(
      'Token name must not contain empty path segments.',
    )
    expect(() =>
      parseBatchInput('{"queries":[{"name":"valid","extra":true}]}'),
    ).toThrow('unsupported field')
    expect(() =>
      parseBatchInput('{"queries":[{"name":"valid"},{"name":42}]}'),
    ).toThrow('Each query must be an object with a string name.')

    const io = createIo('{"queries":[{"name":"valid"},{"name":42}]}')
    expect(await runCli(['resolve', '--input', '-'], io.io)).toBe(2)
    expect(io.output()).toEqual({
      stdout: '',
      stderr: expect.stringContaining('Each query must be an object'),
    })
  })

  it('separates domain, input, and internal failures by exit code', async () => {
    const domainFailure = createIo()
    expect(await runCli(['resolve', 'unknown'], domainFailure.io)).toBe(0)
    expect(JSON.parse(domainFailure.output().stdout)).toMatchObject({
      status: 'not_found',
    })

    const invalid = createIo()
    expect(await runCli(['resolve'], invalid.io)).toBe(2)
    expect(invalid.output()).toEqual({
      stdout: '',
      stderr: expect.stringContaining('token name or --input'),
    })

    const internal = createIo()
    expect(
      await runCli(['resolve', 'unknown'], internal.io, () => {
        throw new Error('unexpected failure')
      }),
    ).toBe(1)
    expect(internal.output()).toEqual({
      stdout: '',
      stderr: expect.stringContaining('unexpected failure'),
    })
  })

  it.each([
    ['unknown command', ['search']],
    ['unknown option', ['resolve', '--format', 'json']],
    ['extra positional', ['resolve', 'unknown', 'extra']],
    ['missing option value', ['resolve', '--input']],
    ['input combined with name', ['resolve', 'unknown', '--input', '-']],
    [
      'input combined with property',
      ['resolve', '--input', '-', '--property', 'color'],
    ],
  ])('treats %s as an input error', async (_description, args) => {
    const io = createIo()

    expect(await runCli(args, io.io)).toBe(2)
    expect(io.output().stdout).toBe('')
    expect(io.output().stderr).not.toBe('')
  })

  it('runs the built binary without workspace source imports', async () => {
    const binary = new URL('../dist/cli.js', import.meta.url)
    const { stdout, stderr } = await execFileAsync(process.execPath, [
      binary.pathname,
      'resolve',
      'unknown',
    ])

    expect(JSON.parse(stdout)).toMatchObject({ status: 'not_found' })
    expect(stderr).toBe('')
  })
})
