import { injectGlobal } from '@emotion/css'

export const cssGlobal = (cssVariable) => {
  let cssMerged = ''

  for (let [key, value] of Object.entries(cssVariable)) {
    let cssComputed = ''

    Object.keys(value).map((key) => (cssComputed += `${key}:${value[key]};`))
    cssMerged += `${key}{${cssComputed}}`
  }

  injectGlobal`${cssMerged}`
}
