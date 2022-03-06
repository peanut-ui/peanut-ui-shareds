/**
 * @desc function for converting css variables into variables reference format and adding a prefix.
 * @param {string} value
 * @param {string} prefix
 * @return {object}
 */

const toReferenceVariable = (value, prefix) => {
  const name = value.replace(/\./g, '-')

  return `var(${`--${[prefix, name].filter(Boolean).join('-')}`.replace(/\./g, '-')})`
}

/**
 * @desc function for converting css variables into variables definition format and adding a prefix.
 * @param {string} value
 * @param {string} prefix
 * @return {object}
 */

const toDefinitionVariable = (value, prefix) => {
  const name = value.replace(/\./g, '-')

  return `--${[prefix, name].filter(Boolean).join('-').replace(/\./g, '-')}`
}

/**
 * @desc function for generating css variables into variable definition and reference.
 * @param {string} value
 * @param {string} prefix
 * @return {object}
 */

export const toCssVariable = (value, prefix) => {
  const name = isTokenVariable(value) ? value.substring(1) : value

  return {
    variable: toDefinitionVariable(name, prefix),
    reference: toReferenceVariable(name, prefix),
  }
}

/**
 * @desc function for check if a value is a token variable.
 * @param {string} value
 * @return {boolean}
 */

export const isTokenVariable = (value) => {
  return value.charAt(0) === '$' && !value.includes('$', 1)
}
