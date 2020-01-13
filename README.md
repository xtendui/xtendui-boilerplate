# WIP pre 1.0 version: api changing fast

## Installation

Download the [latest release](https://github.com/minimit/xtend-theme-vanilla/releases/latest).

## Compilation

* Install required npm packages with `npm install`
* Use `npm run build` to build with **webpack**
* Use `npm run dev` to build and watch with **webpack**
* Use `npm run build:gulp` to build with **gulp**
* Use `npm run dev:gulp` to build and watch with **gulp**
* Use `npm run start` run the webserver with **webpack**

## Usage

This is a boilerplate setup to start a vanilla project with [xtend-library](https://github.com/minimit/xtend-library).

### Webpack

This library is made to be used by [webpack](https://github.com/webpack). In essence you have to setup webpack's resolve to be able to import the scripts and styles from the `node_modules/xtend-library` or from your custom folder if present (`./dist/xtend-library` in this case).

```jsx
  resolve: {
    alias: {
      // resolve xtend-library js and less
      'xtend-library': [
        path.resolve(__dirname, './dist/xtend-library'),
        path.resolve(__dirname, './node_modules/xtend-library'),
      ],
    },
  },
  module: {
    unsafeCache: false,
```

With this setup you can **fork** css and js files inside `./dist/xtend-library` and the webpack resolver will load files from it or fallback to `./node_modules/xtend-library`.

### Css

You need to import the **reset** file as first import:

```less
@import '~xtend-library/src/xtend-reset.less'; // always first loaded
```

Then you can import the components you need as described in the docs, just be sure to import the library as reference first: `@import (reference) '~xtend-library/src/xtend-core.less';`.

Or just import all core/extensions/addons as needed:

```less
@import '~xtend-library/src/xtend-core.less';
@import '~xtend-library/src/xtend-extensions.less';
@import '~xtend-library/src/xtend-addons.less';
```

### Js

You need to import [core-js](https://github.com/zloirock/core-js):

```Shell
npm install --save core-js regenerator-runtime
```

```jsx
import 'core-js'
import 'regenerator-runtime/runtime'
```

You need to import the **polyfills** files and the **main** js:

```jsx
import 'xtend-library/src/polyfill.js'
import { Xt } from 'xtend-library'
```

Then you can import the components you need as described in the docs.

Or just import all core/extensions/addons as needed:

```jsx
import 'xtend-library/src/xtend-core.js'
import 'xtend-library/src/xtend-extensions.js'
import 'xtend-library/src/xtend-addons.js'
```

### Gsap

This library in the demos uses [gsap](https://github.com/greensock/GreenSock-JS) and [bezier-easing](https://github.com/gre/bezier-easing) for javascript animations.

With npm install and import [gsap](https://www.npmjs.com/package/gsap) and [bezier-easing](https://www.npmjs.com/package/bezier-easing):

```
$ npm install --save gsap
$ npm install --save bezier-easing
```

And import them:

```
import gsap from 'gsap'
import 'bezier-easing';
```

## Copyright

Licensed under [MIT license](https://github.com/minimit/xtend-library/blob/master/LICENSE).
