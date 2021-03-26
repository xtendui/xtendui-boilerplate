import '../css/app.css'

import { Xt } from 'xtendui'
import 'xtendui/src/core/usability'
import 'xtendui/src/core/drop'
import gsap from 'gsap'
gsap.config({ force3D: false }) // smoother pixels animations

/**
 * animation
 */

// accessibility

if (matchMedia('(prefers-reduced-motion: reduce), (update: slow)').matches) {
  // instant animations
  gsap.globalTimeline.timeScale(1000)
  // instant interactions
  Xt.durationTimescale = 1000
  // double auto time
  Xt.autoTimescale = 0.5
}

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
