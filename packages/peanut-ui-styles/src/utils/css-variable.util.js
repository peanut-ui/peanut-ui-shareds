const escape = (value) => {
  return value.toString().replace(/\s+/g, '-').replace('.', '-')
}

const toVariableReference = (value, prefix) => {
  return `var(${escape(`--${[prefix, escape(value.substring(1))].filter(Boolean).join('-')}`)})`
}

const toVariableDefinition = (value, prefix = '') => {
  return `--${[prefix, escape(value)].filter(Boolean).join('-')}`
}

export const toCssVariable = (value, prefix) => {
  return {
    variable: toVariableDefinition(value, prefix),
    reference: toVariableReference(value, prefix),
  }
}

export const isTokenVariable = (value) => {
  return value.charAt(0) === '$' && !value.includes('$', 1)
}
