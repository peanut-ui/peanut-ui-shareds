const replaceString = (value, newValue, search) => value.replace(search, newValue)

const toVariableReference = (value, prefix) => {
  return `var(${replaceString(
    `--${[prefix, replaceString(value, '-', /\./g)].filter(Boolean).join('-')}`,
    '-',
    /\./g
  )})`
}

const toVariableDefinition = (value, prefix = '') => {
  return `--${replaceString(
    [prefix, replaceString(value, '-', /\./g)].filter(Boolean).join('-'),
    '-',
    /\./g
  )}`
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
