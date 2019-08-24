import {Xt} from 'xtend-library'
import {TweenMax} from 'gsap/TweenMax'

import 'xtend-library/src/core/ajax/ajax.js'
import 'xtend-library/src/core/smooth/smooth.js'
import 'xtend-library/src/core/scroll/scroll.js'
import 'xtend-library/src/core/overlay/overlay.js'
import 'xtend-theme/src/extensions/test/test.js' // example overrided file in xtend-theme

/**
 * ajax
 */

Xt.mount.push({
  matches: 'html',
  fnc: function mount(object) {

    let self = new Xt.Ajax(object, {
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

    let self = new Xt.Smooth(document.scrollingElement, {});

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

    let self = new Xt.Scroll(parallax, {
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

    let self = new Xt.Scroll(parallax, {
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
