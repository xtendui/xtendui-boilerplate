import 'core-js'
import 'regenerator-runtime/runtime'
import 'xtend-library/src/polyfill.js'
import { Xt } from 'xtend-library'
import 'xtend-library/src/xtend-core.js'
import 'xtend-library/src/extensions/ajax/ajax.js'
import 'xtend-library/src/extensions/smooth/smooth.js'
import 'xtend-library/src/extensions/scroll/scroll.js'
import 'xtend-library/src/extensions/sticky/sticky.js'
import 'xtend-library/src/addons/test.js' // example override file: check console.debug
import gsap from 'gsap'

/**
 * ajax
 */

Xt.mount.push({
  matches: 'html',
  mount: function(object) {
    let self = new Xt.Ajax(object, {
      query: '.site_wrapper',
    })

    // unmount

    const unmount = function() {
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
  mount: function(object) {
    let self = new Xt.Smooth(document.scrollingElement, {})

    // unmount

    const unmount = function() {
      self.destroy()
      self = null
    }
    return unmount
  },
})

/**
 * .header
 */

Xt.mount.push({
  matches: '.header',
  mount: function(object) {
    let self = new Xt.Sticky(object, {
      sticky: 'fixed',
      hide: 'down'
    })

    // unmount

    const unmount = function() {
      self.destroy()
      self = null
    }
    return unmount
  },
})

/**
 * .footer
 */

Xt.mount.push({
  matches: '.footer',
  mount: function(object) {
    // init

    let self = new Xt.Scroll(object, {
      sticky: true,
      start: '125%',
    })

    // change

    const eventChange = function() {
      const el = this
      gsap.set(el, { opacity: self.detail.ratio, scale: 0.9 + 0.1 * self.detail.ratio })
    }

    for (const el of self.elements) {
      el.addEventListener('change.xt', eventChange)
    }

    // unmount

    const unmount = function() {
      self.destroy()
      self = null
    }
    return unmount
  },
})
