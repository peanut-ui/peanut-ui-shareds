import { isObject } from '@chakra-ui/utils'
import { toCssVariable } from './utils/css-variable.util'

export const createThemes = (tokenObject) => {
  let cssVariable = {}
  let cssMap = {}
  let referenceKeys = []

  const resolveThemes = (tokenObject) => {
    for (let [key, value] of Object.entries(tokenObject)) {
      if (isObject(value)) {
        referenceKeys.push(key)
        resolveThemes(value)
      } else {
        const keys = referenceKeys.join('.').concat('.', key)
        const { variable, reference } = toCssVariable(keys, 'peanut')

        cssVariable[variable] = value
        cssMap[keys] = { value, variable, reference }
      }
    }

    referenceKeys = []
  }

  resolveThemes(tokenObject)

  return { cssVariable, cssMap }
}
