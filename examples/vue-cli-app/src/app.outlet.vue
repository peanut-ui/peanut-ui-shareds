<template>
  <div :class="classes.wrapper">
    <div :class="classes.text">Running...</div>
  </div>
</template>

<script>
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

export default {
  name: 'AppOutlet',
  computed: {
    classes: () => {
      const { classes } = getStyles({}, 'badge')

      return classes
    },
  },
}
</script>
