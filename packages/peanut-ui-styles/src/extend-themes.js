export const extendThemes = (themeObject, themeOverrideObject) => {
  const cssVariable = Object.assign({}, themeObject?.cssVariable, themeOverrideObject?.cssVariable)
  const cssMap = Object.assign({}, themeObject?.cssMap, themeOverrideObject?.cssMap)

  return { cssVariable, cssMap }
}
