import { createKeyframes } from '../src'

const animation = createKeyframes({
  '0%': { transform: 'scale(1)' },
  '100%': { transform: 'scale(1.5)' },
})

describe('@peanut-ui/peanut-ui-styles/create-keyframes', () => {
  test('should convert objects into animation class names', () => {
    expect(animation).toEqual('animation-1qbyne4')
  })

  test('should create or check match snapshot', () => {
    expect(animation).toMatchSnapshot()
  })
})
