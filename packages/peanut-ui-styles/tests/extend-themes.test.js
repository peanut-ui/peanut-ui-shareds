import { extendThemes, createThemes } from '../src'

const defaultTheme = createThemes({ color: { 100: 'blue', 200: 'green' } })
const overrideTheme = createThemes({ color: { 100: 'azure' }, space: { 100: '20px' } })

describe('@peanut-ui/peanut-ui-styles/extend-themes', () => {
  test('should merges theme object', () => {
    const extendTheme = extendThemes(defaultTheme, overrideTheme)

    expect(extendTheme).toMatchObject({
      cssMap: {
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
      cssVariable: {
        '--peanut-color-100': 'azure',
        '--peanut-color-200': 'green',
        '--peanut-space-100': '20px',
      },
    })
  })

  test('create snapshot', () => {
    const extendTheme = extendThemes(defaultTheme, overrideTheme)

    expect(extendTheme).toMatchSnapshot()
  })
})
