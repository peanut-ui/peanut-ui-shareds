import { css, cx } from '@emotion/css'
import { isObject, isFunction } from '@chakra-ui/utils'
import { cssProperties, cssPseudoProperties, allCssProperties } from './utils/css-property.util'
import { isTokenVariable, toCssVariable } from './utils/css-variable.util'

const mergeCssClass = (cx, classes, prefix) => {
  return Object.keys(classes).reduce((previous, current) => {
    previous[current] = cx(classes[current], prefix ? `${prefix}-${current}` : null)

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

export const createStyles = (cssObject) => {
  const getCssObject = isFunction(cssObject) ? cssObject : () => cssObject

  const getStyles = (params, prefix) => {
    const cssObject = getCssObject(params)
    const classes = entriesCssObject(
      Object.keys(cssObject).map((key) => {
        const resolveStyles = (cssObject) => {
          let stylesComputed = {}

          for (let [key, value] of Object.entries(cssObject)) {
            if (key in allCssProperties) {
              if (key in cssProperties) key = cssProperties[key]
              if (key in cssPseudoProperties) key = cssPseudoProperties[key]
              if (isObject(value)) {
                stylesComputed[key] = resolveStyles(value)
              } else {
                if (isTokenVariable(value)) {
                  const { reference } = toCssVariable(value, 'peanut')
                  stylesComputed[key] = reference
                } else stylesComputed[key] = value
              }
            } else delete stylesComputed[key]
          }

          return stylesComputed
        }

        const stylesMerged = cx(css(resolveStyles(cssObject[key])))

        return [key, stylesMerged]
      })
    )

    return { classes: mergeCssClass(cx, classes, prefix), cx }
  }

  return getStyles
}
