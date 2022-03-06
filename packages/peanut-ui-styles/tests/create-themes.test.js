import { createThemes } from '../src'

describe('@peanut-ui/peanut-ui-styles/create-themes', () => {
  test('should convert shallow object into map and variable object', () => {
    const theme = createThemes({
      color: {
        100: 'blue',
      },
      space: {
        100: '10px',
      },
    })

    expect(theme).toEqual({
      cssMap: {
        'color.100': {
          reference: 'var(--peanut-color-100)',
          value: 'blue',
          variable: '--peanut-color-100',
        },
        'space.100': {
          reference: 'var(--peanut-space-100)',
          value: '10px',
          variable: '--peanut-space-100',
        },
      },
      cssVariable: {
        '--peanut-color-100': 'blue',
        '--peanut-space-100': '10px',
      },
    })
  })

  test('should convert deep object into map and variable object', () => {
    const theme = createThemes({
      color: {
        brand: {
          primary: {
            100: 'blue',
          },
        },
      },
      space: {
        100: '10px',
      },
    })

    expect(theme).toEqual({
      cssMap: {
        'color.brand.primary.100': {
          reference: 'var(--peanut-color-brand-primary-100)',
          value: 'blue',
          variable: '--peanut-color-brand-primary-100',
        },
        'space.100': {
          reference: 'var(--peanut-space-100)',
          value: '10px',
          variable: '--peanut-space-100',
        },
      },
      cssVariable: {
        '--peanut-color-brand-primary-100': 'blue',
        '--peanut-space-100': '10px',
      },
    })
  })

  test('should create or check matches snapshot', () => {
    const theme = createThemes({
      color: {
        brand: {
          100: 'blue',
        },
      },
      space: {
        100: '10px',
      },
    })

    expect(theme).toMatchSnapshot()
  })
})
