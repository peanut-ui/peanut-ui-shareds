import { isObject } from '@chakra-ui/utils'
import { toCssVariable } from './utils/css-variable.util'

/**
 * @desc function for creating additional themes.
 * @param {object} values
 * @return {object}
 */

export const createThemes = (values) => {
  let variables = {}
  let maps = {}
  let references = []

  const resolveThemes = (values) => {
    for (let [key, value] of Object.entries(values)) {
      if (isObject(value)) {
        references.push(key)
        resolveThemes(value)
      } else {
        const keys = references.join('.').concat('.', key)
        const { variable, reference } = toCssVariable(keys, 'peanut')

        variables[variable] = value
        maps[keys] = { value, variable, reference }
      }
    }

    references = []
  }

  resolveThemes(values)

  return { variables, maps }
}
