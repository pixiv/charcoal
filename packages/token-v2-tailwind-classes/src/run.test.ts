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

  test('finds a color mapping from a bare Figma variable name', () => {
    expect(JSON.parse(run(['--token', 'text/secondary/default']))).toEqual([
      expect.objectContaining({
        tokenPath: 'color.text.secondary.default',
        figmaVariables: [
          { collection: 'color', name: 'text/secondary/default' },
        ],
        classCandidates: [
          expect.objectContaining({
            className: 'text-text-secondary',
            utility: 'textColor',
          }),
        ],
      }),
    ])
  })

  test('finds a mapping from a collection-qualified Figma path', () => {
    expect(JSON.parse(run(['--token', 'color/text/default']))).toEqual([
      expect.objectContaining({
        tokenPath: 'color.text.default',
        figmaVariables: [{ collection: 'color', name: 'text/default' }],
      }),
    ])
  })

  test('derives Figma variables from every source token', () => {
    const mappings = JSON.parse(run([]))

    for (const mapping of mappings) {
      expect(mapping.figmaVariables).toEqual(
        mapping.sourceTokens.map(({ tokenPath }: { tokenPath: string }) => {
          const [collection, ...path] = tokenPath.split('.')
          return { collection, name: path.join('/') }
        }),
      )
    }
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
