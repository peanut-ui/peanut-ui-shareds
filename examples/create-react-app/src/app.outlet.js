import { createStyles, createThemes } from '@peanut-ui/styles'

createThemes({
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

const getStyles = createStyles(() => ({
  wrapper: {
    padding: '$spacing.100',
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
  const { classes } = getStyles({}, 'badge')

  return (
    <div className={classes.wrapper}>
      <div className={classes.text}>Running...</div>
    </div>
  )
}

export default AppOutlet
