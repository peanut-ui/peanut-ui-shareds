export const extendThemes = (oldCssVariable, newCssVariable) => {
  const cssVariable = Object.assign(oldCssVariable.cssVariable, newCssVariable.cssVariable)
  const cssMap = Object.assign(oldCssVariable.cssMap, newCssVariable.cssMap)

  return { cssVariable, cssMap }
}
