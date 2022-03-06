import { cssGlobal } from '../src'

const styles = {
  '*': {
    margin: 0,
    padding: 0,
  },
}

describe('@peanut-ui/peanut-ui-styles/css-global', () => {
  test('should create or check match snapshot', () => {
    expect(cssGlobal(styles)).toMatchSnapshot()
  })
})
