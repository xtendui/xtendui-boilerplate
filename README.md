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

### Css Resolve

Add this to **less options** to resolve less urls with `xtend-library/`:

```jsx
// resolve xtend-library import less
paths: [path.resolve(__dirname, './dist'), path.resolve(__dirname, './node_modules')],
```

### Js Resolve

Add this to **babel options** to resolve js urls with `xtend-library/`:

```jsx
const path = require('path')

module.exports = {
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          // resolve xtend-library import js
          'xtend-library': [path.resolve(__dirname, './dist/assets/xtend-library'), path.resolve(__dirname, './node_modules/xtend-library')],
        },
      },
    ],
  ],
}
```

### Css

You need to import the **reset** file as first import:

```less
@import '/src/xtend-reset.less'; // always first loaded
```

Then you can import the components you need as described in the docs, just be sure to import the library as reference first: `@import (reference) '/src/xtend-core.less';`.

Or just import all core/extensions/addons as needed:

```less
@import '/src/xtend-core.less';
@import '/src/xtend-extensions.less';
@import '/src/xtend-addons.less';
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
import '/src/polyfill.js'
import { Xt } from 'xtend-library'
```

Then you can import the components you need as described in the docs.

Or just import all core/extensions/addons as needed:

```jsx
import '/src/xtend-core.js'
import '/src/xtend-extensions.js'
import '/src/xtend-addons.js'
```

### Gsap

This library in the demos uses [gsap](https://github.com/greensock/GSAP) and [bezier-easing](https://github.com/gre/bezier-easing) for javascript animations.

```
$ npm install --save gsap bezier-easing
```

## Copyright

Licensed under [MIT license](https://github.com/minimit/xtend-library/blob/master/LICENSE).
