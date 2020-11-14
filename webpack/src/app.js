import '../css/app.css'

import 'xtendui'
import 'xtendui/src/core/drop'
import gsap from 'gsap'

// no force3d

gsap.config({ force3D: false })

// instant animations accessibility

if (Xt.noDuration) {
  gsap.globalTimeline.timeScale(1000)
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
