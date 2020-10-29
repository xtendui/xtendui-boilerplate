/**
 * styles
 */

import '../css/theme.css'

/**
 * scripts
 */

import 'xtendui'
import 'xtendui/src/core/toggle'
import 'xtendui/src/core/drop'

/**
 * favicon dark
 */

const changeMq = () => {
  const colorSchemeMq = window.matchMedia('(prefers-color-scheme: dark)')
  const favicon = document.querySelector('#favicon')
  const faviconDark = document.querySelector('#favicon-dark')
  if (colorSchemeMq.matches) {
    favicon.remove()
    document.head.append(faviconDark)
  } else {
    document.head.append(favicon)
    faviconDark.remove()
  }
}

changeMq()
