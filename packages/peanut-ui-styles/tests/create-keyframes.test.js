import { createKeyframes } from '../src'

describe('@peanut-ui/peanut-ui-styles/create-keyframes', () => {
  test('should convert css object into css animation', () => {
    const bounceAnimation = createKeyframes({
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

    expect(bounceAnimation).toEqual('animation-gbvlk7')
  })

  test('create snapshot', () => {
    const scaleUpAnimation = createKeyframes({
      '0%': { transform: 'scale(1)' },
      '100%': { transform: 'scale(1.5)' },
    })

    expect(scaleUpAnimation).toMatchSnapshot()
  })
})
