import { createStyles } from '../src'

describe('@peanut-ui/peanut-ui-styles/create-styles', () => {
  test('should convert shallow objects into class objects', () => {
    const getStyles = createStyles(() => ({
      wrapper: {
        backgroundColor: '$color.brand.100',
        paddingTop: '$space.100',
      },
      text: {
        color: '$color.brand.100',
      },
    }))

    expect(getStyles()).toEqual({
      classes: {
        text: 'css-d090gn',
        wrapper: 'css-154rb2q',
      },
      cx: expect.any(Function),
    })
  })

  test('should convert deep objects into class objects', () => {
    const getStyles = createStyles(() => ({
      wrapper: {
        backgroundColor: '$color.brand.100',
        paddingTop: '$space.100',
      },
      text: {
        color: '$color.brand.100',
        _hover: {
          color: '$color.brand.200',
        },
      },
    }))

    expect(getStyles()).toEqual({
      classes: {
        text: 'css-18cozed',
        wrapper: 'css-154rb2q',
      },
      cx: expect.any(Function),
    })
  })

  test('should create or check match snapshot', () => {
    const getStyles = createStyles(() => ({
      wrapper: {
        backgroundColor: '$color.brand.100',
        paddingTop: '$space.100',
      },
      text: {
        color: '$color.brand.100',
      },
    }))

    expect(getStyles()).toMatchSnapshot()
  })
})
