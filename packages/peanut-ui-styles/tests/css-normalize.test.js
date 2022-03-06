import { cssNormalize } from '../src'

describe('@peanut-ui/peanut-ui-styles/css-normalize', () => {
  test('create snapshot', () => {
    expect(cssNormalize()).toMatchSnapshot()
  })
})
