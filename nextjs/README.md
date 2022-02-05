# Nextjs Boilerplate for [Xtend UI](https://github.com/xtendui/xtendui)

## Compilation

* Install required npm packages with `npm install`
* Use `npm run build` to build for **production**
* Use `npm run dev` to build and serve for **development**
* Use `npm run start` to start server
* Use `npm run lint` to lint

## BUGS

* Nextjs has problems with [transpiling inside `node_modules`](https://github.com/vercel/next.js/discussions/32223) and with [using `.browserslistrc`](https://github.com/vercel/next.js/discussions/12826), so there's no babel in this code.