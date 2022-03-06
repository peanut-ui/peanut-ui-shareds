import { injectGlobal } from '@emotion/css'

const toKebabCase = (value) => value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)

/**
 * @desc function for generating styles and injecting them into global scope.
 * @param {object} values
 * @return {string}
 */

export const cssGlobal = (values) => {
  let merged = ''

  for (let [key, value] of Object.entries(values)) {
    let computed = ''

    Object.keys(value).map((key) => (computed += `${toKebabCase(key)}:${value[key]}`.concat(';')))
    merged += `${key}{${computed}}`.replace(/\s+/g, '')
  }

  injectGlobal`${merged}`

  return merged
}
