import { run } from './run'

describe('charcoal-token-v2-classes', () => {
  test('formats filtered JSON output', () => {
    expect(
      run([
        '--format',
        'json',
        '--token',
        'color.container.primary.default',
        '--include-css-variable',
        '--include-theme-value',
      ]),
    ).toMatchSnapshot()
  })

  test('formats filtered Markdown output', () => {
    expect(
      run([
        '--format',
        'markdown',
        '--token',
        'color.icon.default',
        '--include-css-variable',
      ]),
    ).toMatchSnapshot()
  })

  test('filters class candidates by utility', () => {
    expect(
      JSON.parse(run(['--token', 'color.icon.default', '--utility', 'stroke'])),
    ).toMatchObject([
      {
        tokenPath: 'color.icon.default',
        classCandidates: [{ className: 'stroke-icon', utility: 'stroke' }],
      },
    ])
  })

  test('normalizes slash-delimited token paths', () => {
    expect(
      JSON.parse(
        run([
          '--token',
          'color/container/primary/default',
          '--utility',
          'backgroundColor',
        ]),
      ),
    ).toMatchObject([
      {
        tokenPath: 'color.container.primary.default',
        classCandidates: [
          {
            className: 'bg-container-primary',
            utility: 'backgroundColor',
          },
        ],
      },
    ])
  })

  test('finds a typography class from its line-height token', () => {
    expect(
      JSON.parse(
        run([
          '--token',
          'text.line-height.heading.s',
          '--utility',
          'fontSize',
          '--include-css-variable',
        ]),
      ),
    ).toMatchObject([
      {
        tokenPath: 'text.font-size.heading.s',
        sourceTokens: [
          { tokenPath: 'text.font-size.heading.s' },
          { tokenPath: 'text.line-height.heading.s' },
        ],
        classCandidates: [
          {
            className: 'text-heading-s',
            utility: 'fontSize',
            cssProperties: ['font-size', 'line-height'],
          },
        ],
      },
    ])
  })

  test('rejects invalid option values', () => {
    expect(() => run(['--format', 'yaml'])).toThrow(
      'Invalid --format value: yaml',
    )
  })

  test('shows command help', () => {
    expect(run(['--help'])).toContain(
      'Usage: charcoal-token-v2-classes [options]',
    )
  })
})
