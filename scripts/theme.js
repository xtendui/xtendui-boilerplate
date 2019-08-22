import {Xt} from 'xtend-library'
import {Ajax} from 'xtend-library/src/core/ajax/ajax'
import {Smooth} from 'xtend-library/src/core/smooth/smooth'
import {Scroll} from 'xtend-library/src/core/scroll/scroll'
import {Overlay} from 'xtend-library/src/core/overlay/overlay'

import {TweenMax} from 'gsap/TweenMax'

/**
 * ajax
 */

Xt.mount.push({
  matches: 'html',
  fnc: function mount(object) {

    let self = new Ajax(object, {
      "query": ".site_wrapper",
    });

    // unmount

    return function unmount() {
      self.destroy();
      self = null;
    };

  }
});

/**
 * smooth
 */

Xt.mount.push({
  matches: 'html',
  fnc: function mount(object) {

    let self = new Smooth(document.scrollingElement, {});

    // unmount

    return function unmount() {
      self.destroy();
      self = null;
    };

  }
});

/**
 * .header
 */

Xt.mount.push({
  matches: '.header',
  fnc: function mount(object) {

    let parallax = object;

    let self = new Scroll(parallax, {
      "sticky": "fixed",
      "end": 350
    });

    // event

    for (let el of self.elements) {

      el.addEventListener('change.xt.scroll', function (e) {
        TweenMax.set(el, {opacity: self.detail.ratioInverse});
      });

    }

    // example external event

    let exampleExternalEvent = function () {
      console.debug('this event gets removed on unmount', self.object);
    }

    window.addEventListener('scroll', exampleExternalEvent);

    // unmount

    return function unmount() {
      self.destroy();
      self = null;
      window.removeEventListener('scroll', exampleExternalEvent);
    };

  }
});

/**
 * .footer
 */

Xt.mount.push({
  matches: '.footer',
  fnc: function mount(object) {

    let parallax = object;

    let self = new Scroll(parallax, {
      "sticky": true,
      "start": "125%"
    });

    // event

    for (let el of self.elements) {

      el.addEventListener('change.xt.scroll', function (e) {
        TweenMax.set(el, {opacity: self.detail.ratio});
      });

    }

    // unmount

    return function unmount() {
      self.destroy();
      self = null;
    };

  }
});
