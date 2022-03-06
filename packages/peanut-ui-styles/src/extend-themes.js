/**
 * @desc function for merging or extending themes.
 * @param {object} values
 * @param {object} override
 * @return {object}
 */

export const extendThemes = (values, override) => {
  const variables = Object.assign({}, values?.variables, override?.variables)
  const maps = Object.assign({}, values?.maps, override?.maps)

  return { variables, maps }
}
