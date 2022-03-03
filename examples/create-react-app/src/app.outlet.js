import { createStyles, createThemes, cssGlobal } from '@peanut-ui/styles'

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
    300: '30px',
  },
})

cssGlobal({
  '*': { margin: 0, padding: 0 },
  ':root': theme.cssVariable,
})

const getStyles = createStyles(() => ({
  wrapper: {
    padding: '$spacing.300',
    backgroundColor: '$color.brand.100',
  },

  text: {
    color: '$color.brand.200',
    _hover: {
      color: '$color.brand.300',
    },
  },
}))

const AppOutlet = () => {
  const { classes } = getStyles({}, 'peanut-badge')

  return (
    <div className={classes.wrapper}>
      <div className={classes.text}>Running...</div>
    </div>
  )
}

export default AppOutlet
