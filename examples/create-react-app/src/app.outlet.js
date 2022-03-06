import {
  createStyles,
  createThemes,
  createKeyframes,
  cssGlobal,
  cssNormalize,
  extendThemes,
} from '@peanut-ui/styles'

const theme = createThemes({
  color: {
    brand: {
      100: 'blue',
      200: 'red',
      300: 'green',
    },
  },
  spacing: {
    100: '10px',
    200: '20px',
  },
})

const newTheme = createThemes({
  color: {
    brand: {
      100: 'azure',
      200: 'blueviolet',
    },
  },
  spacing: {
    100: '20px',
    200: '40px',
    300: '60px',
    400: '80px',
  },
  size: {
    100: '10px',
    200: '20px',
  },
})

const extendTheme = extendThemes(theme, newTheme)

cssGlobal({
  '*': { margin: 0, padding: 0 },
  ':root': extendTheme.variables,
})

cssNormalize()

const bounce = createKeyframes({
  'from, 20%, 53%, 80%, to': {
    transform: 'translate3d(0,0,0)',
  },
  '40%, 43%': {
    transform: 'translate3d(0, -30px, 0)',
  },
  '70%': {
    transform: 'translate3d(0, -15px, 0)',
  },
  '90%': {
    transform: 'translate3d(0, -4px, 0)',
  },
})

const getStyles = createStyles(() => ({
  wrapper: {
    padding: '$spacing.300',
    backgroundColor: '$color.brand.100',
  },

  text: {
    color: '$color.brand.200',
    animation: `${bounce} 1s ease infinite`,
    _hover: {
      color: '$color.brand.300',
    },
  },
}))

const AppOutlet = () => {
  const { classes } = getStyles({}, 'badge')

  return (
    <div className={classes.wrapper}>
      <div className={classes.text}>Running...</div>
    </div>
  )
}

export default AppOutlet
