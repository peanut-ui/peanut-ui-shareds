import { injectGlobal } from '@emotion/css'

const toKebabCase = (value) => value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
const replaceString = (value, newValue, search) => value.replace(search, newValue)

export const cssGlobal = (cssObject) => {
  let cssMerged = ''

  for (let [key, value] of Object.entries(cssObject)) {
    let cssComputed = ''

    Object.keys(value).map((key) => (cssComputed += `${toKebabCase(key)}:${value[key]};`))
    cssMerged += replaceString(`${key}{${cssComputed}}`, '', /\s+/g)
  }

  injectGlobal`${cssMerged}`

  return cssMerged
}
