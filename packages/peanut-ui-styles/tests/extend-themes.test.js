import { extendThemes, createThemes } from '../src'

const theme = createThemes({
  color: {
    100: 'blue',
    200: 'green',
  },
})

const override = createThemes({
  color: {
    100: 'azure',
  },
  space: {
    100: '20px',
  },
})

describe('@peanut-ui/peanut-ui-styles/extend-themes', () => {
  test('should merge into map and variable objects', () => {
    const merged = extendThemes(theme, override)

    expect(merged).toEqual({
      maps: {
        'color.100': {
          reference: 'var(--peanut-color-100)',
          value: 'azure',
          variable: '--peanut-color-100',
        },
        'color.200': {
          reference: 'var(--peanut-color-200)',
          value: 'green',
          variable: '--peanut-color-200',
        },
        'space.100': {
          reference: 'var(--peanut-space-100)',
          value: '20px',
          variable: '--peanut-space-100',
        },
      },
      variables: {
        '--peanut-color-100': 'azure',
        '--peanut-color-200': 'green',
        '--peanut-space-100': '20px',
      },
    })
  })

  test('should create or check match snapshot', () => {
    const merged = extendThemes(theme, override)

    expect(merged).toMatchSnapshot()
  })
})
