import { injectGlobal } from '@emotion/css'

const toKebabCase = (value) => value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)

export const cssGlobal = (cssVariable) => {
  let cssMerged = ''

  for (let [key, value] of Object.entries(cssVariable)) {
    let cssComputed = ''

    Object.keys(value).map((key) => (cssComputed += `${toKebabCase(key)}:${value[key]};`))
    cssMerged += `${key}{${cssComputed}}`
  }

  injectGlobal`${cssMerged}`
}
