import 'core-js'
import 'regenerator-runtime/runtime'
import {TweenMax} from 'gsap/TweenMax'
import {Xt} from 'xtend-library'
import 'xtend-library/src/xtend-core.js'
import 'xtend-library/src/extensions/test/test.js' // example override file

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

    let self = new Xt.Scroll(object, {
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

    let self = new Xt.Scroll(object, {
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
