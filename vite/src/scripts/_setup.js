import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

/* custom easing */

import bezierEasing from 'bezier-easing'

gsap.registerEase('in', progress => {
  const easing = bezierEasing(1, 0, 1, 0.5)
  return easing(progress)
})

gsap.registerEase('out', progress => {
  const easing = bezierEasing(0, 1, 0.5, 1)
  return easing(progress)
})

gsap.registerEase('inOut', progress => {
  const easing = bezierEasing(1, 0, 0, 1)
  return easing(progress)
})

/* animation */

gsap.config({ force3D: false }) // smoother pixels animations

// accessibility

if (matchMedia('(prefers-reduced-motion: reduce), (update: slow)').matches) {
  // instant animations
  gsap.globalTimeline.timeScale(1000)
  // instant interactions
  Xt.durationTimescale = 1000
  // double auto time
  Xt.autoTimescale = 0.5
}

/* ScrollToPlugin fix stop scroll animation on user interaction */

const stopScrolling = () => {
  gsap.killTweensOf(document.scrollingElement)
}

addEventListener('touchstart', stopScrolling)
addEventListener('wheel', stopScrolling)

/* ScrollTrigger fix Xt.mount inside pin items and no refresh on vertical resize */

Xt.ready(() => {
  ScrollTrigger.config({
    // removed resize we trigger it manually
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
  })
  addEventListener('resize', e => {
    Xt.eventDelay({
      event: e,
      prefix: 'xtScrollTriggerRefresh',
      func: () => {
        ScrollTrigger.refresh()
      },
    })
  })
})
