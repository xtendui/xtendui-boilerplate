import { Xt } from 'xtend-ui'
import 'xtend-ui/src/core/overlay'
import 'xtend-ui/src/core/ajax'
import 'xtend-ui/src/core/smooth'

/**
 * favicon
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

/**
 * ajax
 */

Xt.mount.push({
  matches: 'html',
  mount: object => {
    let self = new Xt.Ajax(object, {
      query: '.site_wrapper',
    })

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})

/**
 * smooth
 */

Xt.mount.push({
  matches: 'html',
  mount: () => {
    let self = new Xt.Smooth(document.scrollingElement, {})

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
