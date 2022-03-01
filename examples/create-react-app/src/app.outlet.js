import { createStyles } from '@peanut-ui/styles'

const getStyles = createStyles(() => ({
  wrapper: {
    padding: '20px',
    backgroundColor: '$color.brand.100',
  },

  text: {
    color: '$color.brand.200',
    _hover: {
      color: '$color.brand.300',
    },
  },
}))

function app() {
  const { classes } = getStyles({}, 'badge')

  return (
    <div className={classes.wrapper}>
      <div className={classes.text}>Running...</div>
    </div>
  )
}

export default app
