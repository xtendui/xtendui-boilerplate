import { Xt } from 'xtend-library'
import 'xtend-library/src/core/ajax'
import 'xtend-library/src/core/smooth'
import 'xtend-library/src/core/scroll'
import 'xtend-library/src/core/sticky'
import gsap from 'gsap'

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

/**
 * .site_header
 */

Xt.mount.push({
  matches: '.site_header',
  mount: object => {
    let self = new Xt.Sticky(object, {
      sticky: 'fixed',
      hide: 'down',
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
 * .site_footer
 */

Xt.mount.push({
  matches: '.site_footer',
  mount: object => {
    // init

    let self = new Xt.Scroll(object, {
      sticky: true,
      start: '125%',
    })

    // change

    const eventChange = e => {
      const el = e.target
      gsap.set(el, { opacity: self.detail.ratio, scale: 0.9 + 0.1 * self.detail.ratio })
    }

    for (const el of self.elements) {
      el.addEventListener('change.xt', eventChange)
    }

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
