import { css, cx } from '@emotion/css'
import { isObject, isFunction } from '@chakra-ui/utils'
import { isTokenVariable, toCssVariable } from './utils/css-variable.util'
import { cssProperties } from './utils/css-property.util'

/**
 * @desc function for merging class names and adding a prefix.
 * @param {function} cx
 * @param {object} classes
 * @param {string} prefix
 * @return {object}
 */

const mergesCssClass = (cx, classes, prefix) => {
  return Object.keys(classes).reduce((previous, current) => {
    previous[current] = cx(classes[current], prefix ? `peanut-${prefix}-${current}` : null)

    return previous
  }, {})
}

/**
 * @desc function for converting an array of class names into objects.
 * @param {array} values
 * @return {object}
 */

const entriesCssObject = (values) => {
  const result = {}

  Object.keys(values).forEach((index) => {
    const [key, value] = values[index]

    result[key] = value
  })

  return result
}

/**
 * @desc function for creating styles and generating them into unique class names.
 * @param {object} values
 * @return {function}
 */

export const createStyles = (values) => {
  const getValues = isFunction(values) ? values : () => values

  /**
   * @desc function for accessing class names data.
   * @param {object} params
   * @param {string} prefix
   * @return {object}
   */

  const getStyles = (params, prefix) => {
    const values = getValues(params)
    const classes = entriesCssObject(
      Object.keys(values).map((key) => {
        const resolveStyles = (values) => {
          let computed = {}

          for (let [key, value] of Object.entries(values)) {
            if (key in cssProperties) {
              if (key in cssProperties) key = cssProperties[key]
              if (isObject(value)) {
                computed[key] = resolveStyles(value)
              } else {
                if (isTokenVariable(value)) {
                  const { reference } = toCssVariable(value, 'peanut')
                  computed[key] = reference
                } else computed[key] = value
              }
            } else delete computed[key]
          }

          return computed
        }

        const merged = cx(css(resolveStyles(values[key])))

        return [key, merged]
      })
    )

    return { classes: mergesCssClass(cx, classes, prefix), cx }
  }

  return getStyles
}
