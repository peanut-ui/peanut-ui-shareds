const replaceString = (value, search) => {
  return value.toString().replace(/\./g, search)
}

const toVariableReference = (value, prefix) => {
  return `var(${replaceString(
    `--${[prefix, replaceString(value, '-')].filter(Boolean).join('-')}`,
    '-'
  )})`
}

const toVariableDefinition = (value, prefix = '') => {
  return `--${replaceString([prefix, replaceString(value, '-')].filter(Boolean).join('-'), '-')}`
}

export const toCssVariable = (value, prefix) => {
  const name = isTokenVariable(value) ? value.substring(1) : value

  return {
    variable: toVariableDefinition(name, prefix),
    reference: toVariableReference(name, prefix),
  }
}

export const isTokenVariable = (value) => {
  return value.charAt(0) === '$' && !value.includes('$', 1)
}
