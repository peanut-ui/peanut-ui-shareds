import { css, cx } from '@emotion/css'
import { isObject, isFunction } from '@chakra-ui/utils'
import { cssProperties, cssPseudoProperties, allCssProperties } from './utils/css-property.util'
import { isTokenVariable, toCssVariable } from './utils/css-variable.util'

const mergeCssClass = (cx, classes, prefix) => {
  return Object.keys(classes).reduce((previous, current) => {
    previous[current] = cx(classes[current], prefix ? `peanut-${prefix}-${current}` : null)

    return previous
  }, {})
}

const entriesCssObject = (entries) => {
  const result = {}

  Object.keys(entries).forEach((index) => {
    const [key, value] = entries[index]

    result[key] = value
  })

  return result
}

const resolveStyles = (cssObject) => {
  let computedStyles = {}
  let computedCssObject = cssObject

  for (let key in computedCssObject) {
    let value = computedCssObject[key]

    if (key in allCssProperties) {
      if (key in cssProperties) key = cssProperties[key]
      if (key in cssPseudoProperties) key = cssPseudoProperties[key]
      if (isObject(value)) {
        computedStyles[key] = resolveStyles(value)
      } else {
        if (isTokenVariable(value)) computedStyles[key] = toCssVariable(value, 'peanut').reference
        else computedStyles[key] = value
      }
    } else delete computedStyles[key]
  }

  return computedStyles
}

export const createStyles = (cssObject) => {
  const getCssObject = isFunction(cssObject) ? cssObject : () => cssObject

  const getStyles = (params, prefix) => {
    const cssObject = getCssObject(params)
    const classes = entriesCssObject(
      Object.keys(cssObject).map((key) => {
        const mergedStyles = cx(css(resolveStyles(cssObject[key])))

        return [key, mergedStyles]
      })
    )

    return { classes: mergeCssClass(cx, classes, prefix), cx }
  }

  return getStyles
}
