import { cssGlobal } from '../src'

describe('@peanut-ui/peanut-ui-styles/css-global', () => {
  test('create snapshot', () => {
    expect(cssGlobal({ '*': { margin: 0, padding: 0 } })).toMatchSnapshot()
  })
})
