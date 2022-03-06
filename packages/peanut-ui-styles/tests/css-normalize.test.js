import { cssNormalize } from '../src'

describe('@peanut-ui/peanut-ui-styles/css-normalize', () => {
  test('should create or check match snapshot', () => {
    expect(cssNormalize()).toMatchSnapshot()
  })
})
